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
| AI-06 | 13/10/2026 | Claude (11 subagent độc lập, mỗi người một agent) | Phỏng vấn mô phỏng R01–R11 | `ai/prompts/AI-06-respondents/Rnn.md` → `research/05-raw/Rnn-transcript.md` |
| AI-07 | 13/10/2026 | Claude (subagent, WebSearch/WebFetch) | Kiểm chứng quy tắc "chỉ sửa điểm danh trong ngày" (O-01.6) | `ai/prompts/AI-07-verify-fap-edit-window.md` → `research/02-desk/fap-edit-window.md` |
| AI-08 | 13/10/2026 | Claude (11 subagent độc lập với người trả lời) | Đặt 3 câu đào sâu cho từng bản ghi | `ai/prompts/AI-08-probers/Rnn.md` → `research/05-raw/Rnn-probes.md` |
| AI-09 | 13/10/2026 | Claude (tiếp tục agent AI-06) | Người trả lời trả lời câu đào sâu | `ai/prompts/AI-09-probe-answer-message.md` → mục "Đào sâu (vòng 2)" trong bản ghi |
| AI-10 | 13/10/2026 | Claude (subagent độc lập) | Tổng hợp affinity từ R01–R11 và O-01 | `ai/prompts/AI-10-synthesis.md` → `research/06-synthesis/affinity-board.md` |
| AI-11 | 13/10/2026 | Claude (subagent độc lập với AI-10) | Phản biện bản tổng hợp | `ai/prompts/AI-11-synthesis-critic.md` → `research/06-synthesis/synthesis-critique.md` |
| AI-12 | 13/10/2026 | Claude (subagent độc lập với AI-10, AI-11) | Áp dụng phản biện, tạo bảng affinity v2 | `ai/prompts/AI-12-synthesis-v2.md` → `research/06-synthesis/affinity-board-v2.md` |
| AI-13 | 14/10/2026 | Claude (phiên chính) | Viết persona P-01, P-02, Coverage Matrix, IA, FL-1..FL-3, danh sách SC-01..SC-13 từ RES-AFFINITY-v2 | Không có prompt riêng; đầu vào là các mã F, N, RB trong tài liệu → `ux/persona.md`, `ux/user-flow.md` |
| AI-14 | 14/10/2026 | Claude (subagent, WebSearch/WebFetch) | Tra cứu giao diện, màu, trạng thái điểm danh của FAP và myFAP | `ai/prompts/AI-14-fap-visual-identity.md` → `research/02-desk/fap-visual-identity.md` |
| AI-15 | 14/10/2026 | Claude (subagent, WebSearch/WebFetch) | Tra cứu kiểu gian lận khi điểm danh QR và biện pháp | `ai/prompts/AI-15-qr-fraud-research.md` → `research/02-desk/qr-attendance-fraud.md` |
| AI-16 | 14/10/2026 | Claude (phiên chính, Python/PIL) | Đo mã màu từ 6 ảnh FAP của thien, tính tương phản WCAG, viết DESIGN.md v2 theo màu FAP | Không có prompt riêng; đầu vào là ảnh chụp (không lưu vào repo) → `research/05-raw/O-02-fap-ui-screenshots.md`, `design/DESIGN.md`, `design/design-brief-audit.md` mục 6 |
| AI-17 | 14/10/2026 | Claude (phiên chính) | Viết lại FL-1 theo QR (D-19), danh sách SC-01..SC-15, kịch bản K1b, K5 và TC-7 | Không có prompt riêng; đầu vào là UX-INTEGRITY, D-19 → `ux/user-flow.md` v2, `ux/persona.md` v2 |
| AI-18 | 14/10/2026 | Claude soạn, thien chạy trên Google Stitch | Prompt Stitch đầu tiên cho SC-03, SC-09, SC-11 từ DESIGN.md v2 | `ai/prompts/AI-18-stitch-first-prompt.md` → `assets/stitch/IT-0-*.png` (P1 đã chạy, ảnh tạm `IT-0-SC-03-preview.png`) |
| AI-19 | 14/10/2026 | Claude (phiên chính) | AI critique cho IT-0 (SC-03): 9 phát hiện CR-01..CR-09; đề xuất hệ component shadcn + Lucide (D-22) | Không có prompt riêng → `design/stitch-critique-it0.md`, `design/component-system.md` |

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

