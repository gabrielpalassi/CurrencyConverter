/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['*.ts', '*.js', '*.mjs', '*.cjs'],
      options: {
        tabWidth: 2,
        arrowParens: 'always',
        printWidth: 120,
        singleQuote: true,
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'angular',
        tabWidth: 2,
        bracketSameLine: true,
        singleAttributePerLine: true,
        printWidth: 120,
      },
    },
  ],
};
