# PRM323 Lab 2 — FAP Attendance Mobile (SE190533)

Thiết kế UI/UX có AI hỗ trợ (Google Stitch → Figma) cho ứng dụng điểm danh buổi học tại Đại học FPT.

| Mục | Nội dung |
|---|---|
| Sinh viên | thien · SE190533 |
| Đề tài | Ứng dụng di động bổ trợ việc điểm danh trên FAP cho giảng viên FPTU cơ sở TP.HCM (đã được GVHD duyệt) |
| Persona một dòng | **P-01 Thầy Hoàng Nam** (chính): giảng viên cơ sở HCM dạy 3–4 slot liền, cần chốt điểm danh đúng người trong vài phút đầu slot (kể cả bắt quét hộ) và sửa ca lệch ngay trong ngày. **P-02 Bảo Trâm** (phụ): sinh viên năm 2 chỉ yên tâm khi thấy mình được ghi Có mặt, cần báo sai kịp trước khi hết ngày. Cả hai là nhân vật tổng hợp từ phỏng vấn mô phỏng bằng AI (D-05), chi tiết hành vi ở mức Giả thuyết (`ux/persona.md`) |
| Figma | [PRM323 Lab 2 · SE190533 · Điểm danh FAP](https://www.figma.com/design/9yDa2ylfREmndW1mK1hf7w) (6 trang; ghi chép dựng file: `design/figma-build.md`) |
| Figma dự phòng | [Bản sao dự phòng](https://www.figma.com/design/ubzn09LV1N7VJnmiBuEA3w) (không có lịch sử phiên bản; bản nộp là link ở trên) |
| Thuyết trình | 14:30 thứ Sáu 16/10/2026 |
| Slide | [12 slide trên Claude](https://claude.ai/artifact/2zGSwXg9K52VN8QBrFrjhq) (mỗi slide có ghi chú người nói; cần được chia sẻ quyền xem) |

## Bản đồ sản phẩm nộp

| Sản phẩm | Đường dẫn | Trạng thái |
|---|---|---|
| Persona, problem statement, tiêu chí thành công | `ux/persona.md` | Có (v2) |
| Kiến trúc thông tin, user flow | `ux/user-flow.md` | Có (v2) |
| Design brief cho Stitch | `design/DESIGN.md` | Có (v2) |
| Đặc tả màn hình | `design/screen-spec.md` | Có (v1, chờ duyệt) |
| Quyết định thiết kế + checklist accessibility | `design/design-decisions.md` | Có (v1, chờ duyệt) |
| Nhật ký AI (prompt, output, critique, quyết định) | `ai/ai-design-log.md` | Đang ghi |
| Ảnh Stitch, ảnh Figma | `assets/stitch/`, `assets/figma/` | Có (Stitch IT-0..IT-2; Figma 15 màn và các trạng thái, 3 flow, trang 04, 05, kiểm 412 dp) |
| Flutter handoff | `handoff/flutter-handoff.md` | Có (v1, chờ duyệt): 2 bảng ánh xạ, 6 mục cho cả 15 màn |

## Hồ sơ quá trình (bổ sung, phục vụ truy vết)

| Nội dung | Đường dẫn |
|---|---|
| Quy ước tài liệu, hệ mã, nhãn bằng chứng | `process/conventions.md` |
| Ma trận truy vết bằng chứng → màn hình | `process/traceability-matrix.md` |
| Sổ quyết định D-nn | `process/decision-log.md` |
| Kế hoạch làm việc theo phiên | `process/work-plan.md` |
| Hồ sơ nghiên cứu (kế hoạch, bàn giấy, công cụ, người trả lời, dữ liệu thô, tổng hợp) | `research/` (mục lục: `research/README.md`) |
| Prompt nguyên văn của mọi lần dùng AI | `ai/prompts/` |

## Công cụ AI đã dùng

| Công cụ | Dùng vào việc gì | Ai thao tác | Mã trong nhật ký |
|---|---|---|---|
| Claude (Anthropic), qua Claude Code, phiên chính | Phản biện BA/UX cho mọi quyết định, viết persona, user flow, DESIGN.md, phản biện từng vòng Stitch, viết spec, handoff | Claude soạn, thien duyệt và chốt mọi quyết định | AI-01, AI-13, AI-16, AI-17, AI-19, AI-21, AI-22, AI-26 |
| Claude, các subagent độc lập | Soạn và kiểm định bộ câu hỏi, phỏng vấn mô phỏng 11 người trả lời, đào sâu, tổng hợp affinity và phản biện tổng hợp | Claude | AI-02..AI-12 |
| Claude, subagent có WebSearch/WebFetch | Nghiên cứu bàn giấy về quy định FPTU, cơ sở HCM, giao diện FAP, gian lận QR | Claude | AI-04, AI-05, AI-07, AI-14, AI-15 |
| Google Stitch | Sinh UI đầu tiên cho SC-03, SC-09, SC-11 qua 3 vòng IT-0..IT-2 | Claude soạn prompt, thien chạy trên Stitch | AI-18, AI-20, AI-21 |
| Figma MCP (Plugin API, gọi từ Claude Code) | Dựng file Figma: biến token, style, 15 component, màn và trạng thái, user flow, prototype | Claude thực thi theo D-07 cập nhật, thien duyệt | AI-23..AI-26 |

Dữ liệu phỏng vấn là mô phỏng bằng AI (D-05, GVHD chấp nhận), được gắn nhãn Simulated và không dùng để kết luận mạnh hơn mức Giả thuyết. Nhân vật và tên sinh viên trong màn hình đều là tên giả.

Chi tiết: `ai/ai-design-log.md`, mục Disclosure.
