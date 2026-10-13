import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/site/content-pages';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/services/')({head:()=>pageHead('Commercial Services','Commercial doors, signage, exterior cleaning, and parking-lot care through one accountable service coordinator.','/services'),component:ServicesPage});
