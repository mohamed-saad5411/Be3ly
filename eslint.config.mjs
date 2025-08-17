import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { FlatCompat } from "@eslint/eslintrc"
// import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];




/** @type {import('eslint').Linter.Config[]} */
const configs = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  ...compat.extends("plugin:@tanstack/eslint-plugin-query/recommended"),
  ...compat.extends("prettier"),
  ...compat.plugins("@tanstack/query"),
]

export default configs

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript", {
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//     },
//   }),
// ];

// export default eslintConfig;
