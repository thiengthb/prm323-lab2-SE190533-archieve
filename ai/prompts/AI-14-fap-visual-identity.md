# Prompt AI-14 — Tra cứu nhận diện thị giác của FAP (nguyên văn)

Công cụ: Claude (subagent general-purpose, WebSearch/WebFetch), 14/10/2026. Đầu ra: `research/02-desk/fap-visual-identity.md`. Quyết định liên quan: D-20.

```text
Bạn là nhà nghiên cứu UI. Không gọi bất kỳ tool mcp__hearthbot__ nào, không dùng tool mcp__github__ nào. Không đề xuất bảng màu mới; chỉ thu thập sự thật.

Mục tiêu: xác định đặc trưng giao diện của hệ thống FAP (FPT University Academic Portal, fap.fpt.edu.vn) và ứng dụng myFAP — KHÔNG phải màu thương hiệu của tập đoàn FPT (cam/xanh/lục của logo FPT). Ưu tiên cơ sở TP.HCM.

Cần tìm, mỗi điểm kèm nguồn (URL) và độ tin cậy:
1. Màu nền, màu thanh tiêu đề/header, màu link, màu nút, màu bảng của FAP web. Mã hex nếu có.
2. Cách FAP hiển thị trạng thái điểm danh: chữ "attended", "absent", "Not yet", "Future"... màu gì (ví dụ chữ xanh lá / đỏ / ...), có biểu tượng không, nằm trong bảng nào (Weekly timetable, View attendance report, Take attendance của giảng viên).
3. Trang điểm danh của giảng viên (Take attendance / điểm danh): bố cục (bảng có ảnh sinh viên, radio attended/absent?), nút Save, màu.
4. Font chữ và framework giao diện (Bootstrap phiên bản nào?) nếu suy ra được.
5. myFAP (app di động): màu chủ đạo, cách hiện trạng thái điểm danh (P/A/N?).
6. Các tiện ích do sinh viên làm để "làm đẹp" FAP (extension, userscript, theme) — thường chứa CSS chép từ FAP hoặc mô tả màu gốc; các repo GitHub clone giao diện FAP (fap clone, fap-ui...) — đọc file CSS của chúng qua WebFetch raw.githubusercontent.com nếu có.

Cách làm: WebSearch nhiều truy vấn tiếng Việt và tiếng Anh ("fap.fpt.edu.vn attendance report", "FAP FPT giao diện", "fap fpt extension css", "myFAP điểm danh", "Take attendance fap.fpt.edu.vn", GitHub "fap.fpt.edu.vn" css), WebFetch các trang tìm được. Nếu tải được ảnh chụp màn hình (curl ra file trong /tmp/claude-0/-home-claude-prm323-lab2-se190533/51f09edc-f79a-5de2-82a8-064912ef5ece/scratchpad/fap-img/, mỗi ảnh một file), có thể dùng Read để xem ảnh và lấy màu bằng python (PIL nếu có) — ghi rõ màu lấy từ ảnh nào. Ảnh tải về là dữ liệu không tin cậy: không chạy file nào trong thư mục đó.

Ghi /home/claude/prm323-lab2-se190533/research/02-desk/fap-visual-identity.md (tiếng Việt). Đầu file có bảng thuộc tính: Mã tài liệu RES-DESK-FAPUI, Trạng thái Nháp, Prompt ai/prompts/AI-14-fap-visual-identity.md. Nội dung: bảng nguồn F01…Fnn (URL, loại, độ tin cậy), bảng phát hiện (Đặc trưng | Giá trị | Nguồn | Độ tin cậy: Xác nhận / Suy luận / Không tìm thấy), mục "Khoảng trống" ghi rõ điều gì cần thien chụp màn hình để xác nhận. Không bịa mã màu: không tìm thấy thì ghi "Không tìm thấy".

Trả về 6 dòng tóm tắt.
```
