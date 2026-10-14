# Quyết định thiết kế và kiểm tra accessibility

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-DECISIONS |
| Phiên bản | v1 (14/10/2026) |
| Trạng thái | Chờ thien duyệt |
| Đầu vào | `process/decision-log.md` (D-xx do thien chốt), `design/DESIGN.md` v2 (NT-1..NT-7), `design/final-ui-review.md` (CR-26..CR-40), Figma trang 03 và 06 sau IT-3c |
| Cách đo | Số liệu ở mục 2 do Claude đo bằng script đọc file Figma ngày 14/10/2026 (60 frame 360 × 800 và 3 frame 412 × 915 trên trang 03, 124 vùng bấm trên trang 06). Không có số nào ước lượng bằng mắt |

## 1. Mười quyết định quan trọng nhất

Mỗi quyết định ghi: chọn gì, vì sao (theo persona, heuristic hoặc ràng buộc thật), bỏ phương án nào, và nhìn thấy ở đâu trên Figma. Người chọn cuối cùng là thien; lý do đầy đủ và các phương án nằm trong `process/decision-log.md`.

### DD-1 · Bổ trợ FAP, không ghi thẳng vào FAP (D-12, D-18)

- **Chọn:** FAP vẫn là nơi lưu kết quả chính thức. Ứng dụng thu kết quả, rồi một extension trên laptop của giảng viên tự điền vào trang điểm danh của FAP.
- **Vì sao:** Giảng viên đã quen FAP và đã mở FAP trên laptop ở mọi buổi (O-01.10). Không có bằng chứng FAP cho kết nối từ ngoài. Đây cũng là thiết kế gốc của thien. Hệ quả là ứng dụng phải nói thật kết quả đã lên FAP chưa (NT-5, Nielsen #1: hiển thị trạng thái hệ thống).
- **Bỏ:** ghi thẳng qua API (giả định không kiểm chứng được); không kết nối gì (giảng viên phải nhập tay lại).
- **Thấy ở:** SC-06 "Chờ điền lên FAP" và "Đã lên FAP"; SC-02 07:15 và 07:17; SC-01 dòng "Ứng dụng không thay FAP".

### DD-2 · QR chiếu chung, cả lớp quét cùng lúc, không đọc tên (D-19)

- **Chọn:** giảng viên mở phiên, QR hiện trên màn hình phòng, mã đổi sau mỗi 15 giây, cả lớp tự quét.
- **Vì sao:** Gọi tên một lớp 30 người mất 6 đến 8 phút; quét QR mất 1 đến 2 phút (Q08). Sinh viên thấy ngay mình đã được ghi nhận (N-01, TC-4). Đây cũng là đề bài GVHD đưa ra.
- **Bỏ:** đọc tên có hỗ trợ trên điện thoại (giảng viên làm hai lần, trên điện thoại và trên FAP); QR thay hẳn mà không có bước kiểm tra (xem DD-3).
- **Thấy ở:** SC-03, SC-10, SC-11, trang web "Màn hình phòng P.205".

### DD-3 · Bốn lớp chống quét hộ, có một bước người kiểm tra (D-21 B)

- **Chọn:** (1) tài khoản, danh sách lớp và mã 15 giây; (2) một máy chỉ điểm danh cho một tài khoản mỗi buổi; (3) đối chiếu sĩ số sau khi đóng QR; (4) kiểm tra ngẫu nhiên 3 người đã quét bằng ảnh FAP.
- **Vì sao:** Bỏ đọc tên là bỏ lớp kiểm soát con người duy nhất. Không biện pháp kỹ thuật nào chặn hết quét hộ (RES-DESK-QR). Kiểm tra 3/32 mỗi buổi cho xác suất bắt được một người quét hộ thường xuyên khoảng 86% qua 20 buổi. Màn không cho xác nhận khi còn ca chưa rõ (NT-3, Nielsen #5: phòng lỗi).
- **Bỏ:** chỉ lớp nền (dễ bị quét hộ); kiểm tra Wi-Fi trường hoặc GPS (chặn oan người dùng 4G, Q30, và đụng dữ liệu vị trí).
- **Thấy ở:** SC-04 (hai trạng thái), SC-05, SC-06 dòng "Đã đối chiếu sĩ số", SC-11 "Máy này đã điểm danh cho tài khoản khác".

### DD-4 · Mở từ xa: mã chỉ hiện trên TV của phòng (D-24 vòng 2 A)

- **Chọn:** khi giảng viên chưa tới lớp, phiên vẫn mở được, nhưng mã chỉ hiện trên trang web chạy trên TV của phòng. Điện thoại của giảng viên chỉ đếm số đã quét. Kết quả chỉ lên FAP sau khi giảng viên vào lớp và làm xong đối chiếu, kiểm tra.
- **Vì sao:** Đúng gợi ý của GVHD (kịch bản K1b) mà không mở cửa điểm danh từ xa: mã không có trên điện thoại nên không bị chụp gửi ra ngoài. Người quét từ ngoài phòng vẫn bị bắt ở bước đếm sĩ số. Đa số phòng ở HCM có TV lớn (thien quan sát, 14/10).
- **Bỏ:** gắn cờ lượt quét ngoài Wi-Fi (thuộc D-21 C đã bỏ); bắt cả lớp quét lần hai; bỏ hẳn mở từ xa.
- **Thấy ở:** SC-03 "Mở từ xa (K1b)" và "QR đã đóng, mở từ xa (K1b)"; frame web "Màn hình phòng P.205".

### DD-5 · 15 màn, 3 flow được chấm, mỗi flow có nhánh lỗi (D-02)

- **Chọn:** một persona chính (giảng viên) và một phụ (sinh viên), 15 màn, 3 flow. Những phần khác (app desktop, tỷ lệ vắng, đơn miễn điểm danh) đưa vào roadmap.
- **Vì sao:** Rubric cần ít nhất 8 màn và 3 flow, nhưng handoff đòi 6 mục cho mỗi màn và prototype không được có ngõ cụt. Mỗi màn thêm làm tăng việc ở bốn tiêu chí. Làm sâu 15 màn tốt hơn làm nông 38 màn.
- **Bỏ:** toàn bộ 38 màn và 8 flow của spec cũ.
- **Thấy ở:** trang 01 (FL-1, FL-2, FL-3), trang 06 (9 điểm bắt đầu).

### DD-6 · Màu của FAP, làm đậm cho đạt WCAG (D-20 C)

- **Chọn:** màu chính `#4254BA`, nền và nghĩa màu trạng thái của FAP mới (O-02). Những màu FAP chưa đạt 4,5:1 được làm đậm. Tên, logo và biểu tượng ứng dụng khác FAP (NT-7).
- **Vì sao:** Người dùng FAP lâu năm nhận ra ngay nghĩa màu (Jakob's Law, Nielsen #4: nhất quán và theo chuẩn). Chép nguyên màu FAP thì mang theo cả bốn lỗi tương phản của FAP.
- **Bỏ:** giữ bảng màu thienui (người dùng thấy lạ); chép nguyên màu FAP.
- **Thấy ở:** trang 04 (18 biến màu); mọi chip trạng thái. Kết quả đo ở mục 2.1.

### DD-7 · Cấu trúc shadcn, biểu tượng Lucide, font Inter, vùng chạm 48 dp (D-22 B, D-23 B)

- **Chọn:** cấu trúc component kiểu shadcn với biểu tượng Lucide, giữ màu FAP, ghi đè kích thước cho di động (vùng chạm 48 dp, chữ từ 14 sp). Font Inter.
- **Vì sao:** thien thấy bản Stitch IT-0 chưa gọn. Inter là font app FAP Attendance thật đang dùng, đủ dấu tiếng Việt. Ghi đè kích thước vì shadcn vốn cho web, nút 36 px là quá nhỏ cho ngón tay (NT-6).
- **Bỏ:** giữ Material 3 với Remix Icon; shadcn nguyên bản cả bảng màu (mâu thuẫn DD-6); Roboto.
- **Thấy ở:** trang 05 (15 component set, 35 biểu tượng), trang 04 (7 text style Inter).

### DD-8 · Màn Hôm nay chia nhóm theo thời gian, giống nhau ở cả hai vai trò (D-25 A)

- **Chọn:** ba nhóm cố định "Đang diễn ra", "Sắp tới", "Đã xong", tiêu đề nhóm đậm kèm số thẻ.
- **Vì sao:** Nhìn giờ là biết thẻ nằm nhóm nào. Bản trước trộn hai cách chia và để slot đang học vào "Đã xong" lúc 07:17 (CR-29). Cùng một cách chia cho giảng viên và sinh viên thì không phải học hai lần (Nielsen #4).
- **Bỏ:** chia theo việc cần làm; không chia nhóm.
- **Thấy ở:** SC-02 và SC-09, mọi biến thể.

### DD-9 · Mỗi màu chỉ mang một nghĩa (D-26 A, D-27 A)

- **Chọn:** chip giờ màu cam của FAP chỉ dùng cho buổi đang diễn ra, có chấm; buổi khác dùng chip trung tính. Thanh tiến độ quét màu xanh lá trên nền xám. Màu đỏ chỉ dùng cho Vắng, lỗi, và ở SC-04 khi số quét lớn hơn số người.
- **Vì sao:** Khi mọi chip giờ đều cam, cam mất nghĩa và trông như cảnh báo. Lúc QR còn mở, chưa quét là bình thường nên không được tô đỏ; đỏ để dành cho dấu hiệu quét hộ (CR-30, CR-31). Màu luôn đi cùng chữ hoặc tên nhóm (NT-2, WCAG 1.4.1).
- **Bỏ:** chip giờ theo trạng thái điểm danh (lặp lại chip trạng thái); phần chưa quét màu vàng hoặc đỏ.
- **Thấy ở:** SC-02, SC-09 (chip giờ), SC-03 (thanh tiến độ), SC-04 (Chênh +1).

### DD-10 · Báo sai được quyết trên một màn có đủ bằng chứng (FL-3, CR-32, CR-34)

- **Chọn:** sinh viên báo sai ngay trong ứng dụng trước 23:59 cùng ngày. Giảng viên có một hộp "Báo sai hôm nay". Màn chi tiết đặt bằng chứng (ảnh FAP, lượt quét, kết quả kiểm tra ngẫu nhiên, lời sinh viên) cạnh hai nút "Từ chối" và "Sửa thành Có mặt". Huy hiệu trên tab đếm việc còn lại.
- **Vì sao:** QR không loại hết lỗi ghi (hết pin, mất 4G, đến muộn mà quên ghi tay). Hiện nay lời báo đến qua email và Zalo rời rạc (N-01). Quyết trong 3 lần chạm (TC-2) chỉ được khi bằng chứng nằm ngay trên màn (Nielsen #6: nhận ra thay vì phải nhớ). Quá hạn thì chỉ đúng đường đơn khiếu nại trên FAP (TC-6).
- **Bỏ:** chỉ dẫn sinh viên sang đơn khiếu nại cho mọi trường hợp (mất nhiều ngày cho lỗi sửa được trong vài giây).
- **Thấy ở:** SC-07, SC-08, SC-13, SC-14, SC-15; huy hiệu ở SC-02 12:05 và SC-09 21:22.

## 2. Checklist accessibility và responsive

| Mục (đề bài, mục 7) | Kết quả | Bằng chứng |
|---|---|---|
| Chữ thường tương phản ít nhất 4,5:1, chữ lớn 3:1 | **Đạt** | Mọi cặp màu chữ trên nền trên 60 màn đạt ít nhất 5,24:1 (mục 2.1) |
| Thành phần điều khiển tương phản ít nhất 3:1 (WCAG 1.4.11) | **Đạt** | Nút chính `primary` trên nền trắng 6,54:1; viền nút phụ và ô nhập `border-control` 4,16:1 trên trắng, 3,59:1 trên `canvas`; phần đã quét của thanh tiến độ trên nền thanh 5,01:1 (mục 2.2) |
| Vùng chạm ít nhất 48 × 48 dp | **Đạt** | 75 nút CMP-01 trên trang 03 cao ít nhất 48 dp; 124 vùng có hành động trên trang 06, không vùng nào nhỏ hơn 48 × 48 |
| Chữ thân ít nhất 14 sp | **Đạt** | Cỡ chữ nhỏ nhất trên 63 frame của trang 03 là 14, kể cả nhãn thanh điều hướng và huy hiệu số |
| Không truyền thông tin chỉ bằng màu | **Đạt** | Chip trạng thái luôn có chữ và biểu tượng (NT-2). Thanh tiến độ đi cùng số "28/32". Chip giờ đang diễn ra có thêm chấm và nằm dưới tiêu đề nhóm "Đang diễn ra". Tab đang chọn có nền chỉ báo và chữ đậm, không chỉ đổi màu. Lượt quét bị gắn cờ có lý do bằng chữ (CR-24) |
| Layout dùng Auto Layout và constraint | **Đạt** | 63/63 frame màn hình trên trang 03 dùng Auto Layout; 15 component set trên trang 05 dựng bằng Auto Layout và biến token |
| Kiểm ở 360 dp và 412 dp | **Đạt** | Mọi màn ở 360 × 800. Ba màn khó nhất dựng lại ở 412 × 915: SC-03 (danh sách dài nhất), SC-06 (nhiều nhóm và chip), SC-09 buổi tối (banner, link). Không chữ nào bị cắt, nút giữ 48 dp, thanh dưới bám đáy. Ảnh: `assets/figma/a11y-412-SC-03.png`, `a11y-412-SC-06.png`, `a11y-412-SC-09.png` |
| Màn rộng từ 600 dp | Mô tả trong handoff | Đề bài không yêu cầu thiết kế; cách đổi bố cục ghi ở `handoff/flutter-handoff.md` |

### 2.1. Tương phản chữ (theme Light)

Script đi qua từng chữ đang hiện trên 60 màn 360 × 800 và 3 màn 412 × 915 của trang 03, lấy biến màu của chữ và biến màu của lớp nền gần nhất, rồi tính tỷ lệ theo công thức WCAG 2.x.

| Chữ | Nền | Tỷ lệ | Số chữ | Ví dụ |
|---|---|---|---|---|
| `text` #212529 | `surface` #FFFFFF | 15,43:1 | 256 | "PRM393 · Slot 1 · P.205" |
| `text` | `raised` #F2F2F7 | 13,82:1 | 100 | "QR còn 1:52" |
| `text` | `canvas` #EEEEF1 | 13,32:1 | 105 | "Danh sách lớp · 32" |
| `muted` #5C636A | `surface` | 6,09:1 | 257 | dòng mô tả trên thẻ |
| `muted` | `raised` | 5,46:1 | 55 | chip giờ trung tính |
| `muted` | `canvas` | 5,26:1 | 57 | dòng phụ ở SC-01 |
| `on-primary` #FFFFFF | `primary` #4254BA | 6,54:1 | 42 | chữ trên nút chính |
| `on-primary` | `danger` #B42318 | 6,57:1 | 7 | số trên huy hiệu |
| `primary` | `surface` / `canvas` | 6,54:1 / 5,65:1 | 6 | "Hủy", "Mở từ xa" |
| `success` #0D6E45 | `success-soft` #E3F0EA | 5,38:1 | 41 | chip "Có mặt" |
| `warning` #855A00 | `warning-soft` #FFF4D2 | 5,53:1 | 29 | chip "Chưa điểm danh" |
| `warning` | `canvas` / `surface` | 5,24:1 / 6,07:1 | 6 | "Chưa quét 4" |
| `danger` | `danger-soft` #FDECEA | 5,75:1 | 25 | banner lỗi SC-01 |
| `danger` | `surface` | 6,57:1 | 13 | "+1", "Không có mặt lúc 07:07" |
| `slot` #9A3412 | `slot-soft` #FFEFE2 | 6,51:1 | 4 | chip giờ đang diễn ra |
| `success` | `surface` | 6,30:1 | 7 | "Chênh 0" |

Cặp thấp nhất là `warning` trên `canvas`, 5,24:1, vẫn trên ngưỡng 4,5:1 cho chữ thường.

### 2.2. Tương phản thành phần điều khiển

| Thành phần | Cặp màu | Tỷ lệ | Ghi chú |
|---|---|---|---|
| Nút chính | `primary` trên `surface` | 6,54:1 | |
| Nút phụ, ô nhập | viền `border-control` #767D86 trên `surface` | 4,16:1 | Sửa từ viền `border` 1,26:1 ở CR-22 |
| Thanh tiến độ SC-03 | `success` trên nền thanh `border` | 5,01:1 | D-27 |
| Viền thẻ | `border` #E3E5EC trên `canvas` | 1,09:1 | Viền thẻ chỉ để trang trí. Thẻ được nhận ra nhờ nền trắng, chữ và bố cục, nên không thuộc yêu cầu 3:1 của WCAG 1.4.11 |

**Giới hạn của lần đo.** Chỉ đo theme Light, vì đề bài bắt buộc Light và Dark là tùy chọn. Chữ đặt trên ảnh hoặc lớp mờ (dialog, sheet) không có biến màu nền nên script bỏ qua; các chữ đó dùng cùng cặp màu với nền `surface` của dialog.
