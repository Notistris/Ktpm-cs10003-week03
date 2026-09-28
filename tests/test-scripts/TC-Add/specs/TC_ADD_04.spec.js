// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_04
 * Title: Cộng hai số 0 (0 + 0)
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_04: Cộng hai số 0 (0 + 0)', () => {
  test('Tính 0 + 0 = 0', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '0');
    await page.fill('#number2Field', '0');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');

    await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
