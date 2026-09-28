// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_17
 * Title: Nhập ký tự chữ/ký tự đặc biệt vào ô Second number
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_17: Nhập ký tự chữ/ký tự đặc biệt vào ô Second number', () => {
  test('Báo lỗi Number 2 is not a number', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '20');
    await page.fill('#number2Field', 'xyz');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.click('#calculateButton');

    await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
    await expect(page.locator('#numberAnswerField')).toHaveValue('');
  });
});
