# TC-CALC-CONCAT-011: Nối chuỗi định dạng số thập phân

## Requirement ID
FR-CALC-CONCAT

## Module / Test type / Technique
Calculator / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang máy tính cơ bản.

## Test data
| Field | Value |
| --- | --- |
| Input 1 | 3.14 |
| Input 2 | 0.001 |
| Operation | Concatenate |

## Test steps
1. Nhập giá trị vào Input 1
2. Nhập giá trị vào Input 2
3. Chọn phép tính (Operation) là "Concatenate"
4. Bấm nút tính toán

## Expected result
Hệ thống hiểu các dấu chấm phẩy là chuỗi. Kết quả hiển thị "3.140.001".

## Status / Related bugs
Not Run / None