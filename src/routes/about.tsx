import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/about')({head:()=>({...pageHead('About Night Owls Commercial Services','Night Owls Commercial Services gives DC-area commercial properties one accountable point of contact for door repair, signage, exterior cleaning, and parking-lot care.','/about'),scripts:jsonLd(breadcrumbSchema([['About','/about']]))}),component:AboutPage});
