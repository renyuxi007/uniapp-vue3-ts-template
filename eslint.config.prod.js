import js from "@eslint/js"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettierConfig from "eslint-config-prettier/flat"
import pluginVue from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"

export default [
  {
    ignores: ["dist/**", "unpackage/**", "node_modules/**", "*.config.js"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "prefer-const": "error"
    }
  },
  {
    files: ["src/**/*.ts", "src/**/*.d.ts", "*.d.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...tsPlugin.configs["recommended-type-checked"].rules,
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/ban-ts-comment": "warn"
    }
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        uni: "readonly",
        wx: "readonly",
        getCurrentPages: "readonly",
        getApp: "readonly"
      }
    },
    plugins: {
      vue: pluginVue,
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...pluginVue.configs.recommended.rules,
      "vue/multi-word-component-names": "off",
      "vue/no-unused-vars": "warn",
      "vue/no-setup-props-destructure": "off",
      "vue/no-deprecated-html-element-is": "off",
      "vue/attributes-order": "off",
      "vue/no-v-html": "warn",
      "vue/no-unused-components": "warn"
    }
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  },
  prettierConfig
]
