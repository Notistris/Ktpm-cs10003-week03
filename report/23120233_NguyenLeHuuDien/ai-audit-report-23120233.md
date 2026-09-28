# Báo cáo Sử dụng AI (AI Audit Report)
**Sinh viên:** Nguyễn Lê Hữu Điền
**MSSV:** 23120233

Tôi sử dụng các công cụ AI cho những tác vụ sau trong quá trình làm bài test web (Module Divide):

## 1. Phân tích yêu cầu và thiết kế Test Case
- **Tên công cụ AI:** Antigravity (Gemini 3.6 Flash)
- **Ngày và giờ:** 28/09/2026 19:18 - 19:48
- **Câu lệnh (prompt) của bạn:** "Chúng tôi có 5 người đang làm bài test web sau: https://testsheepnz.github.io/BasicCalculator.html. Tôi làm phần divide. Có 9 build, tôi định làm khoảng 10 test case... Bây giờ việc cần làm là thiết kế test case, phát sinh test script, chạy test script trên cả 9 bản build, viết test run, viết bug report. Lưu ý build 9 không có GUI nút calculate nên test case bị block rồi, không đưa vào bug... đọc file 03 - github_testcase_management.pptx.pdf..."
- **Kết quả do AI tạo ra:** AI khởi tạo 12 test cases (từ `TC-CALC-DIVIDE-001` đến `TC-CALC-DIVIDE-012`) ứng dụng các kỹ thuật Phân vùng tương đương (EP), Phân tích giá trị biên (BVA), và Đoán lỗi (Error Guessing), định dạng Markdown chuẩn theo slide 07.

## 2. Viết Script Automation Test (Puppeteer / JavaScript)
- **Tên công cụ AI:** Antigravity (Gemini 3.6 Flash)
- **Ngày và giờ:** 28/09/2026 19:49 - 19:53
- **Câu lệnh (prompt) của bạn:** "Phát sinh test script chạy test script trên cả 9 bản build... ghi nhận test run..."
- **Kết quả do AI tạo ra:** Sinh ra file automation script `tests/test-script/run_divide_tests.js` bằng Node.js & Puppeteer. Script tự động chọn từng build từ 1-9, giả lập thao tác nhập dữ liệu, chọn operation Divide, kiểm tra kết quả thực tế vs expected result và tự động xuất ra file `tests/test-runs/test-run-divide-builds.md`.

## 3. Xử lý điều kiện biên Build 9 và Gỡ lỗi (Troubleshooting)
- **Tên công cụ AI:** Antigravity (Gemini 3.6 Flash)
- **Ngày và giờ:** 28/09/2026 19:53 - 19:56
- **Câu lệnh (prompt) của bạn:** "Lưu ý build 9 không có GUI nút calculate nên test case bị block rồi, không đưa vào bug."
- **Kết quả do AI tạo ra:** AI đã xử lý trong script và báo cáo test run: đánh dấu tất cả test case trên Build 9 là `Result: Blocked` và note rõ `GUI nút Calculate không tồn tại trên Build 9`, đồng thời loại trừ không tạo Bug issue cho Build 9 theo đúng yêu cầu.

## 4. Tổng hợp Báo cáo Bug, Issue Template và Git Push PR
- **Tên công cụ AI:** Antigravity (Gemini 3.6 Flash)
- **Ngày và giờ:** 28/09/2026 19:57 - 20:16
- **Câu lệnh (prompt) của bạn:** "giờ tui muốn pull request lên branch Divide-test", "có cần testrun_summary không, với thêm 1 cái ai_audit_log nữa"
- **Kết quả do AI tạo ra:** 
  1. Tạo 8 file Bug Report chi tiết (`BUG-DIVIDE-001.md` -> `BUG-DIVIDE-008.md`) và file `.github/ISSUE_TEMPLATE/bug_report.md`.
  2. Tổng hợp file `TestRun_Divide_Summary.md` và `ai-audit-report-23120233.md` trong thư mục `report/23120233_NguyenLeHuuDien/`.
  3. Thực hiện checkout branch `Divide-test`, commit, merge và push thành công lên GitHub repository.
