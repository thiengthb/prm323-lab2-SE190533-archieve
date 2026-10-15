# Chọn hệ component: shadcn + Lucide

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-SYSTEM |
| Trạng thái | Đã duyệt: D-22 chốt B (14/10/2026); áp dụng vào DESIGN.md mục 6, 8, 9 |
| Lý do | Sau IT-0, thien thấy component, góc bo và bố cục chưa “elegant”, muốn dùng hệ sinh thái shadcn và Lucide, và cần lý do có nghiên cứu để trình bày (14/10/2026) |
| Quyết định liên quan | D-20 (màu theo FAP, đã chốt), D-22, D-23 (font Inter, đã chốt) |

## 0. Hiện trạng sản phẩm thật (Observed, repo `fap-attendance-assistant` trên laptop của thien, 14/10/2026)

thien cho biết thienui là phong cách đã áp dụng xuyên suốt app FAP Attendance. Kiểm tra mã nguồn xác nhận cả bốn bề mặt của sản phẩm đã ở trong hệ sinh thái shadcn và Lucide:

| Bề mặt | Gói giao diện | Biểu tượng | Font |
|---|---|---|---|
| `apps/student_web`, `apps/lecturer_web` | `shadcn` (web), Tailwind CSS 4, Radix | `lucide-react` | Inter |
| `apps/lecturer_desktop` (Flutter) | `shadcn_flutter` 0.0.54 | (theo shadcn_flutter) | — |
| `apps/mobile` (Flutter) | Token thienui tự viết (`lib/app/theme.dart`: bo góc 8 / 14 / 20) | `lucide_icons_flutter` | Inter |

Như vậy D-22 B không phải đổi hướng, mà là **đưa bản thiết kế của bài lab về đúng hệ mà sản phẩm đang dùng**. Phần duy nhất bài lab thay là **màu** (D-20: theo FAP thay cho màu đất nung của thienui).

## 1. Phản biện trước

1. **“Stitch miễn phí nên chưa đủ tầm” không phải lý do dùng được trước hội đồng.** Stitch đã theo brief khá sát (DES-CRIT-IT0 mục 1). Vẻ “trang quản trị” đến từ chính prompt, vì prompt yêu cầu giống Bootstrap 5 admin. Lý do đúng là: Stitch là bản nháp đầu, và đề bài muốn thấy người thiết kế phản biện rồi cải tiến bản nháp đó. Bản cuối ở Figma khác Stitch là điều **được mong đợi**, miễn là mỗi thay đổi có mã phát hiện (CR) và quyết định (D).
2. **“Tôi thích” cũng không được chấp nhận** (work-plan mục 4; đề bài cấm lý do “AI nói vậy” hay sở thích). Sở thích của người thiết kế là điểm khởi đầu. Lý do trình bày phải là các căn cứ ở mục 2.
3. **“Dùng bảng màu của shadcn” mâu thuẫn với D-20.** Bảng màu mặc định của shadcn là xám trung tính và màu chính gần như đen. D-20 vừa chốt màu chính và màu trạng thái theo FAP. Đề xuất ở đây chỉ lấy **cấu trúc** của shadcn (component, viền, góc bo, độ nổi, khoảng trắng, các token nền và viền) và giữ nguyên màu FAP. Bảng màu shadcn cho phép đổi từng token, nên việc này không phải gượng ép.
4. **shadcn được thiết kế cho web trên máy tính.** Nút mặc định thấp hơn 48 dp và chữ phổ biến ở cỡ 14 px. Nếu dùng nguyên, thiết kế trượt tiêu chí vùng chạm ≥ 48 dp của đề. Phải ghi đè kích thước cho di động.
5. **Không được nói “shadcn đạt chuẩn accessibility”.** Bản web dựa trên Radix UI, có sẵn hành vi bàn phím và ARIA. Bản Flutter là bản port, không thừa hưởng các hành vi đó, nên vẫn phải tự kiểm Semantics và tương phản.
6. **Nhiều sản phẩm trông giống nhau vì cùng dùng shadcn.** Màu FAP và các component riêng (bộ đếm, thẻ kiểm tra ngẫu nhiên) giúp ứng dụng vẫn có dáng riêng.

## 2. Lý do có căn cứ

