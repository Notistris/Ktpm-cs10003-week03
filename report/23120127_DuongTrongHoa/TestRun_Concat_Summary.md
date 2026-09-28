# Báo cáo Tổng hợp Test Run - Chức năng Concatenate
**Thực hiện bởi:** Dương Trọng Hòa (23120127)
**Mô đun:** Calculator (BasicCalculator)
**Phạm vi:** Build 1 đến Build 9

---

## 1. Danh sách Bug tổng hợp (Sử dụng để tạo GitHub Issues)

Dựa trên kết quả tự động hóa qua 9 bản Build, dưới đây là danh sách các lỗi đã được nhận diện, đặt tên và đánh dấu để tiện cho việc tạo Issue:

- **BUG-CONCAT-001**: Tính năng Concatenate từ chối các chuỗi chữ/kí tự đặc biệt (chỉ nhận số), không cập nhật kết quả mới mà hiển thị lại kết quả của phép tính liền trước đó.
  - *Phát hiện tại:* Build 1, Build 4, Build 5, Build 6.
- **BUG-CONCAT-002**: Tính năng Concatenate xử lý sai logic, thực hiện phép cộng toán học (Addition) thay vì nối chuỗi khi đầu vào là các con số.
  - *Phát hiện tại:* Build 2.
- **BUG-CONCAT-003**: Checkbox "Integer" không bị vô hiệu hóa (disabled) khi chọn chức năng Concatenate, gây ra lỗi làm tròn số khi nối các chuỗi thập phân.
  - *Phát hiện tại:* Build 3.
- **BUG-CONCAT-004**: Tính năng Concatenate bỏ qua hoàn toàn Input 1, chỉ in ra giá trị của Input 2 ở kết quả.
  - *Phát hiện tại:* Build 7.
- **BUG-CONCAT-005**: Tính năng Concatenate nối ngược thứ tự các trường nhập liệu thành `Input 2 + Input 1` (Thiết kế đúng phải là `Input 1 + Input 2`).
  - *Phát hiện tại:* Build 8.
- **BUG-CONCAT-006**: Tính năng Concatenate tự động cắt ngắn (trim) các chuỗi dài hoặc các đoạn script HTML/JS (VD: `<script>alert(1)</script>` bị gọt chỉ còn `<script>al`).
  - *Phát hiện tại:* Build 4, Build 5, Build 6, Build 8.
- **BUG-CONCAT-007**: Toàn bộ các Input và Button trên giao diện (UI) bị đóng băng (Not Clickable), thao tác click bị vô hiệu hóa.
  - *Phát hiện tại:* Build 9.

---

## 2. Bảng ghi nhận kết quả Test Case tổng hợp

*Bảng này đối chiếu 12 Test Case gốc với các lỗi tìm thấy theo mẫu Test Run.*

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| TC-CALC-CONCAT-001 | Calculator | Hoa | Fail | #BUG-CONCAT-002, #BUG-CONCAT-004, #BUG-CONCAT-005, #BUG-CONCAT-007 | Fail ở Build 2, 3, 7, 8 (Trả về rỗng, sai thứ tự hoặc chỉ lấy input 2). Blocked ở Build 9. |
| TC-CALC-CONCAT-002 | Calculator | Hoa | Fail | #BUG-CONCAT-002, #BUG-CONCAT-004, #BUG-CONCAT-005, #BUG-CONCAT-007 | Thực hiện phép cộng thay vì nối ở Build 2. Lỗi đảo ngược ở 8 và cắt input ở 7. |
| TC-CALC-CONCAT-003 | Calculator | Hoa | Fail | #BUG-CONCAT-001, #BUG-CONCAT-002, #BUG-CONCAT-007 | Lỗi giữ nguyên kết quả cũ ở Build 1. Các Build khác lỗi tương tự TC-001. |
| TC-CALC-CONCAT-004 | Calculator | Hoa | Fail | #BUG-CONCAT-001, #BUG-CONCAT-002, #BUG-CONCAT-007 | Không nối được ký tự đặc biệt ở tất cả các Build (1 đến 8). Blocked ở Build 9. |
| TC-CALC-CONCAT-005 | Calculator | Hoa | Fail | #BUG-CONCAT-001, #BUG-CONCAT-002, #BUG-CONCAT-005 | Khoảng trắng bị xử lý sai hoặc trả về chuỗi trống ở Build 2, 3, 7, 8. |
| TC-CALC-CONCAT-006 | Calculator | Hoa | Fail | #BUG-CONCAT-001, #BUG-CONCAT-007 | Lỗi khi Input 1 trống ở Build 1, 2, 3, 6. Blocked ở Build 9. |
| TC-CALC-CONCAT-007 | Calculator | Hoa | Fail | #BUG-CONCAT-001, #BUG-CONCAT-007 | Lỗi khi Input 2 trống ở Build 2, 3. Blocked ở Build 9. |
| TC-CALC-CONCAT-008 | Calculator | Hoa | Fail | #BUG-CONCAT-001, #BUG-CONCAT-007 | Hai input trống trả về 0 thay vì chuỗi rỗng (Build 2) hoặc giữ kết quả cũ (Build 7). |
| TC-CALC-CONCAT-009 | Calculator | Hoa | Fail | #BUG-CONCAT-003 | Checkbox Integer không disable ở Build 3. Các build khác Pass. |
| TC-CALC-CONCAT-010 | Calculator | Hoa | Blocked | #BUG-CONCAT-003, #BUG-CONCAT-007 | Bị block ở đa số Build do Checkbox Integer disable theo đúng TK. Fail ở Build 3 do làm tròn số. |
| TC-CALC-CONCAT-011 | Calculator | Hoa | Fail | #BUG-CONCAT-002, #BUG-CONCAT-004, #BUG-CONCAT-005 | Lỗi hiển thị/nối số thập phân ở Build 2, 7, 8. |
| TC-CALC-CONCAT-012 | Calculator | Hoa | Fail | #BUG-CONCAT-006, #BUG-CONCAT-007 | Cắt xén đoạn script (XSS) ở Build 4, 5, 6, 8. Trả về rỗng ở Build 1, 2, 3. |

---

> **Ghi chú thêm:**
> - Các trường hợp `Blocked` đa số rơi vào **Build 9** (Toàn bộ UI bị đóng băng) hoặc **TC-010** do automation cố gắng click vào checkbox đang bị disable (điều này hợp lý về mặt logic nhưng test case automation chưa handle).
> - Cột **Related Bug** đã được tham chiếu thẳng tới danh sách `#BUG-CONCAT-XXX` phía trên. Dựa vào mô tả chi tiết của từng Bug, bạn có thể dễ dàng copy/paste vào Github Issues.
