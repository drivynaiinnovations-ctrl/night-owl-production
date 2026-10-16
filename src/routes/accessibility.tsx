import { createFileRoute } from '@tanstack/react-router';
import { AccessibilityPage } from '@/components/site/content-pages';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/accessibility')({head:()=>({...pageHead('Accessibility Statement','Night Owls Commercial Services accessibility statement and how to get help using callnightowls.com.','/accessibility'),scripts:jsonLd(breadcrumbSchema([['Accessibility Statement','/accessibility']]))}),component:AccessibilityPage});
