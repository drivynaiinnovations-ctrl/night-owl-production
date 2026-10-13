// New-request email alert through Cloudflare Email Routing. Skipped unless NOTIFY_TO is set to a verified destination.
import { EmailMessage } from 'cloudflare:email';
import type { Bindings } from './cloudflare';

const header = (value: string) => value.replace(/[\r\n]+/g, ' ');

export async function notifyNewRequest(env: Bindings, subject: string, body: string) {
 if (!env.NOTIFY || !env.NOTIFY_TO || !env.NOTIFY_FROM) return;
 const raw = [
  `From: Night Owls Website <${env.NOTIFY_FROM}>`,
  `To: ${env.NOTIFY_TO}`,
  `Subject: ${header(subject)}`,
  `Message-ID: <${crypto.randomUUID()}@callnightowls.com>`,
  `Date: ${new Date().toUTCString()}`,
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=utf-8',
  '',
  body,
 ].join('\r\n');
 try { await env.NOTIFY.send(new EmailMessage(env.NOTIFY_FROM, env.NOTIFY_TO, raw)); }
 catch (error) { console.error('Request notification failed', error); }
}
