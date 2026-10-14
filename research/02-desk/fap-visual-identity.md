| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | RES-DESK-FAPUI |
| Trạng thái | Nháp |
| Nhãn | Desk |
| Prompt | [ai/prompts/AI-14-fap-visual-identity.md](../../ai/prompts/AI-14-fap-visual-identity.md) |
| Ngày tra cứu | 14/10/2026 |
| Công cụ | WebSearch (standard, extended), WebFetch; đọc mã nguồn công khai trên GitHub qua raw.githubusercontent.com (curl) |
| Đọc kèm | [fap-edit-window.md](fap-edit-window.md) (V01–V15, Câu 4 về trạng thái điểm danh) |

# Nhận diện thị giác của FAP và myFAP

## Phạm vi và quy ước

- Đối tượng là **giao diện hệ thống FAP** (fap.fpt.edu.vn) và **app myFAP**. Tài liệu này **không** nói về màu thương hiệu của tập đoàn FPT (cam/xanh dương/xanh lá của logo).
- Tài liệu chỉ thu thập sự thật, **không đề xuất bảng màu**.
- **Độ tin cậy:**
  - **Xác nhận:** giá trị nằm nguyên văn trong HTML/CSS lấy từ FAP, hoặc trong tài liệu của trường.
  - **Suy luận:** ghép từ dấu vết gián tiếp, ví dụ selector mà extension dùng để bắt phần tử của FAP, hoặc quy ước của framework.
  - **Không tìm thấy:** không có nguồn nào nêu.
- Mã hex trong ngoặc là giá trị chuẩn của **tên màu CSS** (ví dụ `Green` = `#008000`). Đây không phải màu đo từ ảnh.
- Không ghi tên người thật. Trích dẫn ngắn.

## Giới hạn của lần tra cứu này

- `fap.fpt.edu.vn` cần đăng nhập. Công cụ đọc web chỉ trả chữ của trang đăng nhập, không trả HTML hay CSS. curl tới FAP bị proxy chặn (403).
- **Không tải được ảnh chụp màn hình nào của FAP hay myFAP.** curl tới daihoc.fpt.edu.vn, it.fpt.edu.vn, it-hcm.fpt.edu.vn, 2t-team.github.io, cdn2.fptshop.com.vn, mzstatic (App Store), play-lh.googleusercontent.com (Google Play) và gist đều bị 403. Wayback Machine bị chặn. Vì vậy **không có màu nào được đo bằng PIL**.
  - Ảnh duy nhất tải được là `fap-img/pear104_demo1.png` (F16). Đó là giao diện **của extension**, không phải của FAP, nên bị loại.
- Chỉ đọc được nguồn trên GitHub qua `raw.githubusercontent.com`. Không liệt kê được cây thư mục (API GitHub bị giới hạn), nên chỉ đọc được những file đã biết tên.
- **FAP vừa đổi giao diện (khoảng 09/2026).** Hai nguồn độc lập cùng ghi nhận:
  - Changelog extension FPTU Schedule v4.0.0, ngày 29/09/2026, ghi các route mới `/WeeklyTimetable`, `/ExamSchedule`, `/Report/Grade` (F11).
  - App myFAP 2.0.5 (25/09) ghi "New API changes for the new FAP version" (F21).

  Do đó tài liệu tách hai lớp: **FAP cũ** (ASP.NET WebForms, `.aspx`) và **FAP mới**. Phần lớn hướng dẫn và extension cũ mô tả FAP cũ.
- **Ưu tiên HCM:** chỉ F17 (Studocu, FU-Hồ Chí Minh, 2020/21) và F27 (IT HCM, trang giảng viên) là nguồn riêng của HCM. Cả hai đều không nói về màu. Fixture HTML của FAP mới (F08) dùng mã phòng `DE-`, `AL-`, `BE-`. Đây là tên tòa nhà ở Hòa Lạc, nên fixture nhiều khả năng lấy từ **cơ sở Hà Nội** (Suy luận). FAP là một hệ thống chung cho mọi cơ sở (chọn campus khi đăng nhập), nên giao diện được coi là giống nhau, nhưng điều này **chưa kiểm chứng** cho HCM.

