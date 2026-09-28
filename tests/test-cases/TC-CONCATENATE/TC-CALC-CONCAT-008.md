# TC-CALC-CONCAT-008: Nối chuỗi khi để trống cả 2 Input

## Requirement ID
FR-CALC-CONCAT

## Module / Test type / Technique
Calculator / Functional / Negative Testing

## Preconditions
- User đang ở trang máy tính cơ bản.

## Test data
| Field | Value |
| --- | --- |
| Input 1 | [Để trống] |
| Input 2 | [Để trống] |
| Operation | Concatenate |

## Test steps
1. Bỏ trống Input 1
2. Bỏ trống Input 2
3. Chọn phép tính (Operation) là "Concatenate"
4. Bấm nút tính toán

## Expected result
Hệ thống không báo lỗi, kết quả trả về là một chuỗi rỗng (không hiển thị gì hoặc hiển thị khoảng trắng tùy UI).

## Status / Related bugs
Not Run / None