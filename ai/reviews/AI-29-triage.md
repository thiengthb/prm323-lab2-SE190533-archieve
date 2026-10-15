# AI-29 · Phân loại từng phát hiện của Codex (Phần 1)

| Thuộc tính | Giá trị |
|---|---|
| Đầu vào | `ai/reviews/AI-29-codex-phan-1.md` (nguyên văn), commit Codex chấm `1242923` |
| Người phân loại | Claude, 15/10/2026 tối |
| Trạng thái | Đã duyệt (thien, 15/10/2026): chọn “Sửa 3 lỗi chữ” trên thẻ quyết định. CR-63, CR-67, CR-68 đã sửa; CR-70 giữ 3 màn đại diện |
| Cách kiểm | Mở lại từng frame trên Figma (trang 03 và 06) và đối chiếu với `design/screen-spec.md`. Mỗi kết luận bên dưới trỏ về một ảnh hoặc một dòng trong repo |

**Lưu ý về thiên lệch:** người phân loại là Claude, cũng là mô hình đã dựng phần lớn bài. Vì vậy một phát hiện của Codex chỉ được ghi là “Không đúng” khi có ảnh xuất từ Figma cho thấy điều ngược lại. Ảnh đó nay nằm trong repo để ai cũng kiểm lại được. Phát hiện nào chỉ phản bác được bằng lời mô tả thì giữ là “Đúng một phần” hoặc “Đúng”.

## 1. Phát hiện quan trọng nhất: repo không cho thấy phần lớn Figma

Codex chỉ chấm từ những gì có trong repo, như một giảng viên chấm bằng AI sẽ làm. Lúc Codex chấm, `assets/figma/` có ảnh của 32 trong 73 frame trang 03, và repo không có bằng chứng nào về liên kết prototype. Hệ quả là nhiều trạng thái đã vẽ bị chấm là thiếu (phát hiện 3, 6, 7, 8, 9, 13), và phần prototype chỉ được 5/10 vì “không thể thực thi”.

| Mã | Phát hiện | Mức | Quyết định đề xuất | Đã làm |
|---|---|---|---|---|
| CR-66 | Bằng chứng trong repo không phủ hết Figma: thiếu ảnh 41 frame trạng thái (dialog, loading, lỗi, kết quả) và không có bảng liên kết prototype. Claude và bản chấm AI-27 đều không thấy, vì cả hai đều mở được Figma trực tiếp | Cao | Accept | Xuất 41 ảnh vào `assets/figma/`, thêm `assets/figma/INDEX.md` (73 frame, mỗi frame một ảnh, có node id) và `design/prototype-links.md` (script đọc trang 06: 84 frame, 12 điểm bắt đầu, 166 tương tác, 0 liên kết hỏng, frame nào cũng có lối vào và lối ra) |

## 2. Phát hiện thiết kế (mục 5 của Codex)

| # | Màn | Kết luận | Bằng chứng | Mã và quyết định đề xuất |
|---|---|---|---|---|
| 1 | SC-05 | Đúng một phần. Ô ảnh FAP là chỗ giữ chỗ có chủ ý: bài không dùng ảnh người thật. Nhưng màn không nói đó là ảnh minh họa, nên người xem tưởng bản thật cũng không có ảnh | `SC-05-kiem-tra-ngau-nhien.png` | CR-72 · Thấp · **Modify**: nói rõ trong spec và khi thuyết trình rằng bản thật lấy ảnh hồ sơ FAP. Không đổi Figma |
| 2 | SC-04 | Đúng. Cùng lỗi với CR-63 (“Chênh −1” cạnh “Dư 1 lượt quét”). Codex xếp mức Cao, Claude xếp Thấp. Hai mô hình độc lập cùng bắt được chỗ này | `SC-04-doi-chieu-si-so.png` | Không mở mã mới. thien mở lại CR-63 và chọn sửa: ô thứ ba thành “Quét dư +1” (D-31). **Đã sửa** |
| 3 | SC-03 | Không đúng. Có dialog “Đóng QR sớm?” với Hủy và Đóng QR | `SC-03-dialog-dong-qr-som-overlay.png`; `design/prototype-links.md` (frame [03] → overlay [15]) | **Reject**. Codex không thấy vì thiếu ảnh (CR-66) |
| 4 | SC-03 | Đúng. Nút “Chiếu tạm mã từ điện thoại” không có màn đích | `design/prototype-links.md` (frame [77] không có liên kết từ nút này) | Đã biết từ CR-48, đang ghi là nút ngoài kịch bản demo. Giữ là hạn chế |
| 5 | SC-03 mở từ xa | Đúng. Câu “để mã không bị chụp gửi ra ngoài” hứa quá mức: người trong phòng vẫn chụp được mã trên màn hình lớp | `SC-03-mo-tu-xa.png`; `design/screen-spec.md` dòng 122 | CR-67 · Trung bình · **Accept, đã sửa**: câu mới nói mã chỉ xuất hiện trong phòng học, vẫn có thể bị chụp lại, nên vẫn đối chiếu sĩ số |
| 6 | SC-05 | Không đúng. Có frame sau khi kiểm tra, mỗi thẻ có kết quả và banner nói rõ lượt quét của Linh sẽ bị ghi Vắng | `SC-05-da-kiem-tra-3-3.png` | **Reject** |
| 7 | SC-06 | Không đúng. Dialog nói rõ extension trên laptop sẽ điền FAP; sau đó có hai kết quả “Chờ điền lên FAP” (có nút Thử điền lại) và “Đã lên FAP” | `SC-06-dialog-xac-nhan-overlay.png`, `SC-06-cho-dien-len-fap-nt-5.png`, `SC-06-da-len-fap.png` | **Reject** |
| 8 | SC-08 | Phần lớn không đúng. Có dialog từ chối; lý do lấy từ bằng chứng có sẵn và được hiện trước khi bấm. Không có ô nhập lý do tự do và không có hoàn tác. Đây là chủ ý: giữ TC-2 trong 3 lần chạm | `SC-08-dialog-tu-choi-destructive.png`; `design/screen-spec.md` dòng 250–254 | **Reject**, ghi lý do |
| 9 | SC-10, SC-11 | Không đúng. Sheet “Không quét được?” và màn mất mạng đều nói “giơ tay báo giảng viên để được ghi tay” và có nút Thử lại | `SC-11-sheet-khong-quet-duoc.png`, `SC-11-mat-mang.png` | **Reject** |
| 10 | SC-13 | Đúng một phần. Đã có “Đang gửi” và “Mất mạng” (giữ chữ đã nhập). Chưa vẽ ô trống và quá 200 ký tự; hai quy tắc này chỉ có trong spec | `SC-13-dang-gui.png`, `SC-13-mat-mang-loi-co-duong-hoi-phuc.png`; `design/screen-spec.md` dòng 372 | CR-69 · Trung bình · **Ghi là hạn chế** |
| 11 | SC-01 | Không đúng. Vai trò lấy theo tài khoản đăng nhập, mỗi tài khoản một vai trò; có frame sai tài khoản | `SC-01-loi-tai-khoan.png`; `design/screen-spec.md` dòng 47 | **Reject** |
| 12 | SC-15 | Đúng nhưng thấp. “Mở FAP” rời app, quay lại bằng nút Back của hệ điều hành | `design/prototype-links.md` (frame [48], [50]) | **Reject** |
| 13 | Nhiều màn | Không đúng ở thời điểm hiện tại. Mọi trạng thái Codex liệt kê (quyền camera, đã quét rồi, không có trong lớp, máy đã dùng, QR đã đóng, lỗi mạng khi gửi) đều có frame | `assets/figma/INDEX.md` | Đã xử lý qua CR-66 |
| 14 | 412 dp | Đúng. Kiểm 412 dp mới làm cho 3 màn: SC-03, SC-06, SC-09 | `a11y-412-*.png` | CR-70 · Trung bình · thien chọn giữ 3 màn đại diện. Ghi là hạn chế |

