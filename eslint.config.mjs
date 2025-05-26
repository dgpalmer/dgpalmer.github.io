import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next"],
    settings: {
      next: {
        rootDir: "packages/my-app/",
      },
    },
    rules: {
      quotes: ["error", "single", { allowTemplateLiterals: true }],
      "comma-dangle": "off",
    },
  }),
];

export default eslintConfig;
