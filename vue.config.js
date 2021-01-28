module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/sd_t5_todo-app/" : "/",
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true,
      },
    },
  },
}