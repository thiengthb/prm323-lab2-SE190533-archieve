# O-02 — Giao diện FAP mới qua ảnh chụp của thien

| Thuộc tính | Giá trị |
|---|---|
| Mã | O-02 |
| Người cung cấp | Thiên (SE190533), tài khoản sinh viên, cơ sở TP.HCM |
| Ngày | 14/10/2026 |
| Tư liệu | 6 ảnh chụp màn hình FAP (Trang chủ, Thời khóa biểu tuần, Báo cáo điểm danh; trình duyệt Edge, giao diện tiếng Việt) và mã nguồn HTML của 3 trang (view-source) |
| Lưu trữ | Ảnh và mã nguồn **không** đưa lên repo vì có họ tên, email và lịch học cá nhân. Tài liệu này chỉ ghi các đặc trưng giao diện rút ra |
| Cách đo màu | Lấy mẫu điểm ảnh bằng Python (PIL) trên vùng phẳng của ảnh. Màu chữ lấy ở điểm ảnh khác nền nhiều nhất trong vùng chữ, nên có thể nhạt hơn thật một chút do khử răng cưa |
| Nhãn | **Observed** cho những gì thấy trực tiếp; **Inferred** cho suy luận |

## 1. Khung kỹ thuật

| Mã | Đặc trưng | Giá trị | Nhãn |
|---|---|---|---|
| O-02.1 | Phiên bản | "Phiên bản: 2.0.0.0", chân trang mỗi trang | Observed |
| O-02.2 | Giao diện nền | Template quản trị **Jidox** (`/assets/vendor/jidox/css/app.min.css`), Bootstrap 5 (`data-bs-toggle`), bộ icon Remix Icon (`ri-*`) | Observed (mã nguồn) |
| O-02.3 | Màu theme của trình duyệt | `<meta name="theme-color" content="#0e2a47">` | Observed (mã nguồn) |
| O-02.4 | Có chế độ tối | Nút mặt trăng trên thanh trên; màu chế độ tối chưa chụp | Observed (nút), màu chưa có |
| O-02.5 | Font | `getComputedStyle(document.body).fontFamily` trả về `'Roboto, sans-serif'` (thien chạy trên DevTools, 14/10/2026) | Observed |

## 2. Màu đo được

| Mã | Thành phần | Nền | Chữ / biểu tượng | Tương phản | Nhãn |
|---|---|---|---|---|---|
| O-02.6 | Màu chính: nút "Tuần hiện tại", link mã môn, mục menu đang chọn, chip ngày | `#4254BA` (nút) · `#ECEEF8` (nền chip, mục chọn) | trắng trên `#4254BA`; `#4254BA` trên nền nhạt | 6,54:1; 5,66:1 | Observed |
| O-02.7 | Banner thông tin sinh viên | Chuyển màu `#4860C1` → `#0E5DD5` | trắng | ≥ 5,65:1 | Observed |
| O-02.8 | Nền trang | `#EEEEF1`; thẻ và bảng nền trắng; đầu bảng `#F2F2F7` hoặc `#E9EBF7` | chữ `#212529`, chữ phụ `#6C757D` | 13,3:1; chữ phụ trên nền trang chỉ **4,05:1** | Observed |
| O-02.9 | Trạng thái **"Có mặt"**, báo cáo điểm danh | chip `#E3F0EA` | `#0F7A4C` + biểu tượng chấm tròn | 4,58:1 | Observed |
| O-02.10 | Trạng thái **"Có mặt"**, thời khóa biểu | trắng | `#17A497` (xanh ngọc) + biểu tượng tích trong vòng tròn | **3,09:1, không đạt** 4,5:1 | Observed |
| O-02.11 | Trạng thái **"Chưa điểm danh"** | chip `#FFF4D2` (vàng) | `#9A6700` + biểu tượng đồng hồ | khoảng 4,4:1 | Observed |
| O-02.12 | Giờ của slot, báo cáo điểm danh | chip `#FFEFE2` (cam nhạt) | `#9A3412` + biểu tượng đồng hồ | 6,51:1 | Observed |
| O-02.13 | Giờ của slot, thời khóa biểu | trắng | `#E5AF0C` (vàng) | **2,01:1, không đạt** | Observed |
| O-02.14 | Cột "hôm nay" trong thời khóa biểu | `#D1E7DD` | `#159488` | **2,88:1, không đạt** | Observed |
| O-02.15 | Trạng thái **"Vắng"** | — | — | — | **Chưa có ảnh** |

## 3. Nhận xét

- **Ngôn ngữ trạng thái:** FAP mới dùng đúng ba chữ "Có mặt", "Chưa điểm danh" (và theo AI-14, "Vắng"), mỗi trạng thái kèm một biểu tượng. Như vậy FAP đã tự tuân thủ nguyên tắc "không chỉ dùng màu".
- **Nghĩa màu của FAP:** xanh chàm (`#4254BA`) cho thao tác và điều hướng; xanh lá cho có mặt; vàng cho chưa điểm danh; cam cho giờ học.
- **FAP không nhất quán với chính nó:** "Có mặt" mang hai màu khác nhau ở hai trang (O-02.9 và O-02.10). Ba cặp màu không đạt WCAG 4,5:1 (O-02.10, O-02.13, O-02.14), và chữ phụ trên nền trang chỉ đạt 4,05:1.
- **Hệ quả cho thiết kế:** theo FAP ở **nghĩa** và **sắc độ**, nhưng lấy biến thể đạt chuẩn (bản ở báo cáo điểm danh) và làm đậm những màu chưa đạt.
