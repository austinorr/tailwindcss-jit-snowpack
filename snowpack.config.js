module.exports = {
  mount: {
    app: "/",
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "postcss ./app/app.css -o ./build/app.pcss --no-source-map", // production build command
        watch: "postcss --watch  ./app/app.pcss -o ./build/app.css --no-source-map", // (optional) dev server command
      },
    ],
  ],
};
