<div align="center">

![Image](https://github.com/user-attachments/assets/55514756-c91e-4fe6-8204-73b73aa0bcbf)

# 🤖 Codex-Workspace-DEV

<p align="center">
  <!-- Technology & CI/CD -->
  <img src="https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/Automation-000000?style=for-the-badge&logo=robot&logoColor=white" alt="Automation">

  <!-- Repository Stats -->
  <img src="https://img.shields.io/github/stars/Sunwood-ai-labs/Codex-Workspace-DEV?style=for-the-badge" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/Sunwood-ai-labs/Codex-Workspace-DEV?style=for-the-badge" alt="GitHub Forks">
  <img src="https://img.shields.io/github/issues/Sunwood-ai-labs/Codex-Workspace-DEV?style=for-the-badge" alt="Open Issues">
  <img src="https://img.shields.io/github/last-commit/Sunwood-ai-labs/Codex-Workspace-DEV?style=for-the-badge" alt="Last Commit">
  <img src="https://img.shields.io/github/contributors/Sunwood-ai-labs/Codex-Workspace-DEV?style=for-the-badge" alt="Contributors">

  <!-- License -->
  <img src="https://img.shields.io/github/license/Sunwood-ai-labs/Codex-Workspace-DEV?style=for-the-badge" alt="License">
</p>

<p align="center">
  Codex-Workspace-DEV: OpenAI Codexを活用した開発ワークスペース向けGitHub Actionsワークフロー集
</p>

<p align="center">
  🔗 本番リポジトリはこちら → <a href="https://github.com/Sunwood-ai-labs/Codex-Workspace">Sunwood-ai-labs/Codex-Workspace</a>
</p>

</div>

## 🚀 概要

このリポジトリは、OpenAI Codexの強力な機能をGitHub Actions内で活用し、リポジトリの自動化を実現する軽量なワークフロー集です。重たい処理を避け、必要最小限の機能に絞ることで、シンプルさと効率性を両立しています。

## ✨ 特徴

- 💬 **Issue自動応答**: 新しいissueや更新に対して、Codexが内容を分析し適切な返信や修正を提供
- 📝 **ドキュメント品質チェック**: READMEやドキュメントの品質を自動で確認し、改善提案をPRで実施
- 🔍 **コードレビュー**: PRのコードを自動レビューし、改善点を提案
- 🌐 **README翻訳**: README.mdを日本語に自動翻訳してPRを作成

## 📦 セットアップ

以下の手順に従い、リポジトリを初期化し、必要な環境変数やシークレットを設定してください。

### 1. リポジトリをクローン

```bash
git clone https://github.com/<USERNAME>/<REPO>.git
cd <REPO>
```

### 2. .envファイルの作成

```bash
cp .env.example .env
```
`.env`ファイルを開き、以下の環境変数を設定してください：

* `OPENAI_API_KEY`    : OpenAI APIキー  
* `GITHUB_TOKEN`      : GitHub APIトークン（省略可、GitHub Actionsでは自動で提供されます）  
* `CODEX_QUIET_MODE`  : Codexのクワイエットモード（例: `1`）  

### 3. シークレットの設定（GitHub Actions用）

GitHubリポジトリの Settings > Secrets で以下を追加してください：

* `OPENAI_API_KEY` : OpenAI APIキー  

### 4. ワークフローの有効化

`.github/workflows/` にあるワークフローファイルが自動的に有効になります。

## 🛠️ 使用方法

### Issue自動応答

1. Issueを作成または更新
2. Codexが内容を分析し、適切な返信を投稿
3. コード修正が必要な場合は自動的にPRを作成

### ドキュメント品質チェック

1. マークダウンファイルをプッシュまたはPR作成
2. Codexが品質をチェックし、改善点を自動修正
3. 修正内容をPRとして提案

### コードレビュー

1. 新しいPRを作成
2. Codexが変更内容をレビュー
3. 改善提案をコメントとして投稿

### README翻訳

1. README.mdを更新
2. 自動的に日本語版を作成
3. README.ja.mdとしてPRを作成

## ⚙️ ワークフロー一覧

| ワークフロー | トリガー | 説明 |
|------------|--------|------|
| `issue-response-codex.yml` | Issue作成/更新 | Issueへの自動応答 |
| `document-quality-check.yml` | Markdownファイル変更 | ドキュメント品質チェック |
| `code-review-codex.yml` | PR作成/更新 | コードレビュー |
| `readme-translation-codex.yml` | README.md変更 | 日本語翻訳 |

## 🔧 カスタマイズ

各ワークフローのCodexプロンプトをカスタマイズすることで、プロジェクトのニーズに合わせた動作調整が可能です。

## 📝 注意事項

- Codexは `CODEX_QUIET_MODE=1` でノイズを最小限に抑制
- `-a auto-edit` オプションで自動承認モードを有効化
- フルオートモード（`--auto` または `-y`）を指定しないと、`gh` コマンドなどの外部コマンドが実行されず、処理がスキップされる点にご注意ください。
- すべての処理は日本語プロンプトで実行

## 🤝 コントリビューション

改善提案やバグ報告は、Issueでお知らせください。PRも歓迎です！

## 📄 ライセンス

MIT License
