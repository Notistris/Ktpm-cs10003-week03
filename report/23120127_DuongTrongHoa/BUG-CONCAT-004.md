Title: [BUG][Calculator] Tính năng Concatenate bỏ qua Input 1, chỉ in ra giá trị Input 2

## Found by Test Case
TC-CALC-CONCAT-001, TC-CALC-CONCAT-002, TC-CALC-CONCAT-003, TC-CALC-CONCAT-004, TC-CALC-CONCAT-005

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Critical / P1

## Environment
Chrome, Windows, Basic Calculator, Build 7

## Steps to reproduce
1. Mở trang Basic Calculator
2. Nhập dữ liệu vào Input 1 và Input 2 (VD: Input 1 = "Hello", Input 2 = "World")
3. Chọn phép tính "Concatenate"
4. Bấm nút Calculate

## Expected result
Hệ thống trả về kết quả là chuỗi nối từ cả 2 Input (VD: "HelloWorld").

## Actual result
Tính năng Concatenate bỏ qua hoàn toàn Input 1, chỉ in ra duy nhất giá trị của Input 2 ở kết quả (VD: hiển thị "World").

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 7.

---
**Labels nên gắn:**
- type: bug
- module: calculator
- severity: critical
- priority: P1
- status: new
- found-by: test-case
