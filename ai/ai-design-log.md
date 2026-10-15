# Nhật ký thiết kế có AI hỗ trợ

Phần chi tiết bên dưới xếp theo thứ tự thời gian (vài mục liền nhau được gộp), mỗi lần dùng AI có một mã `AI-nn` (xem `process/conventions.md`). Mỗi mục: công cụ, mục đích, prompt nguyên văn (hoặc đường dẫn tới file prompt nguyên văn), đầu ra, quyết định của người thiết kế.

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
| AI-13 | 14/10/2026 | Claude (phiên chính) | Viết persona P-01, P-02, Coverage Matrix, IA, FL-1..FL-3, danh sách SC-01..SC-13 từ RES-AFFINITY-v2 (bản v1; AI-17 và D-29 đổi sau) | Không có prompt riêng; đầu vào là các mã F, N, RB trong tài liệu → `ux/persona.md`, `ux/user-flow.md` |
| AI-14 | 14/10/2026 | Claude (subagent, WebSearch/WebFetch) | Tra cứu giao diện, màu, trạng thái điểm danh của FAP và myFAP | `ai/prompts/AI-14-fap-visual-identity.md` → `research/02-desk/fap-visual-identity.md` |
| AI-15 | 14/10/2026 | Claude (subagent, WebSearch/WebFetch) | Tra cứu kiểu gian lận khi điểm danh QR và biện pháp | `ai/prompts/AI-15-qr-fraud-research.md` → `research/02-desk/qr-attendance-fraud.md` |
| AI-16 | 14/10/2026 | Claude (phiên chính, Python/PIL) | Đo mã màu từ 6 ảnh FAP của thien, tính tương phản WCAG, viết DESIGN.md v2 theo màu FAP | Không có prompt riêng; đầu vào là ảnh chụp (không lưu vào repo) → `research/05-raw/O-02-fap-ui-screenshots.md`, `design/DESIGN.md`, `design/design-brief-audit.md` mục 6 |
| AI-17 | 14/10/2026 | Claude (phiên chính) | Viết lại FL-1 theo QR (D-19), danh sách SC-01..SC-15, kịch bản K1b, K5 và TC-7 | Không có prompt riêng; đầu vào là UX-INTEGRITY, D-19 → `ux/user-flow.md` v2, `ux/persona.md` v2 |
| AI-18 | 14/10/2026 | Claude soạn, thien chạy trên Google Stitch | Prompt Stitch đầu tiên cho SC-03, SC-09, SC-11 từ DESIGN.md v2 | `ai/prompts/AI-18-stitch-first-prompt.md` → `assets/stitch/IT-0-*.png` |
| AI-19 | 14/10/2026 | Claude (phiên chính) | AI critique cho IT-0: CR-01..CR-09 (SC-03), CR-10..CR-17 (SC-09, SC-11); đề xuất hệ component shadcn + Lucide (D-22) | Không có prompt riêng → `design/stitch-critique-it0.md`, `design/component-system.md` |
| AI-20 | 14/10/2026 | Claude soạn, thien chạy trên Stitch | Prompt IT-1 cho SC-03, SC-09, SC-11: sửa CR-01..CR-17, áp dụng D-22 (shadcn + Lucide) và D-23 (Inter) | `ai/prompts/AI-20-stitch-it1.md` → `assets/stitch/IT-1-*.png` |
| AI-21 | 14/10/2026 | Claude (phản biện), thien chạy Stitch | Kiểm IT-1 bằng ảnh và mã HTML: 15/16 phát hiện đã sửa, 6 phát hiện mới CR-18..CR-23; soạn prompt IT-2 | `design/stitch-critique-it1.md`; `ai/prompts/AI-21-stitch-it2.md` → `assets/stitch/IT-2-*.png` |
| AI-22 | 14/10/2026 | Claude (phản biện) | Kiểm IT-2: 5/5 phát hiện đã sửa; đánh giá lại CR-19 nhờ đọc mã HTML (bộ đếm chạy thật); thêm CR-24, CR-25; chốt vòng Stitch | `design/stitch-critique-it2.md` |
| AI-23 | 14/10/2026 | Claude (Figma MCP, Plugin API) | Dựng file Figma IT-3: biến token, text/effect style, 15 component, 15 màn và 25 biến thể, 3 user flow có liên kết, prototype 3 luồng; áp dụng CR-21, CR-24, CR-25 | Không có prompt riêng; đầu vào là DESIGN.md v2, user-flow v2 → file Figma, `design/figma-build.md`, `assets/figma/` |
| AI-24 | 14/10/2026 | Claude (Figma MCP, Plugin API) | Vòng IT-3b theo góp ý của thien: sửa huy hiệu CMP-04, rà nghĩa từng thành phần, thống nhất giờ trong một ngày, thêm 6 biến thể và trang web Màn chiếu P.205, dựng lại 3 User Flow và prototype 9 điểm bắt đầu | Không có prompt riêng; đầu vào là góp ý của thien, D-19, D-21, gợi ý của GVHD → file Figma, `design/figma-build.md` mục 6, D-24 |
| AI-25 | 14/10/2026 | Claude (phản biện, Figma MCP) | Vòng IT-3c: phản biện 7 góp ý của thien về Final UI, tự rà chữ trên 55 frame và tìm 7 lỗi logic; áp D-25, D-26, D-27; nối lại FL-3 và FL-2 báo sai | Không có prompt riêng; đầu vào là góp ý của thien → `design/final-ui-review.md`, `design/figma-build.md` mục 8, D-25..D-27 |
| AI-26 | 14/10/2026 | Claude (phiên chính, Figma MCP) | S5: viết screen-spec, design-decisions (đo a11y bằng script), flutter-handoff; phản biện D-28 (5 phút, 15 giây) theo câu hỏi của thien; sửa SC-01 theo CR-41; vẽ 8 trạng thái còn thiếu và nối vào prototype (12 điểm bắt đầu, 84 frame) | Không có prompt riêng; đầu vào là user-flow v2 và góp ý của thien → `design/screen-spec.md`, `design/design-decisions.md`, `handoff/flutter-handoff.md`, `design/figma-build.md` mục 8.2, D-28 |
| AI-27 | 15/10/2026 | Claude (phiên chấm độc lập) | Chấm lại toàn bài theo đề, guideline thuyết trình, persona guideline, UI Simplicity checklist; ra điểm và danh sách lỗi. Phiên chính sửa theo đó: CR-43..CR-48 | `ai/prompts/AI-27-independent-review.md`, `design/final-ui-review.md` mục 4 |
| AI-28 | 15/10/2026 | Claude soạn, thien chạy trên Stitch | Bổ sung bốn màn FL-1 (SC-02, SC-04, SC-05, SC-06) và vòng IT-3 trên Stitch cho SC-03. **Chờ chạy** | `ai/prompts/AI-28-stitch-flow1-and-it3.md` → `assets/stitch/IT-0b-*.png`, `IT-3-SC-03.png` (chưa có) |

