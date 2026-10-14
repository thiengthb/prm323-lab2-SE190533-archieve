# AI critique cho Stitch IT-2 và chốt vòng Stitch

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-CRIT-IT2 |
| Trạng thái | Chờ thien duyệt CR-24 và cách xử lý CR-19 |
| Đầu vào | Prompt `ai/prompts/AI-21-stitch-it2.md` (thien duyệt CR-18..CR-23 ngày 14/10/2026); bản Export `assets/stitch/IT-2-SC-03.png`, `IT-2-SC-09.png`, `IT-2-SC-11.png` và mã HTML trong `assets/stitch/code/` |
| Người phản biện | Claude |

## 1. Kết quả IT-2

| Mã | Kết quả | Bằng chứng |
|---|---|---|
| CR-18 | Đã sửa: "Đang mở" nằm trong thẻ bộ đếm; "Danh sách lớp · 32" trên một dòng | IT-2-SC-03 |
| CR-19 | **Đánh giá lại.** Mã HTML cho thấy Stitch đã viết một bộ đếm ngược chạy thật, bắt đầu từ 2:39 và đổi chữ thành "QR hết hạn" khi về 0 (`code/IT-2-SC-03.html`, dòng 221–239). Ảnh Export được chụp sau khi bộ đếm chạy hết. Vậy đây **không phải lỗi bố cục** như IT-1 đã ghi. Tuy vậy, nó cho thấy một khoảng trống thật: chưa có thiết kế cho trạng thái "QR đã đóng" | `code/IT-1-SC-03.html`, `code/IT-2-SC-03.html` |
| CR-20 | Đã sửa: "Cùng thiết bị" màu vàng đất, có biểu tượng điện thoại | IT-2-SC-03 |
| CR-22 | Đã sửa: viền nút "Không quét được?" là `#767D86` | `code/IT-2-SC-11.html` |
| CR-23 | Đã sửa: "Lịch học hôm nay" | IT-2-SC-09 |
| CR-21 | Để lại cho Figma, như đã duyệt | — |

## 2. Phát hiện mới

| Mã | Màn | Phát hiện | Căn cứ | Mức | Đề xuất |
|---|---|---|---|---|---|
| CR-24 | SC-03 | Dữ liệu bị cắt bằng dấu ba chấm: "Cùng thiết…" (mất chữ "bị") và giờ quét "07:…". Mã HTML dùng `truncate` cho cả dòng mã SV. Mã SV, giờ quét và lý do gắn cờ là **dữ liệu để giảng viên ra quyết định**, không được cắt | WCAG 1.4.10; NT-3; Nielsen #1 | Cao | Accept, sửa ở Figma: dòng phụ được xuống dòng thay vì cắt; lý do gắn cờ nằm ở dòng riêng; tên dài mới được cắt |
| CR-25 | SC-03 | Thiếu trạng thái "QR đã đóng" của bộ đếm (rút ra từ CR-19): khi hết giờ, chip, chấm "Đang mở" và nút chính phải đổi cùng lúc | Nielsen #1; CMP-14 (Đang mở, sắp đóng, đã đóng) | Trung bình | Accept, thiết kế ở Figma: chip "QR đã đóng", chấm xám "Đã đóng", nút chính đổi thành "Đối chiếu sĩ số" |

## 3. Chốt vòng Stitch

| Vòng | Prompt | Phát hiện | Đã sửa | Phát hiện sai |
|---|---|---|---|---|
| IT-0 | AI-18 | CR-01..CR-17 | — | CR-07 (đo lại thấy chữ đạt 14 px) |
| IT-1 | AI-20 | CR-18..CR-23 | 15/16 phát hiện IT-0 | CR-19 một phần (ảnh chụp lúc bộ đếm hết giờ) |
| IT-2 | AI-21 | CR-24, CR-25 | 5/5 phát hiện được giao cho Stitch | — |

Stitch dừng ở IT-2. Những gì còn lại (CR-21, CR-24, CR-25) cần kiểm soát từng token và trạng thái, nên làm ở Figma, coi là vòng IT-3. Bài học chính của ba vòng: AI sửa đúng phần được yêu cầu nhưng sinh lỗi mới ở chỗ khác (CR-18), và người phản biện, kể cả AI, cũng có thể sai nếu chỉ nhìn ảnh (CR-07, CR-19). Cả hai lần sai đều được phát hiện nhờ đọc mã HTML.
