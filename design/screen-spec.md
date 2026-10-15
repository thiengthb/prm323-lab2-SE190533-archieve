# Đặc tả màn hình

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | DES-SCREEN-SPEC |
| Phiên bản | v1 (14/10/2026) |
| Trạng thái | Chờ thien duyệt |
| Đầu vào | `ux/user-flow.md` v2 (danh sách màn, FL-1..FL-3), `ux/persona.md` v2 (N, TC), `design/DESIGN.md` v2 (NT-1..NT-7), Figma trang 03 sau IT-3c (`design/figma-build.md`) |
| Phạm vi | Ý đồ thiết kế của 15 màn: màn để làm gì, hiện nội dung gì, thuộc flow nào, có những trạng thái nào. Bố cục, widget, tương tác và điều hướng chi tiết nằm ở `handoff/flutter-handoff.md` |

**Cách đọc.** Mỗi màn có 6 phần: mục đích, flow, nội dung từ trên xuống, hành động chính, trạng thái, quy tắc. Chữ trong ngoặc kép là chữ thật trên Final UI (trang 03), không phải ví dụ. Số liệu (giờ, sĩ số, tên sinh viên) kể chung một ngày thứ Tư 14/10, xem `design/figma-build.md` mục 1. Tên sinh viên và giảng viên là nhân vật hư cấu.

**Quy ước chung cho mọi màn.**

- Trạng thái điểm danh dùng đúng chữ của FAP: “Có mặt”, “Vắng”, “Chưa điểm danh” (NT-1). Mỗi chip trạng thái luôn có chữ và biểu tượng, không chỉ màu (NT-2).
- Mỗi màn có đúng một nút chính (CMP-01 Primary), đặt ở nửa dưới màn hình (NT-6).
- Tên phòng viết dạng “P.205” ở cả hai vai trò. Tên buổi học viết “Mã môn · Slot n · Phòng” khi cần đủ thông tin, “Mã môn · Phòng” trên thẻ của sinh viên.
- Màn có thanh điều hướng dưới (CMP-04) là màn cấp một: SC-02 và SC-07 của giảng viên, SC-09 và SC-14 của sinh viên. Các màn khác là màn lồng, có nút quay lại trên app bar.
- Huy hiệu số trên tab “Báo sai”: với giảng viên là số báo sai chưa xử lý trong ngày; với sinh viên là số báo sai có kết quả mới mà chưa mở xem (`design/final-ui-review.md` mục 3).

## Tổng quan

| Mã | Màn hình | Vai trò | Cấp | Flow | Nhu cầu | Tiêu chí |
|---|---|---|---|---|---|---|
| SC-01 | Đăng nhập | Cả hai | Gốc | FL-1, FL-2 | — | — |
| SC-02 | Lịch dạy hôm nay | GV | Tab “Hôm nay” | FL-1, FL-3 | N-04, N-11 | TC-3 |
| SC-03 | Phiên điểm danh | GV | Lồng | FL-1 | N-04 | TC-1 |
| SC-04 | Đối chiếu sĩ số | GV | Lồng | FL-1 | N-04 | TC-7 |
| SC-05 | Kiểm tra ngẫu nhiên | GV | Lồng | FL-1 | N-04 | TC-7 |
| SC-06 | Xem lại và xác nhận | GV | Lồng | FL-1 | N-03, N-11 | TC-1, TC-3 |
| SC-07 | Báo sai hôm nay | GV | Tab “Báo sai” | FL-3 | N-01 | TC-2, TC-3 |
| SC-08 | Chi tiết báo sai | GV | Lồng | FL-3 | N-01 | TC-2 |
| SC-09 | Hôm nay | SV | Tab “Hôm nay” | FL-2 | N-01, N-10 | TC-4 |
| SC-10 | Quét mã | SV | Lồng | FL-2 | N-01 | TC-4 |
| SC-11 | Kết quả quét | SV | Lồng | FL-2 | N-01 | TC-4 |
| SC-12 | Chi tiết buổi học | SV | Lồng | FL-2 | N-01 | TC-5 |
| SC-13 | Gửi báo sai | SV | Lồng | FL-2 | N-01 | TC-5 |
| SC-14 | Báo sai của tôi | SV | Tab “Báo sai” | FL-2, FL-3 | N-01 | TC-5 |
| SC-15 | Hướng dẫn đơn khiếu nại | SV | Lồng | FL-2 | N-06 | TC-6 |

Trong mục “Trạng thái” của từng màn, trạng thái nào có frame trên trang 03 thì ghi tên frame. Mọi trạng thái `ux/user-flow.md` liệt kê đều đã có frame; danh sách 8 frame vẽ thêm ngày 14/10 ở cuối tài liệu.

---

## SC-01 · Đăng nhập

**Mục đích.** Cho giảng viên và sinh viên vào ứng dụng bằng đúng email họ dùng để vào FAP, rồi tách vai trò theo tài khoản. Màn nói ngay từ đầu rằng ứng dụng bổ trợ FAP, không thay FAP (D-12, NT-7).

**Flow.** Điểm vào của FL-1 (giảng viên) và FL-2 (sinh viên). Đăng nhập xong: tài khoản giảng viên tới SC-02, tài khoản sinh viên tới SC-09.

