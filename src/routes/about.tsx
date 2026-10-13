import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/site/content-pages';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/about')({head:()=>pageHead('About Night Owls','Meet Night Owls Service: one accountable point of contact coordinating vetted professionals for commercial property services.','/about'),component:AboutPage});
