import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/site/content-pages';
import { pageHead, serviceSchema, breadcrumbSchema, faqSchema, jsonLd } from '@/lib/seo';
import { serviceDetails } from '@/lib/site-content';
const path = '/services/parking-lot-care';
const description = 'Commercial parking lot sweeping, litter pickup, striping, ADA markings, bollards, wheel stops, and upkeep for properties in Washington DC, Maryland, and Northern Virginia.';
export const Route = createFileRoute('/services/parking-lot-care')({head:()=>({...pageHead('Parking Lot Sweeping, Striping & Maintenance | DC, MD & VA',description,path),scripts:jsonLd(serviceSchema('Parking-Lot Care',description,path),breadcrumbSchema([['Services','/services'],['Parking-Lot Care',path]]),faqSchema(serviceDetails['parking-lot-care'].faqs))}),component:()=> <ServicePage slug="parking-lot-care"/>});
