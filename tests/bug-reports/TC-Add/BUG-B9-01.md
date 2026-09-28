---
name: Bug Report
title: "[BUG]: Các phần tử giao diện ngẫu nhiên bị ẩn và vô hiệu hóa (Build 9)"
labels: ["type: bug", "severity: blocker", "priority: P0", "status: new"]
---

## Mô tả lỗi
Trên Build 9, một số phần tử giao diện quan trọng gồm trường nhập liệu số thứ hai (`#number2Field`) và nút bấm thực hiện tính toán (`#calculateButton`) bị ẩn (`hidden = true`) và bị vô hiệu hóa (`disabled = true`). Người dùng không thể nhập giá trị số thứ hai và không thể nhấn nút "Calculate" để kích hoạt bất kỳ phép toán nào. Lỗi này làm chặn (Blocked) hoàn toàn mọi luồng kiểm thử chức năng của ứng dụng.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 9
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Mở trình duyệt và truy cập trang https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **9**
3. Quan sát giao diện máy tính và các trường nhập liệu
4. Thử tìm kiếm và nhập giá trị vào trường số thứ hai (Second number)
5. Thử tìm kiếm và nhấn nút "Calculate"

## Actual result
- Phần tử input `#number2Field` bị gán thuộc tính `hidden=""` và `disabled=""`, không hiển thị trên màn hình.
- Nút `#calculateButton` bị gán thuộc tính `hidden=""` và `disabled=""`, không thể click.
- Người dùng không có cách nào tương tác để gửi lệnh tính toán.

## Expected result
- Tất cả các trường nhập liệu (`#number1Field`, `#number2Field`) và nút tính toán (`#calculateButton`) phải hiển thị đầy đủ, ở trạng thái cho phép người dùng nhập dữ liệu và click tính toán bình thường.

## Evidence
- **Đoạn mã lỗi phát hiện trong trang web:**
```javascript
if (selectedBuild == 9) {
  document.getElementById('number2Field').hidden = true;
  document.getElementById('number2Field').disabled = true;
  document.getElementById('calculateButton').hidden = true;
  document.getElementById('calculateButton').disabled = true;
}
```
- **Kết quả Playwright Test:** 20/20 Test Cases bị `Blocked` với lỗi:
```text
TimeoutError: page.fill: Timeout 3000ms exceeded.
waiting for locator('#number2Field')
- locator resolved to <input disabled hidden="" id="number2Field" ... />
- element is not visible
```
- **Báo cáo chi tiết:** [build-9.md](../../test-runs/TC-Add/build-9.md)
