# Báo Cáo Kiểm Thử (Test Run Report) - Build 2 (Build 2)

## 1. Thông Tin Chung
- **Module:** Calculator - Add
- **Phiên bản (Build):** Build 2 - Build 2
- **Mô tả phiên bản:** Đảo ngược Add và Concatenate (Reverses Add and Concatenate)
- **Người kiểm thử (Tester):** Tran Trong Tri
- **Thời gian thực thi:** 21:32:35 28/09/2026
- **Môi trường:** Chromium (Headless) - Playwright Test Runner
- **Target URL:** https://testsheepnz.github.io/BasicCalculator.html

## 2. Thống Kê Kết Quả Test Run
| Tổng số Test Case | Pass | Fail | Blocked | Not Run | Tỉ lệ Pass | Tổng thời gian |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **20** | **1** | **19** | **0** | **0** | **5.0%** | **139.72s** |

## 3. Bảng Chi Tiết Kết Quả Kiểm Thử (Test Run Details)

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---|:---|
| **TC_ADD_01** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "40", nhưng thực tế hệ thống ghép chuỗi thành "1525" |
| **TC_ADD_02** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "123", nhưng thực tế hệ thống ghép chuỗi thành "0123" |
| **TC_ADD_03** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "999", nhưng thực tế hệ thống ghép chuỗi thành "9990" |
| **TC_ADD_04** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Phép tính Add bị thực hiện thành ghép chuỗi (Concatenate) thay vì tính tổng số học |
| **TC_ADD_05** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "-80", nhưng thực tế hệ thống ghép chuỗi thành "-50-30" |
| **TC_ADD_06** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "30", nhưng thực tế hệ thống ghép chuỗi thành "-2050" |
| **TC_ADD_07** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "-35", nhưng thực tế hệ thống ghép chuỗi thành "10-45" |
| **TC_ADD_08** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "0", nhưng thực tế hệ thống ghép chuỗi thành "100-100" |
| **TC_ADD_09** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "19.8", nhưng thực tế hệ thống ghép chuỗi thành "12.57.3" |
| **TC_ADD_10** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "10.5", nhưng thực tế hệ thống ghép chuỗi thành "15.75-5.25" |
| **TC_ADD_11** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "14", nhưng thực tế hệ thống ghép chuỗi thành "10" |
| **TC_ADD_12** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "9.3", nhưng thực tế hệ thống ghép chuỗi thành "5.43.9" |
| **TC_ADD_13** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "9.3", nhưng thực tế hệ thống ghép chuỗi thành "5.43.9" |
| **TC_ADD_14** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "2234567890", nhưng thực tế hệ thống ghép chuỗi thành "12345678901000000000" |
| **TC_ADD_15** | Calculator - Add | Tran Trong Tri | Pass | None | Thuộc tính maxlength="10" hoạt động tốt, chặn ký tự thứ 11 thành công |
| **TC_ADD_16** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "Number 1 is not a number", nhưng thực tế hệ thống ghép chuỗi thành " " |
| **TC_ADD_17** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "Number 2 is not a number", nhưng thực tế hệ thống ghép chuỗi thành " " |
| **TC_ADD_18** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "Number 1 is not a number", nhưng thực tế hệ thống ghép chuỗi thành " " |
| **TC_ADD_19** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "0", nhưng thực tế hệ thống ghép chuỗi thành " " |
| **TC_ADD_20** | Calculator - Add | Tran Trong Tri | Fail | BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng) | Kỳ vọng kết quả tổng "125", nhưng thực tế hệ thống ghép chuỗi thành "5075" |

## 4. Chi Tiết Lỗi & Lý Do Thất Bại (Failures & Blocked Details)

### ❌ [TC_ADD_01] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "40", nhưng thực tế hệ thống ghép chuỗi thành "1525"
- **Thời gian chạy:** 6019ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "40"
Received: "1525"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "1525"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('40');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_01.spec.js:22:54
```

### ❌ [TC_ADD_02] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "123", nhưng thực tế hệ thống ghép chuỗi thành "0123"
- **Thời gian chạy:** 5901ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "123"
Received: "0123"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "0123"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('123');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_02.spec.js:22:54
```

### ❌ [TC_ADD_03] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "999", nhưng thực tế hệ thống ghép chuỗi thành "9990"
- **Thời gian chạy:** 8600ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "999"
Received: "9990"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "9990"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('999');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_03.spec.js:22:54
```

### ❌ [TC_ADD_04] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Phép tính Add bị thực hiện thành ghép chuỗi (Concatenate) thay vì tính tổng số học
- **Thời gian chạy:** 20154ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Test timeout of 20000ms exceeded.
---
Error: page.goto: Test timeout of 20000ms exceeded.
Call log:
  - navigating to "https://testsheepnz.github.io/BasicCalculator.html", waiting until "domcontentloaded"


  11 | test.describe('TC_ADD_04: Cộng hai số 0 (0 + 0)', () => {
  12 |   test('Tính 0 + 0 = 0', async ({ page }) => {
> 13 |     await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
     |                ^
  14 |     await selectBuild(page);
  15 |     await page.fill('#number1Field', '0');
  16 |     await page.fill('#number2Field', '0');
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_04.spec.js:13:16
```

