# Báo Cáo Kiểm Thử (Test Run Report) - Build 4 (Build 4)

## 1. Thông Tin Chung
- **Module:** Calculator - Add
- **Phiên bản (Build):** Build 4 - Build 4
- **Mô tả phiên bản:** Bị khóa chế độ Integers only (Integers only is always enabled)
- **Người kiểm thử (Tester):** Tran Trong Tri
- **Thời gian thực thi:** 21:33:59 28/09/2026
- **Môi trường:** Chromium (Headless) - Playwright Test Runner
- **Target URL:** https://testsheepnz.github.io/BasicCalculator.html

## 2. Thống Kê Kết Quả Test Run
| Tổng số Test Case | Pass | Fail | Blocked | Not Run | Tỉ lệ Pass | Tổng thời gian |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **20** | **8** | **12** | **0** | **0** | **40.0%** | **133.27s** |

## 3. Bảng Chi Tiết Kết Quả Kiểm Thử (Test Run Details)

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---|:---|
| **TC_ADD_01** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_02** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_03** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_04** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_05** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_06** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_07** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_08** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_09** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_10** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_11** | Calculator - Add | Tran Trong Tri | Pass | None | Làm tròn chính xác khi tích Integers only: 10.6 + 4.2 = 14 |
| **TC_ADD_12** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_13** | Calculator - Add | Tran Trong Tri | Fail | BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled) | Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm |
| **TC_ADD_14** | Calculator - Add | Tran Trong Tri | Pass | None | Xử lý chính xác biên độ dài 10 chữ số: 1234567890 + 1000000000 = 2234567890 |
| **TC_ADD_15** | Calculator - Add | Tran Trong Tri | Pass | None | Thuộc tính maxlength="10" hoạt động tốt, chặn ký tự thứ 11 thành công |
| **TC_ADD_16** | Calculator - Add | Tran Trong Tri | Pass | None | Hiển thị chính xác thông báo lỗi: "Number 1 is not a number" |
| **TC_ADD_17** | Calculator - Add | Tran Trong Tri | Pass | None | Hiển thị chính xác thông báo lỗi: "Number 2 is not a number" |
| **TC_ADD_18** | Calculator - Add | Tran Trong Tri | Pass | None | Ưu tiên hiển thị thông báo lỗi của số thứ nhất chính xác |
| **TC_ADD_19** | Calculator - Add | Tran Trong Tri | Pass | None | Ép kiểu rỗng thành 0 + 0 = 0 thành công |
| **TC_ADD_20** | Calculator - Add | Tran Trong Tri | Pass | None | Nút Clear xóa trắng ô Answer và bỏ chọn Integers only thành công |

## 4. Chi Tiết Lỗi & Lý Do Thất Bại (Failures & Blocked Details)

### ❌ [TC_ADD_01] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 7114ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '25');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_01.spec.js:18:16
```

### ❌ [TC_ADD_02] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 6074ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '123');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_02.spec.js:18:16
```

### ❌ [TC_ADD_03] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 5837ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '0');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_03.spec.js:18:16
```

### ❌ [TC_ADD_04] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 5960ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '0');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_04.spec.js:18:16
```

### ❌ [TC_ADD_05] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 7179ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '-30');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_05.spec.js:18:16
```

### ❌ [TC_ADD_06] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 6002ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '50');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_06.spec.js:18:16
```

### ❌ [TC_ADD_07] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 6193ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '-45');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_07.spec.js:18:16
```

### ❌ [TC_ADD_08] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 6190ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '-100');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_08.spec.js:18:16
```

### ❌ [TC_ADD_09] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 6837ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '7.3');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_09.spec.js:18:16
```

### ❌ [TC_ADD_10] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 6288ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '-5.25');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_10.spec.js:18:16
```

### ❌ [TC_ADD_12] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 20169ms
- **Thông báo kỹ thuật từ Playwright:**
```text
Test timeout of 20000ms exceeded.
---
Error: page.goto: Test timeout of 20000ms exceeded.
Call log:
  - navigating to "https://testsheepnz.github.io/BasicCalculator.html", waiting until "domcontentloaded"


  11 | test.describe('TC_ADD_12: Tích chọn Integers only sau khi đã có kết quả hiển thị', () => {
  12 |   test('Tích chọn Integers only chuyển kết quả 9.3 thành 9', async ({ page }) => {
> 13 |     await page.goto('https://testsheepnz.github.io/BasicCalculator.html', { waitUntil: 'domcontentloaded' });
     |                ^
  14 |     await selectBuild(page);
  15 |     await page.fill('#number1Field', '5.4');
  16 |     await page.fill('#number2Field', '3.9');
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_12.spec.js:13:16
```

### ❌ [TC_ADD_13] - Trạng thái: Fail
- **Mã lỗi liên quan:** `BUG-B4-01: Bị khóa chế độ Integers only (Integers only always enabled)`
- **Lý do / Mô tả chi tiết:** Kết quả số thập phân luôn bị ép làm tròn thành số nguyên do Integers only bị khóa ngầm
- **Thời gian chạy:** 5646ms
- **Thông báo kỹ thuật từ Playwright:**
```text
TimeoutError: page.uncheck: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('#integerSelect')
    - locator resolved to <input disabled value="1" type="checkbox" id="integerSelect" name="intSelection" class="element checkbox" data-testid="integerSelect"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms


  16 |     await page.fill('#number2Field', '3.9');
  17 |     await page.selectOption('#selectOperationDropdown', '0');
> 18 |     await page.uncheck('#integerSelect');
     |                ^
  19 |     await page.click('#calculateButton');
  20 |
  21 |     await page.waitForSelector('#calculatingForm', { state: 'hidden' });
    at D:\Projects\Code\school\ktpm\Ktpm-cs10003-week03\tests\test-scripts\TC-Add\specs\TC_ADD_13.spec.js:18:16
```

