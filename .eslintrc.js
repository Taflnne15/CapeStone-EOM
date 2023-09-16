module.exports = {
    root: true,
    env: {
      node: true
    },
    dev:{
      useeslint: false

    },
    'extends': [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    // parserOptions: {
    //   parser: '@babel/eslint-parser'
    // },
    rules: {
      'no-console': process.env.NODE_ENV ===  'off',
      'no-debugger': process.env.NODE_ENV ===  'off'
    }
  }