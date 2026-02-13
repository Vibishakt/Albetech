import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import airbnb from "eslint-config-airbnb";

export default [
  {
    ignores: ["dist"],
  },

  js.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  reactRefresh.configs.vite,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "linebreak-style": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": "off",
      "arrow-body-style": "off",
      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "no-spaced-func": "error",
      "no-trailing-spaces": "error",
      "import/no-unresolved": "off",
      "comma-dangle": ["error", "never"],
      "import/extensions": "off",
      "react/jsx-props-no-spreading": "off",
      "react/button-has-type": "off",
    },
  },
];
