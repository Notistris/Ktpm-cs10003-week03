Title: [BUG][Calculator] Phép tính Multiply sử dụng giá trị kết quả cũ thay vì số nhập vào ở ô First Number (Build 7)

## Found by Test Case
TC-Multiply-000, TC-Multiply-001, TC-Multiply-002, TC-Multiply-004, TC-Multiply-005, TC-Multiply-006, TC-Multiply-008

## Requirement liên quan
FR-CALC-MULTIPLY

## Severity / Priority
Critical / P1

## Environment
Chrome / Edge, Windows, Basic Calculator, Build 7

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build 7 từ dropdown "Build"
3. Chọn phép tính "Multiply"
4. Nhập "5" vào ô First Number và "4" vào ô Second Number
5. Bấm nút Calculate

## Expected result
Hệ thống lấy giá trị từ ô First Number (5) nhân với Second Number (4) và trả về kết quả "20".

## Actual result
Hệ thống lấy giá trị biến `answer` cũ (khi chưa tính là rỗng/0) làm số bị nhân, dẫn đến kết quả trả về luôn bằng "0" thay vì "20".

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 7.

---
**Labels nên gắn:**
- type: bug
- module: multiply
- severity: critical
- priority: P1
- status: new
- found-by: test-case
- result: fail
