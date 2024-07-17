/** @type {import("prettier").Config} */

const baseConfig = require("../shared/prettier.config");

module.exports = {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    ...baseConfig.overrides,
    {
      files: "*.html",
      options: {
        parser: "angular",
        tabWidth: 2,
        bracketSameLine: true,
        singleAttributePerLine: true,
        printWidth: 120,
      },
    },
  ],
};
