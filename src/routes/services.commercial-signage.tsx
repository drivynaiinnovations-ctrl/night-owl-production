import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema } from '@/lib/seo';
export const Route = createFileRoute('/services/commercial-signage')({head:()=>({...pageHead('Commercial Signage','Commercial sign installation, replacement, removal, window graphics, exterior signs, and multi-location rollouts.','/services/commercial-signage'),scripts:[{type:'application/ld+json',children:JSON.stringify(serviceSchema('Commercial Signage','Commercial sign installation, replacement, removal, window graphics, exterior signs, and multi-location rollouts.'))}]}),component:()=> <ServicePage slug="commercial-signage"/>});
