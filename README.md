# Night Owls Service

Production website for Night Owls Service, a commercial managed-services company serving the DMV area.

## Business configuration

Verified contact details are centralized in `src/config/business.ts`:

- Phone: (908) 391-3315
- Email: happy@callnightowls.com
- Service area: DMV area
- Hours: 8:00 AM–6:00 PM

Set `siteUrl` in that file after the final custom domain is connected so canonical URLs and structured data use the production domain.

## Development

```sh
npm install
npm run dev
npm test
npm run build
```

## Service requests

Requests and uploaded photos use the Lovable Cloud/Supabase integration configured by the project. Preserve the required environment variables when deploying outside Lovable. Configure email or CRM notifications separately before launch.

## Cloudflare deployment

The application is configured as a TanStack Start SSR project with Nitro’s Cloudflare target.

Recommended Cloudflare Workers build settings:

- Repository: `drivynaiinnovations-ctrl/night-owl-production`
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Node.js: current LTS
- Compatibility flag: `nodejs_compat`

Add the same public Supabase/Lovable Cloud environment variables used by the application to Cloudflare before deploying. Never commit secret keys.

The worker entry point and static asset directory are declared in `wrangler.jsonc`.

## Lovable

Continue visual editing in the [Lovable project](https://lovable.dev/projects/bb141239-c8eb-4ebf-992d-4115def5eea3). Changes on `main` synchronize between Lovable and GitHub.
