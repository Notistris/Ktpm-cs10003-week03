---
name: Bug Report
title: "[BUG]: Đảo ngược vị trí số thứ nhất và số thứ hai trong xử lý tính toán và validate (Build 8)"
labels: ["type: bug", "severity: major", "priority: P1", "status: new"]
---

## Mô tả lỗi
Trên Build 8, hệ thống thực hiện hoán đổi giá trị của số thứ nhất (`#number1Field`) và số thứ hai (`#number2Field`) trước khi đưa vào luồng kiểm tra dữ liệu và tính toán (`var temp = num1; num1 = num2; num2 = temp;`). Mặc dù phép cộng có tính chất giao hoán (a + b = b + a), việc hoán đổi này gây ra lỗi nghiêm trọng về thông báo lỗi: khi người dùng nhập chuỗi ký tự chữ vào First number thì hệ thống lại báo lỗi cho Second number ("Number 2 is not a number"), và ngược lại.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 8
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **8**
3. Nhập chuỗi ký tự chữ `"abc"` vào trường First number (`#number1Field`)
4. Nhập số `"50"` vào trường Second number (`#number2Field`)
5. Chọn phép toán "Add" và nhấn nút "Calculate" (`#calculateButton`)

## Actual result
- Thông báo lỗi hiển thị tại `#errorMsgField` là: `"Number 2 is not a number"`.

## Expected result
- Thông báo lỗi phải phản ánh chính xác trường nhập liệu bị sai: `"Number 1 is not a number"`.

## Evidence
- **Đoạn mã nguồn gây lỗi trong file script:**
```javascript
if (selectedBuild == 8) {
  var temp = num1;
  num1 = num2;
  num2 = temp;
}
```
- **Kết quả thực thi kiểm thử:**
  - `TC_ADD_16`: Nhập chữ vào First number -> Bị sai lệch thông báo lỗi.
  - `TC_ADD_17`: Nhập chữ vào Second number -> Bị đảo thông báo lỗi thành "Number 1 is not a number".
- **Báo cáo chi tiết:** [build-8.md](../../test-runs/TC-Add/build-8.md)
