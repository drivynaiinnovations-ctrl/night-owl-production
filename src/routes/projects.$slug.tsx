import { createFileRoute, notFound } from '@tanstack/react-router';
import { ProjectPage } from '@/components/site/content-pages';
import { publishedProjects } from '@/lib/projects';
import { pageHead, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/projects/$slug')({
 loader:({params})=>{const p=publishedProjects.find(x=>x.slug===params.slug);if(!p)throw notFound();return {slug:p.slug};},
 head:({params})=>{const p=publishedProjects.find(x=>x.slug===params.slug);if(!p)return {};const path=`/projects/${p.slug}`;return {...pageHead(`${p.title} | ${p.location}`,p.summary,path),scripts:jsonLd(breadcrumbSchema([['Projects','/projects'],[p.title,path]]))};},
 component:ProjectRoute,
});
function ProjectRoute(){const {slug}=Route.useLoaderData();return <ProjectPage slug={slug}/>;}
