Title: [BUG][Calculator] Ô nhập liệu Second Number và nút Calculate bị ẩn hoàn toàn (Build 9)

## Found by Test Case
TC-Multiply-000, TC-Multiply-001, TC-Multiply-002, TC-Multiply-003, TC-Multiply-004, TC-Multiply-005, TC-Multiply-006, TC-Multiply-007, TC-Multiply-008, TC-Multiply-009

## Requirement liên quan
FR-CALC-MULTIPLY

## Severity / Priority
Critical / P1

## Environment
Chrome / Edge, Windows, Basic Calculator, Build 9

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build 9 từ dropdown "Build"
3. Quan sát giao diện tính toán

## Expected result
Giao diện hiển thị đầy đủ ô nhập First Number, Second Number, dropdown chọn phép tính và nút Calculate.

## Actual result
Ô nhập Second Number (`#number2Field`) và nút Calculate (`#calculateButton`) bị biến mất (hidden & disabled), làm người dùng không thể thực hiện bất kỳ phép tính nào.

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 9.

---
**Labels nên gắn:**
- type: bug
- module: multiply
- severity: critical
- priority: P1
- status: new
- found-by: test-case
- result: fail
