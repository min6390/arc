import { ESLintConfig } from "eslint";

const config = /** @type {ESLintConfig} */ ({
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals",         // Next.js + React rules
        "plugin:prettier/recommended",  // tích hợp Prettier
    ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        // ===== TypeScript =====
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",

        // ===== React / Next.js =====
        "react/react-in-jsx-scope": "off", // Next.js 13+ không cần import React
        "react/prop-types": "off",

        // ===== Prettier =====
        "prettier/prettier": ["warn", {}, { usePrettierrc: true }],

        // ===== Tailwind / shadcn/UI =====
        // Không cần rules đặc biệt, nhưng có thể thêm cảnh báo class order
        "sort-class-names/sort-class-names": "off", // nếu bạn dùng plugin, còn không thì bỏ

        // ===== Code chất lượng =====
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-debugger": "warn",
    },
    ignorePatterns: [
        ".next/",
        "node_modules/",
        "out/",
        "dist/",
        "public/",
    ],
});

export default config;
