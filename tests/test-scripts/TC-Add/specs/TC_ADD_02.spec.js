// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_02
 * Title: Cộng số 0 với một số nguyên dương
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_02: Cộng số 0 với một số nguyên dương', () => {
  test('Tính 0 + 123 = 123', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '0');
    await page.fill('#number2Field', '123');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');

    await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    await expect(page.locator('#numberAnswerField')).toHaveValue('123');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
