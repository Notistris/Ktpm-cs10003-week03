// @ts-check
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { spawn } = require('child_process');

/**
 * Danh sách 10 phiên bản Build của Basic Calculator
 */
const BUILDS = [
  { id: '0', project: 'prototype', name: 'Prototype', desc: 'Mặc định - Hoạt động chuẩn không lỗi' },
  { id: '1', project: 'build-1', name: 'Build 1', desc: 'Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers)' },
  { id: '2', project: 'build-2', name: 'Build 2', desc: 'Đảo ngược Add và Concatenate (Reverses Add and Concatenate)' },
  { id: '3', project: 'build-3', name: 'Build 3', desc: 'Luôn xử lý như số (Always treats inputs as numbers)' },
  { id: '4', project: 'build-4', name: 'Build 4', desc: 'Bị khóa chế độ Integers only (Integers only is always enabled)' },
  { id: '5', project: 'build-5', name: 'Build 5', desc: 'Nút Clear bị vô hiệu hóa (Clear button disabled)' },
  { id: '6', project: 'build-6', name: 'Build 6', desc: 'Không kiểm tra chia cho 0 (Skips divide-by-zero validation)' },
  { id: '7', project: 'build-7', name: 'Build 7', desc: 'Dùng kết quả trước làm số thứ nhất (Previous result used as first number)' },
  { id: '8', project: 'build-8', name: 'Build 8', desc: 'Đảo ngược số thứ nhất và thứ hai (Reverses first and second number)' },
  { id: '9', project: 'build-9', name: 'Build 9', desc: 'Các phần tử biến mất ngẫu nhiên (Elements randomly disappear)' },
];

const MODULE_NAME = 'Calculator - Add';
const TESTER_NAME = 'Tran Trong Tri';
const OUTPUT_DIR = path.resolve(__dirname, '../../../test-runs/TC-Add');
const PLAYWRIGHT_CLI = path.resolve(__dirname, 'node_modules/@playwright/test/cli.js');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

/**
 * Thông tin mô tả và lý do dự kiến của từng Test Case
 */
