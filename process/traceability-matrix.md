# Ma trận truy vết (traceability)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | PRC-TRACE |
| Trạng thái | Đã điền mục 1–4 (14/10/2026); cột handoff điền ở S5 |
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
| SC-01 | CMP-01 | Trang 03, hàng SC-01: Default; Lỗi tài khoản | `handoff/flutter-handoff.md` (S5) |
| SC-02 | CMP-03, CMP-10, CMP-01, CMP-04, CMP-05, CMP-07 (skeleton) | Trang 03, hàng SC-02: Default 06:58; Sau slot 1, chờ điền lên FAP; Đang tải; Sau slot 1, đã lên FAP; Có báo sai mới | `handoff/flutter-handoff.md` (S5) |
| SC-03 | CMP-05, CMP-14 (Đang mở, Đã đóng), CMP-11, CMP-10, CMP-01, CMP-06 (Confirmation) | Trang 03, hàng SC-03: Default; QR đã đóng; Mở từ xa; Dialog đóng QR sớm; trang web Màn hình phòng P.205 (D-24) | `handoff/flutter-handoff.md` (S5) |
| SC-04 | CMP-05, CMP-11, CMP-01 | Trang 03, hàng SC-04: Default (khớp); Số quét lớn hơn số người | `handoff/flutter-handoff.md` (S5) |
| SC-05 | CMP-05, CMP-15, CMP-01 | Trang 03, hàng SC-05: Default 1/3; Đã kiểm tra 3/3 | `handoff/flutter-handoff.md` (S5) |
| SC-06 | CMP-05, CMP-11, CMP-10, CMP-01, CMP-06 (Confirmation) | Trang 03, hàng SC-06: Default; Dialog xác nhận; Chờ điền lên FAP; Đã lên FAP | `handoff/flutter-handoff.md` (S5) |
| SC-07 | CMP-05, CMP-03, CMP-10, CMP-04, CMP-08 | Trang 03, hàng SC-07: Default; Trống; Sau khi sửa; Sau khi từ chối | `handoff/flutter-handoff.md` (S5) |
| SC-08 | CMP-05, CMP-10, CMP-01, CMP-06 (Destructive) | Trang 03, hàng SC-08: Default; Dialog từ chối; Đã sửa | `handoff/flutter-handoff.md` (S5) |
| SC-09 | CMP-05, CMP-12, CMP-03, CMP-10, CMP-01 (Disabled), CMP-04 | Trang 03, hàng SC-09: Default; Có phiên đang mở; Buổi tối, có buổi Vắng; Đã quét, chờ xác nhận | `handoff/flutter-handoff.md` (S5) |
| SC-10 | CMP-01, CMP-09 | Trang 03, hàng SC-10: Default; Chưa có quyền camera | `handoff/flutter-handoff.md` (S5) |
| SC-11 | CMP-05, CMP-07 (Spinner), CMP-10, CMP-01, CMP-09 | Trang 03, hàng SC-11: Đang xác thực; Thành công; Mã hết hạn; Mất mạng | `handoff/flutter-handoff.md` (S5) |
| SC-12 | CMP-05, CMP-10, CMP-12, CMP-01 | Trang 03, hàng SC-12: Còn hạn; Đã qua hạn | `handoff/flutter-handoff.md` (S5) |
| SC-13 | CMP-05, CMP-02, CMP-12, CMP-01 (Loading) | Trang 03, hàng SC-13: Nhập; Đang gửi; Mất mạng | `handoff/flutter-handoff.md` (S5) |
| SC-14 | CMP-05, CMP-13, CMP-10, CMP-01, CMP-04, CMP-08 | Trang 03, hàng SC-14: Đã gửi; Đã sửa; Bị từ chối; Trống | `handoff/flutter-handoff.md` (S5) |
| SC-15 | CMP-05, CMP-01 | Trang 03, hàng SC-15: Một trạng thái | `handoff/flutter-handoff.md` (S5) |

## 4. AI critique → Quyết định → Thay đổi trong Figma

| Phát hiện CR | Heuristic / WCAG / Persona | Quyết định (Accept / Modify / Reject) | D | Màn hình SC bị đổi |
|---|---|---|---|---|
| CR-01..CR-17 (IT-0) | Nielsen #1, #4, #8; WCAG 1.4.3; NT-2, NT-7 | 16 Accept, CR-07 Reject (đo lại thấy đạt) | D-22, D-23 | SC-03, SC-09, SC-11 (`design/stitch-critique-it0.md`) |
| CR-18..CR-23 (IT-1) | WCAG 1.4.10, 1.4.11; Nielsen #1, #4 | Accept; CR-21 Modify (làm ở Figma) | — | SC-03, SC-09, SC-11 (`design/stitch-critique-it1.md`) |
| CR-21 | DESIGN.md mục 4 | Modify: Figma chỉ dùng biến DESIGN.md | D-20, D-22 | Mọi màn (trang 04, 05) |
| CR-24 | WCAG 1.4.10; NT-3 | Accept: xuống dòng, không cắt dữ liệu | — | SC-03, SC-04 (CMP-11) |
| CR-25 | Nielsen #1; CMP-14 | Accept: trạng thái QR đã đóng | — | SC-03 · QR đã đóng (CMP-14) |
| IT-3b (góp ý của thien, 14/10) | Nielsen #8 (bỏ phần trang trí), #1; NT-4, NT-5 | Accept: bỏ banner, chip, phụ đề thừa; thống nhất giờ trong ngày; huy hiệu CMP-04 không bị cắt; mở từ xa theo D-24 | D-24 | SC-02, SC-03, SC-04, SC-07, SC-09, SC-11, SC-14 (`design/figma-build.md` mục 6) |

## 5. Kiểm tra độ phủ (chạy trước khi nộp)

- [ ] Mọi SC thuộc ít nhất một FL (rubric: Information architecture)
- [ ] Mọi FL phục vụ ít nhất một N của Primary Persona
- [ ] Mọi N có ít nhất một bằng chứng không phải Assumed, hoặc ghi rõ cách kiểm chứng
- [ ] Mọi CR quan trọng có quyết định và lý do trỏ về persona, heuristic hoặc ràng buộc
- [ ] Mọi SC có đủ 6 mục trong handoff
