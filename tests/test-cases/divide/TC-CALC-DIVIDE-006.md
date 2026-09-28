# TC-CALC-DIVIDE-006: Thực hiện phép chia số âm cho số dương

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | -15 |
| Input 2 (Second number) | 3 |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "-15" vào ô Input First number (`#number1Field`).
2. Nhập "3" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống hiển thị kết quả đúng là "-5" tại ô Answer (`#numberAnswerField`).

## Status / Related bugs
Not Run / None
