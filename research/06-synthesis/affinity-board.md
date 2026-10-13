# Bảng affinity: tổng hợp phỏng vấn mô phỏng R01–R11 và quan sát O-01

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | RES-AFFINITY |
| Trạng thái | Nháp chờ phản biện |
| Đầu vào | R01–R11 (`05-raw/R01-transcript.md` … `R11-transcript.md`, nhãn Simulated), O-01 (`05-raw/O-01-thien-observation.md`), bảng W1–W9 (`04-participants/shared-world-facts.md`) |
| Prompt | ai/prompts/AI-10-synthesis.md |
| Người tổng hợp | Claude (subagent, không biết sản phẩm) |
| Ngày | 13/10/2026 |

**Lưu ý đọc:**

- Cả 11 bản ghi R-nn đều là **Simulated**. Người trả lời mô phỏng đã được đưa bảng W1–W9 vào prompt, nên mọi điều chỉ nhắc lại W-n được ghi "trùng W-n, không tính". Riêng O-01 là nguồn thật: Observed nghĩa là người thiết kế đã thấy, Reported nghĩa là nghe kể.
- Độ mạnh được tính như sau. **Mạnh**: ≥3 người độc lập, hoặc có một điểm Observed. **Vừa**: 2 người. **Yếu**: 1 người. Các phát hiện chỉ dựa trên R-nn đều có ghi chú "chỉ Simulated". Vì vậy, kể cả phát hiện "Mạnh" vẫn là giả thuyết cần kiểm chứng với người thật.
- Mã nguồn lấy theo nhãn câu hỏi trong bản ghi, ví dụ `R04-GV-06`, `R07-P2`, `R01-GV-04đs` (đs = câu đào sâu của câu đó) và `O-01.4`.
- Mã ghi chú có dạng `R01#03`, tức ghi chú thứ 3 của bản ghi R01.

---

## 1. Ghi chú nguyên tử

Loại ghi chú gồm: **HV** Hành vi · **MT** Mục tiêu · **KK** Khó khăn · **RB** Ràng buộc · **XX** Cách xoay xở · **TĐ** Thái độ với cách hiện tại.

### R01 — Giảng viên, dạy toán năm 1–2, điểm danh trên giấy (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R01#01 | R01-GV-04, R01-GV-08đs | HV | Đọc tên theo tờ danh sách in sẵn, đánh "v" bằng bút bi, không mở FAP trên lớp | Vượt W6 (W6 nói đọc tên trên FAP) |
| R01#02 | R01-GV-04 | XX | Chờ khoảng 5 phút đầu giờ rồi mới đọc tên, vì "mấy em đi F-Bus lên sát giờ" | — |
| R01#03 | R01-GV-04 | HV | Nhìn thấy mặt sinh viên rồi mới đánh dấu | — |
| R01#04 | R01-GV-04đs | HV | Sinh viên vào lúc 7g22: ghi giờ cạnh tên, không đánh dấu, nói thẳng "trễ quá năm phút thì tính vắng" | Quy tắc trùng W5; phần hành vi vượt W |
| R01#05 | R01-GV-04đs | HV | Không điểm danh lại khi sinh viên ra vào giữa buổi, cuối buổi không đếm lại | — |
| R01#06 | R01-GV-05đs, R01-GV-07đs | RB | Phòng có 6 dãy bàn, máy lạnh ồn, bàn cuối nghe không rõ nên giảng viên bảo các em giơ tay | — |
| R01#07 | R01-GV-06 | KK | Hai em cùng tên Minh cùng giơ tay, giảng viên phải đọc lại đủ họ tên | — |
| R01#08 | R01-GV-06đs | KK | Một em đeo tai nghe không nghe gọi tên; lần hỏi lại, bạn bên cạnh khều em | — |
| R01#09 | R01-GV-09 | HV | Đầu giờ chiều nhập FAP ở phòng giảng viên, chép từ tờ giấy sang; hai lớp mất khoảng 20 phút vì "sợ bấm lệch dòng" | — |
| R01#10 | R01-P3, R01-GV-14đs | XX | Đặt thước dưới dòng đang dò trên giấy và phóng to trình duyệt vì chữ trên FAP nhỏ | — |
| R01#11 | R01-GV-09đs | HV | Có lần 8 giờ tối mới nhập ở nhà; sinh viên email hỏi vì sao myFAP còn "Not yet" | "Not yet" trùng W8; việc sinh viên email hỏi vượt W |
| R01#12 | R01-GV-10 | MT | Coi là xong khi đã lưu FAP và đếm số Attended khớp với số ghi trên giấy: "tờ giấy là cái gốc" | — |
| R01#13 | R01-GV-11 | HV | Ngày 1/10, 7 giờ tối sinh viên email báo bị Absent; giảng viên xem giấy rồi sửa ngay tối đó bằng laptop ở nhà | — |
| R01#14 | R01-GV-11đs | KK | Quyết định dựa vào trí nhớ (em đó có hỏi bài); không chắc lỗi do không nghe hay do đánh lộn dòng | — |
| R01#15 | R01-P2 | HV | Sửa luôn trên giấy bằng bút đỏ, ghi chú lý do, sửa lại số tổng để giấy khớp FAP | — |
| R01#16 | R01-GV-13, R01-GV-12, R01-P1 | MT | Gọi tên để nhớ mặt, gọi em lên bảng, nhận ra em nào mệt (em đau bao tử) | — |
| R01#17 | R01-GV-13đs | TĐ | Từng để lớp trưởng ghi vắng vào sổ đầu bài, bỏ cách đó vì "không biết mặt em nào" | — |
| R01#18 | R01-GV-14đs | TĐ | Mất cả tháng mới quen FAP: phải nhờ đồng nghiệp, chép các bước ra giấy, có lần chọn nhầm lớp; "bây giờ mà phải học thêm cái gì mới nữa thì tôi ngại lắm" | — |
| R01#19 | R01-GV-09đs | RB | Biết chuyện "qua ngày hệ thống chốt" qua đồng nghiệp dặn, chưa từng tự trải qua | Trùng W7, không tính nội dung |
| R01#20 | R01-P1 | HV | Biết em nào "hay vắng" là nhờ cột ô trống trên giấy, không phải nhờ nhìn mặt | — |
| R01#21 | R01-GV-10đs | MT | Buổi suôn sẻ nhất: lớp đủ, đọc một lượt, nhìn được hết mặt, không ai cắt ngang | — |

### R02 — Giảng viên cơ hữu, kỹ thuật phần mềm, điểm danh trên laptop (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R02#01 | R02-GV-04 | HV | Mở FAP, đọc tên, tick, hỏi lại những em Absent, lưu | Trùng W6, không tính |
| R02#02 | R02-GV-01, R02-GV-02đs | RB | Có ngày dạy liền 4 slot; giải lao mười mấy phút chỉ đủ gom đồ, đổi tầng, cắm lại máy | — |
| R02#03 | R02-GV-04đs | HV | Sinh viên vào sau 15 phút, không nói gì; giảng viên cũng không nói gì, để Absent | — |
| R02#04 | R02-GV-05 | HV | Cả quy trình mất khoảng 5–6 phút | — |
| R02#05 | R02-GV-05đs, R02-P2 | HV | Nhận ra sinh viên nhờ nhớ mặt và nhớ chỗ ngồi gần như cố định | — |
| R02#06 | R02-GV-06, R02-GV-07đs | KK | Hành lang ồn lúc tan lớp nên em bàn cuối không nghe; lượt hỏi lại bắt được em đó | Phần hỏi lại trùng W6 |
| R02#07 | R02-GV-08đs, R02-P3 | RB | Dùng laptop vì máy đã mở để chiếu bài và "Trình duyệt còn giữ FAP từ slot trước"; màn hình to, thấy cả cột | — |
| R02#08 | R02-P1 | XX | Laptop đòi cập nhật thì chuyển sang FAP trên iPhone; danh sách dài, "kéo lố phải kéo lại tìm tên" | — |
| R02#09 | R02-GV-09đs, R02-P2 | XX | Khi tới lớp trễ: nhìn chỗ trống, gọi tên theo trí nhớ, ghi ra giấy nháp, trưa mới nhập FAP | — |
| R02#10 | R02-GV-11 | KK | Nhập từ giấy nháp thì nhầm Khoa với Khôi; 3 giờ chiều sinh viên email, giảng viên sửa lúc giải lao, khoảng 2 tiếng sau, vẫn trong ngày | — |
| R02#11 | R02-GV-11đs | HV | Căn cứ để sửa là tờ giấy nháp cùng trí nhớ (Khoa có lên trả lời) | — |
| R02#12 | R02-GV-10 | MT | Xong khi đã lưu và "cột đó không còn ô nào trống" | — |
| R02#13 | R02-GV-12 | TĐ | "Với tôi điểm danh là việc bình thường thôi, đầu giờ làm 5 phút là xong." | — |
| R02#14 | R02-GV-14đs | TĐ | Chuyển thông báo lớp từ email sang Zalo, gửi song song khoảng 2 tuần, sang tuần 3 bỏ email | — |
| R02#15 | R02-GV-13đs | TĐ | "tôi chưa thấy cách nào khác" (học theo cách thầy cô thời đại học) | — |
| R02#16 | R02-GV-09 | RB | Biết chuyện khóa sau ngày qua đồng nghiệp nói | Trùng W7, không tính |

### R03 — Giảng viên thỉnh giảng, điểm danh trên điện thoại dùng 4G (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R03#01 | R03-GV-01, R03-GV-02 | RB | Thỉnh giảng, làm chính ở công ty; đến trường sát giờ, xin "làm gọn gọn" | Phần kẹt xe trùng W9 |
| R03#02 | R03-GV-02đs, R03-GV-08đs | RB | Không mang laptop vì laptop công ty có chính sách bảo mật; chỉ có điện thoại | — |
| R03#03 | R03-GV-08đs | RB | Điện thoại chưa đăng ký mạng giảng viên nên dùng 4G; "Đăng ký ở đâu anh cũng chưa hỏi, chưa có thời gian." | — |
| R03#04 | R03-GV-05, R03-P3 | KK | 4G trong phòng chập chờn, trang FAP trắng khoảng 1 phút, sinh viên ngồi nói chuyện chờ | — |
| R03#05 | R03-GV-05đs | HV | Không nhớ mặt ("hai lớp sáu chục đứa"), chỉ dựa vào tiếng "có" hoặc cánh tay giơ lên | — |
| R03#06 | R03-GV-04đs, R03-GV-11đs | HV | Không để ý ai vào sau, không đếm người trong phòng | — |
| R03#07 | R03-P2 | HV | Con số "có mặt" lấy từ FAP (30 trừ 3), không lấy từ việc đếm người | — |
| R03#08 | R03-GV-11 | RB | "Email trường anh ít mở, nếu sinh viên có gửi gì chắc anh cũng chưa đọc." | — |
| R03#09 | R03-P1 | HV | Lần gần nhất mở email trường là đầu tháng 9; việc quan trọng thì có người nhắn Zalo | — |
| R03#10 | R03-GV-10 | HV | Lưu xong là xong, "Anh cũng không vào kiểm tra lại." | — |
| R03#11 | R03-GV-11 | HV | Sửa ngay trong buổi khi hỏi lại; không nhớ lần nào sửa sau buổi | Phần hỏi lại trùng W6 |
| R03#12 | R03-GV-12 | TĐ | "Với anh điểm danh là thủ tục của trường, làm cho đúng là được." | — |
| R03#13 | R03-GV-14đs | TĐ | Đổi sang Zalo cho lớp, nhờ lớp trưởng nhắc các bạn vào nhóm, tuần 2 thì đủ; "Zalo thì anh mở hằng ngày" | — |
| R03#14 | R03-GV-09đs | RB | Chuyện khóa sau ngày là nghe thầy cơ hữu nói, chưa đọc văn bản | Trùng W7, không tính |

