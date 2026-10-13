import { createFileRoute } from '@tanstack/react-router';
import { ServiceAreasPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/service-areas/')({head:()=>({...pageHead('Service Areas: Washington DC, Maryland & Northern Virginia',"Night Owls Service coordinates commercial door, signage, exterior cleaning, and parking-lot services in Washington DC, Montgomery County, Prince George's County, and Northern Virginia.",'/service-areas'),scripts:jsonLd(breadcrumbSchema([['Service Areas','/service-areas']]))}),component:ServiceAreasPage});
