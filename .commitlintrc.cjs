// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: 'Chọn loại commit bạn muốn gửi:',
      scope: 'Chọn phạm vi commit (tùy chọn):',
      customScope: 'Vui lòng nhập phạm vi commit tùy chỉnh:',
      subject: 'Nhập mô tả thay đổi ngắn gọn:\n',
      body: 'Nhập mô tả thay đổi chi tiết hơn (tùy chọn). Sử dụng "|" để ngắt dòng:\n',
      breaking: 'Liệt kê các thay đổi không tương thích ngược (tùy chọn). Sử dụng "|" để ngắt dòng:\n',
      footerPrefixesSelect: 'Chọn tiền tố issue liên quan (tùy chọn):',
      customFooterPrefix: 'Nhập tiền tố issue tùy chỉnh:',
      footer: 'Liệt kê các issue liên quan (tùy chọn) ví dụ: #31, #I3244:\n',
      confirmCommit: 'Có gửi hoặc sửa đổi commit không?'
    },
    types: [
      { value: "feat", name: "feat:     ✨ Tính năng mới |  A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:       🐛 Sửa lỗi | A bug fix", emoji: ":bug:" },
      { value: "docs", name: "docs:      📝  Cập nhật tài liệu | Documentation only changes", emoji: ":memo:" },
      { value: "style", name: "style:     💄 Định dạng mã | Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor:  ♻️ Tái cấu trúc mã |  A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
      { value: "perf", name: "perf:     ⚡️ Cải thiện hiệu suất | A code change that improves performance", emoji: ":zap:" },
      { value: "test", name: "test:     ✅ Liên quan đến test |  Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    📦️  Liên quan đến xây dựng | Changes that affect the build system or external dependencies", emoji: ":package:" },
      { value: "ci", name: "ci:       🎡  Tích hợp liên tục | Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    🔨 Thay đổi khác |  Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️ Hoàn nguyên mã | Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      // Nếu sử dụng gitee làm quản lý phát triển
      { value: 'link', name: 'link:     Liên kết ISSUES đang tiến hành' },
      { value: 'closed', name: 'closed:   Đánh dấu ISSUES đã hoàn tất' }
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}