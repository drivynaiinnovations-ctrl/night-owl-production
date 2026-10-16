import { z } from 'zod';
const text = (label: string, max = 150) => z.string().trim().min(1, `${label} is required.`).max(max, `${label} is too long.`);
const optionalText = (label: string, max = 150) => z.string().trim().max(max, `${label} is too long.`).default('');
export const serviceChoices = [['doors','Commercial doors'],['signage','Commercial signage'],['exterior-cleaning','Exterior cleaning'],['parking-lot-care','Parking-lot care'],['multiple','Multiple services'],['not-sure','Not sure']] as const;
/** Quick request: name, phone, service, and ZIP are required; property details, description, and photos are optional. */
export const requestSchema = z.object({
 full_name:text('Full name',100), phone:z.string().trim().regex(/^\+?[\d\s().-]{7,25}$/, 'Enter a valid phone number.'),
 email:z.string().trim().max(254).refine(v=>!v || z.string().email().safeParse(v).success, 'Enter a valid email address.').default(''),
 service_needed:z.enum(['doors','signage','exterior-cleaning','parking-lot-care','multiple','not-sure']), zip:z.string().trim().regex(/^\d{5}(-\d{4})?$/, 'Enter a valid ZIP code.'),
 company:optionalText('Company'), service_address:optionalText('Service address',250), city:optionalText('City',100),
 state:z.string().trim().refine(v=>!v || /^[a-zA-Z]{2}$/.test(v), 'Enter a two-letter state code.').transform(v=>v.toUpperCase()).default(''),
 description:optionalText('Description',4000), urgency:z.enum(['routine','soon','urgent']).default('routine'),
 preferred_date:z.string().refine(v=>!v || /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)), 'Enter a valid date.').default(''), preferred_contact:z.enum(['phone','email']).default('phone'),
 consent:z.boolean().refine(v=>v,'Please consent to being contacted about this request.'), website:z.string().max(0,'Unable to accept this request.').default(''),
}).superRefine((r, ctx) => { if (r.preferred_contact === 'email' && !r.email) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['email'], message: 'Add an email address, or choose phone as your preferred contact.' }); });
export type RequestInput = z.infer<typeof requestSchema>;
/** Photos are downscaled in the browser before upload; stored photos stay under D1's row size limit. */
export const MAX_PHOTO_BYTES = 1_500_000;
export const photoSchema = z.object({ name:z.string().max(150), type:z.enum(['image/jpeg','image/png','image/webp']), base64:z.string().max(2_100_000) });
export function validPhoto(file: {size:number;type:string}) { return file.size <= 15 * 1024 * 1024 && ['image/jpeg','image/png','image/webp'].includes(file.type); }
