# DESIGN.md — Design brief cho Google Stitch

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-BRIEF |
| Phiên bản | **v2** (14/10/2026). v1 dùng bảng màu thienui, xem lịch sử git và DES-AUDIT. **v2.1** (16/10/2026, sau Figma, không đưa lại cho Stitch): app bar màn cấp một 72 dp và lề 20 dp ở các màn có thanh tab (D-34) |
| Trạng thái | Đã duyệt (thien, 15/10/2026). Viết **trước** prompt Stitch đầu tiên |
| Đầu vào | UX-PERSONA, UX-FLOW, UX-INTEGRITY, O-02 (màu đo từ FAP thật), DES-AUDIT |
| Quyết định liên quan | D-12, D-17, D-18, D-19, D-20, D-21, D-22 (shadcn + Lucide), D-23 (Inter), D-34 |

Tài liệu này là bản brief đưa cho Stitch, đồng thời là nguồn gốc của token trong Figma (trang 04) và trong handoff Flutter. Tên token giống hệt nhau ở cả ba nơi (`process/conventions.md`, mục 2). Mỗi giá trị đều ghi rõ nguồn: **FAP** (đo từ FAP thật, O-02), **WCAG**, **M3** (Material Design 3, khớp với Flutter), hay **Nghiên cứu** (mã F, N).

---

## 1. Sản phẩm trong một đoạn

Ứng dụng di động **bổ trợ** FAP cho cơ sở FPTU TP.HCM, không thay FAP. Giảng viên (P-01) mở điểm danh ở lớp hoặc từ xa; QR hiện trên màn hình lớp, cả lớp quét cùng lúc. Giảng viên đối chiếu sĩ số, kiểm tra ngẫu nhiên vài sinh viên bằng ảnh FAP, rồi xác nhận; extension trên laptop điền kết quả lên FAP. Sinh viên (P-02) quét QR, thấy ngay trạng thái của mình, và báo sai cho giảng viên **trước khi hết ngày**. Qua hạn thì ứng dụng chỉ dẫn sang “Đơn khiếu nại điểm danh” trên FAP.

## 2. Nguyên tắc thiết kế

