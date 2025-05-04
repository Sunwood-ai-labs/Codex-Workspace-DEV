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
  Codex-Workspace-DEV: A development workspace with simple and efficient GitHub Actions workflows leveraging OpenAI Codex
</p>

<p align="center">
  🔗 Production repository → <a href="https://github.com/Sunwood-ai-labs/Codex-Workspace">Sunwood-ai-labs/Codex-Workspace</a>
</p>

</div>

## 🚀 Overview

This repository is a lightweight collection of workflows that harness the powerful capabilities of OpenAI Codex within GitHub Actions to automate your repository. By avoiding heavy processing and focusing on essential features, it achieves both simplicity and efficiency.

## ✨ Features

- 💬 **Issue Auto-Response**: Codex analyzes new or updated issues and provides appropriate replies or fixes
- 📝 **Documentation Quality Check**: Automatically checks the quality of README and other documentation, and proposes improvements via PR
- 🔍 **Code Review**: Automatically reviews PR code and suggests improvements
- 🌐 **README Translation**: Automatically translates README.md to Japanese and creates a PR

## 📦 Setup

Follow the steps below to initialize the repository and configure the required environment variables and secrets.

### 1. Clone the repository

```bash
git clone https://github.com/<USERNAME>/<REPO>.git
cd <REPO>
```

### 2. Create .env file

```bash
cp .env.example .env
```

Open the `.env` file and set the following environment variables:

* `OPENAI_API_KEY`    : OpenAI API key
* `GITHUB_TOKEN`      : GitHub API token (optional; automatically provided in GitHub Actions)
* `CODEX_QUIET_MODE`  : Codex quiet mode (e.g., `1`)

### 3. Configure Secrets (for GitHub Actions)

In your GitHub repository, go to Settings > Secrets and add the following:

* `OPENAI_API_KEY` : OpenAI API key

### 4. Enable Workflows

Workflow files in `.github/workflows/` will be automatically enabled.

## 🛠️ Usage

### Issue Auto-Response

1. Create or update an issue
2. Codex analyzes the content and posts an appropriate reply
3. If code changes are needed, a PR is automatically created

### Documentation Quality Check

1. Push a markdown file or create a PR
2. Codex checks quality and automatically applies improvements
3. Propose the changes as a PR

### Code Review

1. Create a new PR
2. Codex reviews the changes
3. Posts improvement suggestions as comments

### README Translation

1. Update README.md
2. Automatically creates a Japanese version
3. Creates a PR with README.ja.md

## ⚙️ Workflow List

| Workflow                          | Trigger                | Description                         |
|-----------------------------------|------------------------|-------------------------------------|
| `issue-response-codex.yml`        | Issue creation/update  | Auto-response to issues             |
| `document-quality-check.yml`      | Markdown file changes  | Documentation quality check         |
| `code-review-codex.yml`           | PR creation/update     | Code review                         |
| `readme-translation-codex.yml`    | README.md changes      | Japanese translation                |

## 🔧 Customization

You can customize each workflow’s Codex prompts to adjust behavior according to your project's needs.

## 📝 Important Notes

- Set `CODEX_QUIET_MODE=1` to minimize noise from Codex
- Use the `-a auto-edit` option to enable auto-approval mode
- All operations are executed with Japanese prompts

## 🤝 Contributing

Please open an issue for suggestions or bug reports. PRs are also welcome!

## 📄 License

MIT License