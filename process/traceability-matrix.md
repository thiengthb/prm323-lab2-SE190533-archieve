# Ma trận truy vết (traceability)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | PRC-TRACE |
| Trạng thái | Đã điền mục 1–4 và cột handoff (14/10/2026) |
| Quyết định liên quan | D-14 |

Chuỗi truy vết của dự án:

```
Nguồn (S/H, R, O, T, Survey) → Phát hiện F → Nhu cầu N → Persona P → Flow FL → Màn hình SC → Component CMP → Handoff
                                                                     ↑
                                    AI critique CR → Quyết định D ───┘
```

Đọc xuôi: một bằng chứng ảnh hưởng tới những màn nào. Đọc ngược: một màn có mặt vì nhu cầu nào và bằng chứng nào. Mọi hàng phải trỏ được tới mã có thật trong tài liệu gốc (`process/conventions.md`, mục 2).

## 1. Bằng chứng → Phát hiện → Nhu cầu

| Phát hiện F | Bằng chứng (mã, nhãn) | Nhu cầu N | Persona P |
|---|---|---|---|
| F-01a (Mạnh), F-01b, F-02a (Mạnh), F-02b, F-03, F-05 | Desk V01, V02; O-01.3–O-01.4 (Observed); R01, R02, R04, R05, R07, R10, R11 (Simulated) | N-04 | P-01 |
| F-04, F-15 | R04, R05 (Simulated) | N-03 | P-01, P-02 |
| F-17 | R02, R03, R05 (Simulated) | N-11 | P-01 |
| F-06, F-07a, F-07b (Mạnh), F-08, F-10a (Mạnh), F-14 | Desk V01, V13; R07, R09, R10 (Simulated) | N-01 | P-02 (khởi động), P-01 (sửa) |
| F-11a, F-12 | R07, R11 (Simulated) | N-06 | P-02 |
| F-09b, F-19 | R09 (Simulated) | N-10 | P-02 |

## 2. Nhu cầu → Flow → Màn hình

| Nhu cầu N | Flow FL | Màn hình SC | Tiêu chí thành công đo được |
|---|---|---|---|
| N-04, N-03, N-11 | FL-1 | SC-01..SC-06 | TC-1, TC-3, TC-7 |
| N-01, N-06, N-10 | FL-2 | SC-01, SC-09..SC-15 | TC-4, TC-5, TC-6 |
| N-01 | FL-3 | SC-02, SC-07, SC-08, SC-14, SC-15 | TC-2 |

## 3. Màn hình → Component → Handoff

| Màn hình SC | Component CMP (variant) | Frame Figma | Mục handoff |
|---|---|---|---|
| SC-01 | CMP-01 | Trang 03, hàng SC-01: Default; Đang đăng nhập; Lỗi tài khoản | `handoff/flutter-handoff.md` mục 3, SC-01 |
| SC-02 | CMP-03, CMP-10, CMP-01, CMP-04, CMP-05, CMP-07 (skeleton) | Trang 03, hàng SC-02: Default 06:58; Sau slot 1, chờ điền lên FAP; Đang tải; Sau slot 1, đã lên FAP; Có báo sai mới; QR đang mở; Chờ xác nhận (K1b) | `handoff/flutter-handoff.md` mục 3, SC-02 |
| SC-03 | CMP-05, CMP-14 (Đang mở, Sắp đóng, Đã đóng), CMP-11, CMP-10, CMP-01, CMP-06 (Confirmation) | Trang 03, hàng SC-03: Default; QR đã đóng; Mở từ xa; Dialog đóng QR sớm; QR sắp đóng; Laptop chưa kết nối; trang web Màn hình phòng P.205 (D-24) | `handoff/flutter-handoff.md` mục 3, SC-03 |
| SC-04 | CMP-05, CMP-11, CMP-01 | Trang 03, hàng SC-04: Default (khớp); Số quét lớn hơn số người; Số quét nhỏ hơn số người | `handoff/flutter-handoff.md` mục 3, SC-04 |
| SC-05 | CMP-05, CMP-15, CMP-01 | Trang 03, hàng SC-05: Default 1/3; Đã kiểm tra 3/3 | `handoff/flutter-handoff.md` mục 3, SC-05 |
| SC-06 | CMP-05, CMP-11, CMP-10, CMP-01, CMP-06 (Confirmation) | Trang 03, hàng SC-06: Default; Còn lượt quét cần xem; Dialog xác nhận; Chờ điền lên FAP; Đã lên FAP | `handoff/flutter-handoff.md` mục 3, SC-06 |
| SC-07 | CMP-05, CMP-03, CMP-10, CMP-04, CMP-08 | Trang 03, hàng SC-07: Default; Trống; Sau khi sửa; Sau khi từ chối | `handoff/flutter-handoff.md` mục 3, SC-07 |
| SC-08 | CMP-05, CMP-10, CMP-01, CMP-06 (Destructive) | Trang 03, hàng SC-08: Default; Dialog từ chối; Đã từ chối; Đã sửa | `handoff/flutter-handoff.md` mục 3, SC-08 |
| SC-09 | CMP-05, CMP-12, CMP-03, CMP-10, CMP-01 (Disabled), CMP-04 | Trang 03, hàng SC-09: Default; Có phiên đang mở; Buổi tối, có buổi Vắng; Đã quét, chờ xác nhận | `handoff/flutter-handoff.md` mục 3, SC-09 |
| SC-10 | CMP-01, CMP-09 | Trang 03, hàng SC-10: Default; Chưa có quyền camera | `handoff/flutter-handoff.md` mục 3, SC-10 |
| SC-11 | CMP-05, CMP-07 (Spinner), CMP-10, CMP-01, CMP-09 | Trang 03, hàng SC-11: Đang xác thực; Thành công; Mã hết hạn; Mất mạng | `handoff/flutter-handoff.md` mục 3, SC-11 |
| SC-12 | CMP-05, CMP-10, CMP-12, CMP-01 | Trang 03, hàng SC-12: Còn hạn; Đã qua hạn | `handoff/flutter-handoff.md` mục 3, SC-12 |
| SC-13 | CMP-05, CMP-02, CMP-12, CMP-01 (Loading) | Trang 03, hàng SC-13: Nhập; Đang gửi; Mất mạng | `handoff/flutter-handoff.md` mục 3, SC-13 |
| SC-14 | CMP-05, CMP-13, CMP-10, CMP-01, CMP-04, CMP-08 | Trang 03, hàng SC-14: Đã gửi; Đã sửa; Bị từ chối; Trống | `handoff/flutter-handoff.md` mục 3, SC-14 |
| SC-15 | CMP-05, CMP-01 | Trang 03, hàng SC-15: Một trạng thái | `handoff/flutter-handoff.md` mục 3, SC-15 |

