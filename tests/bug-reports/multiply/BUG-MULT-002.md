Title: [BUG][Calculator] Checkbox "Integers only" bị khóa bật làm tự động làm tròn số thập phân khi nhân (Build 4)

## Found by Test Case
TC-Multiply-004

## Requirement liên quan
FR-CALC-MULTIPLY

## Severity / Priority
Major / P2

## Environment
Chrome / Edge, Windows, Basic Calculator, Build 4

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build 4 từ dropdown "Build"
3. Chọn phép tính "Multiply"
4. Nhập số thập phân vào First Number (VD: "2.5") và Second Number (VD: "4.2")
5. Bấm nút Calculate

## Expected result
Hệ thống cho phép tính toán số thập phân bình thường khi người dùng không chọn làm tròn, kết quả trả về là "10.5".

## Actual result
Checkbox "Integers only" bị khóa ở trạng thái được chọn (disabled & checked), làm kết quả nhân bị làm tròn thành số nguyên ("10" thay vì "10.5").

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 4.

---
**Labels nên gắn:**
- type: bug
- module: multiply
- severity: major
- priority: P2
- status: new
- found-by: test-case
- result: fail
