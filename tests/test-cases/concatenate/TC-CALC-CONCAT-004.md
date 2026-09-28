# TC-CALC-CONCAT-004: Nối chuỗi chứa các ký tự đặc biệt

## Requirement ID
FR-CALC-CONCAT

## Module / Test type / Technique
Calculator / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang máy tính cơ bản.

## Test data
| Field | Value |
| --- | --- |
| Input 1 | !@#$%^ |
| Input 2 | &*()_+ |
| Operation | Concatenate |

## Test steps
1. Nhập giá trị vào Input 1
2. Nhập giá trị vào Input 2
3. Chọn phép tính (Operation) là "Concatenate"
4. Bấm nút tính toán

## Expected result
Hệ thống hiển thị kết quả là "!@#$%^&*()_+". Không có lỗi crash hay chặn ký tự đặc biệt.

## Status / Related bugs
Not Run / None