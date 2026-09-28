# TC_ADD_12: Tích chọn Integers only sau khi đã có kết quả hiển thị

## Requirement ID
FR-CALC-ADD-02

## Module / Test type / Technique
Calculator - Add / Functional / State Transition

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)

## Test data
| First number | 5.4 |
| Second number | 3.9 |
| Operation | Add |
| Integers only | Chuyển từ Unchecked sang Checked |

## Test steps
1. Mở trang Basic Calculator
2. Nhập 5.4 vào ô First number và 3.9 vào ô Second number
3. Chọn phép tính Add và không tích checkbox Integers only
4. Bấm nút Calculate (kết quả đang hiển thị 9.3)
5. Nhấp tích chọn checkbox Integers only

## Expected result
Giá trị trong ô Answer lập tức tự động cập nhật từ 9.3 thành 9 mà không cần nhấn lại Calculate.

## Status / Related bugs
Not Run / None
