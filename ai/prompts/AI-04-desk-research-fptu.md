# Prompt A3 — Agent nghiên cứu bàn giấy bối cảnh FPTU (nguyên văn)

Công cụ: Claude (subagent general-purpose, có WebSearch và WebFetch), 13/10/2026. Đầu ra: `research/00-boi-canh-fptu.md`.

```text
Bạn là nhà nghiên cứu bàn giấy (desk research) cho một đồ án UX. Không gọi bất kỳ tool mcp__hearthbot__ nào. Dùng WebSearch (mode "standard", khi kết quả mỏng thì "extended") và WebFetch.

Mục tiêu: lập "hồ sơ bối cảnh" về việc ĐIỂM DANH và CHUYÊN CẦN tại Đại học FPT (FPTU, các cơ sở Hà Nội, HCM, Đà Nẵng, Cần Thơ, Quy Nhơn) để sau này cá nhân hóa các nhân vật mô phỏng (giảng viên, sinh viên, cán bộ phòng đào tạo/CTSV). Không đề xuất giải pháp hay sản phẩm.

Tìm và tổng hợp, mỗi ý kèm URL nguồn và loại nguồn (Chính thức / Báo chí / Diễn đàn-MXH / Blog):
1. Quy định chính thức: tỷ lệ vắng tối đa (80% chuyên cần?), hậu quả, slot học (giờ các slot), cách điểm danh trên FAP (fap.fpt.edu.vn), ai được sửa điểm danh, thời hạn giảng viên phải điểm danh, quy trình khiếu nại/xin sửa điểm danh, nghỉ có phép.
2. Thực tế trải nghiệm từ sinh viên và giảng viên: điểm danh gọi tên, điểm danh hộ, đi muộn, bị ghi vắng nhầm, "vắng quá 20%" trượt môn, cách SV theo dõi % vắng trên FAP, app FAP mobile (nếu có), giảng viên thỉnh giảng, lớp đông, phòng học, wifi/mạng trong trường, thiết bị. Nguồn: các trang confession FPTU, group Facebook, Reddit, Voz, TikTok/YouTube mô tả, blog, báo (VnExpress, Tuổi Trẻ, ...).
3. Thông tin nhân khẩu học tổng quát hữu ích: quy mô lớp điển hình, ngành chính (SE, AI, GD, BA...), học kỳ, "kỳ OJT", tiếng Anh dự bị, giảng viên cơ hữu vs thỉnh giảng, block 5 tuần (nếu có).
4. Các hệ thống/khác biệt giữa cơ sở nếu tìm thấy.

Quy tắc:
- Chỉ tổng hợp pattern; KHÔNG ghi tên, ảnh, tài khoản, hay chi tiết nhận dạng cá nhân của người thật. Trích dẫn ngắn (≤ 25 từ) được phép nếu ghi nguồn, không ghi tên người viết.
- Ghi rõ độ tin cậy: Đã xác nhận (nguồn chính thức) / Nhiều nguồn không chính thức / Một nguồn / Không tìm thấy. Không bịa; nếu không tìm thấy thì ghi "Không tìm thấy".
- Cuối file: mục "Gợi ý chi tiết cá nhân hóa cho nhân vật mô phỏng" (10–20 gạch đầu dòng chi tiết đời thường có căn cứ, ví dụ thói quen, thiết bị, lịch slot, nỗi lo), mỗi gạch đầu dòng trỏ về nguồn đã liệt kê.

Ghi một file: /mnt/project-files/design/lab02/research/00-boi-canh-fptu.md (tiếng Việt). Trả về tóm tắt 5 dòng gồm 3 phát hiện đáng tin nhất và chỗ còn trống.
```
