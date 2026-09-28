// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_18
 * Title: Nhập ký tự không phải số vào cả hai ô First number và Second number
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_18: Nhập ký tự không phải số vào cả hai ô First number và Second number', () => {
  test('Ưu tiên báo lỗi của ô đầu tiên: Number 1 is not a number', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', 'abc');
    await page.fill('#number2Field', 'def');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.click('#calculateButton');

    await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    await expect(page.locator('#numberAnswerField')).toHaveValue('');
  });
});
