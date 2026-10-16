import { createFileRoute } from '@tanstack/react-router';
import { SiteMapPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/site-map')({head:()=>({...pageHead('Site Map','Every page on the Night Owls Commercial Services website: commercial door, signage, exterior cleaning, and parking-lot services and all DC, Maryland, and Northern Virginia service areas.','/site-map'),scripts:jsonLd(breadcrumbSchema([['Site Map','/site-map']]))}),component:SiteMapPage});
