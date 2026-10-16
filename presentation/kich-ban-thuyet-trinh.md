# Kịch bản thuyết trình v8 · PRM323 Lab 2 · Nhóm 3

Bài chia 10 phút slide, 5 phút demo, 5 phút hỏi đáp (guideline mục 1). Câu chuyện đi theo trình tự đề chấm: Phân tích → AI tạo → Phản biện → Sửa → Prototype → Bàn giao.

**Thay đổi ở v6 (16/10/2026):** slide 2 đổi lý do chính của thầy Nam về đúng lý do lúc phát triển: bỏ bước đọc tên vì mất thời gian, và mở điểm danh được từ xa, theo đề GVHD và app thật (D-19, D-33). Nỗi đau cũ (quên sửa cho người đến muộn, báo sai lạc kênh) thành lý do phụ, nằm ở phần hỏi đáp. Số quyết định là 34 (D-01..D-34).

**Thay đổi ở v7 (16/10/2026):** bìa còn hai điện thoại: thầy mở phiên QR, sinh viên tự quét. Tiêu đề slide 3 và 5 ngắn hơn, slide 12 kết bằng lời đề nghị gửi hội đồng.

**Thay đổi ở v8 (16/10/2026):** ảnh chip trạng thái (CMP-10) trên slide 9 lấy lại từ Figma: khung giờ giờ viết 07:00–09:15 như trong app. Lời nói không đổi. Phát hiện nhờ bước đối chiếu Figma, GitHub và slide (process/sync/).

**Thay đổi so với dàn ý cũ:** số phát hiện là 73 (CR-01..CR-73, không phải 65 hay 72); số quyết định là 32 (D-01..D-32, không phải 30); đổi màu chính làm 72 frame điện thoại đổi theo (không phải 71). Script slide 2 được rút từ khoảng 1:50 xuống khoảng 1:15, và bỏ chỉ dẫn “chỉ câu bên phải” vì slide mới đặt problem statement trong từng thẻ persona. Để tổng vẫn 10:00, slide 8 và 10 còn 0:45, slide 12 còn 0:50.

## Dàn ý

| Slide | Thời lượng | Ý hội đồng cần nhớ | Tiêu chí chấm |
|---|---|---|---|
| 1 Bìa | 0:15 | Bổ trợ FAP, không thay FAP | — |
| 2 Persona | 1:15 | Thầy Nam cần bỏ bước đọc tên và mở điểm danh từ xa mà vẫn bắt được quét hộ; Trâm cần thấy kết quả và sửa kịp | UX analysis (15) |
| 3 IA | 0:50 | Hai vai trò, mỗi vai trò hai tab theo hai nhịp trong ngày | UX analysis |
| 4 Flow | 1:00 | Flow nào cũng có đường ra; bước đối chiếu là rủi ro số một | UX analysis |
| 5 Prompt và IT-0 | 0:50 | Prompt có đủ 5 phần; Stitch đẹp nhưng sai 3 điều | AI UI generation (10) |
| 6 Ba vòng | 1:10 | Mỗi vòng sửa một loại vấn đề khác; 73 phát hiện có mã | AI iterations (15) |
| 7 Quyết định | 1:00 | AI gợi ý, người chốt; có cả gợi ý của Claude bị bác | AI iterations |
| 8 Final UI | 0:45 | Wireframe sang màn cuối giữ thứ bậc; đủ tải, trống, lỗi | Final UI (20) |
| 9 Design system | 0:50 | Một nguồn token; đổi một biến, 72 frame đổi theo | Design system (15) |
| 10 A11y | 0:45 | Số đo bằng script, không ước lượng | Final UI |
| 11 Prototype | 0:30 | Năm bước demo; chuyển sang slide 12 rồi Figma | Prototype (10) |
| 12 Bàn giao | 0:50 | Bàn giao đủ 6 mục; nói trước giới hạn | Flutter handoff (10) |
| Demo | 5:00 | Xem mục Script demo | Prototype, Documentation (5) |

