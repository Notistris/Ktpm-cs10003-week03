# [BUG][Divide] Phép chia bị đảo ngược thứ tự toán hạng (Lấy Number 2 chia cho Number 1)

## Found by Test Case
TC-CALC-DIVIDE-001, TC-CALC-DIVIDE-002, TC-CALC-DIVIDE-005, TC-CALC-DIVIDE-006, TC-CALC-DIVIDE-007, TC-CALC-DIVIDE-012

## Requirement liên quan
FR-CALC-DIVIDE

## Severity / Priority
Critical / P0

## Environment
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Google Chrome / Puppeteer
- Affected Builds: Build 8

## Steps to reproduce
1. Truy cập trang máy tính Basic Calculator.
2. Chọn Build 8.
3. Nhập `10` vào ô First number.
4. Nhập `2` vào ô Second number.
5. Chọn Operation là "Divide".
6. Bấm nút "Calculate".

## Expected result
Hệ thống lấy 10 / 2 và hiển thị kết quả là `5`.

## Actual result
Hệ thống thực hiện phép tính 2 / 10 và trả về kết quả là `0.2`. Đối với 10 / 4 trả về `0.4` (tương đương 4 / 10).

## Evidence
Note từ Test Run execution:
`Expected '5' nhưng thực tế ra '0.2'`
