module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:unicorn/recommended",
    "eslint-config-airbnb-base"
  ],
  "plugins": [
    "eslint-plugin-jest",
    "eslint-plugin-unicorn",
    "eslint-plugin-import"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "settings": {
    "import/extensions": [".js", ".jsx"]
  },
  "rules": {
    "no-plusplus": "off",
    "operator-linebreak": ["error", "after"],
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
    "no-debugger": "warn",
    "no-else-return": "off",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1, "maxBOF": 0 }],
    "no-nested-ternary": "off",
    "no-negated-condition": "error",
    "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
    "no-underscore-dangle": "error",
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "max-len": ["error", {
      "code": 120,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreRegExpLiterals": true,
      "ignoreTemplateLiterals": true
    }],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "semi": "error",
    "eol-last": ["error", "always"],
    "quotes": ["error", "single"],
    "quote-props": ["error", "consistent-as-needed"],
    "require-atomic-updates": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": ["error", { "consistent": true }],
    "padding-line-between-statements": ["error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
    ],
    "array-bracket-spacing": ["error", "never"],
    "array-bracket-newline": ["error", "consistent"],
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],

    "import/first": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-cycle": "error",
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["**/*.test.js"]
    }],
    "import/no-useless-path-segments": "error",
    "import/order": ["error", {
      "groups": [
        ["builtin", "external"],
        ["internal"],
        ["parent", "sibling", "index"]
      ],
      "newlines-between": "always",
    }],
    "import/prefer-default-export": "off",

    "jest/expect-expect": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-to-be-null": "error",
    "jest/prefer-to-be-undefined": "error",
    "jest/no-commented-out-tests": "error",
    "jest/consistent-test-it": ["error", { "fn": "it", "withinDescribe": "it" }],

    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": ["error", { "case": "kebabCase" }],
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/expiring-todo-comments": "off"
  }
};