### R04 — Giảng viên cơ hữu từ 2016, phòng lab, dùng giấy nhớ (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R04#01 | R04-GV-04 | HV | Đọc tên và đánh thẳng trên FAP, hỏi lại những em vắng | Trùng W6, không tính |
| R04#02 | R04-GV-02đs, R04-GV-04 | XX | Ghi tên và giờ vào của em đến sau lượt đọc tên lên giấy nhớ dán ở mép laptop; trong 5 phút thì sửa thành có mặt | — |
| R04#03 | R04-GV-04đs | HV | Sinh viên vào rải rác suốt 15 phút đầu; chỉ theo dõi kỹ trong 15 phút đó | — |
| R04#04 | R04-GV-05 | HV | Tổng khoảng 10 phút nhưng "không liền một mạch" | — |
| R04#05 | R04-GV-05đs | RB | Ở phòng lab sinh viên ngồi sau màn hình; em ở góc cuối giơ tay thì "cũng chỉ thấy cái tay" | — |
| R04#06 | R04-GV-06, R04-GV-06đs | KK | Mỗi lần sửa phải kéo lên tìm tên, đổi trạng thái, lưu lại; "chỉ sợ để cuối giờ mới sửa" | — |
| R04#07 | R04-GV-07 | HV | Em vào lúc 7g08 cãi, viện lý do lỡ F-Bus và Lê Văn Việt kẹt; giảng viên không xét: "xét em này thì phải xét cả lớp" | Trùng W5/W9 phần nền; phần tranh cãi vượt W |
| R04#08 | R04-GV-08đs, R04-P1 | HV | Lấy đồng hồ laptop làm chuẩn; em giơ điện thoại nói "mới 7 giờ 5" thì giảng viên không tính | — |
| R04#09 | R04-GV-07đs | RB | Phòng có cửa sau, giảng viên phải ngước lên mới thấy nên dặn các em vào cửa trước | — |
| R04#10 | R04-GV-10 | MT | Xong là lúc cuối buổi gạch hết tên trên giấy nhớ rồi vò bỏ, không phải lúc bấm lưu | — |
| R04#11 | R04-GV-11 | KK | Ngày 1/10 có ghi giấy nhớ nhưng máy hỏng, giảng viên vội đi họp rồi quên sửa; sáng hôm sau sinh viên email thì FAP đã khóa | — |
| R04#12 | R04-GV-11, R04-GV-11đs | XX | Giảng viên tự email phòng đào tạo kèm ảnh tờ giấy nhớ; ngày 7/10 FAP mới đổi | — |
| R04#13 | R04-P3 | KK | Mất gần nửa tiếng viết email, "trong khi chuyện đó nếu sửa trong ngày thì chưa tới một phút"; sinh viên hỏi lại trước cả lớp | — |
| R04#14 | R04-GV-11đs, R04-P3 | TĐ | "Lỗi là của tôi, em đó đúng, nên tôi khó chịu là ở chỗ đó" | — |
| R04#15 | R04-GV-13, R04-GV-13đs | XX | Trước kỳ Spring nhớ trong đầu nên hay quên và bị khiếu nại; sau một vụ sinh viên lên tận phòng giảng viên thì bắt đầu dùng giấy nhớ, nhưng vẫn quên | — |
| R04#16 | R04-GV-12 | MT | "Công bằng hai chiều": em đến đúng trong 5 phút phải được ghi có mặt, "mà chỗ đó lại phụ thuộc vào trí nhớ của tôi" | — |
| R04#17 | R04-GV-12 | TĐ | Chuyện F-Bus trễ hay kẹt xe thì "cái đó các em phải tự tính" | — |
| R04#18 | R04-P2 | HV | Đọc hết danh sách là lưu ngay, "sợ trang bị lỗi là mất", rồi mới hỏi lại (tự đính chính lời kể trước) | — |
| R04#19 | R04-GV-14, R04-GV-14đs | TĐ | Đổi cách thu bài từ USB sang email vì lý do rõ (virus, xếp hàng); 2 tuần đầu loạn, phải lập Excel theo dõi; tuần 3 quen | — |
| R04#20 | R04-GV-10đs | MT | Buổi suôn sẻ là buổi kiểm tra: các em tới sớm "vì có điểm", không ai cãi, giấy nhớ để trắng | — |
| R04#21 | R04-GV-09đs | RB | Qua ngày "muốn sửa thì phải gửi phòng đào tạo"; khẳng định khóa là có thật "vì tôi bị rồi" | Khóa trùng W7; đường gửi phòng đào tạo vượt W |

### R05 — Giảng viên tiếng Anh dự bị (lớp năm 1), đọc to danh sách vắng (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R05#01 | R05-GV-04 | HV | Đăng nhập FAP trên laptop, đọc tên, bấm Attended | Trùng W6, không tính |
| R05#02 | R05-GV-04 | XX | Đọc to danh sách đang vắng cho cả lớp nghe: "có ai bị ghi nhầm không?" | Vượt W6 (công khai, để cả lớp cùng kiểm) |
| R05#03 | R05-GV-04đs | TĐ | Khi giảng viên đọc danh sách vắng, lớp im hẳn, "vì đứa nào cũng sợ tên mình nằm trong đó" | — |
| R05#04 | R05-GV-10 | MT | Xong là khi đọc lại danh sách vắng mà không còn ai lên tiếng: "Chị dựa vào chính cả lớp" | — |
| R05#05 | R05-GV-11 | KK | Em Hưng vào lúc 7g05, sau khi giảng viên đã đọc lại; giảng viên gật đầu nhưng quên bấm vì đã chuyển sang slide. Đây là chỗ cách đọc lại không bắt được | — |
| R05#06 | R05-GV-11đs | HV | Hôm sau em nhắn Zalo kèm ảnh myFAP; giảng viên bảo em làm đơn trong 2 ngày và nhắn sẽ xác nhận; phòng đào tạo email hỏi giảng viên; khoảng 4–5 ngày thì xong | — |
| R05#07 | R05-GV-09đs | RB | Tin rằng sinh viên "chỉ có 2 ngày" để làm đơn (nghe bộ môn dặn, chưa đọc văn bản), nên muốn phát hiện sai ngay trong lớp | Chưa kiểm chứng |
| R05#08 | R05-GV-13 | XX | Bắt đầu đọc lại danh sách vắng từ 2022, sau khi một em bị ghi nhầm, đến tuần sau mới phát hiện, làm đơn thì quá hạn và "em khóc ngay trong lớp" | — |
| R05#09 | R05-GV-08đs | HV | Đầu giờ theo dõi nhóm Zalo lớp, nơi các em nhắn "em kẹt xe", "em bị sốt" | — |
| R05#10 | R05-GV-07đs, R05-P1 | XX | Wifi chậm thì phát wifi từ điện thoại cho laptop, trễ vài phút | — |
| R05#11 | R05-GV-05đs, R05-GV-07đs | KK | Đầu đợt chưa thuộc mặt, tới tuần 3 nhận ra gần hết; bàn cuối nói nhỏ, góc cuối máy lạnh ồn | — |
| R05#12 | R05-GV-01đs | KK | Sinh viên năm 1 "hỏi nhiều lắm", nhất là chuyện điểm danh, vì chưa quen hệ thống | — |
| R05#13 | R05-GV-12, R05-P2 | KK | Cả lớp đi GDQP mà giảng viên không biết, ngồi chờ đến 7g15; không biết buổi đó cuối cùng hiện thế nào trên FAP | — |
| R05#14 | R05-GV-14, R05-GV-14đs | TĐ | Đổi phiếu giấy sang Google Form; tuần đầu lộn xộn, vẫn để sẵn giấy cho em không có điện thoại; "không ngại thử cái mới, miễn là chị thấy rõ nó giải quyết được chuyện gì" | — |
| R05#15 | R05-P3 | MT | "Nhẹ nhõm" là khi không phải dò, vào bài đúng giờ, và tối đó biết chắc không ai nhắn hỏi "sao em bị vắng" | — |
| R05#16 | R05-GV-13đs | HV | Trước 2022 đọc xong là vào bài; các em "tự lên myFAP xem" | — |

### R06 — Sinh viên năm 1, học tiếng Anh dự bị, đi F-Bus, điện thoại yếu (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R06#01 | R06-SV-04 | HV | Cô đọc tên, em dạ và giơ tay; cuối danh sách cô hỏi lại | Trùng W6, không tính |
| R06#02 | R06-SV-04đs, R06-SV-09 | HV | Coi là đã được ghi nhận vì cô gật đầu; em ngồi xa, không thấy màn hình | — |
| R06#03 | R06-SV-08 | HV | Chưa xem tình trạng điểm danh lần nào; chưa cài myFAP | Vượt W3 (có kênh nhưng không dùng) |
| R06#04 | R06-P3 | RB | Máy rẻ, bộ nhớ gần đầy, "không dám cài thêm app" | — |
| R06#05 | R06-SV-07đs | RB | Không vào được wifi FPTU_Students; gói 4G ít dung lượng nên hạn chế dùng | — |
| R06#06 | R06-SV-08 | XX | Xem lịch học qua ảnh lớp trưởng gửi lên nhóm Zalo | — |
| R06#07 | R06-SV-08đs | RB | Không biết số buổi có mặt của mình; biết quy định 20% qua anh phòng trọ bên cạnh | Nội dung trùng W4 |
| R06#08 | R06-SV-10 | HV | "Chưa gặp" sai sót vì chưa xem bao giờ | — |
| R06#09 | R06-SV-11đs | TĐ | Không biết bạn vào trễ được ghi thế nào; không hỏi vì không quen | — |
| R06#10 | R06-SV-14đs, R06-SV-02 | XX | Ra trạm F-Bus lúc 6 giờ vì đã được dặn lỡ chuyến thì phải chờ chuyến của slot sau | Phần F-Bus trùng W9; hành vi đi sớm vượt W |
| R06#11 | R06-SV-13b | HV | Biết cách điểm danh nhờ nhìn cô làm, "không ai chỉ em" | — |
| R06#12 | R06-SV-12 | TĐ | "Em mới học nên em chỉ biết vậy thôi." | — |

