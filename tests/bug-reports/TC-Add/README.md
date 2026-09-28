# DANH SÁCH ISSUE BUG REPORT - BASIC CALCULATOR

Bảng tổng hợp tất cả các lỗi (Bug Issues) được phát hiện trong quá trình kiểm thử các phiên bản Build (Build 0 - Build 9) trên ứng dụng [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html).

---

## 1. Phân Loại Hệ Thống Labels

Theo quy chuẩn của dự án:
- **Type (Loại issue):** `type: bug` | `type: enhancement` | `type: test`
- **Severity (Mức độ nghiêm trọng):** `severity: blocker` | `severity: critical` | `severity: major` | `severity: minor` | `severity: trivial`
- **Priority (Mức độ ưu tiên):** `priority: P0` | `priority: P1` | `priority: P2` | `priority: P3`
- **Status (Trạng thái):** `status: new` | `status: triaged` | `status: in progress` | `status: ready to retest` | `status: verified`

---

## 2. Bảng Thống Kê & Phân Loại Các Issue Bug

| Issue ID | Tiêu đề Issue Bug | Build | Type | Severity | Priority | Status | File Chi Tiết |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **BUG-B9-01** | [BUG]: Các phần tử giao diện ngẫu nhiên bị ẩn và vô hiệu hóa | Build 9 | `bug` | `blocker` | `P0` | `new` | [BUG-B9-01.md](./BUG-B9-01.md) |
| **BUG-B2-01** | [BUG]: Phép toán Add bị đảo ngược với Concatenate (ghép chuỗi) | Build 2 | `bug` | `critical` | `P0` | `new` | [BUG-B2-01.md](./BUG-B2-01.md) |
| **BUG-B7-01** | [BUG]: Hệ thống tự ý dùng kết quả tính toán trước đó làm số thứ nhất | Build 7 | `bug` | `critical` | `P0` | `new` | [BUG-B7-01.md](./BUG-B7-01.md) |
| **BUG-B1-01** | [BUG]: Bỏ qua kiểm tra tính hợp lệ của dữ liệu số | Build 1 | `bug` | `major` | `P1` | `new` | [BUG-B1-01.md](./BUG-B1-01.md) |
| **BUG-B3-01** | [BUG]: Tự động ép kiểu chuỗi không hợp lệ thành số 0 khi tính toán | Build 3 | `bug` | `major` | `P1` | `new` | [BUG-B3-01.md](./BUG-B3-01.md) |
| **BUG-B4-01** | [BUG]: Tùy chọn Integers only bị khóa cưỡng bức và ép kết quả số nguyên | Build 4 | `bug` | `major` | `P1` | `new` | [BUG-B4-01.md](./BUG-B4-01.md) |
| **BUG-B8-01** | [BUG]: Đảo ngược vị trí số thứ nhất và số thứ hai trong xử lý và validate | Build 8 | `bug` | `major` | `P1` | `new` | [BUG-B8-01.md](./BUG-B8-01.md) |
| **BUG-B6-01** | [BUG]: Bỏ qua kiểm tra phép chia cho số 0 dẫn đến kết quả Infinity | Build 6 | `bug` | `major` | `P1` | `new` | [BUG-B6-01.md](./BUG-B6-01.md) |
| **BUG-B5-01** | [BUG]: Nút Clear bị vô hiệu hóa khi chuyển sang phiên bản Build 5 | Build 5 | `bug` | `minor` | `P2` | `new` | [BUG-B5-01.md](./BUG-B5-01.md) |

---

## 3. GitHub Issue Template

Template mẫu chính thức cho việc tạo issue trên GitHub được lưu tại:
- [.github/ISSUE_TEMPLATE/bug_report.md](../.github/ISSUE_TEMPLATE/bug_report.md)
