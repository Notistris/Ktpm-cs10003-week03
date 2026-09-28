Title: [BUG][Calculator] Checkbox "Integer" không bị disable khi chọn Concatenate gây lỗi làm tròn số thập phân

## Found by Test Case
TC-CALC-CONCAT-009, TC-CALC-CONCAT-010

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Major / P2

## Environment
Chrome, Windows, Basic Calculator, Build 3

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn phép tính "Concatenate"
3. Quan sát trạng thái của Checkbox "Integer" (hoặc "Integer answer")
4. Nhập số thập phân vào Input 1 và Input 2 (VD: 5.5 và 6.5)
5. Tick chọn Checkbox "Integer" và bấm Calculate

## Expected result
Checkbox "Integer" phải bị vô hiệu hóa (disabled) khi chọn chức năng Concatenate. Khi tính toán không làm tròn số thập phân (kết quả mong đợi VD: "5.56.5").

## Actual result
Checkbox "Integer" không bị vô hiệu hóa, vẫn cho click/chọn. Khi tính toán hệ thống làm tròn kết quả nối chuỗi thành số nguyên (VD: kết quả trả về "5" thay vì "5.56.5").

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 3.

---
**Labels nên gắn:**
- type: bug
- module: concatenate
- severity: major
- priority: P2
- status: new
- found-by: test-case
- result: fail
