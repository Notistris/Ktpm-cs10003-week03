// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_13
 * Title: Bỏ tích chọn Integers only để khôi phục kết quả thập phân ban đầu
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_13: Bỏ tích chọn Integers only để khôi phục kết quả thập phân ban đầu', () => {
  test('Bỏ tích Integers only khôi phục giá trị thực từ 9 thành 9.3', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '5.4');
    await page.fill('#number2Field', '3.9');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');

    await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    await expect(page.locator('#numberAnswerField')).toHaveValue('9.3');

    // Tích chọn Integers only -> chuyển thành 9
    await page.check('#integerSelect');
    await expect(page.locator('#numberAnswerField')).toHaveValue('9');

    // Bỏ tích chọn Integers only -> khôi phục 9.3
    await page.uncheck('#integerSelect');
    await expect(page.locator('#numberAnswerField')).toHaveValue('9.3');
  });
});
