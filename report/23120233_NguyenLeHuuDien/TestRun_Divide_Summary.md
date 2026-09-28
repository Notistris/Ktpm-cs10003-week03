# Báo cáo Tổng hợp Test Run - Chức năng Divide
**Thực hiện bởi:** Nguyễn Lê Hữu Điền (23120233)
**Mô đun:** Calculator (BasicCalculator - Operation: Divide)
**Phạm vi:** Build 1 đến Build 9

---

## 1. Danh sách Bug tổng hợp (Sử dụng để tạo GitHub Issues)

Dựa trên kết quả tự động hóa qua 9 bản Build, dưới đây là danh sách các lỗi đã được nhận diện, đặt tên và đánh dấu để tiện cho việc tạo Issue:

- **BUG-DIVIDE-001 (#14)**: Phép chia 2 số nguyên dương ra số thập phân bị ép thành số nguyên hoặc làm tròn sai (VD: `10 / 4` trả về `5`).
  - *Phát hiện tại:* Build 1, Build 2, Build 3, Build 4, Build 5, Build 6.
- **BUG-DIVIDE-002 (#15)**: Phép chia liên quan đến số âm bị mất dấu âm hoặc trả về chuỗi rỗng (VD: `-15 / 3` trả về `5`).
  - *Phát hiện tại:* Build 3, Build 4.
- **BUG-DIVIDE-003 (#16)**: Hệ thống không hiển thị thông báo lỗi validation khi để trống input hoặc nhập chuỗi ký tự chữ (Tự ép về `0` hoặc báo sai thành lỗi `Divide by zero error!`).
  - *Phát hiện tại:* Build 1, Build 2, Build 3, Build 4, Build 5, Build 6, Build 7, Build 8.
- **BUG-DIVIDE-004 (#17)**: Phép chia bị đảo ngược thứ tự toán hạng (Lấy `Second number` chia cho `First number`, VD: `10 / 2` ra `0.2`).
  - *Phát hiện tại:* Build 8.
- **BUG-DIVIDE-005 (#18)**: Phép chia luôn trả về giá trị `0` cho tất cả mọi cặp số đầu vào.
  - *Phát hiện tại:* Build 7.
- **BUG-DIVIDE-006 (#19)**: Checkbox "Integers Only" bị disable (bị mờ) hoặc không có tác dụng khi chọn phép chia Divide.
  - *Phát hiện tại:* Build 4, Build 5.
- **BUG-DIVIDE-007 (#20)**: Phép chia 2 số thập phân `5.5 / 2` trả về kết quả âm sai lệch (`-5` thay vì `2.75`).
  - *Phát hiện tại:* Build 1, Build 2, Build 6.
- **BUG-DIVIDE-008 (#21)**: Phép chia cho 0 (`10 / 0`) không hiển thị thông báo lỗi `Divide by zero error!` (Trả về `0` hoặc `Infinity`).
  - *Phát hiện tại:* Build 1, Build 2, Build 3, Build 5, Build 6.

---

## 2. Bảng ghi nhận kết quả Test Case tổng hợp

*Bảng này đối chiếu 12 Test Case gốc với các lỗi tìm thấy theo mẫu Test Run.*

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| --- | --- | --- | --- | --- | --- |
| TC-CALC-DIVIDE-001 | Calculator | Điền | Fail | #17, #18 | Fail ở Build 7 (ra 0) và Build 8 (ra 0.2). Blocked ở Build 9. Các build khác Pass. |
| TC-CALC-DIVIDE-002 | Calculator | Điền | Fail | #14, #17, #18 | Fail ở Build 1, 2, 3, 4, 5, 6 (ép về số nguyên 5/2), Build 7 (ra 0), Build 8 (ra 0.4). |
| TC-CALC-DIVIDE-003 | Calculator | Điền | Fail | #14, #17 | Fail ở Build 4 (ra 2) và Build 8 (ra rỗng). Blocked ở Build 9. |
| TC-CALC-DIVIDE-004 | Calculator | Điền | Fail | #21 | Không xuất thông báo lỗi 'Divide by zero error!' ở Build 1, 2, 3, 5 (ra 0) và Build 6 (ra Infinity). |
| TC-CALC-DIVIDE-005 | Calculator | Điền | Fail | #15, #17, #18 | Fail ở Build 4, 7 (ra rỗng/0) và Build 8 (ra rỗng). |
| TC-CALC-DIVIDE-006 | Calculator | Điền | Fail | #15, #17, #18 | Fail ở Build 3 (ra 5 mất dấu âm), Build 4, 7, 8 (ra rỗng/0). |
| TC-CALC-DIVIDE-007 | Calculator | Điền | Fail | #14, #17, #18, #20 | Fail ở Build 1, 2, 6 (ra -5 sai lệch), Build 4, 7, 8 (ra rỗng/0). |
| TC-CALC-DIVIDE-008 | Calculator | Điền | Fail | #16 | Để trống Input 1 không báo lỗi validation 'Number 1 is not a number' trên cả 8 Build. |
| TC-CALC-DIVIDE-009 | Calculator | Điền | Fail | #16 | Để trống Input 2 không báo lỗi validation 'Number 2 is not a number' trên cả 8 Build. |
| TC-CALC-DIVIDE-010 | Calculator | Điền | Fail | #18, #19 | Fail ở Build 4 (checkbox disable), Build 5, 7, 8 (ra rỗng/0). |
| TC-CALC-DIVIDE-011 | Calculator | Điền | Fail | #16 | Nhập chuỗi 'abc' không báo lỗi 'Number 1 is not a number' ở các Build 1, 2, 4, 5, 7, 8. |
| TC-CALC-DIVIDE-012 | Calculator | Điền | Fail | #14, #17, #18 | Fail ở Build 4, 5, 7, 8 (ra rỗng hoặc 0). |

---

> **Ghi chú thêm:**
> - Các trường hợp `Blocked` rơi vào **Build 9** (Do nút GUI Calculate bị thiếu/không tồn tại trên giao diện), theo chỉ dẫn không đưa Build 9 vào danh sách Bug.
> - Cột **Related Bug** đã được tham chiếu trực tiếp đến mã issue `#BUG-DIVIDE-XXX`.
