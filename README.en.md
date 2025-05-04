<div align="center">

![Image](https://github.com/user-attachments/assets/55514756-c91e-4fe6-8204-73b73aa0bcbf)

# 🤖 Simple GitHub Actions with Codex

<p align="center">
  <img src="https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/Automation-000000?style=for-the-badge&logo=robot&logoColor=white" alt="Automation">
</p>

<p align="center">
  A collection of simple and efficient GitHub Actions workflows leveraging OpenAI Codex
</p>

</div>

## 🚀 Overview

This repository is a lightweight collection of workflows that leverage the powerful capabilities of OpenAI Codex within GitHub Actions to automate your repository. By avoiding heavy processing and focusing on only the essential features, it achieves both simplicity and efficiency.

## ✨ Features

- 💬 **Issue Auto-Response**: Codex analyzes new or updated issues and provides appropriate responses or fixes
- 📝 **Document Quality Check**: Automatically reviews the quality of README and other documentation, proposing enhancements through pull requests
- 🔍 **Code Review**: Automatically reviews PR code and suggests improvements
- 🌐 **README Translation**: Automatically translates README.md into Japanese and creates a pull request

## 📦 Setup

Follow the steps below to initialize the repository and configure the required environment variables and secrets.

### 1. Clone the repository

```bash
git clone https://github.com/<USERNAME>/<REPO>.git
cd <REPO>
```

### 2. Create the .env file

```bash
cp .env.example .env
```
Open the `.env` file and set the following environment variables:

* `OPENAI_API_KEY`    : OpenAI API key  
* `GITHUB_TOKEN`      : GitHub API token (optional; automatically provided in GitHub Actions)  
* `CODEX_QUIET_MODE`  : Codex quiet mode (e.g., `1`)  

### 3. Configure secrets (for GitHub Actions)

Add the following in the GitHub repository under Settings > Secrets:

* `OPENAI_API_KEY` : OpenAI API key  

### 4. Enable the workflows

The workflow files in `.github/workflows/` will be automatically enabled.

## 🛠️ Usage

### Issue Auto-Response

1. Create or update an issue
2. Codex analyzes the content and posts an appropriate response
3. If code changes are needed, it automatically creates a pull request

### Document Quality Check

1. Push a Markdown file or create a pull request
2. Codex checks the quality and automatically applies improvements
3. Proposes the improvements as a pull request

### Code Review

1. Create a new pull request
2. Codex reviews the changes
3. Posts suggestions as comments

### README Translation

1. Update README.md
2. Automatically generate a Japanese version
3. Create a pull request as README.ja.md

## ⚙️ Workflow List

| Workflow                         | Trigger                     | Description                    |
|----------------------------------|-----------------------------|--------------------------------|
| `issue-response-codex.yml`       | Issue creation/update       | Automatic issue response       |
| `document-quality-check.yml`     | Markdown file change        | Document quality check         |
| `code-review-codex.yml`          | PR creation/update          | Code review                    |
| `readme-translation-codex.yml`   | README.md change            | Japanese translation           |

## 🔧 Customization

You can adjust the behavior to fit your project's needs by customizing the Codex prompts in each workflow.

## 📝 Notes

- Set `CODEX_QUIET_MODE=1` to minimize noise from Codex  
- Use the `-a auto-edit` option to enable auto-approval mode  
- Note that without full auto mode (`--auto` or `-y`), external commands such as `gh` will not run, and the process will be skipped  
- All operations are performed using Japanese prompts

## 🤝 Contribution

For suggestions or bug reports, please open an Issue. Pull requests are welcome!

## 📄 License

MIT License