| # | Nguyên tắc | Vì sao | Nguồn |
|---|---|---|---|
| NT-1 | **Nói ngôn ngữ của FAP.** Dùng đúng chữ trạng thái “Có mặt”, “Vắng”, “Chưa điểm danh”, cùng nghĩa màu và biểu tượng của FAP mới. | Người dùng FAP lâu năm không phải học lại (Jakob's Law; Nielsen #4) | D-12, D-20, O-02, RB-1 |
| NT-2 | **Trạng thái luôn có chữ và biểu tượng, không chỉ màu.** | SV mắt kém, thang xám, WCAG 1.4.1; FAP cũng làm vậy | F-19, O-02.9–O-02.11 |
| NT-3 | **Không xác nhận khi còn ca chưa rõ.** Trước khi gửi lên FAP, màn hình nói rõ sĩ số đã khớp chưa và đã kiểm tra ngẫu nhiên chưa. | QR bỏ bước người kiểm tra; phải đưa lại | UX-INTEGRITY, D-21 |
| NT-4 | **Thời hạn luôn hiện.** Màn nào cho báo sai đều ghi “trước 23:59 hôm nay” (LUK: 2 ngày). | Quá ngày là chuyển sang đơn, mất nhiều ngày | F-10a, RB-4 |
| NT-5 | **Không báo thành công giả.** “Đã lên FAP” chỉ hiện khi extension điền xong; trước đó là “Chờ điền lên FAP”. | Giảng viên cần biết chắc kết quả đã lên | D-18, N-11 |
| NT-6 | **Một tay, vùng ngón cái.** Hành động chính ở nửa dưới màn hình; vùng chạm ≥ 48 × 48 dp. | Giảng viên cầm điện thoại khi đi lại trong lớp | P-01; M3; đề bài |
| NT-7 | **Quen thuộc nhưng không giả FAP.** Không dùng logo FPT hay chữ “FAP” làm tên ứng dụng; khác FAP ở tên và biểu tượng ứng dụng. | Ứng dụng đòi đăng nhập tài khoản trường; trông y hệt FAP dễ bị nhầm là app chính thức | DES-AUDIT mục 3 |

## 3. Giọng văn

- Tiếng Việt, ngắn, trung tính, xưng “bạn” với sinh viên; với giảng viên dùng câu mệnh lệnh nhẹ (“Mở điểm danh”, “Xác nhận và gửi lên FAP”).
- Gọi đúng tên việc: “Báo sai điểm danh” (trong ngày, gửi giảng viên), khác với “Đơn khiếu nại điểm danh” (sau hạn, gửi phòng QLĐT trên FAP).
- Thông báo lỗi theo mẫu **chuyện gì xảy ra + vì sao + làm gì tiếp**. Ví dụ: “Mã đã hết hạn. Mã đổi sau mỗi 15 giây. Quét lại mã đang hiện trên màn hình lớp.”
- Không đổ lỗi, không chấm than, không đe dọa. Câu nhắc chống gian lận: “Điểm danh hộ là gian lận học tập. Giảng viên sẽ kiểm tra ngẫu nhiên.”

## 4. Màu (light theme bắt buộc)

**Chiến lược (D-20 đã chốt phương án C, 14/10/2026):** lấy đúng màu chính và nghĩa màu trạng thái của FAP mới (O-02). Những chỗ FAP chưa đạt WCAG thì dùng biến thể đậm hơn cùng sắc độ. Tương phản được tính bằng công thức WCAG 2.1.

| Token | Light | Dark (tùy chọn) | Dùng cho | Nguồn | Tương phản (light) |
|---|---|---|---|---|---|
| `color/canvas` | `#EEEEF1` | `#1C1F26` | Nền màn hình | FAP (O-02.8) | — |
| `color/surface` | `#FFFFFF` | `#262A33` | Thẻ, sheet, ô nhập | FAP | — |
| `color/raised` | `#F2F2F7` | `#2F3440` | Đầu bảng, nhóm, hàng đang chọn | FAP (đầu bảng) | — |
| `color/text` | `#212529` | `#E7E9F0` | Chữ chính | FAP (O-02.8) | 13,3:1 trên canvas |
| `color/muted` | `#5C636A` | `#A3A9B3` | Chữ phụ: giờ, mã SV, phòng | FAP `#6C757D`, **làm đậm** vì chỉ đạt 4,05:1 trên nền trang | 5,26:1 trên canvas |
| `color/border` | `#E3E5EC` | `#3A3F4B` | Đường chia trang trí | — | Không dùng cho viền điều khiển |
| `color/border-control` | `#767D86` | `#8A919B` | Viền ô nhập, nút viền | WCAG 1.4.11 | 3,59:1 trên canvas |
| `color/primary` | `#4254BA` | `#8C9BF0` | Nút chính, link, tab đang chọn, viền focus | **FAP** (nút “Tuần hiện tại”, O-02.6) | 6,54:1 với chữ trắng; 5,65:1 trên canvas |
| `color/on-primary` | `#FFFFFF` | `#1C1F26` | Chữ trên nền primary | FAP | 6,54:1 |
| `color/primary-soft` | `#ECEEF8` | `#2E3557` | Nền chip ngày, mục menu đang chọn | FAP (O-02.6) | primary trên soft 5,66:1 |
| `color/success` | `#0D6E45` | `#4CC38A` | **Có mặt**, đã sửa, đã lên FAP | FAP `#0F7A4C` (báo cáo điểm danh), **làm đậm** để đạt 4,5:1 trên chip | 5,38:1 trên soft |
| `color/success-soft` | `#E3F0EA` | `#1F3A2E` | Nền chip “Có mặt” | FAP (O-02.9) | — |
| `color/warning` | `#855A00` | `#F2B84B` | **Chưa điểm danh**, chờ điền lên FAP, chờ giảng viên xác nhận | FAP `#9A6700`, **làm đậm** | 5,53:1 trên soft |
| `color/warning-soft` | `#FFF4D2` | `#3A3220` | Nền chip “Chưa điểm danh” | FAP (O-02.11) | — |
| `color/danger` | `#B42318` | `#FF8A80` | **Vắng**, lỗi, từ chối báo sai | Chưa có ảnh FAP (O-02.15); chọn đỏ đạt chuẩn, **Assumed** | 5,68:1 trên canvas |
| `color/danger-soft` | `#FDECEA` | `#3D2222` | Nền chip “Vắng”, nền lỗi | Assumed | danger trên soft 5,75:1 |
| `color/slot` | `#9A3412` | `#FDBA8C` | Giờ của slot | FAP (O-02.12, chip giờ ở báo cáo) | 6,51:1 trên soft |
| `color/slot-soft` | `#FFEFE2` | `#3A2A20` | Nền chip giờ | FAP | — |

**Quy tắc màu:**
- Xanh chàm `primary` chỉ có nghĩa “bấm được hoặc đang chọn”. Không dùng cho trạng thái.
- Xanh lá, vàng, đỏ chỉ dùng cho trạng thái, luôn đi kèm chữ và biểu tượng (NT-2).
- Mỗi màn chỉ có một nút nền `primary`.
- Không dùng màu xanh ngọc `#17A497` và vàng `#E5AF0C` của thời khóa biểu FAP, vì hai màu này không đạt 4,5:1 (O-02.10, O-02.13).

## 5. Chữ

**Font: Inter** (D-23 chốt B, 14/10/2026). Web sinh viên, web giảng viên và app mobile của FAP Attendance đều dùng Inter (DES-SYSTEM mục 0), nên bản thiết kế khớp sản phẩm thật và handoff không phải đổi font. FAP dùng Roboto (O-02.5); hai font cùng kiểu không chân, nên lợi ích “giống FAP” ở font được đánh giá là nhỏ (suy luận). Inter đủ dấu tiếng Việt. Không có chữ nào dưới 14 sp. Bố cục phải chịu được cỡ chữ hệ thống 200%.

Thang chữ theo **M3**, để handoff khớp tên style của `TextTheme` trong Flutter (đặt `fontFamily: 'Inter'`):

| Token | M3 | Cỡ / dòng (sp) | Độ đậm | Dùng cho |
|---|---|---|---|---|
| `type/headline-sm` | headlineSmall | 24 / 32 | 500 | Số lớn: “Đã quét 28/32” |
| `type/title-lg` | titleLarge | 22 / 28 | 500 | Tiêu đề màn |
| `type/title-md` | titleMedium | 16 / 24 | 500 | Tiêu đề thẻ, tên môn |
| `type/body-lg` | bodyLarge | 16 / 24 | 400 | Tên sinh viên |
| `type/body-md` | bodyMedium | 14 / 20 | 400 | Chữ thân |
| `type/label-lg` | labelLarge | 14 / 20 | 500 | Nút, tab, chip |
| `type/mono` | (riêng) | 14 / 20 | 500, chữ số đều | Mã SV, giờ, mã lớp. Dùng `FontFeature.tabularFigures()` |

## 6. Khoảng cách, góc bo, độ nổi

Theo D-22, phần cấu trúc lấy từ thienui, bộ token mà app FAP Attendance thật đang dùng (`packages/ui/src/styles/tokens.css`, Observed). thienui suy ra góc bo theo cách của shadcn: một biến gốc, các mức còn lại cộng hoặc trừ từ đó.

| Nhóm | Token | Giá trị | Nguồn |
|---|---|---|---|
| Khoảng cách | `space/1` … `space/8` | 4, 8, 12, 16, 20, 24, 32, 40 dp | thienui (thang 0,25 rem của Tailwind) |
| Lề màn hình | `space/4` | 16 dp; **20 dp (`space/5`) ở màn cấp một có thanh tab** (v2.1, D-34) | thienui; M3 (khung compact) |
| Chiều cao điều khiển | `size/control` | 48 dp | Đề bài. **Ghi đè** thienui (`--p-target-min: 44px`) và chiều cao mặc định của shadcn, vốn làm cho web |
| Góc bo | `radius/sm`, `radius/md`, `radius/lg`, `radius/xl`, `radius/2xl`, `radius/full` | 6 (huy hiệu nhỏ), **8** (nút, ô nhập, chip), 10 (ô nhóm), **14** (thẻ), **18** (sheet, dialog), 999 (avatar, chấm) | thienui: gốc 10, sm = gốc − 4, md = gốc − 2, xl = gốc + 4, theo shadcn |
| Độ nổi | `elevation/0` … `elevation/4` | 0 phẳng; 1 thẻ (bóng 1 px rất nhẹ); 2 thanh đáy cố định; 3 sheet, dialog; 4 thông báo nổi | thienui. Viền 1 px `border` là cách tách lớp chính, bóng chỉ phụ trợ |

## 7. Bố cục

- Khung 360 × 800 dp; kiểm ở 360 và 412 dp.
- Cấu trúc chung: App bar (64 dp ở màn lồng; **72 dp ở màn cấp một**, padding 20/20/4/20, v2.1, D-34) → nội dung cuộn → thanh hành động cố định đáy (khi màn có một hành động chính) → thanh điều hướng đáy 2 tab cho mỗi vai trò.
- Màn phiên điểm danh của giảng viên **ẩn thanh điều hướng**, thay bằng bộ đếm “Đã quét 28/32” ở trên và nút chính ở đáy.
- Dòng sinh viên cao ≥ 64 dp, có ảnh FAP 40 dp bên trái (O-01.9).

## 8. Component

Chín component bắt buộc của đề bài là CMP-01 đến CMP-09. Component riêng của ứng dụng bắt đầu từ CMP-10. Mọi component dùng token, không dùng màu hay cỡ cố định.

**Nền component (D-22):** CMP-01..09 dựng theo component shadcn tương ứng (Button, Input + Label, Card, Dialog và Alert Dialog, Sheet, Skeleton, Alert, Badge), giống thienui. Thanh điều hướng đáy và app bar dựng riêng vì shadcn không có bản di động. Biểu tượng dùng **Lucide**, nét 2 px, cỡ 20 dp trong chip và nút, 24 dp ở thanh điều hướng.

| Mã | Component | Trạng thái | Quy tắc |
|---|---|---|---|
| CMP-01 | Button | Default, pressed, disabled, loading | Biến thể: primary (nền `primary`), secondary (viền `border-control`), text, danger. Loading giữ nguyên chiều rộng, thay nhãn bằng spinner |
| CMP-02 | Text field | Default, focused, filled, error, disabled | Nhãn luôn hiện phía trên; lỗi ngay dưới ô, kèm biểu tượng; đếm ký tự cho ô lý do báo sai |
| CMP-03 | Card | Default, pressed | Thẻ slot (môn, phòng, giờ, trạng thái), thẻ báo sai |
| CMP-04 | Navigation bar | Mỗi tab được chọn | 2 tab mỗi vai trò; tab đang chọn có chỉ báo nền `primary-soft` và biểu tượng `primary` (giống menu đang chọn của FAP); tab có huy hiệu số |
| CMP-05 | App bar | Default, with actions | Tiêu đề trái; nút quay lại; tối đa 1 hành động phải |
| CMP-06 | Dialog | Confirmation, destructive | Xác nhận gửi lên FAP; xác nhận đóng QR sớm; từ chối báo sai (destructive) |
| CMP-07 | Loading | Skeleton danh sách, spinner | Skeleton cho danh sách lớp; spinner khi xác thực mã QR |
| CMP-08 | Empty state | Hai biến thể: Có nút (biểu tượng, thông điệp, một hành động) và Không có nút (khi không có việc gì để làm tiếp) | “Hôm nay không có báo sai nào”; “Hôm nay thầy không có slot nào” |
| CMP-09 | Error state | Thông điệp, nguyên nhân dễ hiểu, nút thử lại | Mã hết hạn, mất mạng, không có trong danh sách lớp |
| CMP-10 | Status chip | 13 trạng thái. Điểm danh: Có mặt, Vắng, Chưa điểm danh, Chờ xác nhận, Chờ điền lên FAP, Đã lên FAP, Cần xem, Đã quét. QR và giờ: Giờ slot, Giờ slot · khác, QR đang mở, QR sắp đóng, QR đã đóng | Biểu tượng + chữ + nền soft, đúng nghĩa màu của FAP |
| CMP-11 | Student row | Đã quét, Chưa quét, Đánh tay, Được chọn kiểm tra, Cờ “Cùng thiết bị” | Ảnh FAP, tên (`body-lg`), mã SV (`mono`, `muted`), giờ quét, chip trạng thái |
| CMP-12 | Deadline banner | Còn hạn, sắp hết hạn (sau 20:00), đã qua hạn | “Báo sai trước 23:59 hôm nay”; đã qua hạn dẫn sang hướng dẫn đơn |
| CMP-13 | Report timeline | Đã gửi, giảng viên đã xem, đã sửa, bị từ chối | Dòng thời gian dọc 4 bước, mỗi bước có giờ |
| CMP-14 | Scan counter | Đang mở, sắp đóng, đã đóng | “Đã quét 28/32”, vòng đếm ngược thời gian QR còn mở, nút “Đóng QR” |
| CMP-15 | Spot-check card | Chờ, đúng người, không có mặt | Ảnh FAP lớn, tên, mã SV, hai nút “Đúng người” và “Không có mặt” |

## 9. Trạng thái điểm danh

| Trạng thái FAP | Hiển thị | Màu | Biểu tượng Lucide (cùng ẩn dụ với Remix Icon của FAP) |
|---|---|---|---|
| Attended | Có mặt | `success` | `circle-check` |
| Absent | Vắng | `danger` | `circle-x` |
| Not yet | Chưa điểm danh | `warning` | `clock` |
| Attended, đến muộn được giảng viên ghi tay | Có mặt · đến 07:04 | `success` | `circle-check` + giờ |
| (trong ứng dụng) Chờ giảng viên xác nhận | Chờ xác nhận | `warning` | `shield-check` |
| (trong ứng dụng) Chờ extension điền | Chờ điền lên FAP | `warning` | `cloud-upload` |
| (trong ứng dụng) Extension đã điền | Đã lên FAP | `success` | `cloud-check` |

## 10. Nên và không nên

**Nên:** một hành động chính mỗi màn; số liệu đặt trên cùng (“31 đã quét · 32 sĩ số · 1 chưa quét”); hiện giờ ghi nhận cạnh mọi thay đổi; giữ trạng thái khi quay lại màn.

**Không nên:**
- Dùng nhận diện khuôn mặt, GPS, hay kiểm tra wifi trường (UX-INTEGRITY mục 4).
- Dùng logo FPT hay tên “FAP” làm nhận diện ứng dụng (NT-7).
- Dùng màu `primary` cho trạng thái.
- Dùng gradient (trừ khi chủ ý gợi banner FAP), ảnh minh họa lớn hay hiệu ứng trang trí.
- Ẩn mốc thời hạn trong menu.
- Dùng chữ dưới 14 sp.