## 3. Phát hiện chỉ Claude thấy khi xuất ảnh (cả hai bản chấm đều bỏ sót)

| Mã | Màn | Phát hiện | Mức | Quyết định đề xuất |
|---|---|---|---|---|
| CR-68 | SC-11 “Đã quét rồi” | Dòng chữ nói “Lượt quét lúc 07:01:04 đã được ghi nhận” nhưng ô bên dưới ghi “Giờ quét 07:03:10”. Hai giờ khác nhau trên cùng một màn, người đọc không biết giờ nào là giờ được ghi | Trung bình | **Accept, đã sửa**: đổi nhãn ô thành “Lần quét này” |

## 4. Mâu thuẫn giữa các tệp (mục 6 của Codex)

| Mâu thuẫn Codex nêu | Kết luận |
|---|---|
| README nói ảnh Figma là bản cuối, nhật ký AI-28 nói ảnh đã cũ | Đọc nhầm một nửa: cùng câu đó ghi “(CR-64, CR-65, đã sửa)”. Nay `assets/figma/INDEX.md` ghi rõ ngày xuất từng đợt |
| Số frame 68/69/71/72 | Không mâu thuẫn: 69 frame 360 × 800, 3 frame 412 × 915 và 1 frame web, tổng 73. Các số 68 và 71 là số đo ngày 14/10 và đều ghi kèm ngày |
| Trạng thái hứa nhiều hơn ảnh cho thấy | Đúng ở commit Codex chấm; đã xử lý qua CR-66 |
| “Dư 1” và “Chênh −1” | Đúng. Đã sửa qua CR-63 (D-31) |
| Bài nhóm nhưng đề nói bài cá nhân | Đúng một phần. Đề trang 1 ghi “Individual (unless the lecturer announces teams)”, README ghi giảng viên hướng dẫn đã thông báo làm nhóm, nhưng repo không có bằng chứng của thông báo đó. CR-71 · **Việc của nhóm**: mang theo thông báo của giảng viên hướng dẫn và bảng phân công |

## 5. Phần tài liệu và quy trình

- Bước AI-13, 16, 17, 23–26 không có prompt riêng: **đúng**. Các bước này là trao đổi qua lại trong phiên làm việc, không có một prompt duy nhất để chép. Không bổ sung prompt sau, vì như vậy là bịa. Khi vấn đáp, nói thẳng điều này.
- Bản ghi phỏng vấn mô phỏng mở đầu như phỏng vấn thật: đầu mỗi tệp đã có nhãn `Simulated` (ví dụ `research/05-raw/R08-transcript.md` dòng 7). Khi chiếu lên slide, không cắt riêng đoạn lời thoại ra khỏi phần đầu tệp.

## 6. Việc còn chờ

- Phần 2: thien gửi Codex bản chấm của Claude (`/mnt/project-files/codex-review/phan-2-bao-cao-cham-claude-AI-27.pdf`) kèm ghi chú rằng bản đó chấm commit cũ `8c62cda`.
- ~~thien duyệt bảng này, quyết CR-63, CR-67, CR-68 và CR-70.~~ Xong 15/10 tối, xem `design/figma-build.md` §11.
