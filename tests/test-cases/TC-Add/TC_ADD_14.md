# TC_ADD_14: Cộng 2 số có độ dài tối đa 10 chữ số (Biên độ dài input)

## Requirement ID
FR-CALC-ADD-01

## Module / Test type / Technique
Calculator - Add / Boundary / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number | 1234567890 (10 chữ số) |
| Second number | 1000000000 (10 chữ số) |
| Operation | Add |
| Integers only | Unchecked |

## Test steps
1. Mở trang Basic Calculator
2. Nhập 1234567890 vào ô First number
3. Nhập 1000000000 vào ô Second number
4. Chọn phép tính Add từ dropdown Operation
5. Bấm nút Calculate

## Expected result
Ô Answer hiển thị kết quả chính xác: 2234567890. Không có lỗi xuất hiện.

## Status / Related bugs
Not Run / None
