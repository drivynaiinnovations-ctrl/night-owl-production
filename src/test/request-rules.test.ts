import { describe, expect, it } from 'vitest';
import { requestSchema, validPhoto } from '@/lib/request-schema';
import { business, phoneHref } from '@/config/business';
const request = { full_name:'Test Person',company:'Test Company',phone:'2025550100',email:'test@example.com',service_address:'1 Test Street',city:'Test City',state:'CA',zip:'90210',service_needed:'doors',description:'A commercial door needs adjustment.',urgency:'routine',preferred_date:'',preferred_contact:'email',consent:true,website:'' };
describe('Service request rules',()=>{
 it('accepts all six requested service choices',()=>{for(const service_needed of ['doors','signage','exterior-cleaning','parking-lot-care','multiple','not-sure'])expect(requestSchema.safeParse({...request,service_needed}).success).toBe(true);expect(requestSchema.safeParse({...request,service_needed:'hauling'}).success).toBe(false);});
 it('accepts routine, soon and urgent only',()=>{for(const urgency of ['routine','soon','urgent'])expect(requestSchema.safeParse({...request,urgency}).success).toBe(true);expect(requestSchema.safeParse({...request,urgency:'emergency-guarantee'}).success).toBe(false);});
 it('requires consent before saving a request',()=>{expect(requestSchema.safeParse({...request,consent:false}).success).toBe(false);});
 it('allows only phone or email as contact preference',()=>{expect(requestSchema.safeParse({...request,preferred_contact:'sms'}).success).toBe(false);expect(requestSchema.safeParse({...request,preferred_contact:'phone'}).success).toBe(true);});
 it('uses the verified business contact details',()=>{expect(business.phone).toBe('(240) 539-9609');expect(business.email).toBe('happy@callnightowls.com');expect(phoneHref()).toBe('tel:9083913315');});
 it('rejects non-image and oversized photo uploads',()=>{expect(validPhoto({type:'image/jpeg',size:15*1024*1024})).toBe(true);expect(validPhoto({type:'image/jpeg',size:15*1024*1024+1})).toBe(false);expect(validPhoto({type:'text/html',size:100})).toBe(false);});
 it('rejects a populated spam honeypot',()=>{expect(requestSchema.safeParse({...request,website:'spam'}).success).toBe(false);});
});