**Nội dung từ trên xuống.**
1. Biểu tượng ứng dụng (không dùng logo FPT, NT-7).
2. Tiêu đề “Điểm danh buổi học” và dòng phụ “Ứng dụng bổ trợ FAP cho giảng viên và sinh viên FPTU TP.HCM”.
3. Banner lỗi (chỉ ở trạng thái lỗi).
4. Dòng hướng dẫn “Dùng email bạn đã đăng ký với trường: email @fpt.edu.vn hoặc Gmail cá nhân.”
5. Nút “Đăng nhập bằng Google”.
6. Dòng chú thích “Ứng dụng không thay FAP. Kết quả điểm danh vẫn lưu trên FAP.”

**Hành động chính.** “Đăng nhập bằng Google”.

**Trạng thái.**
- Mặc định: frame “SC-01 · Đăng nhập”.
- Lỗi tài khoản: frame “SC-01 · Đăng nhập · Lỗi tài khoản”. Banner lỗi nói rõ email nào chưa đăng ký với trường và cách sửa: “tran.an@gmail.com chưa được đăng ký với FPTU. Đăng nhập lại bằng email bạn đã đăng ký với trường.”
- Đang đăng nhập: frame “SC-01 · Đăng nhập · Đang đăng nhập (CMP-01 Loading)”. Nút chính chuyển sang biến thể Loading của CMP-01 (chỉ có vòng quay, chữ ẩn; trình đọc màn hình đọc “Đang đăng nhập”). Nút không bấm lại được, các phần khác giữ nguyên.

**Quy tắc.**
- Nhận đúng email mà FAP nhận: giảng viên dùng email @fpt.edu.vn do trường cấp; sinh viên dùng email đã đăng ký với trường, với các khóa mới là Gmail cá nhân khai lúc nhập học, không phải email @fpt.edu.vn (CR-41, nguồn ở `design/final-ui-review.md`). Email không có trong danh sách của trường thì báo lỗi, không đoán theo đuôi email.
- Cả hai loại email đều là tài khoản Google, nên một nút “Đăng nhập bằng Google” dùng được cho cả hai vai trò. Ứng dụng không có ô mật khẩu riêng.
- Phạm vi chỉ cơ sở TP.HCM, nên màn không hỏi chọn cơ sở như trang đăng nhập FAP.

## SC-02 · Lịch dạy hôm nay

**Mục đích.** Trang chủ của giảng viên. Trả lời ba câu hỏi mà không phải mở thêm màn nào: hôm nay có những slot nào, slot nào cần điểm danh ngay, kết quả của slot đã dạy đã lên FAP chưa (TC-3).

**Flow.** FL-1 bắt đầu ở đây (“Mở điểm danh” hoặc “Mở từ xa”). FL-1 quay về đây sau khi xác nhận. FL-3 bắt đầu khi tab “Báo sai” có huy hiệu.

**Nội dung từ trên xuống.**
1. App bar: “Hôm nay” và ngày giờ hiện tại, ví dụ “Thứ 4, 14/10 · 06:58”.
2. Các nhóm thẻ slot theo thời gian (D-25): “Đang diễn ra”, “Sắp tới”, “Đã xong”. Tiêu đề nhóm kèm số thẻ, ví dụ “Sắp tới · 3”. Nhóm không có thẻ thì ẩn.
3. Mỗi thẻ slot (CMP-03): “Mã môn · Slot n · Phòng”, chip giờ, chip trạng thái (nếu đã có), một dòng mô tả.
4. Thẻ của slot sắp diễn ra kế tiếp có hai nút: “Mở từ xa” (phụ) và “Mở điểm danh” (chính).
5. Thanh điều hướng dưới: “Hôm nay”, “Báo sai” (huy hiệu số nếu có báo sai chưa xử lý).

**Hành động chính.** “Mở điểm danh” trên thẻ slot kế tiếp. Khi không còn slot cần điểm danh, màn không có nút chính; thẻ đang chờ điền lên FAP là chỗ chạm để thử lại.

**Trạng thái.**
- Mặc định 06:58, chưa điểm danh slot 1: frame “SC-02 · Lịch dạy hôm nay”.
- Đang tải: frame “SC-02 · Lịch dạy hôm nay · Đang tải (CMP-07 skeleton)”. Skeleton giữ đúng hình thẻ slot để màn không nhảy khi dữ liệu về (CR-28).
- Chờ điền lên FAP, 07:15: frame “… · Sau slot 1, chờ điền lên FAP”. Dòng mô tả nói lý do và việc cần làm: “Đã xác nhận 07:12. Mở laptop để extension điền lên FAP” (NT-5).
- Đã lên FAP, 07:17: frame “… · Sau slot 1, đã lên FAP”, dòng mô tả “Đã lên FAP lúc 07:16 · 31 có mặt, 1 vắng”.
- Có 2 báo sai mới, 12:05: frame “… · Có báo sai mới”, huy hiệu 2 trên tab “Báo sai”.
- Còn 1 báo sai, 12:06: frame “… · Còn 1 báo sai”, huy hiệu 1.
- Đã xử lý hết, 12:08: frame “… · Đã xử lý hết báo sai”, không có huy hiệu.
- QR đang mở: frame “SC-02 · Lịch dạy hôm nay · QR đang mở” (07:03). Thẻ slot có chip “QR còn 1:52” và dòng “28/32 đã quét · QR tự đóng lúc 07:05. Chạm để xem phiên”; chạm thẻ để quay lại SC-03.
- Đã đóng, chờ xác nhận: frame “SC-02 · Lịch dạy hôm nay · Chờ xác nhận (mở từ xa, K1b)” (07:06). Chip “Chờ xác nhận”, dòng “Mở từ xa · QR đã đóng 07:05, 30/32 đã quét. Vào lớp để đối chiếu sĩ số”; chạm thẻ để vào SC-04.

