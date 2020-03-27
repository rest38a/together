const path = require("path");

module.exports = function uikitBootsrap(moduleOptions) {
  // se non è presente l'opzione in nuxt.config.js
  if (moduleOptions.uikit !== false)
    this.options.css.push({
      src: "@assets/scss/uikit-core.scss",
      lang: "scss"
    });
  this.addPlugin({ src: path.resolve(__dirname, "plugin.js"), ssr: false });
};
