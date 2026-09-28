# TC-CALC-DIVIDE-011: Thực hiện phép chia khi nhập chuỗi ký tự chữ vào ô Input

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Boundary / Error Guessing

## Preconditions
- User đang ở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | abc |
| Input 2 (Second number) | 2 |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "abc" vào ô Input First number (`#number1Field`).
2. Nhập "2" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống báo lỗi nhập liệu "Number 1 is not a number" tại khu vực hiển thị lỗi và không thực hiện phép tính.

## Status / Related bugs
Not Run / None
