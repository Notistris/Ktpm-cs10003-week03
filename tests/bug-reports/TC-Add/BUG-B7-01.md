---
name: Bug Report
title: "[BUG]: Hệ thống tự ý dùng kết quả tính toán trước đó làm số thứ nhất (Build 7)"
labels: ["type: bug", "severity: critical", "priority: P0", "status: new"]
---

## Mô tả lỗi
Trên Build 7, khi thực hiện phép tính, hệ thống bỏ qua dữ liệu người dùng nhập trong ô First number (`#number1Field`) mà tự ý lấy giá trị trong biến lưu trữ kết quả trước đó (`answer`) gán đè vào số thứ nhất (`num1 = answer`). Điều này dẫn tới việc toàn bộ các phép tính từ lần thứ hai trở đi đều bị sai kết quả hoàn toàn vì không sử dụng đúng dữ liệu đầu vào của người dùng.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 7
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **7**
3. Thực hiện một phép tính trước đó (ví dụ: nhập 10 + 20, bấm Calculate -> Answer = 30)
4. Xóa trắng và nhập phép tính mới: First number = 5, Second number = 10
5. Chọn phép toán "Add" và nhấn nút "Calculate"

## Actual result
- Hệ thống lấy kết quả "30" của phép tính trước làm số thứ nhất, dẫn đến thực hiện phép tính: `30 + 10 = 40`.
- Ô Answer hiển thị `"40"` thay vì kết quả của 5 + 10.

## Expected result
- Hệ thống phải đọc đúng giá trị người dùng đã nhập tại trường First number là `"5"` và trả về kết quả chính xác `"15"`.

## Evidence
- **Đoạn mã nguồn gây lỗi:**
```javascript
if (selectedBuild == 7) {
  num1 = answer;
}
```
- **Kết quả thực thi kiểm thử:** 15/20 Test Cases bị Fail trên Build 7 (`TC_ADD_01`, `TC_ADD_03`, `TC_ADD_05` -> `TC_ADD_14`, `TC_ADD_16`, `TC_ADD_18`, `TC_ADD_20`).
  - `TC_ADD_01`: Kỳ vọng kết quả `"40"`, nhưng thực tế hệ thống tính ra kết quả sai lệch do lưu vết giá trị trước.
- **Báo cáo chi tiết:** [build-7.md](../../test-runs/TC-Add/build-7.md)
