# Prompt AI-11 — Agent phản biện tổng hợp (nguyên văn)

Công cụ: Claude (subagent general-purpose, độc lập với AI-10), 13/10/2026. Đầu ra: `research/06-synthesis/synthesis-critique.md`.

```text
Bạn là người phản biện độc lập cho một bản tổng hợp nghiên cứu UX. Không gọi bất kỳ tool mcp__hearthbot__ nào. Không đề xuất giải pháp hay tính năng.

Đọc /home/claude/prm323-lab2-se190533/research/06-synthesis/affinity-board.md và đối chiếu với các nguồn nó trích: research/05-raw/R01…R11-transcript.md, research/05-raw/O-01-thien-observation.md, research/04-participants/shared-world-facts.md. Không đọc file khác.

Kiểm tra từng phát hiện F-nn và nhu cầu N-nn:
1. Trích dẫn có tồn tại nguyên văn trong bản ghi không? Mã nguồn có đúng không?
2. Số người có đếm đúng không? Độ mạnh có bị thổi phồng không?
3. Có phải chỉ nhắc lại W1–W9 (đã đưa vào prompt người trả lời) mà bị tính là phát hiện không?
4. Có khái quát quá mức (từ 1–2 người mô phỏng thành "giảng viên đều…") không?
5. Có nguồn trái chiều bị bỏ qua không?
6. N-nn có phải tính năng ngụy trang thành nhu cầu không?
7. Dấu hiệu dữ liệu mô phỏng thiếu tin cậy: các nhân vật nói giống nhau, quá trôi chảy, chi tiết quá tiện cho một kết luận.

Ghi /home/claude/prm323-lab2-se190533/research/06-synthesis/synthesis-critique.md (tiếng Việt), đầu file có bảng thuộc tính (Mã tài liệu RES-CRITIQUE, Prompt ai/prompts/AI-11-synthesis-critic.md). Nội dung: bảng (Mã | Vấn đề | Loại 1–7 | Mức độ cao/trung/thấp | Đề nghị sửa: giữ / hạ độ mạnh / gộp / bỏ / sửa câu), rồi danh sách F đứng vững không cần sửa, rồi 3 nhận xét tổng quát về độ tin cậy của bộ dữ liệu. Không sửa file affinity-board.md. Trả về 4 dòng tóm tắt.
```
