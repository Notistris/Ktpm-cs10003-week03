---
name: Bug Report
title: "[BUG]: Bỏ qua kiểm tra phép chia cho số 0 dẫn đến kết quả Infinity (Build 6)"
labels: ["type: bug", "severity: major", "priority: P1", "status: new"]
---

## Mô tả lỗi
Trên Build 6, hệ thống bỏ qua bước xác thực mẫu số bằng 0 trong phép chia (`selectedBuild != 6`). Khi người dùng chọn phép toán Divide và nhập số thứ hai bằng 0, ứng dụng không hiển thị thông báo lỗi "Divide by zero error!" mà trực tiếp thực hiện phép tính, dẫn đến kết quả hiển thị trên ô Answer là giá trị `Infinity`.

## Môi trường
- **URL Ứng dụng:** https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build):** Build 6
- **Trình duyệt kiểm thử:** Google Chrome / Chromium Headless (Playwright)
- **Hệ điều hành:** Windows 10/11 64-bit

## Steps to reproduce
1. Truy cập https://testsheepnz.github.io/BasicCalculator.html
2. Tại dropdown "Build", chọn giá trị **6**
3. Nhập số `"100"` vào trường First number (`#number1Field`)
4. Nhập số `"0"` vào trường Second number (`#number2Field`)
5. Chọn phép toán "Divide" và nhấn nút "Calculate" (`#calculateButton`)

## Actual result
- Không có thông báo lỗi hiển thị tại ô `#errorMsgField`.
- Ô Answer hiển thị kết quả chuỗi `"Infinity"`.

## Expected result
- Hệ thống phải chặn phép tính và hiển thị thông báo lỗi màu đỏ tại `#errorMsgField`: `"Divide by zero error!"`.
- Ô Answer không được hiển thị giá trị Infinity.

## Evidence
- **Đoạn mã nguồn gây lỗi trong file script:**
```javascript
case 3:
  if(num2==0 && selectedBuild != 6 ) {
    errorMsg = "Divide by zero error!";
    setStatusError();
    return;
  }
  answer = num1 / num2;
  break;
```
- **Báo cáo chi tiết:** [build-6.md](../../test-runs/TC-Add/build-6.md)
