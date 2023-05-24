/* eslint-env node */
module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-pseudo-class-no-unknown': [
      true, 
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    'selector-class-pattern': '([a-z][a-z0-9]*)(_[a-z0-9]+)*(__[a-z0-9]+)*(-[a-z0-9]+)*(--[a-z0-9]+)*$',
  },
}