# Báo Cáo Kiểm Thử (Test Run Report) - Build 0 (Prototype)

## 1. Thông Tin Chung
- **Module:** Calculator - Add
- **Phiên bản (Build):** Build 0 - Prototype
- **Mô tả phiên bản:** Mặc định - Hoạt động chuẩn không lỗi
- **Người kiểm thử (Tester):** Tran Trong Tri
- **Thời gian thực thi:** 21:39:10 28/09/2026
- **Môi trường:** Chromium (Headless) - Playwright Test Runner
- **Target URL:** https://testsheepnz.github.io/BasicCalculator.html

## 2. Thống Kê Kết Quả Test Run
| Tổng số Test Case | Pass | Fail | Blocked | Not Run | Tỉ lệ Pass | Tổng thời gian |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **20** | **20** | **0** | **0** | **0** | **100.0%** | **93.63s** |

## 3. Bảng Chi Tiết Kết Quả Kiểm Thử (Test Run Details)

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---|:---|
| **TC_ADD_01** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 15 + 25 = 40, không có lỗi |
| **TC_ADD_02** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 0 + 123 = 123 |
| **TC_ADD_03** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 999 + 0 = 999 |
| **TC_ADD_04** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 0 + 0 = 0 |
| **TC_ADD_05** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: -50 + -30 = -80 |
| **TC_ADD_06** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: -20 + 50 = 30 |
| **TC_ADD_07** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 10 + -45 = -35 |
| **TC_ADD_08** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 100 + -100 = 0 |
| **TC_ADD_09** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 12.5 + 7.3 = 19.8 |
| **TC_ADD_10** | Calculator - Add | Tran Trong Tri | Pass | None | Tính toán chính xác: 15.75 + -5.25 = 10.5 |
| **TC_ADD_11** | Calculator - Add | Tran Trong Tri | Pass | None | Làm tròn chính xác khi tích Integers only: 10.6 + 4.2 = 14 |
| **TC_ADD_12** | Calculator - Add | Tran Trong Tri | Pass | None | Chuyển đổi tức thì từ kết quả thập phân sang nguyên: 9.3 -> 9 |
| **TC_ADD_13** | Calculator - Add | Tran Trong Tri | Pass | None | Khôi phục kết quả thập phân ban đầu thành công: 9 -> 9.3 |
| **TC_ADD_14** | Calculator - Add | Tran Trong Tri | Pass | None | Xử lý chính xác biên độ dài 10 chữ số: 1234567890 + 1000000000 = 2234567890 |
| **TC_ADD_15** | Calculator - Add | Tran Trong Tri | Pass | None | Thuộc tính maxlength="10" hoạt động tốt, chặn ký tự thứ 11 thành công |
| **TC_ADD_16** | Calculator - Add | Tran Trong Tri | Pass | None | Hiển thị chính xác thông báo lỗi: "Number 1 is not a number" |
| **TC_ADD_17** | Calculator - Add | Tran Trong Tri | Pass | None | Hiển thị chính xác thông báo lỗi: "Number 2 is not a number" |
| **TC_ADD_18** | Calculator - Add | Tran Trong Tri | Pass | None | Ưu tiên hiển thị thông báo lỗi của số thứ nhất chính xác |
| **TC_ADD_19** | Calculator - Add | Tran Trong Tri | Pass | None | Ép kiểu rỗng thành 0 + 0 = 0 thành công |
| **TC_ADD_20** | Calculator - Add | Tran Trong Tri | Pass | None | Nút Clear xóa trắng ô Answer và bỏ chọn Integers only thành công |

## 4. Đánh Giá Chất Lượng
> ✅ **Hoàn hảo:** Tất cả 20 test cases đều đạt trạng thái **Pass** trên Build 0 (Prototype). Không phát hiện lỗi nào.

