# Prompt AI-05 — Agent nghiên cứu bàn giấy riêng cơ sở HCM (nguyên văn)

Công cụ: Claude (subagent general-purpose, có WebSearch và WebFetch), 13/10/2026. Đầu ra: `research/02-desk/fptu-hcm.md`.

```text
Bạn là nhà nghiên cứu bàn giấy cho một đồ án UX. Không gọi bất kỳ tool mcp__hearthbot__ nào. Dùng WebSearch (mode "standard", kết quả mỏng thì "extended") và WebFetch.

Phạm vi: CHỈ Đại học FPT cơ sở TP. Hồ Chí Minh (Khu Công nghệ cao, TP. Thủ Đức; mã sinh viên SE…). Chủ đề: điểm danh và chuyên cần trong buổi học. Không đề xuất giải pháp hay sản phẩm.

Đã có hồ sơ chung cho mọi cơ sở tại /mnt/project-files/design/lab02/research/00-boi-canh-fptu.md (đọc trước để không lặp). Nhiệm vụ:
1. Rà từng nguồn S1…S35 trong file đó, ghi nguồn nào áp dụng cho HCM (Chính thức HCM / Toàn trường / Cơ sở khác — không áp dụng / Không rõ).
2. Tìm thêm thông tin RIÊNG cho cơ sở HCM: khung giờ slot đang áp dụng ở HCM, tòa nhà/phòng học (Alpha, Beta, Gamma...), quy mô lớp, phòng lab, wifi/mạng trong khuôn viên, đường đi và giao thông tới Khu Công nghệ cao (xe buýt, giờ cao điểm, kẹt xe Xa lộ Hà Nội), ký túc xá, phòng ban xử lý khiếu nại điểm danh ở HCM, giảng viên thỉnh giảng ở HCM, sự kiện/quy định chuyên cần do cơ sở HCM ban hành, trang confession/fanpage của FPTU HCM (nếu đọc được).
3. Bổ sung cho các khoảng trống: ai được sửa điểm danh trên FAP, hạn chót giảng viên điểm danh, giảng viên thực tế điểm danh trên lớp thế nào (gọi tên, nhìn mặt, giấy...).

Quy tắc: chỉ tổng hợp pattern; không ghi tên, tài khoản, chi tiết nhận dạng người thật. Trích dẫn ≤ 25 từ, có nguồn, không ghi tên người viết. Mỗi ý có URL, loại nguồn (Chính thức / Báo chí / Diễn đàn-MXH / Blog) và độ tin cậy (Đã xác nhận / Nhiều nguồn không chính thức / Một nguồn / Không tìm thấy). Không bịa; không thấy thì ghi "Không tìm thấy". Đánh mã nguồn mới từ H01.

Ghi một file: /mnt/project-files/design/lab02/research/00b-boi-canh-hcm.md (tiếng Việt), gồm: (a) bảng áp dụng HCM cho S1–S35, (b) danh mục nguồn H01…, (c) phát hiện riêng HCM theo mục 2–3, (d) "Chi tiết cá nhân hóa cho nhân vật ở HCM" 10–15 gạch đầu dòng có mã nguồn, (e) khoảng trống còn lại. Trả về tóm tắt 5 dòng.
```
