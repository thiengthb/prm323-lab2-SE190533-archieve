# AI-29 · Báo cáo chấm mù của Codex, Phần 1 (nguyên văn)

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | OpenAI Codex, thien chạy với 4 tệp đề và hướng dẫn, bản PDF slide, và prompt Phần 1 trong `ai/prompts/AI-29-codex-independent-review.md` |
| Nhận lúc | 15/10/2026 22:30 (giờ Việt Nam), thien gửi kèm lời nhắn “đây là bản của Codex với tài liệu và promt 1” |
| Commit Codex chấm | `1242923` |
| Phân loại từng phát hiện | `ai/reviews/AI-29-triage.md` |

Phần dưới đường kẻ là nguyên văn tệp thien gửi, không sửa chữ nào.

---

# Báo cáo chấm độc lập — PRM323 Lab 2

## 0. Commit, thời điểm và phạm vi truy cập

- **Commit đã audit:** `12429237f066d54918872cd35b48427bd88ee78b` (HEAD `main`; `git rev-parse HEAD`, 15/10/2026 15:05:46Z).
- **Thời điểm review:** 15/10/2026, Asia/Ho_Chi_Minh. Nguồn chấm: `PRM323_Lab2.pdf` tr. 1–12; hai guideline EN/VI (mục 2–5, cùng xác nhận slide/demo là bằng chứng chứ không tạo rubric mới); repository tại commit trên; các PNG trong `assets/figma/`, `assets/stitch/`; Figma public link; hai trang tham chiếu được cung cấp.
- **Truy cập được:** repository GitHub và lịch sử Git; Figma mở được ở chế độ xem (đã thấy Page 01 với FL-1..FL-3); toàn bộ PNG xuất trong repo; tài liệu PDF/DOCX/HTML. `https://prm393-material.web.app/persona-guideline` không đọc được qua trình duyệt văn bản; `checklist.design/mobile` tải được nhưng không trả nội dung máy đọc được. Checklist HTML đính kèm mới là nguồn checklist đã áp dụng.
- **Blindness:** trước khi hoàn tất chấm điểm, một lệnh tìm nhãn `Simulated` đã vô tình trả vài dòng đầu của `ai/prompts/AI-29-codex-independent-review.md` và `ai/ai-design-log.md:189–193`; tôi **không thấy con số điểm AI-27**, không mở `AI-27`, và không dùng kết luận/điểm của review trước.

## 1. Rubric từ đề bài

| Dòng rubric | Tối đa | Full mark phải có | Partial điển hình |
|---|---:|---|---|
| Target user & problem | 5 | Persona cụ thể: bối cảnh, mục tiêu, pain point, problem statement, success criterion đo được | Persona chung chung hoặc thiếu pain point/criterion |
| Information architecture | 5 | Screen inventory, navigation structure, mọi màn thuộc ít nhất một flow | Màn không thể tới / không có cấu trúc |
| User flows | 5 | ≥3 flow có start-goal-end, nhánh thay thế và map flow–screen | Chỉ happy path hoặc thiếu mapping |
| Prompting | 5 | Prompt nguyên văn có user, task, platform, constraint, style theo DESIGN.md | Prompt một dòng/tóm tắt |
| Initial UI from Stitch | 5 | Stitch bao phủ main flow, có screenshot | Không có bằng chứng Stitch / chỉ một screen |
| Meaningful iterations | 5 | ≥3 vòng, mỗi vòng giải quyết vấn đề riêng, có before/after | Ít hơn 3, reroll cosmetic, lặp vấn đề |
| AI UX critique | 5 | Nielsen + accessibility + persona, ≥5 finding gắn screen | Chung chung/không gắn screen |
| Student reasoning | 5 | Mỗi khuyến nghị quan trọng accept/modify/reject có lý do và phản ánh ở final UI | Không có lý do / nhận toàn bộ |
| Visual hierarchy | 5 | Một primary action rõ/màn, type scale và nhóm rõ | Hành động tranh chấp, chữ không nhất quán |
| Consistency | 5 | Component/token/nhãn/pattern thống nhất | Cùng phần tử khác hình/tên |
| Usability | 5 | Flow hoàn thành, feedback, prevention/recovery, state liên quan | Dead end, thiếu feedback/state |
| Accessibility & responsive | 5 | Checklist có evidence, kiểm 360 và 412 dp | Lỗi contrast/target/màu-only hoặc thiếu checklist |
| Design tokens | 5 | Color/type/spacing/radius/elevation là Variables/styles và component dùng chúng | Hard-code / token không dùng |
| Reusable components | 5 | Đủ 9 component, Auto Layout, variants, màn dùng instances | Thiếu/detached copy |
| Component states | 5 | Required states tồn tại **và được dùng** | Thiếu hoặc vẽ loose frame |
| Prototype flows | 5 | 3 flow click từ start tới end | Ít hơn 3 / đứt giữa |
| Prototype interactions | 5 | Back đúng, ≥1 overlay, loading→result, không dead end | Sai destination/không Back/dead end |
| Screen specifications | 5 | Mỗi screen đủ 6 mục của handoff | Thiếu screen/mục/chỉ mô tả hình |
| Mapping & interactions | 5 | Hai bảng token/widget và state/interaction rõ để dev làm được | Dev phải hỏi lại |
| Complete prompts & iterations | 3 | Prompt, output, critique, decision traceable | Prompt bị tóm tắt/thiếu evidence |
| Clear documentation | 2 | Cấu trúc đúng, README map deliverable, link hoạt động | Sai cấu trúc/link hỏng/private |

