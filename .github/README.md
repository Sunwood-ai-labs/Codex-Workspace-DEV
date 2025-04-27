# GitHub Actions ワークフロー

このディレクトリには、OpenAI Codexを使用したGitHub Actionsワークフローが含まれています。

## ワークフロー一覧

1. **update-changelog.yml** - CHANGELOGの自動更新
2. **auto-refactor.yml** - コードリファクタリングの自動化
3. **generate-docs.yml** - ドキュメントの自動生成
4. **test-generation.yml** - テストコードの自動生成

## ワークフローの特徴

### ヘッドレスモード

全てのワークフローは以下の設定でOpenAI Codexを実行します：
- `CODEX_QUIET_MODE=1` - UI出力の抑制
- `-a auto-edit --quiet` - 自動承認モード

### 共通設定

- **Node.js**: バージョン 20 を使用
- **認証**: `OPENAI_API_KEY` シークレットが必要

## カスタマイズ

各ワークフローは特定のニーズに合わせてカスタマイズ可能です。詳細は各YAMLファイルのコメントを参照してください。
