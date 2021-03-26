const path = require("path");
const resolveConfig = require("tailwindcss/resolveConfig");
const micromatch = require("micromatch");

const tailwindConfig = resolveConfig(require(path.join(process.cwd(), "/tailwind.config.js")));
const plugin = (snowpackConfig, _pluginOptions) => {
  const appCssPath = path.join(snowpackConfig.root || process.cwd(), "/app/app.css");
  return {
    name: "@local/snowpack-tailwindcss-jit",
    onChange({ filePath }) {
      let m =
        tailwindConfig.purge && tailwindConfig.purge.content
          ? tailwindConfig.purge.content
          : tailwindConfig.purge;

      if (!micromatch.isMatch(filePath, m)) {
        return;
      }
      this.markChanged(appCssPath);
    },
  };
};

module.exports = plugin;
