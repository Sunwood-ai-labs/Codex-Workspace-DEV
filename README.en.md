<div align="center">

![Image](https://github.com/user-attachments/assets/55514756-c91e-4fe6-8204-73b73aa0bcbf)

# 🤖 Simple GitHub Actions with Codex

<p align="center">
  <img src="https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/Automation-000000?style=for-the-badge&logo=robot&logoColor=white" alt="Automation">
</p>

<p align="center">
  A collection of simple and efficient GitHub Actions workflows leveraging OpenAI Codex.
</p>

</div>

## 🚀 Overview

This repository is a lightweight collection of workflows that utilize the power of OpenAI Codex within GitHub Actions to automate your repository. By focusing on essential features and avoiding heavy processes, it achieves simplicity and efficiency.

## ✨ Features

- 💬 **Issue Auto-Response**: Analyze new or updated issues and provide appropriate replies or fixes using Codex.
- 📝 **Documentation Quality Check**: Automatically review README and other documentation and propose improvements via pull request.
- 🔍 **Code Review**: Automatically review pull request code and suggest improvements.
- 🌐 **README Translation**: Automatically translate README.md into Japanese and create a pull request.

## 📦 Setup

### 1. Configure Secrets

Add the following secret in your repository settings:

- `OPENAI_API_KEY`: Your OpenAI API key

### 2. Enable Workflows

Workflows located in `.github/workflows/` are automatically enabled.

## 🛠️ Usage

### Issue Auto-Response

1. Create or update an issue.
2. Codex analyzes the content and posts an appropriate reply.
3. If code changes are needed, it automatically creates a pull request.

### Documentation Quality Check

1. Push or create a pull request with Markdown file changes.
2. Codex reviews the quality and suggests improvements.
3. Proposed fixes are submitted via pull request.

### Code Review

1. Create a new pull request.
2. Codex reviews the changes.
3. Improvement suggestions are posted as comments.

### README Translation

1. Update README.md.
2. A Japanese version is automatically generated as README.ja.md via pull request.

## ⚙️ Workflows

| Workflow                        | Trigger                     | Description                          |
|---------------------------------|-----------------------------|--------------------------------------|
| `issue-response-codex.yml`      | Issue created or updated    | Auto-respond to issues               |
| `document-quality-check.yml`    | Markdown file changes       | Check documentation quality          |
| `code-review-codex.yml`         | Pull request created/updated| Code review                          |
| `readme-translation-codex.yml`  | README.md changes           | Generate Japanese translation        |

## 🔧 Customization

Customize the Codex prompts in each workflow to tailor behavior to your project's needs.

## 📝 Notes

- Codex runs in quiet mode with `CODEX_QUIET_MODE=1` to minimize noise.
- Use the `-a auto-edit` option to enable auto-approval.
- All processes use Japanese prompts by default.

## 🤝 Contributing

Feedback and bug reports are welcome via issues. Feel free to submit pull requests as well!

## 📄 License

MIT License