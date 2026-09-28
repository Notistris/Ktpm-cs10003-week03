---
name: Bug Report
title: "[BUG]: Tự động ép kiểu chuỗi không hợp lệ thành số 0 khi tính toán (Build 3)"
labels: ["type: bug", "severity: major", "priority: P1", "status: new"]
---

## Mô tả lỗi
Trên Build 3, cơ chế phân loại dữ liệu toán học bị ghi đè thành `isNumber = true` vĩnh viễn cho tất cả các thao tác. Khi người dùng nhập chuỗi ký tự chữ cái vào trường Second number (ví dụ: "abc") kết hợp với một số nguyên, hệ thống không bắt lỗi validation mà tự động ép kiểu chuỗi đó thành giá trị 0 hoặc tính toán ra kết quả rác, làm mất tính toàn vẹn của việc kiểm tra dữ liệu đầu vào.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 3
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **3**
3. Nhập số `"50"` vào trường First number (`#number1Field`)
4. Nhập chuỗi ký tự chữ `"abc"` vào trường Second number (`#number2Field`)
5. Chọn phép toán "Add" và nhấn nút "Calculate" (`#calculateButton`)

## Actual result
- Không có thông báo lỗi "Number 2 is not a number" hiển thị ở `#errorMsgField`.
- Hệ thống tự ép kiểu chuỗi và xuất kết quả `"50"` tại ô Answer (tương đương phép tính 50 + 0).

## Expected result
- Hệ thống phải hiển thị thông báo lỗi rõ ràng: `"Number 2 is not a number"` tại `#errorMsgField` và không thực hiện phép tính.

## Evidence
- **Đoạn mã nguồn gây lỗi:**
```javascript
function setIfMathematical() {
  var selection = document.getElementById('selectOperationDropdown').value;

  if (selectedBuild != 3) {
    isNumber = (selection != 4);
  } else {
    isNumber = true;
  }
}
```
- **Kết quả thực thi kiểm thử:**
  - `TC_ADD_17`: Nhập ký tự chữ vào Second number bị Fail do không hiển thị lỗi "Number 2 is not a number".
- **Báo cáo chi tiết:** [build-3.md](../../test-runs/TC-Add/build-3.md)
