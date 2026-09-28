# TC_ADD_20: Kiểm tra nút Clear xóa kết quả sau khi thực hiện phép cộng

## Requirement ID
FR-CALC-ADD-05

## Module / Test type / Technique
Calculator - Add / Functional / State Transition

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)
- Đã thực hiện xong một phép tính cộng trước đó (ô Answer đang hiển thị 125, checkbox Integers only đang được tích)

## Test data
| Thao tác | Bấm nút Clear |

## Test steps
1. Mở trang Basic Calculator
2. Thực hiện phép tính 50 + 75, tích Integers only và bấm Calculate (Answer hiển thị 125)
3. Bấm nút Clear

## Expected result
Ô Answer được xóa rỗng (""), checkbox Integers only tự động chuyển về trạng thái không tích (Unchecked), và thông báo lỗi nếu có được xóa sạch.

## Status / Related bugs
Not Run / None
