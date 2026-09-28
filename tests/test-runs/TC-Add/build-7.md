# Báo Cáo Kiểm Thử (Test Run Report) - Build 7 (Build 7)

## 1. Thông Tin Chung
- **Module:** Calculator - Add
- **Phiên bản (Build):** Build 7 - Build 7
- **Mô tả phiên bản:** Dùng kết quả trước làm số thứ nhất (Previous result used as first number)
- **Người kiểm thử (Tester):** Tran Trong Tri
- **Thời gian thực thi:** 21:35:59 28/09/2026
- **Môi trường:** Chromium (Headless) - Playwright Test Runner
- **Target URL:** https://testsheepnz.github.io/BasicCalculator.html

## 2. Thống Kê Kết Quả Test Run
| Tổng số Test Case | Pass | Fail | Blocked | Not Run | Tỉ lệ Pass | Tổng thời gian |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **20** | **5** | **15** | **0** | **0** | **25.0%** | **137.22s** |

## 3. Bảng Chi Tiết Kết Quả Kiểm Thử (Test Run Details)

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---|:---|
| **TC_ADD_01** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "40" nhưng nhận "25" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_02** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 0 + 123 = 123 |
| **TC_ADD_03** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "999" nhưng nhận "0" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_04** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 0 + 0 = 0 |
| **TC_ADD_05** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "-80" nhưng nhận "-30" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_06** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "30" nhưng nhận "50" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_07** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "-35" nhưng nhận "-45" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_08** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "0" nhưng nhận "-100" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_09** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "19.8" nhưng nhận "7.3" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_10** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "10.5" nhưng nhận "-5.25" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_11** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "14" nhưng nhận "4" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_12** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "9.3" nhưng nhận "3.9" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_13** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "9.3" nhưng nhận "3.9" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_14** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "2234567890" nhưng nhận "1000000000" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_15** | Calculator - Add | Tran Trong Tri | Pass | None | Thuộc tính maxlength="10" hoạt động tốt, chặn ký tự thứ 11 thành công |
| **TC_ADD_16** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "Number 1 is not a number" nhưng nhận " " do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_17** | Calculator - Add | Tran Trong Tri | Pass | None | Hiển thị chính xác thông báo lỗi: "Number 2 is not a number" |
| **TC_ADD_18** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "Number 1 is not a number" nhưng nhận "Number 2 is not a number" do hệ thống lấy kết quả trước làm First number |
| **TC_ADD_19** | Calculator - Add | Tran Trong Tri | Pass | None | Ép kiểu rỗng thành 0 + 0 = 0 thành công |
| **TC_ADD_20** | Calculator - Add | Tran Trong Tri | Fail | BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo | Sai lệch kết quả: kỳ vọng "125" nhưng nhận "75" do hệ thống lấy kết quả trước làm First number |

## 4. Chi Tiết Lỗi & Lý Do Thất Bại (Failures & Blocked Details)

### ❌ [TC_ADD_01] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "40" nhưng nhận "25" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 9870ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "40"
Received: "25"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "25"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('40');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_01.spec.js:22:54
```

### ❌ [TC_ADD_03] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "999" nhưng nhận "0" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 7774ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "999"
Received: "0"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "0"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('999');
     |                                                      ^
  23 |     await expect(page.locator('#errorMsgField')).toHaveText('');
  24 |   });
  25 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_03.spec.js:22:54
```

### ❌ [TC_ADD_05] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "-80" nhưng nhận "-30" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 6385ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "-80"
Received: "-30"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "-30"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "30" nhưng nhận "50" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 6413ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "30"
Received: "50"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "50"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "-35" nhưng nhận "-45" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 5873ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "-35"
Received: "-45"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "-45"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "0" nhưng nhận "-100" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 5489ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "0"
Received: "-100"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "-100"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "19.8" nhưng nhận "7.3" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 7458ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "19.8"
Received: "7.3"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "7.3"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "10.5" nhưng nhận "-5.25" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 6675ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "10.5"
Received: "-5.25"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "-5.25"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "14" nhưng nhận "4" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 6967ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "14"
Received: "4"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "4"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "9.3" nhưng nhận "3.9" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 7622ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "9.3"
Received: "3.9"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "3.9"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "9.3" nhưng nhận "3.9" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 5745ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "9.3"
Received: "3.9"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "3.9"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "2234567890" nhưng nhận "1000000000" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 7261ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "2234567890"
Received: "1000000000"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "1000000000"


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
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "Number 1 is not a number" nhưng nhận " " do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 5777ms
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

### ❌ [TC_ADD_18] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "Number 1 is not a number" nhưng nhận "Number 2 is not a number" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 5722ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#errorMsgField')
Expected: "Number 1 is not a number"
Received: "Number 2 is not a number"
Timeout:  3000ms

Call log:
  - Expect "toHaveText" locator('#errorMsgField') with timeout 3000ms
  - waiting for locator('#errorMsgField')
    10 × locator resolved to <label id="errorMsgField" data-testid="errorMsgField">Number 2 is not a number</label>
       - unexpected value "Number 2 is not a number"


  18 |     await page.click('#calculateButton');
  19 |
> 20 |     await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
     |                                                  ^
  21 |     await expect(page.locator('#numberAnswerField')).toHaveValue('');
  22 |   });
  23 | });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_18.spec.js:20:50
```

### ❌ [TC_ADD_20] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B7-01: Tự động lấy kết quả trước làm First number cho lần tính tiếp theo`
- **Lý do / Mô tả chi tiết:** Sai lệch kết quả: kỳ vọng "125" nhưng nhận "75" do hệ thống lấy kết quả trước làm First number
- **Thời gian chạy:** 11085ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('#numberAnswerField')
Expected: "125"
Received: "75"
Timeout:  3000ms

Call log:
  - Expect "toHaveValue" locator('#numberAnswerField') with timeout 3000ms
  - waiting for locator('#numberAnswerField')
    10 × locator resolved to <input value="" readonly type="text" maxlength="10" name="numberAnswer" id="numberAnswerField" class="element text medium" data-testid="numberAnswerField"/>
       - unexpected value "75"


  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
> 22 |     await expect(page.locator('#numberAnswerField')).toHaveValue('125');
     |                                                      ^
  23 |
  24 |     // Bấm nút Clear
  25 |     await page.click('#clearButton');
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_20.spec.js:22:54
```

