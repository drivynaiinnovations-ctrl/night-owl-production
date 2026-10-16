export type Project = {
 slug: string; title: string; service: 'commercial-doors' | 'commercial-signage' | 'exterior-cleaning' | 'parking-lot-care';
 propertyType: string; location: string; completed: string; summary: string;
 challenge: string; work: string[]; result: string;
 /** Image keys in src/assets/projects (e.g. 'projects/office-doors-before'), saved as <key>-<width>w.webp. */
 photos: { image: string; alt: string; caption?: string }[];
 /** Only published projects get pages, links, and sitemap entries. Publish once real photos and details are in. */
 published: boolean;
};

export const projects: Project[] = [
 {
  slug: 'commercial-office-building-door-service', title: 'Commercial office building door service', service: 'commercial-doors',
  propertyType: 'Commercial office building', location: '[City, State]', completed: '2026-10',
  summary: 'Door service for a commercial office building in the DMV.',
  challenge: '[What was wrong: e.g. lobby entrance closer slamming, suite doors not latching]',
  work: ['[Work item 1]', '[Work item 2]'],
  result: '[Outcome for the building and tenants]',
  photos: [],
  published: false,
 },
];

export const publishedProjects = projects.filter(p => p.published);
