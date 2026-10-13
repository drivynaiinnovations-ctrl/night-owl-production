import { createFileRoute } from '@tanstack/react-router';
import { FaqPage } from '@/components/site/content-pages';
import { faqs } from '@/lib/site-content';
import { pageHead, faqSchema, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/faq')({head:()=>({...pageHead('Frequently Asked Questions','Answers about Night Owls Service: commercial services offered, DC, Maryland, and Northern Virginia service areas, recurring and multi-location work, hours, and how to request service.','/faq'),scripts:jsonLd(faqSchema(faqs),breadcrumbSchema([['FAQ','/faq']]))}),component:FaqPage});
