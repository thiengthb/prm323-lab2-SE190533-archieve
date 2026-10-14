# AI critique cho kết quả Stitch đầu tiên (IT-0)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-CRIT-IT0 |
| Trạng thái | Chờ thien quyết định từng phát hiện |
| Đầu vào | P1 trong `ai/prompts/AI-18-stitch-first-prompt.md`; ảnh `assets/stitch/IT-0-SC-03-preview.png` (cắt từ ảnh chụp màn hình Stitch của thien, 14/10/2026, độ phân giải thấp; cần bản Export từ Stitch) |
| Người phản biện | Claude, theo heuristic Nielsen, WCAG 2.1 và persona P-01 |
| Màn | SC-03 · Phiên điểm danh. P2 và P3 chưa chạy |

## 1. Stitch làm đúng gì

Stitch theo brief khá sát: đúng màu chính `#4254BA`, đúng nền, chip trạng thái có biểu tượng và chữ với đúng ba nghĩa màu, bộ đếm "Đã quét 31/32", cờ "Cùng thiết bị", và nút chính ở đáy. Phần lớn cảm giác "giống trang quản trị" là do prompt yêu cầu ("like a clean Bootstrap 5 admin dashboard"), không phải lỗi của Stitch.

## 2. Phát hiện

| Mã | Phát hiện | Căn cứ | Mức | Đề xuất |
|---|---|---|---|---|
| CR-01 | Có **hai hành động chính** ở đáy: "Đóng QR và kiểm tra ngẫu nhiên" và "Submit Roster". Nút thứ hai cho gửi danh sách khi chưa đối chiếu và kiểm tra, tức là bỏ qua L3 và L4 | DESIGN.md NT-3 và quy tắc "mỗi màn một nút chính"; D-21 B | Nghiêm trọng | Accept: bỏ "Submit Roster" và thanh trạng thái đáy |
| CR-02 | Dòng "Hệ thống ghi nhận địa chỉ mạng nội bộ" **bịa ra một biện pháp mà dự án đã loại** (kiểm tra IP), và hứa một lớp bảo vệ không có | UX-INTEGRITY mục 4; Nielsen #1 (trạng thái hệ thống phải đúng) | Nghiêm trọng | Accept: bỏ |
| CR-03 | Chữ tiếng Anh lẫn vào: "Daily Roll Call Session", "Submit Roster", "Status / Roll Call Active", "Fall 2024" | D-08 (giao diện tiếng Việt); Nielsen #2 (khớp ngôn ngữ người dùng) | Cao | Accept: tiêu đề "PRM393 · Slot 1" như prompt |
| CR-04 | Thẻ "PRM393 · Slot 1 / Học kỳ Fall 2024 / P.205" lặp thông tin lẽ ra nằm ở app bar, đẩy danh sách xuống | Nielsen #8 (tối giản); P-01 cần thấy danh sách nhanh | Trung bình | Accept: gộp vào app bar |
| CR-05 | Ảnh sinh viên là ảnh người thật trông như ảnh stock | Không dựng nhân vật trên người thật; quyền riêng tư | Trung bình | Modify: dùng avatar chữ cái hoặc ảnh minh họa trung tính trong bản thiết kế; ghi chú "ảnh thật lấy từ FAP" |
| CR-06 | "Đang trực tiếp" tô màu primary, trông như link bấm được | DESIGN.md mục 4: primary chỉ có nghĩa "bấm được" | Thấp | Accept: đổi sang chấm trạng thái + chữ `muted` |
| CR-07 | Chữ phụ (mã SV, giờ quét) và chữ trong chip trông nhỏ hơn 14 sp | Đề bài: chữ ≥ 14 sp | Cần đo | Kiểm lại trên bản Export; nếu < 14 sp thì Accept |
| CR-08 | Avatar tài khoản và menu ba chấm trên app bar không có chức năng trong phiên điểm danh | DESIGN.md CMP-05: tối đa một hành động phải | Thấp | Accept: bỏ avatar |
| CR-09 | Stitch tự sinh màu "Tertiary `#944900`" trong bảng theme, không có trong token | DESIGN.md mục 4 | Thấp | Reject màu này; khai báo đủ token ở IT-1 |

CR-01 và CR-02 cho thấy rủi ro chính khi dùng AI sinh giao diện: mô hình tự thêm chức năng nghe hợp lý nhưng mâu thuẫn với quyết định đã chốt. Đây là ví dụ tốt để nói trước hội đồng.
