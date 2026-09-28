---
name: Bug Report
title: "[BUG]: Tùy chọn Integers only bị khóa cưỡng bức và ép kết quả luôn thành số nguyên (Build 4)"
labels: ["type: bug", "severity: major", "priority: P1", "status: new"]
---

## Mô tả lỗi
Trên Build 4, phần tử checkbox "Integers only" (`#integerSelect`) bị thiết lập ngầm ở trạng thái `disabled = true` và `checked = true`. Người dùng bị tước quyền bỏ chọn tính năng này. Do đó, tất cả kết quả của các phép tính toán học (bao gồm phép cộng các số thập phân) luôn bị ép hàm `parseInt(answer)`, làm tròn thành số nguyên và cắt bỏ hoàn toàn phần thập phân, ngăn cản người dùng nhận được kết quả số thực chính xác.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 4
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **4**
3. Nhập số `"12.5"` vào First number (`#number1Field`)
4. Nhập số `"7.3"` vào Second number (`#number2Field`)
5. Chọn phép toán "Add" và nhấn nút "Calculate" (`#calculateButton`)
6. Quan sát trạng thái của checkbox "Integers only" và ô kết quả Answer

## Actual result
- Checkbox "Integers only" bị tích chọn sẵn và bị vô hiệu hóa (`disabled="true"`), không thể bỏ tích.
- Ô Answer hiển thị `"19"` (bị làm tròn nguyên) thay vì kết quả chính xác `"19.8"`.

## Expected result
- Checkbox "Integers only" phải ở trạng thái cho phép người dùng tùy ý tích chọn hoặc bỏ chọn.
- Khi người dùng chưa tích chọn, kết quả hiển thị tại ô Answer phải là số thập phân chính xác: `"19.8"`.

## Evidence
- **Đoạn mã nguồn gây lỗi trong file script:**
```javascript
function setFieldStatus() {
  if (selectedBuild != 4) {
    ...
  } else {
    if (isNumber) {
      document.getElementById('integerSelect').disabled = true;
      document.getElementById('integerSelect').checked = true;
      document.getElementById('integerSelect').hidden = false;
      document.getElementById('intSelectionLabel').hidden = false;
    }
  }
}
```
- **Kết quả thực thi kiểm thử:** 12/20 Test Cases bị Fail trên Build 4 (`TC_ADD_01` -> `TC_ADD_10`, `TC_ADD_12`, `TC_ADD_13`).
- **Báo cáo chi tiết:** [build-4.md](../../test-runs/TC-Add/build-4.md)
