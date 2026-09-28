# TC-CALC-CONCAT-006: Nối chuỗi khi để trống Input 1

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
| Input 2 | TestData |
| Operation | Concatenate |

## Test steps
1. Bỏ trống Input 1
2. Nhập giá trị vào Input 2
3. Chọn phép tính (Operation) là "Concatenate"
4. Bấm nút tính toán

## Expected result
Hệ thống không báo lỗi bắt buộc nhập số, kết quả trả về bằng đúng Input 2 là "TestData".

## Status / Related bugs
Not Run / None