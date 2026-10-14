# Prompt AI-18 — Prompt Stitch đầu tiên (nguyên văn)

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | Google Stitch (stitch.withgoogle.com), thien thao tác (D-07) |
| Người soạn prompt | Claude, từ `design/DESIGN.md` v2 (D-20 C, font Roboto đã xác nhận) |
| Màn | SC-03 (P1), SC-09 (P2), SC-11 (P3) |
| Đầu ra | Ảnh lưu ở `assets/stitch/IT-0-*.png`; ghi nhận ở `ai/ai-design-log.md` |
| Điều kiện | DESIGN.md đã commit trước prompt này (commit 2aa48f8 và 29d7fd3) |

## Vì sao chọn ba màn này

- **SC-03 · Phiên điểm danh** là màn mới và khó nhất của FL-1. Nó gánh bộ đếm, chip trạng thái, cờ "Cùng thiết bị" và hành động chính.
- **SC-09 · Hôm nay (sinh viên)** là màn mở đầu của FL-2. Nó kiểm tra chip giờ slot, banner hạn báo sai và thanh điều hướng.
- **SC-11 · Kết quả quét** kiểm tra cách Stitch trình bày lỗi theo mẫu "chuyện gì + vì sao + làm gì tiếp".

Ba màn phủ cả hai persona, đủ để AI critique có chất liệu. Những màn còn lại dựng ở Figma theo cùng token.

## Vì sao viết prompt bằng tiếng Anh

Chữ trên giao diện là tiếng Việt (D-08), được đặt trong ngoặc kép để Stitch chép nguyên văn. Phần mô tả bố cục viết bằng tiếng Anh vì mô hình bám cấu trúc tốt hơn và ít tự dịch chữ giao diện. Đây là lựa chọn kỹ thuật, có thể bị chất vấn khi thuyết trình.

## Cách chạy

1. Tạo project mới, chọn **App** (mobile).
2. Nếu Stitch có bảng Theme, đặt: Light, font **Roboto**, màu chính **#4254BA**, bo góc nhỏ (8). Ghi lại đã đặt gì.
3. Dán **P1**, nguyên văn, không sửa. Chụp kết quả, lưu `assets/stitch/IT-0-SC-03.png`.
4. Trong cùng project, dán **P2** rồi **P3**. Lưu `IT-0-SC-09.png` và `IT-0-SC-11.png`.
5. Ghi lại: chế độ hoặc mô hình Stitch đã dùng, giờ chạy, và mọi lần chạy lại. Nếu phải sửa prompt, đừng sửa ở đây; ghi thành prompt mới (IT-1).
6. Gửi ảnh cho Claude để chạy AI critique (Nielsen + WCAG + persona, ≥ 5 phát hiện).

## P1 · SC-03

```text
Mobile app screen for Android, 360×800 dp, Vietnamese UI text exactly as quoted.

Product: an attendance companion app for lecturers and students at FPT University, Ho Chi Minh City campus. It works alongside the university's FAP web system and does not replace it. Do not use any FPT or FAP logo or name as the app brand.

Screen: "Phiên điểm danh", the lecturer's live QR attendance session. The QR code is projected on the classroom screen by a laptop; this phone screen only monitors the scans.

Layout from top to bottom:
1. Top app bar, 64 dp, white: back arrow, title "PRM393 · Slot 1", trailing secondary text "P.205".
2. Counter card: large number "Đã quét 31/32" (24 sp, medium weight); a thin progress bar in the primary color at 97%; a small chip with a QR icon "QR còn 2:41"; helper text "Đếm người trong phòng rồi xác nhận sĩ số".
3. Section label "Danh sách lớp · 32".
4. Student list in a white card. Each row is at least 64 dp tall: round student photo 40 dp on the left, full name (16 sp), below it the student ID and scan time in muted grey, and a status chip on the right with an icon and a text label. Rows:
   - "Nguyễn Minh Khoa", "SE190412 · 07:01", chip "Có mặt" (green, check-circle icon)
   - "Trần Gia Huy", "SE190433 · Cùng thiết bị", chip "Cần xem" (amber, flag icon)
   - "Lê Bảo Trâm", "SE190527", chip "Chưa điểm danh" (amber, clock icon)
   - "Phạm Quốc Anh", "SE190501", chip "Vắng" (red, x-circle icon)
   - two more "Có mặt" rows
5. Fixed bottom action bar on white: one full-width primary button, 48 dp tall, "Đóng QR và kiểm tra ngẫu nhiên".
No bottom navigation bar on this screen.

Visual style: calm and utilitarian, like a clean Bootstrap 5 admin dashboard. Page background #EEEEF1. Cards white, 12 dp corner radius, 1 px border #E3E5EC, no heavy shadows. Primary color #4254BA with white text. Body text #212529, secondary text #5C636A. Status chips use a soft background with dark text and an icon, 8 dp radius: "Có mặt" #0D6E45 on #E3F0EA; "Chưa điểm danh" and "Cần xem" #855A00 on #FFF4D2; "Vắng" #B42318 on #FDECEA. Font Roboto. Buttons 8 dp radius. No text smaller than 14 sp, all touch targets at least 48 dp. No gradients, no illustrations, no emoji.
```

## P2 · SC-09

```text
Using the same app, colors, font and style, create the student's home screen "Hôm nay".

Layout from top to bottom:
1. Top app bar, 64 dp, white: title "Hôm nay", trailing secondary text "Thứ 4, 14/10".
2. Deadline banner, amber soft background #FFF4D2 with #855A00 text and a clock icon: "Báo sai điểm danh trước 23:59 hôm nay".
3. Slot card 1 (white, 12 dp radius): title "PRM393 · Phòng 205"; a row of two chips: an orange time chip "07:00 - 09:15" (#9A3412 on #FFEFE2, clock icon) and a green status chip "Có mặt" (check-circle icon); below, muted text "Quét lúc 07:01 · Đã lên FAP".
4. Slot card 2: title "MAS291 · Phòng 312"; chips "09:30 - 11:45" (orange time chip) and "Chưa điểm danh" (amber, clock icon); a text link in the primary color "Báo sai điểm danh".
5. Fixed bottom area: one full-width primary button, 48 dp, with a QR icon, "Quét mã điểm danh".
6. Bottom navigation with two tabs: "Hôm nay" (selected: icon inside a pill of #ECEEF8, icon color #4254BA) and "Báo sai".
```

## P3 · SC-11

```text
Using the same app, colors, font and style, create the student's scan result screen "Kết quả quét", showing the error state where the QR code has just expired.

Layout:
1. Top app bar, 64 dp, white: close icon, title "Kết quả quét".
2. Centered status block: a large amber clock icon in a soft amber circle (#FFF4D2), heading "Mã đã hết hạn" (22 sp), body text "Mã đổi sau mỗi 15 giây. Quét lại mã đang hiện trên màn chiếu."
3. Info card (white): rows "Môn" "PRM393 · Slot 1", "Phòng" "205", "Lần quét" "07:01:14".
4. Small muted note at the bottom of the content: "Điểm danh hộ là gian lận học tập. Giảng viên sẽ kiểm tra ngẫu nhiên."
5. Fixed bottom area: full-width primary button "Quét lại", and below it a text button "Không quét được? Báo giảng viên ngay trong giờ".
No bottom navigation on this screen.
```
