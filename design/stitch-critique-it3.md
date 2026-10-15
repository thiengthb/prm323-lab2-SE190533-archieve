# AI critique cho Stitch IT-0b (bốn màn FL-1) và IT-3 (SC-03)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-CRIT-IT3 |
| Trạng thái | Đã duyệt (thien, 15/10/2026): chọn “Duyệt như đề xuất”, CR-63 là hạn chế. Sau chấm chéo Codex (AI-29), thien mở lại CR-63 và chọn sửa (D-31) |
| Đầu vào | Prompt `ai/prompts/AI-28-stitch-flow1-and-it3.md`; bản Export thien gửi tối 15/10/2026 (tệp trong zip ghi giờ 20:31, giờ Việt Nam): `assets/stitch/IT-0b-SC-02.png`, `IT-0b-SC-04.png`, `IT-0b-SC-05.png`, `IT-0b-SC-06.png`, `IT-3-SC-03.png` và mã HTML cùng tên trong `assets/stitch/code/` |
| Người phản biện | Claude |
| Tiêu chí | Như các vòng trước: Nielsen, WCAG 2.2, persona P-01, các quyết định đã chốt (D-xx), quy tắc trong `design/DESIGN.md` |

## 0. Nói trước cho trung thực

Phần A (IT-0b) chạy **sau** khi Figma đã xong, và prompt lấy nội dung từ `design/screen-spec.md`. Vì vậy bốn màn này không phải là Stitch “nghĩ ra” luồng FL-1. Chúng dùng để so bản AI sinh với bản Figma và để có một vòng critique thật trên luồng chính. Phần B (IT-3) là vòng sửa thứ ba của SC-03 ngay trên Stitch.

Zip có 12 thư mục màn. Bảy thư mục là màn cũ: mã HTML trùng từng byte với lần Export 14/10, chỉ ảnh được chụp lại. Vì vậy repo chỉ thêm 5 màn mới. Ảnh IT-0..IT-2 giữ nguyên bản cũ.

## 1. Kết quả IT-3 trên SC-03 (CR-24, CR-25, CR-31)

So chữ trong mã HTML của IT-2 và IT-3 thì Stitch chỉ đổi đúng bốn chỗ được yêu cầu (`code/IT-2-SC-03.html`, `code/IT-3-SC-03.html`). Khác với IT-1, lần này Stitch không làm hỏng chỗ nào khác (so với CR-18).

| Mã | Kết quả | Bằng chứng |
|---|---|---|
| CR-24 | Đã sửa. Lý do “Cùng thiết bị với một lượt quét khác lúc 07:02” nằm ở dòng riêng và xuống hai dòng, không bị cắt | IT-3-SC-03 |
| CR-25 | Đã sửa. Chip “QR đã đóng” có biểu tượng khóa, chữ “Đã đóng lúc 07:05”, nút chính “Đối chiếu sĩ số”, ba chỗ đổi cùng lúc. Chip lại bị tràn chữ, xem CR-60 | IT-3-SC-03 |
| CR-31 | Đã sửa. Thanh tiến độ xanh `#0D6E45` trên nền `#E3E5EC`, dài 93,75 % (30/32), nhìn ra là chưa đầy | `code/IT-3-SC-03.html`, dòng 76–78 |

## 2. IT-0b: Stitch làm đúng những gì

- SC-04: ba số 30, 31, −1 đều màu chữ thường; banner đúng nguyên văn; không có màu đỏ, đúng yêu cầu (mã HTML có chú thích “NO RED ANYWHERE”).
- SC-05: thẻ 1 đã đánh dấu “Đúng người”, nút “Xem lại và xác nhận” bị khóa kèm dòng “Kiểm tra đủ 3 người để tiếp tục”. Ảnh chỉ là ô giữ chỗ, không có ảnh người thật.
- SC-06: số liệu khớp câu chuyện của SC-04. 30 lượt quét, trừ Linh (quét hộ), cộng Hà và Tâm (ghi tay) ra 31 Có mặt và 1 Vắng, đủ 32.
- Nút và dòng danh sách đạt 48 dp và 64 dp như yêu cầu.

## 3. Phát hiện mới

Mức: Cao là sai dữ liệu, sai quyết định đã chốt, hoặc làm giảng viên hiểu sai. Trung bình là lệch quy tắc thiết kế. Thấp là chi tiết.

