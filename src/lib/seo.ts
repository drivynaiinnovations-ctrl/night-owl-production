import { business, configured, phoneE164 } from '@/config/business';
import { services, serviceAreas } from '@/lib/site-content';

const base = business.siteUrl.replace(/\/$/, '');
export const absoluteUrl = (path: string) => `${base}${path}`;
const ogImage = absoluteUrl('/og-image.jpg');
const businessId = `${base}/#business`;

export function pageHead(title: string, description: string, path: string) {
 const url = absoluteUrl(path);
 const fullTitle = title.includes('Night Owls') || title.length > 40 ? title : `${title} | Night Owls Service`;
 return { meta: [{title: fullTitle}, {name:'description',content:description}, {property:'og:title',content:fullTitle}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {property:'og:url',content:url}, {property:'og:image',content:ogImage}, {property:'og:image:width',content:'1200'}, {property:'og:image:height',content:'640'}, {property:'og:image:alt',content:'Commercial storefront and parking area serviced by Night Owls Service'}, {name:'twitter:card',content:'summary_large_image'}, {name:'twitter:title',content:fullTitle}, {name:'twitter:description',content:description}, {name:'twitter:image',content:ogImage}], links:[{rel:'canonical',href:url}] };
}

export const jsonLd = (...schemas: object[]) => schemas.map(schema => ({type:'application/ld+json',children:JSON.stringify(schema)}));

const areaServed = serviceAreas.map(a => ({'@type': a.placeType, name: a.name, ...(a.placeType === 'AdministrativeArea' ? {containedInPlace:{'@type':'State',name:a.region}} : {})}));

export function businessSchema() {
 const sameAs = [business.googleBusinessUrl, ...business.socialProfiles].filter(configured);
 return {'@context':'https://schema.org','@type':['LocalBusiness','HomeAndConstructionBusiness'],'@id':businessId,name:business.name,url:base,logo:absoluteUrl('/logo.png'),image:ogImage,
  description:'Commercial door repair, commercial signage, exterior cleaning and pressure washing, and parking-lot care for businesses across Washington DC, Maryland, and Northern Virginia, coordinated through one accountable service team.',
  ...(configured(business.phone) ? {telephone:phoneE164()}:{}), ...(configured(business.email)?{email:business.email}:{}),
  areaServed, priceRange:'$$',
  ...(business.openDays.length ? {openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:business.openDays,opens:business.opens,closes:business.closes}]}:{}),
  contactPoint:{'@type':'ContactPoint',contactType:'customer service',areaServed:['US-DC','US-MD','US-VA'],availableLanguage:'English',...(configured(business.phone)?{telephone:phoneE164()}:{}),...(configured(business.email)?{email:business.email}:{})},
  hasOfferCatalog:{'@type':'OfferCatalog',name:'Commercial property services',itemListElement:services.map(s=>({'@type':'Offer',itemOffered:{'@type':'Service',name:s.title,url:absoluteUrl(`/services/${s.slug}`)}}))},
  ...(sameAs.length?{sameAs}:{})};
}

export function websiteSchema() { return {'@context':'https://schema.org','@type':'WebSite','@id':`${base}/#website`,url:base,name:business.name,publisher:{'@id':businessId}}; }

export function serviceSchema(name: string, description: string, path: string, area?: {name:string;placeType:string}) {
 return {'@context':'https://schema.org','@type':'Service',name,description,serviceType:name,url:absoluteUrl(path),provider:{'@id':businessId,'@type':'LocalBusiness',name:business.name,url:base},areaServed:area?{'@type':area.placeType,name:area.name}:areaServed};
}

export function breadcrumbSchema(items: [string, string][]) {
 return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['Home','/'] as [string,string],...items].map(([name,path],i)=>({'@type':'ListItem',position:i+1,name,item:absoluteUrl(path)}))};
}

export function faqSchema(items: readonly (readonly [string, string])[]) {
 return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))};
}
