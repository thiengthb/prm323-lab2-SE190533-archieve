# AI-29 · Báo cáo của Codex, Phần 2: đối chiếu với AI-27 (nguyên văn)

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | OpenAI Codex, thien chạy prompt Phần 2 trong `ai/prompts/AI-29-codex-independent-review.md`, kèm bản chấm AI-27 dạng PDF và đoạn ghi chú rằng AI-27 chấm commit cũ `8c62cda` |
| Nhận lúc | 15/10/2026 23:07 (giờ Việt Nam), thien gửi tệp `phan-2-doi-chieu-AI-27-va-codex.md`, không kèm lời nhắn |
| Commit Codex đối chiếu | `1242923` (cùng commit Phần 1). Codex chưa thấy hai commit sau đó: `6bf3c45` (CR-66: 73 ảnh frame, bảng liên kết prototype) và `61685f2` (sửa CR-63, CR-67, CR-68) |
| Phân loại | `ai/reviews/AI-29-triage.md` mục 7 |

Phần dưới đường kẻ là nguyên văn tệp thien gửi, không sửa chữ nào.

---

# Phần 2 — Đối chiếu AI-27 (Claude) và báo cáo Codex

## Phạm vi và nguyên tắc

- AI-27 là snapshot ở `8c62cda`; báo cáo Codex là snapshot HEAD `12429237f066d54918872cd35b48427bd88ee78b`. Giữa hai snapshot có mười commit: `56fbaf5`, `f021126`, `f0d49d7`, `1f369ce`, `93c2037`, `ddfbb23`, `53266a2`, `c8de81b`, `df63bbb`, `1242923` (`git log 8c62cda..1242923`).
- Báo cáo thứ nhất của Codex **không bị sửa**. Khi báo cáo đó đánh giá sai do bỏ sót bằng chứng hậu kỳ, phần này ghi nhận rõ và chỉ dùng nhận định đã điều chỉnh cho điểm hòa giải.
- Không cộng “điểm công tâm” ngoài rubric: đề chỉ có tổng rubric 100 điểm (`PRM323_Lab2.pdf` tr. 8–11). Vì vậy con số **86,5** của AI-27 không phải score Lab 2 hợp lệ; score rubric của AI-27 là **83,5**.

## 1. So sánh điểm rubric

| Nhóm rubric | AI-27 tại `8c62cda` | Codex tại `1242923` | Chênh Codex − AI-27 |
|---|---:|---:|---:|
| UX analysis & user flows | 14/15 | 14/15 | 0 |
| AI UI generation | 7/10 | 8/10 | +1 |
| AI iterations & UX critique | 11/15 | 13/15 | +2 |
| Final UI/UX design | 15,5/20 | 16/20 | +0,5 |
| Design system & components | 14,5/15 | 12/15 | −2,5 |
| Interactive prototype | 9/10 | 5/10 | −4 |
| Flutter handoff | 9,5/10 | 10/10 | +0,5 |
| Documentation & AI log | 3/5 | 3/5 | 0 |
| **Tổng rubric** | **83,5/100** | **81/100** | **−2,5** |

Điểm AI-27 lấy từ PDF AI-27 tr. 3–4. Điểm Codex lấy từ báo cáo phần 1, mục 2.

## 2. Các chênh lệch từ 2 điểm trở lên

### AI iterations & critique: AI-27 11, Codex 13

**AI-27 đúng hơn ở snapshot cũ; Codex đúng hơn một phần ở HEAD.** Ở `8c62cda`, AI-27 đúng khi nói chỉ có IT-0→IT-1→IT-2 và chưa có IT-3 Stitch. Sau đó `c8de81b` thêm `assets/stitch/IT-0b-SC-02/04/05/06.png`, `IT-3-SC-03.png`, HTML tương ứng, `AI-28`, và `design/stitch-critique-it3.md`; log current xác nhận IT-3 là lần sửa SC-03 có named findings CR-24/25/31 (`ai/ai-design-log.md:180–187`). Vì vậy +2 của Codex phản ánh evidence mới, không phải AI-27 chấm sai lịch sử.

Tuy vậy Codex đã tương đối hào phóng: IT-0b sinh sau khi Figma đã có, và IT-3 chỉ sửa một screen. Theo cách đọc chặt “ba meaningful iteration trước refine”, **12/15** hợp lý hơn 13/15. Prompt critique riêng vẫn không tồn tại: AI-19 ghi “không có prompt riêng” (`ai/ai-design-log.md:126–130`).

