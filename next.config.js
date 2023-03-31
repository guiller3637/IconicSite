const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withVideos = require('next-videos');

module.exports = withCSS(
  withSass({
    webpack: (config) => {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      });

      config.module.rules.push({
        test: /\.(mov|mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });

      return config;
    },
  })
);
