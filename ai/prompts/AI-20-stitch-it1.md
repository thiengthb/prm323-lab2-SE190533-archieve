# Prompt AI-20 — Stitch IT-1 cho SC-03, SC-09, SC-11 (nguyên văn)

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | Google Stitch, thien thao tác (D-07), sửa trên màn SC-03 vừa tạo ở IT-0 |
| Người soạn | Claude |
| Đầu vào | DES-CRIT-IT0 (`design/stitch-critique-it0.md`), D-22 B (shadcn + Lucide, màu FAP), D-23 B (Inter) |
| Trước / sau | Trước: `assets/stitch/IT-0-*.png` · Sau: `assets/stitch/IT-1-SC-03.png`, `IT-1-SC-09.png`, `IT-1-SC-11.png` |

## Cách chạy

1. Trong project Stitch cũ, chọn từng màn (SC-03, SC-09, SC-11) rồi dán đúng prompt của màn đó vào ô chỉnh sửa. Không tạo project mới, để giữ before/after.
2. Nếu bảng Theme có, đổi font sang **Inter**, giữ màu chính `#4254BA`.
3. Export ảnh từng màn, lưu `assets/stitch/IT-1-SC-03.png`, `IT-1-SC-09.png`, `IT-1-SC-11.png`. Nếu được, Export lại cả 3 màn IT-0 (`IT-0-SC-03.png`...) trước khi sửa, vì ảnh hiện có chỉ cắt từ ảnh chụp màn hình.

## Mỗi dòng trong prompt sửa phát hiện nào

| Dòng | Phát hiện | Quyết định |
|---|---|---|
| 1 | CR-01 | Accept |
| 2 | CR-02 | Accept |
| 3 | CR-03, CR-04, CR-08 | Accept |
| 4 | CR-05 | Modify |
| 5 | CR-06 | Accept |
| 6 | CR-07 | Reject sau khi đo (chữ đã ≥ 14 px); giữ dòng này làm ràng buộc |
| 7 | D-22, D-23, CR-09 | Áp dụng quyết định |

Prompt SC-09 sửa CR-10..CR-14; prompt SC-11 sửa CR-14..CR-17 (xem `design/stitch-critique-it0.md` mục 3).

## Prompt SC-03

```text
Revise this screen. Keep the counter card and the student list structure. Apply these changes:

1. Remove the bottom status bar ("Status / Roll Call Active") and the "Submit Roster" button. The screen has exactly one primary action at the bottom: a full-width 48 dp button "Đóng QR và kiểm tra ngẫu nhiên".
2. Remove the line "Hệ thống ghi nhận địa chỉ mạng nội bộ" and its icon.
3. All text must be Vietnamese. Top app bar: back arrow, title "PRM393 · Slot 1", trailing secondary text "P.205". Remove the separate class info card ("Học kỳ Fall 2024"), the profile avatar and the three-dot menu.
4. Replace the realistic face photos with neutral initial avatars: a 40 dp light grey circle with the first letter of the student's given name in dark grey.
5. Replace the blue link "Đang trực tiếp" with a small green dot and grey text "Đang mở"; it must not look clickable.
6. No text smaller than 14 sp anywhere, including student IDs, scan times and chip labels. Status chips are 32 dp tall.
7. Visual style: shadcn/ui "new-york" style with Lucide outline icons (2 px stroke). White cards with a 1 px border #E3E5EC and 14 dp corner radius, buttons and chips 8 dp radius, a very soft shadow only under cards, generous white space, font Inter. Keep the colors: background #EEEEF1, primary #4254BA with white text, text #212529, secondary text #5C636A; chips "Có mặt" #0D6E45 on #E3F0EA, "Chưa điểm danh" and "Cần xem" #855A00 on #FFF4D2, "Vắng" #B42318 on #FDECEA. Do not introduce any other accent color.
```

## Prompt SC-09 (sửa CR-10..CR-14)

```text
Revise the "Hôm nay" student screen with the same shadcn/ui new-york style, Lucide icons, Inter font and colors as the lecturer screen. Changes:

1. Header title "Hôm nay" (only the first letter capitalized), subtitle "Thứ 4, 14/10". Remove the profile avatar.
2. Remove the door icon from the slot cards.
3. Slot card "PRM393 · Phòng 205" (finished slot): chips "07:00 - 09:15" and "Có mặt", muted line "Quét lúc 07:01 · Đã lên FAP", and a text link "Báo sai điểm danh" at the bottom of this card only.
4. Slot card "MAS291 · Phòng 312" (upcoming slot): chips "09:30 - 11:45" and "Chưa điểm danh", muted text "Ca sắp diễn ra". No report link on this card.
5. Move the primary button "Quét mã điểm danh" (48 dp, QR icon) into a fixed bottom area directly above the navigation bar. Show it disabled with the helper text "Chưa có phiên điểm danh nào đang mở".
6. Bottom navigation: the "Hôm nay" tab is selected, with its icon inside a #ECEEF8 pill and colored #4254BA; "Báo sai" is unselected. Tab labels 14 sp.
```

## Prompt SC-11 (sửa CR-14..CR-17)

```text
Revise the scan result screen with the same shadcn/ui new-york style, Lucide icons, Inter font and colors. Changes:

1. Header: close icon and title "Kết quả quét". Remove the profile avatar.
2. Keep the amber clock icon, heading "Mã đã hết hạn" and the explanation text.
3. In the info card rename "Lần quét" to "Giờ quét".
4. Replace the long anti-cheating sentence with one short muted line: "Giảng viên sẽ kiểm tra ngẫu nhiên."
5. Keep one primary button "Quét lại" (48 dp). Below it, a secondary outline button "Không quét được?" that opens a bottom sheet titled "Báo giảng viên ngay trong giờ" with the text "Giơ tay báo giảng viên để được ghi tay kèm giờ đến." and a button "Đã hiểu". Show the bottom sheet open in a second variant of this screen.
```
