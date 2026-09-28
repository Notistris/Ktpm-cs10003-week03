# TC-CALC-DIVIDE-001: Thực hiện phép chia hai số nguyên dương chia hết cho nhau

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Equivalence Partitioning

## Preconditions
- User đang mở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | 10 |
| Input 2 (Second number) | 2 |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "10" vào ô Input First number (`#number1Field`).
2. Nhập "2" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Đảm bảo checkbox "Integers only" không được chọn.
5. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống tính toán đúng và hiển thị kết quả là "5" tại ô Answer (`#numberAnswerField`). Không xuất hiện thông báo lỗi.

## Status / Related bugs
Not Run / None
