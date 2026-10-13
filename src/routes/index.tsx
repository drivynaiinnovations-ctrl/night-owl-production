import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/site/home';
import { pageHead, businessSchema, websiteSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/')({head:()=>({...pageHead('Night Owls Service | Commercial Property Services in DC, MD & VA','Night Owls Service handles commercial door repair, sign installation, pressure washing, and parking lot maintenance for businesses in Washington DC, Maryland, and Northern Virginia. One call, every job handled.','/'),scripts:jsonLd(businessSchema(),websiteSchema())}),component:HomePage});
