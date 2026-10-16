# Đối chiếu ba bên: Figma · GitHub · slide

Mục đích: số liệu và ảnh trên slide thuyết trình phải giống repo, và repo phải giống file Figma. Chạy quy trình này mỗi lần sửa Figma, sửa tài liệu có số liệu nằm trên slide, hoặc sửa slide.

| Bên | Nguồn |
|---|---|
| Figma | File [9yDa2ylfREmndW1mK1hf7w](https://www.figma.com/design/9yDa2ylfREmndW1mK1hf7w), đọc qua Figma MCP, chỉ đọc |
| GitHub | `assets/figma/` (ảnh), `assets/stitch/`, các file `.md` có số liệu (xem bảng ở cuối) |
| Slide | `presentation/PRM323-Lab2-SE190533-slides.pptx` |

## Các bước

**1. Đọc số liệu Figma.** Dùng `use_figma` (chỉ đọc) đếm: frame trang 03 theo kích thước và số màn SC; frame, điểm bắt đầu và tương tác trang 06 (đếm cả tương tác bị hotspot đè); component set, biến thể và icon trang 05; số biến trong hai collection; text style, effect style; mã hex các biến màu chế độ Light. Ghi vào `process/sync/figma-facts.json`, cập nhật trường `_nguon` với ngày giờ đọc.

**2. Xuất lại ảnh từ Figma** vào một thư mục tạm (không ghi thẳng vào repo). Tên file và node lấy từ `assets/figma/INDEX.md`; mỗi ảnh xuất bằng `node.screenshot()` với đúng tỉ lệ ghi trong INDEX (frame điện thoại tỉ lệ 2, frame web và ảnh ngoài trang 03 theo bảng cuối INDEX).

**3. Chạy script đối chiếu:**

```
python3 tools/sync_check.py --deck presentation/PRM323-Lab2-SE190533-slides.pptx \
    --figma-export <thư mục tạm> --figma-facts process/sync/figma-facts.json \
    --out process/sync/bao-cao-doi-chieu.md
```

Cần `python-pptx`, `Pillow`, `numpy`. Script in ra ba con số `anh_figma_lech`, `anh_slide_lech`, `so_lieu_lech` và viết báo cáo ba mục:

1. Ảnh Figma vừa xuất ↔ `assets/figma`: so từng điểm ảnh, lệch quá 0,5% là LỆCH.
2. Ảnh trên slide ↔ ảnh trong repo: mỗi ảnh chụp màn hình trên slide phải tìm được ảnh gốc trong repo (nguyên tấm, hoặc phần cắt của ảnh trang 04/05). Biểu tượng nhỏ hơn 40 pt được bỏ qua vì vẽ từ Lucide.
3. Số liệu trên slide ↔ repo ↔ Figma: 15 con số (màn, CR, quyết định, frame, component, biến màu, text style, độ nổi, vùng bấm, hai tỷ lệ tương phản, frame, điểm bắt đầu và tương tác prototype).

**4. Sửa chỗ lệch ở bên sai.** Figma là nguồn cho ảnh; tài liệu trong repo là nguồn cho số liệu.
- Ảnh repo cũ hơn Figma: chép ảnh vừa xuất vào `assets/figma/`, ghi chú trong INDEX.
- Ảnh hoặc số trên slide cũ: sửa slide và **lên số phiên bản** (bản cũ giữ nguyên để so sánh, ghi "Thay đổi ở vN" đầu kịch bản).
- Số trong repo khác Figma: kiểm lại Figma, sửa tài liệu, ghi vào `process/decision-log.md` nếu là quyết định mới.

**5. Chạy lại bước 3** cho tới khi cả ba số bằng 0, rồi commit báo cáo cùng thay đổi.

## Số liệu lấy từ đâu trong repo

| Số liệu | File |
|---|---|
| Số màn | `design/screen-spec.md` (tiêu đề `SC-nn`) |
| Phát hiện CR | `ai/ai-design-log.md`, `design/final-ui-review.md` (mã CR lớn nhất) |
| Quyết định | `process/decision-log.md` (mã D-nn khác nhau) |
| Frame 360 × 800 | `assets/figma/INDEX.md` |
| Frame điện thoại, vùng bấm, tương phản | `design/design-decisions.md` |
| Component set, biến màu | `design/DESIGN.md` |
| Frame, điểm bắt đầu, tương tác prototype | `design/prototype-links.md` |

Text style và độ nổi chỉ có ở Figma nên chỉ so Figma với slide.

## Nhật ký đối chiếu

| Ngày | Kết quả lần đầu | Đã sửa |
|---|---|---|
| 16/10/2026 | Ảnh: 81 ảnh xuất lại, 80 giống repo; `page-05-components.png` trong repo cũ hơn Figma (khung Library cao thêm 7 px sau D-34). Slide v7: ảnh CMP-10 trên slide 9 lệch 4,73% điểm ảnh, khung giờ viết "07:00 - 09:15" thay vì "07:00–09:15" như Figma. Số liệu: 15/15 khớp. Figma trang 06 có 190 tương tác thô; 6 tương tác của nút "Đổi" ở hai frame SC-05 · Đã kiểm tra 3/3 bị hotspot đè nên không chạy, còn 184 như `prototype-links.md` | Chép `page-05-components.png`, `page-04-design-system.png` mới vào repo; thêm ba ảnh nguồn của slide 9 (`page-04-mau.png`, `CMP-01-button.png`, `CMP-10-status-chip.png`) vào `assets/figma/`; slide lên v8 với ảnh CMP-10 mới. Chạy lại: 0 ảnh lệch, 0 số lệch |
