# Báo Cáo Kiểm Thử (Test Run Report) - Build 5 (Build 5)

## 1. Thông Tin Chung
- **Module:** Calculator - Add
- **Phiên bản (Build):** Build 5 - Build 5
- **Mô tả phiên bản:** Nút Clear bị vô hiệu hóa (Clear button disabled)
- **Người kiểm thử (Tester):** Tran Trong Tri
- **Thời gian thực thi:** 21:34:34 28/09/2026
- **Môi trường:** Chromium (Headless) - Playwright Test Runner
- **Target URL:** https://testsheepnz.github.io/BasicCalculator.html

## 2. Thống Kê Kết Quả Test Run
| Tổng số Test Case | Pass | Fail | Blocked | Not Run | Tỉ lệ Pass | Tổng thời gian |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **20** | **19** | **1** | **0** | **0** | **95.0%** | **121.81s** |

## 3. Bảng Chi Tiết Kết Quả Kiểm Thử (Test Run Details)

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---|:---|
| **TC_ADD_01** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 15 + 25 = 40, không có lỗi |
| **TC_ADD_02** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 0 + 123 = 123 |
| **TC_ADD_03** | Calculator - Add | Tran Trong Tri | Fail | BUG-B5-01: Nút Clear bị vô hiệu hóa | Bấm nút Clear không xóa giá trị hiển thị trên ô Answer |
| **TC_ADD_04** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 0 + 0 = 0 |
| **TC_ADD_05** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: -50 + -30 = -80 |
| **TC_ADD_06** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: -20 + 50 = 30 |
| **TC_ADD_07** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 10 + -45 = -35 |
| **TC_ADD_08** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 100 + -100 = 0 |
| **TC_ADD_09** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 12.5 + 7.3 = 19.8 |
| **TC_ADD_10** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 15.75 + -5.25 = 10.5 |
| **TC_ADD_11** | Calculator - Add | Tran Trong Tri | Pass | None | Làm tròn chính xác khi tích Integers only: 10.6 + 4.2 = 14 |
| **TC_ADD_12** | Calculator - Add | Tran Trong Tri | Pass | None | Chuyển đổi tức thì từ kết quả thập phân sang nguyên: 9.3 -> 9 |
| **TC_ADD_13** | Calculator - Add | Tran Trong Tri | Pass | None | Khôi phục kết quả thập phân ban đầu thành công: 9 -> 9.3 |
| **TC_ADD_14** | Calculator - Add | Tran Trong Tri | Pass | None | Xử lý chính xác biên độ dài 10 chữ số: 1234567890 + 1000000000 = 2234567890 |
| **TC_ADD_15** | Calculator - Add | Tran Trong Tri | Pass | None | Thuộc tính maxlength="10" hoạt động tốt, chặn ký tự thứ 11 thành công |
| **TC_ADD_16** | Calculator - Add | Tran Trong Tri | Pass | None | Hiển thị chính xác thông báo lỗi: "Number 1 is not a number" |
| **TC_ADD_17** | Calculator - Add | Tran Trong Tri | Pass | None | Hiển thị chính xác thông báo lỗi: "Number 2 is not a number" |
| **TC_ADD_18** | Calculator - Add | Tran Trong Tri | Pass | None | Ưu tiên hiển thị thông báo lỗi của số thứ nhất chính xác |
| **TC_ADD_19** | Calculator - Add | Tran Trong Tri | Pass | None | Ép kiểu rỗng thành 0 + 0 = 0 thành công |
| **TC_ADD_20** | Calculator - Add | Tran Trong Tri | Pass | None | Nút Clear xóa trắng ô Answer và bỏ chọn Integers only thành công |

## 4. Chi Tiết Lỗi & Lý Do Thất Bại (Failures & Blocked Details)

### ❌ [TC_ADD_03] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B5-01: Nút Clear bị vô hiệu hóa`
- **Lý do / Mô tả chi tiết:** Bấm nút Clear không xóa giá trị hiển thị trên ô Answer
- **Thời gian chạy:** 22323ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Test timeout of 20000ms exceeded.
---
Error: page.goto: Test timeout of 20000ms exceeded.
Call log:
  - navigating to "https://testsheepnz.github.io/BasicCalculator.html", waiting until "domcontentloaded"


  11 | test.describe('TC_ADD_03: Cộng một số nguyên dương với số 0', () => {
  12 |   test('Tính 999 + 0 = 999', async ({ page }) => {
> 13 |     await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
     |                ^
  14 |     await selectBuild(page);
  15 |     await page.fill('#number1Field', '999');
  16 |     await page.fill('#number2Field', '0');
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_03.spec.js:13:16
```

