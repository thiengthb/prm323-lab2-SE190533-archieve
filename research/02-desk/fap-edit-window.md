| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | RES-DESK-FAP |
| Nhãn | Desk |
| Prompt | [ai/prompts/AI-07-verify-fap-edit-window.md](../../ai/prompts/AI-07-verify-fap-edit-window.md) |
| Ngày tra cứu | 13/10/2026 |
| Công cụ | WebSearch (standard, extended), WebFetch; đọc mã nguồn công khai trên GitHub (raw.githubusercontent.com) |
| Đọc kèm | [fptu-all-campuses.md](fptu-all-campuses.md) (S1–S35), [fptu-hcm.md](fptu-hcm.md) (H01–H43) |

# Kiểm chứng: quy tắc sửa điểm danh trên FAP

## Nhận định cần kiểm chứng

Một sinh viên FPTU cơ sở TP.HCM kể lại, chưa có văn bản đi kèm:

> "Trên FAP, chỉ giảng viên mới sửa được điểm danh của lớp mình, và chỉ sửa được trong ngày có slot học. Qua ngày đó hệ thống tự chốt, giảng viên cũng không sửa được nữa."

Nhận định này gồm ba ý, được kiểm riêng từng ý:
- **(A)** Chỉ giảng viên sửa được điểm danh lớp mình.
- **(B)** Giảng viên chỉ sửa được trong ngày có slot.
- **(C)** Qua ngày đó hệ thống tự chốt, giảng viên không sửa được nữa.

## Quy ước

- **Độ tin cậy:** Đã xác nhận (có nguồn chính thức của trường) / Nhiều nguồn không chính thức (từ hai nguồn độc lập trở lên, khớp nhau) / Một nguồn / Không tìm thấy.
- **Loại nguồn:** Chính thức / Blog (bản sao tài liệu trường) / Mã nguồn cộng đồng / Blog / Diễn đàn-MXH.
- **"Suy luận"** là kết luận ghép từ nhiều nguồn; không nguồn nào nói thẳng điều đó.
- Trích dẫn giữ dưới 25 từ. Không ghi tên người thật.

## Giới hạn của lần tra cứu này

- Hai nguồn có khả năng trả lời trực tiếp nhưng không đọc được:
  - Sổ tay sinh viên online của HCM (V15): bị chặn bằng robots.txt.
  - Sổ tay sinh viên 2016 dạng .doc trên `daihoc.fpt.edu.vn` (V16): proxy từ chối kết nối, WebFetch báo lỗi.
- Không có tài liệu nào hướng dẫn **giảng viên** thao tác điểm danh trên FAP. Trang IT HCM dành cho giảng viên chỉ hướng dẫn đăng nhập.
- Bản Scribd "Hướng dẫn sử dụng FAP" cần JavaScript nên không đọc được nội dung.
- Trang `fap.fpt.edu.vn` cần đăng nhập. Facebook và confession tiếp tục chặn công cụ đọc tự động.
- Không có kết quả liên quan trên Reddit hoặc Voz.
- Tìm kiếm GitHub toàn cục (`gh search code`) bị chặn trong phiên này. Chỉ đọc được những repo xuất hiện trong kết quả WebSearch.

---

## Danh mục nguồn

