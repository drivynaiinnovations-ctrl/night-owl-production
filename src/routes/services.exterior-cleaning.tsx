import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema } from '@/lib/seo';
export const Route = createFileRoute('/services/exterior-cleaning')({head:()=>({...pageHead('Exterior Cleaning','Commercial pressure washing, sidewalk cleaning, dumpster pads, gum and graffiti removal, awnings, and sign cleaning.','/services/exterior-cleaning'),scripts:[{type:'application/ld+json',children:JSON.stringify(serviceSchema('Exterior Cleaning','Commercial pressure washing, sidewalk cleaning, dumpster pads, gum and graffiti removal, awnings, and sign cleaning.'))}]}),component:()=> <ServicePage slug="exterior-cleaning"/>});
