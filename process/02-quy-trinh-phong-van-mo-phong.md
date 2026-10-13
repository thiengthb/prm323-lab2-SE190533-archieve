# Quy trình phỏng vấn mô phỏng bằng AI (D-05, D-05a, D-09)

Bối cảnh: thời gian 3 ngày, GVHD cho phép dùng AI tạo dữ liệu phỏng vấn. Mục tiêu là dữ liệu **đa dạng, độc lập, không bị dẫn dắt**, và được ghi nhãn trung thực để hội đồng không coi là dữ liệu thật.

## 1. Phản biện phương án "AI thay người thật"

Phương án dùng được, nhưng có 5 điểm yếu đã được biết rõ ở người trả lời mô phỏng. Mỗi điểm có biện pháp đi kèm:

| Điểm yếu | Biện pháp |
|---|---|
| Dễ đồng tình, nói điều người hỏi muốn nghe | Người trả lời **không biết** sản phẩm của ta, không biết giả thuyết; được dặn có quyền phản đối, nói "không biết", "không quan tâm" |
| Đồng nhất, nghe như cùng một người | Mỗi người là một subagent riêng, chỉ thấy thẻ hồ sơ của mình; hồ sơ khác nhau về tuổi nghề, thiết bị, thái độ với công nghệ; có người hoài nghi |
| Trả lời "ý kiến" hay "mong muốn" thay vì hành vi | Câu hỏi chỉ hỏi về **lần gần nhất đã làm** (6 câu hành vi của persona guideline), không hỏi "bạn có muốn tính năng X không" |
| Bịa số liệu nghe rất chắc | Bên tổng hợp ghi số liệu từ phỏng vấn mô phỏng là **Simulated**, không dùng làm số thống kê |
| Người hỏi và người tổng hợp là cùng một "đầu óc" | Tách 5 vai riêng: soạn câu hỏi, kiểm tra thiên lệch, người trả lời, người hỏi đào sâu, người tổng hợp; mỗi vai một subagent không thấy ngữ cảnh của vai khác |

**Đề xuất tốt hơn (D-05a):** giữ phỏng vấn mô phỏng làm nguồn chính, cộng thêm hai nguồn thật rất rẻ:
1. **Tự quan sát của thien**, vì bạn là sinh viên FPTU thật: ghi lại 3 buổi gần nhất bạn được điểm danh (cách làm, mất bao lâu, có sai sót gì). Nhãn **Observed**.
2. **Một hoặc hai cuộc trò chuyện 5 phút** với bạn cùng lớp hoặc một giảng viên, chỉ để kiểm chứng 3 phát hiện mạnh nhất từ dữ liệu mô phỏng. Nhãn **Reported**.

Lợi ích: slide nghiên cứu có thể nói "8 phỏng vấn mô phỏng, kiểm chứng bằng 2 người thật và quan sát của chính tôi". Câu đó đứng vững hơn nhiều khi hội đồng hỏi "dữ liệu này ở đâu ra".

## 2. Các vai trong quy trình

| Bước | Vai | Thấy gì | Không thấy gì | Đầu ra |
|---|---|---|---|---|
| 1 | Claude (BA) | Toàn bộ | — | Câu hỏi nghiên cứu (điều ta muốn biết, không phải giả thuyết) |
| 2 | Agent soạn câu hỏi | Câu hỏi nghiên cứu, bối cảnh điểm danh ở FPTU | Sản phẩm, giải pháp QR, persona dự kiến | Bộ câu hỏi theo vai |
| 3 | Agent kiểm tra thiên lệch | Bộ câu hỏi | Câu hỏi nghiên cứu, sản phẩm | Bảng lỗi (dẫn dắt, hai ý trong một câu, giả định, gợi ý giải pháp) và bộ câu hỏi đã sửa |
| 4 | Agent người trả lời R01–R08 (mỗi người một agent) | Chỉ thẻ hồ sơ của mình và câu hỏi | Sản phẩm, người trả lời khác | Bản ghi phỏng vấn |
| 5 | Agent người hỏi đào sâu | Bản ghi của một người | Sản phẩm, giả thuyết | 2–3 câu hỏi đào sâu trung lập, người trả lời trả lời tiếp |
| 6 | Agent tổng hợp | Chỉ các bản ghi có mã | Sản phẩm, giả thuyết | Affinity board, mỗi ý dẫn mã nguồn, chỗ thiếu ghi UNKNOWN |
| 7 | Agent phản biện tổng hợp | Bản ghi + tổng hợp | — | Các chỗ khái quát quá mức hoặc chỉ có ở một người |
| 8 | Claude + thien | Toàn bộ | — | Persona, Coverage Matrix, quyết định |

## 3. Danh sách người trả lời đề xuất (D-09)

| Mã | Vai trò | Khác biệt cần có |
|---|---|---|
| R01 | Giảng viên lâu năm, dạy môn lý thuyết | Ít dùng công nghệ, quen gọi tên trên giấy, hoài nghi app mới |
| R02 | Giảng viên trẻ, 5 lớp mỗi kỳ | Thạo công nghệ, nhập FAP thường xuyên, bận nhất |
| R03 | Giảng viên thỉnh giảng | Dạy nhiều nơi, di chuyển giữa ca, chủ yếu cầm điện thoại |
| R04 | Giảng viên dạy thực hành, lớp 35–40 SV | Phòng lab ồn, SV vào muộn rải rác, hay có tranh cãi điểm danh |
| R05 | SV năm 1 | Chăm, điện thoại Android cũ, mạng 4G yếu trong phòng |
| R06 | SV năm 3 | Đi làm thêm, hay đến muộn, từng bị ghi vắng sai |
| R07 | SV có hạn chế thị lực | Dùng cỡ chữ lớn, khó đọc màn hình chiếu xa |
| R08 | Cán bộ phòng đào tạo | Xử lý khiếu nại điểm danh, không trực tiếp điểm danh (Supporting) |

Giảng viên chiếm 4/8 vì Primary Persona là giảng viên (D-04).

## 4. Nhãn bằng chứng dùng trong persona

- **Simulated (Sxx-Rnn)**: từ phỏng vấn mô phỏng AI.
- **Observed (O-nn)**: thien tự quan sát.
- **Reported (T-nn)**: người thật kể lại.
- **Assumed**: chưa có nguồn nào, ghi rõ cần kiểm chứng.

Mọi prompt và câu trả lời của subagent được lưu nguyên văn trong `research/` của repo, và được khai báo trong `ai/ai-design-log.md` mục Disclosure.
