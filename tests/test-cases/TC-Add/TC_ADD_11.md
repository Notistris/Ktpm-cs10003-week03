# TC_ADD_11: Cộng 2 số thập phân khi đã tích chọn Integers only trước khi tính

## Requirement ID
FR-CALC-ADD-02

## Module / Test type / Technique
Calculator - Add / Functional / State Transition

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number | 10.6 |
| Second number | 4.2 |
| Operation | Add |
| Integers only | Checked |

## Test steps
1. Mở trang Basic Calculator
2. Nhập 10.6 vào ô First number
3. Nhập 4.2 vào ô Second number
4. Chọn phép tính Add từ dropdown Operation
5. Tích chọn checkbox Integers only
6. Bấm nút Calculate

## Expected result
Ô Answer hiển thị phần nguyên của tổng (10.6 + 4.2 = 14.8) là 14.

## Status / Related bugs
Not Run / None
