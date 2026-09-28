const { chromium } = require('playwright');
const { testCases } = require('./multiply.test.js');
const fs = require('fs');
const path = require('path');

async function runAllBuilds() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true, channel: 'msedge' });
  } catch (e) {
    browser = await chromium.launch({ headless: true });
  }

  const allResults = {};

  for (let build = 1; build <= 9; build++) {
    console.log(`Running Multiply tests on Build ${build}...`);
    const context = await browser.newContext();
    const page = await context.newPage();
    const results = [];

    await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
    await page.waitForLoadState('domcontentloaded');
    await page.selectOption('#selectBuild', String(build));

    for (const tc of testCases) {
      // Clear inputs
      await page.fill('#number1Field', '').catch(() => {});
      await page.fill('#number2Field', '').catch(() => {});

      // Check element states
      const num2Hidden = await page.isHidden('#number2Field').catch(() => false);
      const calcHidden = await page.isHidden('#calculateButton').catch(() => false);
      const calcDisabled = await page.isDisabled('#calculateButton').catch(() => false);

      if (num2Hidden || calcHidden || calcDisabled) {
        results.push({
          id: tc.id,
          title: tc.title,
          status: 'Fail',
          expected: tc.expectedError ? `Error: "${tc.expectedError}"` : `Answer: "${tc.expectedAnswer}"`,
          actual: `Element state issue: calculateButton (hidden: ${calcHidden}, disabled: ${calcDisabled}), number2Field (hidden: ${num2Hidden})`,
          answerVal: '', errorText: 'Element disabled/hidden'
        });
        continue;
      }

      if (tc.num1 !== undefined) await page.fill('#number1Field', tc.num1).catch(() => {});
      if (tc.num2 !== undefined) await page.fill('#number2Field', tc.num2).catch(() => {});
      await page.selectOption('#selectOperationDropdown', '2').catch(() => {});

      // Handle checkbox safely without timing out on disabled checkbox
      const isIntegerDisabled = await page.isDisabled('#integerSelect').catch(() => false);
      const isChecked = await page.isChecked('#integerSelect').catch(() => false);

      if (!isIntegerDisabled) {
        if (tc.integersOnly && !isChecked) {
          await page.check('#integerSelect').catch(() => {});
        } else if (!tc.integersOnly && isChecked) {
          await page.uncheck('#integerSelect').catch(() => {});
        }
      }

      if (tc.isClearTest) {
        const clearDisabled = await page.isDisabled('#clearButton').catch(() => false);
        if (clearDisabled) {
          results.push({
            id: tc.id,
            title: tc.title,
            status: 'Fail',
            expected: 'Answer: "", Error: "", IntegersOnly: false',
            actual: 'Clear button is disabled',
            answerVal: '', errorText: 'Clear button disabled', integerChecked: isChecked
          });
          continue;
        }

        await page.click('#calculateButton').catch(() => {});
        await page.waitForTimeout(1100);
        await page.click('#clearButton').catch(() => {});
        const answerVal = await page.inputValue('#numberAnswerField').catch(() => '');
        const errorText = (await page.textContent('#errorMsgField').catch(() => '')).trim();
        const integerCheckedAfter = await page.isChecked('#integerSelect').catch(() => false);
        const passed = (answerVal === '' && errorText === '' && integerCheckedAfter === false);
        results.push({
          id: tc.id,
          title: tc.title,
          status: passed ? 'Pass' : 'Fail',
          expected: 'Answer: "", Error: "", IntegersOnly: false',
          actual: `Answer: "${answerVal}", Error: "${errorText}", IntegersOnly: ${integerCheckedAfter}`,
          answerVal, errorText, integerChecked: integerCheckedAfter
        });
        continue;
      }

      await page.click('#calculateButton').catch(() => {});
      await page.waitForTimeout(1100);

      const answerVal = await page.inputValue('#numberAnswerField').catch(() => '');
      const errorText = (await page.textContent('#errorMsgField').catch(() => '')).trim();

      let passed = false;
      if (tc.expectedError) {
        passed = (errorText === tc.expectedError);
      } else {
        passed = (answerVal === tc.expectedAnswer && errorText === '');
      }

      results.push({
        id: tc.id,
        title: tc.title,
        status: passed ? 'Pass' : 'Fail',
        expected: tc.expectedError ? `Error: "${tc.expectedError}"` : `Answer: "${tc.expectedAnswer}"`,
        actual: errorText ? `Error: "${errorText}"` : `Answer: "${answerVal}"`,
        answerVal, errorText
      });
    }

    allResults[build] = results;
    await context.close();
  }

  await browser.close();

  const outputPath = path.join(__dirname, '..', '..', '..', 'scratch_build_results.json');
  fs.writeFileSync(outputPath, JSON.stringify(allResults, null, 2));
  console.log('Successfully completed execution for Builds 1 through 9.');
}

runAllBuilds();