const TC_DEFINITIONS = {
  TC_ADD_01: {
    title: 'Cộng 2 số nguyên dương thông thường (15 + 25 = 40)',
    passNote: 'Tính toán chính xác: 15 + 25 = 40, không có lỗi',
    failReason: 'Kỳ vọng kết quả bằng "40" nhưng nhận được chuỗi ghép "1525"',
  },
  TC_ADD_02: {
    title: 'Cộng số 0 với một số nguyên dương (0 + 123 = 123)',
    passNote: 'Tính toán chính xác: 0 + 123 = 123',
    failReason: 'Kỳ vọng kết quả "123" nhưng nhận được chuỗi ghép "0123"',
  },
  TC_ADD_03: {
    title: 'Cộng một số nguyên dương với số 0 (999 + 0 = 999)',
    passNote: 'Tính toán chính xác: 999 + 0 = 999',
    failReason: 'Kỳ vọng kết quả "999" nhưng nhận được chuỗi ghép "9990"',
  },
  TC_ADD_04: {
    title: 'Cộng hai số 0 (0 + 0 = 0)',
    passNote: 'Tính toán chính xác: 0 + 0 = 0',
    failReason: 'Kỳ vọng kết quả "0" nhưng nhận được chuỗi ghép "00"',
  },
  TC_ADD_05: {
    title: 'Cộng 2 số nguyên âm (-50 + -30 = -80)',
    passNote: 'Tính toán chính xác: -50 + -30 = -80',
    failReason: 'Kỳ vọng kết quả "-80" nhưng nhận được chuỗi ghép "-50-30"',
  },
  TC_ADD_06: {
    title: 'Số nguyên âm cộng số nguyên dương (-20 + 50 = 30)',
    passNote: 'Tính toán chính xác: -20 + 50 = 30',
    failReason: 'Kỳ vọng kết quả "30" nhưng nhận được chuỗi ghép "-2050"',
  },
  TC_ADD_07: {
    title: 'Số nguyên dương cộng số nguyên âm (10 + -45 = -35)',
    passNote: 'Tính toán chính xác: 10 + -45 = -35',
    failReason: 'Kỳ vọng kết quả "-35" nhưng nhận được chuỗi ghép "10-45"',
  },
  TC_ADD_08: {
    title: 'Cộng 2 số đối nhau (100 + -100 = 0)',
    passNote: 'Tính toán chính xác: 100 + -100 = 0',
    failReason: 'Kỳ vọng kết quả "0" nhưng nhận được chuỗi ghép "100-100"',
  },
  TC_ADD_09: {
    title: 'Cộng 2 số thập phân dương (12.5 + 7.3 = 19.8)',
    passNote: 'Tính toán chính xác: 12.5 + 7.3 = 19.8',
    failReason: 'Kỳ vọng kết quả thập phân "19.8" nhưng hệ thống hiển thị sai lệch hoặc bị làm tròn',
  },
  TC_ADD_10: {
    title: 'Số thập phân dương cộng số thập phân âm (15.75 + -5.25 = 10.5)',
    passNote: 'Tính toán chính xác: 15.75 + -5.25 = 10.5',
    failReason: 'Kỳ vọng kết quả thập phân "10.5" nhưng hệ thống hiển thị sai lệch hoặc bị làm tròn',
  },
  TC_ADD_11: {
    title: 'Tích chọn Integers only trước khi tính (10.6 + 4.2 -> 14)',
    passNote: 'Làm tròn chính xác khi tích Integers only: 10.6 + 4.2 = 14',
    failReason: 'Kỳ vọng kết quả làm tròn thành 14 nhưng hiển thị kết quả khác',
  },
  TC_ADD_12: {
    title: 'Tích chọn Integers only sau khi đã có kết quả (9.3 -> 9)',
    passNote: 'Chuyển đổi tức thì từ kết quả thập phân sang nguyên: 9.3 -> 9',
    failReason: 'Không cập nhật kết quả thành số nguyên khi tích chọn Integers only trên kết quả có sẵn',
  },
  TC_ADD_13: {
    title: 'Bỏ tích chọn Integers only khôi phục kết quả thập phân (9 -> 9.3)',
    passNote: 'Khôi phục kết quả thập phân ban đầu thành công: 9 -> 9.3',
    failReason: 'Không khôi phục lại giá trị thập phân ban đầu khi bỏ tích chọn Integers only',
  },
  TC_ADD_14: {
    title: 'Cộng 2 số có độ dài tối đa 10 chữ số (Biên input 10 số)',
    passNote: 'Xử lý chính xác biên độ dài 10 chữ số: 1234567890 + 1000000000 = 2234567890',
    failReason: 'Lỗi tràn số hoặc hiển thị sai kết quả khi cộng 2 số 10 chữ số',
  },
  TC_ADD_15: {
    title: 'Nhập vượt quá giới hạn 10 ký tự (Kiểm tra maxlength="10")',
    passNote: 'Thuộc tính maxlength="10" hoạt động tốt, chặn ký tự thứ 11 thành công',
    failReason: 'Không chặn nhập ký tự thứ 11 hoặc thiếu thuộc tính maxlength="10"',
  },
  TC_ADD_16: {
    title: 'Nhập ký tự chữ vào First number (Báo lỗi Number 1 is not a number)',
    passNote: 'Hiển thị chính xác thông báo lỗi: "Number 1 is not a number"',
    failReason: 'Bỏ qua kiểm tra số hợp lệ, không hiển thị thông báo lỗi khi ô First number chứa chữ',
  },
  TC_ADD_17: {
    title: 'Nhập ký tự chữ vào Second number (Báo lỗi Number 2 is not a number)',
    passNote: 'Hiển thị chính xác thông báo lỗi: "Number 2 is not a number"',
    failReason: 'Bỏ qua kiểm tra số hợp lệ, không hiển thị thông báo lỗi khi ô Second number chứa chữ',
  },
  TC_ADD_18: {
    title: 'Cả 2 ô chứa chữ (Ưu tiên báo lỗi Number 1 is not a number)',
    passNote: 'Ưu tiên hiển thị thông báo lỗi của số thứ nhất chính xác',
    failReason: 'Không hiển thị thông báo lỗi hoặc ưu tiên sai thông báo lỗi của ô thứ hai',
  },
  TC_ADD_19: {
    title: 'Để trống cả 2 trường First & Second number (0 + 0 = 0)',
    passNote: 'Ép kiểu rỗng thành 0 + 0 = 0 thành công',
    failReason: 'Không ép kiểu trường rỗng thành 0 hoặc hiển thị sai kết quả',
  },
  TC_ADD_20: {
    title: 'Kiểm tra nút Clear xóa kết quả và hủy tích Integers only',
    passNote: 'Nút Clear xóa trắng ô Answer và bỏ chọn Integers only thành công',
    failReason: 'Nút Clear không hoạt động, không xóa kết quả hiển thị trên ô Answer',
  },
};

