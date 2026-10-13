# Nhật ký thiết kế có AI hỗ trợ

Ghi theo thứ tự thời gian. Mỗi mục: công cụ, mục đích, prompt nguyên văn (hoặc đường dẫn tới file prompt nguyên văn), đầu ra, quyết định của người thiết kế.

## Disclosure — các công cụ AI đã dùng

| # | Ngày | Công cụ | Mục đích | Bằng chứng |
|---|---|---|---|---|
| 1 | 13/10/2026 | Claude (Claude Code) | Đọc đề, đề xuất quy trình làm việc và phản biện các quyết định phạm vi | `process/00-quy-trinh-lam-viec.md`, `process/01-so-quyet-dinh.md` |
| 2 | 13/10/2026 | Claude (subagent A1) | Soạn bộ câu hỏi phỏng vấn trung lập | `research/prompts/A1-soan-bo-cau-hoi.md` → `research/01-bo-cau-hoi-v1.md` |
| 3 | 13/10/2026 | Claude (subagent A2, độc lập với A1) | Kiểm định câu hỏi dẫn dắt, sửa thành v2 | `research/prompts/A2-kiem-dinh-thien-lech.md` → `research/02-kiem-dinh-thien-lech.md`, `research/03-bo-cau-hoi-v2.md` |
| 4 | 13/10/2026 | Claude (subagent A3, WebSearch/WebFetch) | Nghiên cứu bàn giấy về quy định và bối cảnh điểm danh FPTU | `research/prompts/A3-boi-canh-fptu.md` → `research/00-boi-canh-fptu.md` |

## Mục 1 — Kiểm định thiên lệch bộ câu hỏi (13/10/2026)

- **Vấn đề:** dữ liệu phỏng vấn do AI mô phỏng (D-05) rất dễ bị câu hỏi dẫn dắt làm sai lệch.
- **AI output:** 152 câu được soi, 8 lỗi mức cao, 28 mức trung, 60 mức thấp. Lỗi nặng nhất: các câu mặc định "có trục trặc", phần hỏi sự cố đứng trước câu hỏi về buổi suôn sẻ, RQ2 có 13 câu trong khi RQ8 chỉ có 3.
- **Quyết định:** chấp nhận bản v2. Lý do: theo persona guideline, người trả lời phải có cơ hội nói "mọi thứ ổn", nếu không persona sẽ phóng đại nỗi đau.

## Mục 2 — Nghiên cứu bàn giấy về bối cảnh FPTU (13/10/2026)

- **Công cụ:** Claude (subagent A3, WebSearch + WebFetch). Prompt nguyên văn: `research/prompts/A3-boi-canh-fptu.md`.
- **Output:** `research/00-boi-canh-fptu.md`, gồm 35 nguồn, mỗi nguồn có nhãn độ tin cậy. Ba phát hiện chắc chắn nhất: vắng quá 20% thì không được dự thi; đến muộn quá 5 phút bị tính vắng cả slot; cấu trúc slot và block của kỳ học.
- **Khoảng trống:** chưa rõ ai được sửa điểm danh trên FAP và hạn chót giảng viên phải điểm danh; không có mô tả trực tiếp cách giảng viên điểm danh trên lớp; không đọc được confession và Facebook.
- **Quyết định:** dùng hồ sơ này để cá nhân hóa người trả lời mô phỏng, không dùng để thay thế dữ liệu phỏng vấn. Chọn cơ sở TP.HCM vì đó là cơ sở của người thiết kế.