| # | Lý do | Căn cứ | Giới hạn của căn cứ |
|---|---|---|---|
| L-1 | **Đơn giản và quen thuộc cùng quyết định ấn tượng đầu.** Người dùng đánh giá thẩm mỹ của giao diện trong khoảng 17–50 ms. Giao diện **ít phức tạp về thị giác** và **giống kiểu thường thấy của loại sản phẩm đó** (prototypicality) được chấm đẹp hơn; hai yếu tố tác động cùng nhau. shadcn giảm độ phức tạp (nền phẳng, viền mảnh, ít bóng, một màu nhấn). Màu FAP (D-20) giữ độ quen thuộc. Hai quyết định bổ sung cho nhau | Tuch, Presslaber, Stöcklin, Opwis, Bargas-Avila (2012), *International Journal of Human-Computer Studies*; tóm tắt của Google Research (2012) | Nghiên cứu trên website, không phải ứng dụng di động; đo ấn tượng đầu, không đo hiệu quả thao tác |
| L-2 | **Giao diện đẹp được cảm nhận là dễ dùng hơn**, giúp người dùng chịu thử cái mới. Điều này quan trọng vì giảng viên chỉ đổi cách làm khi thấy đáng (RB-1) | Kurosu và Kashimura (1995); Tractinsky, Katz và Ikar (2000), *Interacting with Computers* | Ảnh hưởng tới **đánh giá chủ quan**, không làm thao tác nhanh hơn. Không dùng để thay usability test |
| L-3 | **Nhất quán nội bộ.** shadcn có sẵn một bộ component cùng ngôn ngữ thiết kế, đủ các trạng thái (mặc định, nhấn, focus, vô hiệu). Với 2 ngày còn lại, dùng một hệ hoàn chỉnh ít rủi ro lệch nhau hơn là tự vẽ từng component | Nielsen #4 (nhất quán và theo chuẩn) | Lý do quy trình, không phải bằng chứng người dùng |
| L-4 | **Làm được thật, và đã đang được làm.** App desktop dùng `shadcn_flutter`, app mobile dùng `lucide_icons_flutter` (mục 0). Ngoài ra còn gói `shadcn_ui` cho Flutter (bản 0.54.0, tháng 4/2026, khoảng 900 lượt thích, 160 điểm pub). Lucide có giấy phép ISC. Handoff không cần thư viện mới | Mã nguồn app thật (Observed); pub.dev, Flutter Gems (tra 14/10/2026) | Các gói Flutter do cộng đồng duy trì, chưa đạt bản 1.0 |
| L-6 | **Nhất quán giữa các bề mặt của cùng một sản phẩm.** Sinh viên và giảng viên gặp cùng một hệ nút, thẻ, biểu tượng trên web, desktop và điện thoại. Một bản mobile khác phong cách sẽ làm sản phẩm trông như ghép từ nhiều nơi | Nielsen #4 (nhất quán nội bộ trong một họ sản phẩm); mục 0 | Lý do sản phẩm, chưa đo với người dùng |
| L-5 | **Lucide giữ nghĩa biểu tượng của FAP.** FAP dùng Remix Icon. Lucide có cùng các ẩn dụ: vòng tròn có dấu tích (Có mặt), đồng hồ (Chưa điểm danh), vòng tròn có dấu x (Vắng). Sự quen thuộc nằm ở ẩn dụ, không nằm ở nét vẽ. Lucide có một kiểu nét đồng nhất trên lưới 24 px | O-02.2, O-02.9–O-02.11 | Chưa thử với người dùng thật |

## 3. Những gì thay đổi trong DESIGN.md nếu chọn D-22 B

| Hạng mục | DESIGN.md v2 hiện tại | Nếu chọn B |
|---|---|---|
| Màu | Theo FAP (D-20) | **Giữ nguyên.** Ánh xạ sang tên token của shadcn: `background`, `card`, `border`, `input`, `ring`, `primary`, `muted-foreground`, `destructive`, và thêm các token trạng thái |
| Font | Roboto (FAP dùng, O-02.5) | **Inter** (D-23 chốt B): giống web và mobile của sản phẩm thật |
| Biểu tượng | Remix Icon | Lucide |
| Góc bo | Thang M3: 8 / 12 / 16 / 28 | thienui theo cách của shadcn: gốc 10 → 6 / 8 / 10 / 14 / 18 (Observed trong `packages/ui`) |
| Độ nổi | 4 mức M3 | Gần như phẳng: viền 1 px là chính, bóng rất nhẹ chỉ cho sheet và dialog |
| Component | CMP-01..15 tự định nghĩa | CMP-01..09 lấy từ shadcn (Button, Input, Card, Dialog, Sheet, Badge, Skeleton, Alert...); CMP-10..15 dựng trên đó |
| Kích thước | 48 dp | **Ghi đè shadcn:** nút và ô nhập cao 48 dp, chữ ≥ 14 sp |

## 4. Quy trình sau quyết định

- **IT-1 (Stitch):** sửa các phát hiện CR đã accept, và yêu cầu phong cách shadcn với màu FAP.
- **IT-2 (Stitch):** áp dụng cho SC-09 và SC-11.
- **IT-3 (Figma):** dựng bản cuối bằng component shadcn và token FAP.

Mỗi vòng có ảnh trước và sau. Bản cuối khác Stitch ở chỗ nào thì chỉ được về mã CR hoặc D.
