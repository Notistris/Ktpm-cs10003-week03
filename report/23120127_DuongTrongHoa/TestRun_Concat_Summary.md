# Báo cáo Tổng hợp Test Run - Chức năng Concatenate
**Thực hiện bởi:** Dương Trọng Hòa (23120127)
**Mô đun:** Calculator (BasicCalculator)
**Phạm vi:** Build 1 đến Build 9

---

## 1. Danh sách Bug tổng hợp (Sử dụng để tạo GitHub Issues)

Dựa trên kết quả tự động hóa và đối chiếu test thủ công qua 9 bản Build, dưới đây là danh sách các lỗi đã được xác nhận (các lỗi báo cáo nhầm do kịch bản test trước đó đã được loại bỏ):

- **BUG-CONCAT-002**: Tính năng Concatenate xử lý sai logic, thực hiện phép cộng toán học (Addition) thay vì nối chuỗi khi đầu vào là các con số.
  - *Phát hiện tại:* Build 2.
- **BUG-CONCAT-003**: Checkbox "Integer" không bị vô hiệu hóa (disabled) khi chọn chức năng Concatenate, gây ra lỗi làm tròn số khi nối các chuỗi thập phân.
  - *Phát hiện tại:* Build 3.
- **BUG-CONCAT-004**: Tính năng Concatenate bỏ qua hoàn toàn Input 1, chỉ in ra giá trị của Input 2 ở kết quả.
  - *Phát hiện tại:* Build 7.
- **BUG-CONCAT-005**: Tính năng Concatenate nối ngược thứ tự các trường nhập liệu thành `Input 2 + Input 1` (Thiết kế đúng phải là `Input 1 + Input 2`).
  - *Phát hiện tại:* Build 8.

*(Lưu ý: Build 1, 4, 5, 6, 9 hoạt động bình thường đối với tính năng Concatenate. Vấn đề "cắt ngắn chuỗi" thực chất là do HTML tag có thuộc tính `maxlength="10"`, đây là giới hạn thiết kế chứ không phải Bug).*

---

## 2. Bảng ghi nhận kết quả Test Case tổng hợp (Cập nhật sau khi kiểm chứng)

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| TC-CALC-CONCAT-001 | Calculator | Hoa | Fail | #BUG-CONCAT-002, #BUG-CONCAT-004, #BUG-CONCAT-005 | Fail ở Build 2, 7, 8. Các Build khác Pass. |
| TC-CALC-CONCAT-002 | Calculator | Hoa | Fail | #BUG-CONCAT-002, #BUG-CONCAT-004, #BUG-CONCAT-005 | Thực hiện phép cộng thay vì nối ở Build 2. Lỗi đảo ngược ở 8 và bỏ qua input ở 7. |
| TC-CALC-CONCAT-003 | Calculator | Hoa | Pass | | Các lỗi giả do cache đã được loại bỏ. |
| TC-CALC-CONCAT-004 | Calculator | Hoa | Pass | | Ký tự đặc biệt hoạt động bình thường ở các build pass. |
| TC-CALC-CONCAT-005 | Calculator | Hoa | Fail | #BUG-CONCAT-002, #BUG-CONCAT-005 | Khoảng trắng bị xử lý sai hoặc trả về chuỗi trống ở Build 2, 8. |
| TC-CALC-CONCAT-006 | Calculator | Hoa | Pass | | |
| TC-CALC-CONCAT-007 | Calculator | Hoa | Pass | | |
| TC-CALC-CONCAT-008 | Calculator | Hoa | Fail | #BUG-CONCAT-002 | Hai input trống trả về 0 thay vì chuỗi rỗng ở Build 2. |
| TC-CALC-CONCAT-009 | Calculator | Hoa | Fail | #BUG-CONCAT-003 | Checkbox Integer không disable ở Build 3. |
| TC-CALC-CONCAT-010 | Calculator | Hoa | Fail | #BUG-CONCAT-003 | Bị làm tròn số thập phân khi bấm checkbox ở Build 3. |
| TC-CALC-CONCAT-011 | Calculator | Hoa | Fail | #BUG-CONCAT-002, #BUG-CONCAT-004, #BUG-CONCAT-005 | Lỗi hiển thị/nối số thập phân ở Build 2, 7, 8. |
| TC-CALC-CONCAT-012 | Calculator | Hoa | Pass | | Test case dài bị cắt ngắn thành 10 ký tự đúng như HTML limit, không tính là bug. |
