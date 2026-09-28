# TC-CALC-CONCAT-009: Kiểm tra trạng thái của tùy chọn "Integer answer" khi chọn Concatenate

## Requirement ID
FR-CALC-CONCAT

## Module / Test type / Technique
Calculator / UI/UX / State Transition

## Preconditions
- User đang ở trang máy tính cơ bản.

## Test data
| Field | Value |
| --- | --- |
| Operation | Concatenate |

## Test steps
1. Click vào dropdown/radio chọn phép tính.
2. Chọn "Concatenate".
3. Quan sát trạng thái của tùy chọn (checkbox/toggle) "Integer answer".

## Expected result
Tùy chọn "Integer answer" phải bị disable (không thể click/tương tác) hoặc bị ẩn đi, vì phép nối chuỗi không hỗ trợ trả về số nguyên theo yêu cầu.

## Status / Related bugs
Not Run / None