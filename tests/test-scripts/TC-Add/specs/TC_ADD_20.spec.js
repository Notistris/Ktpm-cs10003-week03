// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_20
 * Title: Kiểm tra nút Clear xóa kết quả sau khi thực hiện phép cộng
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_20: Kiểm tra nút Clear xóa kết quả sau khi thực hiện phép cộng', () => {
  test('Nút Clear xóa trắng ô Answer và hủy tích Integers only', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '50');
    await page.fill('#number2Field', '75');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.check('#integerSelect');
    await page.click('#calculateButton');

    await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    await expect(page.locator('#numberAnswerField')).toHaveValue('125');

    // Bấm nút Clear
    await page.click('#clearButton');
    await expect(page.locator('#numberAnswerField')).toHaveValue('');
    await expect(page.locator('#integerSelect')).not.toBeChecked();
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