### R07 — Sinh viên năm 3, kỹ thuật phần mềm, làm thêm buổi tối, đi xe máy (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R07#01 | R07-SV-01đs | RB | Làm thêm tới 10 giờ tối, ngủ lúc 1 giờ; "sợ nhất là slot 1" | — |
| R07#02 | R07-SV-02, R07-SV-12 | KK | Đi qua Lê Văn Việt và nhìn đồng hồ suốt; "sáng nào mình cũng chạy xe trong đầu đếm phút" | Kẹt xe trùng W9; hành vi vượt W |
| R07#03 | R07-SV-04 | XX | Ngồi dãy cuối nên vừa nói "có" vừa giơ tay, "cho chắc" | — |
| R07#04 | R07-SV-04đs | TĐ | Không tin cái gật đầu: "thầy gật đầu thì hồi tháng 9 thầy kia cũng gật đầu đó" | — |
| R07#05 | R07-SV-08 | XX | Tối nào có học cũng mở FAP trên laptop sau ca làm; cài extension hiện phần trăm vắng có màu cảnh báo | Extension chưa kiểm chứng |
| R07#06 | R07-SV-06đs | HV | Có cô điểm danh gần cuối giờ (11g20); 11g50 vẫn "Not yet", 10g30 tối mới thấy Attended | "Not yet" trùng W8; việc điểm danh cuối giờ vượt W |
| R07#07 | R07-SV-09 | MT | Xong là khi thấy chữ Attended, "vì cuối cùng người ta xét thi cũng dựa vào đó" | — |
| R07#08 | R07-SV-10 | KK | Ngày 24/9 vào lúc 7g03 khi thầy đang đọc tên, có đáp "có" nhưng bị ghi Absent; sáng hôm sau mới phát hiện nhờ extension đổi màu | — |
| R07#09 | R07-SV-10 | HV | Email thầy lúc 9g30; 2 giờ chiều thầy nhận bấm nhầm nhưng đã qua ngày, bảo làm đơn gửi phòng QLĐT | Khóa trùng W7 |
| R07#10 | R07-SV-14, R07-P2 | KK | Không biết mẫu đơn, không biết gửi cho ai; hỏi bạn, được gửi mẫu và địa chỉ email qua Zalo; "Gửi email có phải đúng chỗ không thì mình cũng không chắc" | — |
| R07#11 | R07-SV-10đs | KK | Có ghi tên bạn ngồi kế làm nhân chứng, "nhưng không ai hỏi Ngân hết" | — |
| R07#12 | R07-SV-14đs | KK | Gửi xong không ai báo đã nhận; ngày nào cũng sáng mở mail, tối mở FAP; ngày 30/9 FAP đổi, hôm sau mới có mail trả lời | — |
| R07#13 | R07-P3 | TĐ | "Thầy nhận là nhầm rồi đó, mà mình vẫn phải đi làm đơn, đi chứng minh là mình có mặt." | — |
| R07#14 | R07-SV-12 | KK | "Mình biết sai là nhờ tự mở FAP coi, chứ không ai báo"; nếu không xem thì "tới gần thi mới biết" | — |
| R07#15 | R07-SV-07, R07-SV-07đs | XX | Wifi trường chậm vì cả lớp vào cùng lúc nên phát 4G từ điện thoại sang laptop | — |
| R07#16 | R07-SV-11 | TĐ | Bạn vào lúc 7g25 bị thầy để vắng; "cái đó không phải việc của mình" | — |
| R07#17 | R07-SV-13 vế 2 | HV | Cách xem kết quả trên FAP và myFAP là do anh chị khóa trên chỉ trong group Zalo | — |
| R07#18 | R07-SV-09đs | MT | Muốn nhất là "chỉ cần có mặt thì ghi có mặt", không phải chờ hay đi hỏi ai | — |

### R08 — Sinh viên kỳ 8, đi làm toàn thời gian, đã xin miễn điểm danh (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R08#01 | R08-SV-01, R08-SV-01đs | HV | Nộp hợp đồng lao động để xin miễn điểm danh; chỉ lên lớp những buổi có quiz | Chưa kiểm chứng |
| R08#02 | R08-SV-04 | HV | Khi thầy gọi tên thì không đáp mà làm việc công ty; thầy "hình như" đọc lướt qua tên | — |
| R08#03 | R08-SV-04đs, R08-SV-09 | TĐ | "Mà cũng không quan tâm, tôi miễn rồi thì ghi gì cũng vậy." | — |
| R08#04 | R08-SV-08 | HV | Tuần 3 mở FAP để coi lịch quiz, thấy mấy ô absent nhưng không làm gì | — |
| R08#05 | R08-P2 | KK | Sau mail "đã nhận" không có thêm xác nhận nào; trên FAP không thấy chỗ nào ghi là miễn, chỉ đoán qua việc thầy đọc lướt | — |
| R08#06 | R08-P3 | TĐ | "Nếu tới lúc thi mà bị chặn thì lúc đó tính" | — |
| R08#07 | R08-SV-07đs | RB | Laptop công ty bắt buộc VPN, không dùng wifi trường, phải phát 4G | — |
| R08#08 | R08-SV-14đs | HV | Gửi scan hợp đồng qua email, khoảng một tuần sau mới có trả lời "đã nhận" | — |
| R08#09 | R08-SV-11 | HV | Một bạn vào trễ khoảng 20 phút, thầy gật đầu cho vào làm quiz | — |
| R08#10 | R08-SV-05đs | HV | Bạn đeo tai nghe không nghe gọi tên; tới lượt hỏi lại, bạn bên cạnh khều | — |
| R08#11 | R08-P1 | TĐ | Tự nhận nói "buổi nào cũng vậy" là "vì tôi không để ý buổi nào cả" | — |

### R09 — Sinh viên năm 2, thiết kế đồ họa, cận khoảng 7 độ, ngồi bàn đầu (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R09#01 | R09-SV-02, R09-SV-04đs, R09-SV-13 | XX | Cận nặng nên luôn ngồi bàn đầu, luôn mang kính dự phòng | — |
| R09#02 | R09-SV-09 vế sau | TĐ | Coi là xong khi cô gật đầu, vì ngồi ngay trước mặt cô; hai năm chưa bị ghi sai lần nào | — |
| R09#03 | R09-SV-06đs | KK | Có thầy chiếu trang FAP lên màn hình khoảng nửa phút; em ngồi dãy 4, chữ nhỏ, chưa kịp dò tên thì thầy đã chuyển slide | — |
| R09#04 | R09-P3 | KK | Ngại hỏi to từ dãy 4, "sợ mình là người duy nhất không đọc được"; bồn chồn tới giờ giải lao, không tập trung được | — |
| R09#05 | R09-SV-06đs | XX | Giờ giải lao mở myFAP, thấy Attended thì "mới thấy nhẹ người" | — |
| R09#06 | R09-SV-08, R09-SV-02đs | HV | Xem điểm danh trên myFAP tiện lúc mở app coi lịch (trên F-Bus, ở hành lang) | — |
| R09#07 | R09-SV-10, R09-SV-10đs | HV | Trưa thấy ca 2 còn "Not yet"; bạn bảo "chắc thầy chưa lưu" nên để đó; chiều xem lại thì đã Attended | "Not yet" trùng W8; hành vi xem lại vượt W |
| R09#08 | R09-P2 | HV | Chiều mở app thì "nhìn ca 2 trước", nghĩa là vẫn còn nhớ chuyện buổi trưa | — |
| R09#09 | R09-SV-07đs, R09-P1 | RB | Nhìn màn hình lâu thì mỏi mắt, phải để cỡ chữ lớn ở mọi chỗ | — |
| R09#10 | R09-SV-14đs | TĐ | Dùng Figma: chữ nhỏ, phóng to thì bảng lệch, kéo nhầm bài đè lên khung của bạn; nhờ bạn ngồi kế chỉ, khoảng 2 tuần thì quen | — |
| R09#11 | R09-SV-13 vế sau | HV | Mấy tuần đầu năm nhất ngày nào cũng mở xem, giờ thì thỉnh thoảng | — |
| R09#12 | R09-SV-12 | TĐ | "Với mình thì cách hiện giờ nhìn chung ổn, hai năm rồi mình quen." | — |
| R09#13 | R09-SV-11đs | RB | "mình chỉ xem được của mình thôi" | — |

### R10 — Sinh viên năm 2, lớp trưởng 2 lớp (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R10#01 | R10-SV-02, R10-SV-02đs | HV | Thầy nhờ lên sớm mở phòng; em chụp tin "xe kẹt" trong nhóm lớp gửi cho thầy qua Zalo | — |
| R10#02 | R10-SV-04, R10-SV-06đs | HV | Lúc điểm danh, thầy hỏi thẳng lớp trưởng mấy bạn vắng vì sao | — |
| R10#03 | R10-SV-06đs, R10-P1 | HV | Có bạn nhắn riêng "đáp giùm tao nha"; em từ chối | — |
| R10#04 | R10-SV-06đs, R10-SV-12, R10-P3 | KK | "tui bị kẹt giữa hai bên"; mỗi lần từ chối là mất lòng một bạn | — |
| R10#05 | R10-SV-11, R10-P1 | KK | Bạn vào lúc 7g15 bị giữ vắng, nhờ lớp trưởng xin châm chước; em không xin được, bạn đó giận | Quy tắc trùng W5 |
| R10#06 | R10-SV-08 | HV | Xem myFAP sau gần như mỗi buổi; chỉ xem được của mình nên bảo các bạn tự xem | — |
| R10#07 | R10-SV-08đs, R10-SV-12 | RB | Mẹ xem myFAP, thấy Absent là nhắn hỏi ngay; "một chữ Absent ghi sai là tối đó về nhà bị hỏi liền" | Chưa kiểm chứng |
| R10#08 | R10-SV-09 | MT | Xong là khi thấy Attended; "Lúc đáp "có" trong lớp thì chưa tính, vì tui từng bị ghi sai một lần rồi." | — |
| R10#09 | R10-SV-10, R10-SV-10đs | XX | Ngày 1/10 bị ghi Absent (lớp có hai bạn tên Phúc, em đoán cô bấm nhầm); 7g15 tối email cô kèm đủ mã lớp, ngày, ca và tên bạn làm chứng; 9 giờ tối đã sửa xong | — |
| R10#10 | R10-P2 | XX | 2g50 thấy "Not yet" thì kệ và quên xem lại, tới 7 giờ tối đã thành Absent; từ đó "thấy "Not yet" là tối tui coi lại lần nữa" | "Not yet" trùng W8; hậu quả vượt W |
| R10#11 | R10-SV-13 tiếp | RB | Biết chuyện "chỉ giảng viên sửa, trong ngày" qua một vụ của bạn hồi năm nhất | Nội dung trùng W7 |
| R10#12 | R10-SV-08đs | HV | Cuối trang điểm danh trên FAP có dòng ghi phần trăm vắng | Chưa kiểm chứng |
| R10#13 | R10-SV-07đs | XX | Wifi phòng chập chờn nên điện thoại chuyển sang 4G | — |
| R10#14 | R10-SV-09đs | MT | Buổi muốn nhất là buổi "không phải đứng giữa ai với ai" | — |
| R10#15 | R10-SV-14đs | TĐ | Khi đổi sang nộp bài qua GitHub, em là người bị hỏi nhiều nhất; qua tuần 2 thì quen | — |

