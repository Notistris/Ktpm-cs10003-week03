# TC_ADD_19: Để trống cả hai trường First number và Second number

## Requirement ID
FR-CALC-ADD-04

## Module / Test type / Technique
Calculator - Add / Negative / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number | (để trống) |
| Second number | (để trống) |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Để trống cả hai ô First number và Second number
3. Chọn phép tính Add từ dropdown Operation
4. Bấm nút Calculate

## Expected result
Hệ thống tự động ép kiểu chuỗi rỗng thành 0 (+0 + +0 = 0) và ô Answer hiển thị giá trị 0. Không xảy ra lỗi crash trang web.

## Status / Related bugs
Not Run / None
