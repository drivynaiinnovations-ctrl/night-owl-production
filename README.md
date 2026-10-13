# Night Owl Production

Build the production website for Night Owls Service, a commercial managed-services company. Use this deployed Higgsfield concept as the visual reference: https://night-owls-service.higgsfield.app

This Lovable project will be the production source of truth and will later connect to GitHub and deploy through Cloudflare. Build a complete, responsive, accessible, SEO-ready site—not a mockup.

Brand and positioning:
- Name: Night Owls Service
- Primary promise: “One call. Every job handled.”
- Supporting line: “Commercial service, handled.”
- Position as one accountable commercial service coordinator with vetted service professionals. Never call it a broker, middleman, lead-generation company, or say it “farms out” work.
- Do not fabricate years in business, reviews, certifications, licenses, insurance, customer logos, response times, or statistics.
- Visual direction: Apple-like restraint and clarity, cinematic nighttime commercial-property mood, near-black and midnight navy, white type, silver dividers, limited electric-blue accent, generous negative space, refined motion, no cartoon owls, no generic SaaS look, no excessive glass cards.
- Create a refined wordmark treatment for NIGHT OWLS / SERVICE. A subtle abstract owl-eye or crescent may appear, never a mascot.

Core services:
1. Commercial Door Services — repairs, adjustments, installations, closers, hinges, locks, panic hardware, storefront entrances, preventive maintenance.
2. Commercial Signage — installation, replacement, removal, directional signage, window graphics, exterior signs, multi-location rollouts.
3. Exterior Cleaning — pressure washing, sidewalks, entries, dumpster pads, gum and graffiti removal, awnings, sign cleaning.
4. Parking-Lot Care — scheduled sweeping, litter pickup, striping, ADA markings, bollards, wheel stops, minor upkeep.
Keep hauling as a secondary add-on, not a primary service.

Target buyers: property managers, facility managers, commercial landlords, retailers, restaurants, offices, warehouses, contractors, franchise and multi-location operators.

Create routes/pages:
- /
- /services
- /services/commercial-doors
- /services/commercial-signage
- /services/exterior-cleaning
- /services/parking-lot-care
- /industries
- /about
- /request-service
- /contact
- /privacy
- /terms
Include a useful 404 page.

Homepage:
- Sticky translucent header with Services, Industries, How It Works, About, Contact, click-to-call, and Request Service.
- Hero: “One call. Every job handled.” Supporting copy: “Commercial doors, signage, exterior cleaning, and parking-lot care—coordinated through one dependable service team.”
- Two immediate CTAs: Request Service and Call Now.
- Four-service overview.
- Three-step process: Tell us what you need; We coordinate the right crew; The work gets handled.
- Industries section.
- Differentiators: one point of contact, clear communication, multiple service categories, one-time and recurring programs, multi-location support.
- Strong CTA: “Your property doesn’t need another vendor list. It needs one dependable call.”
- No fake testimonial content. Build a testimonials component but hide it until real reviews exist.

Request form:
- Full name, company, phone, email, service address, city, state, ZIP, service needed, description, urgency (routine/soon/urgent), preferred date, photo upload, preferred contact method, consent checkbox.
- Service choices: doors, signage, exterior cleaning, parking-lot care, multiple services, not sure.
- Accessible validation, spam-protection-ready structure, success and failure states.
- Store submissions in a clean internal data layer or form handler abstraction that can later point to email/CRM. Do not require authentication.
- Do not display a promised response time.

Editable placeholders:
- phone: [BUSINESS PHONE]
- email: [BUSINESS EMAIL]
- service area: [SERVICE AREA]
- hours: [BUSINESS HOURS]
Centralize these in one obvious configuration file and render them throughout the site. Placeholder phone buttons must not dial a fake number; disable them gracefully and label for configuration.

Conversion:
- Mobile fixed bottom bar with Call Now and Request Service, but never obscure forms/footer/notices.
- Trackable semantic hooks/data attributes for phone clicks, form starts, form submissions, and service CTA clicks.
- Fast, lightweight motion and a still fallback; do not depend on background video for comprehension.
- Strong keyboard focus, WCAG AA contrast, reduced-motion support.

SEO:
- Unique titles/descriptions per page.
- Semantic HTML, canonical-ready metadata, Open Graph, sitemap and robots configuration, descriptive alt text.
- LocalBusiness plus Service structured-data components with placeholders rather than invented business facts.
- Copy should be concrete and useful, not vague luxury language.
- Prepare page architecture for future service-area landing pages.

Technical and delivery requirements:
- TypeScript, reusable components, clean code.
- Ensure every link and CTA works.
- No lorem ipsum.
- No external image hotlinks likely to break. Prefer tasteful CSS/gradient atmosphere and clearly replaceable local assets.
- Production build must pass without warnings that indicate broken behavior.
- Add a concise README explaining business-detail configuration, form wiring, analytics hooks, GitHub workflow, and Cloudflare Pages/Workers deployment settings.
- Add a Cloudflare-compatible SPA/SSR configuration appropriate to the generated stack, including any redirects needed for deep links.
- Preserve a straightforward path to GitHub sync/export.
- Before finishing, inspect every route at desktop and mobile widths and fix overflow, contrast, broken links, and awkward spacing.

Build the complete first version now.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bb141239-c8eb-4ebf-992d-4115def5eea3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
