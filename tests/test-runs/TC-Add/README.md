# BÁO CÁO TỔNG HỢP TEST RUN: CHỨC NĂNG CỘNG (TC-ADD)

Báo cáo thực thi tự động của 20 test cases chức năng **Add** trên tất cả 10 phiên bản Build ([Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html)).

- **Module:** Calculator - Add
- **Người kiểm thử (Tester):** Tran Trong Tri
- **Cập nhật lần cuối:** 21:37:32 28/09/2026
- **Công cụ kiểm thử:** Playwright Test (chạy độc lập từng file testcase spec.js)

## 1. Bảng Tổng Hợp Kết Quả 10 Builds

| Build | Tên / Đặc Trưng Phiên Bản | Tổng TC | Pass | Fail | Blocked | Not Run | Tỉ Lệ Pass | Báo Cáo Chi Tiết |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build 0** | Prototype - *Mặc định - Hoạt động chuẩn không lỗi* | 20 | **20** | **0** | **0** | **0** | **100.0%** | [build-0.md](./build-0.md) |
| **Build 1** | Build 1 - *Bỏ qua kiểm tra số hợp lệ (Skips validation for non-numbers)* | 20 | **17** | **3** | **0** | **0** | **85.0%** | [build-1.md](./build-1.md) |
| **Build 2** | Build 2 - *Đảo ngược Add và Concatenate (Reverses Add and Concatenate)* | 20 | **1** | **19** | **0** | **0** | **5.0%** | [build-2.md](./build-2.md) |
| **Build 3** | Build 3 - *Luôn xử lý như số (Always treats inputs as numbers)* | 20 | **19** | **1** | **0** | **0** | **95.0%** | [build-3.md](./build-3.md) |
| **Build 4** | Build 4 - *Bị khóa chế độ Integers only (Integers only is always enabled)* | 20 | **8** | **12** | **0** | **0** | **40.0%** | [build-4.md](./build-4.md) |
| **Build 5** | Build 5 - *Nút Clear bị vô hiệu hóa (Clear button disabled)* | 20 | **19** | **1** | **0** | **0** | **95.0%** | [build-5.md](./build-5.md) |
| **Build 6** | Build 6 - *Không kiểm tra chia cho 0 (Skips divide-by-zero validation)* | 20 | **19** | **1** | **0** | **0** | **95.0%** | [build-6.md](./build-6.md) |
| **Build 7** | Build 7 - *Dùng kết quả trước làm số thứ nhất (Previous result used as first number)* | 20 | **5** | **15** | **0** | **0** | **25.0%** | [build-7.md](./build-7.md) |
| **Build 8** | Build 8 - *Đảo ngược số thứ nhất và thứ hai (Reverses first and second number)* | 20 | **17** | **3** | **0** | **0** | **85.0%** | [build-8.md](./build-8.md) |
| **Build 9** | Build 9 - *Các phần tử biến mất ngẫu nhiên (Elements randomly disappear)* | 20 | **0** | **0** | **20** | **0** | **0.0%** | [build-9.md](./build-9.md) |

## 2. Ma Trận Trạng Thái Test Run (10 Builds x 20 Test Cases)

Bảng dưới đây thống kê trực quan trạng thái Pass / Fail / Blocked của từng test case trên từng build:

| Test Case ID | Tên / Mục Tiêu Test Case | B0 | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 | B9 |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **TC_ADD_01** | Cộng 2 số nguyên dương thông thường (15 + 25 = 40) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_02** | Cộng số 0 với một số nguyên dương (0 + 123 = 123) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Pass | Pass | Blocked |
| **TC_ADD_03** | Cộng một số nguyên dương với số 0 (999 + 0 = 999) | Pass | Pass | Fail | Pass | Fail | Fail | Pass | Fail | Fail | Blocked |
| **TC_ADD_04** | Cộng hai số 0 (0 + 0 = 0) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Pass | Pass | Blocked |
| **TC_ADD_05** | Cộng 2 số nguyên âm (-50 + -30 = -80) | Pass | Pass | Fail | Pass | Fail | Pass | Fail | Fail | Pass | Blocked |
| **TC_ADD_06** | Số nguyên âm cộng số nguyên dương (-20 + 50 = 30) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_07** | Số nguyên dương cộng số nguyên âm (10 + -45 = -35) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_08** | Cộng 2 số đối nhau (100 + -100 = 0) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_09** | Cộng 2 số thập phân dương (12.5 + 7.3 = 19.8) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_10** | Số thập phân dương cộng số thập phân âm (15.75 + -5.25 = 10.5) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_11** | Tích chọn Integers only trước khi tính (10.6 + 4.2 -> 14) | Pass | Pass | Fail | Pass | Pass | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_12** | Tích chọn Integers only sau khi đã có kết quả (9.3 -> 9) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_13** | Bỏ tích chọn Integers only khôi phục kết quả thập phân (9 -> 9.3) | Pass | Pass | Fail | Pass | Fail | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_14** | Cộng 2 số có độ dài tối đa 10 chữ số (Biên input 10 số) | Pass | Pass | Fail | Pass | Pass | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_15** | Nhập vượt quá giới hạn 10 ký tự (Kiểm tra maxlength="10") | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Blocked |
| **TC_ADD_16** | Nhập ký tự chữ vào First number (Báo lỗi Number 1 is not a number) | Pass | Fail | Fail | Pass | Pass | Pass | Pass | Fail | Fail | Blocked |
| **TC_ADD_17** | Nhập ký tự chữ vào Second number (Báo lỗi Number 2 is not a number) | Pass | Fail | Fail | Fail | Pass | Pass | Pass | Pass | Fail | Blocked |
| **TC_ADD_18** | Cả 2 ô chứa chữ (Ưu tiên báo lỗi Number 1 is not a number) | Pass | Fail | Fail | Pass | Pass | Pass | Pass | Fail | Pass | Blocked |
| **TC_ADD_19** | Để trống cả 2 trường First & Second number (0 + 0 = 0) | Pass | Pass | Fail | Pass | Pass | Pass | Pass | Pass | Pass | Blocked |
| **TC_ADD_20** | Kiểm tra nút Clear xóa kết quả và hủy tích Integers only | Pass | Pass | Fail | Pass | Pass | Pass | Pass | Fail | Pass | Blocked |
