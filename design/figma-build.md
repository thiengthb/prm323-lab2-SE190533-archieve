# Dựng file Figma (vòng IT-3)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-FIGMA-IT3 |
| Trạng thái | IT-3b: đã sửa theo góp ý của thien ngày 14/10. Theo D-07 cập nhật, Claude thực thi, thien duyệt |
| File Figma | [PRM323 Lab 2 · SE190533 · Điểm danh FAP](https://www.figma.com/design/9yDa2ylfREmndW1mK1hf7w) |
| Người dựng | Claude qua Figma MCP (AI-23, AI-24), theo D-07 B |
| Đầu vào | `design/DESIGN.md` v2, `design/component-system.md` (D-22, D-23), `ux/user-flow.md` v2, `ux/persona.md` v2, CR-01..CR-25 đã duyệt |
| Ảnh xuất | `assets/figma/` |
| Tài khoản | File nằm trong team edu của một người bạn (tài khoản edu có đủ lượt gọi MCP). Xem mục 4 |

## 1. Sáu trang

| Trang | Nội dung | Ảnh |
|---|---|---|
| 01 User Flow | FL-1, FL-2, FL-3 vẽ lại từ `ux/user-flow.md`, có thêm nhánh mở từ xa (K1b), chưa cấp quyền camera và mất mạng khi gửi báo sai. Mỗi ô màn hình có mã SC màu xanh, gạch chân, bấm vào là nhảy tới đúng frame (đúng biến thể) trên trang 03 | `FL-1-user-flow.png`, `FL-2-user-flow.png`, `FL-3-user-flow.png` |
| 02 Wireframe | 15 khung lo-fi, một khung cho mỗi SC | — |
| 03 Final UI | 51 frame 360 × 800 (15 màn và 36 biến thể trạng thái, đặt cùng hàng bên phải màn gốc), 1 frame web 1280 × 720 "Màn hình phòng P.205", và hàng kiểm 412 dp (3 frame 412 × 915). Trên mỗi frame có nhãn, dưới mỗi frame có ghi chú trỏ về TC, NT, CR và giờ trong ngày | `SC-01-…png` tới `SC-15-…png`, `SC-03-mo-tu-xa.png`, `SC-03-man-hinh-phong-p205.png`, `SC-11-sheet-khong-quet-duoc.png`, `a11y-412-*.png` |
| 04 Design System | Biến màu (Light bắt buộc, Dark tùy chọn), 7 text style Inter, khoảng cách, góc bo, 4 effect style, xem trước Light/Dark | `page-04-design-system.png` |
| 05 Components | 35 icon Lucide và 15 component set CMP-01..CMP-15 dựng bằng Auto Layout, variant và biến token. CMP-04 có thêm 2 thuộc tính "Có báo sai mới" và "Số báo sai" | `page-05-components.png` |
| 06 Prototype | 8 hàng, 9 điểm bắt đầu, xem mục 3 | — |

Token chỉ lấy từ DESIGN.md (CR-21): 18 biến màu trong collection "Color · DESIGN.md v2", 16 biến số trong collection "Scale · DESIGN.md v2". Màu, khoảng cách, góc bo và chiều cao 48 dp trong component đều gắn biến, không nhập số tay.

### Một ngày xuyên suốt

Mọi màn kể cùng một ngày, thứ Tư 14/10, để giờ trên app bar, chip và ghi chú không mâu thuẫn nhau:

| Giờ | Giảng viên (thầy dạy PRM393, SWT301) | Sinh viên (persona P-02) |
|---|---|---|
| 06:55 | Nếu chưa tới lớp: Mở từ xa (K1b) | |
| 06:58 | SC-02, chưa điểm danh slot 1, chưa có báo sai | |
| 07:01 | | Quét PRM393 · P.205 (K5): lần đầu mã hết hạn, quét lại được lúc 07:01:04 |
| 07:02 | | SC-09 chip Chờ xác nhận, nút quét tắt |
| 07:12–07:15 | Xác nhận slot 1; laptop tắt nên chờ điền, mở lại thì lên FAP 07:14 | |
| 09:52 | SWT301 lên FAP | |
| 11:52 | Ngô Thanh Vy gửi báo sai | |
| 12:05 | SC-02 có huy hiệu 2 ở tab Báo sai, xử lý báo sai (FL-3) | |
| 20:15–20:58 | | MAS291 bị ghi Vắng vì điện thoại hết pin (K3), gửi báo sai |

K3 trong persona lấy ví dụ slot 1. Trong Figma, slot 1 (PRM393) đã dùng cho K5 nên K3 chuyển sang MAS291 slot 2; lý do bị Vắng và cách báo sai giữ nguyên.

## 2. Những phát hiện được giao cho Figma

| Mã | Đã làm ở Figma | Nơi kiểm |
|---|---|---|
| CR-21 | Chỉ dùng biến của DESIGN.md. Không còn `#181C20`, `#F7F9FF`, Roboto Flex hay Material Symbols của Stitch | Trang 04, bảng Variables |
| CR-24 | Dòng phụ của CMP-11 xuống dòng thay vì cắt. Lý do gắn cờ nằm ở dòng riêng, màu warning, có biểu tượng điện thoại. Dòng chưa quét chỉ còn mã SV vì chip đã nói "Chưa quét" | SC-03, SC-04 |
| CR-25 | CMP-14 có 3 biến thể Đang mở, Sắp đóng, Đã đóng. Ở "QR đã đóng", chip, chấm và chữ đổi cùng lúc, nút chính đổi thành "Đối chiếu sĩ số" | SC-03 · QR đã đóng |

## 3. Prototype (trang 06)

Mỗi hàng là một luồng, có tiêu đề và một dòng mô tả ở trên. Chọn điểm bắt đầu trong bảng Flow khi bấm Present.

| Hàng | Điểm bắt đầu | Đường đi | Overlay, loading | Lỗi và hồi phục |
|---|---|---|---|---|
| FL-1 · Giảng viên điểm danh tại lớp | SC-01 | Đăng nhập → SC-02 đang tải → 06:58 → Mở điểm danh → SC-03 → đóng QR → SC-04 → SC-05 → SC-06 → xác nhận → Chờ điền lên FAP → Thử điền lại → Đã lên FAP → SC-02 07:15 | Dialog đóng QR sớm; dialog xác nhận gửi lên FAP; SC-02 đang tải 1 giây | Ở SC-04 bấm "−" để thấy số quét lớn hơn số người, "+" để về lại. "Về lịch dạy" khi đang chờ điền đưa tới SC-02 07:15 có thẻ Chờ điền lên FAP, chạm thẻ để thử lại |
| FL-1 nhánh K1b · Mở từ xa | SC-02 06:58 | Mở từ xa → SC-03 mở từ xa (chạm khung xanh để xem trang Màn hình phòng P.205) → "Tôi đã vào lớp: đóng QR" → QR đã đóng → nối vào SC-04 của FL-1 | — | Phiên mở từ xa không lên FAP trước bước đối chiếu |
| FL-1 lỗi · Sai tài khoản | SC-01 lỗi tài khoản | Đăng nhập lại → nối vào FL-1 | — | Có |
| FL-2 · Sinh viên quét mã (K5) | SC-09 07:01 | Quét mã → SC-10 (chạm khung quét) → đang xác thực → Mã hết hạn → Quét lại → thành công → SC-09 chờ xác nhận → tab Báo sai (trống) | SC-11 đang xác thực 1,2 giây, hai lần; "Không quét được?" ở SC-10 và SC-11 mở sheet (overlay, trượt từ dưới lên) | Mã hết hạn → Quét lại |
| FL-2 lỗi · Camera và mất mạng | SC-10 chưa có quyền camera | Cấp quyền → quét → mất mạng → thử lại → thành công | SC-11 đang xác thực | Chưa cấp camera; mất mạng |
| FL-2 · Sinh viên báo sai (K3) | SC-09 20:58 | Chạm MAS291 → SC-12 → SC-13 → đang gửi → mất mạng → gửi lại → SC-14 Đã gửi → sau 3 giây Đã sửa | SC-13 đang gửi 1,2 giây, hai lần; SC-14 Đã gửi → Đã sửa 3 giây (mô phỏng giảng viên xử lý) | Mất mạng khi gửi → Thử gửi lại |
| FL-2 phục hồi · Bị từ chối | SC-14 bị từ chối | Xem cách gửi đơn khiếu nại → SC-15 | — | Đường sang đơn khiếu nại |
| FL-2 phục hồi · Quá hạn (K4) | SC-12 đã qua hạn (13/10) | Xem cách gửi đơn khiếu nại → SC-15 | — | Như trên |
| FL-3 · Xử lý báo sai | SC-02 12:05 | Tab Báo sai (huy hiệu 2) → SC-07 → báo sai của Hoàng Mai Linh → Sửa thành Có mặt → SC-08 đã sửa → SC-07 sau khi sửa → tab Hôm nay, huy hiệu còn 1 | Dialog từ chối (Destructive) → SC-07 sau khi từ chối | Hủy trên dialog quay lại SC-08 |

Đã kiểm bằng script đọc toàn bộ reaction trên trang 06: 60 frame, 0 đích hỏng, frame nào cũng có lối ra, chỉ 9 điểm bắt đầu là không có mũi tên đi vào. Nút quay lại trên app bar dùng hành động Back. Những chỗ cố ý chưa nối: "Ghi tay thêm sinh viên" ở SC-06 (sheet chưa có), "Mở FAP" ở SC-15 (mở trang ngoài), và nút đang vô hiệu.

## 4. Khoảng trống còn lại

| Khoảng trống | Vì sao quan trọng | Đề xuất |
|---|---|---|
| SC-15: tên mục "Thủ tục/Đơn từ", phòng QLĐT, 2 ngày làm việc | Lấy từ `research/02-desk/fap-edit-window.md` (V01, V02), là nguồn không chính thức | thien mở FAP thật và sửa chữ nếu khác |
| File nằm trong team "Ngo Gia Kiet (K18 HCM)'s team", là tài khoản edu của bạn thien, mượn để có đủ lượt gọi MCP | Giảng viên chấm D-07 bằng lịch sử phiên bản; mọi thao tác hiện mang tên chủ tài khoản | Ghi rõ trong Disclosure: file do Claude dựng qua MCP trên tài khoản edu mượn, thien duyệt (D-07 cập nhật). Nếu kịp, nhờ bạn mời tài khoản của thien vào file để lần duyệt cuối mang tên thien |

## 5. Ai làm gì trên Figma (D-07, cập nhật 14/10)

Đề không bắt sinh viên tự tay sửa Figma. Đề yêu cầu ghi đủ việc dùng AI (Disclosure), "AI generates; you decide", xem lịch sử phiên bản Figma, và có thể vấn đáp 5 phút: chạy một luồng prototype và giải thích hai quyết định trong log. Vì không kịp thời gian, Claude thực thi toàn bộ phần Figma; thien duyệt và quyết định.

| Việc | Ai làm |
|---|---|
| Lấp khoảng trống: 4 trạng thái SC-11, sheet "Không quét được?", kiểm 412 dp (đã xong, xem mục 7) | Claude |
| Chọn mọi điểm rẽ trên thẻ quyết định (D-xx) | thien |
| Mở FAP thật, đối chiếu chữ ở SC-15 | thien |
| Chạy cả 9 điểm bắt đầu ở chế độ Present, báo chỗ nào khó hiểu | thien |
| Nắm lý do của D-21 và D-24 để trả lời khi vấn đáp | thien |

## 6. Vòng sửa IT-3b (14/10, theo góp ý của thien)

| Góp ý | Đã sửa |
|---|---|
| Huy hiệu số trên tab Báo sai bị cắt | CMP-04: bỏ cắt nội dung ở tab và nền chỉ báo, đẩy huy hiệu lên 6 px, thêm thuộc tính bật/tắt và số. Huy hiệu chỉ bật ở SC-02 12:05 (2) và bản sao 12:08 trên trang 06 (1) |
| Mỗi thành phần phải có lý do | Bỏ banner "2 báo sai mới" ở SC-02 (trùng huy hiệu); bỏ chip "Chưa điểm danh" ở slot chưa tới giờ; bỏ banner hạn báo sai ở SC-09 khi không có buổi nào sai (NT-4 chỉ áp dụng ở màn có báo sai); bỏ phụ đề ngày ở SC-14; bỏ chữ "Ai đang trong phòng?" ở SC-04; bỏ câu "Giảng viên sẽ kiểm tra ngẫu nhiên." ở SC-11 Mã hết hạn |
| Giờ giấc không khớp | Dựng lại một ngày (mục 1): K5 dời về PRM393 07:01 thay cho MAS291 09:31, vì MAS291 là buổi bị Vắng ở K3; SC-02 có thêm biến thể 07:15 đã lên FAP và 12:05 có báo sai mới |
| Thiếu trạng thái để prototype liền mạch | Thêm SC-09 "Đã quét, chờ xác nhận", SC-14 "Trống", SC-07 "Sau khi sửa" và "Sau khi từ chối" |
| Luồng mở QR khi giảng viên ở ngoài | SC-03 mở từ xa không còn hiện mã trên điện thoại; thêm trang web "Màn hình phòng P.205" chạy trên TV của phòng, không kiểm tra mạng (D-24 vòng 2, thien chọn A); nút "Tôi đã vào lớp: đóng QR" nối vào bước đối chiếu (D-24, thien chọn A) |
| Prototype chưa trọn vẹn | Dựng lại trang 06 như mục 3 |

## 7. Khoảng trống đã lấp (14/10, Claude thực thi theo D-07 cập nhật)

| Việc | Kết quả |
|---|---|
| 4 trạng thái còn thiếu của SC-11 | Đã quét rồi (nói giờ lượt đầu), Không có trong lớp (chỉ ra mã thuộc lớp nào), Máy đã dùng cho tài khoản khác (lớp "một máy một người" của D-21 B), QR đã đóng (chỉ sang ghi tay, N-03). Dựng từ CMP-09, nút chính "Về Hôm nay" |
| Sheet "Không quét được?" | Theo CR-17 và prompt AI-20: "Báo giảng viên ngay trong giờ", giơ tay để được ghi tay kèm giờ đến; quá giờ học thì dùng Báo sai trước 23:59. Không có đường tự điểm danh khác, để không mở lại cửa điểm danh từ xa. Đã nối trên trang 06 từ mọi nút "Không quét được?" |
| Kiểm 412 dp | SC-03 (danh sách dài nhất), SC-06 (nhiều nhóm và chip), SC-09 buổi tối (banner, link báo sai) ở 412 × 915. Không có chữ bị cắt, nút giữ 48 dp, chip không xuống dòng sai, thanh dưới bám đáy. Ảnh: `assets/figma/a11y-412-*.png` |
