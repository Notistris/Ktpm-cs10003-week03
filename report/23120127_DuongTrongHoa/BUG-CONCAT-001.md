Title: [BUG][Calculator] Tính năng Concatenate lỗi (giữ nguyên kết quả cũ) khi nhập chuỗi rỗng, chuỗi Alphanumeric hoặc mã HTML

## Found by Test Case
TC-CALC-CONCAT-003, TC-CALC-CONCAT-006, TC-CALC-CONCAT-012

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Major / P1

## Environment
Chrome, Windows, Basic Calculator, Build 1

## Steps to reproduce
1. Mở trang Basic Calculator
2. Thực hiện một phép nối hợp lệ (VD: Input 1 = "123", Input 2 = "456", bấm Calculate) -> Kết quả hiện "123456".
3. Thay đổi Input 1 thành chuỗi rỗng, hoặc chuỗi "Item_", hoặc mã HTML (`<script>`).
4. Chọn phép tính "Concatenate" và bấm nút Calculate.

## Expected result
Hệ thống hiển thị kết quả nối 2 chuỗi lại với nhau (VD: "" + "TestData" = "TestData").

## Actual result
Hệ thống từ chối xử lý các đầu vào là chuỗi rỗng, alphanumeric hỗn hợp hoặc thẻ HTML. Hệ thống không báo lỗi cũng không tính toán, mà giữ nguyên hiển thị kết quả của phép tính liền trước đó (VD: hiển thị lại "123456").

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 1.

---
**Labels nên gắn:**
- type: bug
- module: calculator
- severity: major
- priority: P1
- status: new
- found-by: test-case
- result: fail