| Mã | Màn | Phát hiện | Căn cứ | Mức | Quyết định đề xuất và lý do |
|---|---|---|---|---|---|
| CR-54 | SC-02, SC-05, SC-06 | Tiêu đề mất dấu: “Hom Nay”, “Kiem Tra Ngau Nhien”. Đây là chữ trong mã HTML, không phải lỗi font. SC-06 còn mang nhầm tiêu đề của SC-05 thay vì “Xem lại và xác nhận”, nên giảng viên không biết mình đang ở bước nào | Nielsen #1, #4; NT-1 | Cao | **Accept, không cần sửa Figma.** Figma đã đúng ở cả ba màn. Ghi lại làm bằng chứng rằng chữ tiếng Việt do AI sinh phải được đọc lại từng chữ |
| CR-55 | SC-02 | Stitch tự thêm nội dung trái với quyết định đã chốt: “Điểm danh tự động qua Wi-Fi trường”, banner “Mạng phòng học P.205 đang ổn định · FPTU-Academic-5G”, “Học kỳ Fall 2024” (sai năm), chip “Phòng máy Lab”, “Mang theo thiết bị thật”, “2 sinh viên xin phép vắng có phép”. Kiểm tra mạng đã bị bỏ ở D-24; chip “Bắt đầu sau 2p” màu đỏ dù không có lỗi | D-21, D-24; Nielsen #8; DESIGN.md (đỏ chỉ cho lỗi và Vắng) | Cao | **Accept, không cần sửa Figma.** Figma không có các nội dung này. Đây là ví dụ rõ nhất trong cả bốn vòng về việc AI tự thêm tính năng không ai yêu cầu |
| CR-56 | SC-04 | Dòng phụ bị cắt bằng dấu ba chấm: “SE190477 · có trong ph…”. Phần mất đi chính là lý do chưa quét (mất 4G, hết pin), thứ giảng viên cần để quyết định ghi tay. Đây là cùng loại lỗi với CR-24, nay lặp lại trên màn mới dù prompt chung đã nói chữ dài phải xuống dòng | WCAG 1.4.10; NT-3; CR-24 | Cao | **Accept, không cần sửa Figma.** Figma SC-04 cho dòng phụ xuống dòng. Bài học: sửa một màn không làm AI nhớ quy tắc cho màn khác |
| CR-57 | SC-02, SC-04, SC-05, SC-06 | Bốn màn mới dùng font Roboto Flex, trong khi D-23 chốt Inter và SC-03 cùng project vẫn dùng Inter. Prompt chỉ viết “same font” mà không gọi tên Inter, nên lỗi này một phần do prompt | D-23; Nielsen #4 | Trung bình | **Accept, không cần sửa Figma.** Figma dùng Inter qua text style. Ghi vào bài học: prompt phải gọi tên token, không viết “như cũ” |
| CR-58 | SC-05, SC-06 | Chữ dưới 14: “Ảnh FAP” 11 px ở SC-05, chip “Có mặt” và “Vắng” 12 px ở SC-06 | DESIGN.md (chữ nhỏ nhất 14); WCAG 1.4.4 | Trung bình | **Accept, không cần sửa Figma.** Đo lại ngày 15/10, chữ nhỏ nhất trên trang 03 là 14 |
| CR-59 | SC-05 | Prompt yêu cầu hai nút viền, Stitch vẽ thành chữ không viền. “Đúng người” và “Không có mặt” là quyết định quan trọng nhất của màn nhưng trông như liên kết phụ | Nielsen #4; DESIGN.md (CMP-15 có hai nút) | Trung bình | **Accept, không cần sửa Figma.** CMP-15 trên Figma là nút có viền |
| CR-60 | SC-03 (IT-3) | Chip “QR đã đóng” có chiều cao cố định 32 dp nên chữ xuống dòng và tràn ra ngoài chip ở 360 dp. Sửa CR-25 đúng ý nhưng sinh lỗi bố cục mới | WCAG 1.4.10; Nielsen #8 | Trung bình | **Accept, không cần sửa Figma.** Chip trên Figma co theo nội dung (Auto Layout). Đây là lần thứ hai Stitch sửa đúng chỗ này lại hỏng chỗ khác (CR-18 ở IT-1) |
| CR-61 | SC-03, SC-04 | (a) Ở SC-03, trước khi đối chiếu, danh sách đã gắn kết luận “Có mặt” và “Vắng” cho từng người. Spec chỉ cho “Đã quét” và “Chưa quét” tới bước xác nhận ở SC-06. (b) Hai người chưa quét ở SC-03 (Lê Bảo Trâm, Phạm Quốc Anh) khác với SC-04 (Phạm Thu Hà, Võ Minh Tâm). Lỗi (b) do prompt B1 không nhắc lại danh sách | screen-spec SC-03 mục 4; Nielsen #1, #4 | Trung bình | **Accept, không cần sửa Figma.** Figma dùng “Đã quét” và “Chưa quét”, và cùng một danh sách cho cả luồng. Lỗi (a) có từ IT-0 nhưng các vòng trước bỏ sót, nên ghi nhận là thiếu sót của người phản biện |
| CR-62 | SC-02, SC-04, SC-05, SC-06 | Nút ảnh đại diện ở góc phải mọi màn, bấm vào không đi đâu. Tài khoản đã ghi là ngoài phạm vi (CR-08, CR-14, `ux/user-flow.md`) | Nielsen #8 | Thấp | **Reject.** Figma không có nút này, không cần làm gì |
| CR-63 | SC-04 | Đặt Stitch và Figma cạnh nhau mới thấy rõ một chỗ dễ đọc nhầm. Ô thứ ba ghi “Chênh −1” màu chữ thường, nhưng banner ngay dưới nói “Dư 1 lượt quét”. Liếc qua, giảng viên có thể nghĩ chỉ thiếu một lượt quét, trong khi thực tế đang có một lượt quét hộ. Lỗi này nằm ở cả bản Figma (screen-spec SC-04, CR-44) | Nielsen #1, #2 | Thấp | **Modify, chưa sửa trước thứ Sáu.** Banner đã nói đúng con số dư và nút chính dẫn sang kiểm tra ngẫu nhiên, nên luồng không sai. Đổi số liệu vào đêm trước dễ làm lệch spec, handoff và kịch bản nói. Ghi vào hạn chế và chuẩn bị câu trả lời cho phần hỏi đáp. Hướng sửa sau: ô thứ ba so với số quét dự kiến (29) và hiện “Dư +1”. **Cập nhật 15/10 tối:** Codex (AI-29) cũng bắt lỗi này và xếp mức Cao, nên thien mở lại và chọn sửa (D-31). Ô thứ ba nay là “Quét dư +1”, trên Figma trang 03, 06 và trong spec, handoff |

