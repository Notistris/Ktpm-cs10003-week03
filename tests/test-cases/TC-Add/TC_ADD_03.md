# TC_ADD_03: Cộng một số nguyên dương với số 0

## Requirement ID
FR-CALC-ADD-01

## Module / Test type / Technique
Calculator - Add / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number | 999 |
| Second number | 0 |
| Operation | Add |
| Integers only | Unchecked |

## Test steps
1. Mở trang Basic Calculator
2. Nhập 999 vào ô First number
3. Nhập 0 vào ô Second number
4. Chọn phép tính Add từ dropdown Operation
5. Bấm nút Calculate

## Expected result
Ô Answer hiển thị kết quả 999. Không có thông báo lỗi xuất hiện.

## Status / Related bugs
Not Run / None