Hard requirements đối chiếu: ≥8 screen; ≥3 flow và ≥1 recovery/error; `DESIGN.md` trước Stitch; six Figma pages theo thứ tự; Final UI 360×800 với variant kề; kiểm 360/412; 9 nhóm component; 48×48 target, body ≥14 sp, contrast 4.5:1/3:1; 6 trường handoff/screen và 2 bảng mapping. Nguồn: `PRM323_Lab2.pdf` tr. 2–11.

## 2. Điểm

| Criterion | Điểm | Lý do, evidence, điều kiện tăng điểm |
|---|---:|---|
| UX analysis & user flows | **14/15** | Persona, IA 15 screen, 3 Mermaid flow và map đầy đủ (`ux/persona.md:27–67`, `ux/user-flow.md:57–77, 92–204`). Mất 1 vì success criteria/giả thuyết chưa test (`ux/persona.md:101`); thực hiện usability test và nộp kết quả để đạt 15. |
| AI UI generation | **8/10** | AI-18 có prompt nguyên văn và IT-0 cho SC-03/09/11 (`ai/ai-design-log.md:26, 119–123`; `assets/stitch/IT-0-*.png`). Prompt mạnh, nhưng initial Stitch chỉ chứng minh 3 screen rời, không toàn bộ một main flow end-to-end. Xuất/ghi lại Stitch cho flow hoàn chỉnh trước Figma để tăng. |
| AI iterations & UX critique | **13/15** | IT-1, IT-2 và IT-3 có before/after và critique screen-specific (`ai/ai-design-log.md:28–30, 36`; `design/stitch-critique-it*.md`). IT-3 chỉ sửa SC-03 và xảy ra sau khi Figma đã dựng (`ai/ai-design-log.md:180–186`), nên bằng chứng cho “3 iteration” có độ mạnh thấp hơn 3 vòng độc lập trước refinement Figma. |
| Final UI/UX design | **16/20** | Các PNG thể hiện hierarchy, ngôn ngữ trạng thái và pattern ổn định: `assets/figma/SC-02-lich-day-hom-nay.png`, `SC-03-phien-diem-danh.png`, `SC-06-xem-lai-va-xac-nhan.png`, `SC-09-hom-nay-sinh-vien.png`. Trừ vì photo-check chỉ placeholder, logic “Chênh −1/Dư 1” khó hiểu, và không thể chạy toàn bộ prototype để xác minh no-dead-end. |
| Design system & components | **12/15** | Token/effect/type và 15 component set được thấy trong `assets/figma/page-04-design-system.png`, `page-05-components.png`; `design/figma-build.md:21–25` mô tả Auto Layout/variables. Không có inspector Figma để xác nhận instance/variant thực được dùng trong tất cả screen; nhiều state yêu cầu không có export primary evidence. |
| Interactive prototype | **5/10** | Figma file mở được và Page 01 có 3 flow; tài liệu nêu start point/84 frame (`design/figma-build.md:23`, `ai/ai-design-log.md:170`). Nhưng reviewer không thể thực thi prototype flow/Back/overlay/loading trong view hiện có; mô tả/script không thay primary evidence theo rubric. Live demo 3 flows hoàn chỉnh có thể nâng đáng kể. |
| Flutter handoff | **10/10** | Handoff có hai mapping table và mục layout/components/states/interactions/navigation/constraints cho SC-01..15 (`handoff/flutter-handoff.md`, đặc biệt mục mapping và từng SC); đề bài yêu cầu đúng các trường này (`PRM323_Lab2.pdf` tr. 7). |
| Documentation & AI log | **3/5** | Cấu trúc và README map tốt (`README.md:16–39`), disclosure rộng (`README.md:49–61`; `ai/ai-design-log.md:9–37`). Tuy vậy các bước AI-13/16/17/23–26 ghi “không có prompt riêng” (`ai/ai-design-log.md:21–25, 31–34`), nên không đạt “all prompts, outputs, critique, decisions present and traceable” theo nghĩa chặt. |