### R11 — Cán bộ phòng Tổ chức và Quản lý đào tạo, xử lý đơn khối Kinh tế (Simulated)

| Mã | Nguồn | Loại | Ghi chú | W |
|---|---|---|---|---|
| R11#01 | R11-CB-01 | HV | Nhận đơn khiếu nại và đơn xin miễn qua FAP; xử lý trong 2–5 ngày làm việc, phần lớn phải hỏi giảng viên để xác minh | — |
| R11#02 | R11-CB-02 | HV | Đơn dồn vào hai đợt: 2 tuần đầu kỳ và tuần 10 (chốt điều kiện dự thi), có ngày hơn hai chục đơn | — |
| R11#03 | R11-CB-02 | HV | Sinh viên gửi email hoặc lên phòng thì được hướng dẫn "nộp lại qua FAP cho đúng quy trình" | — |
| R11#04 | R11-CB-04, R11-CB-04đs | HV | Các bước: đọc đơn, xem FAP, email giảng viên, chờ (Excel ghi "chờ GV"), ghi kết quả, đóng đơn; ca suôn sẻ mất hơn 1 ngày làm việc | — |
| R11#05 | R11-CB-06 | RB | "Quan trọng nhất là xác nhận của giảng viên, vì người có mặt trong lớp hôm đó là thầy." | — |
| R11#06 | R11-CB-08đs | RB | Qua ngày thì giảng viên không sửa được; ai bấm cập nhật là "theo phân quyền", không nói chi tiết | Khóa trùng W7; người cập nhật = UNKNOWN |
| R11#07 | R11-CB-09 | HV | Sinh viên xem kết quả ở phần đơn trên FAP; "Thường thì chị không nhắn riêng cho sinh viên, trừ khi bạn hỏi lại." | — |
| R11#08 | R11-CB-10, R11-CB-10đs | HV | Sinh viên và giảng viên nói khác nhau (giảng viên nói em vào khoảng 10 phút sau): sinh viên chỉ có lời trình bày và tên một bạn; trưởng bộ phận giữ theo giảng viên; mất 4 ngày | — |
| R11#09 | R11-CB-11 | HV | Cả lớp vẫn "Not yet" sau khi đã qua ngày; cán bộ gọi điện cho cô, cô gửi danh sách "theo ghi chép của cô" | "Not yet" trùng W8; cách xử lý vượt W |
| R11#10 | R11-CB-11đs | KK | Một sinh viên vắng quá 20%: khiếu nại một buổi được chấp nhận, đơn miễn hai buổi không có giấy thì không duyệt, nên vẫn không đủ điều kiện dự thi | Ngưỡng trùng W4; hậu quả vượt W |
| R11#11 | R11-P1 | KK | Một thầy không thấy email ("bị lẫn trong hộp thư"); sau khoảng 3 ngày làm việc cán bộ phải gọi điện bàn nhắc | — |
| R11#12 | R11-P2, R11-CB-12 | KK | Đơn chậm chủ yếu vì thiếu thông tin hoặc ảnh mờ phải trả về cho sinh viên | — |
| R11#13 | R11-P3 | HV | Có sinh viên email hỏi vì sao đơn vẫn "đang xử lý" vì lo bị tính vắng; cả kỳ chỉ có một bạn hỏi lại | — |
| R11#14 | R11-CB-02đs | HV | Định kỳ đối chiếu danh sách sinh viên vắng nhiều với Phòng SSC | Chưa kiểm chứng |
| R11#15 | R11-CB-13, R11-CB-07 | TĐ | Quy trình không đổi gần 7 năm; "Chị thấy mọi người đều quen: sinh viên biết vào đâu để nộp" | — |
| R11#16 | R11-CB-14đs | TĐ | Năm ngoái phòng chuyển sang dùng chung file Excel: tuần đầu hai người xử lý trùng đơn; chị giữ sổ tay song song khoảng một tháng | — |
| R11#17 | R11-CB-03 | HV | Có sinh viên đến hôm sau mới xem myFAP nên phát hiện sai khi đã qua ngày | — |

### O-01 — Quan sát của người thiết kế (nguồn thật)

| Mã | Nguồn | Loại | Ghi chú | Nhãn |
|---|---|---|---|---|
| O-01#1 | O-01.1 | RB | Slot dài 135 phút | Observed (là nguồn của W2) |
| O-01#2 | O-01.2, O-01.3 | HV | Giảng viên đọc tên trên FAP; sinh viên đáp "có" hoặc ra hiệu; không ai đáp thì giảng viên hỏi lại | Observed (là nguồn của W6) |
| O-01#3 | O-01.4 | XX | Đọc hết danh sách, giảng viên hỏi lại những người đang Absent | Observed (là nguồn của W6) |
| O-01#4 | O-01.5, O-01.6 | RB | Chỉ giảng viên sửa được, và chỉ trong ngày | Reported |
| O-01#5 | O-01.7 | RB | Sai phải được phát hiện trong ngày, quá ngày thì "không còn cứu vãn được" | Reported |
| O-01#6 | O-01.8 | KK | Giai thoại: sinh viên sát ngưỡng, bị ghi sai một buổi mà không báo kịp nên vượt 20% | Reported, không có số liệu |

