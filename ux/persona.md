# Persona

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | UX-PERSONA |
| Trạng thái | Chờ duyệt |
| Đầu vào | RES-AFFINITY-v2 (`research/06-synthesis/affinity-board-v2.md`), RES-DESK-FAP (`research/02-desk/fap-edit-window.md`), O-01, roster R01–R11 |
| Quyết định liên quan | D-02, D-04, D-11, D-12, D-13, D-16, D-17 |
| Khung | Persona guideline PRM393: 12 trường lõi, Persona Coverage Matrix, bảng Persona → Nhu cầu → Ý tưởng thiết kế → Cách kiểm chứng |

**Đọc nhãn bằng chứng.** Nhãn theo `process/conventions.md`, mục 3. Đối chiếu với guideline: Observed và Reported giữ nguyên nghĩa; **Desk** là nguồn văn bản (quy định, bài đăng); **Simulated** là phỏng vấn mô phỏng bằng AI và chỉ được xem là giả thuyết (D-16), tương đương mức "Inferred" của guideline; **Assumed** là chưa có nguồn, có ghi cách kiểm chứng. Hai persona dưới đây là **nhân vật tổng hợp**, không phải người thật, và chưa được kiểm chứng với người dùng thật.

---

## 1. Phạm vi và vì sao chọn hai persona

- **Việc ứng dụng hỗ trợ:** ghi điểm danh một slot cho đúng, và phát hiện, sửa sai trong ngày có slot. Ứng dụng bổ trợ FAP, không thay FAP: FAP vẫn là nơi lưu kết quả chính thức, giữ đúng các trạng thái Attended, Absent, Not yet (D-12, Desk V01, H36).
- **Vì sao Primary là giảng viên (D-04, D-17):** nỗi đau rõ nhất trong dữ liệu nằm ở sinh viên (F-07, F-10), nhưng chỉ giảng viên sửa được điểm danh trong ngày (O-01.5 Reported; Desk V01, V13: sinh viên phải báo giảng viên trong ngày học). Đây là điểm đòn bẩy: sai ở khâu ghi được bắt và sửa trong ngày thì không ai phải làm đơn.
- **Vì sao cần thêm Secondary là sinh viên:** chỉ sinh viên biết mình có mặt hay không, và theo quy định, sinh viên là người phải phát hiện và báo (F-07b, Mạnh nhờ Desk V01, V13). Nếu bỏ sinh viên, nửa luồng sửa sai trong ngày không có người khởi động.
- **Không làm persona riêng cho cán bộ phòng QLĐT (R11):** họ chỉ xuất hiện sau khi đã qua ngày, qua quy trình đơn trên FAP đã chạy ổn (R11 đồng tình). Ứng dụng chỉ dẫn sinh viên sang đường đơn, không làm lại quy trình đó. Xem Persona Coverage Matrix ở mục 4.

---

## 2. P-01 · Thầy Hoàng Nam — giảng viên dạy nhiều slot liền trong ngày (Primary)

