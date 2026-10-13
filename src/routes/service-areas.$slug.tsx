import { createFileRoute, notFound } from '@tanstack/react-router';
import { ServiceAreaPage } from '@/components/site/content-pages';
import { serviceAreas } from '@/lib/site-content';
import { pageHead, serviceSchema, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/service-areas/$slug')({
 loader:({params})=>{const area=serviceAreas.find(a=>a.slug===params.slug);if(!area)throw notFound();return {slug:area.slug};},
 head:({params})=>{const area=serviceAreas.find(a=>a.slug===params.slug);if(!area)return {};const path=`/service-areas/${area.slug}`;const description=`Commercial door repair, sign installation, pressure washing, and parking lot maintenance in ${area.name}, including ${area.places.slice(0,4).join(', ')}. One point of contact for your property.`;return {...pageHead(`Commercial Property Services in ${area.name}`,description,path),scripts:jsonLd(serviceSchema(`Commercial property services in ${area.name}`,description,path,area),breadcrumbSchema([['Service Areas','/service-areas'],[area.name,path]]))};},
 component:AreaRoute,
});
function AreaRoute(){const {slug}=Route.useLoaderData();return <ServiceAreaPage slug={slug}/>;}