**Quy tắc.**
- Thẻ chia nhóm theo giờ hiện tại so với giờ của slot, giống hệt cách chia ở SC-09 (D-25).
- Chip giờ chỉ giữ màu cam `slot` của FAP, có chấm, khi slot đang diễn ra. Slot sắp tới và đã xong dùng chip trung tính (D-26).
- “Đã lên FAP” chỉ hiện khi extension đã điền xong; trước đó là “Chờ điền lên FAP” (NT-5, D-18).

## SC-03 · Phiên điểm danh

**Mục đích.** Cho giảng viên theo dõi phiên QR đang mở: bao nhiêu người đã quét, còn bao lâu, ai chưa quét. Rồi đóng QR để sang bước đối chiếu. Mã QR hiện trên màn hình phòng (laptop nối TV hoặc máy chiếu), không hiện trên điện thoại của giảng viên (D-19, D-24).

**Flow.** FL-1, sau “Mở điểm danh” hoặc “Mở từ xa” ở SC-02. Đi tiếp tới SC-04.

**Nội dung từ trên xuống.**
1. App bar: “PRM393 · Slot 1 · P.205”, nút quay lại.
2. Bộ đếm CMP-14: “Đã quét 28/32”, thanh tiến độ xanh lá trên nền xám (D-27), thời gian còn lại “QR còn 1:52”, chip pha “Đang mở · mã đổi sau mỗi 15 giây”.
3. Dòng nguồn mã: “Mở tại lớp · QR chiếu từ laptop của thầy” hoặc “Mở từ xa lúc 06:55 · …”.
4. “Danh sách lớp · 32”: người chưa quét lên đầu (chip “Chưa quét”), rồi người đã quét theo giờ quét (chip “Đã quét”, dòng phụ “SE190812 · quét 07:01”).
5. Nút chính ở đáy.

**Hành động chính.** “Đóng QR và kiểm tra” khi QR đang mở; “Đối chiếu sĩ số” khi QR đã đóng (CR-25); “Tôi đã vào lớp: đóng QR” ở phiên mở từ xa.

**Trạng thái.**
- QR đang mở tại lớp: frame “SC-03 · Phiên điểm danh”.
- Dialog đóng QR sớm (overlay, CMP-06 Confirmation): “Đóng QR sớm?”, “Còn 4 sinh viên chưa quét và QR còn 1:52. Người đến sau sẽ được ghi tay ở bước xem lại.”, nút “Hủy” và “Đóng QR”.
- QR đã đóng: frame “… · QR đã đóng (CR-25)”. Chip, chấm và chữ đổi cùng lúc: “QR đã đóng”, “Đã đóng lúc 07:05”.
- Mở từ xa (K1b): frame “… · Mở từ xa (K1b)”. Điện thoại không hiện mã: “Mã đang hiện trên màn hình lớp P.205. Điện thoại này không hiện mã, để mã không bị chụp gửi ra ngoài.” Không có danh sách lớp, chỉ có bộ đếm.
- QR đã đóng của phiên mở từ xa: frame “… · QR đã đóng, mở từ xa (K1b)”, dòng nguồn “Mở từ xa lúc 06:55 · mã hiện trên màn hình lớp P.205”.
- Trang web “Màn hình lớp P.205” (1280 × 720) chạy trên TV của phòng: tên phòng, môn và slot, hướng dẫn quét, QR, “12/32 đã quét”, và câu “Trang này chỉ mở được trên TV của phòng P.205…”.
- Kiểm 412 dp: frame “SC-03 · Phiên điểm danh · 412 dp”.
- Sắp đóng (dưới 30 giây): frame “SC-03 · Phiên điểm danh · QR sắp đóng (CMP-14 Sắp đóng)”. CMP-14 ở biến thể “Sắp đóng”: chip “QR còn 0:20” màu warning, kèm chữ “Sắp đóng · còn 20 giây” để không dựa vào màu.
- Laptop chưa kết nối: frame “SC-03 · Phiên điểm danh · Laptop chưa kết nối”. Bộ đếm 0/32, dòng chế độ “Mở tại lớp · laptop phòng P.205 chưa kết nối”, banner warning “Laptop phòng P.205 chưa kết nối nên mã chưa hiện trên màn hình lớp. Mở app desktop trên laptop, hoặc chiếu tạm mã từ điện thoại này.” và nút phụ “Chiếu tạm mã từ điện thoại”.

**Quy tắc.**
- QR tự đóng lúc giờ vào slot cộng 5 phút (slot 07:00 đóng lúc 07:05), khớp nội quy “vào lớp muộn quá 5 phút bị tính vắng”; giảng viên mở sau giờ vào slot thì QR mở đủ 5 phút từ lúc mở. Mã đổi sau mỗi 15 giây; máy chủ nhận cả mã hiện tại và mã liền trước để người dùng 4G chậm không bị từ chối oan (D-28 A). Vì vậy phiên mở từ xa lúc 06:55 hiện “QR còn 9:55”.
- Phiên mở từ xa chỉ được lên FAP sau khi giảng viên vào lớp và làm xong SC-04, SC-05 (UX-INTEGRITY, D-24).
- Danh sách dài cuộn được, bộ đếm và nút chính đứng yên.

## SC-04 · Đối chiếu sĩ số

**Mục đích.** Bắt quét hộ bằng một phép so sánh đơn giản: số lượt quét so với số người đang ngồi trong phòng. Giảng viên chỉ đếm người, không gọi tên (lớp L3 của UX-INTEGRITY, TC-7).

