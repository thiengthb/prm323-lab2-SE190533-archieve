# Dựng file Figma (vòng IT-3)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-FIGMA-IT3 |
| Trạng thái | IT-3c: đã sửa theo góp ý của thien chiều 14/10 (`design/final-ui-review.md`). Theo D-07 cập nhật, Claude thực thi, thien duyệt |
| File Figma | [PRM323 Lab 2 · SE190533 · Điểm danh FAP](https://www.figma.com/design/9yDa2ylfREmndW1mK1hf7w) |
| Bản dự phòng | [Bản sao trên tài khoản chính của thien](https://www.figma.com/design/ubzn09LV1N7VJnmiBuEA3w) (thien tải bản `.fig` từ file gốc rồi import, 14/10/2026). Chỉ để dự phòng: không mang lịch sử phiên bản, nên file gốc ở trên vẫn là bản nộp. Claude không mở được bản này vì tài khoản MCP không có quyền |
| Người dựng | Claude qua Figma MCP (AI-23, AI-24), theo D-07 B |
| Đầu vào | `design/DESIGN.md` v2, `design/component-system.md` (D-22, D-23), `ux/user-flow.md` v2, `ux/persona.md` v2, CR-01..CR-25 đã duyệt |
| Ảnh xuất | `assets/figma/` |
| Tài khoản | File nằm trong team edu của một người bạn (tài khoản edu có đủ lượt gọi MCP). Xem mục 4 |

## 1. Sáu trang

| Trang | Nội dung | Ảnh |
|---|---|---|
| 01 User Flow | FL-1, FL-2, FL-3 vẽ lại từ `ux/user-flow.md`, có thêm nhánh mở từ xa (K1b), chưa cấp quyền camera và mất mạng khi gửi báo sai. Mỗi ô màn hình có mã SC màu xanh, gạch chân, bấm vào là nhảy tới đúng frame (đúng biến thể) trên trang 03. Khoảng cách giữa các cột là 120 px để nhãn nhánh (Có, Vắng, Thành công, Đã sửa...) nằm giữa mũi tên, không đè lên ô (thien góp ý 14/10) | `FL-1-user-flow.png`, `FL-2-user-flow.png`, `FL-3-user-flow.png` |
| 02 Wireframe | 15 khung lo-fi, một khung cho mỗi SC | — |
| 03 Final UI | 60 frame 360 × 800 (15 màn và 45 biến thể trạng thái, đặt cùng hàng bên phải màn gốc), 1 frame web 1280 × 720 "Màn hình phòng P.205", và hàng kiểm 412 dp (3 frame 412 × 915). Tên frame (Figma hiện phía trên) mang mã truy vết, dưới mỗi frame có một ghi chú trỏ về TC, NT, CR và giờ trong ngày | `SC-01-…png` tới `SC-15-…png`, `SC-03-mo-tu-xa.png`, `SC-03-man-hinh-phong-p205.png`, `SC-11-sheet-khong-quet-duoc.png`, `SC-02-dang-tai-skeleton.png`, `SC-07-da-xu-ly-het.png`, `SC-09-bao-sai-co-ket-qua.png`, `a11y-412-*.png` |
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
| 07:12–07:17 | Xác nhận slot 1 lúc 07:12; laptop tắt nên chờ điền (07:15), mở lại thì lên FAP 07:16 | |
| 09:52 | SWT301 lên FAP | |
| 11:52 | Ngô Thanh Vy gửi báo sai | |
| 12:05 | SC-02 có huy hiệu 2 ở tab Báo sai | |
| 12:06–12:08 | Từ chối báo sai của Hoàng Mai Linh (không có mặt khi kiểm tra ngẫu nhiên lúc 07:07), sửa Ngô Thanh Vy thành Có mặt (mất mạng, không có bằng chứng ngược); hết việc, huy hiệu mất | |
| 20:58–21:02 | | MAS291 bị ghi Vắng vì điện thoại hết pin (K3), gửi báo sai lúc 21:02 |
| 21:20–21:22 | Cô Lan Anh (MAS291) xem và sửa thành Có mặt | SC-09 21:22: tab Báo sai có huy hiệu 1 |

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
| FL-1 nhánh K1b · Mở từ xa | SC-02 06:58 | Mở từ xa → SC-03 mở từ xa (chạm khung xanh để xem trang Màn hình phòng P.205) → "Tôi đã vào lớp: đóng QR" → QR đã đóng (ghi "Mở từ xa lúc 06:55") → nối vào SC-04 của FL-1 | — | Phiên mở từ xa không lên FAP trước bước đối chiếu |
| FL-1 lỗi · Sai tài khoản | SC-01 lỗi tài khoản | Đăng nhập lại → nối vào FL-1 | — | Có |
| FL-2 · Sinh viên quét mã (K5) | SC-09 07:01 | Quét mã → SC-10 (chạm khung quét) → đang xác thực → Mã hết hạn → Quét lại → thành công → SC-09 chờ xác nhận → tab Báo sai (trống) | SC-11 đang xác thực 1,2 giây, hai lần; "Không quét được?" ở SC-10 và SC-11 mở sheet (overlay, trượt từ dưới lên) | Mã hết hạn → Quét lại |
| FL-2 lỗi · Camera và mất mạng | SC-10 chưa có quyền camera | Cấp quyền → quét → mất mạng → thử lại → thành công | SC-11 đang xác thực | Chưa cấp camera; mất mạng |
| FL-2 · Sinh viên báo sai (K3) | SC-09 20:58 | Chạm MAS291 → SC-12 → SC-13 → đang gửi → mất mạng → gửi lại → SC-14 Đã gửi 21:02 → tab Hôm nay: SC-09 21:22, tab Báo sai có huy hiệu 1 → mở tab: SC-14 Đã sửa, huy hiệu mất | SC-13 đang gửi 1,2 giây, hai lần | Mất mạng khi gửi → Thử gửi lại |
| FL-2 phục hồi · Bị từ chối | SC-14 bị từ chối | Xem cách gửi đơn khiếu nại → SC-15; tab Hôm nay → SC-09 21:22 (MAS291 vẫn Vắng, báo sai bị từ chối) | — | Đường sang đơn khiếu nại |
| FL-2 phục hồi · Quá hạn (K4) | SC-12 đã qua hạn (13/10) | Xem cách gửi đơn khiếu nại → SC-15 | — | Như trên |
| FL-3 thứ tự khác · Vy trước | Chạm thẻ Vy ở SC-07 | SC-08 Vy → Sửa thành Có mặt → SC-07 còn Linh (huy hiệu 1) → SC-08 Linh → Từ chối (overlay) → SC-07 đã xử lý hết → SC-02 12:08 | Dialog từ chối | Hai thứ tự cùng kết thúc ở một màn; chữ "đã xử lý" không ghi phút để đúng với cả hai thứ tự |
| FL-3 · Xử lý báo sai | SC-02 12:05 | Tab Báo sai (huy hiệu 2) → SC-07 → báo sai của Hoàng Mai Linh → Từ chối → SC-07 còn 1 (huy hiệu 1) → báo sai của Ngô Thanh Vy → Sửa thành Có mặt → SC-08 đã sửa → SC-07 đã xử lý hết → tab Hôm nay: SC-02 12:08, không còn huy hiệu | Dialog từ chối (Destructive) | Ở SC-07 còn 1 báo sai, tab Hôm nay → SC-02 12:06 có huy hiệu 1. Hủy trên dialog quay lại SC-08. Prototype đi nhánh khớp bằng chứng: Linh có bằng chứng không có mặt nên chỉ nối "Từ chối"; Vy không có bằng chứng ngược nên chỉ nối "Sửa thành Có mặt" |

Đã kiểm bằng script đọc toàn bộ reaction trên trang 06: 71 frame, 0 đích hỏng, frame nào cũng có lối ra, chỉ 9 điểm bắt đầu là không có mũi tên đi vào. Mọi màn có thanh điều hướng đều nối tab còn lại; mọi nút đang bật đều có hành động, trừ nút cố ý không nối: "Sửa thành Có mặt" của Linh và "Từ chối" của Vy (ngược bằng chứng, xem SC-08). "Ghi tay thêm sinh viên" mở sheet; "Mở FAP" mở fap.fpt.edu.vn. Thẻ buổi học sắp tới hoặc đã qua trên Hôm nay chỉ để xem, không có màn chi tiết trong phạm vi 15 màn. Vùng bấm (hotspot) trong suốt; script cũng kiểm không còn vùng bấm nào có nền.

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

## 8. Vòng sửa IT-3c (14/10, theo góp ý của thien lúc 14:24 và 14:27)

Chi tiết phản biện ở `design/final-ui-review.md` (CR-26 đến CR-39).

| Góp ý hoặc lỗi | Đã sửa |
|---|---|
| Tên màn và mô tả đè nhau (CR-26, CR-27) | Bỏ 53 dòng nhãn tự đặt đè lên tên frame; mã truy vết đưa vào tên frame. Gộp 4 cặp ghi chú trùng chỗ |
| Skeleton không thấy (CR-28) | CMP-07 thêm biến thể "Skeleton thẻ slot" giống bố cục SC-02 (tiêu đề nhóm, tên môn, chip giờ, dòng mô tả); xương đổi từ `raised` sang `border` cho cả hai biến thể skeleton |
| Nhóm thẻ (CR-29, D-25 A) | SC-02 và SC-09 (cả trang 06) chia 3 nhóm cố định theo giờ của khung hình: Đang diễn ra, Sắp tới, Đã xong. Tiêu đề nhóm 16 Semi Bold màu `text`, số thẻ màu `muted`; khoảng cách giữa nhóm 24, trong nhóm 12 |
| Màu chip giờ (CR-30, D-26 A) | CMP-10 thêm biến thể "Giờ slot · khác" (nền `raised`, chữ `muted`, biểu tượng đồng hồ). "Giờ slot" giữ cam `slot` của FAP, thay đồng hồ bằng chấm, chỉ dùng cho buổi đang diễn ra |
| Thanh tiến độ (CR-31, D-27 A) | CMP-14: phần đã quét màu `success`, nền thanh `border`; độ dài đúng theo số đã quét (28/32, 30/32), 0/32 không có vạch. Đỏ chỉ ở SC-04 khi số quét lớn hơn số người (đã có) |
| Huy hiệu Báo sai (CR-32) | Giảng viên: đếm báo sai chưa xử lý (SC-07: 2 → 1 → hết). Sinh viên: đếm kết quả mới chưa xem (SC-09 21:22: 1) |
| Lỗi logic CR-33 đến CR-39 | Đổi giờ sửa của Vy, đảo nhánh sửa/từ chối cho khớp bằng chứng, dời giờ báo sai của K3 sang 21:02, sửa lý do từ chối K3, "Về Hôm nay" cho sinh viên, "màn hình lớp" ở SC-10, QR đã đóng của nhánh K1b |
| Áp nhất quán ra các màn khác | Chip giờ trên thẻ báo sai (SC-07) là buổi đã qua nên dùng "Giờ slot · khác". Tiêu đề nhóm "Mới · n", "Đã xử lý · n" ở SC-07 cùng kiểu với D-25 |
| Biến thể mới | SC-03 QR đã đóng (mở từ xa), SC-08 Ngô Thanh Vy, SC-07 Đã xử lý hết (thay "Sau khi sửa"), SC-02 12:08 đã xử lý hết, SC-09 21:22 báo sai có kết quả |

### 8.1. Sửa prototype (14/10, góp ý của thien lúc 14:55)

| Lỗi | Sửa |
|---|---|
| 53 vùng bấm trên trang 06 có nền trắng đặc, che nửa thanh điều hướng, nút quay lại và vài nút khác, nên thanh điều hướng trông như chỉ có một tab | Bỏ nền mọi vùng bấm. Lớp mờ 40% của sheet "Không quét được?" bị xóa nhầm khi sửa đã được khôi phục |
| Từ SC-07 còn 1 báo sai, bấm Hôm nay lại về màn không còn huy hiệu | Thêm SC-02 12:06 "Còn 1 báo sai" (trang 03 và 06) |
| Từ SC-14 bị từ chối, bấm Hôm nay về màn 20:58 còn banner hạn và nút báo sai | Thêm SC-09 21:22 "Báo sai bị từ chối" |
| Thẻ Vy ở SC-07 không bấm được | Thêm nhánh FL-3 thứ tự khác (hàng cuối trang 06) và biến thể SC-07 "Sau khi sửa Vy" |
| "Mở từ xa" ở hàng FL-1 không bấm được; "Ghi tay thêm sinh viên" và "Mở FAP" không có hành động | Nối vào nhánh K1b; thêm sheet "Ghi tay thêm sinh viên" (trang 03 và overlay trang 06); "Mở FAP" mở trang FAP |
| Tên phòng ở màn sinh viên khác màn giảng viên (CR-40, 14/10 tối) | "Phòng 205" → "P.205", "Phòng 312" → "P.312", "Ca sắp diễn ra" → "Chưa tới giờ học" trên trang 03 và 06; xuất lại 3 ảnh SC-09 |
| Màn trên trang 06 lệch Final UI | Script so toàn bộ chữ của từng frame trang 06 với frame gốc trang 03: khớp hết; frame mới trên trang 06 đều có bản gốc ở trang 03 |
