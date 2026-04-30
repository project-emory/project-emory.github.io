import js from "@eslint/js";
import path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import globals from "globals";
import { defineConfig } from "vite";
import svelteConfig from "./svelte.config.js";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig(
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs["flat/recommended"],
    svelte.configs.prettier,
    prettier,
    ...svelte.configs["flat/prettier"],
    {
        languageOptions: { globals: { ...globals.browser, ...globals.node } }
    },

    {
        files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: [".svelte"],
                parser: ts.parser,
                svelteConfig
            }
        }
    },
    { ignores: ["build/", ".svelte-kit/", "dist/"] }
);
