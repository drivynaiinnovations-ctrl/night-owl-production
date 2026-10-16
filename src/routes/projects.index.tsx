import { createFileRoute, notFound } from '@tanstack/react-router';
import { ProjectsPage } from '@/components/site/content-pages';
import { publishedProjects } from '@/lib/projects';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/projects/')({loader:()=>{if(!publishedProjects.length)throw notFound();},head:()=>({...pageHead('Projects','Recent commercial door, signage, exterior cleaning, and parking lot projects for office buildings and commercial properties in DC, Maryland, and Northern Virginia.','/projects'),scripts:jsonLd(breadcrumbSchema([['Projects','/projects']]))}),component:ProjectsPage});
