/* eslint-env node */

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  plugins: ["react", "react-hooks", "unused-imports", "import"],
  parserOptions: {
    ecmaVersion: 2021, // Latest ECMAScript syntax
    sourceType: "module",
    ecmaFeatures: {
      jsx: true // Enable JSX parsing
    }
  },
  settings: {
    react: {
      version: "detect" // Auto-detect React version
    }
  },
  env: {
    browser: true
  },
  rules: {
    // unused imports cleanup
    "unused-imports/no-unused-imports": "error",

    // import order enforcement
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always"
      }
    ],

    // React-specific rules (optional examples)
    "react/react-in-jsx-scope": "off", // Not needed if React 17+
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off"
  }
};
