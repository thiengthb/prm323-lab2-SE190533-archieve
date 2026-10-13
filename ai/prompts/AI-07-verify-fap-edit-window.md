# Prompt AI-07 — Kiểm chứng quy tắc sửa điểm danh trên FAP (nguyên văn)

Công cụ: Claude (subagent general-purpose, có WebSearch và WebFetch), 13/10/2026. Đầu ra: `research/02-desk/fap-edit-window.md`.

```text
Bạn là nhà nghiên cứu bàn giấy cho một đồ án UX. Không gọi bất kỳ tool mcp__hearthbot__ nào. Dùng WebSearch (mode "standard", kết quả mỏng thì "extended") và WebFetch.

Cần kiểm chứng một nhận định do một sinh viên FPTU cơ sở TP.HCM kể lại (chưa có văn bản): "Trên FAP, chỉ giảng viên mới sửa được điểm danh của lớp mình, và chỉ sửa được trong ngày có slot học. Qua ngày đó hệ thống tự chốt, giảng viên cũng không sửa được nữa."

Tìm bằng chứng ủng hộ, bác bỏ hoặc làm rõ, ưu tiên nguồn của Đại học FPT (fpt.edu.vn, hcmuni.fpt.edu.vn, daihoc.fpt.edu.vn, sổ tay sinh viên, hướng dẫn FAP cho giảng viên), rồi tới bài viết, diễn đàn, video, repo GitHub có mô tả FAP (ví dụ extension/tool đọc dữ liệu FAP có thể lộ trạng thái "Not yet", "Attended", "Absent", thời điểm khóa). Trả lời các câu:
1. Ai được sửa trạng thái điểm danh trên FAP (giảng viên, phòng đào tạo, ai khác)?
2. Có thời hạn sửa không (trong ngày, trong slot, N giờ, N ngày)? Sau thời hạn thì ai sửa được và bằng cách nào?
3. Quy trình khi sinh viên thấy mình bị ghi sai: email giảng viên, đơn khiếu nại trên FAP, phòng ban nào, thời hạn nộp, thời gian xử lý? Có khác biệt ở cơ sở HCM không?
4. Các trạng thái điểm danh hiển thị trên FAP (Attended, Absent, Not yet, ...) và ý nghĩa.

Quy tắc: không ghi tên hay chi tiết nhận dạng người thật; trích dẫn ≤ 25 từ có nguồn. Mỗi ý có URL, loại nguồn và độ tin cậy (Đã xác nhận / Nhiều nguồn không chính thức / Một nguồn / Không tìm thấy). Không bịa. Đánh mã nguồn từ V01. Cuối file kết luận một trong: Ủng hộ / Bác bỏ / Ủng hộ một phần (nói rõ phần nào) / Không đủ bằng chứng.

Ghi một file: /home/claude/prm323-lab2-se190533/research/02-desk/fap-edit-window.md (tiếng Việt), có bảng thuộc tính đầu file (Mã tài liệu RES-DESK-FAP, Nhãn Desk, Prompt ai/prompts/AI-07-verify-fap-edit-window.md). Trả về tóm tắt 4 dòng.
```
