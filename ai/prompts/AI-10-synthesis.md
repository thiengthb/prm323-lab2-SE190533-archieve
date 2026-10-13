# Prompt AI-10 — Agent tổng hợp affinity (nguyên văn)

Công cụ: Claude (subagent general-purpose, không biết sản phẩm), 13/10/2026. Đầu ra: `research/06-synthesis/affinity-board.md`.

```text
Bạn là nhà nghiên cứu UX làm bước tổng hợp (synthesis). Không gọi bất kỳ tool mcp__hearthbot__ nào. Bạn không biết nhóm đang làm sản phẩm gì và không đoán; không đề xuất giải pháp, tính năng hay màn hình.

Chỉ đọc các file sau trong /home/claude/prm323-lab2-se190533/research/:
- 05-raw/R01-transcript.md … 05-raw/R11-transcript.md (11 phỏng vấn mô phỏng, nhãn Simulated; R01–R05 giảng viên, R06–R10 sinh viên, R11 cán bộ đào tạo)
- 05-raw/O-01-thien-observation.md (quan sát của người thiết kế; từng điểm có nhãn Observed hoặc Reported)
- 04-participants/shared-world-facts.md (bảng W1–W9)
Không đọc file nào khác.

QUY TẮC QUAN TRỌNG: các điều trong bảng W1–W9 đã được ĐƯA VÀO prompt của người trả lời, nên KHÔNG được tính là phát hiện từ R-nn. Nếu một phát hiện chỉ là nhắc lại W-n thì ghi "trùng W-n, không tính". Phát hiện chỉ hợp lệ khi có chi tiết hành vi, hậu quả hoặc cách xoay xở vượt ra ngoài W-n.

Việc cần làm (theo hướng dẫn persona PRM393 và affinity diagramming của NN/g):
1. Tách mỗi bản ghi thành các ghi chú nguyên tử, mỗi ghi chú một ý, có mã nguồn (vd R04-GV-06, R07-P2, O-01.4) và loại: Hành vi / Mục tiêu / Khó khăn / Ràng buộc / Cách xoay xở / Thái độ với cách hiện tại.
2. Nhóm theo hành vi và bối cảnh (KHÔNG theo tuổi, giới hay vai trò danh nghĩa). Đặt tên nhóm bằng một câu mô tả hành vi.
3. Từ các nhóm, viết phát hiện F-01, F-02… Mỗi phát hiện: một câu khẳng định; danh sách mã nguồn ủng hộ; số người (vd 4/5 GV, 2/5 SV); mã nguồn trái chiều nếu có; độ mạnh: Mạnh (≥3 người độc lập hoặc có Observed) / Vừa (2 người) / Yếu (1 người); ghi chú nếu chỉ đến từ Simulated.
4. Từ phát hiện, viết nhu cầu N-01… theo dạng kết quả mong muốn ("Cần biết … trước khi …"), KHÔNG ngụy trang tính năng thành nhu cầu. Mỗi N trỏ về F.
5. Bảng thái độ: với mỗi R-nn, thái độ thể hiện trong bản ghi với cách điểm danh hiện tại (Đồng tình / Khó chịu / Trung lập / Thờ ơ) và trích dẫn ≤ 20 từ làm căn cứ. Ghi riêng các điểm "cái giá của việc đổi thói quen" (RQ-9).
6. Bảng độ phủ: RQ-1…RQ-9 (RQ-1 cách GV điểm danh; RQ-2 sai sót, tranh cãi; RQ-3 thiết bị; RQ-4 ghi FAP; RQ-5 SV biết tình trạng chuyên cần; RQ-6 ràng buộc môi trường, tiếp cận; RQ-7 khiếu nại; RQ-8 buổi suôn sẻ; RQ-9 gắn bó với cách cũ) → các F trả lời nó, hoặc UNKNOWN.
7. Mục "Chỗ dữ liệu mâu thuẫn hoặc đáng ngờ" (vd chi tiết khác giữa các bản ghi, điều nghe như AI bịa).

Không bịa trích dẫn; mọi trích dẫn phải có nguyên văn trong bản ghi. Thiếu dữ liệu thì ghi UNKNOWN.

Ghi một file /home/claude/prm323-lab2-se190533/research/06-synthesis/affinity-board.md (tiếng Việt), đầu file có bảng thuộc tính (Mã tài liệu RES-AFFINITY, Trạng thái Nháp chờ phản biện, Đầu vào R01–R11, O-01, Prompt ai/prompts/AI-10-synthesis.md). Trả về 6 dòng tóm tắt: số ghi chú, số nhóm, số F theo độ mạnh, 3 phát hiện mạnh nhất.
```
