module.exports = {
  disableEmoji: true,
  format: '{type} {scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf', 'delete'],
  maxMessageLength: 64,
  minMessageLength: 5,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [
    '全体共通',
    'package',
    'ci',
    'core',
    'eslint-config',
    'prettier-config',
    'react-base-layout',
    'scss-util',
    'stylelint-config',
    'tsconfig',
    'utils',
  ],
  types: {
    chore: {
      description: 'ビルドプロセスまたは補助ツールの変更',
      value: 'chore',
    },
    ci: {
      description: 'CI関連の変更',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントのみの変更',
      value: 'docs',
    },
    feat: {
      description: '新機能開発',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンスチューニング',
      value: 'perf',
    },
    refactor: {
      description: 'リファクタリング',
      value: 'refactor',
    },
    release: {
      description: 'リリース用コミット',
      value: 'release',
    },
    style: {
      description: 'マークアップ、空白、書式設定、セミコロンの欠落等の機能外変更',
      value: 'style',
    },
    test: {
      description: 'テストケースの追加',
      value: 'test',
    },
    delete: {
      description: '機能等の削除',
      value: 'delete',
    },
  },
  messages: {
    type: 'コミットする変更の種類を選択: ',
    scope: '影響範囲の定義: ',
    subject: '変更点の主題:\n',
    body: '変更点に対する詳細:\n ',
    breaking: '重大な破壊的変更リスト:\n',
    footer: 'このコミットが関係するチケット等, e.g #123:',
    confirmCommit: '影響範囲\n',
  },
};
