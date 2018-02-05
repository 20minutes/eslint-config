module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true,
    "browser": true,
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "babel",
  ],
  "rules": {
    "semi": [2, "never"],
    "no-console": [1, {
      "allow": ["warn", "error"],
    }],
    "curly": [1, "all"],
    "no-param-reassign": [1, {
      "props": false,
    }],
    "import/prefer-default-export": 0,
    "no-multiple-empty-lines": [1, { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
    "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": "import", "next": "*" },
        { "blankLine": "never", "prev": "import", "next": "import" },
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
}
