module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',    
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/state-in-constructor": [2, "never"],
    "react/jsx-filename-extension" : [1, {"extensions":[".js",".jsx"]}],
    "react/jsx-props-no-spreading": "off",
    "semi": [2, "never"],
    "react/prop-types":"off",
    "no-console":"off",
    "import/order":"off",
    "consistent-return":"off",
    "max-len": "off",
    "comma-dangle":"off",
    "no-nested-ternary":"off",
    "react/no-unused-state":"off",
    "no-shadow":"off",
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
  }],
  "react/destructuring-assignment":"off",
  "jsx-a11y/click-events-have-key-events":"off",
  "jsx-a11y/no-static-element-interactions":"off",
  "no-param-reassign":"off",
  "jsx-a11y/anchor-is-valid":"off",
  "react/jsx-no-target-blank":"off",
  "camelcase":"off",
  "no-plusplus":"off"
  },
};
