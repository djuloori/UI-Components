module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],    
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
      "react"
  ],
  "rules": {
      "indent": [
          "error",
          "tab"
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "jsx-quotes": [
          "error",
          "prefer-single"
      ]
  },
  "settings": {
      "react":{
          "version": "detect"
      }
  }
};