### Design system & components: AI-27 14,5, Codex 12

**Codex quá khắt khe vì limitation truy cập, không phải vì defect đã chứng minh.** AI-27 đọc Figma bằng Plugin API và kiểm trực tiếp variables/styles/components/variants/frame; PDF AI-27 tr. 2–3 nêu phương pháp đó. Current `design/figma-build.md:21–25` cũng mô tả 18 color variable, 16 scale variable, 15 component set và Auto Layout; `assets/figma/page-04-design-system.png`/`page-05-components.png` khớp trực quan. Báo cáo Codex chỉ có PNG + viewer không có inspector nên hạ điểm cho “unverified”. Đó là giới hạn evidence của reviewer, không được tự động biến thành lỗi của bài.

AI-27 vẫn hơi rộng tay ở 14,5 vì chính nó phát hiện CMP-08 chưa là component set ở snapshot cũ. Commit `53266a2` ghi rõ đã đổi CMP-08 thành component set (`design/figma-build.md:161–168`), nên lỗi này đã sửa. **Điểm hòa giải đề xuất: 13,5/15**, giữ 1,5 điểm chưa chắc vì screenshot không chứng minh mọi component state thật sự được dùng bởi instance trong final UI.

### Interactive prototype: AI-27 9, Codex 5

**AI-27 có evidence primary mạnh hơn, nhưng score 9 cần giảm nhẹ ở HEAD.** AI-27 đã kiểm reactions và link hỏng trực tiếp (PDF AI-27 tr. 2–3). Current hồ sơ cũng nêu Page 06: 12 starting point, 84 frame (`design/figma-build.md:23`; `ai/ai-design-log.md:170`); fixes sau đó nối 8 state (`design/figma-build.md:144–159`) và current traceability liệt kê component/variant theo từng SC (`process/traceability-matrix.md:42–56`). Codex không thể thao tác prototype qua public viewer nên cho 5; đây là đánh giá quá bảo thủ do access limit.

Nhưng AI-27 phát hiện khoảng 16 control có vẻ interactive nhưng không response (PDF AI-27 tr. 5); commit `f0d49d7` chỉ làm rõ 9 button đã nối và 9 button ngoài kịch bản demo (`ai/ai-design-log.md:166–171`). Điều đó giải quyết một phần, không biến 9 control còn lại thành proof không vấn đề. **Điểm hòa giải: 8/10**, với điều kiện live demo chạy đúng ba flow, Back, overlay và loading→result.

## 3. Finding AI-27 mà Codex đã bỏ lỡ

