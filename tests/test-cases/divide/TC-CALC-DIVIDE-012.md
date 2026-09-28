# TC-CALC-DIVIDE-012: Thực hiện phép chia với số nguyên dương lớn (Boundary Value Analysis)

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | 999999999 |
| Input 2 (Second number) | 1 |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "999999999" vào ô Input First number (`#number1Field`).
2. Nhập "1" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống tính toán đúng và hiển thị kết quả là "999999999" tại ô Answer (`#numberAnswerField`).

## Status / Related bugs
Not Run / None
