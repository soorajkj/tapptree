import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginQuery from "@tanstack/eslint-plugin-query";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...pluginQuery.configs["flat/recommended"],
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    ignorePatterns: ["**/generated/"],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports", // enforce `import type`
          disallowTypeAnnotations: false,
        },
      ],
    },
  }),
];

export default eslintConfig;
