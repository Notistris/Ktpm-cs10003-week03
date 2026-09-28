# BÁO CÁO KIỂM TOÁN SỬ DỤNG CÔNG CỤ AI (AI AUDIT REPORT)

- **Môn học:** Kiểm thử phần mềm (CS10003)
- **Họ và tên sinh viên:** Trần Trọng Trí
- **Mã số sinh viên:** 20120221
- **Email:** tttri1303@gmail.com
- **Repository:** [Ktpm-cs10003-week03](https://github.com/Notistris/Ktpm-cs10003-week03)
- **Module kiểm thử:** Chức năng Phép tính Cộng (TC-Add) - Basic Calculator

---

## 1. Tuyên Bố Sử Dụng AI (Declaration of AI Usage)

> **"Tôi sử dụng các công cụ AI cho những tác vụ sau:"**
> 
> 1. **Tự động hóa kịch bản kiểm thử (Test Automation):** Chuyển đổi và cấu hình kịch bản Playwright Test để thực thi độc lập 20 test cases trên 10 phiên bản Build (Build 0 đến Build 9) của ứng dụng Basic Calculator.
> 2. **Chuẩn hóa và kết xuất báo cáo kiểm thử (Test Run Reporting):** Thiết lập định dạng bảng báo cáo Markdown theo đúng template chuẩn (`Test Case ID | Module | Tester | Result | Related Bug | Note`), phân loại trạng thái `Pass`, `Fail`, `Blocked`, `Not Run` và trích xuất chi tiết lỗi.
> 3. **Phân tích lỗi và lập báo cáo Bug (Bug Reporting & GitHub Issues):** Phân tích mã nguồn và log lỗi từ Playwright để xác định nguyên nhân gốc (Root Cause), phân loại nhãn (`type`, `severity`, `priority`, `status`) và tạo các issue bug theo chuẩn GitHub Issue Template.
> 4. **Tích hợp API và xử lý lỗi môi trường (Troubleshooting & Scripting):** Viết script tự động đồng bộ issue lên GitHub REST API, điều chỉnh đường dẫn tương đối giữa các thư mục và sửa lỗi thực thi shell.

---

## 2. Nhật Ký Chi Tiết Các Lần Tương Tác Với AI

---

### Lần tương tác 1: Tự động hóa thực thi kiểm thử cho 10 Builds và xuất báo cáo Markdown
- **Tên công cụ AI:** Google Antigravity (Gemini 3.8 Flash)
- **Ngày và giờ:** 2026-09-28 19:34:08 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  chỉnh lại code execute testcase cho tất cả build rồi ghi kết quả vào thư mục test-runs/TC-Add bằng file md (từng build là một file)
  ```
- **Kết quả do AI tạo ra:**
  - Viết mới bộ điều phối kiểm thử [run-tests.js](file:///d:/Projects/Code/school/ktpm/Ktpm-cs10003-week03/tests/test-scripts/TC-Add/scripts/run-tests.js) sử dụng Playwright Test.
  - Tự động thực thi lần lượt 10 phiên bản build (Build 0 - Prototype đến Build 9).
  - Tự động sinh ra 10 file báo cáo Markdown độc lập: `build-0.md` đến `build-9.md` trong thư mục `tests/test-runs/TC-Add/` cùng với file tổng hợp `README.md`.

---

### Lần tương tác 2: Chuyển đổi từ file gộp sang thực thi từng test case độc lập
- **Tên công cụ AI:** Google Antigravity (Gemini 3.8 Flash)
- **Ngày và giờ:** 2026-09-28 20:27:50 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  bỏ file add_all.spec.js, thay đổi code thành chạy từng file spec.js testcase
  ```
- **Kết quả do AI tạo ra:**
  - Xóa bỏ hoàn toàn tệp `add_all.spec.js`.
  - Tách và chuẩn hóa toàn bộ 20 test cases thành 20 tệp spec riêng biệt: `TC_ADD_01.spec.js` đến `TC_ADD_20.spec.js` trong thư mục `tests/test-scripts/TC-Add/specs/`.
  - Cập nhật [playwright.config.js](file:///d:/Projects/Code/school/ktpm/Ktpm-cs10003-week03/tests/test-scripts/TC-Add/scripts/playwright.config.js) với `testDir: '../specs'` và `testMatch: '**/*.spec.js'`.
  - Bổ sung tùy chọn `{ waitUntil: 'domcontentloaded' }` tại tất cả các test case để tối ưu hóa thời gian chờ nạp trang và loại bỏ hiện tượng timeout ngẫu nhiên do mạng.

---

### Lần tương tác 3: Định dạng báo cáo Test Run theo template quy chuẩn
- **Tên công cụ AI:** Google Antigravity (Gemini 3.8 Flash)
- **Ngày và giờ:** 2026-09-28 21:21:38 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  test run report bạn hãy làm theo template này:
  test case id | module | tester | result | related bug | note
  trạng thái test run: pass | fail | blocked | not run
  Khi Result = Fail hoặc Blocked → phải có Related Bug hoặc lý do rõ ràng.
  ```
- **Kết quả do AI tạo ra:**
  - Cập nhật logic đánh giá kết quả trong hàm `evaluateTestRun()` của `run-tests.js`:
    - Trạng thái hợp lệ: `Pass`, `Fail`, `Blocked`, `Not Run`.
    - Khi `Fail`: Tự động trích xuất giá trị kỳ vọng (Expected) so với giá trị nhận được (Received) từ Playwright assertion, gán mã Bug ID tương ứng (ví dụ: `BUG-B2-01`, `BUG-B4-01`).
    - Khi `Blocked`: Tự động phát hiện khi phần tử DOM bị `hidden` hoặc `disabled` (đặc biệt đối với Build 9), gán mã `BUG-B9-01` kèm lý do chi tiết.
  - Tái tạo đồng loạt toàn bộ 10 file báo cáo `build-0.md` đến `build-9.md` theo cấu trúc cột chuẩn xác:
    `| Test Case ID | Module | Tester | Result | Related Bug | Note |`
  - Cập nhật ma trận kết quả tổng hợp trong [tests/test-runs/TC-Add/README.md](file:///d:/Projects/Code/school/ktpm/Ktpm-cs10003-week03/tests/test-runs/TC-Add/README.md).

---

### Lần tương tác 4: Thiết lập Issue Template và tạo các báo cáo Bug theo phân loại nhãn
- **Tên công cụ AI:** Google Antigravity (Gemini 3.8 Flash)
- **Ngày và giờ:** 2026-09-28 22:13:17 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  hãy tạo issue trên github cho các bug theo template: ---
  name: Bug Report
  title: "[BUG]: "
  labels: ["type: bug", "status: new"]
  ---

  ## Mô tả lỗi
  ## Môi trường
  ## Steps to reproduce
  1.
  2.
  3.
  ## Actual result
  ## Expected result
  ## Evidence

  phân các issue theo labels: 
  type: bug | enhancement | test
  severity: blocker | critical | major | minor | trivial
  priority: P0 | P1 | P2 | P3 
  status: new | triaged | in progress | ready to retest | verified
  ```
- **Kết quả do AI tạo ra:**
  - Tạo tệp cấu hình mẫu GitHub Issue Template tại `.github/ISSUE_TEMPLATE/bug_report.md`.
  - Phân tích mã nguồn `BasicCalculator.html` và log thực thi để tạo 9 file báo cáo lỗi chi tiết:
    1. `BUG-B9-01`: Các phần tử giao diện bị ẩn / disabled (Blocker / P0 / status: new)
    2. `BUG-B2-01`: Đảo ngược phép toán Add và Concatenate (Critical / P0 / status: new)
    3. `BUG-B7-01`: Dùng kết quả trước làm số thứ nhất (Critical / P0 / status: new)
    4. `BUG-B1-01`: Bỏ qua kiểm tra tính hợp lệ dữ liệu số (Major / P1 / status: new)
    5. `BUG-B3-01`: Ép kiểu chuỗi chữ thành số 0 (Major / P1 / status: new)
    6. `BUG-B4-01`: Khóa cưỡng bức tùy chọn Integers only (Major / P1 / status: new)
    7. `BUG-B8-01`: Đảo ngược vị trí số thứ nhất và thứ hai (Major / P1 / status: new)
    8. `BUG-B6-01`: Bỏ qua kiểm tra phép chia cho số 0 (Major / P1 / status: new)
    9. `BUG-B5-01`: Nút Clear bị vô hiệu hóa khi chọn build (Minor / P2 / status: new)
  - Viết script `create-github-issues.js` tự động phân tích cú pháp YAML Frontmatter và gửi issue lên GitHub qua REST API.

---

### Lần tương tác 5: Rà soát và cập nhật đường dẫn thư mục bug-reports mới
- **Tên công cụ AI:** Google Antigravity (Gemini 3.8 Flash)
- **Ngày và giờ:** 2026-09-28 22:34:52 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  tôi mới vừa thay đổi path của phần bug-reports, bạn hãy check lại
  ```
- **Kết quả do AI tạo ra:**
  - Xác nhận vị trí lưu trữ mới: [tests/bug-reports/TC-Add/](file:///d:/Projects/Code/school/ktpm/Ktpm-cs10003-week03/tests/bug-reports/TC-Add) và [tests/bug-reports/.github/ISSUE_TEMPLATE/](file:///d:/Projects/Code/school/ktpm/Ktpm-cs10003-week03/tests/bug-reports/.github/ISSUE_TEMPLATE).
  - Cập nhật lại toàn bộ liên kết tương đối trong 9 file `BUG-*.md` trỏ về báo cáo test run chính xác: `../../test-runs/TC-Add/build-X.md`.
  - Cập nhật hàm `resolveIssuesDir()` trong script [create-github-issues.js](file:///d:/Projects/Code/school/ktpm/Ktpm-cs10003-week03/tests/test-scripts/TC-Add/scripts/create-github-issues.js) để tự động định vị đúng thư mục `tests/bug-reports/TC-Add/`.
  - Hướng dẫn cú pháp chạy lệnh Node.js trên Git Bash bằng dấu gạch xuôi `/` thay vì gạch ngược `\` để khắc phục lỗi `MODULE_NOT_FOUND`.

---

### Lần tương tác 6: Khởi tạo báo cáo kiểm toán AI (AI Usage Audit Report)
- **Tên công cụ AI:** Google Antigravity (Gemini 3.8 Flash)
- **Ngày và giờ:** 2026-09-28 23:02:17 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
  ```text
  hãy chạy cho tôi tạo ra file này trong thư mục report/20120221/
  ai-audit-report-20120221.md
  tuyên bố: "Tôi sử dụng các công cụ AI cho những tác vụ sau," và cung cấp các thông tin sau cho mỗi lần tương tác:
  Tên công cụ AI
  Ngày và giờ
  Câu lệnh (prompt) của bạn
  Kết quả do AI tạo ra
  ```
- **Kết quả do AI tạo ra:**
  - Tạo tệp báo cáo hoàn chỉnh [report/20120221/ai-audit-report-20120221.md](file:///d:/Projects/Code/school/ktpm/Ktpm-cs10003-week03/report/20120221/ai-audit-report-20120221.md) ghi nhận đầy đủ, trung thực toàn bộ lịch sử tương tác, câu lệnh thực thi và sản phẩm tạo thành.

---

## 3. Tổng Kết và Cam Kết Tính Trung Thực Học Thuật

- **Đánh giá hiệu quả:** Việc ứng dụng trợ lý AI (Google Antigravity) đã hỗ trợ đáng kể trong việc chuẩn hóa cấu trúc dự án kiểm thử phần mềm, tăng tốc độ viết kịch bản tự động hóa Playwright, và xuất báo cáo lỗi chi tiết, chuyên nghiệp theo chuẩn quốc tế.
- **Cam kết:** Toàn bộ nội dung kịch bản kiểm thử, tiêu chí đánh giá, kết quả thực thi và phân loại lỗi trong dự án này đều đã được người học rà soát, kiểm tra thực tế trên ứng dụng web mục tiêu và chịu hoàn toàn trách nhiệm về tính chính xác học thuật.

*Người lập báo cáo:* **Trần Trọng Trí (MSSV: 20120221)**  
*Ngày lập:* 28/09/2026