**Flow.** FL-1, sau khi đóng QR ở SC-03. Đi tiếp tới SC-05.

**Nội dung từ trên xuống.**
1. App bar “Đối chiếu sĩ số”, nút quay lại.
2. Hướng dẫn: “Đếm số người đang ngồi trong phòng, kể cả người chưa quét. Không cần gọi tên.”
3. Ô “Số người trong phòng” có nút “−” và “+”.
4. Ba số: “Đã quét”, “Trong phòng”, “Chênh”.
5. Câu giải thích kết quả so sánh.
6. Danh sách cần xem: người chưa quét (khi khớp) hoặc lượt quét bị gắn cờ (khi lệch).
7. Nút chính.

**Hành động chính.** “Kiểm tra ngẫu nhiên”.

**Trạng thái.**
- Mặc định, 31 người và 30 lượt quét: frame “SC-04 · Đối chiếu sĩ số (L3)”. “Chênh −1” màu chữ thường. Danh sách “Chưa quét · 2” có Phạm Thu Hà (mất 4G) và Võ Minh Tâm (hết pin), cả hai chip “Trong phòng”. Banner: “Có 2 người chưa quét đang ngồi trong phòng, nên lẽ ra chỉ có 29 lượt quét. Dư 1 lượt quét không có người: kiểm tra ngẫu nhiên để tìm.” Đây là cách L3 bắt quét hộ khi con số nhìn qua không lệch nhiều (CR-44).
- Số quét lớn hơn số người: frame “… · Số quét lớn hơn số người”. “Chênh +1” màu danger. Danh sách “Lượt quét cần xem · 2” chỉ ra lượt quét cùng thiết bị và lượt quét sát lúc QR đóng.
- Số quét nhỏ hơn số người: frame “SC-04 · Đối chiếu sĩ số · Số quét nhỏ hơn số người”. 30 quét, 32 người, “Chênh −2” màu chữ thường. Banner: “Thiếu 2 lượt quét, bằng số người chưa quét đang ngồi trong phòng. Ghi tay họ ở bước xem lại. Vẫn kiểm tra ngẫu nhiên vì số thiếu có thể che một lượt quét hộ.” Hai dòng chưa quét có chip “Trong phòng”. Nút vẫn là “Kiểm tra ngẫu nhiên” (FL-1: nhánh “Nhỏ hơn” vẫn đi qua SC-05).

**Quy tắc.** Màu đỏ chỉ dùng khi số quét lớn hơn số người, vì đó mới là dấu hiệu quét hộ (D-27). Lượt quét bị gắn cờ luôn có lý do bằng chữ ở dòng riêng (CR-24).

## SC-05 · Kiểm tra ngẫu nhiên

**Mục đích.** Bắt quét hộ mà sĩ số không lộ ra: chọn ngẫu nhiên 3 người trong số đã quét, giảng viên gọi tên, nhìn mặt và so với ảnh FAP (lớp L4, TC-7).

**Flow.** FL-1, sau SC-04. Đi tiếp tới SC-06.

**Nội dung từ trên xuống.**
1. App bar “Kiểm tra ngẫu nhiên”.
2. Hướng dẫn: “Gọi tên từng người, nhìn mặt và so với ảnh FAP. Ba người được chọn ngẫu nhiên trong số đã quét.”
3. Tiến độ “Đã kiểm tra 1/3”.
4. Banner kết quả (khi có người không có mặt).
5. Ba thẻ (CMP-15): ảnh FAP, tên, mã SV, giờ quét, hai nút “Đúng người” và “Không có mặt”.
6. Nút chính.

**Hành động chính.** “Xem lại và xác nhận”. Nút tắt cho tới khi kiểm đủ 3 người, kèm dòng “Kiểm tra đủ 3 người để tiếp tục”.

**Trạng thái.**
- Đang kiểm, 1/3: frame “SC-05 · Kiểm tra ngẫu nhiên (L4)”.
- Đã kiểm 3/3, có một người không có mặt: frame “… · Đã kiểm tra 3/3”. Banner: “Hoàng Mai Linh không có mặt nhưng có lượt quét lúc 07:02. Lượt quét này sẽ được ghi Vắng.”

**Quy tắc.** Chỉ chọn trong số người đã quét. Người không quét không thể nằm trong danh sách kiểm tra (CR-36). Khi phát hiện một người không có mặt, FL-1 cho kiểm thêm 3 người; prototype đi thẳng sang SC-06.

## SC-06 · Xem lại và xác nhận

**Mục đích.** Chốt kết quả trước khi gửi lên FAP. Màn nói rõ đã đối chiếu sĩ số và đã kiểm tra ngẫu nhiên chưa (NT-3), cho ghi tay người đến muộn, rồi báo đúng trạng thái điền lên FAP (NT-5).

**Flow.** FL-1, sau SC-05. Kết thúc FL-1: về SC-02.

**Nội dung từ trên xuống.**
1. App bar “Xem lại và xác nhận” (sau khi xác nhận đổi thành “Kết quả điểm danh”).
2. Ba số: “Có mặt 31”, “Vắng 1”, “Cần xử lý 0”.
3. Hai dòng kiểm: “Đã đối chiếu sĩ số: 31 người lúc 07:06”, “Đã kiểm tra ngẫu nhiên 3/3”.
4. Nhóm “Ghi tay · 2”: người được ghi tay kèm giờ và lý do, ví dụ “SE190655 · ghi tay 07:08 · hết pin”.
5. Nút phụ “Ghi tay thêm sinh viên”.
6. Nhóm “Vắng · 1” kèm lý do: “quét 07:02 · không có mặt khi kiểm tra”.
7. Nút chính.

