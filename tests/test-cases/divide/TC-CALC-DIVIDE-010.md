# TC-CALC-DIVIDE-010: Thực hiện phép chia khi bật tùy chọn Integers Only

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | 7 |
| Input 2 (Second number) | 2 |
| Operation | Divide |
| Integers Only | Checked |

## Test steps
1. Nhập "7" vào ô Input First number (`#number1Field`).
2. Nhập "2" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Tích chọn checkbox "Integers only" (`#integerSelect`).
5. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống lấy phần nguyên của phép chia và hiển thị kết quả là "3" tại ô Answer (`#numberAnswerField`).

## Status / Related bugs
Not Run / None
