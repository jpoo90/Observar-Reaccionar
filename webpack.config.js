const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
  return {
    entry: `./${env.EJERCICIO}/index.js`,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Observando con RxJS',
        template: `./${env.EJERCICIO}/index.html`,
      }),
      new CleanWebpackPlugin(['dist']),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true,
    },
  };
};
