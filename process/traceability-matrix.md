# Ma trận truy vết (traceability)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | PRC-TRACE |
| Trạng thái | Đã điền mục 1–2 (S2, 14/10/2026); mục 3–4 điền ở S3–S5 |
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
| N-04, N-03, N-11 | FL-1 | SC-01..SC-06 | TC-1, TC-3 |
| N-01, N-06, N-10 | FL-2 | SC-01, SC-09..SC-13 | TC-4, TC-5, TC-6 |
| N-01 | FL-3 | SC-02, SC-07, SC-08, SC-12, SC-13 | TC-2 |

## 3. Màn hình → Component → Handoff

| Màn hình SC | Component CMP (variant) | Frame Figma | Mục handoff |
|---|---|---|---|
| *Điền ở S4–S5* | | | |

## 4. AI critique → Quyết định → Thay đổi trong Figma

| Phát hiện CR | Heuristic / WCAG / Persona | Quyết định (Accept / Modify / Reject) | D | Màn hình SC bị đổi |
|---|---|---|---|---|
| *Điền ở S3* | | | | |

## 5. Kiểm tra độ phủ (chạy trước khi nộp)

- [ ] Mọi SC thuộc ít nhất một FL (rubric: Information architecture)
- [ ] Mọi FL phục vụ ít nhất một N của Primary Persona
- [ ] Mọi N có ít nhất một bằng chứng không phải Assumed, hoặc ghi rõ cách kiểm chứng
- [ ] Mọi CR quan trọng có quyết định và lý do trỏ về persona, heuristic hoặc ràng buộc
- [ ] Mọi SC có đủ 6 mục trong handoff
