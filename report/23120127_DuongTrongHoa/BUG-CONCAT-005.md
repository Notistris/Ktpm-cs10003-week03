Title: [BUG][Calculator] Tính năng Concatenate nối ngược thứ tự Input (Input 2 + Input 1)

## Found by Test Case
TC-CALC-CONCAT-001, TC-CALC-CONCAT-002, TC-CALC-CONCAT-003, TC-CALC-CONCAT-004, TC-CALC-CONCAT-005, TC-CALC-CONCAT-011

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Major / P2

## Environment
Chrome, Windows, Basic Calculator, Build 8

## Steps to reproduce
1. Mở trang Basic Calculator
2. Nhập dữ liệu vào Input 1 và Input 2 (VD: Input 1 = "Hello", Input 2 = "World")
3. Chọn phép tính "Concatenate"
4. Bấm nút Calculate

## Expected result
Hệ thống nối chuỗi theo đúng thứ tự thiết kế là `Input 1 + Input 2` (VD: kết quả là "HelloWorld").

## Actual result
Hệ thống nối chuỗi theo thứ tự ngược lại thành `Input 2 + Input 1` (VD: kết quả trả về là "WorldHello").

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 8.

---
**Labels nên gắn:**
- type: bug
- module: calculator
- severity: major
- priority: P2
- status: new
- found-by: test-case
