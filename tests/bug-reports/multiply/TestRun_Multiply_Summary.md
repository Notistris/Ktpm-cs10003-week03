# Báo cáo Tổng hợp Test Run - Chức năng Multiply

**Mô đun:** Calculator (BasicCalculator)  
**Phạm vi:** Build 1 đến Build 9  
**Công cụ tự động hóa:** Playwright Script (`tests/test-scripts/multiply.test.js`)

---

## 1. Danh sách Bug tổng hợp (Sử dụng để tạo GitHub Issues)

Dựa trên kết quả thực thi tự động Playwright qua 9 bản Build, dưới đây là danh sách các lỗi đã được xác nhận của chức năng Multiply:

- **BUG-MULT-001**: Phép tính Multiply không kiểm tra dữ liệu hợp lệ khi nhập chuỗi không phải số (trả về `NaN` thay vì hiển thị thông báo lỗi "Number 1/2 is not a number").
  - *Phát hiện tại:* Build 1.
- **BUG-MULT-002**: Checkbox "Integers only" bị khóa ở trạng thái bật (disabled & checked), tự động làm tròn số thập phân khi thực hiện phép nhân.
  - *Phát hiện tại:* Build 4.
- **BUG-MULT-003**: Phép tính Multiply sử dụng giá trị biến `answer` cũ làm số bị nhân (First Number), dẫn đến kết quả nhân luôn trả về 0.
  - *Phát hiện tại:* Build 7.
- **BUG-MULT-004**: Phép tính Multiply hoán đổi vị trí nhập liệu của First Number và Second Number (dẫn đến thông báo lỗi bị tráo vị trí).
  - *Phát hiện tại:* Build 8.
- **BUG-MULT-005**: Giao diện bị lỗi, ô nhập Second Number (`#number2Field`) và nút Calculate (`#calculateButton`) bị ẩn và vô hiệu hóa.
  - *Phát hiện tại:* Build 9.

*(Lưu ý: Build 2, Build 3, Build 5, Build 6 hoạt động bình thường đối với phép tính Multiply).*

---

## 2. Bảng ghi nhận kết quả Test Case tổng hợp

| Test Case ID | Module | Tester | Result | Related Bug | Ghi chú |
| :--- | :--- | :--- | :---: | :--- | :--- |
| TC-Multiply-000 | Multiply | Automated Script | Fail | BUG-MULT-003, BUG-MULT-005 | Fail tại Build 7 (kết quả = 0) và Build 9 (nút Calculate bị ẩn). |
| TC-Multiply-001 | Multiply | Automated Script | Fail | BUG-MULT-003, BUG-MULT-005 | Fail tại Build 7 (kết quả = 0) và Build 9. |
| TC-Multiply-002 | Multiply | Automated Script | Fail | BUG-MULT-003, BUG-MULT-005 | Fail tại Build 7 (kết quả = 0) và Build 9. |
| TC-Multiply-003 | Multiply | Automated Script | Fail | BUG-MULT-005 | Fail tại Build 9 do bị ẩn nút Calculate. |
| TC-Multiply-004 | Multiply | Automated Script | Fail | BUG-MULT-002, BUG-MULT-003, BUG-MULT-005 | Fail tại Build 4 (bị làm tròn), Build 7 và Build 9. |
| TC-Multiply-005 | Multiply | Automated Script | Fail | BUG-MULT-003, BUG-MULT-005 | Fail tại Build 7 và Build 9. |
| TC-Multiply-006 | Multiply | Automated Script | Fail | BUG-MULT-001, BUG-MULT-003, BUG-MULT-004, BUG-MULT-005 | Fail tại Build 1 (NaN), Build 7 (0), Build 8 (báo sai lỗi Number 2), Build 9. |
| TC-Multiply-007 | Multiply | Automated Script | Fail | BUG-MULT-001, BUG-MULT-004, BUG-MULT-005 | Fail tại Build 1 (NaN), Build 8 (báo sai lỗi Number 1), Build 9. |
| TC-Multiply-008 | Multiply | Automated Script | Fail | BUG-MULT-003, BUG-MULT-005 | Fail tại Build 7 và Build 9. |
| TC-Multiply-009 | Multiply | Automated Script | Fail | BUG-MULT-005 | Fail tại Build 9 do không thể thực hiện phép tính. |
