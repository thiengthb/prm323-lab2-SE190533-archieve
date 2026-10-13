# Ma trận truy vết (traceability)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | PRC-TRACE |
| Trạng thái | Khung, được điền dần sau mỗi phiên |
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
| *Điền sau khi tổng hợp phỏng vấn (S2)* | | | |

## 2. Nhu cầu → Flow → Màn hình

| Nhu cầu N | Flow FL | Màn hình SC | Tiêu chí thành công đo được |
|---|---|---|---|
| *Điền ở S2–S3* | | | |

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
