import { createFileRoute } from '@tanstack/react-router';
import { IndustriesPage } from '@/components/site/content-pages';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/industries')({head:()=>pageHead('Industries We Serve','Commercial service coordination for property managers, retailers, restaurants, landlords, offices, warehouses, and multi-location operators.','/industries'),component:IndustriesPage});
