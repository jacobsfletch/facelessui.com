import { GetServerSideProps } from "next";
import fs from "fs";
const path = require("path");

const Sitemap = () => { };

const blacklistedPaths = [
  'api',
]

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  const getStaticPages = () => {
    const paths: {
      path: string
      lastModified: string
    }[] = [];

    const pathToPagesDir: string = process.env.NODE_ENV === 'production' ? '.next/server/pages' : 'src/pages';

    const recursivelyGetPages = (directoryPath: string) => {
      const directory = fs.readdirSync(directoryPath);

      directory.forEach(fileName => {
        const pathIsBlacklisted = blacklistedPaths.includes(fileName);
        const isDynamic = fileName.startsWith('[');

        if (!pathIsBlacklisted && !isDynamic) {
          const fileExt = path.extname(fileName);
          const isJSFile = fileExt === ".js" || fileExt === '.tsx'; //  for develeopment
          const isHTMLFile = fileExt === ".html"; // for production

          const fullPath = path.join(directoryPath, fileName);

          if (isJSFile || isHTMLFile) {
            if (!pathIsBlacklisted) {
              let permalink = fullPath
                .replace(pathToPagesDir, '')
                .replace('.tsx', '')
                .replace('.js', '')
                .replace('.html', '');


              if (permalink.endsWith('/index')) permalink = permalink.replace('/index', '');

              const pageIsBlacklisted = blacklistedPages.includes(permalink);

              if (permalink && !pageIsBlacklisted) {
                return paths.push({
                  path: `${process.env.NEXT_PUBLIC_APP_URL}${permalink}`,
                  lastModified: new Date().toISOString()
                });
              }
            }
          } else {
            const isDirectory = fs.statSync(fullPath).isDirectory();

            if (isDirectory) {
              return recursivelyGetPages(fullPath);
            }
          }
        }
        return
      });
    }

    recursivelyGetPages(pathToPagesDir);

    return paths;
  }

  const staticPaths = getStaticPages();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_APP_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      ${staticPaths.map((page) => {
    const {
      path,
      lastModified
    } = page;

    return `<url>
    <loc>${path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;
  })
      .join("")}
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
