import { z } from 'zod';
const text = (label: string, max = 150) => z.string().trim().min(1, `${label} is required.`).max(max, `${label} is too long.`);
export const serviceChoices = [['doors','Commercial doors'],['signage','Commercial signage'],['exterior-cleaning','Exterior cleaning'],['parking-lot-care','Parking-lot care'],['multiple','Multiple services'],['not-sure','Not sure']] as const;
export const requestSchema = z.object({
 full_name:text('Full name',100), company:text('Company'), phone:z.string().trim().regex(/^\+?[\d\s().-]{7,25}$/, 'Enter a valid phone number.'), email:z.string().trim().email('Enter a valid email address.').max(254),
 service_address:text('Service address',250), city:text('City',100), state:z.string().trim().regex(/^[a-zA-Z]{2}$/, 'Enter a two-letter state code.').transform(v=>v.toUpperCase()), zip:z.string().trim().regex(/^\d{5}(-\d{4})?$/, 'Enter a valid ZIP code.'),
 service_needed:z.enum(['doors','signage','exterior-cleaning','parking-lot-care','multiple','not-sure']), description:text('Description',4000), urgency:z.enum(['routine','soon','urgent']),
 preferred_date:z.string().refine(v=>!v || /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)), 'Enter a valid date.'), preferred_contact:z.enum(['phone','email']), consent:z.boolean().refine(v=>v,'Please consent to being contacted about this request.'), website:z.string().max(0,'Unable to accept this request.').default(''),
});
export type RequestInput = z.infer<typeof requestSchema>;
/** Photos are downscaled in the browser before upload; stored photos stay under D1's row size limit. */
export const MAX_PHOTO_BYTES = 1_500_000;
export const photoSchema = z.object({ name:z.string().max(150), type:z.enum(['image/jpeg','image/png','image/webp']), base64:z.string().max(2_100_000) });
export function validPhoto(file: {size:number;type:string}) { return file.size <= 15 * 1024 * 1024 && ['image/jpeg','image/png','image/webp'].includes(file.type); }