| # | Trường | Nội dung | Bằng chứng |
|---|---|---|---|
| 1 | **Định danh và archetype** | Thầy Hoàng Nam, 32 tuổi (tên giả, nhân vật tổng hợp). Giảng viên cơ hữu khối Kỹ thuật phần mềm, cơ sở TP.HCM. Archetype: **"đọc tên theo FAP, sửa sai theo trí nhớ"**: ghi đúng phần lớn thời gian, nhưng chỗ hở nằm ở những ca lệch khỏi lượt đọc tên chuẩn. | R02, R04, R05 (Simulated); O-01.2–O-01.4 (Observed) |
| 2 | **Mức ưu tiên** | **Primary.** Người duy nhất sửa được điểm danh trong ngày, và là người thực hiện mỗi buổi điểm danh. | O-01.5 (Reported); Desk V01, V13 |
| 3 | **Bối cảnh sử dụng** | Đầu mỗi slot 135 phút, đứng ở bục giảng hoặc đi giữa các dãy máy trong phòng lab Block A. Khi điểm danh, laptop chiếu trang điểm danh của FAP (có ảnh từng sinh viên) cho cả lớp cùng xem; điện thoại dùng cho việc đột xuất. Có ngày dạy liền 3–4 slot, giữa các slot phải chuyển phòng. Lớp khoảng 30–35 sinh viên. Sự chú ý bị chia giữa danh sách tên, gương mặt sinh viên, sinh viên đến muộn và việc chuẩn bị vào bài. | RB-3, O-01.1, O-01.9, O-01.10 (Observed); O-01.11 (Assumed); F-17 (Giả thuyết – Vừa); Block A: H07, H16 (Desk) |
| 4 | **Mục tiêu** | (1) Chốt danh sách đúng với những ai thật sự có mặt, rồi vào bài trong vài phút đầu slot. (2) Không để lỗi của mình biến thành đơn khiếu nại mất nhiều ngày của sinh viên. (3) Không bị kéo vào tranh cãi "em có mặt mà thầy". | N-04, N-11; F-10a (Mạnh); F-11a, F-15 |
| 5 | **Job to be done** | *Khi* bắt đầu một slot với lớp khoảng 30 sinh viên, *tôi muốn* ghi nhận ai có mặt và xử lý luôn những ca lệch (đáp nhỏ, trùng tên, đến muộn hợp lệ), *để* vào bài ngay mà không phải nhớ sửa gì sau đó. | N-04, N-03, N-11 |
| 6 | **Hành vi hiện tại** | Mở FAP, đọc tên theo thứ tự danh sách. Sinh viên đáp "có" hoặc giơ tay thì đánh Attended, không thấy thì hỏi lại rồi đánh Absent. Cuối danh sách hỏi lại một lượt những người đang Absent. Ngày dạy dồn thì có lúc ghi ra giấy rồi nhập FAP sau. Sinh viên đến muộn hợp lệ thì định "lát nữa sửa". Lời báo sai của sinh viên đến qua email, Zalo hoặc gặp trực tiếp giờ giải lao. | O-01.2–O-01.4 (Observed); F-04, F-05, F-14 (Giả thuyết) |
| 7 | **Nỗi đau** | (1) **Quên sửa cho người đến sau lượt hỏi lại:** lúc đó đã vào bài, tới khi nhớ ra thì sinh viên đã thấy Absent (F-04). (2) **Lỗi ở khâu ghi khó thấy:** đáp nhỏ, ngồi khuất sau màn hình lab, chép nhầm giữa hai người tên gần giống (F-01b, F-02b, F-03). (3) **Lời báo sai đến muộn hoặc lạc kênh:** sinh viên gửi email trường mà thầy ít mở, nên khi đọc được thì đã qua ngày (F-14). Hệ quả chung: sinh viên phải làm đơn, chờ nhiều ngày, còn thầy bị phòng QLĐT liên hệ xác minh (F-10b, F-11a). | F-01b, F-02b, F-03, F-04, F-14: Giả thuyết; F-10a: Mạnh |
| 8 | **Động lực** | Chính xác và công bằng hơn tốc độ. Nhưng một buổi điểm danh không được ăn quá vài phút của slot. Muốn giữ cách đọc tên vì đó cũng là lúc nhìn mặt, nhớ tên sinh viên trong những tuần đầu. | N-14, F-20, F-21 (Giả thuyết); RB-1 |
| 9 | **Ràng buộc** | **Thiết bị:** iPhone hoặc Android tầm trung; laptop bận chiếu bài. **Mạng:** wifi phòng học lúc chậm lúc nhanh, có thể chuyển sang 4G (RB-2). **Thời gian:** vài phút đầu slot; nghỉ ngắn giữa các slot. **Quyền:** chỉ sửa được lớp mình dạy. **Kỹ năng số:** quen FAP web, không muốn học thêm thao tác lạ; chỉ đổi cách làm khi thấy rõ cái mới giải quyết được việc gì (RB-1). **Accessibility:** thao tác một tay khi đang đứng hoặc đi giữa các dãy; phòng tắt bớt đèn khi chiếu bài, màn hình điện thoại bị chói hoặc tối. | RB-1, RB-2 (Giả thuyết – Vừa); O-01.5; ánh sáng phòng chiếu: Assumed |
| 10 | **Kịch bản chính** | **K1. Điểm danh đầu slot.** *Kích hoạt:* 7:00, slot 1, phòng lab, 32 sinh viên. *Mục đích:* chốt danh sách trong vài phút. *Diễn biến:* một em đáp nhỏ sau màn hình, hai em tên Khoa và Khôi, một em vào lúc 7:04, sau lượt hỏi lại. *Kết quả mong muốn:* rời bước điểm danh với mọi trạng thái đúng, không còn việc gì phải nhớ. **K2. Sửa trong ngày.** *Kích hoạt:* 11:30, giữa slot 2 và slot 3, một sinh viên slot 1 báo bị ghi vắng. *Mục đích:* xác nhận và sửa trước khi hết ngày. *Kết quả mong muốn:* sửa xong trong giờ nghỉ, sinh viên biết đã được sửa. | F-02, F-03, F-04, F-10a, F-14; RB-3 |
| 11 | **Tiêu chí thành công** | Đo trong buổi thử prototype (usability test) theo kịch bản K1 và K2. **TC-1:** với danh sách 30 sinh viên có 3 ca lệch như K1, giảng viên lưu xong điểm danh trong **≤ 4 phút** và **0 sai lệch** giữa trạng thái đã lưu và kịch bản. **TC-2:** từ lúc mở lời báo sai của sinh viên tới lúc trạng thái được sửa, **≤ 30 giây và ≤ 3 lần chạm**. **TC-3:** sau buổi thử, giảng viên trả lời đúng "còn ca nào chưa xử lý không" mà không phải mở lại danh sách. | Ngưỡng 4 phút và 30 giây là **Assumed** (chưa có đo hiện trạng); kiểm chứng bằng cách bấm giờ cách đọc tên hiện tại trên cùng kịch bản (giả thuyết 5 và 4 ở mục 7 RES-AFFINITY-v2) |
| 12 | **Bằng chứng và trạng thái** | Mạnh: F-01a, F-02a, F-10a (có Desk hoặc Observed). Mọi chi tiết hành vi khác là **Giả thuyết** từ R02, R03, R04, R05 (Simulated, 13/10/2026). **Đã làm rõ (14/10/2026):** laptop chiếu FAP là thiết bị chính khi điểm danh (O-01.10); ứng dụng không ghi thẳng vào FAP mà dùng extension tự điền trang FAP trên laptop (D-18). **Chưa kiểm chứng:** (a) giảng viên có dùng điện thoại cho việc đột xuất như sửa trong ngày hay không (O-01.11, Assumed), (b) FAP có khóa quyền sửa của giảng viên sau ngày học hay không (RB-4). | RES-AFFINITY-v2 mục 2, 3, 7; RES-DESK-FAP |

