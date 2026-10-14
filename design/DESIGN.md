# DESIGN.md — Design brief cho Google Stitch

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-BRIEF |
| Trạng thái | Chờ duyệt (viết **trước** prompt Stitch đầu tiên) |
| Đầu vào | UX-PERSONA, UX-FLOW, bộ token thienui của app FAP Attendance (`apps/mobile/lib/app/theme.dart`, nhánh của thien) |
| Quyết định liên quan | D-06, D-12, D-17, D-18, D-19 |

Tài liệu này là bản brief đưa cho Stitch, đồng thời là nguồn gốc của token trong Figma (trang 04) và trong handoff Flutter. Tên token giống hệt nhau ở cả ba nơi (`process/conventions.md`, mục 2).

---

## 1. Sản phẩm trong một đoạn

Ứng dụng di động **bổ trợ** FAP cho cơ sở FPTU TP.HCM, không thay FAP. Giảng viên (P-01, Primary) điểm danh một slot bằng đúng cách đọc tên quen thuộc nhưng xử lý ngay các ca lệch: đáp nhỏ, trùng tên, đến muộn hợp lệ. Sinh viên (P-02, Secondary) thấy trạng thái buổi vừa học và báo sai cho giảng viên **trước khi hết ngày**. Qua hạn thì ứng dụng chỉ dẫn sang "Đơn khiếu nại điểm danh" trên FAP. 13 màn hình, 3 flow (`ux/user-flow.md`).

## 2. Nguyên tắc thiết kế (rút từ nghiên cứu)

| # | Nguyên tắc | Vì sao | Nguồn |
|---|---|---|---|
| NT-1 | **Giữ ngôn ngữ và thứ tự của FAP.** Danh sách theo đúng thứ tự FAP; trạng thái là Attended, Absent, Not yet (hiển thị "Có mặt", "Vắng", "Chưa điểm danh"). | Bổ trợ, không bắt học lại; người đồng tình ngại đổi | D-12, RB-1 |
| NT-2 | **Trạng thái luôn có chữ và biểu tượng, không chỉ màu.** | SV mắt kém, chế độ thang xám, WCAG 1.4.1 | F-19, R09 |
| NT-3 | **Không có ca nào bị bỏ lửng.** Trước khi lưu, màn hình phải nói rõ còn ca nào chưa xử lý. | Lỗi chính nằm ở các ca lệch khỏi lượt đọc tên | F-01b, F-04, N-04 |
| NT-4 | **Thời hạn luôn hiện.** Màn nào cho sửa hoặc báo sai đều ghi mốc "trước 23:59 hôm nay" (LUK: 2 ngày). | Quá ngày là chuyển sang đơn, mất nhiều ngày | F-10a, RB-4 |
| NT-5 | **Không báo thành công giả.** Mất mạng thì hiện "Đang chờ gửi", chỉ hiện "Đã lên FAP" khi FAP đã nhận. | GV cần biết chắc kết quả đã lên | N-11, TC-3 |
| NT-6 | **Một tay, vùng ngón cái.** Hành động chính ở nửa dưới màn hình; vùng chạm ≥ 48 × 48 dp. | GV đứng hoặc đi giữa các dãy lab | P-01 ràng buộc |

## 3. Giọng văn

- Tiếng Việt, ngắn, trung tính, xưng hô "bạn" với sinh viên và không xưng hô với giảng viên (dùng câu mệnh lệnh nhẹ: "Lưu điểm danh").
- Gọi đúng tên việc: "Báo sai điểm danh", không dùng "Khiếu nại" trong ngày (khiếu nại là đơn gửi phòng QLĐT sau hạn).
- Thông báo lỗi theo mẫu: **chuyện gì xảy ra + vì sao + làm gì tiếp**. Ví dụ: "Chưa gửi được lên FAP. Mạng đang mất. Kết quả đã lưu trên máy và sẽ tự gửi khi có mạng."
- Không dùng từ đổ lỗi ("Bạn đã nhập sai"); không dùng chấm than.

## 4. Màu (light theme bắt buộc)

Nền ấm, một màu thương hiệu đất nung (clay) cho **một** hành động chính mỗi vùng. Giá trị lấy từ thienui; đã kiểm tương phản WCAG.