**Tổng: 81/100.** Khoảng defensible: **74–86**, confidence **trung bình**. Điểm cao hơn chỉ defensible nếu giảng viên mở prototype và inspector Figma, xác nhận variables/instances/links như hồ sơ nói. Điểm thấp hơn hợp lý nếu yêu cầu “initial Stitch covers main flow” và “three iterations trước refinement” được áp dụng tuyệt đối.

## 3. Kiểm chứng claim

| Claim | Kết quả | Evidence primary / đối chứng |
|---|---|---|
| Có 15 screen distinct | **Verified** | IA liệt kê SC-01..SC-15 (`ux/user-flow.md:61–77`); assets có PNG đại diện cho mọi ID SC-01..SC-15. |
| Có ba flow có recovery | **Verified** | FL-1..3 và mapping (`ux/user-flow.md:92–204`); `FL-1-user-flow.png`, `FL-2-user-flow.png`, `FL-3-user-flow.png` tồn tại. |
| DESIGN.md trước Stitch prompt đầu | **Verified** | Commit `5c8d66f` DESIGN.md: 14/10 02:46:37Z; `0df6fc3` AI-18: 14/10 05:37:30Z; `DESIGN.md:7` khớp thứ tự. |
| Initial Stitch có đủ ba screen đã nói | **Verified** | `IT-0-SC-03.png`, `IT-0-SC-09.png`, `IT-0-SC-11.png`; log AI-18 (`ai/ai-design-log.md:26`). |
| Ba iteration meaningful | **Partially verified** | IT-1/2/3 có assets và critique, nhưng IT-3 hẹp SC-03 và sau Figma (`ai/ai-design-log.md:180–186`). |
| Mọi final screen 360×800 | **Unverifiable** | `design/design-decisions.md:9,95` là self-report; exported PNG không mang metadata frame Figma; viewer không cho inspector. |
| 72 phone frames, 72/72 Auto Layout | **Unverifiable** | Self-report tại `design/design-decisions.md:9,94`; không có export hay access inspector độc lập. |
| Contrast thấp nhất 5.24:1 | **Partially verified** | Token/cặp màu và phép tính được nêu `design/design-decisions.md:98–121`, còn screenshot hệ design phù hợp; không có script/đầu vào đo trong repo để tái chạy. |
| 15 component set/đủ component | **Partially verified** | `page-05-components.png` cho thấy CMP-01..15 và states; actual Figma variants/instances không kiểm được. |
| Prototype 84 frames, không dead end | **Unverifiable** | Claim ở `ai/ai-design-log.md:170`; Page 06 không inspect/execute được qua public view trong review. |
| Data interview không được trình như người thật | **Verified with caveat** | README/persona gắn Simulated/giả thuyết (`README.md:9,59`; `ux/persona.md:12,42,101`); raw transcript vẫn mở đầu bằng kịch bản xin ghi âm như interview thật (`research/05-raw/R08-transcript.md:12`), nên nên gắn watermark “Simulated” trên slide/demo. |
| AI disclosure bao gồm công cụ đã dùng | **Partially verified** | README và log liệt kê Claude, Stitch, Figma MCP (`README.md:51–57`); nhưng nhiều operation không có prompt riêng và ảnh FAP input AI-16 không trong repo (`ai/ai-design-log.md:24`). |

