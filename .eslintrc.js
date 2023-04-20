module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint-config-airbnb-base",
    "airbnb/rules/react",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: ["*.js"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: ["tsx"] }],
    "react/function-component-definition": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off",
    "react/no-this-in-sfc": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "import/no-relative-packages": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "prefer-destructuring": "off",
    "react/require-default-props": "off",
  },
};