| Finding AI-27 | Kết quả ở `1242923` | Sai lúc `8c62cda`, hay đã sửa sau đó? | Evidence |
|---|---|---|---|
| Figma pages sai thứ tự 04,06,05 | **Đã sửa**, không phải finding sai. | Sửa sau audit. | `f021126`/`design/figma-build.md:14–23` hiện ghi 01→06 đúng thứ tự. |
| Stitch không phủ FL-1 | **Đã giảm rủi ro, nhưng claim “initial” vẫn chỉ đúng một phần.** | Finding đúng lúc cũ; sau đó thêm IT-0b cho SC-02/04/05/06, nhưng chạy sau Figma. | `c8de81b` thêm 4 PNG/HTML; `ai/ai-design-log.md:180–185` nói rõ “chạy sau khi Figma đã có”. |
| Chỉ hai vòng Stitch | **Đã sửa.** | Finding đúng lúc cũ; IT-3 Stitch đã chạy và có output/critique. | `AI-28`, `IT-3-SC-03.png`, `design/stitch-critique-it3.md`; commit `c8de81b`. |
| AI log thiếu AI-14..22 / prompt critique | **Sửa một phần.** | Log lịch sử được viết lại sau audit; prompt critique riêng vẫn thiếu. | `93c2037`; current log có mục AI-14..22 (`ai/ai-design-log.md:93–143`), còn AI-19 “không có prompt riêng” (`:126–130`). |
| TC-1 mâu thuẫn QR 5 phút | **Đã sửa.** | Finding đúng lúc cũ. | `1f369ce` đổi TC-1 đo từ lúc QR đóng; current `ux/persona.md:41`, `ux/user-flow.md:96,210`. |
| Figma nằm trong team người ngoài nhóm | **Vẫn đúng / integrity risk.** | Không phải lỗi UX đã sửa; README chỉ minh bạch hóa. | `README.md:12`; D-30/`design/figma-build.md:7–12`. |
| Một người có toàn bộ Git commit trong nhóm bốn | **Vẫn đúng theo Git evidence.** | Chưa có contribution ledger/commit evidence của ba người khác. | `git shortlog -sne --all`; `README.md:7`. |
| 16 dead buttons / slide nói chỉ 2 | **Sửa một phần.** | Finding đúng lúc cũ. | `f0d49d7` ghi 9 đã nối, 9 ngoài kịch bản; still cần demo xác nhận control visible không tạo dead end. |
| Link slide private | **Chưa xác minh / vẫn rủi ro.** | README current vẫn ghi “cần được chia sẻ quyền xem”. | `README.md:14`; no public-access proof. |
| Tâm “đến 07:08” trái rule quá 5 phút | **Đã sửa copy/logic.** | Finding đúng lúc cũ. | Current figma build nói “ghi tay 07:08 · hết pin”, không còn nói đến lúc 07:08 (`design/figma-build.md:170–176`). |
| SC-08 ưu tiên “Sửa thành Có mặt” trái evidence | **Đã sửa.** | Finding đúng lúc cũ. | `design/figma-build.md:126` ghi đảo nhánh; current `SC-08-chi-tiet-bao-sai.png` có hai button cùng cấp. |
| “Màn chiếu/TV/màn hình phòng”, app name, SC-15 inconsistent | **Phần lớn đã sửa.** | Finding đúng lúc cũ. | `f021126`, `ddfbb23`; current image `SC-03-man-hinh-phong-p205.png` nói “Điểm danh buổi học”. Một số wording historic vẫn còn trong documents, nên không tuyên bố tuyệt đối. |
| FL-1 thiếu laptop/GV-in-room; SC-01 thiếu diagram | **Đã sửa.** | Finding đúng lúc cũ. | `design/figma-build.md:161–168`; exported `FL-1-user-flow.png`, `FL-2-user-flow.png` thay đổi ở diff. |
| CMP-08 không là component set | **Đã sửa.** | Finding đúng lúc cũ. | `design/figma-build.md:167`; commit `53266a2`. |
| CR-26..42 chưa có traceability / checklist trống | **Đã sửa.** | Finding đúng lúc cũ. | `56fbaf5`; `process/traceability-matrix.md:75–88`. |

Hai finding AI-27 **không đủ cơ sở để tiếp tục trừ điểm Lab**: thiếu logout/profile/settings/onboarding và notification center. Đây không phải hard requirement của đề, không phải persona task cốt lõi, và AI-27 thừa nhận `checklist.design/mobile` không đọc được nhưng vẫn dựa “cấu trúc đã biết” (PDF AI-27 tr. 10). Có thể là recommendation product hợp lý, nhưng không là evidence rubric.

## 4. Finding Codex mà AI-27 bỏ lỡ

| Finding của Codex | Kết quả khi đối chiếu thêm | Điểm mù hay oversight? |
|---|---|---|
| SC-05 dùng placeholder “Ảnh FAP”, khó kiểm tra đúng người | **Vẫn giữ.** `SC-05-kiem-tra-ngau-nhien.png` chỉ hiện biểu tượng camera và chữ “Ảnh FAP”. Đây đụng trực tiếp rationale chống quét hộ DD-3. | **Blind spot có khả năng cao:** model dựng UI có thể coi placeholder là đủ visual và tin claim “kiểm tra ảnh FAP” của chính tài liệu. |
| SC-04 có “Chênh −1” nhưng banner “Dư 1 lượt quét” | **Vẫn giữ và chính AI-28 cũng ghi CR-63 chưa sửa.** | **Blind spot cao:** tài liệu tự giải thích hai baseline, nhưng UI không làm rõ công thức; dễ reward wording của chính model. |
| CTA “Chiếu tạm mã từ điện thoại” không có destination chứng minh được | **Còn cần live-proof.** Hồ sơ cũ thừa nhận từng không có destination; current log gọi nó outside demo (`ai/ai-design-log.md:171`). | **Oversight**, không nhất thiết bias: AI-27 tập trung danh sách dead button tổng quát, không review task-specific recovery. |
| SC-08 không thấy reason-required khi reject / audit trail | **Vẫn chưa có primary screenshot cho dialog reason.** Handoff có thể mô tả nhưng final UI export không chứng minh. | **Blind spot vừa:** tin vào handoff/spec thay artifact UI. |
| 412 evidence chỉ ba screen | **Vẫn đúng.** Điều này được current decision tự nói (`design/design-decisions.md:95`). | **Oversight:** AI-27 cũng nêu “chỉ 3 màn” nhưng vẫn cho 4,5/5, không đưa vào priority. |
| AI claim “assets/figma đã cũ” | **Codex đã sai khi đưa vào report 1 như risk còn hiệu lực.** Current `design/figma-build.md:170–178` nói CR-64/65 đã sửa và 29 PNG được export lại/kiểm bằng mắt. | **Lỗi đọc evidence của Codex**, không phải bias của Claude. Report 1 giữ nguyên theo yêu cầu; nhận định này bị rút lại trong reconciliation. |

