# AI-29 · Chấm chéo bằng một mô hình khác (Codex), nguyên văn prompt

| Thuộc tính | Giá trị |
|---|---|
| Công cụ | OpenAI Codex, thien chạy |
| Người soạn | Claude, 15/10/2026 tối, theo yêu cầu của thien |
| Vì sao có prompt này | Lần chấm độc lập AI-27 cũng do Claude làm, nên có thể mang chung điểm mù với Claude đã làm bài. Một mô hình của hãng khác chấm mù, không biết điểm cũ, để kiểm tra thiên lệch của từng mô hình |
| Yêu cầu gốc của thien (nguyên văn, 15/10/2026 20:33) | “Và bạn kết hợp với thread review bên kia, làm cho tôi một promt thật kĩ lưỡng để tôi đưa cho codex thực hiện việc kiểm tra độc lập tăng tính anti bias của từng model” |
| Trạng thái | Chờ thien chạy |

## Cách chạy

1. Mở một phiên Codex mới, chưa có lịch sử. Nếu Codex hỏi quyền ghi vào repo, chỉ cho quyền đọc.
2. Đính kèm 5 tệp: đề `PRM323_Lab2.pdf`, `PRM323_Lab2_Presentation_Assessment_Guidelines_EN.docx`, `PRM323_Lab2_HuongDan_Slide_Presentation_Demo.docx`, `ui_simplicity_checklist.html`, và bản PDF của bộ slide (tải từ nút Download của deck). **Không** đính kèm báo cáo chấm của Claude ở bước này.
3. Dán nguyên văn **Phần 1**. Chờ Codex trả báo cáo xong.
4. Sau đó mới đính kèm bản PDF của báo cáo Claude (AI-27) và dán **Phần 2**.
5. Gửi lại cho Claude cả hai câu trả lời của Codex. Claude ghi vào `ai/ai-design-log.md` mục AI-29 và đặt mã cho lỗi mới từ CR-66.

Không sửa prompt giữa chừng. Nếu phải chạy lại, ghi lại số lần.

## Phần 1 · Chấm mù

