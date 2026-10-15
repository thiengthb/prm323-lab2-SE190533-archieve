# Prompt AI-28 — Stitch: bổ sung màn FL-1 (IT-0b) và vòng IT-3 trên Stitch (nguyên văn)

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | Google Stitch, thien thao tác (D-07), trong **project Stitch cũ** (cùng project với IT-0..IT-2) |
| Người soạn | Claude, 15/10/2026 |
| Vì sao có prompt này | Bản chấm độc lập (AI-27) chỉ ra hai chỗ mất điểm: Stitch mới sinh SC-03, SC-09, SC-11 nên chưa phủ luồng chính FL-1 (N-2), và mới có 2 vòng sửa trên Stitch, vòng 3 làm trên Figma (N-3). thien chọn sửa cả 5 đợt (15/10) |
| Đầu vào | `design/screen-spec.md` (SC-02, SC-04, SC-05, SC-06), `design/stitch-critique-it2.md` (CR-24, CR-25), D-27, D-28 |
| Đầu ra | `assets/stitch/IT-0b-SC-02.png`, `IT-0b-SC-04.png`, `IT-0b-SC-05.png`, `IT-0b-SC-06.png`; `assets/stitch/IT-3-SC-03.png`; mã HTML trong `assets/stitch/code/` |

## Nói trước cho trung thực

Phần A sinh bốn màn **sau khi** Figma đã có. Nội dung lấy từ screen-spec, nên Stitch không còn "nghĩ ra" luồng mà chỉ dựng giao diện từ đặc tả. Mục đích là (1) cho luồng chính FL-1 có bản AI sinh để so với bản Figma, và (2) có chất liệu cho một vòng critique thật. Khi thuyết trình nói đúng như vậy, không trình bày như thể Stitch chạy trước Figma.

## Cách chạy

1. Mở project Stitch cũ. Không tạo project mới, để giữ chung theme (Inter, màu chính `#4254BA`, phong cách shadcn từ IT-1).
2. **Phần A:** dán lần lượt A1, A2, A3, A4, mỗi prompt tạo một màn mới. Không sửa prompt. Nếu phải chạy lại, ghi lại số lần.
3. **Phần B:** chọn màn SC-03 bản IT-2 trên canvas, dán B1 vào ô chỉnh sửa.
4. Export **cả project** thành một zip như các lần trước, gửi cho Claude. Claude tự tách ảnh và mã HTML, đặt tên theo bảng đầu ra.
5. Ghi lại giờ chạy và chế độ hoặc mô hình Stitch đã dùng.

## Phần A · IT-0b · bốn màn còn lại của FL-1

### A1 · SC-02

```text
Using the same app, colors, font and style, create the lecturer's home screen "Hôm nay" at 06:58, before the first class.

Layout from top to bottom:
1. Top app bar, white: title "Hôm nay", trailing secondary text "Thứ 4, 14/10 · 06:58".
2. Section label "Sắp tới · 3" (14 sp, medium, #5C636A).
3. Slot card (white, 12 dp radius, 1 px border #E3E5EC): title "PRM393 · Slot 1 · P.205"; a neutral time chip "07:00–09:15" with a clock icon and an amber chip "Chưa điểm danh"; muted text "32 sinh viên · QR chiếu từ laptop của thầy". At the bottom of the card, two buttons side by side, 48 dp tall: outline "Mở từ xa" and primary "Mở điểm danh".
4. Slot card: "SWT301 · Slot 2 · P.310", neutral time chip "09:30–11:45", muted text "32 sinh viên". No buttons.
5. Slot card: "PRM393 · Slot 4 · P.205", neutral time chip "15:20–17:35", muted text "30 sinh viên". No buttons.
6. Bottom navigation with two tabs: "Hôm nay" (selected) and "Báo sai".
Only the next class has buttons. No text smaller than 14 sp, all touch targets at least 48 dp.
```

### A2 · SC-04

```text
Using the same app, colors, font and style, create the lecturer screen "Đối chiếu sĩ số". The QR has closed; the lecturer counts the people in the room and compares with the number of scans. The lecturer only counts heads and does not call names.

Layout from top to bottom:
1. Top app bar, white: back arrow, title "Đối chiếu sĩ số", trailing secondary text "PRM393 · Slot 1".
2. Instruction text: "Đếm số người đang ngồi trong phòng, kể cả người chưa quét. Không cần gọi tên."
3. A stepper card labeled "Số người trong phòng" with a large number "31" between a "−" button and a "+" button, each at least 48 dp.
4. Three numbers in one row, each with a label under it: "30" "Đã quét", "31" "Trong phòng", "−1" "Chênh". All three numbers use the normal text color.
5. An amber info banner (#FFF4D2 background, #855A00 text, info icon): "Có 2 người chưa quét đang ngồi trong phòng, nên lẽ ra chỉ có 29 lượt quét. Dư 1 lượt quét không có người: kiểm tra ngẫu nhiên để tìm."
6. Section label "Chưa quét · 2" and a white list card with two rows, each at least 64 dp: initials avatar, name, a second line in muted grey, and an amber chip "Trong phòng" on the right:
   - "Phạm Thu Hà", "SE190477 · có trong phòng, mất 4G"
   - "Võ Minh Tâm", "SE190655 · có trong phòng, hết pin"
7. Fixed bottom area: one full-width primary button, 48 dp, "Kiểm tra ngẫu nhiên".
No bottom navigation on this screen. Red is not used anywhere on this screen.
```