Tổng phần slide là 10:00. Nếu bị cắt thời gian, rút slide 8 và 10 còn 0:30 mỗi slide; không rút slide 7.

## Script nói từng slide

Script viết để nói, không để đọc thuộc. Chữ trong ngoặc vuông là việc cần làm trên màn hình. Câu cuối mỗi slide là câu chuyển sang slide sau. Phần “Nếu được hỏi” không đọc lúc trình bày; nó cũng nằm trong ghi chú người nói của deck.

### Slide 1 · Bìa (0:15)

Em chào thầy. Nhóm 3 trình bày ứng dụng “Điểm danh buổi học”: một ứng dụng di động bổ trợ FAP, không thay FAP, cho giảng viên và sinh viên cơ sở TP.HCM. Link Figma và GitHub ở góc trái, thầy mở được ngay. Bài bắt đầu từ một buổi sáng của thầy Nam.

**Nếu được hỏi**

- Hai màn bên phải là khoảnh khắc chính của ứng dụng: thầy mở phiên QR trên TV lớp, sinh viên tự quét bằng điện thoại.

### Slide 2 · Persona (1:15)

Lý do thầy Nam cần ứng dụng là lý do thật lúc nhóm làm app: đề bài của GVHD và app điểm danh nhóm đang phát triển (D-19). Thầy Nam là nhân vật tổng hợp, có ngày dạy 3 đến 4 slot, mỗi lớp khoảng 30 bạn.

[Chỉ ba nỗi đau ở thẻ trái] Một: đọc tên 30 bạn mất 6 đến 8 phút, và lặp lại ở mỗi slot. Hai: phải đứng trong phòng mới bắt đầu được, thầy bị gọi họp là cả lớp chờ. Ba: bỏ đọc tên là bỏ luôn lúc thầy nhìn mặt từng bạn, nên phải có cách khác bắt quét hộ.

[Chỉ ba số] Thành công đo bằng ba điều: từ lúc QR đóng tới lúc xác nhận dưới 2 phút 30, mở được từ xa, và bắt được người quét hộ lúc đối chiếu. Ngưỡng là giả định, chưa đo với người thật.

[Chỉ dải dưới hai thẻ] Mở từ xa thì có bị quét hộ không? QR chỉ hiện trên TV trong phòng, mã đổi mỗi 15 giây, và phiên chờ thầy tới đối chiếu, xác nhận rồi mới điền lên FAP.

[Chuyển sang thẻ phải] Bảo Trâm là persona phụ: quét xong muốn thấy ngay mình được ghi nhận, bị ghi sai thì báo thầy trước 23:59. Ứng dụng bỏ bước đọc tên, không bỏ FAP: FAP vẫn là nơi lưu kết quả. Vậy ứng dụng cần những màn nào?

**Nếu được hỏi**

- “6 đến 8 phút lấy từ đâu?” Q08, bài báo của ĐH Sư phạm TP.HCM: lớp 30 sinh viên gọi tên mất 6–8 phút, quét QR 1–2 phút. Một lần đo, không đối chứng, ở trường khác; buổi thử prototype sẽ đo lại bằng TC-1.
- “Vậy là điểm danh tự động?” Không hẳn. Lớp tự quét, nhưng thầy vẫn đối chiếu sĩ số và kiểm tra ngẫu nhiên 3 bạn, mất thêm khoảng 40 giây (D-21). Đổi 40 giây lấy vài phút đọc tên.
- “Lý do này có từ nghiên cứu không?” Không, và em ghi thẳng: lý do chính đến từ đề GVHD và app thật (D-19, D-33). Nghiên cứu thêm lý do phụ: đáp nhỏ bị bỏ sót, quên sửa cho người đến muộn, lời báo sai lạc giữa email và Zalo.
- Vì sao 2:30 không tính 5 phút QR mở? D-29: thầy giảng trong lúc lớp quét, nên chỉ đo phần thầy phải dừng lại.
- “Phỏng vấn do AI đóng vai thì tin được tới đâu?” GVHD chấp nhận (D-05). Mọi dữ liệu ghi nhãn Simulated; phát hiện chỉ từ mô phỏng bị hạ xuống mức “Giả thuyết” (D-16).