**Hành động chính.** “Xác nhận và gửi lên FAP”; sau khi xác nhận mà chưa lên FAP là “Thử điền lại”.

**Trạng thái.**
- Xem lại: frame “SC-06 · Xem lại và xác nhận”.
- Dialog xác nhận (overlay, CMP-06 Confirmation): “Xác nhận gửi lên FAP?”, “31 có mặt, 1 vắng. Extension trên laptop sẽ điền kết quả vào FAP. Sinh viên vẫn báo sai được đến 23:59 hôm nay.”
- Sheet ghi tay: frame “… · Sheet Ghi tay thêm sinh viên”. Giải thích sheet dùng cho ai, và vì sao lúc này không còn ai để ghi.
- Chờ điền lên FAP (NT-5): frame “… · Chờ điền lên FAP (NT-5)”. “Đã xác nhận lúc 07:12. Chờ điền lên FAP: laptop của thầy đang tắt. Mở laptop, extension sẽ tự điền.” Nút “Về lịch dạy” và “Thử điền lại”.
- Đã lên FAP: frame “… · Đã lên FAP”. “Đã lên FAP lúc 07:16. Sinh viên thấy trạng thái chính thức trên FAP.”
- Kiểm 412 dp: frame “SC-06 · Xem lại và xác nhận · 412 dp”.
- Còn cờ chưa xử lý (“Cần xử lý” lớn hơn 0): frame “SC-06 · Xem lại và xác nhận · Còn lượt quét cần xem (NT-3)”, đi tiếp nhánh “lớn hơn” (30 quét, 29 người). Ba số “Có mặt 28”, “Vắng 2”, “Cần xử lý 2”. Nhóm “Cần xem · 2”: mỗi lượt quét bị gắn cờ có hai nút “Có mặt” và “Vắng” ngay dưới dòng. Nút chính tắt, phía trên có dòng “Chọn Có mặt hoặc Vắng cho 2 lượt quét cần xem để xác nhận.” (NT-3).

**Quy tắc.** Tổng “Có mặt” và “Vắng” luôn bằng sĩ số lớp. Mỗi lần ghi tay lưu kèm giờ.

## SC-07 · Báo sai hôm nay

**Mục đích.** Một hộp duy nhất cho mọi lời báo sai trong ngày, thay cho email và Zalo rời rạc (N-01). Giảng viên biết còn bao nhiêu ca chưa xử lý mà không phải mở từng ca (TC-3).

**Flow.** FL-3. Vào từ tab “Báo sai” hoặc thông báo. Đi tới SC-08.

**Nội dung từ trên xuống.**
1. App bar “Báo sai”, dòng phụ nói hạn hoặc tình trạng: “Hôm nay · xử lý trước 23:59”, “Hôm nay · đã xử lý hết”.
2. Nhóm “Mới · n”: thẻ báo sai chưa xử lý (CMP-03): tên sinh viên và buổi, chip giờ, chip “Đang ghi: Vắng”, lời sinh viên và giờ gửi.
3. Nhóm “Đã xử lý · n”: thẻ đã sửa (“Đã sửa: Có mặt”) hoặc đã từ chối (“Giữ Vắng”).
4. Thanh điều hướng dưới, huy hiệu bằng số thẻ trong nhóm “Mới”.

**Hành động chính.** Chạm một thẻ trong nhóm “Mới” để mở SC-08.

**Trạng thái.**
- Có 2 báo sai mới: frame “SC-07 · Báo sai hôm nay”, huy hiệu 2.
- Sau khi từ chối Linh: frame “… · Sau khi từ chối”, huy hiệu 1.
- Sau khi sửa Vy: frame “… · Sau khi sửa Vy”, huy hiệu 1.
- Đã xử lý hết: frame “… · Đã xử lý hết”, không có huy hiệu.
- Trống (CMP-08): frame “… · Trống (CMP-08)”. “Hôm nay không có báo sai nào”, nút “Về lịch dạy”.

**Quy tắc.** Chip giờ trên thẻ báo sai dùng biến thể trung tính, vì buổi học đã qua (D-26). Tiêu đề nhóm cùng kiểu với D-25.

## SC-08 · Chi tiết báo sai

**Mục đích.** Cho giảng viên đủ bằng chứng để quyết trong một màn: ảnh FAP, lượt quét, kết quả kiểm tra ngẫu nhiên, lời sinh viên. Rồi sửa hoặc từ chối trong 3 lần chạm (TC-2).

**Flow.** FL-3, từ SC-07. Quay về SC-07 sau khi quyết.

**Nội dung từ trên xuống.**
1. App bar “Chi tiết báo sai”, nút quay lại.
2. Ảnh FAP, tên, mã SV, chip trạng thái đang ghi.
3. Bảng bằng chứng: “Buổi”, “Giờ quét” (giờ, hoặc “Không có (mất mạng 09:33)”), “Kiểm tra” (“Không có mặt lúc 07:07” hoặc “Không được chọn”).
4. “Lời sinh viên · gửi 09:40” và nội dung lời báo.
5. Dòng “Sinh viên nhận kết quả ngay khi thầy chọn”.
6. Hai nút: “Từ chối” (phụ, destructive) và “Sửa thành Có mặt” (chính).

**Hành động chính.** “Sửa thành Có mặt”.

