# [BUG][Divide] Phép chia với số âm bị tính sai dấu hoặc làm mất dấu âm

## Found by Test Case
TC-CALC-DIVIDE-005, TC-CALC-DIVIDE-006

## Requirement liên quan
FR-CALC-DIVIDE

## Severity / Priority
Major / P1

## Environment
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Google Chrome / Puppeteer
- Affected Builds: Build 3, Build 4

## Steps to reproduce
1. Truy cập trang máy tính Basic Calculator.
2. Chọn Build 3 (hoặc Build 4).
3. Nhập `-15` vào ô First number.
4. Nhập `3` vào ô Second number.
5. Chọn Operation là "Divide".
6. Bấm nút "Calculate".

## Expected result
Hệ thống hiển thị kết quả đúng là `-5` tại ô Answer.

## Actual result
Trên Build 3: Hệ thống trả về `5` (mất dấu âm).
Trên Build 4: Hệ thống không hiển thị kết quả (trả về chuỗi rỗng `''`).

## Evidence
Note từ Test Run execution:
`Expected '-5' nhưng thực tế ra '5'`
