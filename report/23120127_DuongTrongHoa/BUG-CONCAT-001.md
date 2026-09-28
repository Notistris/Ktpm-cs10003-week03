---
name: Bug Report
title: "[BUG]: Tính năng Concatenate lỗi (giữ nguyên kết quả cũ) khi nhập chuỗi rỗng, chuỗi Alphanumeric hoặc mã HTML"
labels: ["type: bug", "status: new"]
---

## Mô tả lỗi
Tính năng Concatenate từ chối xử lý khi đầu vào là chuỗi rỗng, chuỗi hỗn hợp chữ & số (Alphanumeric như `Item_99`), hoặc thẻ HTML. Khi gặp các giá trị này, hệ thống không báo lỗi cũng không tính toán, mà giữ nguyên hiển thị kết quả của phép tính liền trước đó. (Lưu ý: Chuỗi chữ thuần túy như "Hello" "World" vẫn hoạt động bình thường).

## Môi trường
- Trình duyệt: Chrome
- Hệ điều hành: Windows
- Basic Calculator - **Build 1**

## Steps to reproduce
1. Mở trang Basic Calculator
2. Thực hiện một phép nối hợp lệ (VD: Input 1 = "123", Input 2 = "456", bấm Calculate) -> Kết quả hiện "123456".
3. Thay đổi Input 1 thành chuỗi rỗng, hoặc chuỗi "Item_", hoặc mã HTML (`<script>`).
4. Bấm nút Calculate.

## Actual result
Hệ thống không cập nhật kết quả mới, vẫn hiển thị lại kết quả cũ là "123456".

## Expected result
Hệ thống hiển thị kết quả nối 2 chuỗi lại với nhau (VD: "" + "TestData" = "TestData").

## Evidence
- Thấy rõ qua các Test Case bị Fail ở Build 1: TC-CALC-CONCAT-003, TC-CALC-CONCAT-006, TC-CALC-CONCAT-012.