**Trạng thái.**
- Có bằng chứng không có mặt: frame “SC-08 · Chi tiết báo sai · Hoàng Mai Linh (bằng chứng: không có mặt)”.
- Không có bằng chứng ngược: frame “… · Ngô Thanh Vy (mất mạng)”.
- Dialog từ chối (overlay, CMP-06 Destructive): “Từ chối báo sai của Hoàng Mai Linh?”, lý do sẽ gửi cho sinh viên, nút “Hủy” và “Từ chối”.
- Đã sửa: frame “… · Đã sửa”. “Đã sửa thành Có mặt. Extension sẽ điền lại lên FAP; sinh viên đã được báo.” Nút “Về danh sách báo sai”.
- Đã từ chối: frame “SC-08 · Chi tiết báo sai · Đã từ chối (Giữ Vắng)”. Banner trung tính “Đã từ chối, giữ Vắng. Sinh viên đã nhận lý do (không có mặt khi kiểm tra ngẫu nhiên lúc 07:07) và hướng dẫn gửi đơn khiếu nại trên FAP.”, chip “Giữ Vắng”, một nút “Về danh sách báo sai”. Prototype: dialog Từ chối → frame này → “Về danh sách báo sai” → SC-07.

**Quy tắc.** Lý do từ chối lấy từ bằng chứng có sẵn và được gửi kèm hướng dẫn đơn khiếu nại (SC-15). Bằng chứng “Kiểm tra” chỉ có khi sinh viên đã quét và được chọn kiểm tra ngẫu nhiên (CR-36). Prototype chỉ nối nhánh khớp bằng chứng (CR-34).

## SC-09 · Hôm nay (sinh viên)

**Mục đích.** Trang chủ của sinh viên. Cho thấy trạng thái của từng buổi hôm nay ngay đầu màn, nút quét mã khi có phiên đang mở, và mốc báo sai khi có buổi bị ghi Vắng (TC-4, NT-4).

**Flow.** FL-2 bắt đầu và kết thúc ở đây.

**Nội dung từ trên xuống.**
1. App bar “Hôm nay” và ngày giờ.
2. Banner hạn (chỉ khi có buổi Vắng còn hạn báo sai): “Còn 3 giờ để báo sai, hạn 23:59 hôm nay”.
3. Các nhóm thẻ “Đang diễn ra”, “Sắp tới”, “Đã xong” (D-25). Mỗi thẻ: “Mã môn · Phòng”, chip giờ, chip trạng thái, dòng mô tả (“Quét lúc 07:01 · Đã lên FAP”, “Chưa tới giờ học”).
4. Link “Báo sai điểm danh” dưới thẻ Vắng còn hạn.
5. Vùng đáy: dòng nói phiên nào đang mở và nút “Quét mã điểm danh”.
6. Thanh điều hướng dưới.

**Hành động chính.** “Quét mã điểm danh”. Nút chỉ bật khi có phiên đang mở; khi tắt, dòng phía trên nói lý do.

**Trạng thái.**
- Có phiên đang mở, 07:01: frame “SC-09 · Hôm nay (sinh viên) · Có phiên đang mở”. Dòng đáy “PRM393 · P.205 đang mở điểm danh”.
- Đã quét, chờ xác nhận, 07:02: frame “… · Đã quét, chờ xác nhận”. Chip “Chờ xác nhận”, nút quét tắt, dòng “Bạn đã quét PRM393 lúc 07:01”.
- Không có phiên mở, 09:20: frame “SC-09 · Hôm nay (sinh viên)”. Dòng “Chưa có phiên điểm danh nào đang mở”, nút tắt.
- Buổi tối có buổi Vắng, 20:58: frame “… · Buổi tối, có buổi Vắng”. Banner hạn và link báo sai; không có nút quét.
- Báo sai có kết quả chưa xem, 21:22: frame “… · Báo sai có kết quả (K3)”, huy hiệu 1, MAS291 “Có mặt · Đã sửa sau báo sai”.
- Đã xem kết quả: frame “… · Báo sai có kết quả, đã xem”, không có huy hiệu.
- Báo sai bị từ chối: frame “… · Báo sai bị từ chối”, MAS291 vẫn “Vắng · Báo sai bị từ chối”.
- Kiểm 412 dp: frame “… · Buổi tối, có buổi Vắng · 412 dp”.

**Quy tắc.** Chip “Có mặt” và “Vắng” chỉ hiện sau khi giảng viên xác nhận. Trước đó là “Chưa điểm danh” hoặc “Chờ xác nhận”. Banner hạn chỉ hiện khi có buổi Vắng còn hạn.

## SC-10 · Quét mã

**Mục đích.** Quét QR trên màn hình lớp nhanh nhất có thể, và nhắc rằng điểm danh hộ là gian lận ngay lúc quét (D-21 B).

**Flow.** FL-2, từ “Quét mã điểm danh” ở SC-09. Đi tới SC-11.

**Nội dung từ trên xuống.**
1. App bar “Quét mã điểm danh”, nút đóng.
2. Khung camera, dòng hướng dẫn “Đưa mã QR trên màn hình lớp vào khung”.
3. Dòng nhắc “Điểm danh hộ là gian lận học tập. Giảng viên sẽ kiểm tra ngẫu nhiên.”
4. Nút phụ “Không quét được?”.

**Hành động chính.** Không có nút: camera tự nhận mã và chuyển sang SC-11.

**Trạng thái.**
- Camera đang mở: frame “SC-10 · Quét mã”.
- Chưa có quyền camera (CMP-09): frame “… · Chưa có quyền camera”. “Ứng dụng cần camera để quét mã trên màn hình lớp. Mở Cài đặt và cho phép Camera, rồi quay lại.” Nút “Mở Cài đặt”. Trạng thái này dùng cho cả lần đầu chưa cấp và khi đã bị từ chối quyền.

