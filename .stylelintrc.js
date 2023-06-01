const propertyGroups = require('stylelint-config-recess-order/groups');

// https://rfs.jp/sb/html-css/html-css-guide/rscss.html
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-rscss/config',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  rules: {
    'no-duplicate-selectors': true,
    'selector-class-pattern': null,
    'declaration-empty-line-before': null, // orderの関係上

    'rscss/class-format': [
      true,
      {
        component: 'camel-case',
        maxDepth: 2,
      },
    ],
    // Configure the rule manually.
    'order/properties-order': propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
    })),
  },
};
