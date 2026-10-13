/** Verified Night Owls Service business details. */
export const business = {
  name: 'Night Owls Service',
  phone: '(908) 391-3315',
  email: 'happy@callnightowls.com',
  serviceArea: 'DMV area',
  hours: '8:00 AM–6:00 PM',
  siteUrl: '',
};
export const configured = (value: string) => Boolean(value.trim()) && !value.includes('[');
export const phoneHref = () => configured(business.phone) && /^\+?[\d\s().-]{7,25}$/.test(business.phone) ? `tel:${business.phone.replace(/[^\d+]/g, '')}` : undefined;
