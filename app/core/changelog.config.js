module.exports = {
  disableEmoji: false,
  format: '{type} {scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf', 'delete'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: ['全体共通'],
  types: {
    chore: {
      description: 'ビルドプロセスまたは補助ツールの変更',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI関連の変更',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントのみの変更',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '新機能開発',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンスチューニング',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'リファクタリング',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'リリース用コミット',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'マークアップ、空白、書式設定、セミコロンの欠落等の機能外変更',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'テストケースの追加',
      emoji: '💍',
      value: 'test',
    },
    delete: {
      description: '機能等の削除',
      emoji: '🗑️',
      value: 'delete',
    },
    messages: {
      type: 'コミットする変更の種類を選択: ',
      customScope: '影響範囲の定義: ',
      subject: '変更点の主題:\n',
      body: '変更点に対する詳細:\n ',
      breaking: '重大な変更をリスト:\n',
      footer: 'このコミットが終了するIssues, e.g #123:',
      confirmCommit: '影響範囲\n',
    },
  },
};
