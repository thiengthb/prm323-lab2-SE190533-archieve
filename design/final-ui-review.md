# Rà Final UI và prototype (IT-3c, 14/10/2026)

Nguồn: góp ý của thien lúc 14:24 và 14:27 ngày 14/10/2026, cộng phần Claude tự rà lại toàn bộ chữ trên 55 frame của trang 03. Mỗi mục ghi: thien thấy gì, Claude phản biện ra sao, sửa thế nào. Mục nào là lựa chọn thiết kế thì thien quyết trên thẻ (D-25 đến D-27). Mục nào là lỗi rõ ràng thì Claude sửa luôn.

## 1. Góp ý của thien

| Mã | thien thấy | Phản biện của Claude | Cách xử lý |
|---|---|---|---|
| CR-26 | Tiêu đề trên mỗi màn bị hai dòng chồng nhau | **Đúng, là lỗi.** Figma tự hiện tên frame phía trên frame (chữ nhỏ). Claude lại đặt thêm một dòng chữ 16 px ngay chỗ đó, nên hai dòng đè nhau. | Bỏ dòng chữ thừa, đưa phần mã truy vết (K3, L3, CMP-07…) vào tên frame. Sửa luôn |
| CR-27 | Phần mô tả dưới màn cũng chồng hai lớp | **Đúng, là lỗi.** Bốn màn (SC-02 06:58, 07:15, Đang tải; SC-03 Mở từ xa) có ghi chú cũ và ghi chú mới đặt cùng chỗ. | Gộp thành một ghi chú. Sửa luôn |
| CR-28 | SC-02 Đang tải trắng tinh, không thấy skeleton | **Một nửa đúng.** Skeleton có, nhưng màu `#F2F2F7` trên nền trắng gần như không thấy (tương phản khoảng 1,1:1). Tệ hơn, hình skeleton là dòng danh sách có avatar và nút, không giống thẻ slot mà màn thật hiện ra. Skeleton phải giữ đúng bố cục để màn không nhảy khi dữ liệu về. | Vẽ lại skeleton theo đúng hình thẻ slot (tiêu đề nhóm, tên môn, chip giờ, dòng mô tả), xám đậm hơn trên thẻ trắng. Sửa luôn |
| CR-29 | Nhóm "Cần làm", "Sau đó", "Sắp diễn ra", "Đã xong" lộn xộn, tiêu đề nhóm chìm | **Đúng, và còn sai logic.** Bốn tên nhóm trộn hai cách chia (theo thời gian và theo việc cần làm). Màn sinh viên không có nhóm nào. Lúc 07:17, slot 1 (07:00–09:15) đang học mà lại nằm ở "Đã xong". Tiêu đề nhóm chữ 14 xám thường, nên mắt không bắt được. | Thẻ quyết định D-25 |
| CR-30 | Thẻ sắp tới, đã xong, đang diễn ra trông giống nhau; muốn đổi màu nền chip giờ | **Đồng ý vấn đề, phản biện một phần cách làm.** Chip giờ đang cam cho mọi thẻ (màu FAP, D-20), nên cam mất nghĩa và trông như cảnh báo. Nếu tô chip giờ theo trạng thái điểm danh (xanh, vàng, đỏ), thẻ sẽ có hai chip cùng màu nói cùng một điều. Đề xuất: chip giờ chỉ nói "pha" của buổi học (đang diễn ra, sắp tới, đã xong), còn chip trạng thái nói chuyện điểm danh. Màu không đứng một mình mà đi cùng tên nhóm (NT-2, WCAG 1.4.1). | Thẻ quyết định D-26 |
| CR-31 | Thanh tiến độ SC-03 chỉ là một vạch đen | **Đúng.** 28/32 là 87%, vạch đen lại nằm trên nền gần như trắng nên trông như đã đầy. Phản biện phần màu đỏ: đỏ trong hệ màu nghĩa là Vắng hoặc lỗi. Lúc QR còn mở, 4 người chưa quét là bình thường, không phải lỗi. Đỏ nên dành cho SC-04 khi số quét lớn hơn số người, vì đó mới là dấu hiệu quét hộ. | Thẻ quyết định D-27 |
| CR-32 | Tab Báo sai không bao giờ có huy hiệu số, dù hệ component có | **Đúng một phần.** Huy hiệu "2" có ở SC-02 12:05, nhưng thiếu ở những chỗ khác cần có: SC-07 khi còn 2 báo sai mới, còn 1 sau khi xử lý một cái; phía sinh viên không có lúc nào. | Sửa luôn, theo quy tắc ở mục 3 |

## 2. Lỗi logic Claude tự tìm thêm (sửa luôn)

| Mã | Lỗi | Sửa |
|---|---|---|
| CR-33 | SC-08 "Đã sửa" ghi Ngô Thanh Vy được sửa lúc 11:55, nhưng SC-07 lúc 12:05 vẫn để Vy ở mục "Mới" | Lần sửa của Vy dời sang 12:06, sau lúc thầy mở danh sách |
| CR-34 | Nhánh "Sửa thành Có mặt" đang áp cho Hoàng Mai Linh, người đã **không có mặt khi kiểm tra ngẫu nhiên lúc 07:07** (D-21). Sửa cho Linh là thưởng cho quét hộ | Nhánh sửa dùng Vy (mất mạng, không bị kiểm tra, ngồi bàn 2 dãy giữa). Nhánh từ chối dùng Linh. Thêm màn SC-08 của Vy trước khi sửa |
| CR-35 | SC-14 ghi sinh viên K3 gửi báo sai lúc 20:15, nhưng SC-09 lúc 20:58 vẫn chưa gửi và còn nút "Báo sai điểm danh" | Giờ gửi đổi thành 21:02, giảng viên xem 21:20, có kết quả 21:22 |
| CR-36 | Lý do từ chối K3 là "cô không thấy em khi kiểm tra ngẫu nhiên". K3 không quét nên không thể nằm trong danh sách kiểm tra ngẫu nhiên (chỉ chọn trong số đã quét) | Lý do mới: "lúc đối chiếu sĩ số cô không ghi nhận em trong phòng" |
| CR-37 | SC-14 Trống của **sinh viên** có nút "Về lịch dạy" (từ của giảng viên) | Đổi thành "Về Hôm nay" |
| CR-38 | SC-10 chưa có quyền camera vẫn ghi "màn chiếu" | Đổi thành "màn hình lớp", khớp D-24 |
| CR-39 | Nhánh K1b (mở từ xa) đóng QR xong lại hiện dòng "Mở tại lớp · QR chiếu từ laptop của thầy" | Màn QR đã đóng của nhánh K1b ghi "Mở từ xa lúc 06:55 · mã hiện trên TV phòng P.205" |

## 3. Quy tắc huy hiệu ở tab Báo sai

- Giảng viên: số báo sai **chưa xử lý** trong ngày. 06:58 đến 07:17: không có. 12:05: 2. Xử lý xong Vy: 1. Xử lý xong Linh: không còn.
- Sinh viên: số báo sai **có kết quả mới mà chưa mở xem**. Thêm màn SC-09 lúc 21:22 có huy hiệu 1. Bấm tab Báo sai thì thấy kết quả và huy hiệu mất.
- Huy hiệu vẫn hiện khi đang ở chính tab Báo sai, vì nó đếm việc còn lại, không đếm thông báo chưa đọc (với giảng viên).
