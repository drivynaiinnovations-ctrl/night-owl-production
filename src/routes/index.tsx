import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/site/home';
import { pageHead, businessSchema } from '@/lib/seo';
export const Route = createFileRoute('/')({head:()=>({...pageHead('One call. Every job handled.','Commercial doors, signage, exterior cleaning, and parking-lot care coordinated through one dependable service team. Night Owls Service.','/'),scripts:[{type:'application/ld+json',children:JSON.stringify(businessSchema())}]}),component:HomePage});
