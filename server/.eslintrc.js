module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "./src/tsconfig.json", "./test/tsconfig.json"],
    sourceType: "module",
    // makes the parser resolve the project configuration relative to .eslintrc.js
    // Ref: https://stackoverflow.com/a/64940811
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "node_modules/**/*",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "unused-imports",
    "sort-imports-es6-autofix",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".ts", ".d.ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": ["error"],
    // This is a harder limit, the code is auto-formatted by prettier that
    // has a "softer" limit at 88.
    // Keep it at as warning for now for developers to fix them when they find them
    "max-len": ["warn", { code: 120 }],
    "valid-jsdoc": "off", // TODO: fix in future, for now it is distracting
    "no-multiple-empty-lines": ["error", { max: 2 }],
    "comma-dangle": ["error", "always-multiline"],
    "no-duplicate-imports": "error",
    // We use `unused-imports/no-unused-vars` instead
    "no-unused-vars": "off",
    // We use `unused-imports/no-unused-vars` instead
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error", // keep it strict to ensure no error in the code
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "^_", // Prefix an underscore to arg name to ignore
        varsIgnorePattern: "^_", // Prefix an underscore to var name to ignore
      },
    ],
    "sort-imports-es6-autofix/sort-imports-es6": [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    // https://github.com/firebase/firebase-admin-node/discussions/1359#discussioncomment-977900
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^firebase-admin/.+"],
      },
    ],
  },
  reportUnusedDisableDirectives: true,
};
