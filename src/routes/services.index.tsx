import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/services/')({head:()=>({...pageHead('Commercial Property Services in DC, MD & VA | Night Owls','Commercial door repair, sign installation, pressure washing, and parking lot maintenance for businesses in Washington DC, Maryland, and Northern Virginia. One call, one point of contact.','/services'),scripts:jsonLd(breadcrumbSchema([['Services','/services']]))}),component:ServicesPage});
