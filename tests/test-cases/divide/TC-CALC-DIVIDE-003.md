# TC-CALC-DIVIDE-003: Chia số 0 cho một số nguyên dương

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | 0 |
| Input 2 (Second number) | 5 |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "0" vào ô Input First number (`#number1Field`).
2. Nhập "5" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống tính toán đúng và hiển thị kết quả là "0" tại ô Answer (`#numberAnswerField`).

## Status / Related bugs
Not Run / None
