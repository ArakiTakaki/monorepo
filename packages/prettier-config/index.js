module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],

  printWidth: 120, //1行の文字列を120文字にする
  singleQuote: true, //ダブルに代わりシングルクオーテーションを使う
  semi: true, //行末にセミコロンを追加
  trailingComma: 'es5', //複数行の場合は可能な限り末尾のカンマを表示
  tabWidth: 2, //タグのスペース２ デフォルトは2
  useTabs: false, //スペースをタブに代える デフォルトはfalse

  // import order
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^types$',
    '^@local/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