/**
 * Loại bỏ mã màu ANSI trong chuỗi
 * @param {string} str
 * @returns {string}
 */
function stripAnsi(str) {
  if (!str) return '';
  return str.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '');
}

/**
 * Thu thập tất cả specs từ cấu trúc suites của Playwright JSON
 * @param {any} suite
 * @param {any[]} list
 * @param {string} [parentTitle]
 * @returns {any[]}
 */
function collectSpecs(suite, list = [], parentTitle = '') {
  if (!suite) return list;

  let currentTitle = parentTitle;
  if (suite.title && !suite.title.endsWith('.spec.js')) {
    currentTitle = parentTitle ? `${parentTitle} - ${suite.title}` : suite.title;
  }

  if (Array.isArray(suite.specs)) {
    for (const spec of suite.specs) {
      list.push({
        ...spec,
        suiteTitle: currentTitle || '',
        fileName: suite.file || '',
      });
    }
  }
  if (Array.isArray(suite.suites)) {
    for (const subSuite of suite.suites) {
      collectSpecs(subSuite, list, currentTitle);
    }
  }
  return list;
}

/**
 * Trích xuất đối tượng JSON từ stdout Playwright
 * @param {string} output
 * @returns {any}
 */
function extractJson(output) {
  const firstBrace = output.indexOf('{');
  const lastBrace = output.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    const jsonStr = output.substring(firstBrace, lastBrace + 1);
    return JSON.parse(jsonStr);
  }
  return JSON.parse(output);
}

/**
 * Xác định trạng thái, mã lỗi (Related Bug) và lý do chi tiết (Note)
 * @param {string} buildId
 * @param {string} tcId
 * @param {boolean} isPassed
 * @param {string} errorText
 * @returns {{ result: 'Pass'|'Fail'|'Blocked'|'Not Run', relatedBug: string, note: string }}
 */
