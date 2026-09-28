Title: [BUG][Calculator] Tính năng Concatenate tự động cắt ngắn chuỗi dài hoặc script HTML/JS (XSS payload)

## Found by Test Case
TC-CALC-CONCAT-012

## Requirement liên quan
FR-CALC-CONCAT

## Severity / Priority
Major / P2

## Environment
Chrome, Windows, Basic Calculator, Build 4, 5, 6, 8

## Steps to reproduce
1. Mở trang Basic Calculator
2. Nhập một đoạn script HTML/JS vào Input 1 (VD: `<script>alert(1)</script>`) và chuỗi bất kỳ vào Input 2 (VD: `Text`)
3. Chọn phép tính "Concatenate"
4. Bấm nút Calculate

## Expected result
Hệ thống nối và trả về đầy đủ chuỗi ban đầu (VD: `<script>alert(1)</script>Text`), có thể thực hiện encode (HTML entities) trên UI để chống XSS. Không được tự ý cắt ngắn dữ liệu người dùng.

## Actual result
Tính năng tự động cắt ngắn (trim) các chuỗi dài hoặc các đoạn script HTML/JS (VD: chuỗi `<script>alert(1)</script>Text` bị gọt đi phần sau, chỉ còn `<script>alText` (tùy build)).

## Evidence
Screenshot / video / console log đính kèm từ Test Run Build 4, 5, 6, 8.

---
**Labels nên gắn:**
- type: bug
- module: concatenate
- severity: major
- priority: P2
- status: new
- found-by: test-case
- result: fail
