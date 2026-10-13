/** Replace only verified business details here. Empty siteUrl until a public domain exists. */
export const business = {
  name: 'Night Owls Service',
  phone: '[BUSINESS PHONE]',
  email: '[BUSINESS EMAIL]',
  serviceArea: '[SERVICE AREA]',
  hours: '[BUSINESS HOURS]',
  siteUrl: '',
};
export const configured = (value: string) => Boolean(value.trim()) && !value.includes('[');
export const phoneHref = () => configured(business.phone) && /^\+?[\d\s().-]{7,25}$/.test(business.phone) ? `tel:${business.phone.replace(/[^\d+]/g, '')}` : undefined;