## AI-06, AI-08, AI-09 — Phỏng vấn mô phỏng (13/10/2026)

- **Quy trình:** 11 người trả lời là 11 agent riêng, mỗi agent chỉ thấy thẻ hồ sơ của mình, bảng sự thật chung W1–W9 và bộ câu hỏi v2 kèm phần bổ sung RQ-9. Sau đó 11 agent người hỏi khác đọc từng bản ghi và đặt 3 câu đào sâu, rồi người trả lời trả lời tiếp trong cùng ngữ cảnh.
- **Output:** `research/05-raw/R01…R11-transcript.md` (mỗi bản 14 câu chính và 3 câu đào sâu), `research/05-raw/R01…R11-probes.md`.
- **Kiểm soát:** điều gì có trong W1–W9 không được tính là phát hiện từ R-nn (D-15).

## AI-07 — Kiểm chứng quy tắc sửa điểm danh (13/10/2026)

- **Vấn đề:** O-01.6 ("chỉ sửa trong ngày, qua ngày hệ thống tự chốt") là ràng buộc thiết kế mạnh nhất, nhưng mới ở mức Reported.
- **Output:** `research/02-desk/fap-edit-window.md`, 16 nguồn V01–V16. Kết luận: **ủng hộ một phần**. Sinh viên phải báo giảng viên trong ngày học (2 ngày với môn LUK). Quá hạn thì vẫn còn đường nộp "Đơn khiếu nại điểm danh" trên FAP gửi phòng QLĐT, xử lý trong 2 ngày làm việc. Không có nguồn nào xác nhận FAP tự khóa về mặt kỹ thuật sau ngày học.
- **Quyết định:** sửa cách diễn đạt từ "quá ngày là không còn cứu vãn" thành "quá ngày thì sửa sai chuyển từ giảng viên (nhanh, trong ngày) sang đơn khiếu nại lên phòng QLĐT (chậm hơn, cần bằng chứng)". Luồng phục hồi trong thiết kế phải có cả hai nhánh.

## AI-10, AI-11 — Tổng hợp và phản biện (13/10/2026)

- **AI-10:** 180 ghi chú nguyên tử, 26 nhóm, 32 phát hiện (17 Mạnh, 11 Vừa, 4 Yếu), 15 nhu cầu. Tự hạ F-03 và F-26 vì nghi dữ liệu mô phỏng lặp mô-típ.
- **AI-11:** không có trích dẫn bịa, nhưng có nguồn bị đọc ngược nghĩa và người bị đếm ở cả hai phía. Đề nghị hạ 10 phát hiện, bỏ F-26 (tiếng vọng của W7), hạ hoặc bỏ N-05, N-07, N-10, N-15, gộp N-02 vào N-04. Chỉ F-17, F-18, F-23, F-24, F-25 đứng vững nguyên văn.
- **Nhận xét quan trọng nhất của AI-11:** dữ liệu mô phỏng không độc lập (9/11 người cùng lấy thứ Hai 12/10 làm buổi gần nhất, ca của R01 và R10 gần như soi gương, câu khuôn lặp ở 6/11 bản ghi). Vì vậy phát hiện chỉ dựa trên dữ liệu mô phỏng không được gắn nhãn Mạnh.
- **Quyết định:** D-16. Theo quy ước, v1 giữ nguyên văn; phản biện được áp dụng ở bản v2 (AI-12).

## AI-12, AI-13 — Bản tổng hợp v2, persona và flow (13–14/10/2026)

- **AI-12:** áp dụng 35/43 dòng phản biện, 8 dòng áp dụng một phần có lý do. Chỉ 4 vế còn Mạnh (F-01a, F-02a, F-07b, F-10a), đều có Desk hoặc Observed đi kèm. Còn 11 nhu cầu; N-15 chuyển thành ràng buộc RB-1.
- **AI-13:** Claude dựng persona và flow trong phiên chính, mỗi trường persona ghi mã bằng chứng. Ngưỡng của tiêu chí thành công (4 phút, 30 giây, 2 chạm) là **Assumed**, phải đo hiện trạng để so.
- **Quyết định của người thiết kế:** D-16 A, D-17 A (thien, 14/10/2026).
