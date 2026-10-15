# Chống gian lận khi điểm danh bằng QR chiếu chung

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | UX-INTEGRITY |
| Trạng thái | Đã duyệt: D-21 chốt B, áp dụng cả 4 lớp (14/10/2026) |
| Đầu vào | RES-DESK-QR (`research/02-desk/qr-attendance-fraud.md`, Q01–Q46), mô hình chống gian lận của app FAP Attendance (`docs/03-architecture-security.md`, mức A), O-01.9, O-01.10, persona P-01 |
| Quyết định liên quan | D-18, D-19, D-21 |

## 1. Bối cảnh đã chốt (D-19)

Giảng viên chiếu QR lên màn hình lớp, cả lớp quét cùng lúc, không đọc tên từng người. Giảng viên có thể bấm mở điểm danh từ điện thoại; máy tính trong phòng có app desktop tự hiện QR, kể cả khi giảng viên chưa có mặt. Kết quả được extension điền lên FAP (D-18).

**Phần được lợi rõ:** thời gian. Hai nguồn gần sĩ số FPTU nhất cho thấy gọi tên mất khoảng 3,5 phút với 22 sinh viên, quét QR khoảng 25 giây (Q04); với 30 sinh viên là 6–8 phút xuống 1–2 phút (Q08). Cả hai chỉ đo một lần, chưa phải nghiên cứu đối chứng.

## 2. Phản biện thẳng

1. **Không biện pháp kỹ thuật nào chặn hết gian lận.** Ba nguồn độc lập cùng kết luận như vậy (RES-DESK-QR mục 3). QR đổi mỗi 15 giây chặn được ảnh cũ, nhưng không chặn được ảnh gửi qua tin nhắn trong vòng 15 giây, livestream, hay cho mượn tài khoản (Q20). Chính tài liệu kiến trúc của app thật cũng ghi điều này.
2. **Bỏ đọc tên là bỏ luôn lớp kiểm soát duy nhất đang hoạt động.** Hiện nay, giảng viên đọc tên, nhìn mặt và đối chiếu ảnh FAP (O-01.3, O-01.9). Khi chuyển sang QR, việc “ai có mặt” do điện thoại sinh viên tự khai. Phải đưa lại một bước con người kiểm tra, nếu không thiết kế đổi tốc độ lấy độ chính xác. Đây đúng là điều D-12 cấm: không thêm loại lỗi mới.
3. **Mở điểm danh khi giảng viên chưa có mặt là kẽ hở lớn nhất.** Khi đó không ai đếm người, không ai nhìn mặt. Một sinh viên trong phòng có thể chụp QR gửi cho cả nhóm bạn đang ở nhà. Nếu kết quả của phiên này được đẩy thẳng lên FAP, tính năng tiện nhất lại là chỗ dễ gian lận nhất.
4. **Kiểm tra mạng trường không dùng được ở HCM.** Sinh viên hay dùng 4G vì wifi chậm (F-18, RB-2). IP 4G đi qua NAT chung của nhà mạng, định vị theo IP di động sai số trung vị 179–207 km (Q30). Bắt dùng wifi trường thì người dùng 4G bị chặn oan.
5. **GPS và selfie bị loại.** GPS trong nhà kém chính xác, giả được (Q28), và là dữ liệu vị trí. Selfie và nhận diện khuôn mặt nằm ngoài phạm vi, và là dữ liệu sinh trắc học theo Luật Bảo vệ dữ liệu cá nhân 2025 (Q39).
6. **Quy định của FPTU chưa có điều khoản riêng về điểm danh hộ** (Q35, Q36). Sức răn đe không thể dựa vào chế tài cụ thể, mà phải dựa vào **xác suất bị phát hiện**.

## 3. Đề xuất: bốn lớp, đặt nặng vào khâu giảng viên xác nhận

