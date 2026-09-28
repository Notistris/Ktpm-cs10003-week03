const { chromium } = require('playwright');
const readline = require('readline');

// Test Case Definitions for Multiply Function
const testCases = [
  {
    id: 'TC-Multiply-000',
    title: 'Multiply two positive integers',
    num1: '5',
    num2: '4',
    integersOnly: false,
    expectedAnswer: '20',
    expectedError: ''
  },
  {
    id: 'TC-Multiply-001',
    title: 'Multiply a positive integer and a negative integer',
    num1: '8',
    num2: '-3',
    integersOnly: false,
    expectedAnswer: '-24',
    expectedError: ''
  },
  {
    id: 'TC-Multiply-002',
    title: 'Multiply two negative integers',
    num1: '-6',
    num2: '-7',
    integersOnly: false,
    expectedAnswer: '42',
    expectedError: ''
  },
  {
    id: 'TC-Multiply-003',
    title: 'Multiply a number by zero',
    num1: '100',
    num2: '0',
    integersOnly: false,
    expectedAnswer: '0',
    expectedError: ''
  },
  {
    id: 'TC-Multiply-004',
    title: 'Multiply two floating-point numbers without Integers only option',
    num1: '2.5',
    num2: '4.2',
    integersOnly: false,
    expectedAnswer: '10.5',
    expectedError: ''
  },
  {
    id: 'TC-Multiply-005',
    title: 'Multiply two floating-point numbers with Integers only option checked',
    num1: '2.5',
    num2: '3.5',
    integersOnly: true,
    expectedAnswer: '8',
    expectedError: ''
  },
  {
    id: 'TC-Multiply-006',
    title: 'Input non-numeric string into First Number field',
    num1: 'abc',
    num2: '5',
    integersOnly: false,
    expectedAnswer: '',
    expectedError: 'Number 1 is not a number'
  },
  {
    id: 'TC-Multiply-007',
    title: 'Input non-numeric string into Second Number field',
    num1: '10',
    num2: 'xyz',
    integersOnly: false,
    expectedAnswer: '',
    expectedError: 'Number 2 is not a number'
  },
  {
    id: 'TC-Multiply-008',
    title: 'Multiply large numbers (Boundary testing)',
    num1: '999999',
    num2: '999999',
    integersOnly: false,
    expectedAnswer: '999998000001',
    expectedError: ''
  },
  {
    id: 'TC-Multiply-009',
    title: 'Clear answer after multiplication operation',
    num1: '12',
    num2: '3',
    integersOnly: true,
    isClearTest: true,
    expectedAnswer: '',
    expectedError: ''
  }
];

/**
 * Ask user to specify which build to test
 */
