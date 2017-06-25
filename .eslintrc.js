module.exports = {
  "parser": "babel-eslint",
  "plugins": ["jasmine"],
  "env": {
    "es6": true,
    "node": true,
    "jasmine": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
};