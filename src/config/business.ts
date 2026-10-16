/** Verified Night Owls Commercial Services business details. Values wrapped in [brackets] are unconfirmed and stay hidden until replaced. */
export const business = {
  name: 'Night Owls Commercial Services',
  phone: '(240) 539-9609',
  email: 'happy@callnightowls.com',
  serviceArea: 'Washington DC, Maryland & Northern Virginia',
  serviceAreaShort: 'DC, MD & VA',
  hours: 'Mon–Fri, 8:00 AM–6:00 PM',
  opens: '08:00',
  closes: '18:00',
  /** Schema.org day names, e.g. ['Monday','Tuesday','Wednesday','Thursday','Friday']. Empty = hours left out of Google structured data. */
  openDays: ['Monday','Tuesday','Wednesday','Thursday','Friday'] as string[],
  siteUrl: 'https://callnightowls.com',
  /** Google Business Profile share link (Google Maps → Share). */
  googleBusinessUrl: '[Google Business Profile URL]',
  /** Google Search Console HTML-tag verification token (content="..." value only). */
  googleSiteVerification: '',
  /** GA4 measurement ID, e.g. G-XXXXXXX. */
  googleAnalyticsId: '',
  /** Google "write a review" link (Business Profile → Ask for reviews → copy link). */
  googleReviewUrl: '',
  /** Official social/directory profile URLs (Facebook, LinkedIn, Instagram, YouTube, Yelp, Nextdoor, BBB...). Shown in the footer and added to schema sameAs. */
  socialProfiles: [] as string[],
  /** Trust claims shown in the footer. Only add statements that are true and can be backed up, e.g. 'Licensed & insured', 'Serving the DMV since 2024'. */
  trustBadges: [] as string[],
  /** Google rating shown as a badge once real reviews exist, e.g. '4.9' and 23. Leave '' / 0 to hide. */
  googleRating: '',
  googleReviewCount: 0,
  /** Real customer quotes only, with permission. Shown on the homepage. e.g. { name: 'Jane D.', role: 'Property Manager, Rockville', quote: '...' } */
  testimonials: [] as { name: string; role?: string; quote: string }[],
};
export const configured = (value: string) => Boolean(value.trim()) && !value.includes('[');
export const phoneHref = () => configured(business.phone) && /^\+?[\d\s().-]{7,25}$/.test(business.phone) ? `tel:${business.phone.replace(/[^\d+]/g, '')}` : undefined;
export const phoneE164 = () => `+1${business.phone.replace(/\D/g, '').replace(/^1/, '')}`;
