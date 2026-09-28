# TC_ADD_18: Nhập ký tự không phải số vào cả hai ô First number và Second number

## Requirement ID
FR-CALC-ADD-04

## Module / Test type / Technique
Calculator - Add / Negative / Error Guessing

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number | abc |
| Second number | def |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Nhập abc vào ô First number
3. Nhập def vào ô Second number
4. Chọn phép tính Add từ dropdown Operation
5. Bấm nút Calculate

## Expected result
Hệ thống kiểm tra trường đầu tiên trước và hiển thị lỗi màu đỏ: "Number 1 is not a number". Phép tính không thực hiện.

## Status / Related bugs
Not Run / None
