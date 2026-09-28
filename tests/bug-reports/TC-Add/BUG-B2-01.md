---
name: Bug Report
title: "[BUG]: Phép toán Add bị đảo ngược với Concatenate (ghép chuỗi thay vì tính tổng) (Build 2)"
labels: ["type: bug", "severity: critical", "priority: P0", "status: new"]
---

## Mô tả lỗi
Trên Build 2, khi người dùng chọn phép toán "Add" (Cộng), hệ thống tự động đổi mã phép toán sang "Concatenate" (Nối chuỗi). Ngược lại, khi chọn Concatenate, hệ thống lại đổi sang Add. Do đó, toàn bộ các phép tính cộng số học bị xử lý sai thành ghép chuỗi ký tự (ví dụ: 15 + 25 = 1525 thay vì 40; 0 + 123 = 0123 thay vì 123; -50 + -30 = -50-30 thay vì -80). Ngoài ra, tùy chọn "Integers only" cũng bị vô hiệu hóa sai lệch khi chọn phép Add.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 2
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **2**
3. Nhập "15" vào trường First number (`#number1Field`)
4. Nhập "25" vào trường Second number (`#number2Field`)
5. Tại dropdown "Operation", chọn phép toán **Add**
6. Nhấn nút "Calculate" (`#calculateButton`)

## Actual result
- Ô Answer (`#numberAnswerField`) hiển thị kết quả nối chuỗi `"1525"`.
- Checkbox "Integers only" bị ẩn hoặc disable không thể sử dụng.

## Expected result
- Ô Answer phải hiển thị kết quả tổng số học chính xác là `"40"`.
- Checkbox "Integers only" phải hiển thị và cho phép người dùng tùy chọn bật/tắt.

## Evidence
- **Đoạn mã nguồn gây lỗi trong file script:**
```javascript
if (selectedBuild == 2) {
  if (selection == 0) {
    selection = 4;
    isNumber = false;
  } else if (selection == 4) {
    selection = 0;
    isNumber = true;
  }
}
```
- **Kết quả thực thi kiểm thử:** 19/20 Test Cases bị Fail trên Build 2:
  - `TC_ADD_01`: Kỳ vọng kết quả tổng `"40"`, nhưng thực tế hệ thống ghép chuỗi thành `"1525"`.
  - `TC_ADD_02`: Kỳ vọng kết quả `"123"`, thực tế nhận `"0123"`.
  - `TC_ADD_05`: Kỳ vọng kết quả `"-80"`, thực tế nhận `"-50-30"`.
- **Báo cáo chi tiết:** [build-2.md](../../test-runs/TC-Add/build-2.md)