**Problem statement.** Giảng viên dạy nhiều slot trong ngày cần chắc rằng trạng thái đã lưu của từng sinh viên khớp với thực tế trước khi hết ngày có slot, vì những ca lệch khỏi lượt đọc tên (đáp nhỏ, trùng tên, đến muộn hợp lệ) hiện chỉ được sửa nếu giảng viên tự nhớ ra hoặc sinh viên báo kịp. Qua ngày, việc sửa phải chuyển sang đơn khiếu nại lên phòng QLĐT, mất nhiều ngày (F-04, F-10a, F-14).

---

## 3. P-02 · Bảo Trâm — sinh viên tự kiểm tra điểm danh (Secondary)

| # | Trường | Nội dung | Bằng chứng |
|---|---|---|---|
| 1 | **Định danh và archetype** | Bảo Trâm, 20 tuổi (tên giả, nhân vật tổng hợp). Sinh viên năm 2 khối Kỹ thuật phần mềm, cơ sở TP.HCM. Archetype: **"chỉ yên tâm khi thấy chữ Attended"**. | R07, R09, R10 (Simulated) |
| 2 | **Mức ưu tiên** | **Secondary.** Người phát hiện lỗi và khởi động việc sửa trong ngày; không trực tiếp ghi điểm danh. | F-07b (Mạnh nhờ Desk V01, V13) |
| 3 | **Bối cảnh sử dụng** | Đi F-Bus hoặc xe máy qua Lê Văn Việt, có hôm đến sát giờ. Ngồi giữa hoặc cuối lớp. Dùng điện thoại Android, mạng 4G vì wifi trường chậm. Xem FAP hoặc myFAP sau buổi học, lúc trên xe buýt hoặc buổi tối. | H20–H24 (Desk); F-07a, F-18 (Giả thuyết) |
| 4 | **Mục tiêu** | (1) Biết chắc buổi vừa học mình được ghi đúng. (2) Nếu sai thì báo được tới đúng giảng viên trong ngày. (3) Không bao giờ chạm ngưỡng vắng 20% vì một buổi bị ghi sai. | N-01, N-09; O-01.8 (Reported) |
| 5 | **Job to be done** | *Khi* vừa học xong một slot, *tôi muốn* biết mình được ghi Attended hay Absent, *để* nếu sai thì báo giảng viên ngay trong ngày, không phải làm đơn rồi chờ. | N-01 |
| 6 | **Hành vi hiện tại** | Đáp "có" kèm giơ tay. Trong lớp chỉ dựa vào cái gật đầu của giảng viên. Mở myFAP sau buổi; nếu thấy "Not yet" thì quên, tối mới xem lại. Thấy sai thì nhắn Zalo hoặc email giảng viên; qua ngày thì hỏi bạn cách làm đơn. | F-06, F-07a, F-08, F-12 (Giả thuyết) |
| 7 | **Nỗi đau** | (1) **Không thấy mình được ghi gì trong lớp** (F-08). (2) **"Not yet" che lỗi:** giảng viên nhập muộn, đến tối mới thấy Absent thì đã khó báo kịp (F-06). (3) **Không biết lời báo đã tới chưa:** gửi email rồi chờ, không biết giảng viên đã đọc (F-14). | Giả thuyết – Vừa / Yếu |
| 8 | **Động lực** | Sự yên tâm và công bằng: lỗi không phải của mình thì mình không phải đi chứng minh (F-11a). | F-11a (Giả thuyết) |
| 9 | **Ràng buộc** | Android tầm trung, gói 4G ít dung lượng (RB-2). Không muốn cài thêm ứng dụng nặng. **Accessibility:** có sinh viên cận nặng bật cỡ chữ lớn trên điện thoại và không đọc được chữ trên màn chiếu (R09, F-19), nên giao diện phải chịu được cỡ chữ hệ thống lớn. Phụ huynh xem myFAP nên một chữ Absent sai gây áp lực ngay trong tối đó (F-24). | RB-2; F-19, F-24 (Giả thuyết) |
| 10 | **Kịch bản chính** | **K3. Báo sai trong ngày.** *Kích hoạt:* 10:00, vừa học xong slot 1, mở ứng dụng trên F-Bus thì thấy mình bị ghi Absent. *Mục đích:* báo giảng viên trong ngày. *Kết quả mong muốn:* biết lời báo đã tới, rồi thấy trạng thái chuyển sang Attended trước tối. **K4. Đã qua ngày.** *Kích hoạt:* sáng hôm sau mới phát hiện. *Kết quả mong muốn:* biết ngay phải sang đường đơn khiếu nại trên FAP, cần gì, và mất khoảng bao lâu. | F-10a (Mạnh); N-01, N-06 |
| 11 | **Tiêu chí thành công** | **TC-4:** sau khi giảng viên lưu, sinh viên thấy trạng thái buổi vừa học trong **≤ 2 lần chạm** kể từ khi mở ứng dụng. **TC-5:** gửi xong lời báo sai trong **≤ 1 phút**, và nói đúng lời báo đang ở trạng thái nào (đã gửi, giảng viên đã xem, đã sửa). **TC-6:** ở kịch bản K4, sinh viên chọn đúng đường đơn khiếu nại mà không phải hỏi ai. | Ngưỡng là Assumed; đo trong buổi thử prototype |
| 12 | **Bằng chứng và trạng thái** | Mạnh: F-07b, F-10a. Còn lại là Giả thuyết từ R06, R07, R09, R10 (Simulated). **Chưa kiểm chứng:** bao nhiêu sinh viên thật sự xem điểm danh trong ngày (giả thuyết 1), và họ phát hiện lỗi qua ai (giả thuyết 2). | RES-AFFINITY-v2 mục 7 |

