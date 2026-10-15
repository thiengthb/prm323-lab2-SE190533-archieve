# AI critique cho Stitch IT-1

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-CRIT-IT1 |
| Trạng thái | Đã duyệt: thien chấp nhận CR-18..CR-23 (14/10/2026). CR-19 được đánh giá lại ở DES-CRIT-IT2 |
| Đầu vào | Prompt `ai/prompts/AI-20-stitch-it1.md`; bản Export `assets/stitch/IT-1-SC-03.png`, `IT-1-SC-09.png`, `IT-1-SC-11.png`, `IT-1-SC-11-sheet.png` và mã HTML trong `assets/stitch/code/` |
| Cách kiểm | Nhìn ảnh, rồi đo trên mã HTML: cỡ chữ, chiều cao nút, mã màu, font |
| Người phản biện | Claude, theo heuristic Nielsen, WCAG 2.1, DESIGN.md v2 |

## 1. Các phát hiện IT-0 đã được sửa chưa

| Mã | Kết quả ở IT-1 | Bằng chứng |
|---|---|---|
| CR-01 | Đã sửa: chỉ còn một nút chính “Đóng QR và kiểm tra ngẫu nhiên” | IT-1-SC-03 |
| CR-02 | Đã sửa: bỏ dòng “ghi nhận địa chỉ mạng nội bộ” | IT-1-SC-03 |
| CR-03, CR-04, CR-08 | Đã sửa: tiếng Việt toàn bộ, app bar “PRM393 · Slot 1 / P.205”, bỏ thẻ học kỳ, avatar, menu | IT-1-SC-03 |
| CR-05 | Đã sửa: avatar chữ cái theo tên (K, H, T, A, N, V) | IT-1-SC-03 |
| CR-06 | **Sửa một phần:** có chấm xanh và chữ “Đang mở”, nhưng làm vỡ bố cục (CR-18) | IT-1-SC-03 |
| CR-09 | **Chưa sửa hẳn:** xem CR-21 | mã HTML |
| CR-10..CR-14 | Đã sửa: link báo sai chỉ ở ca đã học; nút quét cố định ở đáy, vô hiệu kèm lý do; tab “Hôm nay” được chọn; bỏ biểu tượng cửa; viết hoa đúng; bỏ avatar | IT-1-SC-09 |
| CR-15..CR-17 | Đã sửa: “Kết quả quét”, “Giờ quét”, câu nhắc rút gọn, nút “Không quét được?” mở sheet hướng dẫn | IT-1-SC-11, IT-1-SC-11-sheet |

Số đo từ mã HTML: chữ nhỏ nhất 14 px, mọi nút cao 48 px (`h-12`), nút quay lại và nút đóng 48 × 48 px, font Inter đã được nạp, màu chính `#4254BA` đúng token.

## 2. Phát hiện mới

| Mã | Màn | Phát hiện | Căn cứ | Mức | Đề xuất |
|---|---|---|---|---|---|
| CR-18 | SC-03 | Dòng “Danh sách lớp · 32” và “Đang mở” bị xuống dòng và **cắt chữ** ở khung 360 dp (“32” và “mở” bị che một nửa). Đây là lỗi mới sinh ra khi sửa CR-06 | WCAG 1.4.10 (reflow); Nielsen #8 | Cao | Accept: đưa “Đang mở” vào thẻ bộ đếm, cạnh chip thời gian; dòng tiêu đề danh sách chỉ còn “Danh sách lớp · 32” trên một dòng |
| CR-19 | SC-03 | Chip đổi thành “QR hết hạn” trong khi phiên vẫn “Đang mở” và nút chính là “Đóng QR”. Hai trạng thái mâu thuẫn trên cùng một màn. **Đánh giá lại ở IT-2:** đây là bộ đếm ngược chạy thật, ảnh được chụp sau khi hết giờ (DES-CRIT-IT2) | Nielsen #1 (trạng thái hệ thống phải đúng) | Cao → không phải lỗi bố cục | Accept: trả lại “QR còn 2:41”; sinh ra CR-25 |
| CR-20 | SC-03 | Lý do “Cùng thiết bị” mất màu vàng, giờ là chữ xám như mã SV. Giảng viên khó thấy vì sao dòng này “Cần xem” | Nielsen #1; NT-3 | Thấp | Accept: lý do dùng màu `warning` kèm biểu tượng điện thoại |
| CR-21 | SC-09, SC-11 | Mã HTML còn dùng màu của bộ theme Stitch tự sinh (`#181C20`, `#F7F9FF`, `#BBC3FF`, `#DCE3EB`) và vẫn nạp Roboto Flex và Material Symbols cạnh Inter. Trên ảnh khó thấy, nhưng handoff sẽ lẫn token lạ | DESIGN.md mục 4; CR-09 | Thấp | Modify: không sửa thêm trên Stitch; Figma chỉ dùng biến token của DESIGN.md |
| CR-22 | SC-11 | Nút viền “Không quét được?” dùng viền `#E3E5EC`, tỷ lệ 1,26:1 trên nền trắng, gần như không thấy ranh giới nút | WCAG 1.4.11 (≥ 3:1); DESIGN.md CMP-01 (nút viền dùng `border-control`) | Trung bình | Accept: viền `#767D86` (4,16:1 trên nền trắng) |
| CR-23 | SC-09 | Nhãn nhóm viết hoa toàn bộ “LỊCH HỌC TRONG NGÀY”. Chữ hoa toàn bộ tiếng Việt có dấu khó đọc hơn và lệch với quy tắc viết hoa chữ đầu câu | Nielsen #4; DESIGN.md mục 3 | Thấp | Accept: “Lịch học hôm nay” |

## 3. Nhận xét chung

IT-1 sửa đúng 15 trên 16 phát hiện đã duyệt (trừ CR-07, phát hiện sai). Hai lỗi mới đáng chú ý, CR-18 và CR-19, đều sinh ra **trong lúc AI sửa lỗi khác**. Mỗi vòng sửa cần được kiểm lại toàn màn, không chỉ chỗ được yêu cầu sửa.