## 4. AI critique → Quyết định → Thay đổi trong Figma

| Phát hiện CR | Heuristic / WCAG / Persona | Quyết định (Accept / Modify / Reject) | D | Màn hình SC bị đổi |
|---|---|---|---|---|
| CR-01..CR-17 (IT-0) | Nielsen #1, #4, #8; WCAG 1.4.3; NT-2, NT-7 | 16 Accept, CR-07 Reject (đo lại thấy đạt) | D-22, D-23 | SC-03, SC-09, SC-11 (`design/stitch-critique-it0.md`) |
| CR-18..CR-23 (IT-1) | WCAG 1.4.10, 1.4.11; Nielsen #1, #4 | Accept; CR-21 Modify (làm ở Figma) | — | SC-03, SC-09, SC-11 (`design/stitch-critique-it1.md`) |
| CR-21 | DESIGN.md mục 4 | Modify: Figma chỉ dùng biến DESIGN.md | D-20, D-22 | Mọi màn (trang 04, 05) |
| CR-24 | WCAG 1.4.10; NT-3 | Accept: xuống dòng, không cắt dữ liệu | — | SC-03, SC-04 (CMP-11) |
| CR-25 | Nielsen #1; CMP-14 | Accept: trạng thái QR đã đóng | — | SC-03 · QR đã đóng (CMP-14) |
| IT-3b (góp ý của thien, 14/10) | Nielsen #8 (bỏ phần trang trí), #1; NT-4, NT-5 | Accept: bỏ banner, chip, phụ đề thừa; thống nhất giờ trong ngày; huy hiệu CMP-04 không bị cắt; mở từ xa theo D-24 | D-24 | SC-02, SC-03, SC-04, SC-07, SC-09, SC-11, SC-14 (`design/figma-build.md` mục 6) |
| CR-26..CR-28, CR-32 (IT-3c, góp ý của thien 14/10) | Nielsen #4, #1; WCAG 1.4.11 | Accept, sửa luôn: bỏ tiêu đề chồng, gộp ghi chú, vẽ lại skeleton theo thẻ slot, thêm huy hiệu báo sai | — | SC-02, SC-03, SC-07 (`design/final-ui-review.md` mục 1) |
| CR-29 | Nielsen #2, #4 | Modify theo thẻ quyết định: ba nhóm theo thời gian Đang diễn ra / Sắp tới / Đã xong | D-25 | SC-02, SC-09 |
| CR-30 | Nielsen #8; WCAG 1.4.1 | Modify: chỉ thẻ đang diễn ra giữ chip cam có chấm, thẻ khác dùng chip “Giờ slot · khác” | D-26 | SC-02, SC-09 (CMP-02) |
| CR-31 | Nielsen #1; WCAG 1.4.11 | Modify: thanh tiến độ màu xanh, đỏ chỉ dành cho lệch sĩ số ở SC-04 | D-27 | SC-03 (CMP-14) |
| CR-33..CR-40 (lỗi logic Claude tự tìm, 14/10) | Nielsen #4 (nhất quán giờ, tên, vai); D-21, D-24 | Accept, sửa luôn | D-21, D-24 | SC-03, SC-07, SC-08, SC-09, SC-10, SC-14 (`design/final-ui-review.md` mục 2) |
| CR-41 (thien chỉ ra, 14/10) | Nielsen #9; sự thật FAP: sinh viên K19 trở đi đăng nhập bằng email cá nhân đã đăng ký | Accept: “Đăng nhập bằng Google”, nhận cả @fpt.edu.vn và Gmail đã đăng ký | — | SC-01 (trang 02, 03, 06) |
| CR-42 (thien hỏi, 14/10) | Nielsen #5; D-21 B | Accept: QR đóng lúc giờ vào slot + 5 phút, nhận cả mã liền trước | D-28 | SC-03 (trang 03, 06) |
| CR-43..CR-48 (bản chấm độc lập, 15/10) | Nielsen #4 (nhất quán), #5; D-28; NT-7; yêu cầu thứ tự trang của đề | Accept, sửa luôn | D-24, D-28 | SC-04, SC-06, SC-08, SC-11, SC-14, SC-15, trang web màn hình lớp (`design/final-ui-review.md` mục 4) |
| CR-49..CR-53 (bản chấm độc lập, đợt 5, 15/10) | Nielsen #4, #8; UI Simplicity A4; D-27; D-29 | Accept, sửa luôn | D-27, D-29 | SC-01, SC-02, FL-1, FL-2 (trang 01), CMP-08, CMP-14 (trang 05), trang 03, 06 |
| CR-54..CR-63 (critique Stitch IT-0b và IT-3, 15/10) | Nielsen #1, #2, #4, #8; WCAG 1.4.4, 1.4.10; D-21, D-23, D-24 | Accept 8 (Figma đã đúng), Reject CR-62, Modify CR-63, ban đầu ghi là hạn chế (thien duyệt 15/10), sau AI-29 thì sửa (D-31) | D-21, D-23, D-24 | SC-02, SC-03, SC-04, SC-05, SC-06 (`design/stitch-critique-it3.md`) |
| CR-64, CR-65 (Claude tự rà, 15/10 tối) | Nielsen #4; nhất quán dữ liệu với D-29 | Accept, sửa luôn | D-29 | SC-04, SC-05, SC-06, SC-07, CMP-11, CMP-15; 29 ảnh `assets/figma/` |
| CR-66..CR-72 (chấm chéo Codex AI-29, 15/10 tối) | Rubric “Prototype”, “Component states”; Nielsen #1, #2, #9; WCAG 1.4.10 | CR-66 Accept, đã làm; CR-67, CR-68 Accept, đã sửa; CR-69 hạn chế; CR-70 giữ 3 màn (thien chọn); CR-71 việc của nhóm; CR-72 Modify | — | SC-03, SC-05, SC-11, SC-13; `assets/figma/INDEX.md`, `design/prototype-links.md` (`ai/reviews/AI-29-triage.md`) |