**Problem statement.** Sinh viên có mặt nhưng bị ghi vắng cần biết điều đó và báo được tới giảng viên trước khi hết ngày có slot, vì trong lớp các em không thấy mình được ghi gì, còn trên FAP kết quả có thể hiện "Not yet" tới tận tối (F-06, F-08, N-01).

---

## 4. Persona Coverage Matrix

| Archetype | Tác vụ chính | Thiết bị / rào cản | Khác biệt cần thiết kế | Cách xử lý trong phạm vi | Evidence |
|---|---|---|---|---|---|
| **P-01** GV dạy nhiều slot (Primary) | Ghi điểm danh đầu slot, sửa trong ngày | Điện thoại một tay, laptop bận chiếu, mạng chập chờn | Xử lý ca lệch ngay trong lượt điểm danh; nhận lời báo sai ở một chỗ | Persona chính, có flow FL-1, FL-3 | R02, R04, R05; O-01; Desk V01, V13 |
| **P-02** SV tự kiểm tra (Secondary) | Xem trạng thái, báo sai | Android 4G, cỡ chữ lớn | Thấy trạng thái sớm; biết lời báo đã tới | Persona phụ, có flow FL-2 | R07, R09, R10; Desk V01, V13 |
| GV thỉnh giảng (R03) | Ghi điểm danh lớp ít quen mặt | Không quen phòng, không quen mặt SV | Chưa nhận mặt được SV trong những tuần đầu | Gộp vào P-01: thứ tự danh sách giữ như FAP, có ảnh SV nếu FAP có (Assumed) | R03 (Simulated) |
| GV lớp LUK, tân SV (R05) | Như P-01, hạn báo sai 2 ngày | SV năm 1 chưa quen hệ thống | Hạn sửa khác môn thường | Gộp vào P-01; hạn báo sai hiển thị theo môn | R05; Desk V01 |
| SV mắt kém (R09) | Như P-02 | Cỡ chữ hệ thống lớn | Bố cục không vỡ khi phóng chữ | Yêu cầu accessibility của P-02 | R09; F-19 |
| Lớp trưởng (R10) | Truyền tin giữa GV và lớp | Bị nhờ đáp thay | Vai trò xã hội, không phải nhu cầu giao diện | **Ngoài phạm vi** (N-13 không cần màn hình) | R10; F-23 |
| SV được miễn điểm danh (R08) | Kiểm tra việc miễn | Ít lên lớp | Cần biết đơn miễn đã duyệt | **Ngoài phạm vi**, ghi vào roadmap (N-12) | R08; F-27 |
| Cán bộ QLĐT (R11) | Xử lý đơn khiếu nại sau ngày | Làm trên FAP web | Quy trình đơn đã ổn định | **Supporting**, không có màn hình; ứng dụng chỉ dẫn SV sang đơn trên FAP | R11; Desk V01, V02 |

