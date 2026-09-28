# TC-CALC-CONCAT-010: Nối chuỗi trong trường hợp người dùng cố tình bật cờ "Integer answer" từ trước

## Requirement ID
FR-CALC-CONCAT

## Module / Test type / Technique
Calculator / Functional / Error Guessing

## Preconditions
- User đang ở trang máy tính cơ bản.
- Đang chọn phép toán cộng (Add) và đã check vào "Integer answer".

## Test data
| Field | Value |
| --- | --- |
| Input 1 | 5.5 |
| Input 2 | 6.5 |
| Operation | Concatenate |

## Test steps
1. Đảm bảo "Integer answer" đang được check (từ bước trước).
2. Chuyển Operation sang "Concatenate".
3. Nhập giá trị Input 1 và Input 2.
4. Bấm nút tính toán.

## Expected result
Hệ thống bỏ qua cờ "Integer answer", xử lý hai đầu vào như chuỗi. Kết quả là "5.56.5", không làm tròn số.

## Status / Related bugs
Not Run / None