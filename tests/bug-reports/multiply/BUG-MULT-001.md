Title: [BUG][Calculator] Phép tính Multiply không kiểm tra dữ liệu hợp lệ khi nhập chuỗi không phải là số (Build 1)

## Found by Test Case
TC-Multiply-006, TC-Multiply-007

## Requirement liên quan
FR-CALC-MULTIPLY

## Severity / Priority
Major / P2

## Environment
Chrome / Edge, Windows, Basic Calculator, Build 1

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build 1 từ dropdown "Build"
3. Chọn phép tính "Multiply"
4. Nhập chuỗi kí tự không phải số vào ô First Number (VD: "abc") hoặc Second Number (VD: "xyz")
5. Bấm nút Calculate

## Expected result
Hệ thống kiểm tra dữ liệu đầu vào và hiển thị thông báo lỗi "Number 1 is not a number" hoặc "Number 2 is not a number", không thực hiện phép tính.

## Actual result
Hệ thống bỏ qua bước kiểm tra dữ liệu hợp lệ, xuất ra kết quả "NaN" tại ô Answer thay vì hiển thị thông báo lỗi.

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 1.

---
**Labels nên gắn:**
- type: bug
- module: multiply
- severity: major
- priority: P2
- status: new
- found-by: test-case
- result: fail