## AI-01, AI-02 — Quy trình và bộ câu hỏi (13/10/2026)

- **AI-01:** Claude đọc đề và đề xuất quy trình theo phiên (`process/work-plan.md`), phản biện các quyết định phạm vi. Mọi lựa chọn được ghi trong `process/decision-log.md` với người chốt là thien.
- **AI-02:** subagent soạn bộ câu hỏi phỏng vấn v1 (`research/03-instruments/interview-guide-v1.md`), prompt nguyên văn ở `ai/prompts/AI-02-interview-guide.md`. Bộ này được kiểm định ở AI-03 trước khi dùng.

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

## AI-12 — Bản tổng hợp v2 (13/10/2026)

- Áp dụng 35/43 dòng phản biện, 8 dòng áp dụng một phần có lý do. Chỉ 4 vế còn Mạnh (F-01a, F-02a, F-07b, F-10a), đều có Desk hoặc Observed đi kèm. Còn 11 nhu cầu; N-15 chuyển thành ràng buộc RB-1.

## AI-13 — Persona và user flow v1 (14/10/2026)

- **Việc làm:** Claude dựng persona P-01, P-02, Coverage Matrix, IA, FL-1..FL-3 và danh sách màn SC-01..SC-13 trong phiên chính, từ RES-AFFINITY-v2. Mỗi trường persona ghi mã bằng chứng (F, N, RB). Không có prompt riêng.
- **Ngưỡng ban đầu và các lần đổi:** bản v1 đặt ngưỡng 4 phút, 30 giây, 2 chạm, nhãn **Assumed**. Các ngưỡng này đã đổi hai lần: AI-17 viết lại tiêu chí theo luồng QR (TC v2, thêm TC-7) và tăng danh sách màn từ 13 lên 15; D-29 (15/10) đo TC-1 từ lúc QR đóng tới lúc xác nhận xong, ngưỡng 2 phút 30 giây. Giá trị hiện hành ở `ux/persona.md` mục 11.
- **Quyết định của người thiết kế:** D-16 A, D-17 A (thien, 14/10/2026).

