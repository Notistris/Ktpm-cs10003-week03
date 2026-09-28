# Báo Cáo Kiểm Thử (Test Run Report) - Build 1 (Build 1)

## 1. Thông Tin Chung
- **Module:** Calculator - Add
- **Phiên bản (Build):** Build 1 - Build 1
- **Mô tả phiên bản:** Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers)
- **Người kiểm thử (Tester):** Tran Trong Tri
- **Thời gian thực thi:** 21:31:50 28/09/2026
- **Môi trường:** Chromium (Headless) - Playwright Test Runner
- **Target URL:** https://testsheepnz.github.io/BasicCalculator.html

## 2. Thống Kê Kết Quả Test Run
| Tổng số Test Case | Pass | Fail | Blocked | Not Run | Tỉ lệ Pass | Tổng thời gian |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **20** | **17** | **3** | **0** | **0** | **85.0%** | **89.78s** |

## 3. Bảng Chi Tiết Kết Quả Kiểm Thử (Test Run Details)

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---|:---|
| **TC_ADD_01** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 15 + 25 = 40, không có lỗi |
| **TC_ADD_02** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 0 + 123 = 123 |
| **TC_ADD_03** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 999 + 0 = 999 |
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
| **TC_ADD_16** | Calculator - Add | Tran Trong Tri | Fail | BUG-B1-01: Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers) | Không hiển thị thông báo lỗi khi nhập chuỗi ký tự không phải số vào ô nhập liệu |
| **TC_ADD_17** | Calculator - Add | Tran Trong Tri | Fail | BUG-B1-01: Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers) | Không hiển thị thông báo lỗi khi nhập chuỗi ký tự không phải số vào ô nhập liệu |
| **TC_ADD_18** | Calculator - Add | Tran Trong Tri | Fail | BUG-B1-01: Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers) | Không hiển thị thông báo lỗi khi nhập chuỗi ký tự không phải số vào ô nhập liệu |
| **TC_ADD_19** | Calculator - Add | Tran Trong Tri | Pass | None | Ép kiểu rỗng thành 0 + 0 = 0 thành công |
| **TC_ADD_20** | Calculator - Add | Tran Trong Tri | Pass | None | Nút Clear xóa trắng ô Answer và bỏ chọn Integers only thành công |

## 4. Chi Tiết Lỗi & Lý Do Thất Bại (Failures & Blocked Details)

### ❌ [TC_ADD_16] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B1-01: Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers)`
- **Lý do / Mô tả chi tiết:** Không hiển thị thông báo lỗi khi nhập chuỗi ký tự không phải số vào ô nhập liệu
- **Thời gian chạy:** 6107ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#errorMsgField')
Expected: "Number 1 is not a number"
Received: ""
Timeout:  3000ms

Call log:
  - Expect "toHaveText" locator('#errorMsgField') with timeout 3000ms
  - waiting for locator('#errorMsgField')
    10 × locator resolved to <label id="errorMsgField" data-testid="errorMsgField"></label>
       - unexpected value ""


  18 |     await page.click('#calculateButton');
  19 |
> 20 |     await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
     |                                                  ^
  21 |     await expect(page.locator('#numberAnswerField')).toHaveValue('');
  22 |   });
  23 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_16.spec.js:20:50
```

### ❌ [TC_ADD_17] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B1-01: Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers)`
- **Lý do / Mô tả chi tiết:** Không hiển thị thông báo lỗi khi nhập chuỗi ký tự không phải số vào ô nhập liệu
- **Thời gian chạy:** 6568ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#errorMsgField')
Expected: "Number 2 is not a number"
Received: ""
Timeout:  3000ms

Call log:
  - Expect "toHaveText" locator('#errorMsgField') with timeout 3000ms
  - waiting for locator('#errorMsgField')
    10 × locator resolved to <label id="errorMsgField" data-testid="errorMsgField"></label>
       - unexpected value ""


  18 |     await page.click('#calculateButton');
  19 |
> 20 |     await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
     |                                                  ^
  21 |     await expect(page.locator('#numberAnswerField')).toHaveValue('');
  22 |   });
  23 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_17.spec.js:20:50
```

### ❌ [TC_ADD_18] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B1-01: Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers)`
- **Lý do / Mô tả chi tiết:** Không hiển thị thông báo lỗi khi nhập chuỗi ký tự không phải số vào ô nhập liệu
- **Thời gian chạy:** 8727ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#errorMsgField')
Expected: "Number 1 is not a number"
Received: ""
Timeout:  3000ms

Call log:
  - Expect "toHaveText" locator('#errorMsgField') with timeout 3000ms
  - waiting for locator('#errorMsgField')
    10 × locator resolved to <label id="errorMsgField" data-testid="errorMsgField"></label>
       - unexpected value ""


  18 |     await page.click('#calculateButton');
  19 |
> 20 |     await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
     |                                                  ^
  21 |     await expect(page.locator('#numberAnswerField')).toHaveValue('');
  22 |   });
  23 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_18.spec.js:20:50
```

