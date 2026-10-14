# Prompt AI-20 — Stitch IT-1 cho SC-03 (nguyên văn)

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | Google Stitch, thien thao tác (D-07), sửa trên màn SC-03 vừa tạo ở IT-0 |
| Người soạn | Claude |
| Đầu vào | DES-CRIT-IT0 (`design/stitch-critique-it0.md`), D-22 B (shadcn + Lucide, màu FAP), D-23 B (Inter) |
| Trước / sau | Trước: `assets/stitch/IT-0-SC-03.png` · Sau: `assets/stitch/IT-1-SC-03.png` |

## Cách chạy

1. Trong project Stitch cũ, chọn màn SC-03 rồi dán prompt dưới đây vào ô chỉnh sửa. Không tạo project mới, để giữ before/after.
2. Nếu bảng Theme có, đổi font sang **Inter**, giữ màu chính `#4254BA`.
3. Export ảnh, lưu `assets/stitch/IT-1-SC-03.png`.

## Mỗi dòng trong prompt sửa phát hiện nào

| Dòng | Phát hiện | Quyết định |
|---|---|---|
| 1 | CR-01 | Accept |
| 2 | CR-02 | Accept |
| 3 | CR-03, CR-04, CR-08 | Accept |
| 4 | CR-05 | Modify |
| 5 | CR-06 | Accept |
| 6 | CR-07 | Accept (phòng ngừa) |
| 7 | D-22, D-23, CR-09 | Áp dụng quyết định |

## Prompt

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
