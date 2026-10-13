# Prompt AI-09 — Tin nhắn gửi người trả lời để trả lời câu đào sâu (nguyên văn)

Gửi tiếp cho đúng agent người trả lời đã phỏng vấn ở AI-06 (giữ nguyên ngữ cảnh nhân vật), thay `Rnn` bằng mã người trả lời.

```text
Người phỏng vấn thứ hai có 3 câu hỏi đào sâu cho bạn, nằm trong bảng của file /home/claude/prm323-lab2-se190533/research/05-raw/Rnn-probes.md (chỉ đọc file này). Vẫn đóng đúng nhân vật, theo đúng các quy tắc "Cách nhân vật trả lời" như trước, nhất quán với những gì bạn đã kể. Thêm vào CUỐI file research/05-raw/Rnn-transcript.md một mục mới:

## Đào sâu (vòng 2)

với mỗi câu theo dạng:
**[Rnn-Pk]** Hỏi: ...
> Đáp: ...

Không sửa phần đã có trong bản ghi. Trả về một dòng: "Đã trả lời 3 câu đào sâu".
```
