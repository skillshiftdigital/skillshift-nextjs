import { GetServerSideProps } from 'next';
import sanityClient from '@/utils/sanity/client';

const EXTERNAL_DATA_URL = 'https://www.skillshift.com.au';

function cleanUrl(url: string): string {
  return url
    .replace(/\.$/, '')
    .replace(/([^:]\/)\/+/g, "$1")
    .replace(/^https:\/\/skillshift\.com\.au/, 'https://www.skillshift.com.au');
}

async function getAllSlugs(contentType: string): Promise<string[]> {
  try {
    let query;
    switch (contentType) {
      case 'post':
        query = `*[_type == "blogPost"]{slug{current}}`;
        break;
      case 'service':
        query = `*[_type == "services-digital-agencies"]{slug{current}}`;
        break;
      default:
        query = `*[_type == "${contentType}"]{slug{current}}`;
    }
    console.log(`Fetching data for content type: ${contentType}`);
    console.log(`Query: ${query}`);
    const result = await sanityClient.fetch(query);
    console.log(`Raw result for ${contentType}:`, JSON.stringify(result, null, 2));
    
    const slugs = result
      .map((item: any) => item.slug?.current)
      .filter((slug: string | undefined) => slug != null && slug !== '');
    
    console.log(`Processed ${slugs.length} slugs for ${contentType}:`, slugs);
    return slugs;
  } catch (error) {
    console.error(`Error fetching slugs for ${contentType}:`, error);
    return [];
  }
}

function generateSiteMap(pages: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${cleanUrl(page)}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

async function getStaticPages(): Promise<string[]> {
  // Define your static pages here
  const staticPages = [
    '/',
    '/about-us',
    '/contact',
    '/privacy-policy',
    '/resources',
    '/services',
    '/services/all-services',
    '/services/operational-support',
    '/services/hr-services',
    '/services/digital-transformation',
    '/services/engineering-services',
    '/services/strategic-services',
    '/services/creative-services',
    '/services/digital-services',
    '/services/service-diversification',
    '/services/training-development',
    '/services/technical-support',
    '/technology'
  ];
  return staticPages.map(page => `${EXTERNAL_DATA_URL}${page}`);
}

async function getAdditionalPages(): Promise<string[]> {
  let additionalPages: string[] = [];

  // Add static pages
  additionalPages = additionalPages.concat(await getStaticPages());
  console.log(`Added ${additionalPages.length} static pages`);

  // Add individual blog post pages
  const blogSlugs = await getAllSlugs('post');
  console.log(`Retrieved ${blogSlugs.length} blog slugs`);
  additionalPages = additionalPages.concat(blogSlugs.map(slug => `${EXTERNAL_DATA_URL}/resources/${encodeURIComponent(slug)}`));

  // Add individual service pages
  const serviceSlugs = await getAllSlugs('service');
  console.log(`Retrieved ${serviceSlugs.length} service slugs`);
  additionalPages = additionalPages.concat(serviceSlugs.map(slug => `${EXTERNAL_DATA_URL}/service/${encodeURIComponent(slug)}`));

  console.log(`Total additional pages: ${additionalPages.length}`);
  return additionalPages;
}

const SiteMap: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  try {
    console.log('Starting sitemap generation');
    
    // Force regeneration if the 'force' query parameter is present
    if (query.force !== undefined) {
      console.log('Forced regeneration of sitemap');
    }

    let pages = await getAdditionalPages();
    
    console.log(`Total pages before filtering: ${pages.length}`);
    
    // Remove duplicate and unnecessary pages
    pages = Array.from(new Set(pages)).filter(page => 
      !page.includes('/api/') && 
      !page.endsWith('/layout') &&
      !page.includes('[') && // Remove any remaining pages with square brackets
      !page.includes('null') // Remove any pages with 'null' in the URL
    );
    
    console.log(`Total pages after filtering: ${pages.length}`);

    const sitemap = generateSiteMap(pages);

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    console.log('Sitemap generation completed');

    return {
      props: {},
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.statusCode = 500;
    res.end('Error generating sitemap');
    return { props: {} };
  }
};

export default SiteMap;