const path = require('path');

module.exports = {
  "env": {
      // "browser": true,
      "es6": true,
      "node": true,
      "jasmine": true
  },
  "globals": { 
    "expect": true,
  },
  "parserOptions": {
      "sourceType": "module"
  },
  "extends": [
      "airbnb-base"
  ],
  // "settings": { 
  //   'import/resolver': {
  //     webpack: {
  //       config: path.resolve(__dirname, 'webpack.node.config.js')
  //     }
  //   }
  // },
  "plugins": [        
      'import'
  ],
  "rules": {
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "class-methods-use-this": 0,
    "max-len": ["error", { "code": 120 }],
    "no-restricted-syntax": 0,
  }
};
