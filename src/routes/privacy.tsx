import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/content-pages';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/privacy')({head:()=>pageHead('Privacy Policy','How Night Owls Commercial Services collects, uses, and stores service request information and uploaded photos.','/privacy'),component:()=> <LegalPage type="privacy"/>});
