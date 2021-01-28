module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: "docs",
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true,
      },
    },
  },
}