### A3 · SC-05

```text
Using the same app, colors, font and style, create the lecturer screen "Kiểm tra ngẫu nhiên". The app picked 3 students at random among those who scanned. The lecturer calls each name, looks at the face and compares it with the student's photo on file.

Layout from top to bottom:
1. Top app bar, white: back arrow, title "Kiểm tra ngẫu nhiên".
2. Instruction text: "Gọi tên từng người, nhìn mặt và so với ảnh FAP. Ba người được chọn ngẫu nhiên trong số đã quét."
3. Progress text "Đã kiểm tra 1/3".
4. Three white cards, one per student. Each card: a square photo placeholder 56 dp with a camera icon and the label "Ảnh FAP", the full name, the student ID and the scan time. Under it, two outline buttons side by side, each at least 48 dp: "Đúng người" with a check icon and "Không có mặt" with an x icon.
   - Card 1: "Lê Ngọc Anh", "SE190233 · quét 07:02", already marked: a green chip "Đúng người" replaces the two buttons.
   - Card 2: "Hoàng Mai Linh", "SE190519 · quét 07:02", two buttons.
   - Card 3: "Đỗ Quốc Bảo", "SE190344 · quét 07:02", two buttons.
5. Fixed bottom area: a disabled full-width button "Xem lại và xác nhận" and above it muted text "Kiểm tra đủ 3 người để tiếp tục".
No bottom navigation on this screen. Use initials or a placeholder, never a photo of a real person.
```

### A4 · SC-06

```text
Using the same app, colors, font and style, create the lecturer screen "Xem lại và xác nhận", the last check before the attendance is sent to FAP.

Layout from top to bottom:
1. Top app bar, white: back arrow, title "Xem lại và xác nhận".
2. Summary card with three numbers in a row, each with a label: "31" "Có mặt" (green), "1" "Vắng" (red), "0" "Cần xử lý".
3. Two check lines, each with a green check-circle icon: "Đã đối chiếu sĩ số: 31 người lúc 07:06" and "Đã kiểm tra ngẫu nhiên 3/3".
4. Section label "Ghi tay · 2" and a white list card with two rows, each at least 64 dp: initials avatar, name, second line in muted grey, and a green chip "Có mặt" with a check icon on the right:
   - "Phạm Thu Hà", "SE190477 · ghi tay 07:06 · mất 4G"
   - "Võ Minh Tâm", "SE190655 · ghi tay 07:08 · hết pin"
5. A full-width outline button with a pencil icon: "Ghi tay thêm sinh viên".
6. Section label "Vắng · 1" and one row: "Hoàng Mai Linh", "SE190519 · quét 07:02 · không có mặt khi kiểm tra", red chip "Vắng" with an x-circle icon.
7. Fixed bottom area: one full-width primary button, 48 dp, with a send icon: "Xác nhận và gửi lên FAP".
No bottom navigation on this screen. Long text wraps to a new line; never cut off a name, an ID or a reason.
```

## Phần B · IT-3 trên Stitch · màn SC-03

Vấn đề có tên: Stitch chưa có trạng thái "QR đã đóng" (CR-25), thanh tiến độ đen trông như đã đầy (CR-31, D-27 chọn xanh lá), và lý do gắn cờ bị cắt ở 360 dp (CR-24). Ba điểm này đã sửa trên Figma; vòng này cho Stitch tự sửa để so sánh và để có vòng thứ ba trên chính công cụ AI.

### B1 · SC-03 (sửa CR-24, CR-25, CR-31)

```text
Revise this lecturer session screen to show the state right after the QR has closed. Keep the layout, fonts and colors otherwise exactly as they are.

1. In the counter card, the time chip changes to a neutral grey chip with a lock icon: "QR đã đóng". Under the progress bar, replace the green dot and "Đang mở" with grey text "Đã đóng lúc 07:05". The chip, the dot and the text must change together so the state never relies on color alone.
2. The counter reads "Đã quét 30/32". The progress bar fill is green #0D6E45 on a light grey track #E3E5EC, so 30 of 32 is visibly not full.
3. For "Trần Gia Huy", the reason "Cùng thiết bị với một lượt quét khác lúc 07:02" sits on its own line under the student ID and wraps to a second line if needed. Never cut it off with an ellipsis at 360 dp.
4. The primary button at the bottom now reads "Đối chiếu sĩ số".
```

## Sau khi chạy

Claude chạy critique như các vòng trước (Nielsen, WCAG, persona, ít nhất 5 phát hiện), ghi vào `design/stitch-critique-it3.md`, đặt mã từ CR-49. Mỗi phát hiện có quyết định Accept, Modify hoặc Reject và lý do. thien duyệt trên thẻ quyết định. Dòng AI-28 trong `ai/ai-design-log.md` ghi kết quả.
