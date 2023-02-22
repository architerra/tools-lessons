// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: {
//       test: /.css$/,
//       use: ['style-loader', 'css-loader', 'sass-loader'],
//     },
//   },
// };

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images',
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
