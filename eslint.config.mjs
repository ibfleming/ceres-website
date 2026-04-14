import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eslint-config-next is CJS and the VS Code ESLint extension's resolver
// doesn't reliably honor its exports field from an ESM config. Load the
// subpath via createRequire so both pnpm lint and the editor agree.
const requireCjs = createRequire(import.meta.url);
const nextCoreWebVitals = requireCjs("eslint-config-next/core-web-vitals");

export default defineConfig(
  { ignores: ["*.config.*", "*.config.mjs"] },
  js.configs.recommended,
  ...nextCoreWebVitals,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
);
