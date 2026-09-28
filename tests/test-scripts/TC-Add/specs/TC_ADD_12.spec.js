// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_12
 * Title: Tích chọn Integers only sau khi đã có kết quả hiển thị
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_12: Tích chọn Integers only sau khi đã có kết quả hiển thị', () => {
  test('Tích chọn Integers only chuyển kết quả 9.3 thành 9', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '5.4');
    await page.fill('#number2Field', '3.9');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.uncheck('#integerSelect');
    await page.click('#calculateButton');

    await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    await expect(page.locator('#numberAnswerField')).toHaveValue('9.3');

    // Tích chọn Integers only ngay trên kết quả hiện có
    await page.check('#integerSelect');
    await expect(page.locator('#numberAnswerField')).toHaveValue('9');
  });
});
