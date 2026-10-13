import { createFileRoute, notFound } from '@tanstack/react-router';
import { SubServicePage } from '@/components/site/content-pages';
import { subServices } from '@/lib/sub-services';
import { services } from '@/lib/site-content';
import { pageHead, serviceSchema, breadcrumbSchema, faqSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/services/$slug')({
 loader:({params})=>{const x=subServices.find(v=>v.slug===params.slug);if(!x)throw notFound();return {slug:x.slug};},
 head:({params})=>{const x=subServices.find(v=>v.slug===params.slug);if(!x)return {};const parent=services.find(p=>p.slug===x.parent)!;const path=`/services/${x.slug}`;const description=`${x.summary} Serving Washington DC, Maryland, and Northern Virginia.`;return {...pageHead(`${x.title} | DC, MD & VA`,description,path),scripts:jsonLd(serviceSchema(x.title,description,path),breadcrumbSchema([['Services','/services'],[parent.title,`/services/${parent.slug}`],[x.name,path]]),faqSchema(x.faqs))};},
 component:SubServiceRoute,
});
function SubServiceRoute(){const {slug}=Route.useLoaderData();return <SubServicePage slug={slug}/>;}
