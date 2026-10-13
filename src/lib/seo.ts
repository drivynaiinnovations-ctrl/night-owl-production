import { business, configured } from '@/config/business';
export function pageHead(title: string, description: string, path: string) {
 const url = business.siteUrl ? `${business.siteUrl.replace(/\/$/, '')}${path}` : path;
 return { meta: [{title: `${title} | Night Owls Service`}, {name:'description',content:description}, {property:'og:title',content:`${title} | Night Owls Service`}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {property:'og:url',content:url}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:url}] };
}
export function businessSchema() {
 return {'@context':'https://schema.org','@type':'LocalBusiness',name:business.name,description:'Commercial doors, signage, exterior cleaning, and parking-lot care coordinated through one accountable service team.', ...(configured(business.phone) ? {telephone:business.phone}:{}), ...(configured(business.email)?{email:business.email}:{}), ...(configured(business.serviceArea)?{areaServed:business.serviceArea}:{}), ...(business.siteUrl?{url:business.siteUrl}:{})};
}
export function serviceSchema(name: string, description: string) { return {'@context':'https://schema.org','@type':'Service',name,description,provider:{'@type':'LocalBusiness',name:business.name},...(configured(business.serviceArea)?{areaServed:business.serviceArea}:{})}; }
