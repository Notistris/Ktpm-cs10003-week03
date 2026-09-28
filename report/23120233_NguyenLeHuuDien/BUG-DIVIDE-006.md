# [BUG][Divide] Checkbox "Integers Only" bị disable hoặc không hoạt động khi chọn phép Divide

## Found by Test Case
TC-CALC-DIVIDE-010

## Requirement liên quan
FR-CALC-DIVIDE

## Severity / Priority
Medium / P2

## Environment
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Google Chrome / Puppeteer
- Affected Builds: Build 4, Build 5

## Steps to reproduce
1. Truy cập trang máy tính Basic Calculator.
2. Chọn Build 4 (hoặc Build 5).
3. Nhập `7` vào ô First number.
4. Nhập `2` vào ô Second number.
5. Chọn Operation là "Divide".
6. Thử tích chọn checkbox "Integers only".

## Expected result
User có thể tích chọn checkbox "Integers only" để hệ thống tính toán lấy phần nguyên của kết quả (kỳ vọng `3`).

## Actual result
- Trên Build 4: Checkbox "Integers Only" bị disable (bị mờ đi), không cho phép tương tác.
- Trên Build 5: Sau khi bấm Calculate, hệ thống không trả về kết quả hoặc trả về chuỗi rỗng `''`.

## Evidence
Note từ Test Run execution:
`Checkbox Integers Only bị disable không cho chọn` / `Expected '3' nhưng thực tế ra ''`