| Token | Light | Dark (tùy chọn) | Dùng cho | Tương phản (light) |
|---|---|---|---|---|
| `color/canvas` | `#FAF9F5` | `#262624` | Nền màn hình | — |
| `color/surface` | `#FFFFFF` | `#30302E` | Card, sheet, ô nhập | — |
| `color/raised` | `#F0EEE6` | `#1F1E1D` | Nền nhóm, hàng đang chọn | — |
| `color/text` | `#141413` | `#FAF9F5` | Chữ chính | 17,5:1 trên canvas |
| `color/muted` | `#686762` | `#A5A49E` | Chữ phụ (giờ, mã SV) | 5,38:1 trên canvas; 4,88:1 trên raised |
| `color/border` | `#E3E1DA` | `#3D3D3B` | Đường chia trang trí | Không dùng cho viền điều khiển |
| `color/border-control` | `#87867F` | `#8F8E89` | Viền ô nhập, nút viền | 3,47:1 trên canvas (WCAG 1.4.11) |
| `color/brand` | `#D97756` | `#D97756` | Nền nút chính | Chữ `color/on-brand` 5,9:1 |
| `color/on-brand` | `#141413` | `#141413` | Chữ trên nền brand | — |
| `color/brand-text` | `#AB4926` | `#EC8B64` | Link, tab đang chọn, viền focus | 5,37:1 trên canvas |
| `color/ok` | `#00773F` | `#47B878` | Có mặt, đã sửa, đã lên FAP | 5,37:1 trên canvas |
| `color/warn` | `#8B5E00` | `#E9B452` | Đến muộn, đang chờ gửi, sắp hết hạn | 5,39:1 |
| `color/alert` | `#C81E3A` | `#FF7B81` | Vắng, lỗi | 5,38:1 |
| `color/info` | `#006BAB` | `#54AAEF` | Thông tin, chưa điểm danh (Not yet) | 5,4:1 |
| `color/destructive` | `#C82223` | `#FF7B7D` | Nền nút phá hủy (từ chối báo sai) | Chữ `color/on-destructive` 5,52:1 |
| `color/on-destructive` | `#FCFCFC` | `#141413` | Chữ trên nền destructive | — |
| `color/*-soft` | màu gốc 12% trên surface | như light | Nền chip trạng thái | Chữ màu gốc trên soft ≥ 4,63:1 |

**Quy tắc:** `color/brand` không dùng làm màu chữ hay biểu tượng mảnh (chỉ 2,96:1 trên canvas); dùng `color/brand-text`. Mỗi màn chỉ một nút nền brand.

## 5. Chữ

Font **Inter** (hỗ trợ đủ dấu tiếng Việt). Không có chữ nào dưới 14 sp. Bố cục phải chịu được cỡ chữ hệ thống 200% (NT-2, P-02 accessibility).

| Token | Cỡ / dòng (sp) | Độ đậm | Dùng cho |
|---|---|---|---|
| `type/display` | 24 / 32 | 600 | Số lớn: "28/32 có mặt" |
| `type/title-lg` | 20 / 28 | 600 | Tiêu đề màn |
| `type/title-md` | 16 / 24 | 600 | Tiêu đề card, tên môn |
| `type/body-lg` | 16 / 24 | 400 | **Tên sinh viên trong danh sách** (đọc ở tầm tay khi đứng) |
| `type/body-md` | 14 / 20 | 400 | Chữ thân |
| `type/label` | 14 / 20 | 500 | Nút, tab, chip |
| `type/mono` | 14 / 20 | 500, chữ số đều | Mã SV (SE190533), giờ (07:04) |

## 6. Khoảng cách, góc bo, độ nổi

| Nhóm | Token | Giá trị |
|---|---|---|
| Khoảng cách (lưới 4) | `space/1` … `space/8` | 4, 8, 12, 16, 20, 24, 32, 40 dp |
| Lề màn hình | `space/4` | 16 dp hai bên |
| Chiều cao điều khiển | `size/control` | **48 dp** (thienui gốc là 44 dp; nâng lên để đạt 48 × 48 dp) |
| Góc bo | `radius/sm`, `radius/md`, `radius/lg`, `radius/full` | 8 (nút, ô nhập), 14 (card), 20 (bottom sheet, dialog), 999 (chip) |
| Độ nổi | `elevation/0`, `elevation/1`, `elevation/2`, `elevation/3` | Phẳng; card (y1 blur3 8%); thanh dưới cố định (y2 blur8 10%); dialog, sheet (y4 blur16 14%) |

## 7. Bố cục

