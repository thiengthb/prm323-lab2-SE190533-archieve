# Rà soát DESIGN.md v1: lựa chọn nào có căn cứ

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-AUDIT |
| Trạng thái | Chờ duyệt |
| Đầu vào | DES-BRIEF v1 (`design/DESIGN.md`), RES-DESK-FAPUI (`research/02-desk/fap-visual-identity.md`), UX-PERSONA |
| Lý do | thien hỏi (14/10/2026): màu, font, spacing, component chọn theo nghiên cứu nào hay cảm tính; vì sao không nghiên cứu môi trường giáo dục; có nên theo đặc trưng của FAP không |
| Quyết định liên quan | D-06, D-20 |

## 1. Trả lời thẳng

DESIGN.md v1 **không** được thiết kế từ nghiên cứu về môi trường giáo dục hay về FAP. Phần lớn giá trị được **kế thừa từ thienui**, bộ design system có sẵn của app FAP Attendance, theo D-06 ("mang token thienui sang"). Phần có căn cứ thật chỉ gồm: tỷ lệ tương phản (tính theo WCAG), chiều cao 48 dp (đề bài và Material), và các component riêng CMP-10..13 (rút từ flow). Màu brand, nền kem, góc bo và font là kế thừa hoặc cảm tính. Phản biện của thien đúng.

## 2. Từng lựa chọn

| Lựa chọn trong v1 | Căn cứ thực tế | Phân loại | Đề xuất cho v2 |
|---|---|---|---|
| Màu brand đất nung `#D97756` | Kế thừa thienui | **Kế thừa, chưa nghiên cứu** | Đổi (mục 3) |
| Nền kem `#FAF9F5` | Kế thừa thienui | **Kế thừa** | Đổi sang nền trung tính lạnh nhẹ, gần FAP hơn (chờ ảnh chụp FAP) |
| Xanh lá = có mặt, đỏ = vắng | Quy ước phổ biến; FAP cũ có dấu vết chữ `Green` cho trạng thái đạt (F02–F08, suy luận mạnh) | **Có căn cứ một phần** | Giữ; xác nhận màu thật bằng ảnh chụp |
| Xanh dương = chưa điểm danh | Cảm tính | **Cảm tính** | Đổi sang xám trung tính kèm biểu tượng đồng hồ; dành xanh dương cho thao tác |
| Tỷ lệ tương phản | WCAG 2.1 tiêu chí 1.4.3 và 1.4.11, tính bằng công thức | **Có căn cứ** | Giữ cách làm; tính lại cho bảng màu mới |
| Font Inter | Kế thừa app thật; đủ dấu tiếng Việt | **Kế thừa, có lý do phụ** | Xem mục 4 |
| Thang chữ 24/20/16/14 | Kế thừa thienui; cỡ tối thiểu 14 sp theo đề | **Một phần** | Theo thang chữ Material 3 để khớp Flutter |
| Lưới 4 dp, khoảng cách 4…40 | Lưới 4 dp là chuẩn của Material 3; dãy giá trị là kế thừa | **Một phần** | Giữ lưới 4 dp, nêu nguồn Material 3 |
| Chiều cao điều khiển 48 dp | Đề bài (≥ 48 × 48 dp), Material 3 | **Có căn cứ** | Giữ |
| Góc bo 8/14/20 | Kế thừa thienui; số 14 không theo hệ nào | **Cảm tính** | Theo thang góc bo Material 3: 8 (nhỏ), 12 (vừa), 16 (lớn), 28 (dialog, sheet) |
| Viền `border-control` | WCAG 1.4.11 (≥ 3:1) | **Có căn cứ** | Giữ |
| CMP-01..09 | Đề bài bắt buộc | **Có căn cứ** | Giữ |
| CMP-10..13 (chip trạng thái, dòng sinh viên, banner hạn, dòng thời gian báo sai) | Rút từ N-01, N-03, N-04 và F-10a | **Có căn cứ** | Cập nhật theo QR (D-19): thêm kết quả quét, kiểm tra ngẫu nhiên |

## 3. Màu: nên theo FAP tới đâu

**Lập luận ủng hộ theo FAP (của thien) là đúng.** Có hai nguyên tắc chống lưng. Jakob's Law: người dùng dành phần lớn thời gian ở các hệ thống khác, nên họ mong ứng dụng mới hoạt động giống những gì họ đã quen. Heuristic số 4 của Nielsen (nhất quán và theo chuẩn) cũng nói vậy. Với giảng viên dùng FAP nhiều năm, đổi ít là bớt chi phí học (RB-1).

