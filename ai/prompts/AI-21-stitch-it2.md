# Prompt AI-21 — Stitch IT-2 (nguyên văn)

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | Google Stitch, thien thao tác (D-07), sửa trên màn IT-1 |
| Người soạn | Claude |
| Đầu vào | DES-CRIT-IT1 (`design/stitch-critique-it1.md`) |
| Trước / sau | Trước: `assets/stitch/IT-1-*.png` · Sau: `assets/stitch/IT-2-*.png` |

## Cách chạy

1. Chọn màn IT-1 tương ứng trên canvas Stitch, dán đúng prompt của màn đó.
2. Chạy xong cả ba, Export **cả project** thành một zip như lần trước. Mình tự tách màn trước và sau.
3. CR-21 không sửa trên Stitch; xử lý ở Figma bằng token.

## Prompt SC-03 (sửa CR-18, CR-19, CR-20)

```text
Revise this lecturer session screen. Keep everything else exactly as it is.

1. In the counter card, the chip next to "Đã quét 31/32" must read "QR còn 2:41" with a timer icon. The QR is still open.
2. Move the live indicator into the counter card, under the progress bar: a small green dot and grey text "Đang mở". Remove it from the list header.
3. The list header is a single line: "Danh sách lớp · 32". It must never wrap or be cut off at 360 dp width.
4. For "Trần Gia Huy", show the reason "Cùng thiết bị" in amber #855A00 with a small phone icon before it, so it stands out from the student ID.
```

## Prompt SC-09 (sửa CR-23)

```text
Revise this student screen. Keep everything else exactly as it is.

1. Change the section label "LỊCH HỌC TRONG NGÀY" to sentence case: "Lịch học hôm nay", 14 sp, medium weight, color #5C636A.
```

## Prompt SC-11 (sửa CR-22)

Chạy trên màn "Kết quả quét" **không có sheet**. Ở màn có sheet, nút "Không quét được?" bị sheet che nên không cần sửa.

```text
Revise this scan result screen. Keep everything else exactly as it is.

1. The outline button "Không quét được?" uses a 1 px border #767D86 and text #212529, so its boundary is clearly visible on white.
```
