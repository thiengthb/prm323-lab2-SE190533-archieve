| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | RES-DESK-QR |
| Nhãn | Desk |
| Trạng thái | Nháp |
| Prompt | [ai/prompts/AI-15-qr-fraud-research.md](../../ai/prompts/AI-15-qr-fraud-research.md) |
| Ngày tra cứu | 14/10/2026 |
| Công cụ | WebSearch (standard, extended), WebFetch |
| Đọc kèm | [fptu-all-campuses.md](fptu-all-campuses.md) (S1–S35), [fptu-hcm.md](fptu-hcm.md) (H01–H43), [fap-edit-window.md](fap-edit-window.md) |

# Gian lận khi điểm danh bằng QR và các biện pháp đối phó

## Bối cảnh đang xét

- Lớp 30–40 sinh viên ở FPTU TP.HCM. Mã QR chiếu trên màn, server cấp mã mới mỗi 15 giây. Sinh viên quét bằng điện thoại và đăng nhập bằng tài khoản trường.
- Giảng viên có thể mở điểm danh từ điện thoại khi chưa vào phòng; máy tính trong phòng tự hiện QR.
- Sinh viên HCM hay dùng 4G vì wifi trường chậm.
- Không dùng nhận diện khuôn mặt, không theo dõi vị trí liên tục.

## Quy ước

- **Độ tin cậy:** Đã xác nhận (nguồn chính thức hoặc nghiên cứu có đo đạc) / Nhiều nguồn không chính thức (từ hai nguồn độc lập trở lên, khớp nhau) / Một nguồn / Không tìm thấy.
- **Loại nguồn:** Bài báo khoa học / Chính thức (trang của trường đại học) / Báo chí / Diễn đàn-MXH / Tài liệu nhà cung cấp / Văn bản pháp luật (bản đăng lại).
- **"Suy luận"** là kết luận ghép từ nhiều nguồn hoặc suy ra về mặt kỹ thuật; không nguồn nào nói thẳng.
- Phần lớn bài báo khoa học dưới đây do chính nhóm làm hệ thống tự đánh giá, mẫu nhỏ. Khi bài chỉ ước tính mà không đo, bảng ghi rõ "ước tính".
- Trích dẫn giữ dưới 25 từ. Không ghi tên sinh viên.

## Giới hạn của lần tra cứu này

1. **Diễn đàn sinh viên Việt Nam gần như không đọc được.** Lọc tìm kiếm theo reddit.com, voz.vn, tinhte.vn bị proxy từ chối. Các tìm kiếm tiếng Việt chung không trả về bài Voz, Tinh tế hay nhóm Facebook nào nói về gian lận điểm danh QR. Các file trước đã ghi nhận confession và fanpage FPTU bị chặn. Vì vậy **không có bằng chứng trực tiếp nào từ sinh viên Việt Nam về việc gửi QR qua Zalo hay Messenger.**
2. Reddit chỉ đọc được một thread r/Professors, qua một trang sao chép (Q31).
3. **Không tải được văn bản kỷ luật của FPTU.** `ap.greenwich.edu.vn/temp/Regulations/3.PDF` (kết quả tìm kiếm ghi "Số: …/QĐ-ĐHFPT") và Sổ tay sinh viên 2016 bản `.doc` đều lỗi khi tải. Hướng dẫn về gian lận điểm danh cho giảng viên của Coventry University (`teach.coventry.domains`) chặn công cụ đọc bằng robots.txt.
4. Một số bài chỉ đọc được phần tóm tắt (Q07, Q11), nên số liệu chi tiết có thể còn thiếu.

---

## 1. Bảng nguồn