## AI-14 — Tra cứu nhận diện thị giác của FAP (14/10/2026)

- **Lý do:** D-20 cần biết FAP trông thế nào trước khi chọn bảng màu, để không lấy nhầm màu thương hiệu của tập đoàn FPT.
- **Prompt:** `ai/prompts/AI-14-fap-visual-identity.md` (subagent, WebSearch/WebFetch).
- **Output:** `research/02-desk/fap-visual-identity.md`. Lần tra cứu **không** lấy được mã màu nào: FAP cần đăng nhập, mọi ảnh chụp đều bị chặn tải. Phát hiện chính là FAP vừa đổi giao diện khoảng 09/2026, nên tài liệu tách FAP cũ và FAP mới.
- **Quyết định:** chưa chọn màu. Tài liệu kết thúc bằng danh sách 7 ảnh cần thien chụp, dẫn sang AI-16.

## AI-15 — Tra cứu gian lận khi điểm danh bằng QR (14/10/2026)

- **Lý do:** D-19 đưa QR chiếu chung vào thiết kế, nên phải biết trước các kiểu gian lận và chi phí UX của từng biện pháp.
- **Prompt:** `ai/prompts/AI-15-qr-fraud-research.md` (subagent, WebSearch/WebFetch).
- **Output:** `research/02-desk/qr-attendance-fraud.md`, gồm bảng nguồn, các kiểu gian lận, biện pháp và chi phí. Mục 7 ghi thẳng những gì **không tìm thấy**: bằng chứng sinh viên Việt Nam gửi QR qua Zalo, tỷ lệ gian lận trước và sau biện pháp, chế tài cụ thể của FPTU.
- **Quyết định:** D-21 B (một máy một người, đối chiếu sĩ số, kiểm tra ngẫu nhiên 3 sinh viên bằng ảnh FAP). Kiểm tra Wi-Fi trường hoặc GPS (phương án C) bị bỏ.

## AI-16 — Đo màu FAP từ ảnh chụp, viết DESIGN.md v2 (14/10/2026)

- **Đầu vào:** 6 ảnh chụp FAP mới và mã nguồn HTML của 3 trang do thien cung cấp, tài khoản sinh viên cơ sở HCM. Ảnh **không** đưa lên repo vì có họ tên, email và lịch học cá nhân.
- **Việc làm:** Claude lấy mẫu điểm ảnh bằng Python (PIL) để đo mã màu, tính tương phản WCAG cho từng cặp chữ và nền. Không có prompt riêng.
- **Output:** `research/05-raw/O-02-fap-ui-screenshots.md` (Observed), `design/DESIGN.md` v2, `design/design-brief-audit.md` mục 6.
- **Quyết định:** D-20 C (thien, 14/10): theo màu chính `#4254BA`, nền và nghĩa màu trạng thái của FAP, sửa những cặp chưa đạt WCAG.

## AI-17 — Viết lại FL-1 theo QR (14/10/2026)

- **Lý do:** thien chọn D-19 B và góp ý rằng khi đã có QR thì cả lớp quét cùng lúc, gọi tên từng người là mất thời gian; GVHD gợi ý giảng viên mở điểm danh từ điện thoại và laptop tự hiện QR.
- **Output:** `ux/user-flow.md` v2 (FL-1 theo QR, danh sách màn SC-01..SC-15), `ux/persona.md` v2 (kịch bản K1b mở từ xa, K5 sinh viên quét, TC-7). Đầu vào là UX-INTEGRITY và D-19, không có prompt riêng.

## AI-18 — Prompt Stitch đầu tiên, IT-0 (14/10/2026)