### Slide 3 · Kiến trúc thông tin (0:50)

15 màn thật, không tính dialog và biến thể. Tài khoản quyết định vai trò ngay sau đăng nhập, và mỗi vai trò có đúng hai tab.

Vì sao hai tab: việc của thầy Nam chia hai nhịp trong ngày. Đầu slot là điểm danh, đi sâu từ SC-02 tới SC-06. Giữa ngày là xử lý báo sai. Phía sinh viên chia đối xứng nên không phải học hai lần, theo Nielsen số 4. App desktop chiếu QR và extension điền FAP nằm ngoài phạm vi. Các màn này nối với nhau thành ba flow.

**Nếu được hỏi**

- Câu mẫu 1, “Nhu cầu nào của persona quyết định điều hướng?”: hai nhịp của thầy Nam (N-04, N-01), nên mỗi vai trò có đúng hai tab Hôm nay và Báo sai. Mở ux/persona.md, Figma trang 01.
- SC-15 chỉ hướng dẫn đơn khiếu nại trên FAP, không làm lại quy trình đơn.

### Slide 4 · Ba flow (1:00)

[Chỉ làn FL-1] 7 giờ sáng, thầy Nam mở QR, cả lớp quét cùng lúc, thầy đóng QR, đếm người trong phòng, gọi ngẫu nhiên 3 bạn đối chiếu ảnh FAP, rồi xác nhận.

[Chỉ ô vàng] Đây là bước dễ hỏng nhất: nó thêm khoảng 40 giây, và nếu thầy bỏ qua thì quét hộ lọt. Đường hồi phục là FL-3: sinh viên báo sai, thầy sửa trong ngày.

[Chỉ các ô viền đỏ] Flow nào cũng có nhánh lỗi có đường ra: mã hết hạn thì quét lại, quá 23:59 thì hướng dẫn đơn trên FAP, bị từ chối thì sinh viên nhận lý do. Thiết kế xong, nhóm đưa cho AI vẽ.

**Nếu được hỏi**

- Câu mẫu 2, “Flow nào dễ hỏng nhất?”: FL-1 ở bước đối chiếu sĩ số. Hồi phục bằng FL-3. Mở ux/user-flow.md mục 3.
- “Nếu thầy bỏ qua bước đối chiếu thì sao?” Thừa nhận đó là rủi ro số một, chưa kiểm chứng. Thiết kế làm bước đó nhanh nhất có thể (bấm −/+) và khóa nút gửi FAP khi còn lượt cần xem.
- “Chụp QR gửi bạn ở nhà quét thì sao?” Mã 15 giây, nhận mã liền trước, nên cửa còn tối đa 30 giây (D-28). QR không chặn được; hai lớp sau bắt: đếm sĩ số và kiểm tra ngẫu nhiên 3 bạn, xác suất bắt được khoảng 86% qua 20 buổi (D-21).
- “Sao không kiểm Wi-Fi hoặc GPS?” Chặn oan bạn dùng 4G, đụng dữ liệu vị trí; đã loại ở D-21 C và bác lại ở D-24.
- “Mở điểm danh từ xa thì ai đếm?” QR chỉ hiện trên màn hình lớp (D-24); phiên chờ thầy tới lớp đếm và kiểm tra rồi mới điền FAP (D-21 B).
- “Sinh viên hết pin?” Võ Minh Tâm: SC-04 đánh dấu “Trong phòng” (31 người, 30 lượt quét), SC-06 ghi tay kèm giờ; còn mục “Ghi tay thêm sinh viên”.

### Slide 5 · Prompt và IT-0 (0:50)

Prompt soạn từ DESIGN.md và có đủ năm phần đề yêu cầu: nền tảng, sản phẩm, nhiệm vụ của màn, ràng buộc và phong cách. Trên slide là ba câu trích nguyên văn, bản đủ ở AI-18.

