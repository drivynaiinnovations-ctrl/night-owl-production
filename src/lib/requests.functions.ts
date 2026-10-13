import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { requestSchema, photoSchema } from './request-schema';
export const submitRequest = createServerFn({method:'POST'})
 .inputValidator(z.object({request:requestSchema,photos:z.array(photoSchema).max(3)}))
 .handler(async ({data}) => {
  // Public write-only intake. Strict validation occurs before privileged storage access.
  const {supabaseAdmin} = await import('@/integrations/supabase/client.server');
  const id = crypto.randomUUID(); const paths:string[] = [];
  try {
   for (const [index, photo] of data.photos.entries()) {
    const binary = Uint8Array.from(atob(photo.base64), c=>c.charCodeAt(0));
    if (binary.length > 5 * 1024 * 1024) throw new Error('Photo too large');
    const jpeg = binary[0] === 255 && binary[1] === 216 && binary[2] === 255;
    const png = binary[0] === 137 && binary[1] === 80 && binary[2] === 78 && binary[3] === 71;
    const webp = new TextDecoder().decode(binary.slice(0,4)) === 'RIFF' && new TextDecoder().decode(binary.slice(8,12)) === 'WEBP';
    if (!(photo.type === 'image/jpeg' && jpeg || photo.type === 'image/png' && png || photo.type === 'image/webp' && webp)) throw new Error('Invalid image');
    const ext = photo.type === 'image/jpeg' ? 'jpg' : photo.type.split('/')[1];
    const path = `${id}/${index}.${ext}`;
    const {error} = await supabaseAdmin.storage.from('service-request-photos').upload(path,binary,{contentType:photo.type});
    if (error) throw error; paths.push(path);
   }
   const {website: _website, preferred_date, ...request} = data.request;
   const {error} = await supabaseAdmin.from('service_requests').insert({...request,id,preferred_date:preferred_date || null,photo_paths:paths});
   if (error) throw error;
   return {ok:true as const,reference:id};
  } catch {
   if (paths.length) await supabaseAdmin.storage.from('service-request-photos').remove(paths);
   return {ok:false as const,message:'Your request could not be saved. Please try again. Your details are still here.'};
  }
 });
