// Private request inbox at /admin/requests, protected by HTTP Basic auth (any username, password = ADMIN_PASSWORD secret).
import { bindings } from './cloudflare';

type RequestRow = { id: string; created_at: string; full_name: string; company: string; phone: string; email: string; service_address: string; city: string; state: string; zip: string; service_needed: string; description: string; urgency: string; preferred_date: string | null; preferred_contact: string; photo_count: number };
type PhotoRow = { content_type: string; data: ArrayBuffer | number[] };

const privateHeaders = { 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow', 'referrer-policy': 'no-referrer' };
const esc = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function timingSafeEqual(a: string, b: string) {
 const x = new TextEncoder().encode(a), y = new TextEncoder().encode(b);
 let diff = x.length ^ y.length;
 for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
 return diff === 0;
}

function authorized(request: Request, password: string) {
 const header = request.headers.get('authorization') ?? '';
 if (!header.startsWith('Basic ')) return false;
 try { const decoded = atob(header.slice(6)); return timingSafeEqual(decoded.slice(decoded.indexOf(':') + 1), password); }
 catch { return false; }
}

function page(title: string, body: string, status = 200) {
 return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)}</title><style>
body{font:15px/1.6 system-ui,sans-serif;margin:0;background:#f6f8fc;color:#1b2333}main{max-width:1100px;margin:auto;padding:24px 16px}h1{font-size:24px}a{color:#2457d6}
table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e1e6ef}th,td{padding:10px 12px;border-bottom:1px solid #e1e6ef;text-align:left;vertical-align:top}th{font-size:12px;text-transform:uppercase;color:#5b6577}
.urgent{color:#c62828;font-weight:600}.card{background:#fff;border:1px solid #e1e6ef;border-radius:8px;padding:20px;margin-top:16px}dl{display:grid;grid-template-columns:160px 1fr;gap:6px 16px}dt{color:#5b6577}.photos{display:flex;flex-wrap:wrap;gap:12px}.photos img{max-width:320px;width:100%;border-radius:6px;border:1px solid #e1e6ef}
@media(max-width:700px){.hide-sm{display:none}dl{grid-template-columns:1fr}}</style></head><body><main>${body}</main></body></html>`, { status, headers: { 'content-type': 'text/html; charset=utf-8', ...privateHeaders } });
}

export async function handleAdmin(request: Request): Promise<Response | undefined> {
 const url = new URL(request.url);
 if (url.pathname !== '/admin' && !url.pathname.startsWith('/admin/')) return undefined;
 const env = bindings();
 if (!env.ADMIN_PASSWORD) return page('Admin disabled', '<h1>Admin is not configured.</h1><p>Set the ADMIN_PASSWORD secret on the Worker to enable it.</p>', 503);
 if (!authorized(request, env.ADMIN_PASSWORD)) return new Response('Authentication required', { status: 401, headers: { 'www-authenticate': 'Basic realm="Night Owls admin", charset="UTF-8"', ...privateHeaders } });
 if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: privateHeaders });

 const photo = url.pathname.match(/^\/admin\/requests\/([0-9a-f-]{36})\/photo\/(\d)$/);
 if (photo) {
  const row = await env.DB.prepare('SELECT content_type, data FROM request_photos WHERE request_id = ? AND idx = ?').bind(photo[1], Number(photo[2])).first<PhotoRow>();
  if (!row) return new Response('Not found', { status: 404, headers: privateHeaders });
  const bytes = row.data instanceof ArrayBuffer ? new Uint8Array(row.data) : new Uint8Array(row.data);
  return new Response(bytes, { headers: { 'content-type': row.content_type, ...privateHeaders } });
 }

 const detail = url.pathname.match(/^\/admin\/requests\/([0-9a-f-]{36})$/);
 if (detail) {
  const r = await env.DB.prepare('SELECT * FROM service_requests WHERE id = ?').bind(detail[1]).first<RequestRow>();
  if (!r) return page('Not found', '<p><a href="/admin/requests">← All requests</a></p><h1>Request not found.</h1>', 404);
  const fields: [string, string][] = [['Received', r.created_at], ['Name', r.full_name], ['Company', r.company], ['Phone', r.phone], ['Email', r.email], ['Prefers', r.preferred_contact], ['Service', r.service_needed], ['Urgency', r.urgency], ['Preferred date', r.preferred_date ?? '—'], ['Address', `${r.service_address}, ${r.city}, ${r.state} ${r.zip}`]];
  const photos = Array.from({ length: r.photo_count }, (_, i) => `<a href="/admin/requests/${r.id}/photo/${i}" target="_blank"><img src="/admin/requests/${r.id}/photo/${i}" alt="Photo ${i + 1}"></a>`).join('');
  return page(`${r.company} request`, `<p><a href="/admin/requests">← All requests</a></p><h1>${esc(r.company)}: ${esc(r.full_name)}</h1>
<div class="card"><dl>${fields.map(([k, v]) => `<dt>${k}</dt><dd>${k === 'Phone' ? `<a href="tel:${esc(v.replace(/[^\d+]/g, ''))}">${esc(v)}</a>` : k === 'Email' ? `<a href="mailto:${esc(v)}">${esc(v)}</a>` : esc(v)}</dd>`).join('')}</dl></div>
<div class="card"><h2>Description</h2><p style="white-space:pre-wrap">${esc(r.description)}</p></div>${r.photo_count ? `<div class="card"><h2>Photos</h2><div class="photos">${photos}</div></div>` : ''}<p style="color:#5b6577;font-size:12px">Reference ${esc(r.id)}</p>`);
 }

 if (url.pathname === '/admin' || url.pathname === '/admin/' || url.pathname === '/admin/requests') {
  const { results } = await env.DB.prepare('SELECT id, created_at, full_name, company, phone, city, state, service_needed, urgency, photo_count FROM service_requests ORDER BY created_at DESC LIMIT 200').all<RequestRow>();
  const rows = results.map(r => `<tr><td>${esc(r.created_at.replace('T', ' ').replace('Z', ''))}</td><td><a href="/admin/requests/${r.id}">${esc(r.company)}</a><br>${esc(r.full_name)}</td><td class="hide-sm">${esc(r.phone)}</td><td class="hide-sm">${esc(r.city)}, ${esc(r.state)}</td><td>${esc(r.service_needed)}</td><td class="${r.urgency === 'urgent' ? 'urgent' : ''}">${esc(r.urgency)}</td><td class="hide-sm">${r.photo_count}</td></tr>`).join('');
  return page('Service requests', `<h1>Service requests</h1><p>${results.length} most recent (UTC times).</p><table><thead><tr><th>Received</th><th>Company</th><th class="hide-sm">Phone</th><th class="hide-sm">Location</th><th>Service</th><th>Urgency</th><th class="hide-sm">Photos</th></tr></thead><tbody>${rows || '<tr><td colspan="7">No requests yet.</td></tr>'}</tbody></table>`);
 }
 return page('Not found', '<p><a href="/admin/requests">← All requests</a></p><h1>Not found.</h1>', 404);
}
