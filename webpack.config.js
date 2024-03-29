const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;
const isDevelopment = nodeEnv === 'dev';
const isHome = nodeEnv === 'home';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.scss', 'svg', 'png', 'jpg', 'jpeg'],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.[contenthash].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',

      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        include: /node_modules/,
        use: [
          {
            loader: MiniCss.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCss.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new AntdDayjsWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Web App',
      template: path.resolve(__dirname, './src/template/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCss({
      filename: 'static/css/style.[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'src/static'), to: path.join(__dirname, 'dist/static') },
      ],
    }),
  ],
};
