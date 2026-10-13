import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/site/content-pages';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/contact')({head:()=>pageHead('Contact Night Owls','Contact Night Owls Service about commercial property care, recurring programs, and multi-location service coordination.','/contact'),component:ContactPage});
