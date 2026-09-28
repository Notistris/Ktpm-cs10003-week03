# TC-CALC-DIVIDE-009: Thực hiện phép chia khi để trống ô Input Second number

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Error Guessing

## Preconditions
- User đang ở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | 10 |
| Input 2 (Second number) | [Để trống] |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "10" vào ô Input First number (`#number1Field`).
2. Để trống ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống hiển thị thông báo lỗi yêu cầu nhập số hợp lệ vào ô Second number (ví dụ "Number 2 is not a number").

## Status / Related bugs
Not Run / None
