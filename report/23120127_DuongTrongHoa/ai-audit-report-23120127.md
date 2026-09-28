# Báo cáo Sử dụng AI (AI Audit Report)
**Sinh viên:** Dương Trọng Hòa
**MSSV:** 23120127

Tôi sử dụng các công cụ AI cho những tác vụ sau:

## 1. Phân tích yêu cầu và thiết kế Test Case
- **Tên công cụ AI:** Antigravity (Gemini 3.1 Pro)
- **Ngày và giờ:** 28/09/2026 17:33
- **Câu lệnh (prompt) của bạn:** "Có một app máy tính cần viết testcase như sau... Hãy giúp tôi sinh hơn 10 test case phần concatenate. phải tổ chức theo đúng định dạng mẫu đã cho"
- **Kết quả do AI tạo ra:** AI đã khởi tạo 12 test cases (từ TC-CALC-CONCAT-001 đến 012) áp dụng các kĩ thuật kiểm thử (Phân vùng tương đương, Phân tích giá trị biên, Đoán lỗi) và định dạng chuẩn dưới dạng Markdown theo đúng template yêu cầu.

## 2. Viết Script Automation Test (Puppeteer / JavaScript)
- **Tên công cụ AI:** Antigravity (Gemini 3.1 Pro)
- **Ngày và giờ:** 28/09/2026 17:51 - 18:03
- **Câu lệnh (prompt) của bạn:** "Hãy viết script tự động trong test-script chạy test và đưa kết quả qua thư mục test-runs... Tôi cần test Concat của 9 build." và "Bạn đã đứng sai thư mục... cần viết vào trong, ưu tiên sử dụng js hơn py..."
- **Kết quả do AI tạo ra:** Sinh ra file `run_concat_tests.js` sử dụng Node.js & Puppeteer, được lưu vào đúng thư mục dự án `Ktpm-cs10003-week03/tests/test-script/`. Script xử lý luồng lặp tự động test 12 case trên qua 9 build khác nhau và tự động xuất kết quả test pass/fail ra file `test-run-concat-builds.md`.

## 3. Gỡ lỗi (Troubleshooting) Môi trường thực thi Automation
- **Tên công cụ AI:** Antigravity (Gemini 3.1 Pro)
- **Ngày và giờ:** 28/09/2026 18:08 - 18:12
- **Câu lệnh (prompt) của bạn:** (Báo các lỗi gặp phải) "Kiểm tra bug... Error: Could not find Chrome..." và "lệnh bị đứng rồi gửi lệnh tôi chạy"
- **Kết quả do AI tạo ra:** AI đã đọc mã lỗi từ Terminal, phân tích nguyên nhân do Puppeteer thiếu gói trình duyệt Chromium giả lập hoặc bộ nhớ đệm (cache) tải bị gián đoạn. Đề xuất quy trình khắc phục bằng cách chỉnh sửa tham số `channel`, và sau đó cung cấp các câu lệnh `npx puppeteer browsers clear` và `install` để khắc phục triệt để.

## 4. Tổng hợp Báo cáo và Trích xuất Bug cho Github Issues
- **Tên công cụ AI:** Antigravity (Gemini 3.1 Pro)
- **Ngày và giờ:** 28/09/2026 18:32
- **Câu lệnh (prompt) của bạn:** "Dựa vào file đã chạy xong trong test-run và mẫu sau (ảnh). Hãy viết dùm tôi một file .md trong Report/23120127_DuongTrongHoa theo mẫu trong ảnh tổng hợp lại, đặt tên các Bug và đánh dấu để tôi tạo github issues"
- **Kết quả do AI tạo ra:** AI tiến hành đọc file log 108 lượt test vừa chạy, phân tích quy luật lỗi của từng build. Tổng hợp ra file báo cáo `TestRun_Concat_Summary.md` vào thư mục `Report/`. Nội dung gồm: Nhóm thành 7 Github Issues cốt lõi (BUG-CONCAT-001 -> 007) và 1 Bảng Test Run Summary tổng hợp theo đúng template từ hình ảnh đính kèm.
