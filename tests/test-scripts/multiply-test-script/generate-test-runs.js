const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, '..', '..', '..', 'scratch_build_results.json');
const testRunsDir = path.join(__dirname, '..', '..', 'test-runs', 'multiply-test-run');

if (!fs.existsSync(testRunsDir)) {
  fs.mkdirSync(testRunsDir, { recursive: true });
}

const rawData = fs.readFileSync(resultsPath, 'utf8');
const allResults = JSON.parse(rawData);

const buildDescriptions = {
  1: "Build 1 does not validate if input fields contain valid numerical values.",
  2: "Build 2 swaps Add and Concatenate operations; Multiply is unaffected.",
  3: "Build 3 always treats inputs as numbers; Multiply is unaffected.",
  4: "Build 4 locks the 'Integers only' selection to checked for mathematical operations.",
  5: "Build 5 disables the Clear button on page initialization.",
  6: "Build 6 skips divide-by-zero checks; Multiply is unaffected.",
  7: "Build 7 uses the previous answer value instead of First Number as the operand.",
  8: "Build 8 swaps First Number and Second Number input values during calculation.",
  9: "Build 9 hides and disables the Second Number input field and Calculate button."
};

for (let build = 1; build <= 9; build++) {
  const buildResults = allResults[build] || [];
  let passCount = 0;
  let failCount = 0;

  for (const r of buildResults) {
    if (r.status === 'Pass') passCount++;
    else failCount++;
  }

  const desc = buildDescriptions[build] || "";

  let mdContent = `# Test Run Report: Multiply Function - Build ${build}\n\n`;
  mdContent += `## Test Run Information\n`;
  mdContent += `- **Test Run Name**: Build ${build} Regression Test Run\n`;
  mdContent += `- **Build**: Build ${build}\n`;
  mdContent += `- **Module**: Multiply\n`;
  mdContent += `- **Execution Date**: 2026-09-28\n`;
  mdContent += `- **Executed By**: Automated Playwright Script (\`tests/test-scripts/multiply.test.js\`)\n`;
  mdContent += `- **Environment**: Chromium / Edge (Playwright Headless)\n`;
  mdContent += `- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html\n\n`;

  mdContent += `## Summary of Results\n`;
  mdContent += `| Total Executed | Passed | Failed | Pass Rate |\n`;
  mdContent += `| :---: | :---: | :---: | :---: |\n`;
  mdContent += `| ${buildResults.length} | ${passCount} | ${failCount} | ${((passCount / buildResults.length) * 100).toFixed(0)}% |\n\n`;

  mdContent += `## Test Execution Details\n`;
  mdContent += `| Test Case ID | Module | Tester | Result | Related Bug | Note |\n`;
  mdContent += `| :--- | :--- | :--- | :---: | :--- | :--- |\n`;

  for (const r of buildResults) {
    let relatedBug = '-';
    let note = '';

    if (r.status === 'Fail') {
      relatedBug = `Bug #Build${build}-01`;
      note = `Expected ${r.expected}, got ${r.actual}.`;
    } else {
      note = `Executed successfully. ${r.actual}`;
    }

    mdContent += `| ${r.id} | Multiply | Automated Script | **${r.status}** | ${relatedBug} | ${note} |\n`;
  }

  mdContent += `\n## Build Analysis & Observations\n`;
  mdContent += `- **Build Behavior**: ${desc}\n`;
  if (failCount === 0) {
    mdContent += `- **Conclusion**: All Multiply function test cases passed on Build ${build}.\n`;
  } else {
    mdContent += `- **Conclusion**: ${failCount} test case(s) failed on Build ${build} due to build-specific defects.\n`;
  }

  const fileName = `build-${build}-test-run.md`;
  const filePath = path.join(testRunsDir, fileName);
  fs.writeFileSync(filePath, mdContent, 'utf8');
  console.log(`Generated test run file: ${fileName}`);
}

console.log('Successfully generated test run files for builds 1 to 9.');