**Nhưng không nên chép nguyên giao diện FAP**, vì ba lý do:
1. **Mạo danh và lòng tin.** Ứng dụng bắt đăng nhập bằng tài khoản trường. Nếu trông y hệt FAP, người dùng dễ tưởng đây là app chính thức, đúng kiểu mà người dùng được dạy để cảnh giác với trang giả. Ứng dụng bổ trợ nên quen thuộc nhưng nhận ra được là một sản phẩm khác.
2. **FAP vừa đổi giao diện** khoảng tháng 9/2026, sang Bootstrap 5 (F11, F21). Chưa biết người dùng quen bản nào, và bản mới cũng chưa có mã màu xác nhận.
3. **Không chép lỗi.** Giao diện cũ của FAP dùng thẻ `<font color>` và màu mặc định Bootstrap 3 (F02–F08). Chưa ai kiểm tra nó có đạt WCAG không.

**Đề xuất (D-20, phương án C):** theo FAP ở mọi thứ **mang nghĩa**: chữ trạng thái ("Có mặt", "Vắng", "Chưa điểm danh", đúng chữ của FAP mới), màu trạng thái, thứ tự danh sách, ảnh sinh viên. Phần **nhận diện** (màu chính, nền) là của riêng ứng dụng, nhưng cùng họ màu với FAP.

**Một lỗi trong v1 mà mình tự phát hiện:** brand đất nung `#D97756` và màu "Vắng" `#C81E3A` cùng họ đỏ cam. Trên một màn mà đỏ nghĩa là vắng, nút chính màu đỏ cam dễ bị đọc nhầm thành cảnh báo. Đây là lý do chức năng, không phải sở thích, để đổi brand.

**Hướng màu chính đề xuất: xanh dương.** Dấu vết rõ nhất của FAP cũ là màu link xanh dương Bootstrap `#337ab7` (xác nhận trên một dòng bảng điểm, F02–F08). Khi đó:
- xanh dương nghĩa là "bấm được",
- xanh lá là có mặt, đỏ là vắng, vàng đất là đến muộn hoặc đang chờ,
- xám là chưa điểm danh.

Năm nghĩa, năm họ màu không chồng nhau. Mã màu cụ thể chờ ảnh chụp FAP thật để chọn sắc độ gần nhất và đạt 4,5:1.

**Về "tâm lý học màu sắc trong giáo dục":** bằng chứng chung khá yếu. Bài tổng quan của Elliot và Maier (2014) kết luận tác động của màu phụ thuộc mạnh vào bối cảnh và cỡ hiệu ứng nhỏ. Có một kết quả đáng dùng: trong bối cảnh đánh giá thành tích, màu đỏ gắn với tránh né và thất bại (Elliot và cộng sự, 2007). Nhưng kết quả này về sau không lặp lại ổn định: phân tích gộp của Gnambs (2020) thấy bằng chứng rất hạn chế. Vì vậy đỏ chỉ nên được dùng cho "Vắng" và lỗi theo **quy ước nghĩa**, không vì một hiệu ứng tâm lý. Trước hội đồng, lập luận mạnh nhất cho bảng màu là **quen thuộc với FAP + nghĩa trạng thái không chồng nhau + đạt WCAG**. Không nên nói "xanh dương tạo cảm giác tin cậy" như một sự thật khoa học.

## 4. Font

| Lựa chọn | Ưu | Nhược |
|---|---|---|
| **Inter** (v1) | Đủ dấu tiếng Việt; chữ hẹp nên tên dài như "Nguyễn Thị Phương Uyên" vừa một dòng ở 360 dp; khớp app thật nên handoff không đổi | Bị xem là font "mặc định an toàn"; không có câu chuyện riêng |
| **Be Vietnam Pro** | Thiết kế bởi nhóm Việt Nam, xử lý dấu chồng (ế, ỗ, ặ) cẩn thận; có câu chuyện tốt trước hội đồng | Chữ rộng hơn, tên dài dễ xuống dòng ở 360 dp; phải đổi cả app thật nếu muốn đồng bộ |
| **Roboto** | Font hệ thống Android, quen mắt nhất | Không có nhận diện riêng |

