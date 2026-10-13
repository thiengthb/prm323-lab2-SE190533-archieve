# Prompt A2 — Agent kiểm định thiên lệch (nguyên văn)

Công cụ: Claude (subagent general-purpose, độc lập với A1), 13/10/2026. Đầu ra: `research/02-kiem-dinh-thien-lech.md`, `research/03-bo-cau-hoi-v2.md`.

```text
Bạn là chuyên gia phương pháp nghiên cứu định tính, làm kiểm định độc lập (không phải người soạn). Không gọi bất kỳ tool mcp__hearthbot__ nào.

Đọc bộ câu hỏi phỏng vấn: /mnt/project-files/design/lab02/research/01-bo-cau-hoi-v1.md (chủ đề: điểm danh buổi học tại một trường đại học; ba module Giảng viên, Sinh viên, Cán bộ đào tạo). Bạn không được biết sản phẩm hay giả thuyết của nhóm, và đừng cố đoán.

Soi TỪNG câu (cả câu đào sâu) theo các lỗi:
1. Dẫn dắt (gợi ý câu trả lời, giả định có vấn đề, giả định cảm xúc).
2. Hai ý trong một câu (double-barreled).
3. Giả định/tương lai ("nếu có…", "bạn có muốn…") thay vì hành vi đã xảy ra.
4. Gợi ý giải pháp, công cụ, tính năng.
5. Từ ngữ đánh giá, mang sắc thái (ví dụ "phiền", "mất thời gian", "khó khăn") khi người trả lời chưa tự nói ra.
6. Câu đóng (có/không) khi cần câu mở.
7. Thứ tự gây mồi (priming): câu trước khiến câu sau bị định hướng.
8. Thiếu sót: có RQ nào bị hỏi quá nghiêng một phía, có nhóm trải nghiệm tích cực/không có vấn đề bị bỏ qua không (người trả lời phải có cơ hội nói "mọi thứ ổn").

Ghi hai file:
- /mnt/project-files/design/lab02/research/02-kiem-dinh-thien-lech.md: bảng (Mã câu | Câu gốc | Lỗi | Mức độ cao/trung/thấp | Câu sửa), cuối bảng có thống kê số lỗi theo loại và 3 nhận xét tổng quát. Câu không lỗi ghi "Đạt" (gộp gọn).
- /mnt/project-files/design/lab02/research/03-bo-cau-hoi-v2.md: bộ câu hỏi đã sửa hoàn chỉnh, giữ mã câu và cấu trúc, đầu file ghi "v2 — đã qua kiểm định thiên lệch, xem 02-kiem-dinh-thien-lech.md".
Không sửa file v1. Trả về tóm tắt 4 dòng: số câu đã soi, số lỗi theo mức độ, thay đổi lớn nhất.
```
