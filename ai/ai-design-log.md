# Nhật ký thiết kế có AI hỗ trợ

Ghi theo thứ tự thời gian, mỗi lần dùng AI có một mã `AI-nn` (xem `process/conventions.md`). Mỗi mục: công cụ, mục đích, prompt nguyên văn (hoặc đường dẫn tới file prompt nguyên văn), đầu ra, quyết định của người thiết kế.

## Disclosure — các công cụ AI đã dùng

| Mã | Ngày | Công cụ | Mục đích | Bằng chứng |
|---|---|---|---|---|
| AI-01 | 13/10/2026 | Claude (Claude Code) | Đọc đề, đề xuất quy trình làm việc và phản biện các quyết định phạm vi | `process/work-plan.md`, `process/decision-log.md` |
| AI-02 | 13/10/2026 | Claude (subagent) | Soạn bộ câu hỏi phỏng vấn trung lập | `ai/prompts/AI-02-interview-guide.md` → `research/03-instruments/interview-guide-v1.md` |
| AI-03 | 13/10/2026 | Claude (subagent độc lập với AI-02) | Kiểm định câu hỏi dẫn dắt, sửa thành v2 | `ai/prompts/AI-03-bias-audit.md` → `research/03-instruments/bias-audit-v1.md`, `research/03-instruments/interview-guide-v2.md` |
| AI-04 | 13/10/2026 | Claude (subagent, WebSearch/WebFetch) | Nghiên cứu bàn giấy về quy định và bối cảnh điểm danh FPTU | `ai/prompts/AI-04-desk-research-fptu.md` → `research/02-desk/fptu-all-campuses.md` |
| AI-05 | 13/10/2026 | Claude (subagent, WebSearch/WebFetch) | Nghiên cứu bàn giấy riêng cơ sở TP.HCM (D-11) | `ai/prompts/AI-05-desk-research-hcm.md` → `research/02-desk/fptu-hcm.md` |

## AI-03 — Kiểm định thiên lệch bộ câu hỏi (13/10/2026)

- **Vấn đề:** dữ liệu phỏng vấn do AI mô phỏng (D-05) rất dễ bị câu hỏi dẫn dắt làm sai lệch.
- **AI output:** 152 câu được soi, 8 lỗi mức cao, 28 mức trung, 60 mức thấp. Lỗi nặng nhất: các câu mặc định "có trục trặc", phần hỏi sự cố đứng trước câu hỏi về buổi suôn sẻ, RQ2 có 13 câu trong khi RQ8 chỉ có 3.
- **Quyết định:** chấp nhận bản v2. Lý do: theo persona guideline, người trả lời phải có cơ hội nói "mọi thứ ổn", nếu không persona sẽ phóng đại nỗi đau.

## AI-04 — Nghiên cứu bàn giấy về bối cảnh FPTU (13/10/2026)

- **Công cụ:** Claude (subagent, WebSearch + WebFetch). Prompt nguyên văn: `ai/prompts/AI-04-desk-research-fptu.md`.
- **Output:** `research/02-desk/fptu-all-campuses.md`, gồm 35 nguồn, mỗi nguồn có nhãn độ tin cậy. Ba phát hiện chắc chắn nhất: vắng quá 20% thì không được dự thi; đến muộn quá 5 phút bị tính vắng cả slot; cấu trúc slot và block của kỳ học.
- **Khoảng trống:** chưa rõ ai được sửa điểm danh trên FAP và hạn chót giảng viên phải điểm danh; không có mô tả trực tiếp cách giảng viên điểm danh trên lớp; không đọc được confession và Facebook.
- **Quyết định:** dùng hồ sơ này để cá nhân hóa người trả lời mô phỏng, không dùng để thay thế dữ liệu phỏng vấn. Phạm vi chỉ cơ sở TP.HCM (D-11); nguồn của cơ sở khác chỉ dùng khi là quy định toàn trường.

## AI-05 — Nghiên cứu bàn giấy riêng cơ sở TP.HCM (13/10/2026)

- **Lý do:** D-11 giới hạn phạm vi ở cơ sở HCM, trong khi AI-04 tổng hợp cho mọi cơ sở.
- **Output:** `research/02-desk/fptu-hcm.md`, gồm 43 nguồn mới H01–H43 và bảng đánh dấu nguồn nào của AI-04 áp dụng cho HCM. Chỉ 3/35 nguồn cũ nói rõ là của HCM; ngưỡng vắng 20% và FAP là quy định toàn trường. Chi tiết riêng HCM: Block A, wifi FPTU_Students, F-Bus chạy trước mỗi slot, kẹt xe ở Lê Văn Việt và Xa lộ Hà Nội, không có KTX, trạng thái "Not yet" trên FAP sau giờ học.
- **Khoảng trống:** khung giờ slot hiện hành ở HCM, ai được sửa điểm danh, hạn chót giảng viên điểm danh, cách giảng viên điểm danh thực tế trên lớp. Confession và fanpage HCM chặn công cụ đọc.
- **Quyết định:** thêm chi tiết HCM vào từng thẻ người trả lời. Các khoảng trống được giao cho phần tự quan sát O-nn (`research/05-raw/O-self-observation-template.md`), vì chỉ người học thật ở HCM mới trả lời được.
