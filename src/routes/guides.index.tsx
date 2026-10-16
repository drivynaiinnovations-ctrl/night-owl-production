import { createFileRoute } from '@tanstack/react-router';
import { GuidesPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/guides/')({head:()=>({...pageHead('Commercial Property Guides','Practical guides for property and facility managers in DC, Maryland, and Northern Virginia: parking lot striping, ADA door openers, door closers, commercial signs, and pressure washing.','/guides'),scripts:jsonLd(breadcrumbSchema([['Guides','/guides']]))}),component:GuidesPage});
