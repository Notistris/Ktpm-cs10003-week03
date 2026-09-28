// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_14
 * Title: Cộng 2 số có độ dài tối đa 10 chữ số (Biên độ dài input)
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_14: Cộng 2 số có độ dài tối đa 10 chữ số (Biên độ dài input)', () => {
  test('Tính 1234567890 + 1000000000 = 2234567890', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '1234567890');
    await page.fill('#number2Field', '1000000000');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.click('#calculateButton');

    await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    await expect(page.locator('#numberAnswerField')).toHaveValue('2234567890');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
