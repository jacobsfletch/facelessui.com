import { GetServerSideProps } from "next";
// import { promises as fs } from "fs";

const Sitemap = () => { };

// TODO: generate sitemap dynamically from pages, see note below
const pages = [
  "/docs/getting-started",
  "/docs/modal",
  "/docs/modal/setup",
  "/docs/modal/routing",
  "/docs/modal/api",
  "/docs/modal/examples",
  "/docs/modal/examples/drawer",
  "/docs/modal/examples/lightbox",
  "/docs/modal/releases",
  "/docs/slider",
  "/docs/slider/api",
  "/docs/slider/setup",
  "/docs/slider/examples",
  "/docs/slider/examples/custom-scrollbar",
  "/docs/slider/examples/dots",
  "/docs/slider/examples/free-scrolling",
  "/docs/slider/examples/lightbox",
  "/docs/slider/examples/marquee",
  "/docs/slider/examples/responsive",
  "/docs/slider/examples/simple",
  "/docs/slider/examples/snap",
  "/docs/slider/examples/thumbnail",
  "/docs/slider/releases",
  "/docs/css-grid",
  "/docs/css-grid/api",
  "/docs/css-grid/releases",
  "/docs/css-grid/setup",
  "/docs/jumplist",
  "/docs/jumplist/api",
  "/docs/jumplist/setup",
  "/docs/jumplist/releases",
  "/docs/collapsibles/api",
  "/docs/collapsibles",
  "/docs/collapsibles/releases",
  "/docs/collapsibles/setup",
  "/docs/collapsibles/examples/dropdown",
  "/docs/collapsibles/examples/accordion",
  "/docs/window-info",
  "/docs/window-info/setup",
  "/docs/window-info/api",
  "/docs/window-info/releases",
  "/docs/scroll-info",
  "/docs/scroll-info/api",
  "/docs/scroll-info/releases",
  "/docs/scroll-info/setup",
  "/docs/mouse-info/releases",
  "/docs/mouse-info/api",
  "/docs/mouse-info",
  "/docs/mouse-info/setup",
  "/releases",
];


// const blacklistedPages = [
//   '/sitemap.xml',
//   '/.DS_Store',
//   '/404',
//   '/500',
//   '/_error',
//   '/_app',
//   '/_document',
//   '/styleguide',
// ];

// type Route = {
//   page: string
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;

  const staticPaths: string[] = pages;

  // NOTE: this doesn't work on Vercel, but does locally in production
  // if (process.env.NODE_ENV === 'production') {
  //   try {
  //     const file = await fs.readFile(`.next/routes-manifest.json`);
  //     const routesManifest = await JSON.parse(file as unknown as string);
  //     if (routesManifest.staticRoutes) {
  //       routesManifest.staticRoutes.forEach((route: Route) => {
  //         const { page } = route;
  //         if (page && !blacklistedPages.includes(page)) {
  //           staticPaths.push(page);
  //         }
  //       });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_APP_URL}/</loc>
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