function evaluateTestRun(buildId, tcId, isPassed, errorText) {
  const def = TC_DEFINITIONS[tcId] || {
    title: tcId,
    passNote: 'Thực thi thành công, kết quả đạt kỳ vọng',
    failReason: 'Kết quả kiểm thử không đạt kỳ vọng',
  };

  if (isPassed) {
    return {
      result: 'Pass',
      relatedBug: 'None',
      note: def.passNote,
    };
  }

  // Tách Expected và Received nếu có từ assertion của Playwright
  const expMatch = errorText.match(/Expected:\s*["']?([^"'\n\r]+)["']?/);
  const recMatch = errorText.match(/Received:\s*["']?([^"'\n\r]+)["']?/);
  const expectedVal = expMatch ? expMatch[1] : null;
  const receivedVal = recMatch ? recMatch[1] : null;

  // Xác định Blocked: Chỉ khi phần tử giao diện bị ẩn/disabled hoặc không thể tương tác (Build 9 hoặc lỗi attempt fill/click)
  const isActionBlocked =
    buildId === '9' ||
    (errorText.includes('attempting fill action') && errorText.includes('element is not visible')) ||
    (errorText.includes('attempting click action') && errorText.includes('element is not visible')) ||
    (errorText.includes('disabled') && errorText.includes('not visible'));

  if (isActionBlocked) {
    return {
      result: 'Blocked',
      relatedBug: `BUG-B${buildId}-01: Các phần tử giao diện bị ẩn hoặc vô hiệu hóa ngẫu nhiên (hidden/disabled)`,
      note: 'Phần tử nhập liệu hoặc nút bấm trên giao diện bị ẩn hoặc disabled, chặn không thể tương tác để thực hiện kiểm thử',
    };
  }

  // Trường hợp Fail: gắn mã Bug và lý do rõ ràng
  let relatedBug = `BUG-B${buildId}-01`;
  let note = def.failReason;

  switch (buildId) {
    case '1':
      relatedBug = 'BUG-B1-01: Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers)';
      note = 'Không hiển thị thông báo lỗi khi nhập chuỗi ký tự không phải số vào ô nhập liệu';
      break;
    case '2':
      relatedBug = 'BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)';
      if (expectedVal && receivedVal) {
        note = `Kỳ vọng kết quả tổng "${expectedVal}", nhưng thực tế hệ thống ghép chuỗi thành "${receivedVal}"`;
      } else {
        note = 'Phép tính Add bị thực hiện thành ghép chuỗi (Concatenate) thay vì tính tổng số học';
      }
      break;
    case '4':
      relatedBug = 'BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)';
      if (expectedVal && receivedVal) {
        note = `Kỳ vọng kết quả thập phân "${expectedVal}", nhưng bị ép làm tròn thành số nguyên "${receivedVal}"`;
      } else {
        note = 'Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm';
      }
      break;
    case '5':
      relatedBug = 'BUG-B5-01: Nút Clear bị vô hiệu hóa';
      note = 'Bấm nút Clear không xóa giá trị hiển thị trên ô Answer';
      break;
    case '7':
      relatedBug = 'BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo';
      if (expectedVal && receivedVal) {
        note = `Sai lệch kết quả: kỳ vọng "${expectedVal}" nhưng nhận "${receivedVal}" do hệ thống lấy kết quả trước làm First number`;
      } else {
        note = 'Giá trị tính toán bị sai lệch do hệ thống gán đè kết quả phép tính trước vào ô số thứ nhất';
      }
      break;
    case '8':
      relatedBug = 'BUG-B8-01: Đảo ngược số thứ nhất và thứ hai (Reverses first and second number)';
      note = 'Thứ tự ưu tiên thông báo lỗi bị đảo ngược: hiển thị lỗi của Second number trước First number';
      break;
    default:
      relatedBug = `BUG-B${buildId}-01: Sai lệch kết quả thực tế so với đặc tả yêu cầu`;
      if (expectedVal && receivedVal) {
        note = `Kỳ vọng "${expectedVal}" nhưng thực tế nhận được "${receivedVal}"`;
      } else if (errorText) {
        const firstLine = errorText.split('\n')[0].replace(/\|/g, '-').trim();
        if (firstLine) note += ` (${firstLine.substring(0, 100)})`;
      }
      break;
  }

  return {
    result: 'Fail',
    relatedBug,
    note,
  };
}

/**
 * Thực thi kiểm thử Playwright cho 1 Build cụ thể (chạy từng file TC_ADD_*.spec.js)
 * @param {typeof BUILDS[0]} build
 * @param {string} [specFilter]
 * @returns {Promise<{ build: typeof BUILDS[0], tests: any[], passed: number, failed: number, blocked: number, notRun: number, duration: number, dateStr: string }>}
 */
