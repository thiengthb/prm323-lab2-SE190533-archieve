# Dựng file Figma (vòng IT-3)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-FIGMA-IT3 |
| Trạng thái | Bản dựng đầu, chờ thien kiểm và sửa tay (D-07) |
| File Figma | [PRM323 Lab 2 · SE190533 · Điểm danh FAP](https://www.figma.com/design/9yDa2ylfREmndW1mK1hf7w) |
| Người dựng | Claude qua Figma MCP (AI-23), theo D-07 B |
| Đầu vào | `design/DESIGN.md` v2, `design/component-system.md` (D-22, D-23), `ux/user-flow.md` v2, `ux/persona.md` v2, CR-01..CR-25 đã duyệt |
| Ảnh xuất | `assets/figma/` |

## 1. Sáu trang

| Trang | Nội dung | Ảnh |
|---|---|---|
| 01 User Flow | FL-1, FL-2, FL-3 vẽ lại từ `ux/user-flow.md`. Mỗi ô màn hình có mã SC màu xanh, gạch chân, bấm vào là nhảy tới đúng frame (đúng biến thể) trên trang 03 | `FL-1-user-flow.png`, `FL-2-user-flow.png`, `FL-3-user-flow.png` |
| 02 Wireframe | 15 khung lo-fi, một khung cho mỗi SC | — |
| 03 Final UI | 40 frame 360 × 800: 15 màn và 25 biến thể trạng thái đặt cùng hàng, bên phải màn gốc. Trên mỗi frame có nhãn, dưới mỗi frame có ghi chú trỏ về TC, NT, CR | `SC-01-…png` tới `SC-15-…png` |
| 04 Design System | Biến màu (Light bắt buộc, Dark tùy chọn), 7 text style Inter, khoảng cách, góc bo, 4 effect style, xem trước Light/Dark | `page-04-design-system.png` |
| 05 Components | 35 icon Lucide và 15 component set CMP-01..CMP-15 dựng bằng Auto Layout, variant và biến token | `page-05-components.png` |
| 06 Prototype | Bản sao các màn được nối thành 3 luồng, có 3 điểm bắt đầu | — |

Token chỉ lấy từ DESIGN.md (CR-21): 18 biến màu trong collection "Color · DESIGN.md v2", 16 biến số trong collection "Scale · DESIGN.md v2". Màu, khoảng cách, góc bo và chiều cao 48 dp trong component đều gắn biến, không nhập số tay.

## 2. Những phát hiện được giao cho Figma

| Mã | Đã làm ở Figma | Nơi kiểm |
|---|---|---|
| CR-21 | Chỉ dùng biến của DESIGN.md. Không còn `#181C20`, `#F7F9FF`, Roboto Flex hay Material Symbols của Stitch | Trang 04, bảng Variables |
| CR-24 | Dòng phụ của CMP-11 xuống dòng thay vì cắt. Lý do gắn cờ nằm ở dòng riêng, màu warning, có biểu tượng điện thoại. Dòng chưa quét chỉ còn mã SV vì chip đã nói "Chưa quét" | SC-03, SC-04 |
| CR-25 | CMP-14 có 3 biến thể Đang mở, Sắp đóng, Đã đóng. Ở "QR đã đóng", chip, chấm và chữ đổi cùng lúc, nút chính đổi thành "Đối chiếu sĩ số" | SC-03 · QR đã đóng |

## 3. Prototype (trang 06)

| Luồng | Điểm bắt đầu | Đường chính | Overlay | Loading → kết quả | Lỗi và hồi phục |
|---|---|---|---|---|---|
| FL-1 | SC-02 · Đang tải | SC-02 → SC-03 → dialog đóng QR → SC-03 đã đóng → SC-04 → SC-05 (chạm Hoàng Mai Linh) → SC-05 3/3 → SC-06 → dialog xác nhận → Chờ điền lên FAP → Đã lên FAP → SC-02 sau slot 1 | Đóng QR sớm; Xác nhận gửi lên FAP | SC-02 skeleton → lịch (1 giây); Chờ điền lên FAP → Đã lên FAP (2 giây, mô phỏng extension) | Nút "Thử điền lại" khi extension chưa điền được |
| FL-2 | SC-09 · Có phiên đang mở | SC-09 → SC-10 (chạm khung quét) → SC-11 đang xác thực → Mã hết hạn → Quét lại → SC-10 → SC-11 thành công → SC-09 buổi tối → SC-12 → SC-13 → đang gửi → SC-14 đã gửi | — | SC-11 (1,2 giây) hai lần; SC-13 đang gửi → SC-14 (1,2 giây) | Mã hết hạn → Quét lại (K5) |
| FL-3 | SC-02 · Sau slot 1, tab Báo sai | SC-02 → SC-07 → SC-08 → Sửa thành Có mặt → SC-08 đã sửa → SC-07 | Từ chối báo sai (Destructive) | — | "Hủy" trên dialog từ chối quay lại SC-08 |

Đã kiểm bằng script đọc toàn bộ reaction trên trang 06: mọi frame đều có lối ra, không có đích hỏng, chỉ frame bắt đầu của FL-1 là không có mũi tên đi vào. Nút quay lại trên app bar dùng hành động Back. Hai nút không được nối: "Không quét được?" ở SC-10 (sheet hướng dẫn chưa có trong Figma) và nút "Xem lại và xác nhận" ở SC-05 1/3 (đang vô hiệu, đúng thiết kế).

## 4. Khoảng trống còn lại

| Khoảng trống | Vì sao quan trọng | Đề xuất |
|---|---|---|
| SC-11 còn thiếu 4 trạng thái ghi trong `ux/user-flow.md`: đã quét rồi, không có trong lớp, máy đã dùng cho tài khoản khác, QR đã đóng | Rubric chấm "trạng thái thiếu" | Nhân bản frame "Mã hết hạn", đổi tiêu đề, nguyên nhân, biểu tượng bằng thuộc tính của CMP-09 |
| Sheet "Không quét được?" (SC-10) | Đã có ở Stitch IT-1, chưa có ở Figma | Dựng bằng frame có góc bo 2xl như sheet chống gian lận |
| Kiểm ở bề rộng 412 dp | Checklist accessibility của đề yêu cầu | Nhân bản 3 màn, đổi rộng 412, ghi kết quả vào `design/design-decisions.md` |
| SC-15: tên mục "Thủ tục/Đơn từ", phòng QLĐT, 2 ngày làm việc | Lấy từ `research/02-desk/fap-edit-window.md` (V01, V02), là nguồn không chính thức | thien mở FAP thật và sửa chữ nếu khác |
| Huy hiệu "1" trên tab Báo sai ở SC-09 lúc 09:20 | Sinh viên chưa gửi báo sai nào nên số này không có nghĩa | Bỏ huy hiệu ở biến thể sáng, chỉ hiện từ khi có kết quả báo sai |
| File nằm trong team "Ngo Gia Kiet (K18 HCM)'s team" | Lịch sử phiên bản sẽ hiện tên tài khoản tạo file | thien xác nhận đây là tài khoản của mình, hoặc chuyển file về team của mình trước khi nộp |

## 5. Phần thien làm tay trên Figma (D-07)

Đề cho phép AI dựng nhưng lịch sử phiên bản Figma sẽ được xem. Những việc dưới đây vừa lấp khoảng trống ở mục 4, vừa để lại dấu thao tác của người thiết kế:

1. Dựng 4 trạng thái còn thiếu của SC-11 từ CMP-09 (mục 4, dòng 1).
2. Dựng sheet "Không quét được?" và nối nó vào prototype FL-2.
3. Kiểm 3 màn ở 412 dp, sửa chỗ vỡ nếu có.
4. Mở FAP, kiểm lại chữ ở SC-15.
5. Bỏ huy hiệu sai ở SC-09.
6. Chạy cả 3 luồng ở chế độ Present, sửa chỗ chạm lệch, rồi lưu một phiên bản có tên trong version history (ví dụ "IT-3 thien kiểm xong").
