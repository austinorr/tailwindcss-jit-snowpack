module.exports = {
  mount: {
    app: "/",
  },
  plugins: ["@snowpack/plugin-postcss", "@local/snowpack-tailwindcss-jit"],
  optimize: {
    minify: true,
    target: "es2020",
  },
};
