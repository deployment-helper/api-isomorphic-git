const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './server.ts',
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts','.js',".json" ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
   plugins: [
    new CopyPlugin([
      { from: './app.yaml', to: './app.yaml' },
      { from: './app.js', to: './app.js' },
      { from: './package.json', to: './package.json' },
    ]),
  ],
};