**Quy tắc.** “Không quét được?” mở sheet hướng dẫn (xem SC-11), không có cách điểm danh thay thế, để không mở lại cửa điểm danh từ xa (CR-17).

## SC-11 · Kết quả quét

**Mục đích.** Nói ngay kết quả quét mà không cần chạm thêm: đã ghi nhận lúc mấy giờ, hoặc vì sao không được và làm gì tiếp (TC-4, F-08).

**Flow.** FL-2, sau SC-10. Thành công thì về SC-09; mã hết hạn thì quét lại.

**Nội dung từ trên xuống.**
1. App bar “Kết quả quét”.
2. Biểu tượng và tiêu đề kết quả.
3. Một đoạn nói nguyên nhân bằng lời thường và việc cần làm.
4. Bảng thông tin (khi có): môn, phòng, giờ quét chính xác tới giây.
5. Nút chính và, ở các lỗi không tự sửa được, nút phụ “Không quét được?”.

**Hành động chính.** “Về Hôm nay” (thành công và các lỗi kết thúc), “Quét lại” (mã hết hạn), “Thử lại” (mất mạng).

**Trạng thái.**
- Đang xác thực (loading, CMP-07 Spinner): “Đang xác thực mã…”.
- Thành công: “Đã ghi nhận lúc 07:01”, chip “Chờ xác nhận”, “Giảng viên sẽ đối chiếu và xác nhận. Trạng thái chính thức hiện trên FAP sau khi xác nhận.”
- Mã hết hạn: “Mã đã hết hạn”, “Mã đổi sau mỗi 15 giây. Quét lại mã đang hiện trên màn hình lớp.”
- Mất mạng: “Chưa gửi được”, nói cách bật mạng và giơ tay báo giảng viên nếu vẫn lỗi.
- Đã quét rồi: “Bạn đã quét buổi này rồi”, nói giờ của lượt đầu.
- Không có trong lớp: “Bạn không có trong danh sách lớp này”, nói mã thuộc lớp nào.
- Máy đã dùng cho tài khoản khác: “Máy này đã điểm danh cho tài khoản khác” (một máy một người, D-21 B).
- QR đã đóng: “Phiên điểm danh đã đóng”, chỉ sang ghi tay kèm giờ đến (N-03).
- Sheet “Không quét được?” (overlay): “Báo giảng viên ngay trong giờ”, giơ tay để được ghi tay; hết giờ học thì dùng báo sai trước 23:59.

**Quy tắc.** Thành công không có nghĩa là “Có mặt”: màn chỉ nói “Đã ghi nhận” và “Chờ xác nhận”, vì giảng viên còn đối chiếu và kiểm tra (NT-5, D-21).

## SC-12 · Chi tiết buổi học

**Mục đích.** Cho sinh viên thấy trạng thái chính thức của một buổi và đủ thông tin để quyết có báo sai không, kèm hạn (NT-4).

**Flow.** FL-2, chạm thẻ buổi ở SC-09. Đi tới SC-13 (còn hạn) hoặc SC-15 (đã qua hạn).

**Nội dung từ trên xuống.**
1. App bar “MAS291 · Slot 2”, nút quay lại.
2. “Trạng thái trên FAP”: ngày và chip trạng thái.
3. Bảng thông tin: môn, phòng, giờ học, giảng viên, lượt quét.
4. Dòng hạn và nút chính.

**Hành động chính.** “Báo sai điểm danh” khi còn hạn; “Xem cách gửi đơn khiếu nại” khi đã qua hạn.

**Trạng thái.**
- Còn hạn (K3): frame “SC-12 · Chi tiết buổi học (K3)”. “Báo sai trước 23:59 hôm nay”.
- Đã qua hạn (K4): frame “… · Đã qua hạn (K4)”. “Đã qua hạn báo sai trong ngày. Gửi đơn khiếu nại trên FAP”.

**Quy tắc.** Môn thường có hạn 23:59 ngày có slot; môn LUK có hạn 2 ngày (RB-4). Nút báo sai chỉ hiện ở buổi đang ghi Vắng.

## SC-13 · Gửi báo sai

**Mục đích.** Gửi lời báo sai trong dưới 1 phút (TC-5), có sẵn mọi thông tin của buổi để sinh viên chỉ phải viết lý do.

**Flow.** FL-2, từ SC-12. Gửi xong tới SC-14.

**Nội dung từ trên xuống.**
1. App bar “Gửi báo sai”, nút quay lại.
2. Bảng đọc sẵn: buổi, ngày, đang ghi, gửi tới.
3. Ô “Lý do báo sai” (CMP-02), dòng gợi ý “Giảng viên đọc lý do này”, bộ đếm “90/200”.
4. Dòng hạn “Báo sai trước 23:59 hôm nay”.
5. Nút chính.

**Hành động chính.** “Gửi báo sai”.

**Trạng thái.**
- Nhập: frame “SC-13 · Gửi báo sai (K3)”.
- Đang gửi: frame “… · Đang gửi”, nút ở biến thể Loading.
- Mất mạng: frame “… · Mất mạng (lỗi có đường hồi phục)”. “Chưa gửi được vì mất mạng. Lý do bạn đã nhập vẫn được giữ, không phải gõ lại.” Nút “Thử gửi lại”.

**Quy tắc.** Lý do tối đa 200 ký tự, không được để trống. Gửi lỗi không xóa chữ đã nhập.

## SC-14 · Báo sai của tôi

