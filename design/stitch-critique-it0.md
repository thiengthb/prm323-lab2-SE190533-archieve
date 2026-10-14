# AI critique cho kết quả Stitch đầu tiên (IT-0)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-CRIT-IT0 |
| Trạng thái | **Đã duyệt:** thien chấp nhận toàn bộ đề xuất (14/10/2026), sẽ kiểm bằng cách nhìn kết quả IT-1 |
| Đầu vào | P1, P2, P3 trong `ai/prompts/AI-18-stitch-first-prompt.md`; bản Export của Stitch `assets/stitch/IT-0-SC-03.png`, `IT-0-SC-11.png` (kèm mã HTML và `IT-0-stitch-generated-DESIGN.md`); SC-09 chỉ có ảnh cắt `IT-0-SC-09-preview.png` |
| Người phản biện | Claude, theo heuristic Nielsen, WCAG 2.1 và persona P-01 |
| Màn | SC-03 · Phiên điểm danh (CR-01..CR-09); SC-09 · Hôm nay và SC-11 · Kết quả quét (CR-10..CR-17) |

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
| CR-07 | Chữ phụ (mã SV, giờ quét) và chữ trong chip trông nhỏ hơn 14 sp | Đề bài: chữ ≥ 14 sp | **Không phải lỗi** | Đã đo trên mã HTML của bản Export: cỡ nhỏ nhất là 14 px, chip cao 32 px, nút cao 48 px. Ảnh cắt độ phân giải thấp làm chữ trông nhỏ. **Reject**, giữ dòng 6 của prompt IT-1 như một ràng buộc |
| CR-08 | Avatar tài khoản và menu ba chấm trên app bar không có chức năng trong phiên điểm danh | DESIGN.md CMP-05: tối đa một hành động phải | Thấp | Accept: bỏ avatar |
| CR-09 | Stitch tự sinh màu "Tertiary `#944900`" trong bảng theme, không có trong token. File thiết kế Stitch xuất ra còn đổi `primary` thành `#283BA1` (đẩy `#4254BA` xuống thành `primary-container`) và dùng font Roboto Flex | DESIGN.md mục 4; `assets/stitch/IT-0-stitch-generated-DESIGN.md` | Thấp | Reject các giá trị này; nguồn token duy nhất là `design/DESIGN.md` |

CR-07 là phát hiện sai của chính bản phản biện: đo trên mã HTML cho thấy chữ đạt chuẩn. Điều này cho thấy phải kiểm phát hiện của AI bằng số đo, không chỉ bằng mắt.

CR-01 và CR-02 cho thấy rủi ro chính khi dùng AI sinh giao diện: mô hình tự thêm chức năng nghe hợp lý nhưng mâu thuẫn với quyết định đã chốt. Đây là ví dụ tốt để nói trước hội đồng.

## 3. Phát hiện ở SC-09 và SC-11

**Stitch làm đúng:** banner hạn báo sai, chip giờ cam và chip trạng thái đúng nghĩa màu; màn lỗi theo đúng mẫu "chuyện gì + vì sao + làm gì tiếp", chỉ có một nút chính.

| Mã | Màn | Phát hiện | Căn cứ | Mức | Đề xuất |
|---|---|---|---|---|---|
| CR-10 | SC-09 | Link "Báo sai điểm danh" nằm trên slot **chưa diễn ra** ("Ca sắp diễn ra"). Không thể báo sai một buổi chưa học. **Lỗi này do prompt P2 của Claude**, không phải do Stitch | FL-2: chỉ báo sai sau khi có trạng thái chính thức | Nghiêm trọng | Accept: link chỉ hiện trên slot đã kết thúc |
| CR-11 | SC-09 | Nút "Quét mã điểm danh" nổi giữa màn thay vì cố định ở đáy, và luôn bấm được kể cả khi không có phiên nào đang mở | DESIGN.md NT-6 (vùng ngón cái); Nielsen #5 (phòng lỗi) | Cao | Accept: cố định ở đáy; chỉ bật khi có phiên đang mở, nếu không thì hiện "Chưa có phiên điểm danh nào đang mở" |
| CR-12 | SC-09 | Thanh điều hướng đáy không có tab nào ở trạng thái được chọn | Nielsen #1 (cho biết đang ở đâu); CMP-04 | Cao | Accept: tab "Hôm nay" có nền `primary-soft` và biểu tượng `primary` |
| CR-13 | SC-09 | Biểu tượng cửa trên mỗi thẻ slot không rõ nghĩa và không bấm được | Nielsen #8 | Thấp | Accept: bỏ |
| CR-14 | SC-09, SC-11 | Tiêu đề viết hoa không thống nhất ("Hôm Nay" so với tab "Hôm nay"); avatar tài khoản lặp lại như CR-08 | Nielsen #4 | Thấp | Accept: viết hoa chữ đầu câu; bỏ avatar |
| CR-15 | SC-11 | Tiêu đề tiếng Anh "Scan Result" (lặp lại CR-03) | D-08; Nielsen #2 | Cao | Accept: "Kết quả quét" |
| CR-16 | SC-11 | Câu nhắc chống gian lận đặt ở màn **lỗi**, sau khi sinh viên đã quét. Răn đe hiệu quả hơn trước hành vi | UX-INTEGRITY mục 3 | Trung bình | Modify: chuyển câu nhắc sang SC-10 (màn quét), giữ một dòng ngắn ở SC-11 |
| CR-17 | SC-11 | Nhãn "Lần quét" dễ hiểu nhầm là số lần; link "Không quét được? Báo giảng viên ngay trong giờ" không rõ bấm vào sẽ làm gì | Nielsen #2, #6 | Thấp | Accept: đổi thành "Giờ quét"; link mở một sheet hướng dẫn giơ tay báo giảng viên để được ghi tay |
