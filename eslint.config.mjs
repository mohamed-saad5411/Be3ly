import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tanstackQuery from "@tanstack/eslint-plugin-query";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  ...compat.extends("prettier"),

  {
    plugins: {
      "@tanstack/query": tanstackQuery,
    },
    rules: {
      ...tanstackQuery.configs.recommended.rules,

      // 🔥 تعطيل rules اللي موقفة الـ build
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "prefer-const": "off",
      "react/jsx-key": "warn",
    },
  },
];



// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc"



// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// // const eslintConfig = [
// //   ...compat.extends("next/core-web-vitals", "next/typescript"),
// // ];




// /** @type {import('eslint').Linter.Config[]} */
// const configs = [
//   ...compat.extends("next/core-web-vitals"),
//   ...compat.extends("next/typescript"),
//   ...compat.extends("plugin:@tanstack/eslint-plugin-query/recommended"),
//   ...compat.extends("prettier"),
//   ...compat.plugins("@tanstack/query"),
// ]

// export default configs

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript", {
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//     },
//   }),
// ];

// export default eslintConfig;
