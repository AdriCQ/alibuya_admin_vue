const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
    new VuetifyLoaderPlugin()
  ]
}