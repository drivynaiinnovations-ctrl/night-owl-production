import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema, breadcrumbSchema, faqSchema, jsonLd } from '@/lib/seo';
import { serviceDetails } from '@/lib/site-content';
const path = '/services/commercial-doors';
const description = 'Commercial door repair, installation, closers, hinges, locks, panic hardware, and storefront entrances for businesses in Washington DC, Maryland, and Northern Virginia.';
export const Route = createFileRoute('/services/commercial-doors')({head:()=>({...pageHead('Commercial Door Repair & Installation | DC, MD & VA',description,path),scripts:jsonLd(serviceSchema('Commercial Door Services',description,path),breadcrumbSchema([['Services','/services'],['Commercial Door Services',path]]),faqSchema(serviceDetails['commercial-doors'].faqs))}),component:()=> <ServicePage slug="commercial-doors"/>});
