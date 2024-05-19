// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Modify the existing rule to exclude problematic modules
      config.module.rules.push({
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/@react-aria\/ssr/,
          /node_modules\/@react-aria\/utils/,
          /node_modules\/@react-stately\/utils/,
        ],
      });
  
      return config;
    },
  };
  