[Chỉ lần lượt số 1, 2, 3 trên ảnh] Bản IT-0 của Stitch trông gọn nhưng sai ba điều: hai nút chính, trong đó “Submit Roster” cho gửi danh sách khi chưa đối chiếu; một dòng bịa ra kiểm tra địa chỉ mạng mà nhóm đã loại; và chữ tiếng Anh lẫn vào. Stitch vẽ đẹp nhanh nhưng không hiểu luật của bài, nên cần ba vòng sửa.

**Nếu được hỏi**

- Vì sao prompt viết tiếng Anh? Chữ giao diện tiếng Việt đặt trong ngoặc kép để Stitch chép nguyên văn; phần mô tả bố cục viết tiếng Anh vì mô hình bám cấu trúc tốt hơn.
- Ba màn cho Stitch tạo: SC-03, SC-09, SC-11, phủ cả hai persona.

### Slide 6 · Ba vòng sửa (1:10)

Mỗi vòng giải một loại vấn đề khác.

[Ảnh 2] Vòng 1 là việc chính và ngôn ngữ: còn một nút chính, toàn bộ tiếng Việt, theo Nielsen số 5 và số 2.

[Ảnh 3] Vòng 2 là bố cục 360 dp: sửa vòng 1 lại sinh lỗi cắt chữ, và viền nút phụ chỉ đạt 1,26:1. Nhóm nâng lên 4,16:1 theo WCAG 1.4.11.

[Ảnh 4] Vòng 3 là trạng thái: Stitch không có khái niệm trạng thái, nên bộ đếm được dựng lại trên Figma với ba trạng thái Đang mở, Sắp đóng, Đã đóng. Sau đó nhóm cho Stitch tự sửa đúng ba điểm này (IT-3) để so: Stitch sửa đúng cả ba nhưng làm chip “QR đã đóng” tràn chữ, giống vòng 2, sửa chỗ này hỏng chỗ khác.

Tổng cộng 73 phát hiện có mã CR, mỗi cái gắn một màn và một heuristic. Nhưng không phải gợi ý nào của AI cũng được nhận.

**Nếu được hỏi**

