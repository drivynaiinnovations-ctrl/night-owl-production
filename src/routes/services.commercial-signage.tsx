import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema, breadcrumbSchema, faqSchema, jsonLd } from '@/lib/seo';
import { serviceDetails } from '@/lib/site-content';
const path = '/services/commercial-signage';
const description = 'Commercial sign installation, replacement, and removal, window graphics, directional signs, and multi-location rollouts across Washington DC, Maryland, and Northern Virginia.';
export const Route = createFileRoute('/services/commercial-signage')({head:()=>({...pageHead('Commercial Sign Installation & Replacement | DC, MD & VA',description,path),scripts:jsonLd(serviceSchema('Commercial Signage',description,path),breadcrumbSchema([['Services','/services'],['Commercial Signage',path]]),faqSchema(serviceDetails['commercial-signage'].faqs))}),component:()=> <ServicePage slug="commercial-signage"/>});
