# TC-CALC-CONCAT-005: Nối chuỗi có chứa khoảng trắng (Space)

## Requirement ID
FR-CALC-CONCAT

## Module / Test type / Technique
Calculator / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang máy tính cơ bản.

## Test data
| Field | Value |
| --- | --- |
| Input 1 | Good  | (có khoảng trắng ở cuối)
| Input 2 | Morning |
| Operation | Concatenate |

## Test steps
1. Nhập giá trị vào Input 1
2. Nhập giá trị vào Input 2
3. Chọn phép tính (Operation) là "Concatenate"
4. Bấm nút tính toán

## Expected result
Hệ thống giữ nguyên khoảng trắng, kết quả là "Good Morning".

## Status / Related bugs
Not Run / None