// @ts-check
const { test, expect } = require('@playwright/test');
const { selectBuild } = require('../scripts/calculator.helper');

/**
 * Test Script: TC_ADD_15
 * Title: Nhập vượt quá giới hạn 10 ký tự vào ô nhập liệu (maxlength="10")
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 * Build: Tự động nhận từ biến môi trường BUILD hoặc project (mặc định: Prototype)
 */
test.describe('TC_ADD_15: Nhập vượt quá giới hạn 10 ký tự vào ô nhập liệu (maxlength="10")', () => {
  test('Kiểm tra thuộc tính maxlength và chặn ký tự thứ 11', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
    await selectBuild(page);

    // Kiểm tra thuộc tính maxlength="10"
    await expect(page.locator('#number1Field')).toHaveAttribute('maxlength', '10');
    await expect(page.locator('#number2Field')).toHaveAttribute('maxlength', '10');

    // Gõ chuỗi 11 ký tự
    await page.locator('#number1Field').pressSequentially('12345678901');
    await page.locator('#number2Field').pressSequentially('98765432109');

    // Chỉ nhận tối đa 10 ký tự
    await expect(page.locator('#number1Field')).toHaveValue('1234567890');
    await expect(page.locator('#number2Field')).toHaveValue('9876543210');
  });
});
