import { GetServerSideProps } from "next";
import { promises as fs } from "fs";

const Sitemap = () => { };

const blacklistedPages = [
  '/sitemap.xml',
  '/.DS_Store',
  '/404',
  '/500',
  '/_error',
  '/_app',
  '/_document',
  '/styleguide',
];

type Route = {
  page: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  const staticPaths: string[] = [];

  if (process.env.NODE_ENV === 'production') {
    try {
      const file = await fs.readFile(`.next/routes-manifest.json`);
      const routesManifest = await JSON.parse(file as unknown as string);
      if (routesManifest.staticRoutes) {
        routesManifest.staticRoutes.forEach((route: Route) => {
          const { page } = route;
          if (page && !blacklistedPages.includes(page)) {
            staticPaths.push(page);
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_APP_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    ${staticPaths.map((path) => {
    return `<url>
  <loc>${`${process.env.NEXT_PUBLIC_APP_URL}${path}`}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
`;
  }).join("")}
</urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
