# Prompt AI-15 — Tra cứu gian lận khi điểm danh bằng QR (nguyên văn)

Công cụ: Claude (subagent general-purpose, WebSearch/WebFetch), 14/10/2026. Đầu ra: `research/02-desk/qr-attendance-fraud.md`. Quyết định liên quan: D-19.

```text
Bạn là nhà nghiên cứu bảo mật và UX. Không gọi bất kỳ tool mcp__hearthbot__ nào, không dùng tool mcp__github__ nào.

Bối cảnh: lớp 30–40 sinh viên ở FPTU TP.HCM. Giảng viên chiếu một mã QR lên màn chiếu (mã đổi mỗi 15 giây, server cấp), cả lớp cùng quét bằng điện thoại, đăng nhập bằng tài khoản trường. Giảng viên có thể bấm mở điểm danh từ điện thoại khi chưa ở trong phòng, và máy tính trong phòng tự hiện QR. Sinh viên ở HCM hay dùng 4G vì wifi trường chậm. Không dùng nhận diện khuôn mặt hay theo dõi vị trí liên tục.

Tìm, mỗi điểm kèm nguồn (URL) và độ tin cậy:
1. Các kiểu gian lận đã được ghi nhận với điểm danh QR (bài báo khoa học, báo cáo trường đại học, bài báo chí, diễn đàn sinh viên Việt Nam như Reddit, Facebook group, Voz, tinh tế): chụp/gửi QR qua Zalo/Messenger, livestream, đăng nhập hộ trên máy khác, quét rồi bỏ về, giả lập GPS...
2. Các biện pháp đối phó và bằng chứng về hiệu quả + chi phí UX của từng cái: QR xoay vòng ngắn, ràng buộc một thiết bị/tài khoản, kiểm tra mạng/IP trường, geofence/GPS một lần, BLE beacon, mã số đọc to bổ sung, đối chiếu sĩ số (đếm đầu người so với số đã quét), kiểm tra ngẫu nhiên một vài sinh viên, xem ảnh sinh viên đã quét, selfie.
3. Quy định hiện hành của Đại học FPT về gian lận điểm danh và chế tài (nếu tìm thấy).
4. Các nghiên cứu so sánh thời gian điểm danh QR với gọi tên.

Ghi /home/claude/prm323-lab2-se190533/research/02-desk/qr-attendance-fraud.md (tiếng Việt). Đầu file có bảng thuộc tính: Mã tài liệu RES-DESK-QR, Trạng thái Nháp, Prompt ai/prompts/AI-15-qr-fraud-research.md. Nội dung: bảng nguồn Q01…Qnn; bảng "Kiểu gian lận | Cách làm | Nguồn"; bảng "Biện pháp | Chặn được kiểu nào | Không chặn được | Chi phí UX/riêng tư | Bằng chứng"; mục ghi riêng biện pháp nào xung đột với bối cảnh (ví dụ SV dùng 4G). Không bịa số liệu; không tìm thấy thì ghi "Không tìm thấy".

Trả về 6 dòng tóm tắt.
```