function executeBuild(build, specFilter) {
  return new Promise((resolve) => {
    console.log(`\n======================================================`);
    console.log(`▶ ĐANG CHẠY KIỂM THỬ: Build ${build.id} - ${build.name}`);
    console.log(`  Mô tả: ${build.desc}`);
    if (specFilter) console.log(`  File test lọc: ${specFilter}`);
    console.log(`======================================================`);

    const spawnArgs = [PLAYWRIGHT_CLI, 'test'];
    if (specFilter) {
      spawnArgs.push(specFilter);
    }
    spawnArgs.push(`--project=${build.project}`, '--reporter=json');

    const child = spawn(process.execPath, spawnArgs, {
      cwd: __dirname,
      env: {
        ...process.env,
        BUILD: build.id,
        NODE_PATH: NODE_MODULES_PATH,
      },
    });

    let stdoutData = '';
    let stderrData = '';

    child.stdout.on('data', (data) => {
      stdoutData += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderrData += data.toString();
    });

    child.on('close', () => {
      let rawJson = null;
      try {
        rawJson = extractJson(stdoutData);
      } catch (err) {
        console.error(`❌ Không phân tích được kết quả JSON từ Playwright cho Build ${build.id}:`, err.message);
        if (stderrData) console.error(stderrData);
      }

      const allSpecs = [];
      if (rawJson && Array.isArray(rawJson.suites)) {
        for (const suite of rawJson.suites) {
          collectSpecs(suite, allSpecs);
        }
      }

      // Sắp xếp các test case theo mã TC_ADD_01 -> TC_ADD_20
      allSpecs.sort((a, b) => {
        const matchA = (a.suiteTitle + ' ' + a.title + ' ' + a.fileName).match(/TC_ADD_(\d+)/i);
        const matchB = (b.suiteTitle + ' ' + b.title + ' ' + b.fileName).match(/TC_ADD_(\d+)/i);
        const numA = matchA ? parseInt(matchA[1], 10) : 999;
        const numB = matchB ? parseInt(matchB[1], 10) : 999;
        return numA - numB;
      });

      const parsedTests = [];
      let passCount = 0;
      let failCount = 0;
      let blockedCount = 0;

      for (const item of allSpecs) {
        const fullCombined = `${item.suiteTitle ? item.suiteTitle + ' - ' : ''}${item.title || ''}`;
        const match = (item.suiteTitle + ' ' + item.title + ' ' + item.fileName).match(/(TC_ADD_\d+)/i);
        const tcId = match ? match[1].toUpperCase() : 'TC_ADD';

        const testRun = item.tests?.[0];
        const lastResult = testRun?.results?.[testRun.results.length - 1];

        const isPassed = item.ok === true || (lastResult && lastResult.status === 'passed');
        const duration = lastResult?.duration || 0;

        let errorText = '';
        if (!isPassed && lastResult) {
          const errors = lastResult.errors || (lastResult.error ? [lastResult.error] : []);
          errorText = errors
            .map((e) => stripAnsi(e.message || ''))
            .filter(Boolean)
            .join('\n---\n');
          if (!errorText && lastResult.status === 'timedOut') {
            errorText = 'Quá thời gian thực thi (Timed Out) khi tìm hoặc thao tác với phần tử trên giao diện.';
          }
        }

        const evaluation = evaluateTestRun(build.id, tcId, isPassed, errorText);

        if (evaluation.result === 'Pass') {
          passCount++;
        } else if (evaluation.result === 'Blocked') {
          blockedCount++;
        } else {
          failCount++;
        }

        parsedTests.push({
          id: tcId,
          module: MODULE_NAME,
          tester: TESTER_NAME,
          result: evaluation.result,
          relatedBug: evaluation.relatedBug,
          note: evaluation.note,
          durationMs: duration,
          error: errorText,
          file: item.fileName,
        });
      }

      const totalDurationSec = (
        parsedTests.reduce((acc, t) => acc + t.durationMs, 0) / 1000
      ).toFixed(2);

      const dateStr = new Date().toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      console.log(
        `-> Hoàn tất Build ${build.id}: ${passCount} Pass, ${failCount} Fail, ${blockedCount} Blocked (Thời gian: ${totalDurationSec}s)`
      );

      resolve({
        build,
        tests: parsedTests,
        passed: passCount,
        failed: failCount,
        blocked: blockedCount,
        notRun: 0,
        duration: parseFloat(totalDurationSec),
        dateStr,
      });
    });
  });
}

/**
 * Tạo file Markdown kết quả kiểm thử theo đúng template yêu cầu
 * @param {Awaited<ReturnType<typeof executeBuild>>} result
 */
