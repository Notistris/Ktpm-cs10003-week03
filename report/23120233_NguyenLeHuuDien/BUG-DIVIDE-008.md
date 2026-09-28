# [BUG][Divide] Phép chia cho 0 không hiển thị thông báo lỗi "Divide by zero error!"

## Found by Test Case
TC-CALC-DIVIDE-004

## Requirement liên quan
FR-CALC-DIVIDE

## Severity / Priority
Major / P1

## Environment
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Google Chrome / Puppeteer
- Affected Builds: Build 1, Build 2, Build 3, Build 5, Build 6

## Steps to reproduce
1. Truy cập trang máy tính Basic Calculator.
2. Chọn Build 1 (hoặc Build 2, Build 3, Build 5, Build 6).
3. Nhập `10` vào ô First number.
4. Nhập `0` vào ô Second number.
5. Chọn Operation là "Divide".
6. Bấm nút "Calculate".

## Expected result
Hệ thống phải hiển thị thông báo lỗi rõ ràng "Divide by zero error!" tại khu vực báo lỗi hoặc ô trả về kết quả.

## Actual result
- Trên Build 1, Build 2, Build 3, Build 5: Trả về kết quả `0` mà không xuất hiện thông báo lỗi.
- Trên Build 6: Trả về giá trị `Infinity` mà không hiển thị thông báo lỗi chuẩn.

## Evidence
Note từ Test Run execution:
`Expected thông báo lỗi 'Divide by zero error!' nhưng thực tế ra '0'` / `'Infinity'`
