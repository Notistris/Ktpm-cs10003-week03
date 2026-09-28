Title: [BUG][Calculator] Toàn bộ Input và Button bị đóng băng, thao tác click bị vô hiệu hóa (Not Clickable)

## Found by Test Case
Tất cả các Test Case (TC-CALC-CONCAT-001 đến 012 - bị Blocked)

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Blocker / P1

## Environment
Chrome, Windows, Basic Calculator, Build 9

## Steps to reproduce
1. Mở trang Basic Calculator
2. Thử tương tác, click vào các trường Input 1, Input 2, hoặc các Button (như tính toán)

## Expected result
Tất cả các thành phần giao diện (UI) cho phép click và nhập liệu bình thường.

## Actual result
Toàn bộ các Input và Button trên giao diện đều bị đóng băng, vô hiệu hóa (Not Clickable). Người dùng (cũng như tool automation) không thể thao tác bất kỳ bước nào.

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 9 (lỗi Node is either not clickable).

---
**Labels nên gắn:**
- type: bug
- module: concatenate
- severity: blocker
- priority: P1
- status: new
- found-by: test-case
- result: fail
