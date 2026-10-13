# PRM323 Lab 02 — Quy trình làm việc (13/10 → 16/10/2026)

Lưu trong repo `prm323-lab2-SE190533` (D-03). Người quyết định cuối cùng: thien. Claude đóng vai BA + UX/UI reviewer, phản biện mọi quyết định.

## 1. Đề bài thật sự chấm cái gì (đọc từ PRM323_Lab2.pdf)

- **45/100 điểm là quá trình**: persona + IA + flow (15), prompt Stitch và output đầu tiên (10), 3 vòng lặp có before/after + AI critique ≥ 5 phát hiện + quyết định accept/modify/reject có lý do (15), log đầy đủ (5).
- **55/100 là sản phẩm**: Final UI (20), design system + 9 component có state (15), prototype 3 flow click được (10), Flutter handoff đủ 6 mục cho **mỗi** màn + 2 bảng mapping (10).
- Bắt buộc: Google Stitch tạo UI đầu tiên; `design/DESIGN.md` phải viết **trước** prompt Stitch đầu tiên; Figma đúng 6 trang đúng thứ tự; khung 360 × 800; kiểm tra 360 dp và 412 dp.
- Kiểm tra tính trung thực: Git phải có commit rải nhiều ngày; lịch sử phiên bản Figma được xem (file "hoàn chỉnh trong một lần lưu" sẽ bị hỏi); review 5 phút: tự đi một flow và giải thích hai quyết định trong log.
- Repo nộp tên `prm323-lab2-<MSSV>` với cấu trúc cố định (ux/, design/, ai/, assets/, handoff/).
- Slide: 10–12 slide theo khung 12 mục của guideline trình bày; slide chỉ là bằng chứng cho rubric, không có điểm riêng.

## 2. Ba rủi ro lớn nhất (phản biện thẳng)

1. **"Toàn bộ luồng nghiệp vụ đa luồng" là cái bẫy về điểm.** Spec cũ có 38 màn, 8 flow. Handoff đòi 6 mục cho mọi màn, prototype đòi mọi flow click không dead-end. Mỗi màn thêm là thêm việc ở 4 tiêu chí, trong khi rubric chỉ cần ≥ 8 màn, ≥ 3 flow. Làm 38 màn nông sẽ mất điểm "partial" ở nhiều mục hơn làm 12–15 màn sâu.
2. **File Figma 22 màn hiện có là rủi ro liêm chính, không phải lợi thế.** Nó được dựng trước khi có persona, DESIGN.md và Stitch, nên đi ngược thứ tự Analyze → Generate → Critique → Refine. Hội đồng xem version history sẽ thấy UI xong trước nghiên cứu. Token và component thienui vẫn dùng lại được, nhưng màn hình nên dựng lại trong file mới theo đúng trình tự.
3. **Nghiên cứu không được bịa.** Persona guideline yêu cầu gắn nhãn Observed/Reported/Inferred/Assumed. Muốn "thuyết phục hội đồng" bằng nghiên cứu thì cần vài cuộc phỏng vấn thật (dù ngắn); nếu không có, persona phải ghi rõ là Proto-Persona và slide nói đúng như vậy.

## 3. Lịch phiên làm việc

| Phiên | Khi nào | Mục tiêu | Đầu ra | Quyết định chốt trong phiên |
|---|---|---|---|---|
| S0 Kickoff | Tối T3 13/10 | Chốt luật chơi, phạm vi, repo | Repo + commit đầu, sổ quyết định | D-01 → D-08 |
| S1 Discovery | Sáng T4 14/10 | Stakeholder map, proto-persona, kịch bản phỏng vấn | Bảng câu hỏi 6 câu hành vi | Ai là Primary, ai phỏng vấn |
| (bạn tự làm) | Trưa–chiều T4 | Phỏng vấn 3–5 người (10 phút/người) | Ghi chú ẩn danh có mã P01… | — |
| S2 Synthesis + IA | Tối T4 14/10 | Affinity, persona 12 trường, problem statement, success criterion, IA, 3+ flow Mermaid | `ux/persona.md`, `ux/user-flow.md` | Danh sách màn cuối, flow có đường lỗi |
| S3 Brief + Stitch | Sáng T5 15/10 | DESIGN.md, prompt Stitch, 3 vòng lặp, AI critique (Nielsen + WCAG + persona) | `design/DESIGN.md`, `ai/ai-design-log.md`, ảnh `assets/stitch/` | Accept/modify/reject từng phát hiện |
| S4 Figma | Chiều–tối T5 15/10 | Wireframe → Final UI → token → component → prototype | Figma 6 trang | Các trade-off UI khi dựng |
| S5 Handoff + Slide | Sáng T6 16/10 | `screen-spec.md`, `design-decisions.md` (a11y checklist), `flutter-handoff.md`, README, 12 slide, tập dượt Q&A | Repo hoàn chỉnh, slide | Nội dung slide, câu trả lời Q&A |

Mỗi phiên kết thúc bằng một commit, để Git tự chứng minh quá trình qua 4 ngày.

## 4. Luật làm việc giữa hai ta

- Mỗi quyết định có mã **D-xx** trong `process/01-so-quyet-dinh.md`: vấn đề, các phương án, khuyến nghị của Claude kèm căn cứ (persona, heuristic Nielsen, WCAG, ràng buộc đề/thời gian), quyết định của thien, lý do. Bất đồng được ghi lại nguyên văn, không xoá.
- Claude không chấp nhận lý do "thích" hoặc "AI nói vậy" (đề bài cũng cấm). Mọi lý do phải trỏ về persona, heuristic hoặc ràng buộc thật.
- Không câu hỏi nào bị bỏ qua: Claude hỏi, thien chọn. Nếu thien chưa trả lời, Claude làm tiếp theo phương án khuyến nghị và ghi rõ là tạm.
- Phần việc của bạn phải đủ để bạn tự trả lời review 5 phút: bạn chạy Stitch, bạn dựng hoặc ít nhất tự tay chỉnh Figma; Claude viết prompt, phản biện, soạn tài liệu, kiểm tra a11y.
- Cuộc trao đổi này chính là "AI assistant for critique" của đề, nên được khai báo trong log (Disclosure).

## 5. Nguồn tham chiếu dùng xuyên suốt

- PRM323_Lab2.pdf (đề, rubric 100 điểm), Lab2 Presentation Guidelines (khung 12 slide, 7 câu hỏi mẫu của hội đồng).
- Persona guideline PRM393: 12 trường lõi, 4 nhãn bằng chứng, Persona Coverage Matrix, ma trận Persona → Need → UI decision → Test.
- UI Simplicity checklist: 20 tiêu chí, 5 nhóm (Text, Color, Density, Hierarchy, Consistency/A11y) + 5-second, grayscale, reduction test. Dùng để tự chấm trước khi nộp.
- checklist.design: trang `/mobile` cần JavaScript nên không đọc được từ máy chủ; các trang con (ví dụ `/pages/login`) đọc được, sẽ trích theo từng màn khi dựng.
- Tài sản có sẵn: spec `design/mobile-figma/dac-ta-luong-va-man-hinh.md` (dùng làm nguyên liệu, không dùng làm đáp án), token/component thienui.
