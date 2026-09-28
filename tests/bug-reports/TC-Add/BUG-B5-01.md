---
name: Bug Report
title: "[BUG]: Nút Clear bị vô hiệu hóa khi chuyển sang phiên bản Build 5 (Build 5)"
labels: ["type: bug", "severity: minor", "priority: P2", "status: new"]
---

## Mô tả lỗi
Trên Build 5, ngay khi người dùng chọn phiên bản "5" từ dropdown `selectBuild`, nút xóa kết quả "Clear" (`#clearButton`) bị gắn thuộc tính `disabled = true`. Người dùng không thể click vào nút Clear để reset ô kết quả Answer hoặc bỏ chọn checkbox Integers only khi cần thiết trước khi thực hiện các phép tính mới.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 5
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **5**
3. Quan sát nút "Clear" (`#clearButton`)
4. Nhập dữ liệu vào các ô và thử nhấn nút "Clear"

## Actual result
- Nút "Clear" bị mờ và có thuộc tính `disabled="true"`, không thể tiếp nhận thao tác click của người dùng.

## Expected result
- Nút "Clear" luôn sẵn sàng hoạt động (`disabled=false`), cho phép người dùng click để xóa ô kết quả bất cứ lúc nào.

## Evidence
- **Đoạn mã nguồn gây lỗi trong file script:**
```javascript
function buildChanged() {
  selectedBuild = document.getElementById('selectBuild').value;
  ...
  if (selectedBuild == 5) {
    document.getElementById('clearButton').disabled = true;
  } else {
    document.getElementById('clearButton').disabled = false;
  }
}
```
- **Báo cáo chi tiết:** [build-5.md](../../test-runs/TC-Add/build-5.md)
