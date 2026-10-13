import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/content-pages';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/terms')({head:()=>pageHead('Terms of Use','Website terms and information about service inquiries, scheduling, scope, and commercial service agreements.','/terms'),component:()=> <LegalPage type="terms"/>});
