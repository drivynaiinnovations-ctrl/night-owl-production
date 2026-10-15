import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/contact')({head:()=>({...pageHead('Contact Us','Call (240) 539-9609 or email happy@callnightowls.com for commercial door, signage, exterior cleaning, and parking-lot service in Washington DC, Maryland, and Northern Virginia.','/contact'),scripts:jsonLd(breadcrumbSchema([['Contact','/contact']]))}),component:ContactPage});