- Câu mẫu 4: vòng 1 việc chính và ngôn ngữ (Nielsen #5, #2); vòng 2 bố cục 360 dp và tương phản viền (CR-18, CR-22); vòng 3 trạng thái (CR-25), IT-3 sửa đúng 3/3 nhưng sinh lỗi chip tràn chữ (CR-60). Mở design/stitch-critique-it0.md.
- Nguồn của 73 mã: CR-01..25 Stitch, CR-26..42 Figma, CR-43..53 bản chấm độc lập, CR-54..63 Stitch IT-0b và IT-3, CR-64..65 tự rà Figma, CR-66..73 chấm chéo bằng Codex (AI-29).
- “Bốn màn Stitch SC-02, 04, 05, 06 có phải Stitch nghĩ ra luồng?” Không. Chạy tối 15/10 sau khi Figma xong, nội dung lấy từ screen-spec, để có bản AI sinh mà so. Stitch vẫn tự thêm Wi-Fi trái D-24 và làm mất dấu tiêu đề (CR-54, CR-55). Đã ghi ở AI-28.

### Slide 7 · Quyết định (1:00)

Nhóm xếp gợi ý của AI vào ba cột. Chấp nhận: bộ đếm ngược QR của Stitch chạy thật, nên thành component ba trạng thái. Sửa: ảnh người thật kiểu stock thành avatar chữ cái; câu nhắc chống gian lận dời từ màn lỗi lên màn quét, vì răn đe phải đến trước hành vi.

[Chỉ thẻ D-24] Bỏ: có cả gợi ý của chính Claude. Claude khuyên gắn cờ lượt quét ngoài Wi-Fi trường. Nhóm đã chọn, rồi mở lại vì nó chính là phương án đã bỏ ở D-21: chặn oan bạn dùng 4G. AI không tự thấy mâu thuẫn với quyết định trước của nó.

Cả 34 quyết định đều ghi phương án, lý do và người chốt. Sau ba vòng, đây là sản phẩm cuối.

**Nếu được hỏi**

- Câu mẫu 3: Submit Roster (CR-01) và cờ Wi-Fi (D-24). Mở process/decision-log.md.
- Thêm ví dụ: CR-07, Claude nói có chữ dưới 14 sp, đo HTML thì nhỏ nhất đúng 14 px, nên bác. Phản biện của AI cũng phải được kiểm.
- “Figma em tự vẽ hay AI vẽ?” Nói thẳng: Claude thực thi qua Figma MCP (D-07), đã ghi trong Disclosure và nhật ký AI-23 tới AI-26. Phần của em là mọi điểm rẽ D-01 tới D-34, duyệt từng vòng và tự chạy thử prototype. Đừng phủ nhận.
- “AI làm hết thì học được gì?” Kể những lần đi ngược AI: QR chiếu cho cả lớp (D-19), extension điền FAP thay vì giả định FAP có API (D-18), mở lại D-24, sửa sự thật đăng nhập FAP của sinh viên K19 (CR-41).

### Slide 8 · Wireframe và Final UI (0:45)

[Chỉ cặp ảnh trái] Từ wireframe xám sang màn cuối, thứ bậc giữ nguyên: số “28/32” ở trên vì đó là điều thầy nhìn đầu tiên, danh sách ở giữa, đúng một nút chính ở đáy trong vùng ngón cái.

[Chỉ ba ảnh phải] Màn nào cần thì có đủ tải, trống và lỗi. Lỗi luôn theo mẫu chuyện gì, vì sao, làm gì tiếp, kèm nút Quét lại. Trang 03 có 15 màn và 54 biến thể. Tất cả dùng chung một hệ thiết kế.

**Nếu được hỏi**

- “MSSV và tên trong Figma có thật không?” Dữ liệu mô phỏng, tên và mã tự đặt.
- Nếu bị cắt giờ: rút slide này còn 0:30.

### Slide 9 · Design system (0:50)

Nguồn token duy nhất là DESIGN.md: 18 biến màu, 7 text style Inter, khoảng cách, góc bo, 4 độ nổi. Màu lấy từ FAP để người dùng nhận ra ngay, nhưng màu nào chưa đạt 4,5:1 thì nhóm làm đậm. 15 component set đủ 9 loại đề yêu cầu.

Không frame nào dùng mã màu trần, nên đổi color/primary một lần là cả 72 frame điện thoại đổi theo. Phần demo em sẽ làm thử cho thầy xem. Hệ này cũng được đo accessibility.

**Nếu được hỏi**

- Câu mẫu 5: cả 72 frame điện thoại (69 khung 360 × 800 và 3 khung 412 × 915). Làm thử trên trang 04.
- Dùng màu FAP nhưng không dùng logo hay tên FAP: ứng dụng không giả FAP (D-20 C).

### Slide 10 · Accessibility (0:45)

Mọi con số chạy bằng script đọc file Figma, không ước lượng. Script chạy ngày 14/10 đi qua 1 240 chữ trên 71 frame: cặp thấp nhất là 5,24:1, trên ngưỡng 4,5:1. Viền ô nhập đạt 4,16:1. 146 vùng bấm không vùng nào nhỏ hơn 48 dp, chữ nhỏ nhất 14 sp.

[Chỉ hai ảnh] Ở 412 dp, nhóm dựng lại ba màn khó nhất: chữ không bị cắt, nút giữ 48 dp, thanh dưới bám đáy. Phần cuối là prototype và bàn giao.

**Nếu được hỏi**

- 71 frame là số ngày 14/10, trước khi thêm frame SC-02 Trống; nay là 72 frame điện thoại.
- Câu mẫu 6: SC-03 danh sách dài nhất, SC-06 nhiều nhóm, SC-09; mới kiểm 3 màn đại diện (D-31, CR-70).
- “Dark mode, TalkBack?” Đề bắt buộc Light, Dark là tùy chọn. Handoff có nhãn Semantics cho trạng thái tải nhưng chưa thử bằng TalkBack. Nói thẳng là chưa thử.
- Nếu bị cắt giờ: rút slide này còn 0:30.

### Slide 11 · Prototype (0:30)

Prototype có 85 frame và 12 điểm bắt đầu; script kiểm không có link hỏng. Năm ảnh này là năm bước em sẽ bấm trong demo, theo đúng thứ tự. [Nói xong thì chuyển sang slide 12 trước, demo sau cùng.]

**Nếu được hỏi**

- “Slide này nói không ngõ cụt, slide 12 lại nói 9 nút ngoài kịch bản?” Chín nút có trong thiết kế nhưng prototype chưa vẽ màn tiếp theo. Bấm vào thì hiện overlay “Ngoài kịch bản demo” và nút Đã hiểu để quay lại, nên không nút nào im lặng (CR-48, D-32).
- “Ô ảnh FAP ở SC-05 chỉ là hình minh họa?” Bài không dùng ảnh người thật; app thật lấy ảnh hồ sơ FAP. Thẻ đã chọn có nút Đổi khi bấm nhầm (CR-72, CR-73).
- “Ô Quét dư tính thế nào?” Đã quét − (Trong phòng − người chưa quét được đánh dấu Trong phòng) = 30 − (31 − 2) = +1, khớp banner. Bản trước ghi “Chênh −1”, đã sửa 15/10 (CR-63).

### Slide 12 · Bàn giao và kết (0:50)

flutter-handoff.md có 6 mục cho từng màn và hai bảng ánh xạ: token sang Flutter, component sang widget. Một lập trình viên lạ mở mục SC-03 là biết cây widget, trạng thái kèm tên frame, và Back đi đâu.

Nhóm nói trước giới hạn: persona là mô phỏng, chưa thử với người thật; 9 nút trong prototype nằm ngoài kịch bản demo, bấm vào thì hiện thông báo nói rõ điều đó (CR-48); app desktop và extension ngoài phạm vi; chỉ đo theme Light.

Nhóm đề nghị hội đồng cho thử prototype với 2 đến 3 giảng viên thật: đo TC-1, và hỏi thầy cô có chịu thêm 40 giây đối chiếu không, vì nếu không thì thầy Nam sẽ bỏ bước đó và quét hộ quay lại. Giờ em xin demo trên Figma.

**Nếu được hỏi**

- Câu mẫu 7: mở mục SC-03. Bố cục cho cây widget, Trạng thái ghi tên frame Figma, Điều hướng nói Back đi đâu, Ràng buộc nói chữ xuống dòng và cỡ chữ tới 200%.
- DEMO (5:00): 6 trang (0:30) → 8 màn khác nhau trên trang 03 (0:20) → Present trang 06, ba flow (2:30) → component và đổi color/primary rồi Ctrl+Z (0:40) → truy AI-18 → IT-0 → CR-01 → Figma (0:30) → GitHub: README, screen-spec, handoff (0:30). Mạng chậm thì bỏ bước component và nói bằng lời.
- “Mỗi bạn làm phần nào?” Commit đều đứng tên Thiên. Trả lời đúng sự thật đã thống nhất trong nhóm (CR-71).

## Script demo 5 phút

Demo đi đúng 7 bước của guideline mục 3; bước 3 chiếm nhiều thời gian nhất. Mở sẵn Figma, file ai-design-log.md và trang GitHub trong 3 tab trước khi lên.

1. **Sáu trang (0:30).** Bấm lần lượt 01 User Flow, 02 Wireframe, 03 Final UI, 04 Design System, 05 Components, 06 Prototype. Nói: “File có đủ 6 trang theo thứ tự đề yêu cầu.”
2. **Tám màn khác nhau (0:20).** Ở trang 03, chỉ dọc cột đầu: SC-01 Đăng nhập, SC-02 Lịch dạy, SC-03 Phiên điểm danh, SC-04 Đối chiếu, SC-05 Kiểm tra ngẫu nhiên, SC-06 Xác nhận, SC-09 Hôm nay của sinh viên, SC-11 Kết quả quét. Nói: “Đây là 8 màn khác nhau; dialog và biến thể trạng thái không tính.”
3. **Ba flow (2:30).** Sang trang 06, bấm Present.
   1. Chọn “FL-1 · Giảng viên điểm danh tại lớp”. Bấm Đăng nhập: nút quay 1 giây rồi vào lịch dạy. Nói: “Đây là chuyển tiếp tải sang kết quả.”
   2. Mở điểm danh, bấm “Đóng QR và kiểm tra”: dialog hiện đè lên màn. Bấm Hủy để thấy quay lại, rồi bấm lại và Đóng. Nói: “Dialog dạng overlay.”
   3. Ở Đối chiếu sĩ số, đọc ba số: 30 quét, 31 người, Quét dư +1. Bấm − để thấy số quét lớn hơn số người, + để thấy nhỏ hơn. Bấm mũi tên Back. Nói: “Back về đúng màn trước.” Đi tiếp Kiểm tra ngẫu nhiên tới Xác nhận. Ở Kiểm tra ngẫu nhiên, ô ảnh ghi “minh họa”: bản thật lấy ảnh hồ sơ FAP.
   4. Chọn “FL-2 · Sinh viên quét mã”. Lần quét đầu báo “Mã đã hết hạn”, bấm Quét lại thì thành công. Nói: “Đây là nhánh lỗi và đường hồi phục.”
   5. Chọn “FL-3 · Giảng viên xử lý báo sai”. Mở báo sai của Linh, bấm Từ chối, overlay xác nhận màu đỏ, sang màn Đã từ chối. Nói: “Không có ngõ cụt: màn nào cũng có đường ra.”
   - Nếu lỡ bấm nút ngoài kịch bản: overlay “Ngoài kịch bản demo” hiện ra, bấm Đã hiểu, nói “thiết kế có nút này, prototype chưa vẽ màn tiếp theo”.
4. **Component và token (0:40).** Thoát Present. Ở trang 05, chọn CMP-01 Button để thấy variant và trạng thái, bật khung Auto Layout. Ở trang 04, đổi giá trị color/primary rồi quay lại trang 03 cho thấy nút đổi màu theo. Bấm Ctrl+Z để trả lại.
5. **Truy một ví dụ AI (0:30).** Mở ai-design-log.md: prompt AI-18 → ảnh IT-0 có “Submit Roster” → phát hiện CR-01 → quyết định → nút chính duy nhất trên SC-03 ở Figma.
6. **GitHub (0:30).** Mở README để thấy bảng ánh xạ sản phẩm nộp, rồi design/screen-spec.md, rồi handoff/flutter-handoff.md với hai bảng ánh xạ.

Nếu mạng chậm khi Present, bỏ bước 4 và nói bằng lời: “Không frame nào dùng mã màu trần, nên đổi biến là cả 72 frame điện thoại đổi theo.”

## Checklist trước giờ thuyết trình

- [ ] Tập nói một lượt có bấm giờ; phần slide không quá 10 phút
- [ ] Thống nhất trong nhóm câu trả lời “mỗi bạn làm phần nào”
- [ ] Để deck và Figma ở quyền xem cho người có link; thử mở cả hai bằng cửa sổ ẩn danh
- [ ] Tải bản PPTX của deck về máy để dự phòng mất mạng
- [ ] Mở sẵn 3 tab: Figma, ai/ai-design-log.md, README trên GitHub
- [ ] Ở trang 06, kiểm tra 3 điểm bắt đầu FL-1, FL-2, FL-3 hiện đúng tên trong Present
- [ ] Chuẩn bị 4G phát Wi-Fi và sạc đầy laptop
- [ ] Đọc lại phần “Nếu được hỏi” một lần trước giờ vào phòng
