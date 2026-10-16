# Báo cáo đối chiếu Figma · GitHub · slide

Slide: `presentation/PRM323-Lab2-SE190533-slides.pptx` · Figma: Đọc từ file Figma 9yDa2ylfREmndW1mK1hf7w bằng Figma MCP (use_figma, chỉ đọc), 16/10/2026 04:20 (giờ UTC). Cách đọc: xem process/sync/README.md, bước 1.

## 1. Ảnh Figma vừa xuất ↔ `assets/figma`

So từng pixel; “% điểm khác” là tỉ lệ điểm ảnh lệch quá 8/255 ở một kênh màu.

**84/84 ảnh khớp** (lệch dưới 0,5% điểm ảnh).

## 2. Ảnh trên slide ↔ ảnh trong repo

Mỗi ảnh chụp màn hình trên slide được so với mọi ảnh trong `assets/figma` và `assets/stitch` (thu nhỏ, thang xám, sai khác trung bình trên 255). Ảnh cùng kích thước với ảnh repo thì so từng điểm ảnh như mục 1. Ảnh khác kích thước thì dưới 3 là khớp, 3–10 là gần khớp (thường do slide nén ảnh), trên 10 là lệch. Ảnh không khớp nguyên tấm được dò như một phần cắt của ảnh trang lớn hơn.

| Slide | Ảnh trên slide | Ảnh repo giống nhất | Sai khác | Kết quả |
|---|---|---|---|---|
| 1 | Màn Phiên điểm danh: 28/32 đã quét, QR còn 1:52 | `assets/figma/SC-03-phien-diem-danh.png` | 0.3 | khớp |
| 1 | Màn Quét mã điểm danh của sinh viên | `assets/figma/SC-10-quet-ma.png` | 0.00% điểm | khớp |
| 5 | SC-03 bản IT-0 của Stitch: hai nút chính, dòng kiểm tra mạng, chữ tiếng Anh | `assets/stitch/IT-0-SC-03.png` | 0.00% điểm | khớp |
| 6 | SC-03 bản IT-0 của Stitch | `assets/stitch/IT-0-SC-03.png` | 0.00% điểm | khớp |
| 6 | SC-03 bản IT-1 của Stitch | `assets/stitch/IT-1-SC-03.png` | 0.00% điểm | khớp |
| 6 | SC-03 bản IT-2 của Stitch | `assets/stitch/IT-2-SC-03.png` | 0.00% điểm | khớp |
| 6 | SC-03 bản cuối trên Figma | `assets/figma/SC-03-phien-diem-danh.png` | 0.3 | khớp |
| 8 | Wireframe xám của SC-03 trên trang 02 | `assets/figma/wireframe-SC-03.png` | 0.00% điểm | khớp |
| 8 | Màn cuối SC-03 trên trang 03 | `assets/figma/SC-03-phien-diem-danh.png` | 0.3 | khớp |
| 8 | SC-11 đang xác thực mã | `assets/figma/SC-11-dang-xac-thuc.png` | 0.0 | khớp |
| 8 | SC-07 không có báo sai nào | `assets/figma/SC-07-trong.png` | 0.00% điểm | khớp |
| 8 | SC-11 mã đã hết hạn, có nút Quét lại | `assets/figma/SC-11-ma-het-han.png` | 0.1 | khớp |
| 9 | 18 biến màu trên trang 04, mỗi biến có mã hex, công dụng và tỷ lệ tương phản | `assets/figma/page-04-design-system.png`, phần cắt tại x=30, y=215 | 0.0 | khớp |
| 9 | CMP-01 Button: 4 variant nhân 4 trạng thái | `assets/figma/CMP-01-button.png` | 0.05% điểm | khớp |
| 9 | CMP-10 Status chip: 13 trạng thái, mỗi chip có chữ và biểu tượng | `assets/figma/CMP-10-status-chip.png` | 0.00% điểm | khớp |
| 10 | SC-06 ở 360 × 800 | `assets/figma/SC-06-xem-lai-va-xac-nhan.png` | 0.00% điểm | khớp |
| 10 | SC-06 ở 412 × 915: chữ không bị cắt, nút giữ 48 dp | `assets/figma/a11y-412-SC-06.png` | 0.1 | khớp |
| 11 | Bước 1 của kịch bản demo: Đăng nhập, FL-1 · lịch dạy | `assets/figma/SC-02-lich-day-hom-nay.png` | 0.00% điểm | khớp |
| 11 | Bước 2 của kịch bản demo: Đóng QR, FL-1 · dialog | `assets/figma/SC-03-dialog-dong-qr-som-overlay.png` | 0.00% điểm | khớp |
| 11 | Bước 3 của kịch bản demo: Đối chiếu, FL-1 · số lệch | `assets/figma/SC-04-doi-chieu-si-so.png` | 0.00% điểm | khớp |
| 11 | Bước 4 của kịch bản demo: Mã hết hạn, FL-2 · quét lại | `assets/figma/SC-11-ma-het-han.png` | 0.1 | khớp |
| 11 | Bước 5 của kịch bản demo: Từ chối, FL-3 · báo sai | `assets/figma/SC-08-chi-tiet-bao-sai.png` | 0.00% điểm | khớp |

**22/22 ảnh trên slide khớp hoặc gần khớp với repo.** Bỏ qua 27 biểu tượng nhỏ hơn 40 pt (vẽ từ Lucide, không có trong Figma).

## 3. Số liệu trên slide ↔ repo ↔ Figma

| Số liệu | Slide | Trên slide | Repo | Figma | Kết quả |
|---|---|---|---|---|---|
| Số màn | 3 | 15 | 15 | 15 | khớp |
| Phát hiện có mã CR | 6 | 73 | 73 | — | khớp |
| Quyết định D-nn | 7 | 34 | 34 | — | khớp |
| Frame 360 × 800 trang 03 | 8 | 69 | 69 | 69 | khớp |
| Frame điện thoại đổi theo token | 9 | 72 | 72 | 72 | khớp |
| Text style | 9 | 7 | — | 7 | khớp |
| Độ nổi (effect style) | 9 | 4 | — | 4 | khớp |
| Component set | 9 | 15 | 15 | 15 | khớp |
| Biến màu | 9 | 18 | 18 | 18 | khớp |
| Vùng bấm 48 dp | 10 | 146 | 146 | — | khớp |
| Tương phản chữ thấp nhất | 10 | 5,24 | 5,24 | 5,24 | khớp |
| Tương phản viền điều khiển | 10 | 4,16 | 4,16 | 4,16 | khớp |
| Frame prototype trang 06 | 11 | 85 | 85 | 85 | khớp |
| Điểm bắt đầu flow | 11 | 12 | 12 | 12 | khớp |
| Tương tác prototype | 11 | 184 | 184 | 184 | khớp |

**15/15 số liệu khớp.** “—” là bên đó không có số này để so.

“Tương tác prototype” ở cột Figma là số tương tác thô trừ các tương tác bị hotspot đè (xem `figma-facts.json`).