Đề xuất: **giữ Inter** vì lý do chức năng (tên sinh viên dài, khung 360 dp, khớp app thật). Nếu ảnh chụp cho thấy FAP mới dùng một font khác rõ rệt thì xét lại. Lý do này phải được ghi ra, không chỉ "kế thừa".

## 5. Điều cần thien cung cấp

Ảnh chụp FAP mới (tài khoản HCM): trang chủ, thời khóa biểu tuần có đủ ba trạng thái, báo cáo điểm danh, và myFAP. Nếu được, mở DevTools lấy màu của header, link, nút và chữ trạng thái. Danh sách đầy đủ ở mục "Khoảng trống" của `research/02-desk/fap-visual-identity.md`. Khi có ảnh, các điểm này đổi nhãn từ Suy luận sang **Observed**.

## 6. Cập nhật sau khi có ảnh FAP thật (O-02, 14/10/2026)

Ảnh chụp của thien thay phần lớn suy luận ở mục 3 bằng số đo. Ba điều đổi so với đề xuất ban đầu:

| Điểm | Đề xuất cũ (mục 2, 3) | Theo O-02 | Đã áp dụng ở DESIGN.md v2 |
|---|---|---|---|
| Màu chính | "Xanh dương, gần `#337ab7` của FAP cũ" | FAP mới dùng xanh chàm `#4254BA` (O-02.6) | `primary = #4254BA`, đúng mã FAP, 6,54:1 với chữ trắng |
| "Chưa điểm danh" | Xám + đồng hồ | FAP dùng **vàng** + đồng hồ (O-02.11) | Theo FAP: `warning #855A00` trên `#FFF4D2`. Bỏ phương án xám, vì người dùng đã quen vàng |
| Nền | "Trung tính lạnh nhẹ" | FAP dùng `#EEEEF1` (O-02.8) | `canvas = #EEEEF1` |

**FAP không đạt chuẩn ở bốn chỗ**, nên ứng dụng không chép nguyên:
- "Có mặt" ở thời khóa biểu (`#17A497`, 3,09:1).
- Giờ slot ở thời khóa biểu (`#E5AF0C`, 2,01:1).
- Cột hôm nay (`#159488` trên `#D1E7DD`, 2,88:1).
- Chữ phụ trên nền trang (`#6C757D`, 4,05:1).

Ứng dụng giữ sắc độ của FAP nhưng làm đậm vừa đủ để đạt 4,5:1. "Có mặt" lấy theo bản ở trang báo cáo điểm danh, vì bản đó gần đạt chuẩn nhất (O-02.9), rồi làm đậm thêm một bậc.

**Lập luận "mạo danh" ở mục 3 vẫn giữ**, nhưng chuyển trọng tâm. Dùng cùng màu chính với FAP là chấp nhận được, vì màu không phải nhận diện độc quyền. Ranh giới nằm ở tên, logo và biểu tượng ứng dụng (DESIGN.md, NT-7).

**Font:** DevTools xác nhận FAP mới dùng Roboto (O-02.5, Observed). Đề xuất ở mục 4 đổi từ "giữ Inter" sang **Roboto**. Lý do: cùng font với FAP và là font hệ thống Android. Lý do "tên dài vừa một dòng" của Inter yếu hơn lý do quen mắt, vì ở 360 dp, tên dài nhất trong danh sách mẫu vẫn vừa với Roboto 16 sp. Đây là ước lượng, chưa đo trên Figma.

**Cập nhật (D-23 chốt B):** sau khi kiểm tra app thật dùng Inter trên web và mobile (DES-SYSTEM mục 0), thien chọn **Inter**. Lý do nhất quán với sản phẩm thật được đánh giá nặng hơn lý do giống FAP ở riêng font.

**"Vắng" vẫn chưa có ảnh** (O-02.15). `danger #B42318` là giả định, cần một ảnh có trạng thái "Vắng" để đối chiếu.

**Cập nhật (D-22 chốt B):** góc bo 14 từng bị xếp "Cảm tính" ở mục 2. Kiểm tra `packages/ui` của app thật cho thấy 14 là mức `xl` của thienui, suy ra theo cách của shadcn (gốc 10 + 4). DESIGN.md mục 6 giờ dùng thang 6 / 8 / 10 / 14 / 18 này, có nguồn.
