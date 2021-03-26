const path = require("path");
const resolveConfig = require("tailwindcss/resolveConfig");
const micromatch = require("micromatch");

const tailwindConfig = resolveConfig(require(path.join(process.cwd(), "/tailwind.config.js")));
const plugin = (snowpackConfig, _pluginOptions) => {
  const appCssPath = path.join(snowpackConfig.root || process.cwd(), "/app/app.css");
  return {
    name: "@local/snowpack-tailwindcss-jit",
    onChange({ filePath }) {
      if (!micromatch.isMatch(filePath, tailwindConfig.purge)) {
        return;
      }
      this.markChanged(appCssPath);
    },
  };
};

module.exports = plugin;