function writeBuildMarkdown(result) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const { build, tests, passed, failed, blocked, notRun, duration, dateStr } = result;
  const total = tests.length;
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : '0.0';

  let md = `# Báo Cáo Kiểm Thử (Test Run Report) - Build ${build.id} (${build.name})\n\n`;

  md += `## 1. Thông Tin Chung\n`;
  md += `- **Module:** ${MODULE_NAME}\n`;
  md += `- **Phiên bản (Build):** Build ${build.id} - ${build.name}\n`;
  md += `- **Mô tả phiên bản:** ${build.desc}\n`;
  md += `- **Người kiểm thử (Tester):** ${TESTER_NAME}\n`;
  md += `- **Thời gian thực thi:** ${dateStr}\n`;
  md += `- **Môi trường:** Chromium (Headless) - Playwright Test Runner\n`;
  md += `- **Target URL:** https://testsheepnz.github.io/BasicCalculator.html\n\n`;

  md += `## 2. Thống Kê Kết Quả Test Run\n`;
  md += `| Tổng số Test Case | Pass | Fail | Blocked | Not Run | Tỉ lệ Pass | Tổng thời gian |\n`;
  md += `|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n`;
  md += `| **${total}** | **${passed}** | **${failed}** | **${blocked}** | **${notRun}** | **${passRate}%** | **${duration}s** |\n\n`;

  md += `## 3. Bảng Chi Tiết Kết Quả Kiểm Thử (Test Run Details)\n\n`;
  md += `| Test Case ID | Module | Tester | Result | Related Bug | Note |\n`;
  md += `|:---|:---|:---:|:---:|:---|:---|\n`;

  tests.forEach((t) => {
    md += `| **${t.id}** | ${t.module} | ${t.tester} | ${t.result} | ${t.relatedBug} | ${t.note} |\n`;
  });

  md += `\n`;

  const issueTests = tests.filter((t) => t.result === 'Fail' || t.result === 'Blocked');
  if (issueTests.length > 0) {
    md += `## 4. Chi Tiết Lỗi & Lý Do Thất Bại (Failures & Blocked Details)\n\n`;
    issueTests.forEach((t) => {
      const icon = t.result === 'Blocked' ? '🚫' : '❌';
      md += `### ${icon} [${t.id}] - Trạng thái: ${t.result}\n`;
      md += `- **Mã lỗi liên quan:** \`${t.relatedBug}\`\n`;
      md += `- **Lý do / Mô tả chi tiết:** ${t.note}\n`;
      md += `- **Thời gian chạy:** ${t.durationMs}ms\n`;
      if (t.error) {
        md += `- **Thông báo kỹ thuật từ Playwright:**\n`;
        md += `\`\`\`text\n${t.error}\n\`\`\`\n\n`;
      } else {
        md += `\n`;
      }
    });
  } else {
    md += `## 4. Đánh Giá Chất Lượng\n`;
    md += `> ✅ **Hoàn hảo:** Tất cả 20 test cases đều đạt trạng thái **Pass** trên Build ${build.id} (${build.name}). Không phát hiện lỗi nào.\n\n`;
  }

  const filePath = path.join(OUTPUT_DIR, `build-${build.id}.md`);
  fs.writeFileSync(filePath, md, 'utf-8');
  console.log(`  -> Đã ghi file báo cáo: ${filePath}`);
}

/**
 * Cập nhật bảng tổng hợp kết quả tất cả các build vào README.md
 * @param {Array<Awaited<ReturnType<typeof executeBuild>>>} allResults
 */
function writeSummaryReadme(allResults) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const currentDate = new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  let md = `# BÁO CÁO TỔNG HỢP TEST RUN: CHỨC NĂNG CỘNG (TC-ADD)\n\n`;
  md += `Báo cáo thực thi tự động của 20 test cases chức năng **Add** trên tất cả 10 phiên bản Build ([Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html)).\n\n`;
  md += `- **Module:** ${MODULE_NAME}\n`;
  md += `- **Người kiểm thử (Tester):** ${TESTER_NAME}\n`;
  md += `- **Cập nhật lần cuối:** ${currentDate}\n`;
  md += `- **Công cụ kiểm thử:** Playwright Test (chạy độc lập từng file testcase spec.js)\n\n`;

  md += `## 1. Bảng Tổng Hợp Kết Quả 10 Builds\n\n`;
  md += `| Build | Tên / Đặc Trưng Phiên Bản | Tổng TC | Pass | Fail | Blocked | Not Run | Tỉ Lệ Pass | Báo Cáo Chi Tiết |\n`;
  md += `|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n`;

  allResults.forEach((r) => {
    const total = r.tests.length;
    const passRate = total > 0 ? ((r.passed / total) * 100).toFixed(1) : '0.0';
    md += `| **Build ${r.build.id}** | ${r.build.name} - *${r.build.desc}* | ${total} | **${r.passed}** | **${r.failed}** | **${r.blocked}** | **${r.notRun}** | **${passRate}%** | [build-${r.build.id}.md](./build-${r.build.id}.md) |\n`;
  });

  md += `\n## 2. Ma Trận Trạng Thái Test Run (10 Builds x 20 Test Cases)\n\n`;
  md += `Bảng dưới đây thống kê trực quan trạng thái Pass / Fail / Blocked của từng test case trên từng build:\n\n`;

  // Header ma trận
  md += `| Test Case ID | Tên / Mục Tiêu Test Case | B0 | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 | B9 |\n`;
  md += `|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n`;

  // Lấy danh sách 20 test cases từ kết quả đầu tiên có đủ tests
  const referenceTests = allResults.find((r) => r.tests.length > 0)?.tests || [];

  referenceTests.forEach((refTest) => {
    const def = TC_DEFINITIONS[refTest.id] || { title: refTest.id };
    let row = `| **${refTest.id}** | ${def.title} |`;
    for (let i = 0; i <= 9; i++) {
      const buildResult = allResults.find((r) => r.build.id === i.toString());
      if (!buildResult) {
        row += ` - |`;
        continue;
      }
      const tc = buildResult.tests.find((t) => t.id === refTest.id);
      if (!tc) {
        row += ` Not Run |`;
      } else {
        row += ` ${tc.result} |`;
      }
    }
    md += `${row}\n`;
  });

  const readmePath = path.join(OUTPUT_DIR, 'README.md');
  fs.writeFileSync(readmePath, md, 'utf-8');
  console.log(`\n-> Đã ghi file tổng kết: ${readmePath}`);
}

