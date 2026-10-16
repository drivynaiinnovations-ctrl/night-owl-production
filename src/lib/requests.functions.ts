import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { requestSchema, photoSchema, serviceChoices, MAX_PHOTO_BYTES } from './request-schema';
export const submitRequest = createServerFn({method:'POST'})
 .inputValidator(z.object({request:requestSchema,photos:z.array(photoSchema).max(3)}))
 .handler(async ({data}) => {
  // Public write-only intake. Strict validation occurs before storage access.
  const {bindings} = await import('@/server/cloudflare');
  const {notifyNewRequest} = await import('@/server/notify');
  const env = bindings(); const id = crypto.randomUUID();
  try {
   const photos = data.photos.map((photo, index) => {
    const binary = Uint8Array.from(atob(photo.base64), c=>c.charCodeAt(0));
    if (binary.length > MAX_PHOTO_BYTES) throw new Error('Photo too large');
    const jpeg = binary[0] === 255 && binary[1] === 216 && binary[2] === 255;
    const png = binary[0] === 137 && binary[1] === 80 && binary[2] === 78 && binary[3] === 71;
    const webp = new TextDecoder().decode(binary.slice(0,4)) === 'RIFF' && new TextDecoder().decode(binary.slice(8,12)) === 'WEBP';
    if (!(photo.type === 'image/jpeg' && jpeg || photo.type === 'image/png' && png || photo.type === 'image/webp' && webp)) throw new Error('Invalid image');
    return env.DB.prepare('INSERT INTO request_photos (request_id, idx, content_type, data) VALUES (?, ?, ?, ?)').bind(id, index, photo.type, binary);
   });
   const {website: _website, consent: _consent, preferred_date, ...r} = data.request;
   await env.DB.batch([
    env.DB.prepare('INSERT INTO service_requests (id, full_name, company, phone, email, service_address, city, state, zip, service_needed, description, urgency, preferred_date, preferred_contact, photo_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
     .bind(id, r.full_name, r.company, r.phone, r.email, r.service_address, r.city, r.state, r.zip, r.service_needed, r.description, r.urgency, preferred_date || null, r.preferred_contact, photos.length),
    ...photos,
   ]);
   const service = serviceChoices.find(([value]) => value === r.service_needed)?.[1] ?? r.service_needed;
   await notifyNewRequest(env, `New service request: ${service} (${r.urgency}) - ${r.company || r.full_name} (${r.zip})`, [
    `${r.full_name}${r.company ? `, ${r.company}` : ''}`, `Phone: ${r.phone}`, `Email: ${r.email || 'not provided'}`, `Prefers: ${r.preferred_contact}`, '',
    `Service: ${service}`, `Urgency: ${r.urgency}`, `Preferred date: ${preferred_date || 'none'}`,
    `Address: ${[r.service_address, r.city, [r.state, r.zip].filter(Boolean).join(' ')].filter(Boolean).join(', ')}`, '', r.description || '(no description; quick request)', '',
    `Photos: ${photos.length}`, `View: https://callnightowls.com/admin/requests/${id}`,
   ].join('\n'), r.email || undefined);
   return {ok:true as const,reference:id};
  } catch (error) {
   console.error('Service request failed', error);
   return {ok:false as const,message:'Your request could not be saved. Please try again. Your details are still here.'};
  }
 });
