# TC-CALC-DIVIDE-002: Chia hai số nguyên dương cho ra kết quả số thập phân

## Requirement ID
FR-CALC-DIVIDE

## Module / Test type / Technique
Calculator / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang máy tính cơ bản (Basic Calculator).

## Test data
| Field | Value |
| --- | --- |
| Input 1 (First number) | 10 |
| Input 2 (Second number) | 4 |
| Operation | Divide |
| Integers Only | Unchecked |

## Test steps
1. Nhập "10" vào ô Input First number (`#number1Field`).
2. Nhập "4" vào ô Input Second number (`#number2Field`).
3. Chọn phép tính (Operation) là "Divide".
4. Đảm bảo checkbox "Integers only" không được chọn.
5. Bấm nút tính toán (`#calculateButton`).

## Expected result
Hệ thống hiển thị đúng kết quả dạng thập phân là "2.5" tại ô Answer (`#numberAnswerField`).

## Status / Related bugs
Not Run / None
