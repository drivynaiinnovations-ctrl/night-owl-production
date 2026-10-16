import { createFileRoute, notFound } from '@tanstack/react-router';
import { GuidePage } from '@/components/site/content-pages';
import { guides } from '@/lib/guides';
import { pageHead, articleSchema, breadcrumbSchema, jsonLd } from '@/lib/seo';
export const Route = createFileRoute('/guides/$slug')({
 loader:({params})=>{const g=guides.find(x=>x.slug===params.slug);if(!g)throw notFound();return {slug:g.slug};},
 head:({params})=>{const g=guides.find(x=>x.slug===params.slug);if(!g)return {};const path=`/guides/${g.slug}`;const head=pageHead(g.title,g.description,path);return {...head,meta:[...head.meta.map(m=>'property' in m&&m.property==='og:type'?{property:'og:type',content:'article'}:m),{property:'article:published_time',content:g.published}],scripts:jsonLd(articleSchema(g,path),breadcrumbSchema([['Guides','/guides'],[g.title,path]]))};},
 component:GuideRoute,
});
function GuideRoute(){const {slug}=Route.useLoaderData();return <GuidePage slug={slug}/>;}
