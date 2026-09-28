Title: [BUG][Calculator] Tính năng Concatenate từ chối các chuỗi chữ/kí tự đặc biệt, không cập nhật kết quả mới

## Found by Test Case
TC-CALC-CONCAT-001, TC-CALC-CONCAT-003, TC-CALC-CONCAT-004

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Major / P1

## Environment
Chrome, Windows, Basic Calculator, Build 1, 4, 5, 6

## Steps to reproduce
1. Mở trang Basic Calculator
2. Nhập chuỗi chữ cái hoặc ký tự đặc biệt vào Input 1 và Input 2 (VD: Input 1 = "Hello", Input 2 = "World" hoặc các ký tự đặc biệt)
3. Chọn phép tính "Concatenate"
4. Bấm nút Calculate

## Expected result
Hệ thống hiển thị kết quả nối 2 chuỗi lại với nhau (VD: "HelloWorld"). Không báo lỗi khi nhập chữ hoặc ký tự đặc biệt.

## Actual result
Hệ thống từ chối đầu vào là chữ/ký tự đặc biệt (chỉ nhận số), không cập nhật kết quả mới mà hiển thị lại kết quả của phép tính liền trước đó.

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 1, 4, 5, 6.

---
**Labels nên gắn:**
- type: bug
- module: calculator
- severity: major
- priority: P1
- status: new
- found-by: test-case
