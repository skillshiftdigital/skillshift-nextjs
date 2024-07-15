import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import sanityClient from '@/utils/sanity/client';

const EXTERNAL_DATA_URL = 'https://www.skillshift.com.au';

function cleanUrl(url: string): string {
  return url
    .replace(/\.$/, '') // Remove trailing dot
    .replace(/([^:]\/)\/+/g, "$1") // Remove duplicate slashes
    .replace(/^https:\/\/skillshift\.com\.au/, 'https://www.skillshift.com.au'); // Add www
}

async function getAllSlugs(contentType: string): Promise<string[]> {
  try {
    let query;
    switch (contentType) {
      case 'author':
        query = `*[_type == "teamMember"]{name, "slug": slug.current}`;
        break;
      case 'category':
        query = `*[_type == "category"].slug.current`;
        break;
      case 'post':
        query = `*[_type == "post" || _type == "blog"].slug.current`;
        break;
      case 'service':
        query = `*[_type == "services-digital-agencies"]{title, "slug": slug.current}`;
        break;
      default:
        query = `*[_type == "${contentType}"].slug.current`;
    }
    console.log(`Fetching data for content type: ${contentType}`);
    console.log(`Query: ${query}`);
    const result = await sanityClient.fetch(query);
    console.log(`Fetched result for ${contentType}:`, JSON.stringify(result, null, 2));
    
    let slugs;
    if (['author', 'service'].includes(contentType)) {
      slugs = result.map((item: any) => item.slug || item.name || item.title).filter((slug: string) => slug != null && slug !== '');
    } else {
      slugs = result.filter((slug: string) => slug != null && slug !== '');
    }
    
    console.log(`Processed ${slugs.length} slugs for ${contentType}`);
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

async function getPages(dir: string, urlPath: string = ''): Promise<string[]> {
  const files = fs.readdirSync(dir);
  let pages: string[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      pages = pages.concat(await getPages(filePath, path.join(urlPath, file)));
    } else if (stats.isFile() && file.endsWith('.tsx') && !['_app.tsx', '_document.tsx', '404.tsx', 'layout.tsx'].includes(file)) {
      let pageUrl = path.join(urlPath, file === 'index.tsx' ? '' : file.replace('.tsx', ''));
      pageUrl = pageUrl.replace(/\\/g, '/'); // Replace backslashes with forward slashes

      if (file.startsWith('[') && file.endsWith('].tsx')) {
        console.log(`Processing dynamic route: ${file}`);
        const paramName = file.slice(1, -5); // Remove '[' and '].tsx'
        let contentType = paramName.replace('Name', '').replace('Slug', '');
        if (contentType === 'blog') contentType = 'post';
        const slugs = await getAllSlugs(contentType);
        if (slugs.length > 0) {
          const dynamicPages = slugs.map(slug => `${EXTERNAL_DATA_URL}/${pageUrl.replace(`[${paramName}]`, encodeURIComponent(slug))}`);
          console.log(`Generated ${dynamicPages.length} dynamic pages for ${file}`);
          pages = pages.concat(dynamicPages);
        } else {
          console.log(`No slugs found for ${file}, skipping`);
        }
      } else {
        pages.push(`${EXTERNAL_DATA_URL}/${pageUrl}`);
      }
    }
  }

  return pages;
}

async function getAdditionalPages(): Promise<string[]> {
  let additionalPages: string[] = [];

  // Add individual blog post pages
  const blogSlugs = await getAllSlugs('post');
  additionalPages = additionalPages.concat(blogSlugs.map(slug => `${EXTERNAL_DATA_URL}/resources/${encodeURIComponent(slug)}`));

  // Add individual service pages
  const serviceSlugs = await getAllSlugs('service');
  additionalPages = additionalPages.concat(serviceSlugs.map(slug => `${EXTERNAL_DATA_URL}/service/${encodeURIComponent(slug)}`));

  return additionalPages;
}

const SiteMap: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    console.log('Starting sitemap generation');
    const pagesDirectory = path.join(process.cwd(), 'pages');
    let pages = await getPages(pagesDirectory);
    
    console.log(`Total pages before adding additional pages: ${pages.length}`);
    
    // Add additional pages
    const additionalPages = await getAdditionalPages();
    pages = pages.concat(additionalPages);
    
    console.log(`Total pages after adding additional pages: ${pages.length}`);
    
    // Remove duplicate and unnecessary pages
    pages = Array.from(new Set(pages)).filter(page => 
      !page.includes('/api/') && 
      !page.endsWith('/layout') &&
      page !== `${EXTERNAL_DATA_URL}/` &&
      !page.includes('[') && // Remove any remaining pages with square brackets
      !page.includes('null') // Remove any pages with 'null' in the URL
    );
    
    console.log(`Total pages after filtering: ${pages.length}`);
    
    // Add the root URL
    pages.unshift(EXTERNAL_DATA_URL);

    const sitemap = generateSiteMap(pages);

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