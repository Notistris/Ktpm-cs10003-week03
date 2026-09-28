# TC_ADD_13: Bỏ tích chọn Integers only để khôi phục kết quả thập phân ban đầu

## Requirement ID
FR-CALC-ADD-02

## Module / Test type / Technique
Calculator - Add / Functional / State Transition

## Preconditions
- Người dùng đã truy cập trang web Basic Calculator (https://testsheepnz.github.io/BasicCalculator.html)
- Build được chọn: Prototype (Build 0)
- Đã thực hiện xong TC_ADD_12 (ô Answer đang hiển thị 9 và checkbox Integers only đang được tích)

## Test data
| Integers only | Chuyển từ Checked sang Unchecked |

## Test steps
1. Tiếp tục từ kết quả của TC_ADD_12 (ô Answer đang là 9)
2. Nhấp bỏ tích chọn checkbox Integers only

## Expected result
Giá trị trong ô Answer lập tức khôi phục hiển thị số thực ban đầu là 9.3.

## Status / Related bugs
Not Run / None
