# Prompt AI-12 — Áp dụng phản biện, tạo bảng affinity v2 (nguyên văn)

Công cụ: Claude (subagent general-purpose, độc lập với AI-10 và AI-11), 13/10/2026. Đầu ra: `research/06-synthesis/affinity-board-v2.md`. Quyết định liên quan: D-16.

```text
Bạn là người biên tập bản tổng hợp nghiên cứu UX. Không gọi bất kỳ tool mcp__hearthbot__ nào. Không đề xuất giải pháp, tính năng hay màn hình.

Đọc:
- /home/claude/prm323-lab2-se190533/research/06-synthesis/affinity-board.md (bản v1, đầu ra AI-10)
- /home/claude/prm323-lab2-se190533/research/06-synthesis/synthesis-critique.md (phản biện độc lập, đầu ra AI-11)
- Khi cần kiểm tra lại một điểm phản biện nêu: research/05-raw/R01…R11-transcript.md, research/05-raw/O-01-thien-observation.md, research/04-participants/shared-world-facts.md, research/02-desk/fap-edit-window.md. Không đọc file khác.

Tạo /home/claude/prm323-lab2-se190533/research/06-synthesis/affinity-board-v2.md (tiếng Việt). Không sửa v1 và bản phản biện.

Quy tắc:
1. Giữ nguyên mã F-nn và N-nn của v1 để truy vết được. Phát hiện bị bỏ thì vẫn giữ một dòng "F-nn — Đã bỏ (lý do, mã CR)". Gộp thì ghi "gộp vào F-mm".
2. Với mỗi dòng trong bảng phản biện: tự kiểm tra lại với bản ghi. Nếu đồng ý thì áp dụng; nếu không đồng ý thì giữ nguyên và ghi lý do. Ghi vào một bảng "Xử lý phản biện" (Dòng phản biện | Mã F/N | Áp dụng / Không áp dụng | Lý do).
3. Thang độ mạnh mới: phát hiện chỉ dựa trên dữ liệu Simulated tối đa là "Giả thuyết – Vừa". Chỉ được ghi "Mạnh" khi có thêm ít nhất một bằng chứng không phải Simulated (Observed O-01, hoặc Desk trong fap-edit-window.md) cùng chiều; ghi rõ bằng chứng đó.
4. Đếm lại số người cho mọi phát hiện; người vừa ủng hộ vừa trái chiều chỉ được đếm ở một phía, có ghi chú.
5. Viết lại nhu cầu N-nn cho đúng dạng nhu cầu (ai cần biết/làm được gì, trước khi nào), bỏ mọi chỗ ngầm định cách giải quyết.
6. Thêm mục cuối "Giả thuyết cần kiểm chứng với người thật": 5–8 câu, mỗi câu gắn mã F/N, dạng có thể hỏi trong cuộc trò chuyện 5 phút hoặc Google Form.
7. Đầu file có bảng thuộc tính: Mã tài liệu RES-AFFINITY-v2, Trạng thái Chờ duyệt, Đầu vào RES-AFFINITY, RES-CRITIQUE, Prompt ai/prompts/AI-12-synthesis-v2.md, Quyết định D-15, D-16.

Trả về 5 dòng tóm tắt: số F giữ / hạ / gộp / bỏ; các F còn "Mạnh" và bằng chứng; số dòng phản biện không áp dụng; danh sách N sau chỉnh; điều đáng lo nhất còn lại.
```
