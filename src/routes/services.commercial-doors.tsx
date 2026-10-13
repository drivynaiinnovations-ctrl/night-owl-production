import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema } from '@/lib/seo';
export const Route = createFileRoute('/services/commercial-doors')({head:()=>({...pageHead('Commercial Door Services','Commercial door repairs, adjustments, installations, closers, hinges, locks, panic hardware, and preventive maintenance.','/services/commercial-doors'),scripts:[{type:'application/ld+json',children:JSON.stringify(serviceSchema('Commercial Door Services','Commercial door repairs, adjustments, installations, closers, hinges, locks, panic hardware, and preventive maintenance.'))}]}),component:()=> <ServicePage slug="commercial-doors"/>});