- **Prompt:** `ai/prompts/AI-18-stitch-first-prompt.md`, ba prompt P1 (SC-03), P2 (SC-09), P3 (SC-11). Claude soạn, thien chạy trên Google Stitch (D-07).
- **Brief Stitch nhận:** DESIGN.md v2 ở commit 2aa48f8 và 29d7fd3, tức trước D-22 và D-23: lúc đó font còn là Roboto và component theo Material 3. Vì vậy IT-0 dùng Roboto; Inter chỉ có từ IT-1.
- **Kích hoạt:** thien gửi ảnh chụp kết quả hai lần; lần thứ hai kèm lời: "đây là toàn bộ ảnh mà mình dùng promt của file AI-18-stich-first prompt…" (14/10).
- **Output:** `assets/stitch/IT-0-SC-03.png`, `IT-0-SC-09.png`, `IT-0-SC-11.png`, mã HTML trong `assets/stitch/code/`, và `IT-0-stitch-generated-DESIGN.md` do Stitch tự sinh.

## AI-19 — Critique IT-0 và hệ component (14/10/2026)

- **Cách phản biện:** theo tiêu chí đặt sẵn ở bước 6 của AI-18 (heuristic Nielsen, WCAG 2.1, persona P-01, ít nhất 5 phát hiện). Không có prompt riêng cho bước critique.
- **Output:** `design/stitch-critique-it0.md`: CR-01..CR-09 cho SC-03, CR-10..CR-17 cho SC-09 và SC-11. Sau khi đo lại trên mã HTML, CR-07 là báo động nhầm.
- **Góp ý của thien dẫn tới D-22:** "…layout stich trên đây thiết kế không elegant… tôi sẽ áp dụng nhiều nhất các component shadcn, color plate, rồi thêm thư viện lucide icon… khi ra được hội đồng thì tôi cần phải có một lý do để tại sao chọn phần thiết kế mà tôi đề cập" (14/10). Claude kiểm mã nguồn app FAP Attendance thật và thấy sản phẩm đã dùng shadcn, Lucide và Inter (`design/component-system.md` mục 0), nên đề xuất D-22 B và D-23 B trên thẻ quyết định.
- **Quyết định:** thien chọn D-22 B và D-23 B, rồi duyệt toàn bộ critique: "1. tôi duyệt toàn bộ. tôi chưa đọc hiểu được toàn bộ vì quá nhiều vấn đề, tôi sẽ theo đề xuất của bạn. và sẽ kiểm tra bằng cách trực quan nhìn kết quả." (14/10).

## AI-20, AI-21 — Stitch IT-1 và critique IT-1 (14/10/2026)

- **AI-20:** prompt `ai/prompts/AI-20-stitch-it1.md` sửa CR-01..CR-17 và áp dụng D-22, D-23. thien chạy trên chính các màn IT-0 để giữ before/after, rồi gửi lại zip: "lần này tôi đã làm file zip chưa tất cả, bạn hãy check lại giúp tôi" (14/10).
- **AI-21 (critique):** Claude kiểm IT-1 bằng ảnh và đo trên mã HTML (cỡ chữ, chiều cao nút, mã màu, font). 15/16 phát hiện cũ đã sửa, thêm 6 phát hiện mới CR-18..CR-23 (`design/stitch-critique-it1.md`). Tiêu chí như AI-19.
- **AI-21 (prompt IT-2):** `ai/prompts/AI-21-stitch-it2.md`. thien hỏi "SC-11 có 2 màn hình it1 lận, thì tôi sẽ chọn màn nào", nên prompt được sửa lại cho rõ màn đích (commit 24a2a3b).
- **Quyết định:** thien duyệt CR-18..CR-23 và báo đã chạy IT-2: "1. duyệt 2. trên là zip tôi đã chạy xong AI-21-stitch-it2.md" (14/10).

## AI-22 — Critique IT-2 và chốt vòng Stitch (14/10/2026)

