# TC-CALC-CONCAT-012: Kiểm tra bảo mật/XSS khi nhập mã script HTML/JS

## Requirement ID
FR-CALC-CONCAT

## Module / Test type / Technique
Calculator / Security / Error Guessing

## Preconditions
- User đang ở trang máy tính cơ bản.

## Test data
| Field | Value |
| --- | --- |
| Input 1 | <script>alert(1)</script> |
| Input 2 | Text |
| Operation | Concatenate |

## Test steps
1. Nhập giá trị vào Input 1
2. Nhập giá trị vào Input 2
3. Chọn phép tính (Operation) là "Concatenate"
4. Bấm nút tính toán

## Expected result
Kết quả in ra text thuần dạng `<script>alert(1)</script>Text`. Script không bị thực thi trên trình duyệt (để tránh lỗi XSS).

## Status / Related bugs
Not Run / None