# Night Owls Service

Production website for Night Owls Service (https://callnightowls.com), commercial property services across Washington DC, Maryland, and Northern Virginia.

Standalone TanStack Start (React) app built with Vite and deployed as a Cloudflare Worker. No Lovable or Supabase dependencies.

## Business details

Contact details, hours, Google IDs, and profile links live in `src/config/business.ts`. Values in `[brackets]` or empty strings stay hidden until filled in:

- `googleSiteVerification`: Search Console HTML-tag token
- `googleAnalyticsId`: GA4 measurement ID (`G-…`)
- `googleBusinessUrl`, `socialProfiles`: added to structured data `sameAs`

Page content: services in `src/lib/site-content.ts`, sub-service pages in `src/lib/sub-services.ts`, service areas and FAQs in `src/lib/site-content.ts`. When pages are added or removed, update `public/sitemap.xml`.

## Development

```sh
bun install
bun run build
bun run test
npx wrangler dev        # serves the built Worker locally
```

## Service requests

`/request-service` stores submissions in the Cloudflare D1 database `night-owl-requests` (binding `DB`). Photos are downscaled in the browser and stored in D1 (`request_photos`). Schema: `migrations/`.

- Apply schema changes: `npx wrangler d1 migrations apply night-owl-requests --remote`
- Read requests: `https://callnightowls.com/admin/requests` (HTTP Basic auth, any username, password from the `ADMIN_PASSWORD` secret)
- Set the admin password: `npx wrangler secret put ADMIN_PASSWORD`
- Email alerts: set `NOTIFY_TO` in `wrangler.jsonc` to an address verified in Cloudflare Email Routing (Email → Email Routing → Destination addresses), then redeploy.

## Deployment

```sh
bun run build
npx wrangler deploy
```

Cloudflare Workers Builds (optional, deploy on push to `main`):

- Build command: `bun install && bun run build`
- Deploy command: `npx wrangler deploy`

The Worker serves `callnightowls.com` and `www.callnightowls.com` (www redirects to the apex in `src/server.ts`).