### ❌ [TC_ADD_05] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "-80", nhưng thực tế hệ thống ghép chuỗi thành "-50-30"
- **Thời gian chạy:** 6759ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "-80"
Received: "-50-30"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "-50-30"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('-80');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_05.spec.js:22:54
```

### ❌ [TC_ADD_06] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "30", nhưng thực tế hệ thống ghép chuỗi thành "-2050"
- **Thời gian chạy:** 6884ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "30"
Received: "-2050"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "-2050"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('30');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_06.spec.js:22:54
```

### ❌ [TC_ADD_07] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "-35", nhưng thực tế hệ thống ghép chuỗi thành "10-45"
- **Thời gian chạy:** 5760ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "-35"
Received: "10-45"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "10-45"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('-35');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_07.spec.js:22:54
```

### ❌ [TC_ADD_08] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "0", nhưng thực tế hệ thống ghép chuỗi thành "100-100"
- **Thời gian chạy:** 6191ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "0"
Received: "100-100"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "100-100"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('0');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_08.spec.js:22:54
```

### ❌ [TC_ADD_09] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "19.8", nhưng thực tế hệ thống ghép chuỗi thành "12.57.3"
- **Thời gian chạy:** 6638ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "19.8"
Received: "12.57.3"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "12.57.3"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('19.8');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_09.spec.js:22:54
```

### ❌ [TC_ADD_10] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "10.5", nhưng thực tế hệ thống ghép chuỗi thành "15.75-5.25"
- **Thời gian chạy:** 6722ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "10.5"
Received: "15.75-5.25"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "15.75-5.25"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('10.5');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_10.spec.js:22:54
```

### ❌ [TC_ADD_11] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "14", nhưng thực tế hệ thống ghép chuỗi thành "10"
- **Thời gian chạy:** 6464ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "14"
Received: "10"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "10"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('14');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_11.spec.js:22:54
```

### ❌ [TC_ADD_12] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "9.3", nhưng thực tế hệ thống ghép chuỗi thành "5.43.9"
- **Thời gian chạy:** 6292ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "9.3"
Received: "5.43.9"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "5.43.9"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('9.3');
     |                                                      ^
  23 |
  24 |     // Tích chọn Integers only ngay trên kết quả hiện có
  25 |     await page.check('#integerSelect');
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_12.spec.js:22:54
```

### ❌ [TC_ADD_13] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "9.3", nhưng thực tế hệ thống ghép chuỗi thành "5.43.9"
- **Thời gian chạy:** 6572ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "9.3"
Received: "5.43.9"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "5.43.9"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('9.3');
     |                                                      ^
  23 |
  24 |     // Tích chọn Integers only -> chuyển thành 9
  25 |     await page.check('#integerSelect');
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_13.spec.js:22:54
```

### ❌ [TC_ADD_14] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "2234567890", nhưng thực tế hệ thống ghép chuỗi thành "12345678901000000000"
- **Thời gian chạy:** 6030ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "2234567890"
Received: "12345678901000000000"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "12345678901000000000"


  19 |
  20 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 21 |     await expect(page.locator('#numberAnswerField')).toHaveValue('2234567890');
     |                                                      ^
  22 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  23 |   });
  24 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_14.spec.js:21:54
```

### ❌ [TC_ADD_16] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "Number 1 is not a number", nhưng thực tế hệ thống ghép chuỗi thành " "
- **Thời gian chạy:** 5608ms
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
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "Number 2 is not a number", nhưng thực tế hệ thống ghép chuỗi thành " "
- **Thời gian chạy:** 5894ms
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
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "Number 1 is not a number", nhưng thực tế hệ thống ghép chuỗi thành " "
- **Thời gian chạy:** 6952ms
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

### ❌ [TC_ADD_19] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "0", nhưng thực tế hệ thống ghép chuỗi thành " "
- **Thời gian chạy:** 6861ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "0"
Received: ""
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value ""


  19 |
  20 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 21 |     await expect(page.locator('#numberAnswerField')).toHaveValue('0');
     |                                                      ^
  22 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  23 |   });
  24 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_19.spec.js:21:54
```

### ❌ [TC_ADD_20] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B2-01: Đảo ngược phép toán Add và Concatenate (nối chuỗi thay vì tính tổng)`
- **Lý do / Mô tả chi tiết:** Kỳ vọng kết quả tổng "125", nhưng thực tế hệ thống ghép chuỗi thành "5075"
- **Thời gian chạy:** 5765ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "125"
Received: "5075"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "5075"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('125');
     |                                                      ^
  23 |
  24 |     // Bấm nút Clear
  25 |     await page.click('#clearButton');
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_20.spec.js:22:54
```