```text
ROLE
You are an independent examiner for the FPT University course PRM323, Lab 2 "AI-Assisted UI/UX Design (Google Stitch → Figma)". You have no stake in this project. You did not build it and nobody you work with built it. Your job is to grade it the way a strict but fair lecturer would, and to find what the students and their AI assistant missed.

IMPORTANT CONTEXT ABOUT BIAS
Most documents in this repository were drafted by another AI model (Claude) working for the students, and an earlier review of this work was also done by that same model. You are being used precisely because you are a different model. So:
- Treat every claim written in the repository as a claim to verify, not as a fact. This includes counts ("72 frames", "65 findings", "0 broken links"), contrast ratios, statements like "approved", "fixed", "verified", and any self-assessment tables.
- Do not reward polish, length or confident tone. A long, well-formatted document that does not meet a rubric line still scores low on that line.
- Do not penalise the use of AI by itself. The assignment requires AI. Penalise only missing disclosure, unverifiable claims, decisions not justified by evidence, and work the rubric asks for that is not there.
- If you notice yourself agreeing with the repository's own conclusions, stop and look for the strongest counter-evidence before you score.

SOURCES OF TRUTH, IN THIS ORDER
1. The attached assignment PDF (PRM323_Lab2.pdf) and its rubric. This is the only source for what is required and how many points each line is worth.
2. The attached Presentation Assessment Guidelines (EN) and the Vietnamese slide and demo guide.
3. The attached UI Simplicity checklist (HTML).
4. Public pages, if you can open them: https://prm393-material.web.app/persona-guideline and https://www.checklist.design/mobile. If you cannot open a page, say so and do not guess its content.
5. The repository: https://github.com/thiengthb/prm323-lab2-SE190533 (branch main). Record the exact commit hash you audited at the top of your report.
6. Images exported from Figma in assets/figma/ and from Stitch in assets/stitch/ (with HTML in assets/stitch/code/). The Figma file itself is https://www.figma.com/design/9yDa2ylfREmndW1mK1hf7w. If you cannot open it, grade Figma only from the exported images and say which rubric lines this limits.
7. The attached PDF of the slide deck.

PROCEDURE (follow the order; do not skip ahead)
Step 1. Read only the assignment PDF and the guidelines. Before opening the repository, write down the rubric as a table: line, max points, what a full-mark submission must show, what a half-mark submission typically looks like. Also list every hard requirement (for example: DESIGN.md written before the first Stitch prompt, Figma pages in a fixed order, 360×800 frames, checks at 360 dp and 412 dp, repository name and folder structure, number of screens, flows, components, iterations, critique findings). Keep this table in your final report.
Step 2. Open the repository. For each rubric line, collect evidence: file path and line numbers, image path, commit hash, or slide number. Prefer primary evidence (the artifact itself) over a document that describes the artifact.
Step 3. Verify claims. Pick at least 10 concrete, checkable claims from README.md, design/design-decisions.md, design/figma-build.md, design/final-ui-review.md and the slides, and check each one against primary evidence you can access (images, HTML, git history, cross-references between files). Mark each as Verified, Contradicted (show both sides), or Unverifiable from what you can access.
Step 4. Check process integrity:
   - git history: dates, authorship, whether the order of commits matches the claimed process (research → persona → DESIGN.md → Stitch → critique → Figma → handoff). Use git log with dates.
   - whether DESIGN.md existed before the first Stitch prompt (compare commit dates of design/DESIGN.md and ai/prompts/AI-18-stitch-first-prompt.md and assets/stitch/IT-0-*).
   - whether the AI disclosure (ai/ai-design-log.md, README.md) covers every AI use you can find evidence of, and whether any log entry quotes a "student decision" that has no trace elsewhere.
   - whether research labelled Simulated is ever presented as if it came from real people.
   - consistency of the story across files: names, times, counts (for example scans vs people in the room), decision IDs (D-xx) and critique IDs (CR-xx). List every inconsistency you find with both locations.
Step 5. Review the design itself, independently of the documents:
   - Look at every image in assets/figma/ and the Stitch images. Apply Nielsen's 10 heuristics, WCAG 2.2 AA (contrast, target size, reflow, text size, non-colour cues), the UI Simplicity checklist, and the persona's goals in ux/persona.md.
   - For each primary flow in ux/user-flow.md, walk it screen by screen using the images. Note dead ends, missing states (loading, empty, error, success), and places where the screen contradicts the flow or the decision log.
   - Give at least 12 design findings. Each finding: screen ID, what is wrong, which heuristic or WCAG criterion, severity (High: wrong data, blocks the task or misleads; Medium: violates a stated rule; Low: polish), and a concrete fix.
Step 6. Score. For each rubric line give: points awarded, max, a one-sentence reason, the evidence, and what exactly would raise it. Then give the total, and a range (lowest and highest score you consider defensible) with your confidence. Do not give half-credit for things that are only promised or described.
Step 7. Prepare the viva. List the 10 questions a lecturer is most likely to ask in the 5-minute review, each with why it is risky for this group and what evidence in the repository would answer it. Include at least two questions about who did what in a group of four, and two about the role of AI.
Step 8. Prioritise fixes. The presentation is on Friday 16/10/2026 at 14:30 (Vietnam time). List at most 10 fixes ordered by expected points gained per hour of work, each with the rubric line it affects and an estimate in hours.

RULES
- Stay blind to the earlier score. Until you have finished Step 6, do not open ai/prompts/AI-27-independent-review.md, ai/prompts/AI-29-codex-independent-review.md, or the AI-27 section of ai/ai-design-log.md, and do not search the repository for scores. If you see an earlier score anyway, say where and when in section 0 of your report.
- Read-only. Do not commit, push, open pull requests, or edit any file.
- Every factual statement in your report must point to evidence (path:line, image path, commit hash, slide number) or be labelled "inferred" or "unverifiable".
- Do not invent rubric lines, point values, or requirements. If the PDF is ambiguous, quote it and state how you interpreted it.
- Do not assume the repository is right when it disagrees with the assignment PDF.
- If you cannot access something (Figma, a web page, an attachment), say so in a "Limits of this review" section and do not fill the gap with guesses.
- Write the report in Vietnamese. Keep IDs, file paths and heuristic names as they are.

OUTPUT FORMAT (Markdown, these sections in this order)
0. Commit audited, date and time of the review, what you could and could not access
1. Rubric table from Step 1
2. Score table from Step 6, total, defensible range, confidence
3. Claim verification table from Step 3
4. Process integrity findings from Step 4
5. Design findings from Step 5 (table)
6. Inconsistencies across files (table with both locations)
7. Viva questions from Step 7
8. Prioritised fixes from Step 8
9. Limits of this review
```

## Phần 2 · So với bản chấm của Claude (chỉ gửi sau khi có báo cáo Phần 1)

```text
Now I am attaching the earlier review of the same work, written by Claude (the same model family that drafted most of the repository). Do not change the scores in your first report. Instead, compare the two reviews:

1. Score comparison: for each rubric line, both scores side by side and the difference.
2. Where you disagree by 2 points or more on a line, explain who is more likely right and why, with evidence. Be willing to say Claude was right and you were wrong.
3. Findings Claude reported that you missed, and whether they hold up when you check them.
4. Findings you reported that Claude missed. For each, say whether it looks like a blind spot of a model that also helped build the work (for example: trusting its own documents, counting its own fixes as done, accepting its own wording), or simply an oversight.
5. Signs of bias in either review: leniency, harshness, anchoring on the repository's self-assessment, rewarding polish, or penalising AI use itself.
6. A final reconciled score with a range, and the three fixes both reviews agree matter most before Friday 16/10/2026 14:30.

Same rules as before: read-only, evidence for every claim, Vietnamese.
```
