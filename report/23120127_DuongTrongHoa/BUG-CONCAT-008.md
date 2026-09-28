---
name: Bug Report
title: "[BUG]: Tính năng Concatenate giữ kết quả cũ khi gặp kí tự đặc biệt và cắt xén mã HTML"
labels: ["type: bug", "status: new"]
---

## Mô tả lỗi
Ở các bản Build 4, 5, 6, tính năng Concatenate có 2 vấn đề:
1. Từ chối các kí tự đặc biệt thuần túy (VD: `!@#$%^`) và giữ nguyên kết quả của phép tính cũ.
2. Tự động cắt xén (trim) các đoạn mã HTML/JS (VD: `<script>alert(1)</script>Text` bị cắt thành `<script>alText`). 

## Môi trường
- Trình duyệt: Chrome
- Hệ điều hành: Windows
- Basic Calculator - **Build 4, Build 5, Build 6**

## Steps to reproduce
**Trường hợp 1:**
1. Mở trang Basic Calculator, thực hiện phép tính bất kì để mồi kết quả (VD ra "123").
2. Nhập các kí tự đặc biệt vào Input 1 (`!@#$%^`) và Input 2 (`&*()_+`). Bấm Calculate.

**Trường hợp 2:**
1. Nhập mã HTML/JS dài vào Input 1 (VD: `<script>alert(1)</script>`) và chuỗi `Text` vào Input 2. Bấm Calculate.

## Actual result
- TH1: Kết quả không đổi, vẫn hiện "123".
- TH2: Kết quả bị cắt xén, hiển thị thành `<script>alText` (tùy build).

## Expected result
- TH1: Phải hiển thị nối 2 kí tự đặc biệt lại (`!@#$%^&*()_+`).
- TH2: Phải nối đủ chuỗi (`<script>alert(1)</script>Text`) và có thể encode chống XSS chứ không được tùy tiện cắt mất Data của người dùng.

## Evidence
- Test Case bị Fail: TC-CALC-CONCAT-004, TC-CALC-CONCAT-012 (tại Build 4, 5, 6).