## 4. Process integrity

- Git thể hiện chuỗi research → persona/flow → DESIGN → AI-18 Stitch → critique → Figma/handoff, không phải một commit duy nhất. Các mốc chính: `5c8d66f` (DESIGN), `0df6fc3` (first Stitch), `81e488b` (Figma), `476194e` (handoff), rồi sửa tiếp đến HEAD. Tất cả 80 commit xem được đều mang một author “Thiên”; không có Git evidence phân công/đóng góp của ba thành viên khác. Nguồn: `git log --all --date=iso-strict`, `README.md:7`.
- Đề gốc nói **individual trừ khi lecturer cho phép nhóm** (`PRM323_Lab2.pdf` tr. 1); README nói “GVHD thông báo làm nhóm” (`README.md:7`) nhưng không có approval artifact. Đây là rủi ro viva/integrity, không tự quy đổi thành 0 điểm rubric.
- Claim simulated được gắn nhãn tương đối tốt. Tuy nhiên script lời mở đầu “ghi âm”, “bạn đồng ý…” trong transcript mô phỏng là có khả năng gây hiểu sai khi tách khỏi header; đừng trình riêng transcript như research thật (`research/05-raw/R08-transcript.md:1–12`).
- AI disclosure là thành thật một cách bất lợi: Claude thực hiện gần như toàn bộ dựng Figma và thien “duyệt” (`README.md:12,53–57`; `ai/ai-design-log.md:147–149`). Vấn đáp phải chứng minh người học hiểu quyết định, không chỉ duyệt trực quan.

## 5. Design findings

