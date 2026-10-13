# O-01 — Quan sát của người thiết kế

| Thuộc tính | Giá trị |
|---|---|
| Mã | O-01 |
| Người cung cấp | Thiên (SE190533), sinh viên FPTU cơ sở TP.HCM, gần 4 năm học |
| Ngày ghi | 13/10/2026 |
| Hình thức | Thien gõ trả lời mẫu tự quan sát; ghi lại nguyên ý, chia thành từng điểm |
| Nhãn | Từng điểm được gắn nhãn riêng: **Observed** (đã tận mắt thấy nhiều lần) hoặc **Reported** (biết qua người khác hoặc hiểu biết chung, chưa có văn bản xác nhận) |

> Lưu ý phương pháp: đây là quan sát **gộp qua nhiều buổi trong gần 4 năm**, không phải ghi chép 3 buổi cụ thể như mẫu yêu cầu. Giá trị: cho thấy pattern ổn định. Giới hạn: không có số đo thời gian của một buổi cụ thể.

| Mã điểm | Nội dung | Nhãn |
|---|---|---|
| O-01.1 | Slot ở cơ sở HCM dài 2 giờ 15 phút (135 phút) | Observed |
| O-01.2 | Giảng viên điểm danh bằng cách mở trang FAP và đọc tên từng sinh viên theo danh sách | Observed |
| O-01.3 | Sinh viên hô "có" hoặc ra hiệu thì giảng viên đánh Attended. Không thấy ai đáp thì giảng viên hỏi lại để xác nhận; vẫn không có thì đánh Absent | Observed |
| O-01.4 | Đọc xong danh sách, giảng viên hỏi lại một lần nữa những người đang bị Absent để điều chỉnh | Observed |
| O-01.5 | Chỉ giảng viên mới điều chỉnh được điểm danh của lớp mình | Reported |
| O-01.6 | Giảng viên chỉ điều chỉnh được trong ngày có slot học. Qua ngày đó hệ thống tự chốt, giảng viên cũng không sửa được | Reported |
| O-01.7 | Vì vậy mọi sai sót điểm danh phải được phát hiện và báo trong ngày; quá ngày thì "không còn cứu vãn được" | Reported (hệ quả của O-01.6) |
| O-01.8 | Nhiều sinh viên rớt môn vì nghỉ gần sát ngưỡng, rồi một buổi cuối bị ghi sai mà không báo kịp trong ngày, thành vượt 20% | Reported (giai thoại, không có số liệu) |

## Đối chiếu với nghiên cứu bàn giấy

| Điểm | Khớp hay mâu thuẫn | Nguồn |
|---|---|---|
| O-01.1 | Khớp với slot mới 135 phút (nguồn sinh viên tải lên); nay có thêm xác nhận từ HCM | S14 (AI-04) |
| O-01.2–O-01.4 | Lấp khoảng trống "giảng viên điểm danh thực tế thế nào", web không có nguồn | AI-04, AI-05 mục khoảng trống |
| O-01.6–O-01.7 | Mâu thuẫn một phần với quy trình khiếu nại lên phòng QLĐT (S12, S17): nếu giảng viên không sửa được sau ngày học thì sửa sau đó phải qua phòng đào tạo. Cần kiểm chứng ai sửa được sau khi hệ thống chốt | S12, S17 |
| O-01.8 | Phù hợp với giai thoại "ngủ quên slot 1 dẫn tới cấm thi" | S9, S10 |

## Ý nghĩa cho thiết kế (giả thuyết, chưa phải kết luận)

- **Cửa sổ sửa sai chỉ có trong ngày** là ràng buộc mạnh nhất tìm được tới giờ. Nếu đúng, luồng lỗi và phục hồi quan trọng nhất là "phát hiện và sửa sai trước khi hết ngày", với cả giảng viên lẫn sinh viên.
- Bước "hỏi lại những người đang Absent" (O-01.4) là cơ chế tự sửa sai giảng viên đã có sẵn. Theo định vị bổ trợ (D-12), thiết kế nên giữ bước này chứ không bỏ.