## Bảng nguồn

| Mã | Nguồn (URL) | Loại | Độ tin cậy của nguồn |
|---|---|---|---|
| F01 | [fap.fpt.edu.vn (trang đăng nhập, đọc qua WebFetch)](https://fap.fpt.edu.vn/) | Chính thức, chỉ đọc được chữ | Cao về nội dung chữ; không có thông tin màu |
| F02 | [FAPI Toolkit: `front_end/MyStyle/myStyle.css`](https://raw.githubusercontent.com/nphi1410/FAPI_Toolkit/HEAD/front_end/MyStyle/myStyle.css) (repo [nphi1410/FAPI_Toolkit](https://github.com/nphi1410/FAPI_Toolkit), mô tả "Beauty FAP Interface") | Mã nguồn cộng đồng, extension làm đẹp FAP cũ | Trung bình. Selector bắt phần tử của FAP là dấu vết thật; màu trong file là màu của extension |
| F03 | [FAPI Toolkit: `front_end/MyStyle/table.css`](https://raw.githubusercontent.com/nphi1410/FAPI_Toolkit/HEAD/front_end/MyStyle/table.css) | Mã nguồn cộng đồng | Như F02 |
| F04 | [FAPI Toolkit: `front_end/Schedular/fe.js`](https://raw.githubusercontent.com/nphi1410/FAPI_Toolkit/HEAD/front_end/Schedular/fe.js) | Mã nguồn cộng đồng (đọc `Report/ScheduleOfWeek.aspx`) | Trung bình |
| F05 | [FAPI Toolkit: `front_end/Header&Navbar/content.js`](https://raw.githubusercontent.com/nphi1410/FAPI_Toolkit/HEAD/front_end/Header%26Navbar/content.js) + [`selector.js`](https://raw.githubusercontent.com/nphi1410/FAPI_Toolkit/HEAD/front_end/Header%26Navbar/selector.js) + [`manifest.json`](https://raw.githubusercontent.com/nphi1410/FAPI_Toolkit/HEAD/manifest.json) | Mã nguồn cộng đồng | Trung bình |
| F06 | [FPTU Schedule (yunkhngn): `content.js`](https://raw.githubusercontent.com/yunkhngn/fptu-examination/HEAD/content.js) (repo [yunkhngn/fptu-schedule](https://github.com/yunkhngn/fptu-schedule)) | Mã nguồn cộng đồng, extension còn cập nhật (v4.0.0, 09/2026), đọc cả FAP cũ và mới | Trung bình–cao |
| F07 | [FPTU Schedule: `popup.js`](https://raw.githubusercontent.com/yunkhngn/fptu-examination/HEAD/popup.js) | Mã nguồn cộng đồng | Trung bình |
| F08 | [FPTU Schedule: `tests/fixtures/week.html`](https://raw.githubusercontent.com/yunkhngn/fptu-examination/HEAD/tests/fixtures/week.html) (HTML thời khóa biểu tuần của FAP mới) | Mã nguồn cộng đồng, fixture kiểm thử. Changelog gọi đây là "exports of modern weekly schedules" | Trung bình. Có thể đã bị rút gọn hoặc biên tập |
| F09 | [FPTU Schedule: `tests/fixtures/exam.html`](https://raw.githubusercontent.com/yunkhngn/fptu-examination/HEAD/tests/fixtures/exam.html) (lịch thi của FAP mới) | Mã nguồn cộng đồng, fixture | Thấp–trung bình. Cuối file có dòng chữ thừa kiểu đầu ra của công cụ, nên có thể đã qua chỉnh sửa |
| F10 | [FPTU Schedule: `tests/grades.test.js`](https://raw.githubusercontent.com/yunkhngn/fptu-examination/HEAD/tests/grades.test.js) (có hằng `REAL_FAP_HTML` của FAP cũ và HTML báo cáo điểm của FAP mới) | Mã nguồn cộng đồng, fixture | Trung bình |
| F11 | [FPTU Schedule: `CHANGELOG.md`](https://raw.githubusercontent.com/yunkhngn/fptu-examination/HEAD/CHANGELOG.md) + [Release v4.0.0](https://github.com/yunkhngn/fptu-schedule/releases/tag/v4.0.0) | Mã nguồn cộng đồng | Trung bình |
| F12 | [Gist "Xuất lịch học từ FAP sang ICS" (minhqnd)](https://gist.github.com/minhqnd/28e0fb5681ab1412163e6f9348ab5a84) (chỉ đọc qua tóm tắt của WebFetch; bản raw bị chặn) | Mã nguồn cộng đồng | Thấp–trung bình (đọc gián tiếp) |
| F13 | [FAP Attendance Connector: `README.md`](https://raw.githubusercontent.com/LuanOn123/FAP-Attendance-Desktop-System/HEAD/fap-attendance-extension/README.md) + [`content/fapAttendanceWriter.js`](https://raw.githubusercontent.com/LuanOn123/FAP-Attendance-Desktop-System/HEAD/fap-attendance-extension/content/fapAttendanceWriter.js) (repo [LuanOn123/FAP-Attendance-Desktop-System](https://github.com/LuanOn123/FAP-Attendance-Desktop-System)) | Mã nguồn cộng đồng, extension cho **trang điểm danh của giảng viên** | Thấp. Tác giả tự ghi trang thử là "FAP-inspired test layout, not a verified copy" |
| F14 | [LuanOn123: `attendance.html`](https://raw.githubusercontent.com/LuanOn123/FAP-Attendance-Desktop-System/HEAD/attendance.html) | Trang thử tự thiết kế (biến `--primary: #4361ee`…) | **Loại.** Không phải giao diện FAP |
| F15 | [FPTU Move Out Class Tool: `README.md`](https://raw.githubusercontent.com/Pear104/fptu-move-out-class-tool/HEAD/README.md) (repo [Pear104/fptu-move-out-class-tool](https://github.com/Pear104/fptu-move-out-class-tool)) | Mã nguồn cộng đồng | Thấp (không có màu của FAP) |
| F16 | [Ảnh `images/demo1.png` của F15](https://raw.githubusercontent.com/Pear104/fptu-move-out-class-tool/HEAD/images/demo1.png), lưu tại `scratchpad/fap-img/pear104_demo1.png` | Ảnh chụp **giao diện extension** | **Loại** khỏi phần màu FAP |
| F17 | [Studocu 22283287: Hướng dẫn sử dụng FAP, FU-Hồ Chí Minh](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/law-for-business/huong-dan-su-dung-fap-lecture-notes-vanttn/22283287) | Bản sao tài liệu trường, **HCM**, 2020/21 | Trung bình |
| F18 | [IT FPTU Cần Thơ: Truy cập cổng học thuật FAP](https://it.fpt.edu.vn/cantho/huong-dan-he-thong-academic-portal-fap/) | Chính thức (Cần Thơ), khoảng 2020 | Cao về chức năng; không nói màu |
| F19 | [ĐH FPT: Hướng dẫn SV K20 Hà Nội truy cập FAP và điểm danh tuần định hướng](https://daihoc.fpt.edu.vn/thong-bao-huong-dan/huong-dan-sinh-vien-khoa-20-tai-ha-noi-truy-cap-fap-va-diem-danh-trong-tuan-le-dinh-huong/) | Chính thức (Hà Nội), 06/01/2024 | Cao |
| F20 | [ĐH FPT: Hướng dẫn sử dụng FAP cho tân sinh viên](https://daihoc.fpt.edu.vn/tin-tuc-chung-2/huong-dan-su-dung-cong-thong-tin-dao-tao-fap-cho-tan-sinh-vien-dai-hoc-fpt/) | Chính thức, 06/09/2021 (có ảnh nhưng không tải được) | Cao về chức năng |
| F21 | [App Store: myFAP (id1527723314)](https://apps.apple.com/vn/app/myfap/id1527723314) | Chính thức (trang phát hành app) | Cao về phiên bản; không có màu |
| F22 | [Google Play: myFAP (`com.fuct`)](https://play.google.com/store/apps/details?id=com.fuct&hl=en_US) | Chính thức (trang phát hành app) | Cao về phiên bản; không có màu |
| F23 | [chrome-stats: myFAP `com.fuct`](https://chrome-stats.com/d/com.fuct?hl=en) | Trang tổng hợp bên thứ ba | Thấp–trung bình |
| F24 | [fap-cli: `docs/20-api-fields.md`](https://raw.githubusercontent.com/wdchocopie/fap-cli/HEAD/docs/20-api-fields.md) (đã dùng làm V08 trong fap-edit-window.md) | Mã nguồn cộng đồng, dịch ngược app myFAP | Trung bình |
| F25 | [FPT Shop: Khám phá myFAP](https://fptshop.com.vn/tin-tuc/giai-tri/myfap-192109) | Blog (có 13 ảnh app nhưng không tải được) | Thấp |
| F26 | [2T-Team Resources: FAP](https://2t-team.github.io/Resources/childpage/fap/) | Blog sinh viên | Thấp (không có chi tiết giao diện) |
| F27 | [IT FPTU HCM: Đăng nhập FAP cho giảng viên](https://it-hcm.fpt.edu.vn/articles.php?news=huong-dan-dang-nhap-website-fap-danh-cho-giang-vien&id=31) | Chính thức (**HCM**) | Cao về chức năng; không nói màu, không mô tả trang điểm danh |

**Đã tìm nhưng không có kết quả dùng được:**
- Userscript trên Greasy Fork: kết quả tìm được không nhắm vào FAP.
- Extension "dark mode" cho FAP trên Chrome Web Store: kết quả là extension dark mode chung chung.
- Repo clone giao diện FAP có CSS gốc: không tìm thấy.
- Truy vấn nguyên văn `"ScheduleOfWeek.aspx"`, `"ViewAttendstudent.aspx"`, `"ctl00_mainContent"`: không có trang nào ngoài các repo đã liệt kê.

## Bảng phát hiện

### 1. Màu và bố cục chung của FAP web

| Đặc trưng | Giá trị | Nguồn | Độ tin cậy |
|---|---|---|---|
| Màu nền trang (FAP cũ) | Không tìm thấy. FAPI Toolkit đổi nền sang `#fcefec`; đó là màu của extension, không phải của FAP | F02 | Không tìm thấy |
| Màu thanh tiêu đề/header (FAP cũ) | Không tìm thấy. Chỉ biết header nằm trong `.row` đầu tiên của `.container`, khối người dùng có id `#ctl00_divUser`, dưới đó có `.breadcrumb` | F05 | Bố cục: Suy luận. Màu: Không tìm thấy |
| Tiêu đề trang đăng nhập | Chữ "FPT University Academic Portal", dòng giới thiệu myFAP kèm link apple store/google store, chọn vai trò (Phụ huynh / Sinh viên, Giảng viên, Cán bộ ĐH-FPT), chân trang "© Powered by FPT University" kèm link CMS, library, books24x7 | F01 | Xác nhận (chỉ phần chữ) |
| Màu link (FAP cũ) | `rgb(51, 122, 183)` = **`#337ab7`**, xuất hiện trong inline style một dòng bảng báo cáo điểm: `style="color: rgb(51, 122, 183); cursor: pointer;"`. Đây đúng là màu primary/link mặc định của Bootstrap 3 | F10 (hằng `REAL_FAP_HTML`) | Xác nhận cho dòng bảng điểm; là màu link chung toàn trang: Suy luận |
| Màu nút (FAP cũ) | Không tìm thấy mã màu. Hướng dẫn K20 Hà Nội (2024) mô tả nút **"ĐIỂM DANH" màu xanh** (blue) ở chức năng sinh viên tự điểm danh bằng mã | F19 | "Xanh": Xác nhận (chữ mô tả). Mã hex: Không tìm thấy |
| Nhãn (label) giờ học (FAP cũ) | Giờ slot nằm trong `span.label.label-success`, dạng `(7:30-9:50)`. Nút "Recalculate" trên báo cáo điểm cũng là `a.label.label-success`. Theo Bootstrap 3, `label-success` là nền xanh lá `#5cb85c`, nhưng chưa thấy CSS của FAP để khẳng định | F04, F06, F10 | Class: Xác nhận. Màu: Suy luận |
| Màu tiêu đề cột bảng (FAP cũ) | Không tìm thấy. FAPI Toolkit đặt `--th-color: #6b90da` cho chế độ sáng. **Không có bằng chứng** đây là màu gốc của FAP | F02, F03 | Không tìm thấy |
| Màu chữ trạng thái kết quả môn (FAP cũ) | `<font color="Green">Passed</font>` (`Green` = `#008000`) | F10 | Xác nhận (fixture được ghi là HTML thật) |
| Thẻ `<font color>` trong bảng FAP cũ | FAP cũ dùng thẻ `<font color=…>` để tô màu chữ trong bảng. CSS dark mode của FAPI viết riêng cho `font[color="Green"]` và `font[color="SeaGreen"]` (`SeaGreen` = `#2E8B57`). Chưa rõ trang nào dùng SeaGreen | F02 | Có hai giá trị này: Suy luận mạnh. Vị trí của SeaGreen: Không tìm thấy |
| Bố cục bảng (FAP cũ) | Bảng HTML có viền; có class `.table-bordered` (khối thông báo trang chủ `Student.aspx`); nội dung chính nằm trong `.row .col-md-12` | F02, F05 | Suy luận |
| Bố cục bảng (FAP mới) | Thời khóa biểu: `table.table.table-sm.table-bordered.align-middle`, đầu bảng `thead.table-light`, cột "Slot" và "Thứ 2 (21/09)"… "Chủ nhật (27/09)". Lịch thi: `table.table-striped.table-hover … fap-sheet fap-table--stack`, mỗi ô có `data-label` để xếp thành thẻ trên điện thoại. Báo cáo điểm: `div.card.fap-result-card` chứa `table.table-vcenter.student-mark-sheet` | F08, F09, F10, F11 | Class: Xác nhận (theo fixture). Màu: Không tìm thấy |
| Màu chữ trong ô thời khóa biểu (FAP mới) | Mã môn và lớp dùng `.text-primary.fw-semibold`, giờ, phòng và giảng viên dùng `.small.text-muted`, giờ in đậm `.fw-bold`. Ô trống là `-` màu `text-muted`. Mã hex phụ thuộc theme Bootstrap/Tabler mà FAP dùng, chưa thấy | F08 | Class: Xác nhận. Hex: Không tìm thấy |
| Bộ chọn tuần (FAP mới) | `input type="week"`, nút "Tuần trước"/"Tuần sau" (`btn-outline-secondary`), "Tuần hiện tại" (`btn-primary`) | F08 (đoạn HTML trong `tests/new-fap.test.js` của F06) | Xác nhận (theo fixture) |

### 2. Trạng thái điểm danh

| Đặc trưng | Giá trị | Nguồn | Độ tin cậy |
|---|---|---|---|
| Chữ trạng thái ở thời khóa biểu tuần (FAP cũ) | `attended` / `absent` / `Not yet`, đặt trong ngoặc, bọc trong thẻ `<font color="…">` | F04, F06, F17 (HCM) | Chữ: Xác nhận. Thẻ `<font color>`: Suy luận mạnh (hai extension độc lập đều dò thẻ này) |
| Màu của `attended` (FAP cũ) | Xanh lá. Khi không đọc được thuộc tính `color`, F06 mặc định là `green`. F02 viết CSS cho `font[color="Green"]` trong bảng | F02, F06 | **Suy luận** (chưa thấy HTML gốc có `<font color="Green">attended</font>`) |
| Màu của `absent` (FAP cũ) | Đỏ (F06 mặc định `red`) | F06 | **Suy luận** |
| Màu của `Not yet` (FAP cũ) | Không tìm thấy. Màu `gray` trong F04/F06 là lựa chọn **của extension** | F04, F06 | Không tìm thấy |
| Biểu tượng cạnh trạng thái (FAP cũ) | Không thấy dấu vết. Chấm tròn màu (`lawngreen`/`red`/`gray`) là do FAPI tự thêm | F04 | Không tìm thấy |
| Chữ trạng thái ở thời khóa biểu tuần (FAP mới, tiếng Việt) | `Có mặt` / `Vắng` / `Chưa điểm danh`, trong `span.small.weekly-timetable-attendance-status` có `title="Điểm danh"`, đặt cạnh mã môn | F08 | Xác nhận (theo fixture) |
| Chữ trạng thái (FAP mới, tiếng Anh) | Attended / Absent / Not yet | F11 | Một nguồn (changelog) |
| Màu trạng thái (FAP mới) | Trong fixture, span trạng thái **không có class màu** (không có `text-success`/`text-danger`/`badge`). Màu, nếu có, nằm ở CSS riêng của FAP và chưa thấy | F08 | Không tìm thấy |
| Biểu tượng (FAP mới) | Bộ icon **Remix Icon**: `ri-wifi-line` (Online), `ri-wifi-off-line` (Offline), `ri-calendar-week-line` (tiêu đề tuần), `ri-checkbox-circle-fill`, `ri-book-open-line`, `ri-calendar-line` (báo cáo điểm). Không thấy icon riêng cho Có mặt/Vắng | F08, F10 | Xác nhận (theo fixture) |
| Báo cáo điểm danh theo môn (FAP cũ) | Trang "Attendance report" (Report → Attendance) liệt kê từng buổi theo ngày, đánh dấu present hoặc absent, cuối mỗi môn có tỷ lệ vắng (quá 20% thì không được thi) | F18 | Xác nhận (chức năng). Màu: Không tìm thấy |
| Báo cáo điểm danh (FAP mới) | Route `/Report/Attendance?termId=…&courseId=…`, bảng `table.attendance-session-sheet`, dropdown `#attendance-report-course` | F12 | Một nguồn, đọc gián tiếp |
| Trạng thái trên lịch thi (FAP mới) | Cột "Trạng thái điểm danh", giá trị mẫu `Chưa điểm danh` | F09 | Xác nhận (theo fixture, độ tin cậy thấp) |
| Chữ "Future" | Chỉ có trong API của app myFAP (`getCourseAttendance`: `Present` / `Absent` / `Future`). Không thấy trên web | F24 | Một nguồn (dịch ngược app) |

### 3. Trang điểm danh của giảng viên (Take attendance)

| Đặc trưng | Giá trị | Nguồn | Độ tin cậy |
|---|---|---|---|
| Có chức năng điểm danh cho giảng viên | Có ("lịch học, tiến độ học tập, điểm danh…") | F27 (HCM) | Xác nhận |
| Bố cục bảng | Bảng có cột Roll Number/MSSV, mỗi dòng một sinh viên. Đây là **giả định của adapter**, tác giả ghi rõ chưa đối chiếu với DOM thật | F13 | Suy luận yếu |
| Điều khiển chọn trạng thái | Hai trạng thái, radio Present/Absent (hoặc Có mặt/Vắng mặt; có thể "attended"), tên control kiểu ASP.NET, giá trị `1`/`0`. Không có trạng thái "muộn" | F13 (và F24: không có mã "muộn") | Suy luận yếu |
| Ảnh sinh viên trong bảng | Không tìm thấy. Adapter F13 có dò cột "image/photo/avatar/ảnh" nhưng không khẳng định FAP có cột này | F13 | Không tìm thấy |
| Nút Save | Có nút Save của FAP để giảng viên tự bấm (extension "never clicks Save") | F13 | Suy luận yếu (tên nút có thể đúng; màu: Không tìm thấy) |
| Màu sắc trang | Không tìm thấy | — | Không tìm thấy |

### 4. Font chữ và framework

| Đặc trưng | Giá trị | Nguồn | Độ tin cậy |
|---|---|---|---|
| Nền tảng FAP cũ | ASP.NET WebForms: trang `.aspx`, `form[name="aspnetForm"]`, id dạng `ctl00_mainContent_lblFullname`, `ctl00_divUser` | F05, F06 | Xác nhận (dấu vết DOM) |
| Framework CSS (FAP cũ) | **Bootstrap 3.** FAP nạp file CSS có chữ "bootstrap" (FAPI gỡ các link này). Dấu vết: `.label-success` (bị bỏ từ Bootstrap 4), `.col-md-12`, `.breadcrumb`, màu `#337ab7`. Chưa thấy số phiên bản cụ thể (3.x) | F05, F06, F10 | Suy luận mạnh |
| Font (FAP cũ) | Không tìm thấy. Nếu FAP giữ font mặc định của Bootstrap 3 thì là "Helvetica Neue", Helvetica, Arial, 14px, nhưng chưa có bằng chứng FAP không ghi đè | — | Không tìm thấy |
| Framework CSS (FAP mới) | **Bootstrap 5** (class `fw-semibold`, `table-light`, `gap-1`, `me-1`, `d-md-block`, `form-select`, `row g-3`). Có `table-vcenter` là class của **Tabler**, một bộ giao diện dựng trên Bootstrap 5. Icon: **Remix Icon** | F08, F10 | Bootstrap 5: Suy luận mạnh. Tabler: Suy luận |
| Font (FAP mới) | Không tìm thấy | — | Không tìm thấy |
| Hiển thị trên điện thoại (FAP mới) | Lưới thời khóa biểu `d-none d-md-block` (ẩn trên màn nhỏ); bảng lịch thi `fap-table--stack` + `data-label` (xếp thành thẻ) | F08, F09 | Xác nhận (theo fixture) |
| Định dạng giờ | FAP cũ: `(7:30-9:50)`. FAP mới: `7h30-9h50` | F06, F08 | Xác nhận |

### 5. myFAP (app di động)

| Đặc trưng | Giá trị | Nguồn | Độ tin cậy |
|---|---|---|---|
| Phát hành | Nhà phát triển "FPT Education"/"FPT University". Gói Android `com.fuct`. Bản 2.0.6 (Google Play cập nhật 08/10/2026). Bản 2.0.5 ghi đổi API cho "new FAP version" | F21, F22, F23 | Xác nhận |
| Công nghệ | React Native (bundle Hermes `assets/index.android.bundle`), cập nhật JS qua OTA | F24 | Một nguồn |
| Màu chủ đạo | Không tìm thấy. Có 8 ảnh App Store, 3 ảnh Google Play và 13 ảnh FPT Shop nhưng **đều không tải được** | F21, F22, F25 | Không tìm thấy |
| Dark mode | App có chế độ tối; đánh giá người dùng (20/05/2026) chê dark mode lỗi và đường kẻ giữa các ngày quá mảnh | F22 | Một nguồn (đánh giá người dùng) |
| Mã trạng thái điểm danh | API lịch học: `P` có mặt, `A` vắng, còn lại (thực tế `N`) là chưa diễn ra. API theo môn: `Present` / `Absent` / `Future` | F24 | Một nguồn (dịch ngược). **Cách app hiển thị** (chữ, màu, icon): Không tìm thấy |
| Điểm danh qua app | Hướng dẫn K20 Hà Nội ghi: điểm danh bằng mã trên website, "không thực hiện trên app MyFAP" | F19 | Xác nhận (cho tuần định hướng) |

### 6. Tiện ích làm đẹp FAP do sinh viên làm

| Tiện ích | Nó làm gì với giao diện | Có chép CSS gốc của FAP không | Nguồn |
|---|---|---|---|
| FAPI Toolkits ("Beauty FAP Interface") | Gỡ CSS Bootstrap của FAP, nạp Tailwind 3.4.1, font Montserrat/Roboto, Font Awesome 6.5.1, thêm dark mode, vẽ lại thời khóa biểu (chấm tròn trạng thái) | **Không.** Chỉ có selector bắt phần tử FAP (`font[color="Green"]`, `.label-success`, `.table-bordered`, `.breadcrumb`, `#ctl00_divUser`) | F02–F05 |
| FPTU Schedule (yunkhngn) | Popup riêng (không sửa trang FAP); đọc cả FAP cũ (`<font color>`) và FAP mới (`.weekly-timetable-*`) | Không. Có fixture HTML của FAP mới (F08–F10) | F06–F11 |
| FPTU Move Out Class Tool | Bảng đổi lớp riêng (màu ngẫu nhiên cho lớp), header bảng xanh dương **của extension** | Không | F15, F16 |
| FAP Attendance Connector | Điền radio trên trang điểm danh giảng viên từ Excel | Không. Trang thử tự thiết kế | F13, F14 |
| Repo clone giao diện FAP có CSS gốc | — | **Không tìm thấy** | — |

## Khoảng trống: cần thien chụp màn hình để xác nhận

Mọi mã màu của FAP vẫn **chưa có**. Lần tra cứu này không đọc được CSS của FAP và không tải được ảnh nào. Đề nghị thien chụp các màn hình dưới đây trên **tài khoản cơ sở HCM**, ở **giao diện FAP hiện tại (sau 09/2026)**. Nên chụp thêm bằng DevTools (Inspect) để có mã màu chính xác:

1. **Trang chủ sau khi đăng nhập**, chụp cả header. Cần biết: màu nền trang, màu thanh header/menu, logo, font. Trong DevTools: `getComputedStyle(document.body).fontFamily`, `backgroundColor`, và màu của header.
2. **Thời khóa biểu tuần (`/WeeklyTimetable`)**: một tuần có đủ ba trạng thái **Có mặt / Vắng / Chưa điểm danh**. Cần: màu chữ (hoặc nền, badge) của từng trạng thái, màu đầu bảng (`thead.table-light`), màu mã môn (`.text-primary`), nút "Tuần hiện tại". Inspect `span.weekly-timetable-attendance-status` để xem có class hay inline style màu không.
3. **Báo cáo điểm danh (`/Report/Attendance`)**: bảng `attendance-session-sheet`. Cần: chữ trạng thái (Present/Absent/Future hay tiếng Việt), màu, dòng tỷ lệ vắng % và màu khi gần 20%.
4. **Chuyển giao diện sang tiếng Anh** (nếu có) và chụp lại mục 2: để xác nhận chữ "Attended / Absent / Not yet".
5. **Trang điểm danh của giảng viên (Take attendance)**: nhờ một giảng viên HCM chụp (che tên và ảnh sinh viên). Cần: có ảnh sinh viên không, radio hay nút, nhãn (attended/absent?), nút Save (chữ, màu), màu dòng.
6. **App myFAP 2.0.6**: màn hình Lịch tuần, Attendance report và Trang chủ, ở chế độ sáng và tối. Cần: màu chủ đạo (thanh trên, tab bar), cách hiện P/A/N (chữ, màu, icon).
7. (Phụ) Một trang **FAP cũ `.aspx`** nếu còn truy cập được (ví dụ `Report/ScheduleOfWeek.aspx`): để xác nhận `<font color="Green">attended</font>`, màu của `absent` và `Not yet`, và tiêu đề cột bảng.

Mỗi ảnh nên kèm ngày chụp, cơ sở, vai trò tài khoản và URL trang, để ghi vào bảng nguồn.