| Mã | Nguồn | Loại | Năm | Trùng với mã cũ |
|---|---|---|---|---|
| V01 | [Hướng dẫn sử dụng hệ thống FAP tại Trường ĐH FPT (Studocu 162110567)](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/orientation-and-general-training-programme/huong-dan-su-dung-he-thong-fap-tai-truong-dai-hoc-fpt/162110567) | Blog (bản sao tài liệu trường), không rõ cơ sở | 2025/26 | S12 |
| V02 | [Mẫu "Đơn khiếu nại điểm danh" (Studocu 34440047)](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/financial/mau-don-khieu-nai-diem-danh/34440047) | Blog (bản sao biểu mẫu trường) | không rõ | S17 |
| V03 | [Hướng dẫn sử dụng FAP cho FU-Hồ Chí Minh (Studocu 22283287)](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/law-for-business/huong-dan-su-dung-fap-lecture-notes-vanttn/22283287) | Blog (bản sao tài liệu trường), **HCM** | 2020/21 | H36 |
| V04 | [IT FPTU Cần Thơ: Truy cập cổng học thuật FAP](https://it.fpt.edu.vn/cantho/huong-dan-he-thong-academic-portal-fap/) | Chính thức (cơ sở Cần Thơ) | không rõ (ví dụ dùng dữ liệu kỳ FA20) | S3 |
| V05 | [Hướng dẫn sử dụng FAP cho sinh viên (Studocu 151994820)](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/don-dang-ky-cai-thien-diem/huong-dan-su-dung-fap-cho-sinh-vien-tai-lieu-hoc-tap/151994820) | Blog (bản sao tài liệu trường), không rõ cơ sở | khoảng 2025 | S14 |
| V06 | [IT FPTU HCM: Hướng dẫn đăng nhập FAP dành cho giảng viên](https://it-hcm.fpt.edu.vn/articles.php?news=huong-dan-dang-nhap-website-fap-danh-cho-giang-vien&id=31) | Chính thức (cơ sở HCM) | không ghi ngày (ảnh tải lên khoảng 12/2024) | S7 |
| V07 | [Hướng dẫn SV khóa 20 tại Hà Nội truy cập FAP và điểm danh trong tuần lễ định hướng](https://daihoc.fpt.edu.vn/thong-bao-huong-dan/huong-dan-sinh-vien-khoa-20-tai-ha-noi-truy-cap-fap-va-diem-danh-trong-tuan-le-dinh-huong/) | Chính thức (cơ sở Hà Nội) | 2024 | S4 |
| V08 | [fap-cli, `docs/20-api-fields.md` (bản đồ trường API của app myFAP)](https://github.com/wdchocopie/fap-cli/blob/HEAD/docs/20-api-fields.md) | Mã nguồn cộng đồng (công cụ không chính thức, dịch ngược app `com.fuct`) | 2026 | — |
| V09 | [fap-cli, `fapc/app/attendwatch.py` (theo dõi điểm danh)](https://github.com/wdchocopie/fap-cli/blob/HEAD/fapc/app/attendwatch.py) | Mã nguồn cộng đồng | 2026 | — |
| V10 | [fap-cli, Pull Request #2 (attendance: absences, term phase…)](https://github.com/wdchocopie/fap-cli/pull/2) | Mã nguồn cộng đồng | 2026 | — |
| V11 | [Polycamxuc: 2 cách khôi phục điểm danh ở FPT Polytechnic](https://polycamxuc.com/huong-dan-khoi-phuc-diem-danh/) | Blog. Nói về **hệ thống AP của FPT Polytechnic, không phải FAP** | cập nhật 29/08/2024 | — |
| V12 | [Sổ tay sinh viên K21, FPTU Hà Nội (PDF)](https://daihoc.fpt.edu.vn/en/wp-content/uploads/2025/09/So-tay-sinh-vien-K21-FUHL-1.pdf) | Chính thức (cơ sở Hà Nội) | 2025 | S1 |
| V13 | [Sổ tay tân sinh viên – Hướng dẫn học tập tại ĐH FPT (Studocu 35391384)](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/orientation-and-general-training-programme/so-tay-tan-sinh-vien-informations-for-newbies-to-fpt-university/35391384) | Blog (bản sao tài liệu trường), không rõ cơ sở | 2022/23 | — |
| V14 | [Hướng dẫn truy cập Cổng học thuật FAP (Studocu 155537487)](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/fpt-thong-tin-truong-dai-hoc/huong-dan-truy-cap-cong-hoc-thuat-fap-fpt-university/155537487) | Blog (bản sao tài liệu trường), hướng dẫn chọn cơ sở Cần Thơ | 2025/26 (ví dụ dùng dữ liệu FA20) | — |
| V15 | [Sổ tay sinh viên online FPTU HCM, mục Đào tạo – Khảo thí](https://hcmportal.fpt.edu.vn/so-tay/dao-tao-khao-thi) | Chính thức (**không đọc được**) | không rõ | H42 |
| V16 | [Sổ tay sinh viên FUG 2016 (.doc)](https://daihoc.fpt.edu.vn/en/wp-content/uploads/2017/06/So-tay-sinh-vien-FUG-2016.doc) | Chính thức (**không đọc được**) | 2016 | — |

**Đã xem nhưng loại:** [Issue #142 của repo StudentManager](https://github.com/HoaiNam765/StudentManager/issues/142) có mô tả quy tắc "sửa trong 7 ngày, sau đó cần duyệt". Đây là đồ án của một nhóm khác, không nhắc FAP hay ĐH FPT, nên **không dùng** làm bằng chứng.

---

## Câu 1. Ai được sửa trạng thái điểm danh trên FAP?

| Phát hiện | Trích dẫn (≤ 25 từ) | Nguồn | Độ tin cậy |
|---|---|---|---|
| **Giảng viên là người ghi điểm danh** cho buổi học. "Not yet" nghĩa là buổi học chưa diễn ra hoặc giảng viên chưa điểm danh. | "'Not yet': chưa học hoặc giảng viên chưa điểm danh" | V03 (HCM) | Một nguồn (bản sao tài liệu HCM, 2020/21) |
| Công cụ dịch ngược app myFAP cũng mô tả như vậy: trạng thái là "Future" trước giờ học, rồi đổi sang Present hoặc Absent khi giảng viên điểm danh. | "'Future' trước giờ, đổi thành 'Present'/'Absent'... khi giảng viên điểm danh" | V09 | Một nguồn (mô tả của tác giả công cụ, không phải tài liệu trường) |
| FAP cho giảng viên có chức năng điểm danh. Trang không nói gì về quyền **sửa**. | "lịch học, tiến độ học tập, điểm danh, các thông báo quan trọng" | V06 (HCM) | Đã xác nhận (có chức năng); quyền sửa: Không tìm thấy |
| **Sinh viên cũng tự ghi điểm danh trong một số trường hợp**, bằng cách nhập mã giảng viên hoặc trường phát. Ví dụ: tuần định hướng ở Hà Nội, một số môn đặc biệt. Đây là ghi nhận, không phải sửa. | "chọn Sinh viên điểm danh bằng mã được cấp" | V07 (chính thức HN), V01 | Nhiều nguồn không chính thức + một nguồn chính thức |
| **Phòng đào tạo (QLĐT) xử lý đơn khiếu nại điểm danh** khi giảng viên không phản hồi. Sinh viên đề nghị "được điểm danh buổi học trên", tức là kết quả có thể được đổi qua kênh này. Mẫu đơn không có chỗ cho giảng viên ký. | "01 bản chuyển QLĐT để xử lý" | V02, V01 | Nhiều nguồn không chính thức |
| Ai **thao tác sửa trên hệ thống** sau khi đơn được duyệt (phòng đào tạo tự sửa, hay mở lại cho giảng viên sửa): **không có văn bản**. **Suy luận:** ngoài giảng viên, phòng đào tạo cũng có cách thay đổi kết quả điểm danh, nên ý "chỉ giảng viên" không đúng ở mức quy trình. | — | V01, V02 | Không tìm thấy (văn bản) / Suy luận |
| Để đối chiếu, ở **FPT Polytechnic (hệ thống AP, không phải FAP)**: giảng viên quyết định, Phòng Đào tạo can thiệp hệ thống để phục hồi điểm danh. Chỉ dùng để tham khảo, không áp dụng cho FAP. | "Quyết định nằm trong tay giảng viên" | V11 | Một nguồn (hệ thống khác) |

## Câu 2. Có thời hạn sửa không? Sau thời hạn thì ai sửa và bằng cách nào?

| Phát hiện | Trích dẫn (≤ 25 từ) | Nguồn | Độ tin cậy |
|---|---|---|---|
| **Thời hạn với sinh viên (môn thường):** phải email giảng viên trong ngày học để xin cập nhật. Câu chữ gốc hơi mơ hồ ("trước 24h cùng ngày"), nhưng cả hai cách hiểu đều ra là trong ngày diễn ra buổi học. | "gửi mail cho giảng viên giảng dạy trước 24h cùng ngày diễn ra buổi học" | V01 | Một nguồn |
| Một bản sổ tay khác cũng nói sinh viên phải báo giảng viên **trong cùng ngày**. | "điểm danh hàng ngày trên [FAP] và báo với giảng viên trong cùng ngày" | V13 | Nhiều nguồn không chính thức (V01 + V13, khớp nhau) |
| **Môn có LUK:** hạn là **2 ngày** kể từ buổi học, làm đơn trực tiếp trên FAP, không qua bước email giảng viên. | "trong vòng 2 ngày kể từ ngày diễn ra buổi học" | V01 | Một nguồn |
| **Sau thời hạn trong ngày:** nếu đã báo giảng viên đúng hạn mà không được phản hồi, sinh viên nộp "Đơn khiếu nại điểm danh" trên FAP (Thủ tục/Đơn từ). Đơn được chuyển phòng QLĐT. | "Sinh viên phát hiện có sự nhầm lẫn trong kết quả điểm danh" | V01, V02 | Nhiều nguồn không chính thức |
| **Hạn chót kỹ thuật** để giảng viên nhập hoặc sửa điểm danh trên FAP (tự khóa lúc 0h, sau N giờ, hay cuối block/kỳ): **không tìm thấy** ở nguồn chính thức, bản sao tài liệu, hay mã nguồn cộng đồng. Công cụ fap-cli chỉ đọc dữ liệu của sinh viên, không thấy được quyền của giảng viên. | — | — | **Không tìm thấy** |
| **Suy luận:** quy trình "báo giảng viên trong ngày, quá hạn thì làm đơn lên phòng đào tạo" **khớp với** giả thuyết có khung sửa trong ngày ở phía giảng viên. Nhưng quy trình đó cũng có thể chỉ là quy định hành chính, không phải khóa kỹ thuật. Không nguồn nào phân biệt hai khả năng này. | — | V01, V13 | Suy luận |
| Nhắc lại: chỉ đọc được dữ liệu phía sinh viên. Trạng thái một buổi có thể vẫn là "Not yet" sau giờ học nếu giảng viên chưa điểm danh. Vậy giảng viên **có thể nhập điểm danh sau khi slot kết thúc**, nhưng không rõ muộn tới mức nào. | "chưa học hoặc giảng viên chưa điểm danh" | V03 | Một nguồn / Suy luận |

## Câu 3. Quy trình khi sinh viên thấy mình bị ghi sai

| Bước / thông tin | Nội dung | Nguồn | Độ tin cậy |
|---|---|---|---|
| Bước 1 | Email giảng viên dạy buổi đó, **trong ngày học** (môn thường). Có thể phản ánh trực tiếp trên lớp: mẫu đơn có ô "email/trực tiếp trao đổi trên lớp". | V01, V02, V13 | Nhiều nguồn không chính thức |
| Bước 2 | Đã báo đúng hạn mà giảng viên không phản hồi thì nộp **"Đơn khiếu nại điểm danh"** trên FAP: Thủ tục/Đơn từ → Gửi đơn. | V01 | Một nguồn |
| Nội dung đơn | MSSV, họ tên, điện thoại; ngày, môn, slot, tên giảng viên của buổi bị ghi sai; kênh và ngày đã phản ánh với giảng viên; đề nghị "được điểm danh buổi học trên". Mã biểu mẫu `04.31-BM/ĐT/HDCV/FE1/0`. | V02 | Một nguồn (bản sao biểu mẫu) |
| Phòng xử lý | **QLĐT** (Quản lý Đào tạo), theo ghi chú trên mẫu đơn. | V02 | Một nguồn |
| Thời hạn nộp | Môn thường: báo giảng viên trong ngày. Không thấy hạn riêng cho bước nộp đơn. Môn LUK: làm đơn trong 2 ngày kể từ buổi học. | V01 | Một nguồn |
| Thời gian xử lý | **2 ngày làm việc** (cả đơn khiếu nại điểm danh lẫn đơn kiểm tra trạng thái điểm danh LUK). | V01 | Một nguồn |
| Khác biệt ở HCM | **Không tìm thấy.** Tài liệu FAP riêng của HCM (V03) không nói về khiếu nại. Sổ tay online của HCM (V15) không đọc được. Chưa xác định V01 và V02 là tài liệu của cơ sở nào. | V03, V15 | **Không tìm thấy** |

## Câu 4. Các trạng thái điểm danh hiển thị trên FAP

| Nơi hiển thị | Trạng thái và ý nghĩa | Nguồn | Độ tin cậy |
|---|---|---|---|
| Thời khóa biểu tuần (web), mỗi ô slot | **attended**: có mặt · **absent**: vắng · **Not yet**: chưa học hoặc giảng viên chưa điểm danh | V03 (HCM), V04, V14 | Đã xác nhận (V04 chính thức nêu attended/absent) + Nhiều nguồn không chính thức (Not yet) |
| Bản hướng dẫn tiếng Việt | "Chưa điểm danh / Có mặt / Vắng mặt" | V05 | Một nguồn |
| Báo cáo điểm danh từng môn (Attendance report) | **present** / **absent**, kèm % vắng ở cuối mỗi môn | V04, V14 | Đã xác nhận (V04) |
| App myFAP, API lịch học (`GetActivityStudent`) | Mã một chữ: `P` có mặt, `A` vắng, còn lại (thực tế là `N`) là chưa diễn ra. **Không có mã "muộn".** | V08, V10 | Một nguồn (dịch ngược app) |
| App myFAP, API điểm danh theo môn (`getCourseAttendance`) | Chữ đầy đủ: `Present` / `Absent` / `Future` | V08, V09 | Một nguồn (dịch ngược app) |
| Đi muộn | Không có trạng thái riêng. Vào lớp muộn quá 5 phút thì bị tính vắng cả slot. | V12 (chính thức HN), V08 | Đã xác nhận (quy định HN) + Một nguồn (không có mã muộn) |
| Điểm danh bằng mã (sinh viên tự nhập) | Kết quả hiện "Điểm danh thành công" hoặc "Điểm danh không thành công" | V07 | Đã xác nhận (HN, tuần định hướng) |

---

## Đối chiếu từng ý của nhận định

| Ý | Kết quả | Căn cứ |
|---|---|---|
| (A) Chỉ giảng viên sửa được điểm danh lớp mình | **Ủng hộ một phần.** Giảng viên là người ghi và xử lý sai sót đầu tiên (V03, V09, V01). Nhưng phòng QLĐT nhận đơn khiếu nại và có thể đổi kết quả (V01, V02), nên chữ "chỉ" không đúng ở mức quy trình. Ở mức quyền hệ thống thì không có văn bản. | V01, V02, V03, V09 |
| (B) Chỉ sửa được trong ngày có slot | **Ủng hộ một phần.** Hai nguồn yêu cầu sinh viên báo giảng viên **trong ngày** (V01, V13), khớp với khung sửa trong ngày. Nhưng không nguồn nào nói đó là giới hạn quyền của giảng viên. Môn LUK có hạn 2 ngày. | V01, V13 |
| (C) Qua ngày hệ thống tự chốt, giảng viên không sửa được nữa | **Không đủ bằng chứng.** Không tìm thấy nguồn nào về khóa tự động. Việc quá hạn phải làm đơn lên phòng đào tạo phù hợp với ý này, nhưng chưa chứng minh được. | — |

## Kết luận

**Ủng hộ một phần.**

- **Phần được ủng hộ** (nguồn không chính thức, khớp nhau):
  - Giảng viên là người ghi điểm danh và là người xử lý sai sót đầu tiên.
  - Sinh viên phải báo giảng viên **ngay trong ngày học**.
  - Quá hạn đó thì không còn nhờ giảng viên trực tiếp được, mà phải làm "Đơn khiếu nại điểm danh" trên FAP. Đơn được chuyển phòng QLĐT, xử lý khoảng 2 ngày làm việc.
- **Phần không đúng như nhận định:** giảng viên **không phải bên duy nhất** có thể thay đổi kết quả. Phòng QLĐT xử lý đơn khiếu nại, và sinh viên tự ghi điểm danh bằng mã ở một số buổi.
- **Phần chưa kiểm chứng được:**
  - FAP **tự khóa về mặt kỹ thuật** sau ngày học, khiến giảng viên không sửa được nữa.
  - Quy định "trong ngày" là luật cứng của hệ thống hay chỉ là quy định quy trình.
  - Có khác biệt riêng ở cơ sở HCM hay không.

  Cách kiểm chứng tiếp: hỏi trực tiếp một giảng viên hoặc cán bộ phòng đào tạo HCM, hoặc đọc sổ tay online HCM (V15) bằng tài khoản sinh viên.
