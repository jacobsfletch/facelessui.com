const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
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
}