## 5. Kiểm tra độ phủ (chạy trước khi nộp)

Chạy ngày 15/10/2026 trên bản repo hiện tại.

- [x] Mọi SC thuộc ít nhất một FL (rubric: Information architecture). FL-1 có SC-01..SC-06, FL-2 có SC-01 và SC-09..SC-15, FL-3 có SC-07 và SC-08 (mục 2). Đủ 15 màn.
- [x] Mọi FL phục vụ ít nhất một N của Primary Persona. FL-1 phục vụ N-04, N-03, N-11 (P-01). FL-3 phục vụ N-01 phần giảng viên sửa (P-01). FL-2 chủ yếu phục vụ P-02; nó nối với P-01 qua N-01, vì lời báo sai sinh viên gửi ở FL-2 là đầu vào của FL-3.
- [x] Mọi N có ít nhất một bằng chứng không phải Assumed, hoặc ghi rõ cách kiểm chứng. Đạt có điều kiện: N-04 và N-01 có bằng chứng Observed hoặc desk research. N-03, N-06, N-10, N-11 chỉ dựa trên phỏng vấn mô phỏng (Simulated), nên mức của chúng là giả thuyết. Cách kiểm chứng là usability test theo TC-1..TC-7 (`ux/persona.md` mục 11), chưa chạy.
- [x] Mọi CR quan trọng có quyết định và lý do trỏ về persona, heuristic hoặc ràng buộc. CR-01..CR-72 đều có dòng ở mục 4.
- [x] Mọi SC có đủ 6 mục trong handoff. `handoff/flutter-handoff.md` có 15 mục SC, mỗi mục đủ 6 phần.
