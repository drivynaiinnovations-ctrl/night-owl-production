// New-request email alert through the Cloudflare Email Service send_email binding.
// Failures are logged and never block saving the request.
import type { Bindings } from './cloudflare';

const esc = (value: string) => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function notifyNewRequest(env: Bindings, subject: string, body: string, replyTo?: string) {
 if (!env.NOTIFY || !env.NOTIFY_TO || !env.NOTIFY_FROM) return;
 try {
  await env.NOTIFY.send({
   to: env.NOTIFY_TO,
   from: { email: env.NOTIFY_FROM, name: 'Night Owls Website' },
   ...(replyTo ? { replyTo } : {}),
   subject: subject.replace(/[\r\n]+/g, ' '),
   text: body,
   html: `<pre style="font:14px/1.6 system-ui,sans-serif;white-space:pre-wrap">${esc(body)}</pre>`,
  });
 } catch (error) { console.error('Request notification failed', error); }
}
