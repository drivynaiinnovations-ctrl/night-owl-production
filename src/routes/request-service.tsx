import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { RequestPage } from '@/components/site/request-form';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/request-service')({validateSearch:z.object({service:z.string().max(30).optional()}),head:()=>pageHead('Request Commercial Service','Request commercial doors, signage, exterior cleaning, or parking-lot care. Share property details, photos, and contact preferences.','/request-service'),component:RequestRoute});
function RequestRoute(){const {service}=Route.useSearch();return <RequestPage service={service}/>;}
