const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/", // Эта настройка критична для правильного отображения на Vercel
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /react/, // Если импорт через ?react -> используем @svgr/webpack
            use: ["@svgr/webpack"],
          },
          {
            type: "asset/resource", // Если обычный импорт -> вставляем URL
          },
        ],
      },
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Для изображений
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }), // Генерация HTML
    ...(process.env.NODE_ENV === "development"
      ? [new BundleAnalyzerPlugin()] // Анализ бандла в режиме разработки
      : []),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  mode: "development", // на продакшн — 'production'
};