| Lớp | Biện pháp | Chặn được | Không chặn được | Chi phí UX | Nguồn |
|---|---|---|---|---|---|
| L1 · Nền (đã có trong app thật) | Tài khoản trường + có tên trong danh sách lớp; QR đổi mỗi 15 giây, server cấp; mỗi sinh viên một lần quét mỗi phiên | Ảnh QR cũ, người ngoài lớp, quét trùng | Gửi QR theo thời gian thực, mượn tài khoản | Gần như không | Mức A của app thật; Q03, Q04 |
| L2 · Một máy một người | Trong một phiên, một điện thoại chỉ quét được cho một tài khoản. Máy thứ hai đăng nhập tài khoản khác để quét sẽ bị gắn cờ “Cùng thiết bị” | Một bạn cầm máy quét hộ cho nhiều tài khoản | Hai người, hai máy | Thấp; cần nói rõ mục đích, không lấy dấu vân tay thiết bị ngầm | Q03; nguyên tắc riêng tư của app thật |
| L3 · Đối chiếu sĩ số | Điện thoại giảng viên hiện “Đã quét 32”. Giảng viên nhìn lớp và xác nhận số người thực tế. Lệch thì app chỉ ra ai quét cuối cùng, ai quét quá sát lúc mã đổi | Gửi QR cho người vắng (lộ ra khi số quét lớn hơn số người) | Gian lận đúng bằng số người vắng mặt mà vẫn khớp sĩ số | 10–20 giây đếm | Q31; suy luận |
| L4 · Kiểm tra ngẫu nhiên có ảnh | Sau khi đóng QR, app chọn ngẫu nhiên 3 sinh viên đã quét, hiện ảnh FAP và tên trên điện thoại giảng viên. Giảng viên gọi tên, nhìn mặt, bấm “Đúng người” hoặc “Không có mặt” | Mọi kiểu quét hộ, kể cả livestream và mượn tài khoản | Không chặn trước, chỉ phát hiện sau | Khoảng 30 giây | O-01.9; Q12, Q13 |

**Vì sao L4 đủ sức răn đe:** với lớp 32 người và 3 lần kiểm tra mỗi buổi, xác suất một người quét hộ bị chọn trong một buổi khoảng 9%. Qua 20 buổi của một môn, xác suất bị chọn ít nhất một lần là 1 − (29/32)^20 ≈ **86%**. Người gian lận gần như chắc chắn bị phát hiện trong cả môn, trong khi giảng viên chỉ mất khoảng 30 giây mỗi buổi. Đây là phép tính, chưa phải số đo thật.

**Quy tắc cho phiên mở từ xa:**
- Phiên mở khi giảng viên không ở trong phòng được gắn nhãn **“Mở từ xa”**.
- Kết quả của phiên này ở trạng thái **“Chờ giảng viên xác nhận”**. Extension **không được** điền lên FAP cho tới khi giảng viên vào phòng và làm xong L3 và L4.
- QR tự đóng lúc giờ vào slot cộng 5 phút (theo quy định muộn quá 5 phút là vắng, Q35); giảng viên mở muộn thì mở đủ 5 phút từ lúc mở. Máy chủ nhận cả mã hiện tại và mã liền trước, nên một mã có hiệu lực tối đa 30 giây (D-28 A). Người đến sau giờ đó do giảng viên ghi tay, kèm giờ đến (N-03).

**Câu nhắc trên màn quét của sinh viên:** “Điểm danh hộ là gian lận học tập. Giảng viên sẽ kiểm tra ngẫu nhiên.” Câu này ngắn, không đe dọa, và cho sinh viên biết có kiểm tra.

## 4. Những gì không làm, và lý do

| Biện pháp | Lý do không làm |
|---|---|
| Bắt dùng wifi trường, kiểm tra IP | Chặn oan sinh viên dùng 4G (F-18, Q30) |
| GPS hoặc geofence | Kém chính xác trong nhà, giả được (Q28), dữ liệu vị trí |
| Selfie, nhận diện khuôn mặt | Ngoài phạm vi; dữ liệu sinh trắc học (Q39) |
| BLE beacon | Cần phần cứng trong từng phòng; để vào roadmap |
| Mã số đọc to bổ sung | Vô tác dụng khi giảng viên mở từ xa, và tốn thời gian đọc |

## 5. Ảnh hưởng tới thiết kế

- **FL-1** viết lại: mở phiên (tại lớp hoặc từ xa), QR chiếu, theo dõi số đã quét, đóng QR, đối chiếu sĩ số, kiểm tra ngẫu nhiên, ghi tay người đến muộn, xác nhận, rồi extension điền FAP.
- **Màn mới:** sinh viên quét QR và xem kết quả quét (thành công, mã hết hạn, đã quét rồi, không có trong lớp, thiết bị đã dùng cho tài khoản khác); giảng viên kiểm tra ngẫu nhiên.
- **Tiêu chí thành công mới:** giảng viên hoàn tất từ lúc mở QR đến khi xác nhận xong trong ≤ 2 phút 30 giây với lớp 32 người (Assumed, mốc so sánh là Q08); trong kịch bản thử có cài sẵn 1 người quét hộ từ xa (số quét lớn hơn số người trong phòng), giảng viên phát hiện được độ lệch ở bước đối chiếu sĩ số (L3).
