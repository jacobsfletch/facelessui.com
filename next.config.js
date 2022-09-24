const path = require('path');
const csp = require('./csp');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    const configCopy = { ...config };
    configCopy.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, './src/components/'),
      '@icons': path.resolve(__dirname, './src/icons/'),
      '@layout': path.resolve(__dirname, './src/layout/'),
      '@root': path.resolve(__dirname, './src'),
      '@scss': path.resolve(__dirname, './src/scss/'),
      // IMPORTANT: the next lines are for development only
      // keep them commented out unless actively developing local react modules
      //  "@faceless-ui/grid": path.resolve(__dirname, "../../faceless-ui/grid"),
      // "@faceless-ui/slider": path.resolve(__dirname, "../../faceless-ui/slider"),
      // react: path.join(__dirname, "node_modules/react"),
      // "react-dom": path.join(__dirname, "node_modules/react-dom")
    };

    return configCopy;
  },
  redirects: async () => ([
    {
      source: '/docs',
      destination: '/docs/getting-started',
      permanent: false
    }
  ]),
  async headers() {
    const headers = [];

    headers.push({
      source: '/(.*)', // applies to all routes
      headers: [
        {
          key: 'Content-Security-Policy',
          value: csp,
        }
      ],
    })

    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        headers: [{
          key: 'X-Robots-Tag',
          value: 'noindex',
        }],
        source: '/:path*',
      });
    }

    return headers;
  }
})
