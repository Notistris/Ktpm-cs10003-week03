# [BUG][Divide] Phép chia luôn trả về giá trị 0 đối với mọi cặp số trên Build 7

## Found by Test Case
TC-CALC-DIVIDE-001, TC-CALC-DIVIDE-002, TC-CALC-DIVIDE-005, TC-CALC-DIVIDE-006, TC-CALC-DIVIDE-007, TC-CALC-DIVIDE-010, TC-CALC-DIVIDE-012

## Requirement liên quan
FR-CALC-DIVIDE

## Severity / Priority
Critical / P0

## Environment
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Google Chrome / Puppeteer
- Affected Builds: Build 7

## Steps to reproduce
1. Truy cập trang máy tính Basic Calculator.
2. Chọn Build 7.
3. Nhập `10` vào ô First number.
4. Nhập `2` vào ô Second number.
5. Chọn Operation là "Divide".
6. Bấm nút "Calculate".

## Expected result
Hệ thống tính toán đúng và hiển thị kết quả `5`.

## Actual result
Hệ thống luôn trả về giá trị `0` tại ô Answer đối với mọi cặp dữ liệu đầu vào.

## Evidence
Note từ Test Run execution:
`Expected '5' nhưng thực tế ra '0'`