**Tổng: 180 ghi chú.** R01 có 21, R02 có 16, R03 có 14, R04 có 21, R05 có 16, R06 có 12, R07 có 18, R08 có 11, R09 có 13, R10 có 15, R11 có 17, O-01 có 6. Trong đó 7 ghi chú bị đánh dấu "trùng W, không tính" hoàn toàn (R02#01, R02#16, R03#14, R04#01, R05#01, R06#01, R01#19), và nhiều ghi chú khác chỉ trùng một phần.

---

## 2. Nhóm theo hành vi và bối cảnh

Các nhóm được gom theo việc người ta làm và hoàn cảnh lúc làm, không theo vai trò danh nghĩa. Một ghi chú có thể nằm ở nhiều nhóm.

| Nhóm | Tên nhóm (câu mô tả hành vi) | Ghi chú |
|---|---|---|
| C-01 | Người điểm danh xác nhận có mặt bằng tai và mắt, và tín hiệu dễ lọt ở cuối phòng | R01#03, R01#06, R01#08, R02#06, R03#05, R04#05, R04#09, R05#11, R07#03, R08#10, O-01#2 |
| C-02 | Tên trùng hoặc gần giống nhau khiến người điểm danh đánh nhầm người | R01#07, R01#10, R02#10, R10#09 |
| C-03 | Lượt hỏi lại cuối danh sách bắt được người không nghe, nhưng bỏ sót người đến sau lượt đó | O-01#3, R02#06, R03#11, R05#02, R05#05, R04#02, R04#11, R04#15, R04#16, R01#02 |
| C-04 | Giảng viên ghi tạm ra giấy hoặc nhớ trong đầu, rồi chép lên FAP sau | R01#01, R01#09, R01#10, R01#15, R02#09, R02#10, R02#11, R04#02, R04#11, R11#09 |
| C-05 | Thời điểm FAP có kết quả trễ so với lúc sinh viên đáp "có" | R01#11, R02#09, R07#06, R09#07, R09#08, R10#10, R11#09 |
| C-06 | Sinh viên tự kiểm tra trên FAP hoặc myFAP mới yên tâm, vì đó là thứ được dùng để xét thi | R07#04, R07#05, R07#07, R07#14, R09#05, R09#06, R09#11, R10#06, R10#08, R10#10 |
| C-07 | Trong lớp sinh viên không thấy được mình đã được ghi gì, chỉ dựa vào cái gật đầu | R06#02, R07#04, R09#02, R10#08 (R10-SV-04đs), R06#09 |
| C-08 | Giảng viên công khai danh sách trong lớp, nhưng chỉ người nghe hoặc thấy rõ mới kiểm được | R05#02, R05#03, R05#04, R09#03, R09#04 |
| C-09 | Báo sai trong ngày thì sửa trong vài giờ; qua ngày thì phải làm đơn, mất nhiều ngày | R01#13, R02#10, R10#09, R04#11, R04#12, R04#13, R05#06, R07#09, R07#12, R11#04, R11#08, R11#11, O-01#5 |
| C-10 | Sinh viên tự tìm thủ tục khiếu nại và tự theo dõi trạng thái, không ai báo | R07#10, R07#11, R07#12, R08#05, R08#08, R11#03, R11#07, R11#12, R11#13 |
| C-11 | Lỗi do người ghi, nhưng người bị ghi sai phải chứng minh và chờ | R07#13, R04#13, R04#14, R05#08, R11#05, R11#08 |
| C-12 | Quy tắc 5 phút được giảng viên áp cứng theo đồng hồ của mình, và mỗi bên tự lo rủi ro kẹt xe | R01#02, R01#04, R02#03, R04#07, R04#08, R04#17, R06#10, R07#02, R07#01, R07#16, R10#05, R11#08 |
| C-13 | Giảng viên dùng thiết bị đang có sẵn, khi trục trặc thì đổi sang điện thoại hoặc 4G | R02#07, R02#08, R03#02, R03#03, R03#04, R05#10, R04#18 |
| C-14 | Sinh viên dùng 4G hoặc máy yếu vì wifi trường không ổn | R06#04, R06#05, R07#15, R08#07, R10#13 |
| C-15 | Người mắt kém phải phóng to, ngồi gần hoặc nheo mắt để đọc chữ nhỏ | R01#10, R01#18, R09#01, R09#03, R09#09, R09#10 |
| C-16 | Giảng viên nhận ra sinh viên nhờ đã quen mặt và chỗ ngồi, phải mất vài tuần mới có | R01#16, R01#20, R02#05, R02#09, R04#05, R05#11, R03#05 |
| C-17 | Mỗi giảng viên tự định nghĩa thế nào là "đã điểm danh xong" | R01#12, R02#12, R03#10, R04#10, R05#04 |
| C-18 | Thông tin về chuyên cần đi qua kênh cá nhân (Zalo, email, lớp trưởng, phụ huynh) | R03#08, R03#09, R05#09, R05#06, R06#06, R10#01, R10#07, R11#11, R01#13 |
| C-19 | Lớp trưởng bị kéo vào giữa giảng viên và bạn cùng lớp | R10#01, R10#02, R10#03, R10#04, R10#05, R10#14 |
| C-20 | Sinh viên mới vào hoặc được miễn thì đứng ngoài vòng theo dõi điểm danh | R06#03, R06#07, R06#08, R06#11, R05#12, R05#13, R08#01–R08#06 |
| C-21 | Người ta biết quy định qua truyền miệng, không ai đọc văn bản | R01#19, R02#16, R03#14, R04#21, R05#07, R06#07, R10#11, R07#17 |
| C-22 | Khi sinh viên sát ngưỡng, đơn dồn về tuần chốt và việc sửa một buổi không đủ cứu | R11#02, R11#10, O-01#6, R07#05 |
| C-23 | Buổi suôn sẻ là buổi đủ người, đọc một lượt, sau đó không ai hỏi | R01#21, R02#12 (R02-GV-10đs), R04#20, R05#15, R07#18, R09#02 (R09-SV-09đs), R10#14, R11#04 (R11-CB-09đs) |
| C-24 | Người ta đổi cách làm khi thấy lý do rõ, và chạy song song cách cũ vài tuần | R02#14, R03#13, R04#19, R05#14, R09#10, R10#15, R11#16, R01#18 |
| C-25 | Thói quen mới thường ra đời ngay sau một sự cố | R01#17, R04#15, R05#08, R07#05, R10#10 |
| C-26 | Có người coi điểm danh là thủ tục, có người coi là công cụ dạy học | R01#16, R02#13, R03#12, R01#17 |

**Tổng: 26 nhóm.**

---

## 3. Phát hiện

Quy ước đếm người: GV có 5 người (R01–R05), SV có 5 người (R06–R10), CB có 1 người (R11). Cột "Simulated" ghi "chỉ Simulated" khi không có điểm Observed nào của O-01 ủng hộ.

### F-01 — Sinh viên có mặt nhưng bị ghi Absent là sai sót được kể nhiều nhất, và nguyên nhân nằm ở khâu ghi (không nghe, bấm hoặc chép nhầm, quên sửa), không phải sinh viên khai gian.
- **Ủng hộ:** R01-GV-11, R01-GV-11đs, R02-GV-11, R04-GV-11, R05-GV-11, R07-SV-10, R10-SV-10, R11-CB-06 ("lúc điểm danh thầy bấm sót"), R11-CB-11đs, O-01.8 (Reported).
- **Số người:** 4/5 GV (R01, R02, R04, R05), 2/5 SV (R07, R10), 1/1 CB.
- **Trái chiều:** R09-SV-09 vế sau ("chưa bị ghi sai lần nào"). R06-SV-10 và R08-SV-10 nói "chưa gặp", nhưng vì không xem nên không phải bằng chứng ngược. R10-SV-06đs có lời nhờ "đáp giùm", tuy đã bị từ chối.
- **Độ mạnh:** Mạnh. Chỉ Simulated; O-01.8 cùng hướng nhưng là Reported.

### F-02 — Tiếng "có" dễ bị lọt khi sinh viên ngồi bàn cuối, phòng ồn (máy lạnh, hành lang), sinh viên đeo tai nghe, hoặc ngồi khuất sau màn hình phòng lab. Giảng viên bù bằng cách bắt giơ tay và hỏi lại; sinh viên bù bằng cách vừa nói vừa giơ tay.
- **Ủng hộ:** R01-GV-05đs, R01-GV-06đs, R01-GV-07đs, R02-GV-06, R02-GV-07đs, R04-GV-05đs, R05-GV-04, R05-GV-05đs, R05-GV-07đs, R06-SV-05đs, R07-SV-04, R08-SV-05đs, O-01.3 (Observed: "Không thấy ai đáp thì giảng viên hỏi lại").
- **Số người:** 4/5 GV (R01, R02, R04, R05), 3/5 SV (R06, R07, R08).
- **Trái chiều:** R03-GV-06 ("Một lần thôi"), R09-SV-05đs (ngồi đầu nên "nghe cô đọc rất rõ").
- **Độ mạnh:** Mạnh. Có O-01.3 Observed cho việc có người không đáp; các nguyên nhân cụ thể thì chỉ có trong Simulated. Riêng việc hỏi lại thì trùng W6.

### F-03 — Khi trong lớp có tên trùng hoặc gần giống nhau, người điểm danh dễ đánh nhầm người, nhất là lúc chép từ giấy sang màn hình.
- **Ủng hộ:** R01-GV-06 (hai em Minh, bắt được ngay trong lớp), R01-P3 (sợ nhảy dòng ở chỗ hai em Minh), R02-GV-11 (Khoa và Khôi, ghi sai), R10-SV-10 (hai bạn Phúc, sinh viên tự đoán).
- **Số người:** 2/5 GV chắc chắn, 1/5 SV phỏng đoán.
- **Trái chiều:** không có.
- **Độ mạnh:** Vừa. Nếu trường hợp của R10 được kiểm chứng thì lên Mạnh. Chỉ Simulated, và "hai người cùng tên" có thể là một mô-típ AI tự sinh (xem mục 7).

### F-04 — Sinh viên đến hợp lệ (chưa quá 5 phút) nhưng sau lượt hỏi lại sẽ rơi vào khe hở: bước hỏi lại không bắt được họ, nên việc họ được ghi đúng chỉ còn trông vào trí nhớ của giảng viên. Giảng viên thường quên khi đã chuyển sang dạy.
- **Ủng hộ:** R04-GV-04, R04-GV-11, R04-GV-12, R04-GV-13đs, R05-GV-11.
- **Cách xoay xở liên quan:** R04 dùng giấy nhớ, nhưng vẫn quên (R04-GV-13đs). R01 chờ 5 phút rồi mới đọc tên (R01-GV-04), nên tránh được khe này.
- **Số người:** 2/5 GV có lỗi kiểu này; 1/5 GV có cách tránh.
- **Trái chiều:** R02-GV-04đs và R03-GV-04đs không theo dõi người đến sau, nên không thấy chuyện này.
- **Độ mạnh:** Vừa. Chỉ Simulated.

### F-05 — Một số giảng viên ghi tạm (giấy in, giấy nháp, trí nhớ) rồi mới nhập FAP sau trong ngày. Bước chép lại vừa tốn công (dò từng dòng) vừa là chỗ phát sinh lỗi.
- **Ủng hộ:** R01-GV-04, R01-GV-09, R01-P3, R01-GV-11đs, R02-GV-09đs, R02-P2, R02-GV-11, R11-CB-11 (cô gửi danh sách "theo ghi chép của cô").
- **Số người:** 2/5 GV trực tiếp (R01 thường xuyên, R02 thỉnh thoảng), 1 GV khác qua lời kể của CB.
- **Trái chiều:** R03, R04, R05 đánh thẳng trên FAP ngay lúc đọc tên.
- **Độ mạnh:** Vừa. Chỉ Simulated. Điểm này vượt W6, vì W6 chỉ mô tả việc đọc tên trên FAP.

### F-06 — Kết quả lên FAP thường trễ so với lúc sinh viên đáp "có" (giảng viên nhập buổi trưa hoặc tối, hoặc điểm danh cuối giờ). Sinh viên thấy "Not yet" rồi phải quay lại xem. "Not yet" thường bị bỏ qua, và đã có lần nó che một lỗi Absent cho tới tối.
- **Ủng hộ:** R01-GV-09đs, R02-GV-09đs, R07-SV-06đs, R09-SV-10, R09-P2, R10-P2, R11-CB-11.
- **Số người:** 2/5 GV, 3/5 SV, 1/1 CB.
- **Trái chiều:** R03, R04, R05 lưu ngay trong lớp nên FAP có kết quả ngay.
- **Độ mạnh:** Mạnh. Chỉ Simulated. Bản thân trạng thái "Not yet" trùng W8; phần hành vi xem lại và hậu quả (R10-P2) vượt W.

### F-07 — Với nhiều sinh viên, điểm danh chỉ "xong" khi thấy chữ Attended trên FAP hoặc myFAP, không phải lúc đáp "có". Các em tự kiểm tra sau buổi học, và lỗi chỉ được phát hiện khi các em tự xem; không có ai báo.
- **Ủng hộ:** R07-SV-04đs, R07-SV-08, R07-SV-09, R07-SV-12, R10-SV-08, R10-SV-09, R10-SV-10 (mẹ phát hiện), R09-SV-06đs, R09-SV-08, R11-CB-03 (sinh viên xem trễ một ngày), R05-GV-13đs ("tự lên myFAP xem").
- **Số người:** 3/5 SV (R07, R10, R09 kiểm tra "cho chắc"), 1 CB, 1 GV.
- **Trái chiều:** R09-SV-09 vế sau ("trong lòng là xong từ lúc dạ "có" rồi"), R06-SV-08 và R06-SV-09 (chưa xem lần nào), R08-SV-09 ("Không có lúc nào cả").
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-08 — Trong lớp, sinh viên không có cách nào biết mình đã được ghi gì; tín hiệu duy nhất là cái gật đầu của giảng viên, và có sinh viên không tin tín hiệu này.
- **Ủng hộ:** R06-SV-04đs, R06-P2, R07-SV-04đs, R10-SV-04đs ("Thầy không chiếu màn hình FAP lên nên không ai thấy được gì"), R09-SV-09.
- **Số người:** 4/5 SV.
- **Trái chiều:** R05-GV-04 (giảng viên đọc to danh sách vắng), R09-SV-06đs (thầy chiếu FAP), nhưng cả hai đều là cách riêng của từng giảng viên.
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-09 — Khi giảng viên công khai kết quả ngay trong lớp (đọc to danh sách vắng, chiếu FAP lên), lỗi được bắt tại chỗ. Nhưng người ngồi xa, mắt kém hoặc nói nhỏ vẫn bị bỏ sót, và các em ngại lên tiếng trước lớp.
- **Ủng hộ:** R05-GV-04, R05-GV-06, R05-GV-10, R05-GV-13, R09-SV-06đs, R09-P3.
- **Số người:** 1/5 GV, 1/5 SV.
- **Trái chiều:** không có.
- **Độ mạnh:** Vừa. Chỉ Simulated.

### F-10 — Báo sai trong ngày thì giảng viên sửa được trong khoảng 1–2 giờ. Qua ngày thì phải qua đơn và phòng đào tạo, mất khoảng 4–7 ngày, và cả sinh viên, giảng viên lẫn cán bộ đều tốn công hơn hẳn.
- **Ủng hộ trong ngày:** R01-GV-11, R02-GV-11, R10-SV-10đs.
- **Ủng hộ qua ngày:** R04-GV-11 (1/10 đến 7/10), R04-P3 (nửa tiếng viết email so với "chưa tới một phút"), R05-GV-11đs (4–5 ngày), R07-SV-10 (25/9 đến 30/9), R11-CB-04, R11-CB-10đs, R11-P1.
- **Số người:** 4/5 GV, 2/5 SV, 1/1 CB.
- **Trái chiều:** không ai nói qua ngày thì không sửa được. Điều này **mâu thuẫn với O-01.7** ("không còn cứu vãn được").
- **Độ mạnh:** Mạnh. Chỉ Simulated. Chuyện khóa sau ngày trùng W7; thời gian và công sức thực tế thì vượt W.

### F-11 — Lỗi do người ghi, nhưng người bị ghi sai lại phải đi chứng minh mình có mặt và ngồi chờ. Điều này gây bực bội cho sinh viên và khiến giảng viên tự trách.
- **Ủng hộ:** R07-P3, R07-SV-12, R04-GV-11đs, R04-P3, R05-GV-13 (em "khóc ngay trong lớp").
- **Số người:** 1/5 SV trực tiếp, 2/5 GV.
- **Trái chiều:** R11-CB-09đs coi một đơn hơn 1 ngày là "theo cách chị muốn nhất", tức là ở phía cán bộ thì quy trình này chạy ổn.
- **Độ mạnh:** Mạnh (3 người). Chỉ Simulated.

### F-12 — Sinh viên phải tự tìm thủ tục khiếu nại (mẫu đơn, kênh gửi) qua bạn bè, và không được báo là đơn đã được nhận hay đã có kết quả. Vì vậy các em tự kiểm tra liên tục.
- **Ủng hộ:** R07-SV-14, R07-P2, R07-SV-14đs, R08-SV-14đs, R08-P2, R11-CB-02 (sinh viên gửi sai kênh), R11-CB-09, R11-P3.
- **Số người:** 2/5 SV, 1/1 CB xác nhận việc không báo riêng cho sinh viên.
- **Trái chiều:** R11-CB-07 và R11-CB-13 ("sinh viên biết vào đâu để nộp").
- **Độ mạnh:** Mạnh. Chỉ Simulated. Hai sinh viên gửi qua email trong khi cán bộ nói kênh chính là FAP (xem mục 7).

### F-13 — Khi đã qua ngày, căn cứ quyết định là xác nhận của giảng viên. Lời trình bày của sinh viên và bạn làm chứng không được hỏi tới.
- **Ủng hộ:** R11-CB-06, R11-CB-10đs, R07-SV-10đs, R04-GV-11đs (giảng viên gửi kèm ảnh giấy nhớ làm căn cứ).
- **Số người:** 1 CB, 1/5 SV, 1/5 GV (gián tiếp).
- **Trái chiều:** không có.
- **Độ mạnh:** Vừa. Hai nguồn trực tiếp (R11, R07). Chỉ Simulated.

### F-14 — Muốn sửa kịp trong ngày, lời báo phải tới được giảng viên qua kênh họ thực sự đọc. Có giảng viên gần như không mở email trường, và có email bị lẫn mất. Nhiều giảng viên đã chuyển liên lạc với lớp sang Zalo.
- **Ủng hộ:** R03-GV-11, R03-P1, R11-P1. Liên quan: R02-GV-14, R03-GV-14, R05-GV-08đs, R05-GV-11đs (sinh viên nhắn Zalo).
- **Số người:** 1/5 GV và 1 CB trực tiếp; 3/5 GV dùng Zalo.
- **Trái chiều:** R01, R02, R04 đọc email và sửa trong ngày.
- **Độ mạnh:** Vừa. Chỉ Simulated.

### F-15 — Giảng viên áp quy tắc 5 phút một cách cứng rắn, lấy đồng hồ của mình làm chuẩn và không xét lý do kẹt xe hay F-Bus trễ. Sinh viên đi trễ thì im lặng chấp nhận, cãi, hoặc nhờ lớp trưởng xin châm chước.
- **Ủng hộ:** R01-GV-04đs, R02-GV-04đs, R04-GV-07, R04-GV-08đs, R04-P1, R04-GV-12, R07-SV-11, R09-SV-11 vế sau, R10-SV-11, R11-CB-10.
- **Số người:** 3/5 GV, 3/5 SV (là người chứng kiến), 1 CB.
- **Trái chiều:** R08-SV-11 (thầy gật đầu cho vào, không rõ ghi thế nào), R06-SV-11 ("Cô nói bạn vô ngồi đi").
- **Độ mạnh:** Mạnh. Chỉ Simulated. Bản thân quy tắc trùng W5; cách áp dụng và tranh cãi thì vượt W.

### F-16 — Mỗi bên tự lo rủi ro trễ 5 phút trong buổi sáng: sinh viên đi sớm hoặc vừa chạy xe vừa "đếm phút"; một giảng viên chờ 5 phút rồi mới đọc tên; một giảng viên khác cho rằng đó là việc sinh viên phải tự lo.
- **Ủng hộ:** R06-SV-14đs, R07-SV-01đs, R07-SV-12, R01-GV-04, R04-GV-12.
- **Số người:** 2/5 SV, 2/5 GV.
- **Trái chiều:** R04-GV-12 ("các em phải tự tính") cho thấy cách nhìn khác hẳn R01.
- **Độ mạnh:** Mạnh (4 người). Chỉ Simulated. Chuyện kẹt xe và F-Bus trùng W9.

### F-17 — Giảng viên dùng thiết bị nào là do hoàn cảnh: laptop đang mở để chiếu bài, điện thoại khi không có hoặc không dùng được laptop. Khi mạng hoặc máy trục trặc, giảng viên đổi sang điện thoại hoặc 4G, và cả lớp ngồi chờ khoảng 1 phút.
- **Ủng hộ:** R02-GV-08đs, R02-P1, R02-P3, R03-GV-02đs, R03-GV-08đs, R03-GV-05, R03-P3, R05-GV-07đs, R05-P1.
- **Số người:** 3/5 GV.
- **Trái chiều:** R04-GV-07đs ("Wifi hôm qua vào FAP được ngay"). R01 không dùng thiết bị trên lớp.
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-18 — Sinh viên dùng 4G vì wifi trường chậm, không vào được, hoặc vì máy công ty phải chạy VPN. Có sinh viên dùng máy yếu, không cài thêm được ứng dụng.
- **Ủng hộ:** R06-SV-07đs, R06-SV-08, R06-P3, R07-SV-07đs, R08-SV-07đs, R10-SV-07đs.
- **Số người:** 4/5 SV.
- **Trái chiều:** R09 không nhắc gì đến trục trặc mạng.
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-19 — Chữ nhỏ trên màn hình (FAP, màn chiếu) làm khó người mắt kém, cả giảng viên lẫn sinh viên; họ bù bằng cách phóng to, ngồi gần hoặc dùng thước.
- **Ủng hộ:** R01-GV-05đs, R01-GV-14đs, R01-P3, R09-SV-04đs, R09-SV-06đs, R09-SV-07đs, R09-SV-14đs.
- **Số người:** 1/5 GV, 1/5 SV.
- **Trái chiều:** không có.
- **Độ mạnh:** Vừa. Chỉ Simulated.

### F-20 — Giảng viên nhận ra sinh viên nhờ đã quen mặt và nhớ chỗ ngồi cố định, và phải mất 3–4 tuần mới có được điều này. Giảng viên thỉnh giảng dạy ít buổi thì không có lợi thế đó.
- **Ủng hộ:** R01-GV-08đs, R02-GV-05đs, R02-P2, R04-GV-05đs, R05-GV-05đs.
- **Số người:** 4/5 GV.
- **Trái chiều:** R03-GV-05đs ("Mặt từng bạn thì anh không nhớ hết").
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-21 — Có giảng viên dùng phút gọi tên để nắm tình trạng từng sinh viên (mệt, hổng bài, hay vắng), chứ không chỉ để điểm danh.
- **Ủng hộ:** R01-GV-12, R01-GV-13, R01-P1, R01-GV-13đs.
- **Số người:** 1/5 GV.
- **Trái chiều:** R03-GV-12 ("thủ tục của trường"), R02-GV-12.
- **Độ mạnh:** Yếu. Chỉ Simulated.

### F-22 — Mỗi giảng viên có tiêu chí "xong" khác nhau: bấm lưu, khớp với tờ giấy, gạch hết giấy nhớ, hay không còn ai lên tiếng. Có giảng viên không bao giờ kiểm tra lại sau khi lưu.
- **Ủng hộ:** R01-GV-10, R02-GV-10, R03-GV-10, R04-GV-10, R05-GV-10.
- **Số người:** 5/5 GV.
- **Trái chiều:** không có.
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-23 — Lớp trưởng là đầu mối nhận câu hỏi về chuyên cần từ cả giảng viên lẫn bạn cùng lớp, và có lúc bị nhờ "đáp giùm" hoặc xin châm chước. Từ chối thì làm mất lòng bạn.
- **Ủng hộ:** R10-SV-02đs, R10-SV-04, R10-SV-06đs, R10-SV-11, R10-SV-12, R10-P1, R10-P3. Ủng hộ gián tiếp: R01-GV-12đs (lớp trưởng "hay bị bạn bè hỏi chuyện "Not yet""), R05-GV-12đs, R06-SV-08.
- **Số người:** 1/5 SV trực tiếp; 2/5 GV nhắc đến.
- **Trái chiều:** không có.
- **Độ mạnh:** Vừa với vai trò đầu mối; Yếu với chuyện bị nhờ đáp giùm và mất lòng. Chỉ Simulated.

### F-24 — Phụ huynh xem myFAP, nên một chữ Absent ghi sai khiến sinh viên bị hỏi ngay trong tối đó; phụ huynh cũng có thể là người phát hiện lỗi.
- **Ủng hộ:** R10-SV-08đs, R10-SV-10, R10-SV-12.
- **Số người:** 1/5 SV.
- **Trái chiều:** không có.
- **Độ mạnh:** Yếu. Chỉ Simulated, chưa kiểm chứng phụ huynh có quyền truy cập hay không.

### F-25 — Sinh viên mới vào trường chưa nắm hệ thống: chưa từng xem điểm danh, chưa cài app, không biết số buổi của mình. Giảng viên dạy lớp năm 1 nhận nhiều câu hỏi, và lịch của tân sinh viên dễ bị nhầm.
- **Ủng hộ:** R06-SV-08, R06-SV-08đs, R06-SV-10, R06-SV-13b, R05-GV-01đs, R05-GV-04đs, R05-GV-12.
- **Số người:** 1/5 SV, 1/5 GV.
- **Trái chiều:** R09-SV-13 vế sau (năm nhất "ngày nào học xong cũng mở ra xem").
- **Độ mạnh:** Vừa. Chỉ Simulated.

### F-26 — Cả giảng viên và sinh viên đều biết quy định về khóa sau ngày và thủ tục sửa qua truyền miệng (đồng nghiệp, anh chị khóa trên); không ai kể là đã đọc văn bản, và các phiên bản kể lại không giống nhau.
- **Ủng hộ:** R01-GV-09đs, R02-GV-09, R03-GV-09đs, R04-GV-09đs, R05-GV-09đs, R06-SV-08đs, R10-SV-13 tiếp, R07-SV-13 vế 2.
- **Số người:** 5/5 GV, 3/5 SV.
- **Trái chiều:** R04-GV-09đs khẳng định khóa "vì tôi bị rồi", tức là có trải nghiệm trực tiếp.
- **Độ mạnh:** Vừa (hạ bậc). Phần nội dung trùng W7. W7 lại ghi rõ "Theo hiểu biết phổ biến … chưa kiểm chứng", nên việc người trả lời mô phỏng đều nói "nghe đồng nghiệp kể" có thể chỉ là AI suy ra từ chính W7. Chỉ Simulated.

### F-27 — Sinh viên được miễn điểm danh hoàn toàn thờ ơ với việc điểm danh; các em không có xác nhận nào rằng mình đã được miễn, và định để tới lúc bị chặn thi mới lo.
- **Ủng hộ:** R08-SV-01, R08-SV-04đs, R08-SV-08, R08-P2, R08-P3.
- **Số người:** 1/5 SV.
- **Trái chiều:** R11-CB-01 và R11-CB-11đs chỉ nhắc đến miễn do ốm, cần giấy khám bệnh.
- **Độ mạnh:** Yếu. Chỉ Simulated; chính sách miễn bằng hợp đồng lao động chưa được kiểm chứng.

### F-28 — Khi sinh viên đã sát ngưỡng 20%, đơn dồn về tuần chốt điều kiện thi. Lúc đó, sửa được một buổi bị ghi sai cũng không cứu được nếu các buổi vắng khác không có minh chứng.
- **Ủng hộ:** R11-CB-02, R11-CB-11đs, R07-SV-08 (theo dõi phần trăm bằng extension), O-01.8 (Reported).
- **Số người:** 1 CB, 1/5 SV (liên quan), cộng 1 điểm Reported.
- **Trái chiều:** O-01.8 kể rằng chính buổi bị ghi sai làm sinh viên vượt ngưỡng, còn ca R11 kể thì lỗi ghi được sửa nhưng sinh viên vẫn vượt ngưỡng.
- **Độ mạnh:** Yếu. Chỉ Simulated cộng một điểm Reported.

### F-29 — Buổi điểm danh suôn sẻ được tả rất giống nhau: lớp đủ, không ai đến muộn, đọc một lượt, không phải hỏi lại, không ai cắt ngang, và sau buổi không ai phải hỏi hay xem lại.
- **Ủng hộ:** R01-GV-10đs, R02-GV-10đs, R04-GV-10đs, R05-GV-10đs, R05-P3, R07-SV-09đs, R09-SV-09đs, R10-SV-09đs, R11-CB-09đs.
- **Số người:** 4/5 GV, 3/5 SV, 1/1 CB.
- **Trái chiều:** R03 và R08 không chọn được buổi nào. Ngoài ra, R04-GV-10đs cho thấy buổi suôn sẻ phụ thuộc vào thứ giảng viên không kiểm soát (các em tới sớm "vì có điểm").
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-30 — Người ta đổi một công cụ hay thủ tục khi thấy lý do cụ thể. Giai đoạn chuyển kéo dài khoảng 2–3 tuần (có khi một tháng), thường vẫn chạy song song cách cũ, và hay phải nhờ người bên cạnh chỉ.
- **Ủng hộ:** R02-GV-14đs, R03-GV-14đs, R04-GV-14, R04-GV-14đs, R05-GV-14đs, R09-SV-14đs, R10-SV-14đs, R11-CB-14đs, R01-GV-14đs.
- **Số người:** 5/5 GV, 2/5 SV, 1/1 CB.
- **Trái chiều:** R01-GV-14đs ("ngại lắm").
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-31 — Thói quen điểm danh hay kiểm tra mới thường ra đời ngay sau một sự cố cụ thể, không phải do được hướng dẫn.
- **Ủng hộ:** R01-GV-13đs (bỏ sổ đầu bài), R04-GV-13 (dùng giấy nhớ sau một lần bị khiếu nại), R05-GV-13 (đọc lại danh sách vắng sau khi một em khóc), R07-SV-08 (xem mỗi tối "từ vụ hồi tháng 9"), R10-P2 (đổi cách xử lý "Not yet").
- **Số người:** 3/5 GV, 2/5 SV.
- **Trái chiều:** R02-GV-13 và R03-GV-13 làm theo cách được chỉ từ đầu, chưa đổi lần nào.
- **Độ mạnh:** Mạnh. Chỉ Simulated.

### F-32 — Cái giá của việc đổi thói quen cao nhất ở hai nhóm: giảng viên gắn bó lâu năm với giấy (coi giấy là bản gốc, mất cả tháng mới quen FAP) và giảng viên thỉnh giảng ít thời gian (chưa cả đăng ký mạng giảng viên).
- **Ủng hộ:** R01-GV-10, R01-GV-14đs, R01-P2, R03-Mở đầu, R03-GV-08đs, R03-GV-01đs.
- **Số người:** 2/5 GV.
- **Trái chiều:** R05-GV-14đs ("không ngại thử cái mới").
- **Độ mạnh:** Vừa. Chỉ Simulated.

**Tổng: 32 phát hiện.**

- **Mạnh (17):** F-01, F-02, F-06, F-07, F-08, F-10, F-11, F-12, F-15, F-16, F-17, F-18, F-20, F-22, F-29, F-30, F-31.
- **Vừa (11):** F-03, F-04, F-05, F-09, F-13, F-14, F-19, F-23, F-25, F-26, F-32.
- **Yếu (4):** F-21, F-24, F-27, F-28.

Chỉ F-02 có điểm Observed (O-01.3) ủng hộ. Tất cả các phát hiện còn lại chỉ dựa trên Simulated, có khi kèm thêm điểm Reported.

---

## 4. Nhu cầu

Mỗi nhu cầu được viết theo kết quả mong muốn, không phải tính năng. Cột "Từ F" cho biết nhu cầu đó dựa trên phát hiện nào.

| Mã | Nhu cầu | Từ F |
|---|---|---|
| N-01 | Sinh viên cần biết mình đã được ghi là có mặt hay vắng cho buổi vừa học **trước khi hết ngày có slot**, khi lỗi còn sửa được trong vài giờ. | F-06, F-07, F-08, F-10 |
| N-02 | Giảng viên cần biết những ai đang bị ghi vắng nhưng thật ra đang ngồi trong phòng (không nghe, bị che khuất) **trước khi chuyển sang dạy**. | F-01, F-02, F-09 |
| N-03 | Giảng viên cần còn nhớ được những sinh viên đến hợp lệ sau lượt hỏi lại để họ được ghi đúng **trước khi hết ngày**, mà không phải trông vào trí nhớ của mình. | F-04, F-11 |
| N-04 | Giảng viên cần chắc người mình đánh dấu đúng là người vừa đáp (kể cả khi trùng tên, hoặc khi chép từ giấy sang) **trước khi lưu kết quả**. | F-03, F-05 |
| N-05 | Giảng viên và sinh viên cần cùng một căn cứ về giờ đến lớp mà cả hai đều chấp nhận **trước khi có tranh cãi về mốc 5 phút**. | F-15, F-16 |
| N-06 | Sinh viên bị ghi sai sau ngày cần biết phải gửi gì, gửi cho ai, và yêu cầu của mình đang ở bước nào **trước khi phải đi hỏi bạn bè hoặc kiểm tra mỗi ngày**. | F-11, F-12 |
| N-07 | Sinh viên cần biết lời báo sai của mình đã thực sự tới người sửa được **trước khi hết ngày**. | F-10, F-14 |
| N-08 | Người xét khiếu nại cần có căn cứ ngoài trí nhớ của giảng viên **trước khi kết luận** một vụ mà hai bên nói khác nhau. | F-01, F-13 |
| N-09 | Sinh viên cần biết mình còn được vắng bao nhiêu buổi ở mỗi môn **trước khi tới tuần chốt điều kiện dự thi**. | F-07, F-25, F-28 |
| N-10 | Sinh viên ngồi xa, mắt kém hoặc nói nhỏ cần xác nhận được trạng thái của mình **mà không phải lên tiếng trước lớp**, trước khi buổi học tiếp tục. | F-09, F-19 |
| N-11 | Giảng viên cần làm xong phần điểm danh trong vài phút đầu giờ với thiết bị và mạng đang có **trước khi vào bài**, kể cả lúc mạng chậm. | F-17, F-22, F-29 |
| N-12 | Sinh viên được miễn cần biết việc miễn của mình đã được ghi nhận **trước khi tới kỳ thi**. | F-27 |
| N-13 | Lớp trưởng cần giảng viên và bạn cùng lớp hiểu như nhau phần việc của mình (báo lý do vắng, không đáp thay) **trước khi bị nhờ**. | F-23 |
| N-14 | Giảng viên vẫn cần nhận ra từng sinh viên và nắm tình trạng của các em trong phút đầu giờ, **dù ghi nhận có mặt bằng cách nào**. | F-20, F-21 |
| N-15 | Giảng viên cần thấy rõ một cách làm khác giải quyết đúng việc gì của mình, và cần được giữ cách cũ song song trong vài tuần, **trước khi bỏ hẳn cách cũ**. | F-30, F-31, F-32 |

---

## 5. Bảng thái độ với cách điểm danh hiện tại

| Người | Thái độ | Trích dẫn (≤20 từ, nguyên văn) | Nguồn |
|---|---|---|---|
| R01 (GV) | Đồng tình (với cách làm của chính mình trên giấy) | "Tôi dựa vào tờ giấy, với tôi tờ giấy là cái gốc." | R01-GV-10 |
| R02 (GV) | Đồng tình | "Với tôi điểm danh là việc bình thường thôi, đầu giờ làm 5 phút là xong." | R02-GV-12 |
| R03 (GV) | Thờ ơ | "Với anh điểm danh là thủ tục của trường, làm cho đúng là được." | R03-GV-12 |
| R04 (GV) | Khó chịu (với khâu sửa sai; vẫn đồng tình với quy tắc 5 phút) | "Lỗi là của tôi, em đó đúng, nên tôi khó chịu là ở chỗ đó" | R04-GV-11đs |
| R05 (GV) | Đồng tình | "việc điểm danh trong lớp thì chị thấy bình thường." | R05-GV-12 |
| R06 (SV) | Trung lập | "Em mới học nên em chỉ biết vậy thôi." | R06-SV-12 |
| R07 (SV) | Khó chịu | "Tính ra gần một tuần, mà mình có mặt rõ ràng, bực dễ sợ." | R07-SV-10 |
| R08 (SV) | Thờ ơ | "Mà cũng không quan tâm, tôi miễn rồi thì ghi gì cũng vậy." | R08-SV-04đs |
| R09 (SV) | Đồng tình | "Với mình thì cách hiện giờ nhìn chung ổn, hai năm rồi mình quen." | R09-SV-12 |
| R10 (SV) | Khó chịu (với vai lớp trưởng và với lần bị ghi sai) | "Nói thật là tui bị kẹt giữa hai bên, bên nào cũng muốn tui đứng về phía mình." | R10-SV-06đs |
| R11 (CB) | Đồng tình | "Chị thấy mọi người đều quen: sinh viên biết vào đâu để nộp" | R11-CB-13 |

Tổng cộng có 5 người Đồng tình, 3 Khó chịu, 1 Trung lập và 2 Thờ ơ. Không ai khó chịu với việc đọc tên tự thân. Sự khó chịu tập trung ở khâu **sửa sai sau ngày** (R04, R07) và ở **vai trò lớp trưởng** (R10).

### Cái giá của việc đổi thói quen (RQ-9)

| Người | Điểm "cái giá" | Nguồn |
|---|---|---|
| R01 | Coi tờ giấy là bản gốc và đối chiếu ngược FAP về giấy, nên đổi cách làm thì mất "cái gốc". Lần chuyển sang FAP mất cả tháng, phải nhờ người chỉ, chép các bước ra giấy, có hôm về trễ gần một tiếng. Hiện "ngại lắm" khi phải học thêm. | R01-GV-10, R01-P2, R01-GV-14đs |
| R02 | Đổi sang Zalo thì gửi song song email 2 tuần; một lần quên gửi email nên sinh viên hỏi lại. Chưa từng biết cách điểm danh nào khác. | R02-GV-14đs, R02-GV-13đs |
| R03 | Không có thời gian: chưa cả hỏi cách đăng ký mạng giảng viên. Khi đổi sang Zalo phải nhờ lớp trưởng nhắc, mất khoảng 1 tuần. | R03-GV-08đs, R03-GV-14đs |
| R04 | Hai tuần đầu "loạn lắm", phải lập Excel theo dõi; chỉ đổi khi có lý do rõ (virus, xếp hàng). Giấy nhớ là thói quen sinh ra sau một lần bị khiếu nại. | R04-GV-14, R04-GV-14đs, R04-GV-13 |
| R05 | Tuần đầu lộn xộn, phải để sẵn giấy cho em không có điện thoại; chấp nhận đổi "miễn là chị thấy rõ nó giải quyết được chuyện gì". | R05-GV-14đs |
| R06 | Máy yếu, "không dám cài thêm app"; ngày đầu đi F-Bus đứng chờ sai chỗ. | R06-P3, R06-SV-14đs |
| R07 | Lần đầu làm đơn thì không biết mẫu, không biết gửi cho ai, phải hỏi hai người bạn. | R07-SV-14, R07-P2 |
| R08 | Thủ tục xin miễn: gửi xong không có phản hồi gì thêm, và cũng không hỏi lại. | R08-SV-14đs |
| R09 | Chữ nhỏ, phóng to thì giao diện lệch, kéo nhầm bài; khoảng 2 tuần mới quen, nhờ bạn ngồi kế chỉ. | R09-SV-14đs |
| R10 | Khi lớp đổi công cụ, em là người bị hỏi nhiều nhất trong nhóm Zalo. | R10-SV-14đs |
| R11 | Tuần đầu hai người xử lý trùng một đơn; giữ sổ tay song song khoảng một tháng. | R11-CB-14đs |

---

## 6. Bảng độ phủ câu hỏi nghiên cứu

| RQ | Nội dung | Phát hiện trả lời | Khoảng trống (UNKNOWN) |
|---|---|---|---|
| RQ-1 | Cách giảng viên điểm danh | F-02, F-04, F-05, F-17, F-20, F-22 (phần cốt lõi trùng W6 và O-01.2–O-01.4) | Tỷ lệ giảng viên dùng giấy so với đánh thẳng trên FAP: UNKNOWN |
| RQ-2 | Sai sót, tranh cãi | F-01, F-02, F-03, F-04, F-05, F-15 | Tần suất sai trên mỗi buổi hoặc mỗi kỳ: UNKNOWN. Gian lận thực tế (đáp thay đã xảy ra chưa): UNKNOWN, mới chỉ có lời nhờ ở R10-SV-06đs |
| RQ-3 | Thiết bị | F-17, F-18, F-05, F-19 | Thiết bị của giảng viên thỉnh giảng ngoài R03: UNKNOWN |
| RQ-4 | Ghi lên FAP | F-05, F-06, F-10, F-22 | Ai cập nhật FAP sau khi đã chốt ngày: UNKNOWN (R11-CB-08đs từ chối nói). Giờ chốt chính xác: UNKNOWN |
| RQ-5 | Sinh viên biết tình trạng chuyên cần của mình | F-06, F-07, F-08, F-09, F-24, F-25, F-28 | Phần trăm vắng có hiển thị sẵn trên FAP không (R10 nói có, R07 dùng extension): UNKNOWN |
| RQ-6 | Ràng buộc môi trường, khả năng tiếp cận | F-02, F-09, F-16, F-17, F-18, F-19 | Sinh viên khiếm thính hoặc khuyết tật khác: UNKNOWN, không có dữ liệu |
| RQ-7 | Khiếu nại | F-10, F-11, F-12, F-13, F-14, F-28 | Hạn nộp đơn chính thức: UNKNOWN (R05 nói 2 ngày, R11 không nhắc). Kênh nộp chuẩn (FAP hay email): mâu thuẫn, xem mục 7 |
| RQ-8 | Buổi suôn sẻ | F-29 (một phần F-22) | — |
| RQ-9 | Gắn bó với cách cũ | F-30, F-31, F-32, mục 5 | Thái độ của giảng viên thỉnh giảng ngoài R03 và của giảng viên lớn tuổi ngoài R01: UNKNOWN |

---

## 7. Chỗ dữ liệu mâu thuẫn hoặc đáng ngờ

1. **Kênh nộp đơn khiếu nại.** R11-CB-02 nói đơn nộp qua FAP; ai gửi email thì được hướng dẫn "nộp lại qua FAP". Nhưng R07-SV-10đs và R07-P2 gửi **email** kèm mẫu đơn xin của bạn mà vẫn được xử lý; R08-SV-14 gửi email scan hợp đồng; R04-GV-11 là **giảng viên** tự email phòng đào tạo (R04 còn không chắc sinh viên có nộp đơn hay không). Có ít nhất ba con đường khác nhau, chưa rõ đường nào là chính thức.
2. **"Hạn 2 ngày".** R05-GV-09đs nói sinh viên "chỉ có 2 ngày" để làm đơn, và R05-GV-13 kể một em "làm đơn thì quá hạn". R11 chỉ nói thời hạn **xử lý** là 2–5 ngày làm việc, không nhắc hạn **nộp**. R05 có thể đang nhầm hai mốc này; chính R05 cũng nói "chưa đọc văn bản gốc".
3. **O-01.7 ("không còn cứu vãn được") mâu thuẫn với R04, R05, R07 và R11.** Bốn nguồn này đều kể có đường sửa sau ngày qua phòng đào tạo, mất 4–7 ngày. O-01.6 nói "giảng viên cũng không sửa được", phù hợp với R11-CB-08đs, nhưng việc sửa vẫn diễn ra ở cấp phòng. Bản thân O-01 đã ghi điểm này là "cần kiểm chứng".
4. **R04 tự mâu thuẫn về thứ tự lưu.** Ở R04-GV-04 và R04-GV-09, giảng viên hỏi lại rồi mới lưu, lần lưu đầu lúc 7g06. Ở R04-P2, giảng viên tự đính chính: lưu ngay lúc 7g04 rồi mới hỏi lại. Đây là dấu hiệu tốt về độ chân thực của lời kể, nhưng các mốc phút của R04 không đáng tin.
5. **Chính sách miễn điểm danh bằng hợp đồng lao động (R08).** Không có nguồn nào khác xác nhận. R11 chỉ nói về miễn do ốm có giấy khám bệnh, và đơn không có minh chứng thì "không duyệt được" (R11-CB-11đs). Chi tiết này nghe như AI tự dựng để khớp với persona "đi làm toàn thời gian"; cần kiểm chứng.
6. **Các chi tiết hệ thống chưa kiểm chứng:** phụ huynh xem được myFAP (R10-SV-08đs); extension trình duyệt hiện phần trăm vắng có màu (R07-SV-08); FAP có dòng phần trăm vắng ở cuối trang (R10-SV-08đs, có thể khiến extension của R07 trở nên thừa); Phòng SSC gọi điện cho sinh viên vắng nhiều (R11-CB-01, R11-CB-02đs); mạng giảng viên phải đăng ký thiết bị (R01-GV-09, R03-GV-08đs).
7. **Ngày tháng trùng khớp bất thường giữa các bản ghi "độc lập".** Sự cố ngày 1/10 xuất hiện ở R01-GV-11, R04-GV-11 và R10-SV-10. Ngày 24/9 xuất hiện ở R04-P1, R07-SV-10 và R11-P1. Ngày 8/10 xuất hiện ở R01, R02, R08 và R10. Ngày 30/9 là ngày FAP đổi cho R07 và cũng là ngày R11-P1 đóng một đơn khác (R11 phụ trách khối Kinh tế, còn R07 học ngành kỹ thuật phần mềm, nên không phải cùng một vụ). Nhiều khả năng các mốc này do mô hình bám vào cùng một mốc "hôm qua là 12/10", và điều đó làm giảm tính độc lập khi đếm người.
8. **Mô-típ lặp lại, có thể là dấu vết AI.** Chuyện "hai người cùng tên hoặc gần giống tên" có ở R01 (Minh), R02 (Khoa/Khôi) và R10 (Phúc). Tên Minh xuất hiện ở cả R01 và R05; tên Khoa ở cả R02 và R07. Chuyện em đeo tai nghe được bạn khều xuất hiện gần như y hệt ở R01-GV-06đs và R08-SV-05đs. Vì vậy F-03 và một phần F-02 nên được coi nhẹ hơn.
9. **Bối cảnh W9 bị lặp gần như ở mọi bản ghi.** Lê Văn Việt, Xa lộ Hà Nội và F-Bus xuất hiện ở R01, R03, R04, R05, R06, R07, R09, R10 và R11. Đây là tiếng vọng của W9 trong prompt, không phải phát hiện. Chỉ hành vi đối phó (F-16) mới được tính.
10. **"Nghe đồng nghiệp nói" xuất hiện đồng loạt.** Cả 5/5 giảng viên đều kể biết chuyện khóa sau ngày qua đồng nghiệp hoặc bộ môn, không ai đọc văn bản. Điều này khớp quá sát với nhãn "Reported, chưa kiểm chứng" của W7, nên có thể là AI suy ra từ prompt; F-26 vì thế đã bị hạ xuống Vừa.
11. **R11 nói về điều nằm ngoài khối mình phụ trách.** R11 chỉ xử lý đơn khối Kinh tế, trong khi hầu hết sự cố trong các bản ghi khác thuộc ngành kỹ thuật. Không thể dùng R11 để xác nhận trực tiếp bất kỳ vụ nào của R04, R05 hay R07.
12. **R08 tự nhận trí nhớ kém.** Theo R08-P1, câu "buổi nào cũng vậy" là "vì tôi không để ý buổi nào cả". Các lời kể của R08 về phòng học chỉ nên dùng ở mức thấp.
