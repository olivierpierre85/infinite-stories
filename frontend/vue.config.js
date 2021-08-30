const path = require("path");
//Uncommment before production?
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? 'https://static.olpiweb.be/infinite/'
    : '/',
    outputDir: path.resolve(__dirname, process.env.OUTPUT_DIR),
    assetsDir: process.env.ASSETS_DIR
  }