- **Output:** `design/stitch-critique-it2.md`. 5/5 phát hiện đã sửa. Đọc mã HTML cho thấy bộ đếm của Stitch chạy thật, nên CR-19 được đánh giá lại. Thêm CR-24 (lý do gắn cờ bị cắt ở 360 dp) và CR-25 (thiếu trạng thái "QR đã đóng"); hai điểm này chuyển sang Figma.
- **Quyết định:** thien trả lời "duyệt" (14/10). Vòng Stitch dừng ở IT-2, phần còn lại làm trên Figma (AI-23). Ngày 15/10, bản chấm độc lập chỉ ra Stitch mới phủ 3 màn và mới có 2 vòng sửa trên Stitch, nên có thêm AI-28.

## AI-23 — Dựng file Figma (14/10/2026)

- **Công cụ:** Claude gọi Figma MCP (`use_figma`, Plugin API) từ Claude Code. Theo D-07 B vì thời gian ngắn; sau đó (D-07 cập nhật 14/10) Claude thực thi cả phần còn lại, thien duyệt (`design/figma-build.md` mục 5).
- **Output:** file [Figma](https://www.figma.com/design/9yDa2ylfREmndW1mK1hf7w), ghi chép `design/figma-build.md`, ảnh `assets/figma/`.
- **Tự kiểm:** chụp lại từng màn sau khi dựng và sửa các lỗi dựng hình (thuộc tính chữ dùng chung làm mọi chip cùng một nhãn, scrim đục hẳn, hàng danh sách đè nhau, chữ cái avatar sai, ô lý do không giãn theo nội dung…). Script đọc toàn bộ reaction ở trang 06 xác nhận không có ngõ cụt.
- **Sửa nội dung nhờ đối chiếu nghiên cứu:** bản đầu của SC-15 ghi thời gian xử lý đơn là "vài ngày (Assumed)". Đối chiếu `research/02-desk/fap-edit-window.md` thì đã có nguồn V01, V02: mục Thủ tục/Đơn từ, phòng QLĐT, 2 ngày làm việc. Màn được sửa theo nguồn.
- **Khoảng trống chưa làm:** 4 trạng thái của SC-11, sheet "Không quét được?", kiểm 412 dp (`design/figma-build.md` mục 4).

## AI-24 — Sửa Figma theo góp ý (IT-3b, 14/10/2026)

- **Góp ý của thien:** huy hiệu số bị che; mỗi thành phần phải có mục đích; prototype phải nối trọn vẹn; xử lý thế nào khi giảng viên mở QR lúc đang ở ngoài (GVHD gợi ý một trang web hiện QR; thien lo nút "Điểm danh" trong app làm SV ở nhà cũng điểm danh được).
- **Phản biện của Claude:** đồng ý với lo ngại của thien, nút trong app không chứng minh có mặt. Đề xuất trang web gắn với phòng thay vì link công khai (D-24; thien chọn A trên thẻ quyết định).
- **Tự kiểm:** rà từng frame và bỏ 6 thành phần không có việc gì để làm (mục 6 của `design/figma-build.md`). Phát hiện mâu thuẫn giờ: SC-11 báo SV quét MAS291 lúc 09:31 trong khi SC-09 buổi tối ghi MAS291 "không có lượt quét". Sửa bằng một dòng thời gian chung cho cả ngày. Script đọc reaction trang 06: 59 frame, 9 điểm bắt đầu, 0 đích hỏng, không frame nào thiếu lối ra.
- **Điều chỉnh sau góp ý thứ hai của thien:** phòng học HCM đa số có TV màn hình lớn nên đổi "Màn chiếu" thành "Màn hình phòng"; bỏ việc gắn cờ lượt quét ngoài Wi-Fi trường vì trùng D-21 C mà thien đã bỏ (D-24 vòng 2). Theo D-07 cập nhật, Claude thực thi phần Figma còn lại, thien duyệt.

## AI-25 — Rà Final UI và prototype (IT-3c, 14/10/2026)

- **Góp ý của thien:** tên màn và mô tả đè nhau; skeleton trắng; nhóm thẻ lộn xộn; thẻ các pha trông như nhau; thanh tiến độ đen không nói gì; tab Báo sai không có huy hiệu; "đừng để mắc những lỗi sơ đẳng".
- **Phản biện của Claude:** đồng ý cả 7 vấn đề, phản biện hai cách làm: tô chip giờ theo trạng thái điểm danh thì thẻ có hai chip cùng màu nói một điều; tô đỏ phần chưa quét thì đỏ mất nghĩa "Vắng, lỗi". thien chọn phương án A ở cả 3 thẻ D-25, D-26, D-27.
- **Tự kiểm:** đọc toàn bộ chữ trên 55 frame và đối chiếu với dòng thời gian một ngày. Lỗi nặng nhất Claude tự để lại: nhánh "Sửa thành Có mặt" áp cho người vừa bị phát hiện quét hộ (Linh), tức prototype thưởng cho gian lận mà D-21 muốn chặn. Script đọc reaction trang 06: 63 frame, 0 đích hỏng, không có ngõ cụt.

## AI-26 — Đặc tả, handoff và các trạng thái còn thiếu (S5, 14/10/2026)

- **Việc làm:** viết `design/screen-spec.md` (15 màn), `design/design-decisions.md` (DD-1..DD-10 và checklist a11y có số đo), `handoff/flutter-handoff.md` (2 bảng ánh xạ, 6 mục cho mỗi màn). Viết spec làm lộ ra 8 trạng thái user flow có nêu mà Figma chưa vẽ; thien yêu cầu vẽ hết (16:05) và nối vào prototype (16:27).
- **Góp ý của thien và phản biện:** thien chỉ ra SC-01 sai cách đăng nhập của sinh viên K19 trở đi (CR-41). thien hỏi 5 phút và 15 giây đã được phản biện chưa; Claude thừa nhận là chưa, phản biện và tìm ra lỗi đồng hồ ở nhánh mở từ xa (CR-42); thien chọn D-28 A.
- **Tự kiểm:** ở SC-04 nhánh "Nhỏ hơn", Claude suýt viết "không có lượt quét thừa"; câu này sai vì 1 lượt quét hộ cộng 3 người chưa quét cũng ra −2, nên màn vẫn dẫn sang kiểm tra ngẫu nhiên như FL-1. Script đọc reaction trang 06 sau khi nối: 84 frame, 0 đích hỏng, 0 frame chồng nhau, mọi frame có lối vào và lối ra; bỏ 4 điểm bắt đầu thừa do Figma tự tạo.
- **Chưa làm:** hai nút Có mặt / Vắng ở SC-06 còn lượt cần xem và nút "Chiếu tạm mã từ điện thoại" chưa có màn đích (`design/figma-build.md` mục 3). Ngày 15/10 các nút này được ghi rõ là nút ngoài kịch bản demo (CR-48).

## AI-27 — Chấm độc lập toàn bài (15/10/2026)

- **Prompt:** `ai/prompts/AI-27-independent-review.md`, ghi nguyên văn yêu cầu của thien. Bản giao việc phiên chính gửi cho phiên chấm không được lưu, nên không chép lại ở đây.
- **Cách làm:** một phiên Claude mới, không mang ngữ cảnh của phiên chính, chấm theo đề Lab 2, guideline thuyết trình, persona guideline và UI Simplicity checklist.
- **Output:** điểm và danh sách lỗi theo năm đợt sửa. Phiên chính kiểm lại từng phát hiện trước khi sửa: phần lớn đúng, một phát hiện về CR-01 là đọc nhầm nhưng slide vẫn được ghi lại cho rõ.
- **Quyết định:** thien chọn sửa cả năm đợt trước buổi thuyết trình, và chọn D-29 A cho TC-1 (15/10). Các sửa đổi ghi ở `design/final-ui-review.md` mục 4 (CR-43..CR-48).

## AI-28 — Stitch bổ sung FL-1 và vòng IT-3 trên Stitch (15/10/2026, đang chờ chạy)

- **Prompt:** `ai/prompts/AI-28-stitch-flow1-and-it3.md`. Phần A sinh SC-02, SC-04, SC-05, SC-06; phần B sửa SC-03 về trạng thái "QR đã đóng" (CR-24, CR-25, CR-31).
- **Nói rõ:** phần A chạy **sau** khi Figma đã có, nội dung lấy từ screen-spec. Đây là bản để so với Figma, không phải bản Stitch nghĩ ra luồng.
- **Trạng thái:** chờ thien chạy và gửi zip. Kết quả sẽ ghi ở đây và critique ở `design/stitch-critique-it3.md` (từ CR-49).
