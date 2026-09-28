---
name: Bug Report
title: "[BUG]: Bỏ qua kiểm tra tính hợp lệ của dữ liệu số khi thực hiện phép cộng (Build 1)"
labels: ["type: bug", "severity: major", "priority: P1", "status: new"]
---

## Mô tả lỗi
Trên Build 1, hệ thống hoàn toàn bỏ qua việc kiểm tra tính hợp lệ của dữ liệu đầu vào số học (`isNaN`) cho trường First number và Second number đối với các phép toán toán học. Khi người dùng nhập chuỗi ký tự chữ cái hoặc chuỗi không phải số (ví dụ: "abc", "xyz"), hệ thống không hiển thị thông báo lỗi tương ứng ("Number 1 is not a number" hoặc "Number 2 is not a number") mà vẫn tiến hành ép kiểu tính toán, tạo ra giá trị lỗi hoặc kết quả không xác định.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 1
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **1**
3. Nhập chuỗi ký tự chữ `"abc"` vào trường First number (`#number1Field`)
4. Nhập số `"50"` vào trường Second number (`#number2Field`)
5. Chọn phép toán "Add" và nhấn nút "Calculate" (`#calculateButton`)

## Actual result
- Không hiển thị bất kỳ thông báo lỗi nào tại vùng hiển thị thông báo (`#errorMsgField`).
- Hệ thống tiếp tục tính toán và xuất kết quả không hợp lệ (ví dụ: `NaN` hoặc chuỗi rác) tại ô Answer.

## Expected result
- Hệ thống phải chặn tính toán và hiển thị thông báo lỗi màu đỏ tại `#errorMsgField`: `"Number 1 is not a number"`.
- Nếu cả 2 ô đều chứa chuỗi không phải số, phải ưu tiên hiển thị `"Number 1 is not a number"`.

## Evidence
- **Đoạn mã nguồn gây lỗi trong file script:**
```javascript
if(isNaN(num1) && isNumber && selectedBuild != 1) {
  errorMsg = "Number 1 is not a number";
  setStatusError();
  unlockCalculate();
  return;
}

if(isNaN(num2)  && isNumber && selectedBuild != 1) {
  errorMsg = "Number 2 is not a number";
  setStatusError();
  unlockCalculate();
  return;
}
```
- **Kết quả thực thi kiểm thử:** 3 Test Cases kiểm tra validation đều bị Fail trên Build 1:
  - `TC_ADD_16`: Nhập ký tự chữ vào First number -> Không hiển thị "Number 1 is not a number".
  - `TC_ADD_17`: Nhập ký tự chữ vào Second number -> Không hiển thị "Number 2 is not a number".
  - `TC_ADD_18`: Cả 2 ô chứa chữ -> Không hiển thị thông báo lỗi hợp lệ.
- **Báo cáo chi tiết:** [build-1.md](../../test-runs/TC-Add/build-1.md)