- Khung 360 × 800 dp; kiểm ở 360 và 412 dp.
- Cấu trúc chung: App bar (56 dp) → nội dung cuộn → thanh hành động cố định đáy (khi màn có một hành động chính) → bottom navigation 2 tab cho mỗi vai trò.
- Màn điểm danh (SC-03, SC-04) **ẩn bottom navigation**, thay bằng thanh tiến độ "Đã đánh 18/32" và nút chính ở đáy.
- Mỗi dòng sinh viên cao ≥ 64 dp, hai nút **Có** và **Vắng** mỗi nút ≥ 48 × 48 dp, nằm bên phải (vùng ngón cái của tay phải). Cách nhau ≥ 8 dp để tránh chạm nhầm.

## 8. Component

Chín component bắt buộc của đề bài là CMP-01 đến CMP-09. Component riêng của ứng dụng bắt đầu từ CMP-10. Mọi component dùng token, không màu hay cỡ cứng.

| Mã | Component | Trạng thái | Quy tắc |
|---|---|---|---|
| CMP-01 | Button | Default, pressed, disabled, loading | Biến thể: primary (nền brand), secondary (viền `border-control`), text, destructive. Loading giữ nguyên chiều rộng, thay nhãn bằng spinner |
| CMP-02 | Text field | Default, focused, filled, error, disabled | Nhãn luôn hiện phía trên; lỗi ngay dưới ô kèm biểu tượng; đếm ký tự cho ô lý do báo sai |
| CMP-03 | Card | Default, pressed | Card slot (môn, phòng, giờ, trạng thái), card báo sai |
| CMP-04 | Navigation bar | Mỗi tab được chọn | 2 tab mỗi vai trò; tab chọn dùng `brand-text` + chữ đậm + thanh chỉ báo; tab có huy hiệu số (số báo sai mới) |
| CMP-05 | App bar | Default, with actions | Tiêu đề trái; nút quay lại; tối đa 1 hành động phải |
| CMP-06 | Dialog | Confirmation, destructive | Xác nhận lưu khi còn ca chưa xử lý; từ chối báo sai (destructive) |
| CMP-07 | Loading | Skeleton danh sách, spinner toàn màn | Skeleton cho danh sách lớp; spinner khi đăng nhập |
| CMP-08 | Empty state | Biểu tượng, thông điệp, một hành động | "Hôm nay không có báo sai nào" |
| CMP-09 | Error state | Thông điệp, nguyên nhân dễ hiểu, nút thử lại | Mất mạng, không tải được lịch |
| CMP-10 | Status chip | Có mặt, Vắng, Chưa điểm danh, Đến muộn, Đang chờ gửi, Đã lên FAP | Luôn có biểu tượng + chữ + nền soft |
| CMP-11 | Student row | Chưa đánh, Có mặt, Vắng, Đến muộn, Trùng tên | Tên (`body-lg`), mã SV (`mono`, muted), cặp nút Có/Vắng; trùng tên có nhãn "Trùng tên" và mã SV đậm |
| CMP-12 | Deadline banner | Còn hạn, sắp hết hạn (sau 20:00), đã qua hạn | "Báo sai trước 23:59 hôm nay"; đã qua hạn dẫn sang hướng dẫn đơn |
| CMP-13 | Report timeline | Đã gửi, giảng viên đã xem, đã sửa, bị từ chối | Dòng thời gian dọc 4 bước, mỗi bước có giờ |

## 9. Trạng thái điểm danh

| Trạng thái FAP | Hiển thị | Màu | Biểu tượng |
|---|---|---|---|
| Attended | Có mặt | `color/ok` | dấu tích trong vòng tròn |
| Absent | Vắng | `color/alert` | dấu x trong vòng tròn |
| Not yet | Chưa điểm danh | `color/info` | đồng hồ |
| Attended, đến muộn hợp lệ | Có mặt · đến 07:04 | `color/warn` | đồng hồ có dấu tích |
| (chưa lên FAP) | Đang chờ gửi | `color/warn` | đám mây gạch chéo |

## 10. Nên và không nên

**Nên:** một hành động chính mỗi màn; số liệu đặt trên cùng ("28 có mặt · 4 vắng · 1 chưa xử lý"); hiện giờ ghi nhận cạnh mọi thay đổi; giữ trạng thái khi quay lại màn.

**Không nên:** dùng nhận diện khuôn mặt hay GPS (không có trong dữ liệu nghiên cứu); QR để sinh viên tự điểm danh đang chờ D-19; dùng màu brand cho trạng thái; dùng gradient, ảnh minh họa lớn hay hiệu ứng trang trí; ẩn mốc thời hạn trong menu; dùng chữ dưới 14 sp.
