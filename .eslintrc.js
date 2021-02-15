module.exports = {
  plugins: ["prettier", "@typescript-eslint"],
  extends: ["airbnb-typescript", "react-app", "prettier", "prettier/react", "prettier/@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    // turn eslint quotes off, as dealt with in prettier settings
    "@typescript-eslint/quotes": ["off"],
    // stop all usage of any
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: false,
      },
    ],
    // Allow htmlFor to be used without the control nested
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
      },
    ],
  },
};
