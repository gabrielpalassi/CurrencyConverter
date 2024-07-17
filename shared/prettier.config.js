/** @type {import("prettier").Config} */

module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.js"],
      options: {
        tabWidth: 2,
        arrowParens: "always",
        printWidth: 120,
      },
    },
  ],
};
