const { Octokit } = require("@octokit/rest");
const OpenAI = require("openai");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function respondToIssue(issueNumber, issueTitle, issueBody) {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  
  // シンプルなプロンプト
  const prompt = `あなたはリポジトリの品質管理ボットです。以下のIssueに対して適切な返信をしてください。

Issue タイトル: ${issueTitle}
Issue 内容: ${issueBody}

返信の際は以下の点に注意してください：
1. 親切で建設的な回答を心がける
2. 日本語で返信する
3. 具体的なアクションアイテムがあれば提案する
4. コードの修正が必要そうな場合はプルリクエストを提案する`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    });

    const reply = response.choices[0].message.content;

    // Issueにコメントを投稿
    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: reply
    });

    // 特定のキーワードがあった場合、PRを作成
    if (issueBody.includes("README") || issueBody.includes("ドキュメント")) {
      // READMEの改善が必要な場合
      await createDocumentationPR(owner, repo, issueNumber);
    }
    
    if (issueBody.includes("コードレビュー") || issueBody.includes("リファクタリング")) {
      // コードレビューのPRを作成
      await createCodeReviewPR(owner, repo, issueNumber);
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

async function createDocumentationPR(owner, repo, issueNumber) {
  try {
    // 新しいブランチを作成
    const branchName = `docs/issue-${issueNumber}`;
    
    // メインブランチの最新のSHAを取得
    const { data: ref } = await octokit.git.getRef({
      owner,
      repo,
      ref: "heads/main"
    });
    
    // 新しいブランチを作成
    await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: ref.object.sha
    });
    
    // READMEの内容を取得
    const { data: readmeContent } = await octokit.repos.getContent({
      owner,
      repo,
      path: "README.md",
      ref: branchName
    });
    
    // 改善版READMEを生成
    const improvedReadme = await generateImprovedDocumentation(readmeContent);
    
    // ファイルを更新
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: "README.md",
      message: `docs: issueに基づくREADMEの改善 (#${issueNumber})`,
      content: Buffer.from(improvedReadme).toString("base64"),
      sha: readmeContent.sha,
      branch: branchName
    });
    
    // プルリクエストを作成
    await octokit.pulls.create({
      owner,
      repo,
      title: `docs: issueに基づくREADMEの改善 (#${issueNumber})`,
      head: branchName,
      base: "main",
      body: `Issue #${issueNumber} に基づいてREADMEを改善しました。`
    });
    
  } catch (error) {
    console.error("Error creating PR:", error);
  }
}

async function createCodeReviewPR(owner, repo, issueNumber) {
  // コードレビューとリファクタリングの提案を実装
  // ここはシンプルにコメントを返すだけにする
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body: "コードレビューのご要望ありがとうございます。現在実装中です。"
  });
}

async function generateImprovedDocumentation(currentContent) {
  // 現在のREADMEをBase64からデコード
  const content = Buffer.from(currentContent.content, 'base64').toString('utf-8');
  
  // OpenAIを使って改善版を生成
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "user",
      content: `以下のREADMEを改善してください。特に以下の点に注意してください：
      1. 中央揃えのタイトルとヘッダー画像
      2. 技術スタックのバッジ
      3. 絵文字の活用
      4. 明確なインストール手順と使用方法
      
      現在のREADME:
      ${content}`
    }],
    temperature: 0.7,
    max_tokens: 2000
  });
  
  return response.choices[0].message.content;
}

// メイン実行
const [, , issueNumber, issueTitle, issueBody] = process.argv;
respondToIssue(parseInt(issueNumber), issueTitle, issueBody);
