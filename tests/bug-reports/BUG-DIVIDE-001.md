# [BUG][Divide] Phép chia hai số nguyên dương ra số thập phân bị ép thành số nguyên

## Found by Test Case
TC-CALC-DIVIDE-002

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
2. Chọn Build 1 (hoặc Build 2, 3, 5, 6).
3. Nhập `10` vào ô First number.
4. Nhập `4` vào ô Second number.
5. Chọn Operation là "Divide".
6. Đảm bảo checkbox "Integers only" KHÔNG được tích chọn.
7. Bấm nút "Calculate".

## Expected result
Hệ thống tính toán đúng và hiển thị kết quả số thập phân `2.5` tại ô Answer.

## Actual result
Hệ thống hiển thị kết quả bị ép thành số nguyên `5` (hoặc bị làm tròn/lỗi xử lý).

## Evidence
Note từ Test Run execution:
`Expected '2.5' nhưng thực tế ra '5'`
