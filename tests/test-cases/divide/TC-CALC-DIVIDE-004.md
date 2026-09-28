# TC-CALC-DIVIDE-004: Thực hiện phép chia cho số 0 (Divide by zero)

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
| Input 2 (Second number) | 0 |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "10" vào ô Input First number (`#number1Field`).
2. Nhập "0" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống không cho phép thực hiện phép chia cho 0 và hiển thị thông báo lỗi "Divide by zero error!" (hoặc tương tự) tại khu vực thông báo lỗi / ô trả về kết quả.

## Status / Related bugs
Not Run / None