## 4. Tổng kết bốn vòng Stitch

| Vòng | Prompt | Màn | Phát hiện | Đã sửa trên Stitch | Lỗi mới do chính lần sửa |
|---|---|---|---|---|---|
| IT-0 | AI-18 | SC-03, SC-09, SC-11 | CR-01..CR-17 | — | — |
| IT-1 | AI-20 | như trên | CR-18..CR-23 | 15/16 phát hiện IT-0 | CR-18 |
| IT-2 | AI-21 | như trên | CR-24, CR-25 | 5/5 | — |
| IT-0b | AI-28 phần A | SC-02, SC-04, SC-05, SC-06 | CR-54..CR-59, CR-61, CR-62, CR-63 | — | — |
| IT-3 | AI-28 phần B | SC-03 | CR-60 | 3/3 (CR-24, CR-25, CR-31) | CR-60 |

Ba bài học có bằng chứng:

1. AI sửa đúng chỗ được chỉ, nhưng không mang quy tắc sang chỗ khác. CR-24 đã sửa ở SC-03 nhưng lặp lại ở SC-04 (CR-56). Sửa CR-25 thì sinh CR-60.
2. AI tự thêm nội dung trái với quyết định đã chốt khi prompt để trống chỗ (CR-55). Vì vậy D-xx phải được ghi vào prompt, không thể coi là AI tự biết.
3. Prompt viết “như cũ” là chưa đủ: thiếu tên font thì lệch font (CR-57), thiếu danh sách thì lệch dữ liệu giữa các màn (CR-61b). Hai lỗi này là của người viết prompt, không chỉ của Stitch.

Cả 10 phát hiện đều đã được xử lý trên Figma hoặc được ghi là hạn chế (CR-63). Không có màn Figma nào phải sửa vì vòng này. CR-63 sau đó được sửa trên Figma ngày 15/10 tối, sau chấm chéo Codex (D-31).
