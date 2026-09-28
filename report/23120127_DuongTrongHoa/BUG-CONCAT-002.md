Title: [BUG][Calculator] Tính năng Concatenate thực hiện phép cộng toán học thay vì nối chuỗi khi nhập số

## Found by Test Case
TC-CALC-CONCAT-002

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Critical / P1

## Environment
Chrome, Windows, Basic Calculator, Build 2

## Steps to reproduce
1. Mở trang Basic Calculator
2. Nhập các con số vào Input 1 và Input 2 (VD: Input 1 = "123", Input 2 = "456")
3. Chọn phép tính "Concatenate"
4. Bấm nút Calculate

## Expected result
Hệ thống nối 2 chuỗi số lại với nhau, kết quả trả về là chuỗi "123456".

## Actual result
Hệ thống xử lý sai logic, thực hiện phép cộng toán học (Addition) thay vì nối chuỗi (kết quả trả về "579").

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 2.

---
**Labels nên gắn:**
- type: bug
- module: calculator
- severity: critical
- priority: P1
- status: new
- found-by: test-case
- result: fail
