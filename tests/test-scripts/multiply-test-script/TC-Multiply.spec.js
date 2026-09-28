const { test, expect } = require('@playwright/test');

// Target Build to run on (default: Prototype = 0)
const BUILD = process.env.BUILD || '0';

test.describe(`Basic Calculator - Multiply Function Tests (Build ${BUILD})`, () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
    await page.selectOption('#selectBuild', BUILD);
  });

  test('TC-Multiply-000: Multiply two positive integers', async ({ page }) => {
    await page.fill('#number1Field', '5');
    await page.fill('#number2Field', '4');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('');
    expect(answer).toBe('20');
  });

  test('TC-Multiply-001: Multiply a positive integer and a negative integer', async ({ page }) => {
    await page.fill('#number1Field', '8');
    await page.fill('#number2Field', '-3');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('');
    expect(answer).toBe('-24');
  });

  test('TC-Multiply-002: Multiply two negative integers', async ({ page }) => {
    await page.fill('#number1Field', '-6');
    await page.fill('#number2Field', '-7');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('');
    expect(answer).toBe('42');
  });

  test('TC-Multiply-003: Multiply a number by zero', async ({ page }) => {
    await page.fill('#number1Field', '100');
    await page.fill('#number2Field', '0');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('');
    expect(answer).toBe('0');
  });

  test('TC-Multiply-004: Multiply two floating-point numbers without Integers only option', async ({ page }) => {
    await page.fill('#number1Field', '2.5');
    await page.fill('#number2Field', '4.2');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('');
    expect(answer).toBe('10.5');
  });

  test('TC-Multiply-005: Multiply two floating-point numbers with Integers only option checked', async ({ page }) => {
    await page.fill('#number1Field', '2.5');
    await page.fill('#number2Field', '3.5');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.check('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('');
    expect(answer).toBe('8');
  });

  test('TC-Multiply-006: Input non-numeric string into First Number field', async ({ page }) => {
    await page.fill('#number1Field', 'abc');
    await page.fill('#number2Field', '5');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('Number 1 is not a number');
    expect(answer).toBe('');
  });

  test('TC-Multiply-007: Input non-numeric string into Second Number field', async ({ page }) => {
    await page.fill('#number1Field', '10');
    await page.fill('#number2Field', 'xyz');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('Number 2 is not a number');
    expect(answer).toBe('');
  });

  test('TC-Multiply-008: Multiply large numbers (Boundary testing)', async ({ page }) => {
    await page.fill('#number1Field', '999999');
    await page.fill('#number2Field', '999999');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();

    expect(error).toBe('');
    expect(answer).toBe('999998000001');
  });

  test('TC-Multiply-009: Clear answer after multiplication operation', async ({ page }) => {
    await page.fill('#number1Field', '12');
    await page.fill('#number2Field', '3');
    await page.selectOption('#selectOperationDropdown', '2');
    await page.check('#integerSelect');
    await page.click('#calculateButton');
    await page.waitForTimeout(1100);

    expect(await page.inputValue('#numberAnswerField')).toBe('36');

    await page.click('#clearButton');

    const answer = await page.inputValue('#numberAnswerField');
    const error = (await page.textContent('#errorMsgField')).trim();
    const integerChecked = await page.isChecked('#integerSelect');

    expect(answer).toBe('');
    expect(error).toBe('');
    expect(integerChecked).toBe(false);
  });

});
