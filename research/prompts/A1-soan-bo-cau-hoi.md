# Prompt A1 — Agent soạn bộ câu hỏi (nguyên văn)

Công cụ: Claude (subagent general-purpose), 13/10/2026. Đầu ra: `research/01-bo-cau-hoi-v1.md`.

```text
Bạn là nhà nghiên cứu UX chuyên phỏng vấn hành vi. Nhiệm vụ: soạn bộ câu hỏi phỏng vấn bán cấu trúc bằng tiếng Việt. Không gọi bất kỳ tool mcp__hearthbot__ nào. Chỉ ghi đúng 1 file đầu ra.

Bối cảnh lĩnh vực (chỉ có vậy, bạn KHÔNG được biết hay gợi ý bất kỳ giải pháp/sản phẩm/công nghệ nào): việc điểm danh trong các buổi học tại Đại học FPT (FPTU). Điểm danh được ghi trên hệ thống FAP của trường; sinh viên vắng quá 20% số buổi của môn thì không đủ điều kiện thi. Có các vai: giảng viên cơ hữu, giảng viên thỉnh giảng, sinh viên, cán bộ phòng đào tạo xử lý khiếu nại.

Câu hỏi nghiên cứu (điều nhóm muốn hiểu, KHÔNG phải để hỏi thẳng):
RQ1 Giảng viên hiện điểm danh một buổi như thế nào, từng bước, mất bao lâu, dùng công cụ gì.
RQ2 Khi nào và ở đâu xảy ra sai sót, tranh cãi (đi muộn, điểm danh hộ, ghi nhầm), sửa thế nào, ai liên quan.
RQ3 Trong giờ học và giữa các ca, mỗi vai có thiết bị gì trong tay, dùng để làm gì.
RQ4 Việc ghi điểm danh lên FAP diễn ra khi nào, ai làm, có hạn chót/hậu quả gì.
RQ5 Sinh viên biết tình trạng chuyên cần của mình bằng cách nào, làm gì khi bị ghi sai.
RQ6 Ràng buộc môi trường: mạng, phòng học, thị lực/khả năng tiếp cận, thời gian.
RQ7 Cán bộ đào tạo xử lý khiếu nại điểm danh ra sao, cần bằng chứng gì.
RQ8 Với mỗi vai, một buổi điểm danh "suôn sẻ" trông như thế nào.

Yêu cầu:
- Ba module theo vai: Giảng viên, Sinh viên, Cán bộ đào tạo; mỗi module 8–12 câu chính + gợi ý đào sâu trung lập ("Rồi sao nữa?", "Lần đó cụ thể thế nào?").
- Cấu trúc mỗi module: khởi động (bối cảnh) → kể lại LẦN GẦN NHẤT (theo 6 câu hành vi: lần gần nhất làm việc này là khi nào; kể lại từng bước; đoạn nào mất thời gian hoặc dễ sai; khi gặp trở ngại thì làm gì; dùng thiết bị/công cụ nào và vì sao; điều gì khiến họ thấy đã làm tốt) → ngoại lệ/sự cố → kết thúc ("Có điều gì tôi chưa hỏi mà anh/chị thấy quan trọng?").
- Câu hỏi mở, một ý mỗi câu, hỏi hành vi đã xảy ra, không hỏi giả định tương lai, không nêu tính năng, không dùng tính từ cảm xúc gợi ý (ví dụ không hỏi "việc đó có mất thời gian không").
- Mỗi câu ghi mã (GV-01, SV-01, CB-01) và RQ nó phục vụ.
- Thêm phần "Lời mở đầu cho người phỏng vấn" (trung lập, xin phép, nói không có câu trả lời đúng sai).

Ghi file: /mnt/project-files/design/lab02/research/01-bo-cau-hoi-v1.md (tạo thư mục nếu cần). Trả về tóm tắt 3 dòng.
```