**Mục đích.** Cho sinh viên biết lời báo đang ở bước nào (đã gửi, giảng viên đã xem, đã sửa hoặc bị từ chối) mà không phải hỏi ai (TC-5).

**Flow.** FL-2 sau SC-13; FL-3 kết thúc ở đây phía sinh viên. Bị từ chối thì đi tới SC-15.

**Nội dung từ trên xuống.**
1. App bar “Báo sai của tôi”.
2. Thẻ lời báo: “MAS291 · Slot 2”, “Thứ 4, 14/10 · gửi cô Lan Anh”.
3. Dòng thời gian (CMP-13): “Đã gửi báo sai 21:02”, “Giảng viên đã xem 21:20”, kết quả và giờ.
4. Phần kết quả: “Trạng thái trên FAP” hoặc hướng dẫn đơn khiếu nại.
5. Thanh điều hướng dưới.

**Hành động chính.** Không có ở trạng thái chờ và đã sửa. “Xem cách gửi đơn khiếu nại” khi bị từ chối. “Về Hôm nay” khi trống.

**Trạng thái.**
- Đã gửi: frame “SC-14 · Báo sai của tôi · Đã gửi (K3)”. Bước kế tiếp “Chờ giảng viên xem”.
- Đã sửa: frame “… · Đã sửa”. “Đã sửa thành Có mặt 21:22”, “Đã lên FAP”.
- Bị từ chối: frame “… · Bị từ chối”. Lý do: “em không quét mã, và lúc đối chiếu, số người trong phòng bằng số lượt quét” (CR-45).
- Trống (CMP-08): frame “… · Trống”. “Bạn chưa gửi báo sai nào”, nút “Về Hôm nay”.
- Giảng viên đã xem, chưa có kết quả: không có frame riêng. Đây là bước thứ hai trên dòng thời gian, đã thấy trong frame “Đã sửa” và “Bị từ chối”.

**Quy tắc.** Mở tab này thì huy hiệu trên tab “Báo sai” mất, vì kết quả đã được xem.

## SC-15 · Hướng dẫn đơn khiếu nại

**Mục đích.** Khi đã qua hạn hoặc bị từ chối, chỉ đúng đường duy nhất còn lại là đơn khiếu nại trên FAP, đủ để sinh viên làm mà không phải hỏi ai (TC-6, N-06). Ứng dụng không làm lại quy trình đơn.

**Flow.** FL-2, từ SC-12 (đã qua hạn) hoặc SC-14 (bị từ chối).

**Nội dung từ trên xuống.**
1. App bar “Đơn khiếu nại điểm danh”, nút quay lại.
2. Banner “Đã qua hạn báo sai trong ngày” và buổi nào cần khiếu nại.
3. “3 bước trên FAP”, điền sẵn môn, slot và ngày ở bước 2.
4. “Thời gian xử lý: Khoảng 2 ngày làm việc”, “Nơi xử lý: Phòng Quản lý Đào tạo (QLĐT)”.
5. Dòng “Mở fap.fpt.edu.vn trên trình duyệt” và nút chính.

**Hành động chính.** “Mở FAP” (mở trình duyệt).

**Trạng thái.** Một trạng thái: frame “SC-15 · Hướng dẫn đơn khiếu nại (K4)”.

**Quy tắc.** Tên mục “Thủ tục/Đơn từ”, nơi xử lý và thời gian lấy từ nguồn không chính thức (`research/02-desk/fap-edit-window.md`, V01, V02). thien cần đối chiếu với FAP thật (`design/figma-build.md` mục 4).

---

## Trạng thái vẽ thêm ngày 14/10

Bản đầu của tài liệu này liệt kê 8 trạng thái có trong `ux/user-flow.md` mà chưa có frame. Cả 8 đã được vẽ trên trang 03 ngày 14/10, mỗi frame có ghi chú bên dưới.

| Màn | Trạng thái | Frame | Nằm trên nhánh nào |
|---|---|---|---|
| SC-01 | Đang đăng nhập | “SC-01 · Đăng nhập · Đang đăng nhập (CMP-01 Loading)” | FL-1, FL-2 (bước đầu) |
| SC-02 | QR đang mở | “SC-02 · Lịch dạy hôm nay · QR đang mở” | FL-1 |
| SC-02 | Đã đóng, chờ xác nhận (mở từ xa) | “SC-02 · Lịch dạy hôm nay · Chờ xác nhận (mở từ xa, K1b)” | FL-1, K1b |
| SC-03 | Sắp đóng | “SC-03 · Phiên điểm danh · QR sắp đóng (CMP-14 Sắp đóng)” | FL-1 |
| SC-03 | Laptop chưa kết nối | “SC-03 · Phiên điểm danh · Laptop chưa kết nối” | FL-1, nhánh lỗi laptop |
| SC-04 | Số quét nhỏ hơn số người | “SC-04 · Đối chiếu sĩ số · Số quét nhỏ hơn số người” | FL-1, nhánh “Nhỏ hơn” |
| SC-06 | Còn lượt quét cần xem | “SC-06 · Xem lại và xác nhận · Còn lượt quét cần xem (NT-3)” | FL-1 (NT-3) |
| SC-08 | Đã từ chối | “SC-08 · Chi tiết báo sai · Đã từ chối (Giữ Vắng)” | FL-3, nhánh từ chối |

Trạng thái lỗi và trạng thái tải mà `ux/user-flow.md` không liệt kê (ví dụ lịch dạy trống, lỗi mạng khi lưu) vẫn chỉ được mô tả bằng chữ ở đây và trong `handoff/flutter-handoff.md`.