---

## 5. Persona → Nhu cầu → Ý tưởng thiết kế → Cách kiểm chứng

Cột "Ý tưởng" là giả thuyết thiết kế để thử, chưa phải quyết định. Mỗi ý tưởng được đưa vào flow ở `ux/user-flow.md`.

| Persona | Nhu cầu / vấn đề | Ý tưởng thiết kế để thử nghiệm | Cách kiểm chứng |
|---|---|---|---|
| P-01 | N-04: trạng thái lưu khớp thực tế, kể cả đáp nhỏ, trùng tên | Giữ đúng cách đọc tên của FAP (thứ tự danh sách, một chạm Có / Vắng), nhưng tên trùng hoặc gần trùng được đánh dấu kèm mã SV; hết lượt đầu, màn hình tự gom những người đang Vắng thành lượt hỏi lại (đúng thói quen O-01.4) | Usability test K1: đếm sai lệch giữa trạng thái lưu và kịch bản (TC-1) |
| P-01 | N-03: SV đến hợp lệ sau lượt hỏi lại | Nút "Đến muộn" trên dòng của SV, ghi giờ đến; trước khi lưu, hiện các ca chưa xử lý | K1 có một SV vào phút thứ 4; đo xem GV có xử lý trước khi lưu không |
| P-01 | N-11: ghi xong trong vài phút với mạng đang có | Lưu tạm trên máy khi mất mạng, tự gửi khi có mạng, luôn hiện rõ "đã lên FAP" hay "đang chờ gửi" | Thử với mạng giả lập chậm hoặc mất; hỏi GV "kết quả đã lên FAP chưa" (TC-3) |
| P-01 | N-01 (phía GV): nhận lời báo sai kịp trong ngày | Một hộp "Báo sai hôm nay" trong ứng dụng, thay cho email và Zalo rời rạc; sửa ngay từ lời báo | K2: đo thời gian và số chạm từ lúc mở lời báo tới khi sửa (TC-2) |
| P-02 | N-01: biết mình bị ghi gì trước khi hết ngày | Trang chủ SV hiện trạng thái buổi hôm nay ngay đầu màn hình, cùng mốc "báo sai trước 23:59 hôm nay" | K3: TC-4, TC-5 |
| P-02 | N-06: biết phải làm gì khi đã qua ngày | Qua mốc thì nút "Báo sai" chuyển thành hướng dẫn sang "Đơn khiếu nại điểm danh" trên FAP, ghi rõ cần gì và thời gian xử lý | K4: TC-6 |
| P-02 | N-10, F-19: SV mắt kém | Bố cục chịu được cỡ chữ hệ thống 200%, trạng thái không chỉ dựa vào màu (có chữ và biểu tượng) | Kiểm tra với cỡ chữ lớn và chế độ thang xám (UI Simplicity checklist) |

---

## 6. Rủi ro lớn nhất của bộ persona

Cả hai persona được dựng chủ yếu từ dữ liệu mô phỏng. Bộ phản biện độc lập cho thấy dữ liệu này không thật sự độc lập (RES-CRITIQUE, mục 3). Rủi ro số một với P-01 là giả định giảng viên chịu dùng điện thoại thay vì laptop đang mở sẵn: F-17 chỉ cho thấy điện thoại là phương án dự phòng. Trước buổi thuyết trình, cách rẻ nhất để giảm rủi ro là hỏi 1–2 giảng viên thật câu: "Buổi gần nhất thầy/cô điểm danh trên thiết bị nào, và vì sao?"