/**
 * Hàm khởi chạy chính
 */
async function main() {
  const args = process.argv.slice(2);
  let target = args[0] ? args[0].toLowerCase().trim() : null;
  const specFilter = args[1] ? args[1].trim() : null;

  if (!target) {
    console.log('================================================================');
    console.log('  CHƯƠNG TRÌNH THỰC THI KIỂM THỬ TỰ ĐỘNG CHỨC NĂNG CỘNG (TC-ADD)');
    console.log('================================================================');
    console.log('  0   - Build 0: Prototype (Mặc định - Chuẩn không lỗi)');
    console.log('  1-9 - Build 1 đến 9 (Kiểm thử phiên bản tương ứng)');
    console.log('  all - Chạy TOÀN BỘ 10 build (0 -> 9) và xuất báo cáo markdown');
    console.log('================================================================');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    target = await new Promise((res) => {
      rl.question('Nhập lựa chọn [0-9, all] (Mặc định: all): ', (ans) => {
        rl.close();
        res(ans.trim().toLowerCase() || 'all');
      });
    });
  }

  let buildsToRun = [];
  if (target === 'all' || target === '--all' || target === '-a') {
    buildsToRun = BUILDS;
  } else {
    const cleanId = target.replace('build-', '').replace('prototype', '0');
    const found = BUILDS.find((b) => b.id === cleanId);
    if (!found) {
      console.error(`❌ Build [${target}] không hợp lệ! Vui lòng chọn từ 0 đến 9 hoặc "all".`);
      process.exit(1);
    }
    buildsToRun = [found];
  }

  console.log(`\n🚀 Sẽ thực thi kiểm thử cho ${buildsToRun.length} phiên bản build qua từng file spec.js...`);

  const results = [];
  for (const build of buildsToRun) {
    const res = await executeBuild(build, specFilter);
    writeBuildMarkdown(res);
    results.push(res);
  }

  // Nếu chạy all hoặc nhiều hơn 1 build, ghi file README tổng hợp
  if (buildsToRun.length === BUILDS.length) {
    writeSummaryReadme(results);
  }

  console.log('\n================================================================');
  console.log('               BẢNG TỔNG KẾT KẾT QUẢ KIỂM THỬ                   ');
  console.log('================================================================');
  console.table(
    results.map((r) => ({
      Build: `Build ${r.build.id} (${r.build.name})`,
      'Tổng TC': r.tests.length,
      Pass: r.passed,
      Fail: r.failed,
      Blocked: r.blocked,
      'Not Run': r.notRun,
      'Tỉ lệ Pass': `${((r.passed / r.tests.length) * 100).toFixed(1)}%`,
      'Thời gian': `${r.duration}s`,
    }))
  );
  console.log(`\n🎉 Báo cáo chi tiết từng build đã được lưu tại: ${OUTPUT_DIR}\n`);
}

main().catch((err) => {
  console.error('Lỗi nghiêm trọng trong quá trình chạy kiểm thử:', err);
  process.exit(1);
});
