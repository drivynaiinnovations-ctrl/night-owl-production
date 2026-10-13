import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema } from '@/lib/seo';
export const Route = createFileRoute('/services/parking-lot-care')({head:()=>({...pageHead('Parking-Lot Care','Commercial parking-lot sweeping, litter pickup, striping, ADA markings, bollards, wheel stops, and minor upkeep.','/services/parking-lot-care'),scripts:[{type:'application/ld+json',children:JSON.stringify(serviceSchema('Parking-Lot Care','Commercial parking-lot sweeping, litter pickup, striping, ADA markings, bollards, wheel stops, and minor upkeep.'))}]}),component:()=> <ServicePage slug="parking-lot-care"/>});
