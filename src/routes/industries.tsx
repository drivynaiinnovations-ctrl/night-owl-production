import { createFileRoute } from '@tanstack/react-router';
import { IndustriesPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/industries')({head:()=>({...pageHead('Industries We Serve','Commercial property services for property managers, retail and restaurants, landlords, offices, warehouses, contractors, and multi-location businesses across the DC area.','/industries'),scripts:jsonLd(breadcrumbSchema([['Industries','/industries']]))}),component:IndustriesPage});
