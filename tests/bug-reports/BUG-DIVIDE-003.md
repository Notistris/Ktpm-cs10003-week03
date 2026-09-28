# [BUG][Divide] Không hiển thị thông báo lỗi validation khi để trống input hoặc nhập chuỗi ký tự chữ

## Found by Test Case
TC-CALC-DIVIDE-008, TC-CALC-DIVIDE-009, TC-CALC-DIVIDE-011

## Requirement liên quan
FR-CALC-DIVIDE

## Severity / Priority
Medium / P2

## Environment
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Google Chrome / Puppeteer
- Affected Builds: Build 1, Build 2, Build 3, Build 4, Build 5, Build 6, Build 7, Build 8

## Steps to reproduce
1. Truy cập trang máy tính Basic Calculator.
2. Chọn Build 1 (hoặc Build 2, 3, 4, 5, 6, 7, 8).
3. Để trống ô First number hoặc nhập chuỗi chữ `"abc"`.
4. Nhập `5` vào ô Second number.
5. Chọn Operation là "Divide" và bấm nút "Calculate".

## Expected result
Hệ thống phải báo lỗi validation rõ ràng, ví dụ "Number 1 is not a number" tại khu vực hiển thị lỗi.

## Actual result
- Trên các Build 1, 2, 6: Trả về kết quả `0` hoặc `3` mà không báo lỗi.
- Trên các Build 3, 4, 5, 7, 8: Báo sai lỗi thành "Divide by zero error!".

## Evidence
Note từ Test Run execution:
`Expected lỗi 'Number 1 is not a number' nhưng thực tế ra '0'`
