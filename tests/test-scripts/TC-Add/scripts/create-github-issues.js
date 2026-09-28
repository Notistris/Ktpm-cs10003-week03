/**
 * Script tự động tạo các Issue lên GitHub Repository thông qua GitHub REST API
 * Sử dụng:
 *   $env:GITHUB_TOKEN="ghp_your_personal_access_token_here"
 *   node issues/create-github-issues.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OWNER = 'Notistris';
const REPO = 'Ktpm-cs10003-week03';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
// Tự động tìm thư mục chứa các tệp bug report (ưu tiên tests/bug-reports/TC-Add)
function resolveIssuesDir() {
  if (process.argv[2]) {
    return path.resolve(process.argv[2]);
  }
  const candidatePaths = [
    path.resolve(__dirname, '../../../bug-reports/TC-Add'),
    path.resolve(__dirname, '../../../../tests/bug-reports/TC-Add'),
    path.resolve(__dirname, '../../../../issues'),
    path.resolve(__dirname),
  ];
  for (const p of candidatePaths) {
    if (fs.existsSync(p) && fs.readdirSync(p).some((f) => f.startsWith('BUG-') && f.endsWith('.md'))) {
      return p;
    }
  }
  return path.resolve(__dirname, '../../../bug-reports/TC-Add');
}

const ISSUES_DIR = resolveIssuesDir();

function parseFrontMatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;

  const yamlStr = match[1];
  const body = match[2].trim();

  let title = '';
  let labels = [];

  const titleMatch = yamlStr.match(/title:\s*["']?([^"'\r\n]+)["']?/);
  if (titleMatch) title = titleMatch[1].trim();

  const labelsMatch = yamlStr.match(/labels:\s*\[(.*?)\]/);
  if (labelsMatch) {
    labels = labelsMatch[1]
      .split(',')
      .map((s) => s.replace(/["']/g, '').trim())
      .filter(Boolean);
  }

  return { title, labels, body };
}

function postIssue(issue) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      title: issue.title,
      body: issue.body,
      labels: issue.labels,
    });

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${OWNER}/${REPO}/issues`,
      method: 'POST',
      headers: {
        'User-Agent': 'Node-Issue-Creator',
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed);
          } catch {
            resolve(data);
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(postData);
    req.end();
  });
}

async function main() {
  if (!TOKEN) {
    console.error('❌ Chưa thiết lập biến môi trường GITHUB_TOKEN!');
    console.log('👉 Hướng dẫn:');
    console.log('   Powershell: $env:GITHUB_TOKEN="ghp_xxx"');
    console.log('   Bash:       export GITHUB_TOKEN="ghp_xxx"');
    console.log('   Chạy lại:   node tests/test-scripts/TC-Add/scripts/create-github-issues.js\n');
    process.exit(1);
  }

  if (!fs.existsSync(ISSUES_DIR)) {
    console.error(`❌ Không tìm thấy thư mục: ${ISSUES_DIR}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(ISSUES_DIR)
    .filter((f) => f.startsWith('BUG-') && f.endsWith('.md'))
    .sort();

  console.log(`📂 Đọc báo cáo lỗi từ thư mục: ${ISSUES_DIR}`);
  console.log(`🚀 Tìm thấy ${files.length} tệp issue để tạo trên GitHub...\n`);

  for (const file of files) {
    const filePath = path.join(ISSUES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseFrontMatter(content);

    if (!parsed || !parsed.title) {
      console.warn(`⚠️ Bỏ qua tệp ${file}: không trích xuất được tiêu đề frontmatter`);
      continue;
    }

    try {
      console.log(`Đang gửi issue: ${parsed.title}...`);
      const res = await postIssue(parsed);
      console.log(`✅ Tạo thành công Issue #${res.number}: ${res.html_url}`);
    } catch (err) {
      console.error(`❌ Thất bại khi tạo issue từ ${file}:`, err.message);
    }
  }

  console.log('\n🎉 Hoàn tất quá trình tạo Issue!');
}

main();
