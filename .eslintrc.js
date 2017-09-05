module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  globals: {
    "$f": true,
    "ga": true
  },
  rules: {
      "no-console": 0
  }
};