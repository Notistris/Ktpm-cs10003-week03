# TC_ADD_17: Nhập ký tự chữ/ký tự đặc biệt vào ô Second number

## Requirement ID
FR-CALC-ADD-04

## Module / Test type / Technique
Calculator - Add / Negative / Error Guessing

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number | 20 |
| Second number | xyz |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Nhập 20 vào ô First number
3. Nhập xyz vào ô Second number
4. Chọn phép tính Add từ dropdown Operation
5. Bấm nút Calculate

## Expected result
Hiển thị thông báo lỗi màu đỏ in nghiêng: "Number 2 is not a number". Phép tính không thực hiện và ô Answer để trống.

## Status / Related bugs
Not Run / None
