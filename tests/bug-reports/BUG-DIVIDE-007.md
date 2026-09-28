# [BUG][Divide] Phép chia hai số thập phân (5.5 / 2) trả về kết quả âm sai lệch (-5)

## Found by Test Case
TC-CALC-DIVIDE-007

## Requirement liên quan
FR-CALC-DIVIDE

## Severity / Priority
Major / P1

## Environment
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Google Chrome / Puppeteer
- Affected Builds: Build 1, Build 2, Build 6

## Steps to reproduce
1. Truy cập trang máy tính Basic Calculator.
2. Chọn Build 1 (hoặc Build 2, Build 6).
3. Nhập `5.5` vào ô First number.
4. Nhập `2` vào ô Second number.
5. Chọn Operation là "Divide".
6. Bấm nút "Calculate".

## Expected result
Hệ thống hiển thị kết quả đúng là `2.75` tại ô Answer.

## Actual result
Hệ thống trả về giá trị âm sai lệch là `-5`.

## Evidence
Note từ Test Run execution:
`Expected '2.75' nhưng thực tế ra '-5'`
