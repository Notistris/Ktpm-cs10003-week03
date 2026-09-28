// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_11
 * Title: Cộng 2 số thập phân khi đã tích chọn Integers only trước khi tính
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_11: Cộng 2 số thập phân khi đã tích chọn Integers only trước khi tính', () => {
  test('Tính 10.6 + 4.2 với Integers only -> kết quả 14', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);
    await page.fill('#number1Field', '10.6');
    await page.fill('#number2Field', '4.2');
    await page.selectOption('#selectOperationDropdown', '0');
    await page.check('#integerSelect');
    await page.click('#calculateButton');

    await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    await expect(page.locator('#numberAnswerField')).toHaveValue('14');
    await expect(page.locator('#errorMsgField')).toHaveText('');
  });
});
