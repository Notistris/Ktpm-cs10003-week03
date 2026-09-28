Title: [BUG][Calculator] Phép tính Multiply hoán đổi vị trí ô First Number và Second Number (Build 8)

## Found by Test Case
TC-Multiply-006, TC-Multiply-007

## Requirement liên quan
FR-CALC-MULTIPLY

## Severity / Priority
Major / P2

## Environment
Chrome / Edge, Windows, Basic Calculator, Build 8

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build 8 từ dropdown "Build"
3. Chọn phép tính "Multiply"
4. Nhập chuỗi "abc" vào ô First Number và số "5" vào ô Second Number
5. Bấm nút Calculate

## Expected result
Hệ thống báo lỗi "Number 1 is not a number" vì First Number không phải là số.

## Actual result
Hệ thống tráo đổi vị trí First Number thành Second Number, dẫn đến thông báo lỗi hiển thị sai thành "Number 2 is not a number".

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 8.

---
**Labels nên gắn:**
- type: bug
- module: multiply
- severity: major
- priority: P2
- status: new
- found-by: test-case
- result: fail
