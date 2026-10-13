import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema, breadcrumbSchema, jsonLd } from '@/lib/seo';
const path = '/services/exterior-cleaning';
const description = 'Commercial pressure washing for sidewalks, entries, dumpster pads, awnings, and signs, plus gum and graffiti removal, for properties in Washington DC, Maryland, and Northern Virginia.';
export const Route = createFileRoute('/services/exterior-cleaning')({head:()=>({...pageHead('Commercial Pressure Washing & Exterior Cleaning | DC, MD, VA',description,path),scripts:jsonLd(serviceSchema('Exterior Cleaning',description,path),breadcrumbSchema([['Services','/services'],['Exterior Cleaning',path]]))}),component:()=> <ServicePage slug="exterior-cleaning"/>});