| # | Screen | Vấn đề / chuẩn | Severity | Fix cụ thể |
|---:|---|---|---|---|
| 1 | SC-05 | “Ảnh FAP” chỉ là placeholder camera, nên người dùng không có bằng chứng để chọn “Đúng người/Không có mặt”. Điều này làm lớp chống quét hộ không thực hiện được; Nielsen #5. | High | Dùng ảnh đã được phép/anonymised headshot hoặc ghi rõ đây là mock data và demo bằng ảnh thực tế được phép. |
| 2 | SC-04 | “Chênh −1” nhưng banner nói “Dư 1 lượt quét” dùng hai baseline khác nhau mà không giải thích; dễ ra quyết định sai (Nielsen #2). | High | Hiển thị công thức: “30 quét − (31 trong phòng − 2 ghi tay cần thiết) = dư 1”; đổi “Chênh” thành “so với số trong phòng”. |
| 3 | SC-03 | Nút “Đóng QR và kiểm tra” là action khó đảo ngược, không có confirmation/undo trong export; Nielsen #3/#5. | Medium | Dialog overlay: nêu số đã quét, “QR không mở lại bằng mã cũ”, Cancel/Close. |
| 4 | SC-03 laptop chưa kết nối | CTA “Chiếu tạm mã từ điện thoại” không có screen đích được export và `ai/ai-design-log.md:171` xác nhận từng không có destination. | High | Có screen/state đích hoặc bỏ CTA khỏi prototype chấm; nêu Back behaviour. |
| 5 | SC-03 remote | Thông điệp “mã không bị chụp gửi ra ngoài” là kết luận quá mạnh: người trong phòng vẫn chụp được; Nielsen #2 (khớp thế giới thực). | Medium | Đổi thành “giảm khả năng chia sẻ từ điện thoại GV; vẫn cần đối chiếu sĩ số”. |
| 6 | SC-05 | Các cặp button “Không có mặt/Đúng người” không cho feedback ngay trong cùng screen (first card đã settled, hai card không); visibility of system status. | Medium | Sau tap, đổi card thành state có timestamp/Undo; progress 2/3. |
| 7 | SC-06 | “Xác nhận và gửi lên FAP” có thể bị hiểu là đã ghi chính thức dù handoff/decision nói extension có thể lỗi; Nielsen #1. | Medium | Tách label thành “Xác nhận điểm danh” rồi loading/result “Đã lên FAP” hoặc “Chưa thể điền FAP — retry”. |
| 8 | SC-08 | Quyết định sửa/từ chối một báo sai hiện ảnh placeholder; không có trường lý do bắt buộc khi từ chối trong export, gây thiếu audit trail và recovery. | High | Dialog từ chối với reason required, preview notification, và undo trong thời gian ngắn. |
| 9 | SC-10/11 | Lỗi scan “Mã hết hạn” nói quét lại; sheet “Không quét được?” dẫn báo giảng viên nhưng không cho biết chính xác kênh/trạng thái offline. Nielsen #9. | Medium | Nêu “giơ tay trong lớp”; sau đó status “đã ghi tay/chờ GV”, có retry khi mạng trở lại. |
| 10 | SC-13 | Counter 90/200 hiển thị nhưng không thấy validation states (empty, >200, network error) dù IA yêu cầu (`ux/user-flow.md:75`). | Medium | Export/đưa demo ba state, disabled submit khi rỗng, inline error và retained text khi send fail. |
| 11 | SC-01 | Một login “Google” cho cả GV/SV trong khi cách xác định role/quyền không hiển thị; user có thể đi vào sai flow. Nielsen #4/#5. | Medium | Sau auth, show identity/role selection or deterministic role banner + switch-account. |
| 12 | SC-15 | CTA “Mở FAP” rời app ở end state nhưng không nói return/deep-link fallback; prototype completion/recovery không chứng minh được. | Low | Thêm “Quay lại app sau khi gửi đơn” và state đã mở external browser. |
| 13 | SC-02/09 | Empty states là tốt, nhưng chỉ có asset cho một vài non-happy states; exported evidence không bao phủ các state IA hứa (SC-10 permission; SC-11 already scanned/no class/device/mạng). | Medium | Xuất và demo ít nhất một asset/frame cho từng state critical đã liệt kê. |
| 14 | Responsive | 412 check chỉ có SC-03/06/09 (`assets/figma/a11y-412-*.png`), trong khi claim rộng hơn “mọi màn”; WCAG reflow evidence chưa đại diện login, form, modal, scanner. | Medium | Test thêm SC-01, SC-05, SC-08, SC-10, SC-13; ghi kết quả từng màn. |

## 6. Inconsistencies across files

| Vấn đề | Location A | Location B / ảnh | Tác động |
|---|---|---|---|
| Assets được gọi là final nhưng log thừa nhận assets cũ | README nói `assets/figma/` là “ảnh Figma 15 màn và các trạng thái” (`README.md:27`) | AI-28 nói `assets/figma/` “đã cũ” và phát hiện lỗi UI đã sửa trong Figma (`ai/ai-design-log.md:186`) | Không thể dùng mọi PNG như bằng chứng của final Figma; phải export lại trước demo. |
| Số frame thay đổi/measurement trail không nhất quán nếu đọc độc lập | `design/figma-build.md:20`: 69 frame 360 + 3 frame 412 | `design/design-decisions.md:9`: 72 phone frame, đồng thời nói số cũ 68/71; text giải thích nhưng không có snapshot/version artifact đo lại | Có thể giải thích theo thời điểm, nhưng bản presentation phải ghi rõ “final count 72 at commit …”, không trộn số 68/69/71/72. |
| Prototype state completeness hứa nhiều hơn export chứng minh | IA liệt kê SC-10 permission states và SC-11 sáu error state (`ux/user-flow.md:72–75`) | Assets chỉ show scanner, loading, success, expired, one help sheet; các state còn lại không có primary export | Không khẳng định được required states đã có/dùng; export hoặc demo trực tiếp. |
| “Dư 1” và “Chênh −1” cùng xuất hiện | `SC-04-doi-chieu-si-so.png` | `ai/ai-design-log.md:186` cũng gọi đây là hạn chế CR-63 | Người dùng không biết có lỗi data hay hai phép tính; cần sửa UI/copy. |
| Individual/group status chưa có evidence | Đề: individual unless lecturer authorises (`PRM323_Lab2.pdf` tr. 1) | README: Group 3, “GVHD thông báo làm nhóm” (`README.md:7`) | Cần mang phê duyệt/brief nhóm hoặc giải thích trong viva. |

## 7. Câu hỏi viva

1. **Ai trong bốn người thực hiện phần nào, và evidence Git/Figma nào chứng minh?** Rủi ro: `git shortlog` chỉ thấy Thiên, còn README có bốn người (`README.md:7`).
2. **Nếu Claude dựng Figma qua MCP, đóng góp học thuật trực tiếp của từng thành viên là gì?** Rủi ro: disclosure nói Claude thực thi còn thien duyệt (`README.md:12`).
3. **Tại sao QR lại giải quyết đúng pain point, thay vì chỉ số hoá một giải pháp có sẵn?** Evidence: DD-2/3 (`design/design-decisions.md:22–34`) và persona K1.
4. **Hãy giải thích “Chênh −1” và “Dư 1 lượt quét” bằng số liệu của K1.** Rủi ro: UI hiện gây mâu thuẫn; dùng SC-04 và `ai/ai-design-log.md:170,186`.
5. **Vì sao kiểm tra ngẫu nhiên 3 người đủ để chống quét hộ?** Rủi ro: tỷ lệ 86%/20 buổi là claim phụ thuộc giả định (`design/design-decisions.md:29–34`); cần nêu giả định xác suất.
6. **Chỉ một recommendation AI bị reject/modify và lý do persona/heuristic, rồi chỉ bản Figma đã thay đổi.** Evidence: decision log/DD-1..10 và critique IT-0..3.
7. **AI nào đã dùng và cái gì không có prompt nguyên văn?** Rủi ro: AI-13/16/17/23–26 không có prompt riêng (`ai/ai-design-log.md:21–25,31–34`).
8. **Vì sao dữ liệu simulated không được coi là phỏng vấn người thật?** Evidence: `ux/persona.md:12,101`, `README.md:59`; phải nói rõ giới hạn.
9. **Chạy FL-1 từ start point, đóng QR, xử lý mismatch, check random, và giải thích Back/overlay/loading.** Rủi ro: reviewer chưa xác minh được interactive links; evidence cần là Figma Page 06.
10. **Một Flutter developer làm SC-08 thế nào nếu Figma không mở?** Evidence: `handoff/flutter-handoff.md`, đặc biệt state, validation, navigation và component mapping.

## 8. Ưu tiên sửa trước 14:30, 16/10

| Ưu tiên | Việc | Rubric | Ước tính |
|---:|---|---|---:|
| 1 | Re-export final PNG sau CR-64/65; ghi commit/date vào README | Documentation, Final UI | 0.5h |
| 2 | Sửa SC-04 thành một phép tính, có formula và copy ngắn | Usability, hierarchy | 0.5h |
| 3 | Hoàn thiện SC-05 bằng evidence ảnh (hoặc honest placeholder/demo note) và feedback/undo | Usability, recovery | 1h |
| 4 | Nối/đưa screen đích cho “Chiếu tạm mã từ điện thoại”; hoặc bỏ khỏi prototype scope | Prototype | 0.5h |
| 5 | Live-test 3 flow trong Figma private/viewer, record từng start/end/Back/overlay/loading | Prototype | 1h |
| 6 | Export critical states thiếu: permission/camera, scan error types, form empty/network error | Components, usability | 1.5h |
| 7 | Test 412 dp cho login, random-check, decision, scan, report form; add evidence table | Accessibility | 1.5h |
| 8 | Add confirmation + result states for close QR / send to FAP / reject report | Usability, prototype | 1h |
| 9 | Chuẩn bị one-page contribution ledger và lecturer group authorisation evidence | Integrity/viva | 0.5h |
| 10 | Soạn viva card: simulated limitation, AI disclosure, three human decisions with Figma evidence | Process/AI reasoning | 1h |

## 9. Limits of this review

- Không truy cập được Figma inspector/prototype execution đầy đủ trong public viewer; vì vậy không thể independently count frames, verify Variables/Auto Layout/component instances, start points, interactions hay dead ends.
- Không có Figma version history / proof of lecturer approval for group work. Git timestamps prove commit order but not the physical author of each action.
- `persona-guideline` không tải được qua web reader; `checklist.design/mobile` không trả content machine-readable. Tôi không suy diễn nội dung từ các URL này; có tham khảo checklist HTML đính kèm như nguồn người dùng cung cấp.
- Không có usability testing với người thật; tiêu chí success vẫn là Assumed (`ux/persona.md:101`).
- Không chạy hay chấm theo điểm của `AI-27`; không mở file này. Các tự-claim của repository chỉ nhận điểm khi có artifact độc lập nhìn thấy được.