function askBuildNumber() {
  return new Promise((resolve) => {
    // Check if BUILD environment variable or command line argument is provided
    const cliBuildArg = process.argv.find(arg => arg.startsWith('--build='));
    if (cliBuildArg) {
      const buildVal = cliBuildArg.split('=')[1];
      console.log(`Using build specified via CLI argument: Build ${buildVal}`);
      return resolve(buildVal);
    }

    if (process.env.BUILD !== undefined) {
      console.log(`Using build specified via BUILD environment variable: Build ${process.env.BUILD}`);
      return resolve(process.env.BUILD);
    }

    // Check if non-interactive environment
    if (!process.stdin.isTTY) {
      console.log('Non-interactive environment detected. Defaulting to Build 0 (Prototype).');
      return resolve('0');
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log('\n======================================================');
    console.log('   BASIC CALCULATOR PLAYWRIGHT AUTOMATED TEST SUITE   ');
    console.log('======================================================');
    console.log('Available Builds:');
    console.log('  0 : Prototype (Works perfectly)');
    console.log('  1 - 9 : Builds 1 to 9 (Contain intentional bugs)');
    console.log('------------------------------------------------------');

    rl.question('Please enter the Build number to run tests on [0-9] (Default: 0): ', (answer) => {
      rl.close();
      const selected = answer.trim() || '0';
      resolve(selected);
    });
  });
}

/**
 * Execute all Multiply test cases using Playwright
 */
async function runMultiplyTests() {
  const build = await askBuildNumber();
  console.log(`\nStarting Playwright test execution for Multiply function on Build ${build}...\n`);

  let browser;
  try {
    browser = await chromium.launch({ headless: true, channel: 'msedge' });
  } catch (e) {
    browser = await chromium.launch({ headless: true });
  }
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = [];

  try {
    // Navigate to target application
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
    await page.waitForLoadState('domcontentloaded');

    // Select target Build
    await page.selectOption('#selectBuild', build);
    console.log(`Selected Build ${build} on web page.\n`);

    for (const tc of testCases) {
      console.log(`Running ${tc.id}: ${tc.title}...`);

      // Clear previous inputs
      await page.fill('#number1Field', '');
      await page.fill('#number2Field', '');

      // Fill test inputs
      if (tc.num1 !== undefined) await page.fill('#number1Field', tc.num1);
      if (tc.num2 !== undefined) await page.fill('#number2Field', tc.num2);

      // Select operation: 2 = Multiply
      await page.selectOption('#selectOperationDropdown', '2');

      // Set Integers only checkbox state
      const isChecked = await page.isChecked('#integerSelect');
      if (tc.integersOnly && !isChecked) {
        await page.check('#integerSelect');
      } else if (!tc.integersOnly && isChecked) {
        await page.uncheck('#integerSelect');
      }

      if (tc.isClearTest) {
        // Run initial calculation for clear test
        await page.click('#calculateButton');
        await page.waitForFunction(() => {
          const val = document.getElementById('numberAnswerField').value;
          return val !== '';
        }, { timeout: 3000 }).catch(() => {});

        // Click Clear button
        await page.click('#clearButton');

        // Verify cleared states
        const answerVal = await page.inputValue('#numberAnswerField');
        const errorText = await page.textContent('#errorMsgField');
        const integerChecked = await page.isChecked('#integerSelect');

        const passed = (answerVal === '' && errorText.trim() === '' && integerChecked === false);

        results.push({
          id: tc.id,
          title: tc.title,
          status: passed ? 'PASSED' : 'FAILED',
          expected: 'Answer: "", Error: "", IntegersOnly: false',
          actual: `Answer: "${answerVal}", Error: "${errorText.trim()}", IntegersOnly: ${integerChecked}`
        });

        console.log(`  -> ${passed ? 'PASSED [OK]' : 'FAILED [FAIL]'}`);
        continue;
      }

      // Execute calculation
      await page.click('#calculateButton');

      // Wait for calculation to finish (delay up to 1s in page script)
      await page.waitForTimeout(1100);

      // Extract results
      const answerVal = await page.inputValue('#numberAnswerField');
      const errorText = (await page.textContent('#errorMsgField')).trim();

      // Validate test case pass/fail condition
      let passed = false;
      if (tc.expectedError) {
        passed = (errorText === tc.expectedError);
      } else {
        passed = (answerVal === tc.expectedAnswer && errorText === '');
      }

      results.push({
        id: tc.id,
        title: tc.title,
        status: passed ? 'PASSED' : 'FAILED',
        expected: tc.expectedError ? `Error: "${tc.expectedError}"` : `Answer: "${tc.expectedAnswer}"`,
        actual: errorText ? `Error: "${errorText}"` : `Answer: "${answerVal}"`
      });

      console.log(`  -> ${passed ? 'PASSED [OK]' : 'FAILED [FAIL]'}`);
    }

  } catch (err) {
    console.error('Test execution error:', err);
  } finally {
    await browser.close();
  }

  // Print Summary Table
  console.log('\n========================================================================');
  console.log(`                     TEST EXECUTION SUMMARY (BUILD ${build})            `);
  console.log('========================================================================');
  let passedCount = 0;
  for (const r of results) {
    if (r.status === 'PASSED') passedCount++;
    const statusFormatted = r.status === 'PASSED' ? '\x1b[32mPASSED\x1b[0m' : '\x1b[31mFAILED\x1b[0m';
    console.log(`[${r.id}] ${r.title.padEnd(60)} : ${statusFormatted}`);
    if (r.status === 'FAILED') {
      console.log(`    Expected: ${r.expected}`);
      console.log(`    Actual  : ${r.actual}`);
    }
  }
  console.log('------------------------------------------------------------------------');
  console.log(`Total: ${results.length} | Passed: ${passedCount} | Failed: ${results.length - passedCount}`);
  console.log('========================================================================\n');
}

// Run test runner
if (require.main === module) {
  runMultiplyTests();
}

module.exports = { runMultiplyTests, testCases };
