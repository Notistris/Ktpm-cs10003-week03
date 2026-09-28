# TC_ADD_15: Nhập vượt quá giới hạn 10 ký tự vào ô nhập liệu (maxlength="10")

## Requirement ID
FR-CALC-ADD-03

## Module / Test type / Technique
Calculator - Add / Boundary / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number input | 12345678901 (11 ký tự) |
| Second number input | 98765432109 (11 ký tự) |

## Test steps
1. Mở trang Basic Calculator
2. Nhập chuỗi 12345678901 vào ô First number
3. Nhập chuỗi 98765432109 vào ô Second number

## Expected result
Ô First number chỉ nhận tối đa 10 ký tự: 1234567890. Ô Second number chỉ nhận tối đa 10 ký tự: 9876543210. Ký tự thứ 11 không được phép nhập vào ô input.

## Status / Related bugs
Not Run / None