| Mã | Nguồn | Loại | Năm | Ghi chú |
|---|---|---|---|---|
| Q01 | [Masalha & Hirzallah, "A Students Attendance System Using QR Code", IJACSA 5(3)](https://thesai.org/Downloads/Volume5No3/Paper_10-A_Students_Attendance_System_Using_QR_Code.pdf) | Bài báo khoa học | 2014 | Đề xuất, không có thực nghiệm |
| Q02 | [Võ Hùng Cường, "Quét mã QR trên điện thoại di động ứng dụng vào việc điểm danh sinh viên", Tạp chí KH&CN ĐH Đà Nẵng 12(97)](https://jst-ud.vn/jst-ud/article/download/3113/3113/6964) | Bài báo khoa học (Việt Nam) | 2015 | Nội dung và số liệu ước tính rất giống Q01 |
| Q03 | [Nwabuwe et al., "Fraud Mitigation in Attendance Monitoring Systems using Dynamic QR Code, Geofencing and IMEI", IJACSA 14(4), Nottingham Trent University](https://ueaeprints.uea.ac.uk/93712/1/Paper_104_Fraud_Mitigation_in_Attendance_Monitoring_Systems.pdf) | Bài báo khoa học | 2023 | Kiểm thử 3 kịch bản, 2 người dùng |
| Q04 | [Gaftandzhieva & Lyavova, "AttendEase: Fraud-Resistant Attendance Tracking", IJACSA 17(9), ĐH Plovdiv](https://thesai.org/Downloads/Volume17No9/Paper_23-AttendEase_Fraud_Resistant_Attendance_Tracking.pdf) | Bài báo khoa học | 2026 | 1 giảng viên, 48 SV, 5 môn |
| Q05 | [Alabi et al., "Design and Implementation of an Enhanced QR-Code Based Attendance System", JCSI 5(1)](https://publisher.unimas.my/ojs/index.php/JCSI/article/view/10752) | Bài báo khoa học | 2025 (số 2026) | 7.900 lượt quét khác nhau trong 7 tuần |
| Q06 | [Ambaye, Anderson & Yihun, "Automated QR Code Attendance Tracking System for Efficient Classroom Management", ASEE](https://peer.asee.org/automated-qr-code-attendance-tracking-system-for-efficient-classroom-management.pdf) | Bài báo khoa học | 2026 | 3 môn, học kỳ Fall 2025 |
| Q07 | [Nalintippayawong et al., "Concurrent Self-Identification Applying QR Code to Record Class Attendance (QRClass)", IEEE ICEIEC](https://scholar.it.kmitl.ac.th/item/id/3759) | Bài báo khoa học | 2019 | Chỉ đọc được tóm tắt |
| Q08 | [Bùi Minh Tân et al., "Thiết kế ứng dụng No Code điểm danh lớp học ngoại khóa", TNU JST 230(07), ĐH Sư phạm TP.HCM](https://jst.tnu.edu.vn/jst/article/download/12429/pdf_1) | Bài báo khoa học (Việt Nam, TP.HCM) | 2025 | Thử nghiệm 1 tháng, lớp tối đa 30 SV, 10 buổi |
| Q09 | [Deugo, "Using QR-Codes for Attendance Tracking", FECS'15, Carleton University](https://www.academia.edu/85980313/Using_QR_Codes_for_Attendance_Tracking) | Bài báo khoa học | 2015 | Nhân viên quét mã của SV, ngược với bối cảnh |
| Q10 | [Kwak et al., "A Smartphone-based Tool for Checking Attendance of Students in Classroom Automatically", Seoul National University](https://mmlab.snu.ac.kr/html/publications/docs/attendance_mckwak.pdf) | Bài báo khoa học | khoảng 2016 (không ghi năm) | BLE beacon, 1 phòng, 1 SV thử |
| Q11 | [Vieira et al., "Automated Classroom Attendance … Using a BLE-Based Context-Aware Middleware", SBCUP](https://sol.sbc.org.br/index.php/sbcup/article/view/43289) | Bài báo khoa học | 2026 | Chỉ mô phỏng, chỉ đọc được tóm tắt |
| Q12 | [Imperial College London, MedLearn: QR codes & registering attendance](https://medlearnhelp.imperial.ac.uk/medlearn/registers/qr-codes-registering-attendance/) | Chính thức (trường ĐH) | không rõ | |
| Q13 | [Indiana University CITL: Accurate Attendance & Participation with Top Hat](https://citl.indiana.edu/teaching-resources/academic-integrity/tophat-attendance/index.html) | Chính thức (trường ĐH) | không rõ | Có ghi nhận ca gian lận đã xác nhận |
| Q14 | [UW–Madison KB: Taking Secure Attendance in Top Hat using Geolocation](https://kb.wisc.edu/luwmad/121318) | Chính thức (trường ĐH) | không rõ | |
| Q15 | [University of Arizona: Record Your Attendance with Top Hat](https://studenthelp.intech.arizona.edu/article/603-record-your-attendance-with-top-hat) | Chính thức (trường ĐH) | không rõ | |
| Q16 | [Rutgers: Taking Attendance (Check-In with QR code)](https://ats-techdocs.rutgers.edu/m/98237/l/1971562-taking-attendance-check-in-with-qr-code) | Chính thức (trường ĐH) | không rõ | Công cụ Qwickly |
| Q17 | [Qwickly: Introducing QR Check-In Mode](https://goqwickly.com/press/introducing-QR-check-in-mode/) | Tài liệu nhà cung cấp | không rõ | |
| Q18 | [Nottingham Trent University: Changes to the attendance monitoring app](https://www.ntu.ac.uk/studenthub/news/2025/01/changes-to-the-attendance-monitoring-app) | Chính thức (trường ĐH) | 01/2025 | |
| Q19 | [Moodle.org forum, thread 378173 (Attendance plugin)](https://moodle.org/mod/forum/discuss.php?d=378173) | Diễn đàn-MXH (giảng viên, người bảo trì plugin) | 11/2018–02/2019 | |
| Q20 | [Moodle.org forum, thread 430601](https://moodle.org/mod/forum/discuss.php?d=430601) | Diễn đàn-MXH | 01/2022 | |
| Q21 | [Moodle.org forum, thread 379112](https://moodle.org/mod/forum/discuss.php?d=379112) | Diễn đàn-MXH | 11/2018–10/2019 | |
| Q22 | [Waseda University: Moodle Attendance](https://wnpspt.waseda.jp/teacher_en/wsdmoodle/2023/02/16/13-01-attendance/) | Chính thức (trường ĐH) | 02/2023 | |
| Q23 | [St. Francis Xavier University: Moodle attendance plugin cho lớp đông](https://stfx.teamdynamix.com/TDClient/1764/Portal/KB/Article/63035/Taking-attendance-for-large-classes-using-the-Moodle-attendance-plugin) | Chính thức (trường ĐH) | không rõ | |
| Q24 | [Tiền Phong: Cộng đồng mạng tranh cãi với hình thức điểm danh bằng mã QR của ĐH Luật Hà Nội](https://tienphong.vn/cong-dong-mang-tranh-cai-voi-hinh-thuc-diem-danh-bang-ma-qr-cua-dh-luat-ha-noi-post1214093.tpo) | Báo chí | 19/09/2019 | |
| Q25 | [VietNamNet: ĐH Luật điểm danh bằng mã QR, sinh viên chỉ có 60 giây báo danh](https://vietnamnet.vn/dh-luat-diem-danh-bang-ma-qr-sinh-vien-chi-co-60-giay-bao-danh-i36645.html) | Báo chí | 19/09/2019 | |
| Q26 | [Inside Higher Ed: GPS to Track Student Attendance](https://www.insidehighered.com/index%2Ephp/node/54776) | Báo chí | 19/06/2019 | |
| Q27 | [Pedestrian.tv: University of Newcastle attendance-monitoring app](https://www.pedestrian.tv/news/university-of-newcastle-phone-tracking-students/) | Báo chí | 04/02/2020 | |
| Q28 | [Apple Developer Forums, thread 797864: isSimulatedBySoftware không phát hiện iTool AnyTo](https://developer.apple.com/forums/thread/797864) | Diễn đàn-MXH (diễn đàn nhà phát triển, có trả lời có vẻ của Apple) | không rõ | |
| Q29 | [Capgo: Mock Location Detector, Android setup](https://capgo.app/docs/plugins/mock-location-detector/android/) | Tài liệu nhà cung cấp (thư viện) | không rõ | |
| Q30 | [Internet Society Pulse: Why IP geolocation can't be trusted for mobile networks and the Global South](https://pulse.internetsociety.org/en/blog/why-ip-geolocation-cant-be-trusted-for-mobile-networks-and-the-global-south/) | Blog chuyên môn (tác giả Virginia Tech) | 11/08/2026 | 37.000 phép đo, 175 nước |
| Q31 | [r/Professors: "Attendance ideas" (bản sao trên reddit.birdcat.cafe)](https://reddit.birdcat.cafe/r/Professors/comments/1ix1hez/attendance_ideas) | Diễn đàn-MXH (giảng viên, qua trang sao chép) | 24/02/2025 | |
| Q32 | [Università Bocconi: How is attendance recorded](https://bit.unibocconi.it/hc/en-us/articles/4406242956562-How-is-attendance-recorded) | Chính thức (trường ĐH) | không rõ | |
| Q33 | [University of Portsmouth: Student engagement and attendance](https://myport.port.ac.uk/my-course/student-engagement-and-attendance) | Chính thức (trường ĐH) | không rõ | Quẹt thẻ, không phải QR |
| Q34 | [Tuổi Trẻ: Trường đại học ở TP.HCM phát hiện nhiều sinh viên học hộ, thi hộ](https://tuoitre.vn/truong-dai-hoc-o-tp-hcm-phat-hien-nhieu-sinh-vien-hoc-ho-thi-ho-20240524125823225.htm) | Báo chí | 24/05/2024 | ĐH Công Thương TP.HCM |
| Q35 | [Sổ tay sinh viên K21, FPTU Hà Nội (PDF)](https://daihoc.fpt.edu.vn/en/wp-content/uploads/2025/09/So-tay-sinh-vien-K21-FUHL-1.pdf) | Chính thức (FPTU, cơ sở HN) | 2025 | Cùng tài liệu với S1 |
| Q36 | [Sổ tay sinh viên ĐH FPT 2016 (bản trên Studocu)](https://www.studocu.vn/vn/document/truong-dai-hoc-fpt/giao-duc-quoc-phong/so-tay-sinh-vien-fug-2016/38409021) | Blog (bản sao tài liệu trường) | 2016 | Chỉ hiện một phần |
| Q37 | [Hệ thống pháp luật: Thông tư 10/2016/TT-BGDĐT, Quy chế công tác sinh viên](https://hethongphapluat.com/phap-luat/huong-dan/sinh-vien-thi-ho-lam-ho-do-coi-chung-bi-dinh-chi-hoc-ngay-lan-dau-vi-pham.html) | Văn bản pháp luật (bản đăng lại) | 2016 | Tình trạng hiệu lực hiện tại chưa kiểm |
| Q38 | [Thư viện pháp luật: Hành vi nào của sinh viên bị xử lý kỷ luật (Thông tư 56/2026/TT-BGDĐT, Điều 24)](https://thuvienphapluat.vn/hoi-dap-phap-luat/hanh-vi-nao-cua-sinh-vien-duoc-cho-la-vi-pham-bi-xu-ly-ky-luat-138099984.html) | Văn bản pháp luật (bản đăng lại) | 2026 | |
| Q39 | [Hệ thống pháp luật: Luật Bảo vệ dữ liệu cá nhân 2025 (91/2025/QH15), Điều 2](https://hethongphapluat.com/luat-bao-ve-du-lieu-ca-nhan-2025/dieu-2) | Văn bản pháp luật (bản đăng lại) | hiệu lực 01/01/2026 | Chỉ đọc được Điều 2 và mục lục |
| Q40 | [GitHub jonwestfall/useful-scripts, issue #256: rotating QR check-in, shared-device flags](https://github.com/jonwestfall/useful-scripts/issues/256) | Diễn đàn-MXH (đề xuất thiết kế của một dự án mã nguồn mở) | 08/10/2026 | Không phải bằng chứng thực nghiệm |
| Q41 | [OneTap: Prevent Student Proxy Attendance & Fake Check-Ins](https://www.onetapcheckin.com/prevent-students-fake-attendance) | Tài liệu nhà cung cấp (quảng cáo) | không rõ | |
| Q42 | [Study International: Unis in Malaysia use QR codes to mark attendance](https://studyinternational.com/news/unis-use-qr-codes-mark-attendance-now-theres-no-skipping-class/) | Báo chí | 13/02/2018 | |
| Q43 | [Norris, Fowlie & Hall (Queen's University), "Leveraging institutional tools to improve attendance taking"](https://cuny.manifoldapp.org/read/leveraging-institutional-tools-to-improve-attendance-taking-reducing-time-and-resources-while-increasing-physical-distance) | Bài viết học thuật (không đo đạc) | khoảng 2023 (suy ra từ tài liệu tham khảo) | |
| Q44 | [Fakhrunnisa et al., barcode attendance, Jurnal Ilmiah Mandala Education 12(2)](https://ejournal.mandalanursa.org/index.php/JIME/article/view/10443) | Bài báo khoa học | 2026 | Không nói cách đo thời gian |
| Q45 | [Ege & Özdemir, "RFID-Based Non-Biometric Classroom Attendance System: Proxy Attendance Detection via Weight Sensor", arXiv 2604.22697](https://arxiv.org/pdf/2604.22697) | Bài báo khoa học (preprint) | 2026 | |
| Q46 | [VietTimes: Trường đại học dùng trí tuệ nhân tạo để ngăn sinh viên trốn học](https://viettimes.vn/truong-dai-hoc-dung-tri-tue-nhan-tao-de-ngan-sinh-vien-tron-hoc-post100772.html) | Báo chí | 18/03/2019 | ĐH Hàng Châu Điện tử (Trung Quốc), mã số 4 chữ số, không phải QR |

---

## 2. Các kiểu gian lận đã được ghi nhận

Ghi chú về mức "ghi nhận": rất ít nguồn đếm số ca thật. Nguồn mạnh nhất là Indiana University (Q13), ghi rằng đã có "confirmed cases of academic misconduct regarding falsifying attendance" khi sinh viên nhắn mã cho bạn vắng mặt. Phần lớn nguồn còn lại mô tả gian lận như một rủi ro đã biết, hoặc là lời kể của giảng viên trên diễn đàn.

| Kiểu gian lận | Cách làm | Nguồn |
|---|---|---|
| **G1. Chụp/gửi ảnh mã QR cho người vắng** | Một sinh viên trong lớp chụp màn chiếu rồi gửi qua tin nhắn, email hoặc nhóm chat; người vắng quét ảnh từ xa. Q02 (Việt Nam) ghi kênh là "email, tin nhắn". Q41 viết "A QR photo lands in the group chat". **Nguồn nêu đích danh Zalo hoặc Messenger: Không tìm thấy.** | Q01, Q02, Q03, Q04, Q05, Q12, Q24, Q41. **Nhiều nguồn không chính thức** (là rủi ro được thừa nhận rộng rãi). Ca thật có đếm: Không tìm thấy cho QR. Q12 (Imperial) thừa nhận SV có thể chụp gửi cho bạn. |
| **G2. Gửi mã số hoặc mật khẩu điểm danh qua tin nhắn** | Với hệ thống dùng mã số (ví dụ mã 4 chữ số của Top Hat), sinh viên nhắn mã cho bạn. Ở Q19, mật khẩu phiên được chuyển qua WhatsApp. Q31: "Social media is full of students sharing it". | Q13 (**Đã xác nhận**: có ca kỷ luật thật ở IU), Q19, Q31. Liên quan trực tiếp đến biện pháp "mã đọc to" ở mục 3. |
| **G3. Livestream hoặc gọi video để người vắng quét mã xoay vòng** | Người trong lớp gọi video hoặc phát trực tiếp màn chiếu; người vắng quét mã trên màn hình của mình theo thời gian thực, nên mã đổi 15 giây vẫn còn hạn. | **Không tìm thấy** nguồn ghi nhận trường hợp thật hay thử nghiệm. **Suy luận** kỹ thuật: video call thường trễ vài giây, ngắn hơn 15 giây, nên mã xoay vòng không chặn được kiểu này. |
| **G4. Đăng nhập hộ trên máy khác (cho mượn tài khoản)** | Sinh viên vắng đưa tài khoản và mật khẩu cho bạn; bạn đăng nhập trên máy mình và quét. Ở Q20, một trường đã xoay QR mỗi 2 phút, chặn mạng ngoài trường, mà SV vẫn điểm danh hộ được vì chia sẻ thông tin đăng nhập. | Q03, Q04, Q08, Q20, Q43. **Nhiều nguồn không chính thức.** Q20 là mô tả của một quản trị viên về trường của họ. |
| **G5. Một người cầm nhiều điện thoại, hoặc một máy quét cho nhiều người** | Mang điện thoại của bạn vắng vào lớp, hoặc đăng xuất rồi đăng nhập lần lượt nhiều tài khoản trên cùng một máy. | Q03, Q10, Q19 (người bảo trì plugin Moodle: chặn IP "doesn't stop students from just bringing multiple devices"), Q23, Q41. **Nhiều nguồn không chính thức.** |
| **G6. Quét rồi bỏ về** | Điểm danh đầu giờ rồi rời lớp. Q31 mô tả kiểu này với tờ ký tên ở lớp trên 100 SV. Bocconi (Q32) đặt luật rời lớp sớm thì hủy điểm danh, cho thấy trường coi đây là vấn đề. | Q31, Q32, Q03 (nêu là lỗ hổng của RFID, NFC, sinh trắc). **Một nguồn** (diễn đàn giảng viên). Nguồn ghi nhận riêng cho QR: **Không tìm thấy.** |
| **G7. Giả lập GPS (fake GPS, mock location)** | Dùng ứng dụng giả vị trí để vượt geofence. Có công cụ cho cả iOS (ví dụ iTool AnyTo) và Android. Trên iOS, cờ `isSimulatedBySoftware` không phát hiện được công cụ này (Q28). | Q26 (người làm app GPS điểm danh thừa nhận SV có thể giả vị trí), Q28, Q29, Q04 (chưa kiểm thử chống giả GPS). Công cụ tồn tại: **Đã xác nhận.** Ca SV giả GPS để điểm danh: **Không tìm thấy.** |
| **G8. Quét từ ngoài phòng nhưng vẫn trong khuôn viên hoặc mạng trường** | Đứng ngoài cửa, ở hành lang hay căng tin, dùng wifi trường nên qua được kiểm tra IP. Q19: SV "can be anywhere in the university and register their attendance". | Q01, Q19. **Nhiều nguồn không chính thức.** |
| **G9. Dùng mã còn hiệu lực lâu** | Mã cố định cho cả buổi hoặc cả sự kiện (Q12: "Once an event has been created the QR code will not change") nên có thể gửi và quét bất cứ lúc nào trong khung giờ. Q41 nêu ca điểm danh lúc nửa đêm. | Q12, Q41. **Một nguồn** cho mỗi biến thể. Không áp dụng nếu mã thật sự đổi 15 giây. |
| **G10. Viện lỗi kỹ thuật để được ghi có mặt** | Báo "đã quét nhưng lỗi", hoặc lỗi định vị, để giảng viên sửa tay. Q43 khuyên bật biên nhận xác nhận vì lý do này. Top Hat cho giảng viên sửa tay danh sách SV trượt định vị (Q14). | Q43, Q14. **Một nguồn.** |
| **G11. Có người trong phòng mở điểm danh khi giảng viên chưa đến** | Đặc thù bối cảnh: giảng viên mở từ điện thoại, máy tính phòng tự hiện QR. Nếu giảng viên chưa có mặt thì không ai giám sát; G1, G3, G5 dễ làm hơn. | **Không tìm thấy** nguồn. **Suy luận** từ bối cảnh. |

---

## 3. Biện pháp đối phó: hiệu quả và chi phí

Không tìm thấy nghiên cứu nào đo **tỷ lệ gian lận trước và sau** khi áp dụng một biện pháp. Cột "Bằng chứng" vì vậy chủ yếu là kiểm thử kịch bản nhỏ, hướng dẫn của trường, hoặc lời kể.

| Biện pháp | Chặn được kiểu nào | Không chặn được | Chi phí UX/riêng tư | Bằng chứng |
|---|---|---|---|---|
| **B1. QR xoay vòng ngắn** (5–60 giây trong các nguồn; bối cảnh này là 15 giây) | G9; G1 khi ảnh đến chậm hơn thời hạn mã. | G3 (livestream, **Suy luận**). G1 khi người vắng chờ sẵn: tin nhắn ảnh thường đến trong vài giây, dưới 15 giây (**Suy luận**). G2, G4, G5, G6, G7, G8. Q20: xoay 2 phút vẫn không chặn được vì SV chia sẻ tài khoản. | SV mạng chậm hoặc vào muộn quét đúng lúc mã vừa đổi sẽ bị từ chối. NTU báo "unable to register" khi mã cũ (Q18). Q40 đề xuất nhận cả mã hiện tại và mã liền trước để giảm lỗi này. Số liệu UX đo được: **Không tìm thấy.** Riêng tư: không tốn thêm. | Q03: mã 20 giây, chặn được 1 lần thử chia sẻ. Q05: mã hết hạn 5 giây, chặn chụp màn hình. Q16, Q17, Q18, Q22 (Moodle xoay 60 giây): trường hoặc nhà cung cấp tuyên bố mã xoay để chống chụp và chia sẻ. Đo hiệu quả: **Không tìm thấy.** Độ tin cậy: **Nhiều nguồn không chính thức** (về mục đích), **Một nguồn** (về hiệu quả). |
| **B2. Ràng buộc một thiết bị cho mỗi tài khoản, một thiết bị một lượt mỗi phiên** | G5 (một máy quét nhiều người). G4 một phần: đăng nhập trên máy lạ bị đánh dấu chờ duyệt. | G1 và G3 (người vắng quét bằng chính máy đã đăng ký của mình). G4 nếu SV vắng gửi luôn điện thoại cho bạn mang vào lớp. G6, G7. | SV đổi máy, mất máy, hết pin phải chờ giảng viên duyệt (Q04: "Pending Approval", đổi máy cần xác nhận trực tiếp; Q03: có đường thủ công cho người quên hoặc mất máy). Q03 bắt đăng ký máy chính lần đầu. Riêng tư: lưu mã định danh thiết bị. | Q03: 1 lần thử, chặn được check-in từ máy người khác. Q04: lợi ích thêm của ràng buộc thiết bị không được đo. Q40: "Device signals catch casual sharing, not determined cheating" (đề xuất, không đo). Độ tin cậy: **Một nguồn** (về hiệu quả). |
| **B3. Kiểm tra mạng hoặc IP trường** | G1 và G3 khi người vắng ở ngoài trường và không dùng VPN về trường. | G8 (ở đâu trong trường cũng qua, Q19). G4, G5, G6, G7. Toàn bộ trường hợp SV dùng 4G thì kiểm tra này hoặc chặn nhầm, hoặc phải bỏ qua. | Buộc SV dùng wifi trường. Có báo lỗi chặn nhầm: "this computer is not on allowed list" (Q21). Khi cả trường ra Internet qua một IP tường lửa thì tính năng "Prevent students sharing IP address" không dùng được (Q20). | Q19, Q20, Q21, Q22, Q23, Q43 là hướng dẫn hoặc thảo luận, không có đo lường. Q12: không biết ai quét từ đâu trừ khi mọi SV dùng wifi trường. Độ tin cậy: **Nhiều nguồn không chính thức.** |
| **B4. Geofence hoặc GPS lấy một lần lúc quét** | G1, G3 khi người vắng ở xa. | G7 (giả GPS). G8 một phần (bán kính 50–100 m trong các nguồn rộng hơn một phòng). G4, G5, G6. | GPS trôi trong nhà bê tông gây từ chối nhầm (Q04). SV báo GPS trong khuôn viên không đáng tin (Q27). Top Hat cảnh báo GPS sai có thể chặn SV đang có mặt (Q26). Top Hat cần để mở 2–3 phút để định vị (Q14). Cần quyền vị trí; một số SV tắt vì lý do riêng tư (Q14). Phản ứng riêng tư: hội SV gọi là "gross invasion of privacy" (Q27); giáo sư Rubel gọi là thêm một dạng giám sát (Q26). | Q03: 1 lần thử đúng và 1 lần thử sai địa điểm. Q04: đạt 100% trong kịch bản mô phỏng, bán kính 50 m. Q08: bán kính 100 m. Q13: Secure Attendance (vị trí + Bluetooth) "has been found to work reliably in most classrooms on the IUB campus". Tỷ lệ từ chối nhầm đo được: **Không tìm thấy.** Độ tin cậy: **Nhiều nguồn không chính thức.** |
| **B4b. Phát hiện giả lập GPS** | G7 với công cụ phổ thông (Android: `Location.isMock`, tùy chọn nhà phát triển, danh sách gói như AnyTo). | Công cụ giả vị trí trên iOS như iTool AnyTo: `isSimulatedBySoftware` không phát hiện (Q28). Máy đã root hoặc jailbreak: **Không tìm thấy** nguồn đánh giá. | Có thể chặn nhầm SV chỉ bật tùy chọn nhà phát triển. Q29 lưu ý: chặn chỉ vì tùy chọn nhà phát triển có thể phải qua xét duyệt chính sách Google Play. | Q28, Q29. Trả lời trên diễn đàn Apple: "It is not possible to know how every single spoofing tool works". Độ tin cậy: **Một nguồn** cho mỗi nền tảng. |
| **B5. BLE beacon hoặc kiểm tra gần nhau bằng Bluetooth** | G1, G3, G8 (mức phòng, chặt hơn GPS). | G5 (mang điện thoại bạn vào phòng, Q10 xếp vào việc cần làm sau). G6 nếu chỉ kiểm tra một lần. Giả lập tín hiệu BLE: **Không tìm thấy** nguồn. | Cần lắp beacon từng phòng. Phải bật Bluetooth và vị trí (Q15). Q10 chỉ chạy Android, một máy (Galaxy Alpha) không đạt ngưỡng nhận beacon. Q26: một giáo sư thấy beacon tầm quá ngắn. Pin: Q10 phải dùng gia tốc kế để tắt quét khi SV đứng yên. | Q10: thử 1 phòng, 1 SV. Q11: chỉ mô phỏng, 30 SV ảo, ghi nhận trung bình 27,43/30. Top Hat dùng Bluetooth giữa máy SV với nhau (Q14). Triển khai thật có đo: **Không tìm thấy.** Độ tin cậy: **Một nguồn**. |
| **B6. Mã số đọc to hoặc ghi lên bảng bổ sung** | G1 khi chỉ gửi ảnh QR mà không gửi kèm mã. G9. | G2: mã số nhắn đi rất nhanh, và ở IU đã có ca thật (Q13). G4, G5, G6. | Thêm một bước nhập. SV đến muộn hoặc nghe không rõ sẽ lỡ. ĐH Luật HN chỉ cho 10 giây cuối để nhập mã ghi trên bảng (Q25). | Q25 (ĐH Luật HN 2019): admin trang tin trường cho rằng cách này khiến SV "không thể điểm danh hộ được", nhưng là ý kiến, không đo. Q13 khuyên mã hiện không quá 10 giây và thêm một câu hỏi nói miệng hiện đáp án không quá 10 giây. Q46: mã 4 chữ số gửi về máy, hạn 36 giây. Độ tin cậy: **Một nguồn** (hiệu quả). |
| **B7. Đối chiếu sĩ số (đếm đầu người so với số đã quét)** | Phát hiện dư số do G1, G3, G4, G5, G8 ở mức cả lớp. | Không chỉ ra được ai gian lận. Không chặn G6 nếu chỉ đếm đầu giờ. Phụ thuộc giảng viên có mặt (xem G11). | Giảng viên tốn thời gian đếm. Số phút đếm lớp 30–40: **Không tìm thấy.** Không tốn dữ liệu riêng tư. | Q12 (Imperial) khuyên đếm đầu người đầu buổi với nhóm nhỏ, nếu lệch thì kiểm tra từng tên. Q33 (Portsmouth): trưởng khóa kiểm tra định kỳ ai có mặt. Đo hiệu quả: **Không tìm thấy.** Độ tin cậy: **Nhiều nguồn không chính thức** (là khuyến nghị). |
| **B8. Kiểm tra ngẫu nhiên vài sinh viên** (gọi tên ngẫu nhiên, bài kiểm tra nhỏ trên giấy, điểm danh lúc ngẫu nhiên) | Răn đe G1–G6. Điểm danh vào thời điểm không báo trước chặn được G6. | Không chặn trực tiếp; chỉ tăng rủi ro bị bắt. | Tốn thời gian lớp, nhưng ít. | Q13 khuyên kiểm tra ngẫu nhiên bằng quiz giấy và điểm danh ở thời điểm khác nhau mỗi ngày. Q31: "Do it at different times", điểm danh giữa giờ. IU tin rằng kết hợp công nghệ, cách dạy và chính sách "should significantly deter". Đo hiệu quả: **Không tìm thấy.** |
| **B9. Giảng viên xem ảnh của sinh viên đã quét** (ảnh thẻ có sẵn hiện cạnh tên) | Giúp kiểm tra tay nghi vấn G4 khi so với người thật trong phòng. | Không chặn tự động. Lớp 30–40 SV, giảng viên khó nhớ mặt hết. | Tốn thời gian giảng viên. Ảnh thẻ đã có trong hệ thống nên ít rủi ro riêng tư mới. | Đánh giá riêng biện pháp này: **Không tìm thấy.** Gần nhất: Q01, Q02 đưa điểm so khớp khuôn mặt vào bảng cho giảng viên xem lại, nhưng dùng nhận diện (bối cảnh đã loại). |
| **B10. Selfie khi quét** | G1, G3, G4 nếu ảnh phải chụp trực tiếp có bối cảnh phòng học (người ở nhà khó giả). | G5 nếu chụp cho bạn cũng được. Không có nhận diện khuôn mặt thì phải có người xem tay. | Thêm bước, tốn dữ liệu di động khi tải ảnh. Ảnh mặt là dữ liệu cá nhân; Luật BVDLCN 91/2025/QH15 (hiệu lực 01/01/2026) có điều riêng về dữ liệu sinh trắc học (Q39, chỉ đọc được tiêu đề Điều 31). Selfie không dùng nhận diện có bị coi là sinh trắc học không: **Không tìm thấy.** | Q08 (ĐH Sư phạm TP.HCM) chọn cách cho SV chụp trực tiếp **bảng hoặc slide** làm minh chứng, không chụp chân dung. Đo hiệu quả selfie: **Không tìm thấy.** |
| **B11. Điểm danh hai lần (đầu và cuối) hoặc lúc ngẫu nhiên** *(thêm ngoài danh sách đề bài)* | G6. | G1–G5, G7 như các lần quét đơn. | Gấp đôi số lần quét. | Q08: vào trong 10 phút đầu, ra trong 5 phút cuối. Q32 (Bocconi): rời sớm thì hủy điểm danh. Độ tin cậy: **Một nguồn** mỗi cách. |
| **B12. Quy định và chế tài rõ ràng** *(thêm)* | Răn đe mọi kiểu. | Không chặn kỹ thuật. | Không. | Q12: chia sẻ mã là "a serious breach of professionalism", có thể bị buộc thôi học, áp dụng cho cả người gửi và người nhận. Q13: khuyên ghi rõ chia sẻ mã là vi phạm. Q33: nhờ người quẹt thẻ là "a disciplinary offense". |

**Nhận định chung (Suy luận, từ Q13, Q20, Q40):** không biện pháp kỹ thuật đơn lẻ nào chặn được hết. Ba nguồn độc lập đều nói vậy: IU ghi "no existing technology that can completely guarantee accurate attendance"; người bảo trì plugin Moodle nói SV "will probably find a way around it"; Q40 ghi "No technical measure is complete".

---

## 4. Biện pháp xung đột với bối cảnh

| Biện pháp | Xung đột | Mức độ | Căn cứ |
|---|---|---|---|
| **B3. Kiểm tra mạng hoặc IP trường** | **Xung đột trực tiếp với việc SV dùng 4G.** IP 4G là IP của nhà mạng, không phải của trường. Nhà mạng dùng CGNAT, tức nhiều thuê bao chung một IP và trải trên vùng rộng. Sai số định vị theo IP di động có trung vị 179–207 km; tỷ lệ sai trên 100 km ở châu Á là 53–61% (Q30). Nếu bắt SV chuyển sang wifi trường thì lại vướng chính lý do SV bỏ wifi (chậm). Nếu phía wifi trường ra Internet qua một IP thì luật "mỗi IP một SV" cũng hỏng (Q20). | **Cao** | Q30, Q20, Q21. Q30 không nhắc riêng Việt Nam. |
| **B1. QR xoay vòng 15 giây trên mạng chậm** | Chuỗi quét → mở trang → đăng nhập SSO → gửi có thể kéo dài quá 15 giây trên 4G yếu hoặc khi phiên đăng nhập đã hết hạn. Nếu server kiểm tra hạn mã lúc **gửi** thay vì lúc **quét**, SV có mặt sẽ bị từ chối. Q40 xử lý bằng cách nhận cả mã liền trước. Độ trễ 4G thực tế tại FPTU HCM: **Không tìm thấy.** | **Trung bình** | Q18, Q40. Phần độ trễ là **Suy luận**. |
| **B6, B7, B8, B9 (các biện pháp dựa vào giảng viên)** | **Xung đột với việc giảng viên mở điểm danh khi chưa vào phòng.** Đọc mã, đếm đầu người, kiểm tra ngẫu nhiên, xem ảnh đều cần giảng viên có mặt. Trong lúc máy tính phòng tự hiện QR mà giảng viên chưa đến, không ai giám sát (G11). | **Cao** nếu cho quét trước khi giảng viên đến | **Suy luận** từ bối cảnh. |
| **B4. Geofence/GPS một lần** | Tòa nhà nhiều tầng, phòng cạnh nhau: bán kính 50–100 m trong các nguồn không phân biệt được tầng hay phòng bên. GPS trong nhà bê tông trôi và gây từ chối nhầm (Q04, Q27). Thêm thời gian chờ định vị (Q14: 2–3 phút). Không chặn giả GPS trên iOS (Q28). Không vi phạm điều kiện "không theo dõi liên tục" vì chỉ lấy một lần, nhưng vẫn là dữ liệu vị trí, có điều riêng trong Luật BVDLCN 2025 (Q39, chỉ đọc tiêu đề). Thông tin cấu trúc tòa nhà FPTU HCM trong file này: **Không tìm thấy** (xem fptu-hcm.md). | **Trung bình** | Q04, Q14, Q27, Q28, Q39 |
| **B5. BLE beacon** | Cần phần cứng mỗi phòng, có chi phí và bảo trì. Bắt SV bật Bluetooth và vị trí. Bằng chứng triển khai thật yếu (Q10 một phòng, Q11 mô phỏng). | **Trung bình** (chi phí, không phải xung đột cứng) | Q10, Q11, Q15, Q26 |
| **B10. Selfie** | Đề bài loại nhận diện khuôn mặt. Không có nhận diện thì selfie chỉ có giá trị khi có người xem, tức là cần giảng viên duyệt 30–40 ảnh. Tải ảnh tốn dữ liệu 4G. Có rủi ro pháp lý về dữ liệu sinh trắc học (Q39). | **Cao** | Q08, Q39. Phần còn lại là **Suy luận**. |
| **B2. Ràng buộc một thiết bị** | Không xung đột với 4G. Chi phí là luồng xử lý ngoại lệ khi SV đổi máy, mất máy hay hết pin (Q03, Q04). | **Thấp** | Q03, Q04 |
| **Theo dõi vị trí liên tục** (cách Q03 lấy vị trí mỗi phút để phát hiện bỏ về) | Đề bài đã loại. Muốn chặn G6 thì thay bằng B11 (quét lần hai vào lúc ngẫu nhiên). | Loại theo đề bài | Q03, Q08, Q32 |

---

## 5. Quy định của Đại học FPT về gian lận điểm danh

| Nội dung | Nguồn | Độ tin cậy |
|---|---|---|
| **Quy định riêng về "điểm danh hộ" hay "nhờ người điểm danh" tại FPTU: Không tìm thấy.** Sổ tay SV K21 (Hà Nội, 2025) không có điều khoản riêng cho hành vi này. Sổ tay 2016 có mục "III. Điểm danh" nhưng bản đọc được chỉ có tiêu đề. | Q35, Q36 | Không tìm thấy |
| Sổ tay K21, Mục 1.3.4: "Nghiêm cấm mọi hành vi gian lận, đạo văn trong học tập và thi cử". **Suy luận:** điểm danh hộ có thể bị xử lý theo điều cấm chung này, nhưng văn bản không nêu mức xử lý cho điểm danh. | Q35 | Đã xác nhận (câu chữ); Suy luận (áp dụng cho điểm danh) |
| Sổ tay K21, Mục 3.1.1: vào lớp muộn quá 5 phút thì bị tính vắng ở slot đó. Mục 3.2: ra khỏi lớp giữa giờ phải được giảng viên đồng ý. **Suy luận:** quét rồi bỏ về (G6) trái quy định này, nhưng không thấy chế tài riêng ngoài việc bị tính vắng. | Q35 | Đã xác nhận (câu chữ) |
| Sổ tay K21, Mục 5.2.2 (nội quy thi): "Nhờ người khác thi hộ, làm bài hộ dưới mọi hình thức". Lần 1 đình chỉ thi và đình chỉ học 1 học kỳ; lần 2 buộc thôi học; xử lý cả hai bên. Cấm dùng hoặc cho mượn tài khoản để đăng nhập **hệ thống thi** (Mục 5.2.1). Hai điều này áp dụng cho **thi**, không phải điểm danh. | Q35 | Đã xác nhận (cho thi) |
| Hệ quả học vụ của vắng: không đủ thời lượng tối thiểu thì không được dự thi cuối kỳ và phải học lại (K21, Mục 1.2.3). Sổ tay 2016 cũng ghi phải "Tham gia điểm danh đủ theo quy định" mới được thi. | Q35, Q36 | Đã xác nhận |
| Mức kỷ luật trong Sổ tay K21: cảnh cáo, đình chỉ thi, đình chỉ học tập, buộc thôi học; quyết định kỷ luật lưu hồ sơ và có thể công bố. Không có mức "khiển trách". Bản đọc được bị cắt ở trang 33. | Q35 | Đã xác nhận (một phần) |
| Cấp quốc gia: Thông tư 10/2016/TT-BGDĐT, Điều 6 khoản 2 cấm "học, thi, thực tập, trực hộ người khác hoặc nhờ người khác học, thi, thực tập, trực hộ". Mức xử lý riêng cho học hộ không có trong trang đọc được. Thông tư này còn hiệu lực đến nay không: **chưa kiểm.** **Suy luận:** điểm danh hộ gần với "học hộ" nhưng văn bản không gọi tên. | Q37 | Một nguồn (bản đăng lại) |
| Thông tư 56/2026/TT-BGDĐT, Điều 24 (theo bản đăng lại): cơ sở đào tạo tự quy định "quy trình thực hiện, hình thức kỷ luật" trong quy chế của mình. Nghĩa là chế tài cụ thể phải tìm trong văn bản riêng của FPTU. | Q38 | Một nguồn (bản đăng lại) |
| Văn bản "Quy định khen thưởng, kỷ luật sinh viên" riêng của FPTU: tìm thấy đường dẫn PDF có số "…/QĐ-ĐHFPT" trên `ap.greenwich.edu.vn`, nhưng **không tải được**. Nội dung: **Không tìm thấy.** | (xem Giới hạn) | Không tìm thấy |
| Ví dụ một trường khác ở TP.HCM để tham khảo: ĐH Công Thương TP.HCM (2024) cảnh báo toàn trường về điểm danh hộ, học hộ, thi hộ; phát hiện hơn 20 ca học hộ, thi hộ; mức cao nhất là buộc thôi học. Không phải FPTU. | Q34 | Một nguồn (báo chí) |

---

## 6. Nghiên cứu so sánh thời gian điểm danh QR với gọi tên

**Không tìm thấy nghiên cứu đối chứng chặt chẽ** (cùng lớp, đo nhiều buổi, có phương sai) so sánh QR với gọi tên. Các số dưới đây phần lớn là đo một lần, do chính nhóm phát triển tự báo cáo, hoặc chỉ là ước tính.

| Nguồn | Sĩ số | Gọi tên / thủ công | QR hoặc tự điểm danh | Cách có số liệu | Độ tin cậy |
|---|---|---|---|---|---|
| Q04 (AttendEase, 2026) | 22 SV | khoảng 3,5 phút | khoảng 25 giây cả nhóm | Đo một lần; tác giả tính giảm khoảng 88% | Một nguồn (đo 1 lần) |
| Q07 (QRClass, 2019) | 49 SV | không có số tuyệt đối trong tóm tắt | giảm khoảng 93,14% | Đo, nhưng chỉ đọc được tóm tắt | Một nguồn |
| Q08 (ĐH Sư phạm TP.HCM, 2025) | tối đa 30 SV | 6–8 phút | 1–2 phút (giảm 72%) | Thử nghiệm 10 buổi. Hệ thống dùng GPS và ảnh, không phải QR chiếu | Một nguồn |
| Q06 (ASEE, 2026) | 3 môn | Trích từ tài liệu khác: 8,93 ± 1,06 phút mỗi buổi ở lớp đông; khoảng 17,8 giây mỗi SV khi ký tên | Khoảng 70% SV tự báo quét xong dưới 10 giây | Không đo trực tiếp gọi tên; con số "dưới 1 phút" trong bảng không rõ nguồn gốc | Một nguồn (số gọi tên là trích dẫn thứ cấp) |
| Q01 (2014), Q02 (2015, Việt Nam) | 40–80 SV (Q02) | khoảng 10 phút (Q01); ít nhất 5–10 phút (Q02) | "dưới một phút", giảm gần 90% | **Ước tính, không đo**. Số liệu hai bài gần như trùng nhau | Một nguồn (ước tính) |
| Q09 (Carleton, 2015) | không áp dụng | không đo | khoảng 5 giây mỗi lượt quét; ước tính khoảng 113 SV trong 10 phút | Đo thao tác. Mô hình nhân viên quét mã của SV, ngược với bối cảnh | Một nguồn |
| Q24 (Tiền Phong, ĐH Luật HN, 2019) | không rõ | 15–20 phút | 15–20 giây | Lời một sinh viên kể với báo | Một nguồn (lời kể) |
| Q44 (2026) | không rõ | 10–15 phút (SIAKAD) | 2–3 phút (mã vạch) | Không nói cách đo | Một nguồn |
| Q45 (2026) | không áp dụng | gọi tên 3–6 phút (tiểu học, trung học); tờ ký tên ở đại học có thể quá 10 phút | không đo | Tổng quan tài liệu | Một nguồn (thứ cấp) |
| Q46 (Trung Quốc, 2019) | khoảng 100 SV | đến 10 phút | dưới 1 phút | Báo chí; dùng mã số 4 chữ số, không phải QR | Một nguồn |

**Suy luận cho lớp 30–40 SV:** nếu lấy con số 17,8 giây mỗi SV khi ký tên do Q06 trích dẫn và nhân tuyến tính, thì 30–40 SV mất khoảng 9–12 phút. Đây là phép nhân, không phải số đo, và là thời gian ký tên chứ không phải gọi tên. Các nguồn có sĩ số gần nhất (Q04: 22 SV, Q08: 30 SV) cho thấy gọi tên mất khoảng 3,5–8 phút, còn tự điểm danh mất khoảng 25 giây đến 2 phút. Không nguồn nào đo thời gian **cộng thêm** khi có bước chống gian lận (mã đọc to, đếm sĩ số, chờ định vị). Gần nhất là Top Hat yêu cầu mở ít nhất 2 phút (Q13) hoặc 2–3 phút (Q14) khi bật kiểm tra vị trí.

---

## 7. Những gì chưa trả lời được

1. Bằng chứng từ sinh viên Việt Nam (Voz, Tinh tế, Facebook, Reddit) về gửi QR qua Zalo hoặc Messenger: **Không tìm thấy**.
2. Trường hợp livestream hay gọi video để vượt QR xoay vòng: **Không tìm thấy**.
3. Tỷ lệ gian lận trước và sau khi áp dụng bất kỳ biện pháp nào: **Không tìm thấy**.
4. Chế tài cụ thể của FPTU cho điểm danh hộ: **Không tìm thấy** (văn bản kỷ luật riêng không tải được).
5. Độ trễ 4G và chất lượng wifi thực tế trong phòng học FPTU HCM: **Không tìm thấy** trong lần tra cứu này.
6. Tỷ lệ từ chối nhầm của geofence trong phòng học ở Việt Nam: **Không tìm thấy**.
