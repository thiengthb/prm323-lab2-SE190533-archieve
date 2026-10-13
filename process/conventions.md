# Quy ước tài liệu (consistency)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | PRC-CONV |
| Trạng thái | Đã áp dụng từ 13/10/2026 |
| Quyết định liên quan | D-14 |

Mọi tài liệu trong repo tuân theo các quy ước dưới đây. Mục tiêu là hai yêu cầu của GVHD: **consistency** (cùng một thứ luôn được gọi, đặt tên và trình bày giống nhau) và **traceability** (mọi quyết định thiết kế lần ngược được về bằng chứng, và mọi bằng chứng lần xuôi được tới màn hình nó ảnh hưởng).

## 1. Ngôn ngữ và tên file

- Nội dung viết bằng tiếng Việt. Bản tiếng Anh dự phòng làm sau cùng (D-08).
- Tên file và thư mục dùng tiếng Anh, chữ thường, nối bằng gạch ngang (`interview-guide-v2.md`), không dấu, không khoảng trắng.
- File đề bài bắt buộc giữ **đúng tên đề yêu cầu** (`ux/persona.md`, `design/DESIGN.md`, …).
- Thư mục có thứ tự đọc được đánh số `01-`, `02-`… theo trình tự công việc.
- Phiên bản ghi ở cuối tên file (`-v1`, `-v2`). Không ghi đè bản cũ khi bản đó là bằng chứng của một bước đã làm.

## 2. Hệ thống mã (ID)

Mỗi đối tượng có một mã duy nhất. Tài liệu luôn trích bằng mã, không viết "như trên" hay "phần trước".

| Mã | Đối tượng | Nơi định nghĩa |
|---|---|---|
| `D-nn` | Quyết định | `process/decision-log.md` |
| `RQ-n` | Câu hỏi nghiên cứu | `research/01-plan/research-plan.md` |
| `S-nn`, `H-nn` | Nguồn nghiên cứu bàn giấy (toàn trường, riêng HCM) | `research/02-desk/` |
| `GV-nn`, `SV-nn`, `CB-nn` | Câu hỏi phỏng vấn theo vai | `research/03-instruments/interview-guide-v2.md` |
| `R-nn` | Người trả lời mô phỏng | `research/04-participants/roster.md` |
| `O-nn` | Quan sát của chính người thiết kế | `research/05-raw/` |
| `T-nn` | Trò chuyện với người thật | `research/05-raw/` |
| `F-nn` | Phát hiện (insight) | `research/06-synthesis/` |
| `N-nn` | Nhu cầu người dùng | `research/06-synthesis/`, `ux/persona.md` |
| `P-nn` | Persona | `ux/persona.md` |
| `FL-n` | User flow | `ux/user-flow.md` |
| `SC-nn` | Màn hình | `design/screen-spec.md` |
| `CMP-nn` | Component | `design/DESIGN.md`, Figma trang 05 |
| `IT-n` | Vòng lặp Stitch | `ai/ai-design-log.md` |
| `CR-nn` | Phát hiện của AI critique | `ai/ai-design-log.md` |
| `AI-nn` | Mục nhật ký AI (mỗi lần dùng AI) | `ai/ai-design-log.md`, prompt ở `ai/prompts/AI-nn-*.md` |
| `A11Y-nn` | Mục kiểm tra accessibility | `design/design-decisions.md` |

Token dùng tên của design system (`color/primary`, `space/4`), giống hệt nhau giữa Figma, `DESIGN.md` và handoff.

## 3. Nhãn bằng chứng

| Nhãn | Ý nghĩa |
|---|---|
| **Simulated** | Từ phỏng vấn mô phỏng bằng AI (R-nn). Không bao giờ được trình bày như dữ liệu thật |
| **Observed** | Người thiết kế tự quan sát (O-nn) |
| **Reported** | Người thật kể lại (T-nn) |
| **Survey** | Google Form; dưới 15 câu trả lời thì chỉ ghi "tham khảo" |
| **Desk** | Nguồn web (S-nn, H-nn), kèm độ tin cậy của nguồn |
| **Assumed** | Chưa có nguồn, phải ghi cách kiểm chứng |

## 4. Đầu mỗi tài liệu

Mỗi tài liệu bắt đầu bằng bảng thuộc tính: mã tài liệu, trạng thái (Nháp / Chờ duyệt / Đã duyệt), các mã đầu vào nó dựa vào, và các quyết định liên quan.

## 5. Đầu ra của AI

- File do AI tạo ra được giữ **nguyên văn**. Muốn sửa thì tạo phiên bản mới (`-v2`) hoặc ghi chú ở tài liệu khác, không sửa trực tiếp.
- Prompt lưu nguyên văn trong `ai/prompts/AI-nn-*.md`. Đường dẫn bên trong prompt là đường dẫn lúc chạy; bảng đối chiếu nằm trong `research/README.md`.

## 6. Figma

Tên frame, component và flow trong Figma dùng đúng mã của tài liệu, ví dụ `SC-03 · Mở phiên điểm danh`, `CMP-01 Button`, `FL-1 Điểm danh một buổi`. Nhờ đó tìm được một màn trong Figma từ tài liệu và ngược lại.

## 7. Commit

Tiêu đề commit bắt đầu bằng phạm vi và ghi các mã bị ảnh hưởng, ví dụ `research: chạy phỏng vấn R01–R11 (D-09)` hoặc `design: DESIGN.md v1 (D-15, CMP-01..09)`. Phạm vi gồm `process`, `research`, `ux`, `design`, `ai`, `assets`, `handoff`.