## 5. Dấu hiệu bias

### AI-27 (Claude)

- **Leniency / self-confirmation:** cho gần tuyệt đối design system và prototype dựa trên inspector do cùng model family xây dựng phần lớn artifact; evidence là primary hơn Codex, nhưng vẫn cần tách “đếm được” khỏi “hành vi usability tốt”. PDF AI-27 tr. 11 còn cộng +6 vì công phu vượt đề.
- **Out-of-rubric reward:** “điểm công tâm +3” không thuộc rubric 100. Việc tách riêng thì hợp lý, nhưng đề xuất 86,5 có nguy cơ anchor người đọc vào score cao hơn rubric 83,5.
- **Out-of-scope harshness:** trừ/đề xuất logout, settings, profile, onboarding và notification centre dựa checklist.design không truy cập được. Đề không yêu cầu các feature này.
- **Không thấy penalise AI use tự thân:** AI-27 trừ thiếu traceability/prompt, group authorship và khả năng giải thích, đây là đúng tinh thần đề; không trừ vì dùng AI.

### Codex report 1

- **Harshness do access limitation:** 12/15 design system và 5/10 prototype phần lớn phản ánh không có Figma inspector/runtime, không chứng minh artifact sai. Đây là bias phương pháp, cần chỉnh trong score hòa giải.
- **Anchoring vào một câu self-report:** Codex đã đọc `ai/ai-design-log.md:186` (assets cũ) nhưng bỏ `design/figma-build.md:178` (đã re-export). Đây là lỗi tổng hợp evidence; finding assets stale bị rút lại.
- **Không penalise AI use tự thân:**  report 1 chỉ coi AI disclosure là rủi ro khi missing prompt/không chứng minh student reasoning, phù hợp đề.

## 6. Điểm hòa giải và ba ưu tiên chung

### Điểm hòa giải: **84/100** (range **78–87**, confidence trung bình)

Số 84 không phải trung bình cơ học 81 và 83,5. Nó sử dụng current evidence: UX **14**, AI generation **8**, iterations/critique **12**, final UI **16**, design system **13,5**, prototype **8**, handoff **10**, documentation **2,5**. Lý do range rộng là Figma runtime/inspector hiện không independently executable trong review Codex; nếu giảng viên chạy 3 flow không dead-end và mở Variables/instances, upper end hợp lý. Nếu control trông interactive nhưng không có destination hoặc group cannot explain ownership, lower end hợp lý.

### Ba sửa trước 14:30, 16/10

1. **Demo-proof prototype, không chỉ nói claim:** chạy ba flow từ start point, Back, confirmation overlay, loading→result; chuyển mọi control visible ngoài demo sang disabled hoặc nối destination. Tác động: Prototype, Final UI, viva. Evidence cần tạo: video/screenshot route hoặc live rehearsal checklist.
2. **Sửa SC-04 và SC-05:** diễn giải cùng một baseline cho `Chênh −1/Dư 1`; thay/giải thích placeholder Ảnh FAP và cho feedback/undo tại random check. Tác động: usability, anti-fraud rationale, demo credibility.
3. **Integrity + evidence pack:** slide link public/incognito-tested; một bảng đóng góp nhóm, ai làm gì và bằng chứng; giải thích trung thực account Figma mượn, simulated research, phần người học quyết định. Tác động: process marks/viva; không nên “bù” bằng commit giả.

## Limits

- Không thay đổi repository, Figma hay score báo cáo phần 1.
- AI-27 có Plugin API evidence tại old snapshot; Codex không tái chạy được inspector/prototype current, nên các claim about actual Figma structure vẫn có confidence thấp hơn khi không có live demo.
- Slide artifact không truy cập độc lập được trong turn này; findings slide/private link được giữ là risk/unverified, không gọi là fact mới.
