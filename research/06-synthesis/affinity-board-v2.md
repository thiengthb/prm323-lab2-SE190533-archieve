# Bảng affinity v2: tổng hợp sau phản biện (R01–R11, O-01, Desk)

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | RES-AFFINITY-v2 |
| Trạng thái | Chờ duyệt |
| Đầu vào | RES-AFFINITY (`06-synthesis/affinity-board.md`), RES-CRITIQUE (`06-synthesis/synthesis-critique.md`) |
| Nguồn đối chiếu lại | `05-raw/R01…R11-transcript.md` (Simulated), `05-raw/O-01-thien-observation.md`, `04-participants/shared-world-facts.md` (W1–W9), `02-desk/fap-edit-window.md` (RES-DESK-FAP, nhãn Desk) |
| Prompt | ai/prompts/AI-12-synthesis-v2.md |
| Quyết định | D-15, D-16 |
| Người biên tập | Claude (subagent) |
| Ngày | 13/10/2026 |

**Cách đọc**

- Bản này không sửa RES-AFFINITY và RES-CRITIQUE. Mục 1 (180 ghi chú nguyên tử) và mục 2 (nhóm C-01…C-26) của v1 vẫn dùng nguyên, chỉ chỉnh cách đánh dấu hai ghi chú trùng W (xem CR-43). Bản v2 viết lại phần phát hiện, phần nhu cầu và phần mâu thuẫn, rồi thêm bảng xử lý phản biện.
- Mã F-nn và N-nn giữ như v1. Phát hiện nào được tách thành nhiều vế có độ mạnh khác nhau thì thêm chữ cái vào sau mã (F-01a, F-01b).
- Mã **CR-nn** là số thứ tự của dòng trong bảng mục 1 của RES-CRITIQUE: CR-01 là dòng F-01, CR-43 là dòng "§1 tổng". **CR-G1…G3** là ba nhận xét tổng quát ở mục 3 của RES-CRITIQUE. Bảng đối chiếu đầy đủ ở mục 5.
- Mã nguồn ghi giống v1 (R04-GV-11, R07-P2, O-01.4). Nguồn Desk ghi theo mã V-nn của RES-DESK-FAP.

**Thang độ mạnh v2**

| Mức | Điều kiện |
|---|---|
| **Mạnh** | Có ít nhất một bằng chứng **không phải Simulated** cùng chiều. Đó có thể là điểm **Observed** của O-01, hoặc nguồn **Desk** trong RES-DESK-FAP ở mức "Đã xác nhận", "Nhiều nguồn không chính thức" hay "Một nguồn" có trích dẫn trực tiếp. Bằng chứng đó được ghi ngay cạnh nhãn. Nhãn Mạnh chỉ áp cho đúng vế mà bằng chứng chạm tới. |
| **Giả thuyết – Vừa** | Chỉ dựa trên Simulated (có thể kèm điểm Reported của O-01), có ít nhất 2 kịch bản ủng hộ sau khi đếm lại, và không nguồn không-Simulated nào ngược chiều. Đây là mức cao nhất cho phát hiện chỉ dựa trên Simulated. |
| **Giả thuyết – Yếu** | Chỉ dựa trên Simulated và chỉ có 1 kịch bản ủng hộ. Hoặc có từ 2 kịch bản trở lên nhưng bị gắn cờ tiếng vọng: từ W, từ đặc điểm persona, từ câu hỏi dẫn dắt, hoặc từ khuôn mẫu do mô hình sinh ra. |

Quy ước kèm theo:

- Điểm **Reported** của O-01 (O-01.5 đến O-01.8) không nâng độ mạnh. Dòng Desk ghi "Suy luận" cũng không nâng độ mạnh.
- Nội dung trùng W1–W9 không được tính là phát hiện từ R-nn (D-15). Một vế trùng W chỉ được ghi Mạnh khi chính nguồn gốc của W đó (O-01 Observed, hoặc Desk) cùng chiều. Khi ấy R-nn không góp gì vào độ mạnh.
- **Đếm người.** Theo CR-G1, mọi con số là số **kịch bản Simulated**, không phải số người độc lập. Trong một vế, mỗi kịch bản chỉ đứng ở một phía (ủng hộ hoặc trái chiều). Nếu lời của cùng một người đi theo hai hướng thì có ghi chú lý do chọn phía.
- Dấu **\*** đánh dấu cặp kịch bản có thể không độc lập: R01-GV-11 và R10-SV-10 cùng rơi vào thứ Năm 1/10, cùng ca 3, cùng được báo khoảng 7 giờ tối và sửa xong trước 9 giờ (CR-01). Hai ca khác môn (MAD101 và MAS291) nên vẫn được đếm cả hai, nhưng có gắn dấu.

---

## 1. Tóm tắt thay đổi so với v1

| F | v1 | v2 | Trạng thái |
|---|---|---|---|
| F-01 | Mạnh | a: **Mạnh** (Desk V01, V02) · b: Giả thuyết – Vừa | Hạ một phần (tách vế) |
| F-02 | Mạnh | a: **Mạnh** (O-01.3, O-01.4 Observed) · b: Giả thuyết – Vừa | Hạ một phần (tách vế) |
| F-03 | Vừa | Giả thuyết – Yếu | Hạ |
| F-04 | Vừa | Giả thuyết – Vừa | Giữ |
| F-05 | Vừa | Giả thuyết – Vừa | Giữ |
| F-06 | Mạnh | Giả thuyết – Vừa | Hạ |
| F-07 | Mạnh | a: Giả thuyết – Vừa · b: **Mạnh** (Desk V13, V01) | Hạ một phần (tách vế) |
| F-08 | Mạnh | Giả thuyết – Vừa | Hạ |
| F-09 | Vừa | a: Giả thuyết – Yếu · b: Giả thuyết – Yếu | Hạ |
| F-10 | Mạnh | a: **Mạnh** (Desk V01, V02, V13) · b: Giả thuyết – Vừa | Hạ một phần (tách vế) |
| F-11 | Mạnh | a: Giả thuyết – Vừa · b: Giả thuyết – Yếu | Hạ |
| F-12 | Mạnh | Giả thuyết – Yếu | Hạ |
| F-13 | Vừa | a: Giả thuyết – Vừa · b: Giả thuyết – Yếu | Hạ một phần (tách vế) |
| F-14 | Vừa | Giả thuyết – Yếu | Hạ |
| F-15 | Mạnh | Giả thuyết – Yếu | Hạ |
| F-16 | Mạnh | Giả thuyết – Vừa | Hạ |
| F-17 | Mạnh | Giả thuyết – Vừa | Hạ (chỉ do thang v2) |
| F-18 | Mạnh | Giả thuyết – Vừa | Hạ (chỉ do thang v2) |
| F-19 | Vừa | Giả thuyết – Yếu | Hạ |
| F-20 | Mạnh | Giả thuyết – Vừa | Hạ |
| F-21 | Yếu | Giả thuyết – Yếu | Giữ |
| F-22 | Mạnh | Giả thuyết – Vừa | Hạ |
| F-23 | Vừa / Yếu | Giả thuyết – Vừa / Giả thuyết – Yếu | Giữ |
| F-24 | Yếu | Giả thuyết – Yếu | Giữ |
| F-25 | Vừa | Giả thuyết – Vừa | Giữ |
| F-26 | Vừa | — | **Bỏ** (CR-21) |
| F-27 | Yếu | Giả thuyết – Yếu | Giữ |
| F-28 | Yếu | Giả thuyết – Yếu | Giữ |
| F-29 | Mạnh | Giả thuyết – Vừa | Hạ |
| F-30 | Mạnh | a: Giả thuyết – Vừa · b: Giả thuyết – Yếu | Hạ |
| F-31 | Mạnh | Giả thuyết – Vừa | Hạ |
| F-32 | Vừa | Giả thuyết – Yếu | Hạ |

**Tổng 32 mã F:** giữ mức 8 · hạ 18 · hạ một phần (tách vế, còn một vế giữ mức hoặc Mạnh) 5 · gộp 0 · bỏ 1.

**Theo vế (40 vế còn lại):** Mạnh 4 (F-01a, F-02a, F-07b, F-10a) · Giả thuyết – Vừa 20 · Giả thuyết – Yếu 16.

Không vế nào được Mạnh nhờ dữ liệu Simulated. Cả bốn vế Mạnh đều dựa vào quy định trên giấy (Desk) hoặc quan sát của một người (O-01). Vì vậy chúng chỉ nói về **quy trình và cơ chế**, không nói về **tần suất** hay hành vi của số đông.

---

## 2. Phát hiện

### F-01 — Sinh viên có mặt nhưng bị ghi Absent

**F-01a.** Có trường hợp sinh viên có mặt nhưng bị ghi Absent.

**F-01b.** Trong các sự cố được hỏi tới, nguyên nhân được kể đều nằm ở khâu ghi: không nghe, bấm hoặc chép nhầm, quên sửa. Dữ liệu không đủ để loại trừ chuyện đáp thay hay khai sai giờ đến. Dữ liệu cũng không cho biết loại lỗi này chiếm bao nhiêu so với các loại khác, vì các câu GV-11, SV-10 và CB-03 chỉ hỏi về lần bị đổi hoặc bị ghi sai.

- **Ủng hộ (7 kịch bản):** GV có 4: R01\* (R01-GV-11, không chắc do không nghe hay do lộn dòng), R02 (R02-GV-11, chép nhầm Khoa với Khôi), R04 (R04-GV-11, quên sửa theo giấy nhớ), R05 (R05-GV-11, quên bấm cho Hưng). SV có 2: R07 (R07-SV-10, thầy bấm nhầm), R10\* (R10-SV-10, đoán cô bấm nhầm giữa hai bạn Phúc). CB có 1: R11 (R11-CB-06 "thầy bấm sót", R11-CB-11đs).
- **Trái chiều (1):** R09 (R09-SV-09 vế sau: hai năm chưa bị ghi sai lần nào).
- **Không tính:** R06 và R08 nói "chưa gặp" nhưng chưa từng xem, nên đó không phải bằng chứng. R03 không nhớ lần nào sửa sau buổi.
- **Ghi chú, không xếp vào phía nào** (câu v2 không còn khẳng định "không phải khai gian"): R10-SV-06đs và R10-P1 kể có lời nhờ "đáp giùm tao nha", bị từ chối. R04-P1 kể SV giơ giờ trên điện thoại để cãi. R11-CB-10 kể SV nói tới kịp, còn GV nói SV trễ khoảng 10 phút, và kết quả giữ theo GV.
- **Độ mạnh:**
  - F-01a: **Mạnh.** Bằng chứng là Desk V01 và V02 (Nhiều nguồn không chính thức): có thủ tục "Đơn khiếu nại điểm danh" dành cho trường hợp "Sinh viên phát hiện có sự nhầm lẫn trong kết quả điểm danh", với đề nghị "được điểm danh buổi học trên". Desk chỉ cho thấy quy trình có tính tới loại ca này, không cho biết nó xảy ra thường tới mức nào.
  - F-01b: **Giả thuyết – Vừa.** Chỉ có Simulated. O-01.8 cùng hướng nhưng là Reported.
- **Thay đổi:** bỏ hai cụm "được kể nhiều nhất" và "không phải sinh viên khai gian" (CR-01).

### F-02 — Tín hiệu "có" bị lọt ở lượt đọc tên đầu

**F-02a.** Ở lượt đọc tên đầu, có lúc người đang ngồi trong lớp không được nghe hoặc không được thấy. Lượt hỏi lại cuối danh sách bắt lại được những người này.

- **Độ mạnh: Mạnh.** Bằng chứng là O-01.3 (Observed: "Không thấy ai đáp thì giảng viên hỏi lại để xác nhận") và O-01.4 (Observed: hỏi lại những người đang Absent "để điều chỉnh"). Vế này trùng W6, nên R-nn không góp gì vào độ mạnh.
- **Các ca R cùng chiều (chỉ để tham chiếu):** R01-GV-06, R02-GV-06, R03-GV-11, R05-GV-04, R06-SV-05đs, R07-SV-04, R08-SV-05đs. Trong mọi ca "không nghe" có nguyên nhân rõ, người đó đều được bắt lại ở lượt hỏi lại (CR-29). Ngoại lệ có thể có là R01-GV-11đs: R01 không chắc lỗi ngày 1/10 là do không nghe hay do lộn dòng.

**F-02b.** Các tình huống làm tiếng "có" bị lọt mà người trả lời kể: ngồi bàn cuối hoặc góc cuối, phòng ồn (máy lạnh, hành lang lúc lớp khác tan), đeo tai nghe, ngồi khuất sau màn hình phòng lab. GV bù bằng cách bảo SV giơ tay; SV ngồi cuối thì vừa nói vừa giơ tay.

- **Ủng hộ (7 kịch bản):** GV có 4: R01 (R01-GV-05đs, R01-GV-07đs), R02 (R02-GV-07đs), R04 (R04-GV-05đs), R05 (R05-GV-05đs, R05-GV-07đs). SV có 3: R06 (R06-SV-05đs), R07 (R07-SV-04), R08 (R08-SV-05đs).
- **Trái chiều:** không có. R09-SV-05đs (ngồi đầu nên nghe rõ) cùng hướng với yếu tố khoảng cách, không phải trái chiều. R03 có một ca không nghe (R03-GV-11) nhưng không nêu nguyên nhân, nên không tính ở vế này.
- **Độ mạnh: Giả thuyết – Vừa.** Có cờ: chi tiết tai nghe và bạn bên cạnh khều lặp gần nguyên văn giữa R01-GV-06đs và R08-SV-05đs.
- **Thay đổi:** R03 được chuyển từ phía trái chiều sang các ca cùng chiều của F-02a. Nguyên nhân cụ thể được tách thành F-02b (CR-02).

### F-03 — Nhầm người khi tên trùng hoặc gần giống

Một GV kể đã đánh nhầm giữa hai SV có tên gần giống nhau khi chép từ giấy nháp lên FAP. Một SV đoán lỗi của mình là do trong lớp có hai người trùng tên.

- **Ủng hộ (2):** R02 (R02-GV-11, Khoa và Khôi, đã xác nhận). R10\* (R10-SV-10, hai bạn Phúc, chỉ là phỏng đoán).
- **Trái chiều (1):** R01. Ở R01-GV-06, hai em Minh cùng giơ tay và được đọc lại đủ họ tên ngay nên không ai bị nhầm. Ở R01-P3, R01 lo bị nhảy dòng ở chỗ hai em Minh nhưng "gần đây thì tôi không nhớ có lần nào". R01 chỉ được xếp ở phía trái chiều; nỗi lo của R01 được ghi lại ở đây nhưng không tính là ủng hộ.
- **Độ mạnh: Giả thuyết – Yếu.** Chỉ có 1 ca xác nhận và 1 ca phỏng đoán. Mô-típ trùng tên lặp ở ba bản ghi nên có thể là dấu vết do mô hình sinh (mục 4.8).
- **Thay đổi:** hạ một mức, thêm R01 vào trái chiều (CR-03).

### F-04 — Người đến hợp lệ sau lượt hỏi lại

Hai GV kể có lần SV đến hợp lệ (trong vòng 5 phút) nhưng sau lượt hỏi lại, và không được sửa thành có mặt vì GV quên khi đã chuyển sang dạy.

- **Ủng hộ (2):** R04 (R04-GV-11, ngày 1/10; R04-GV-13đs "Có lần nhớ, có lần quên"), R05 (R05-GV-11, Hưng vào lúc 7g05).
- **Ghi chú:** ở buổi 12/10, R04 không quên (R04-GV-09). Đó là một lần "nhớ", không phải bằng chứng ngược.
- **Không đủ dữ liệu:** R01, R02, R03. R01 chờ 5 phút rồi mới đọc tên vì "mấy em đi F-Bus lên sát giờ" (R01-GV-04). Câu "R01 nhờ vậy tránh được khe này" trong v1 là suy diễn của người tổng hợp nên đã bỏ.
- **Độ mạnh: Giả thuyết – Vừa.** Có cờ: lời kể quá trôi chảy, người trả lời tự nói ra kết luận (R05-GV-11 "Đó là cái chỗ mà cách đọc lại của chị không bắt được"; R04-GV-12 "mà chỗ đó lại phụ thuộc vào trí nhớ của tôi").
- **Thay đổi:** đổi "Giảng viên thường quên" thành "hai GV kể có lúc quên", bỏ vế về R01 (CR-04).

### F-05 — Ghi tạm ngoài FAP rồi đưa lên sau

Có GV ghi tạm ra ngoài FAP rồi mới đưa lên FAP sau. R01 ghi cả lớp trên giấy in và làm vậy thường xuyên. R02 ghi người vắng ra giấy nháp khi đến lớp trễ, thỉnh thoảng mới làm. R04 ghi người đến sau lượt đọc tên lên giấy nhớ. Trong hai ca được kể, lỗi phát sinh ở chính bước đưa lên sau.

- **Ủng hộ (3):** R01 (R01-GV-04, R01-GV-09). R02 (R02-GV-09đs, R02-P2; lỗi ở R02-GV-11). R04 (R04-GV-04; lỗi ở R04-GV-11).
- **Trái chiều (2):** R03 và R05 đánh thẳng trên FAP lúc đọc tên, không ghi tạm.
- **Ghi chú:** ý "tốn công dò từng dòng" chỉ đến từ R01 (R01-GV-09, R01-P3), và R01 không nhớ gần đây có lần lệch dòng nào. R11-CB-11 đã được bỏ khỏi phát hiện này vì buổi đó không hề được điểm danh và lý do bị giữ kín; ca này chuyển sang mục 4.13.
- **Độ mạnh: Giả thuyết – Vừa.** Điểm này vượt W6, vì W6 chỉ mô tả việc đọc tên trên FAP. Có cờ: mỗi cách ghi tạm trùng với đặc điểm của persona tương ứng (CR-G2).
- **Thay đổi:** thêm R04 cho phần người đến sau, bỏ R11 (CR-05).

### F-06 — Kết quả lên FAP muộn hơn lúc đáp "có"

Có khi kết quả lên FAP muộn hơn lúc SV đáp "có" vài giờ, vì GV nhập vào buổi trưa, buổi chiều, buổi tối, hoặc điểm danh vào cuối giờ. Trong khoảng đó ô điểm danh còn "Not yet", nên SV chưa kiểm tra được. Có SV quay lại xem; có SV không quay lại và chỉ biết có lỗi khi người khác báo.

- **Ủng hộ (5):** GV có 2: R01 (R01-GV-09 nhập lúc 13g30; R01-GV-09đs có lần 8 giờ tối mới nhập), R02 (R02-GV-09đs nhập buổi trưa). SV có 3: R07 (R07-SV-06đs, "Not yet" lúc 11g50, Attended lúc 22g30), R09 (R09-SV-10, R09-P2, "Not yet" buổi trưa, Attended buổi chiều), R10\* (R10-P2, "Not yet" lúc 14g50, Absent lúc 19 giờ; không xem lại, mẹ báo).
- **Trái chiều (3):** R03, R04, R05 lưu ngay trong lớp.
- **Ghi chú:** R11-CB-11 (cả buổi không được điểm danh rồi bị chốt khi qua ngày) là hiện tượng khác nên đã tách ra (mục 4.13). Câu "Not yet đã che một lỗi Absent" trong v1 diễn đạt sai: lúc 14g50 lỗi chưa có trên FAP; điều thực sự xảy ra là SV không quay lại xem.
- **Độ mạnh: Giả thuyết – Vừa.** Bản thân trạng thái "Not yet" là W8. Desk V03 xác nhận nghĩa của "Not yet", nhưng ý "GV có thể nhập sau khi slot kết thúc" chỉ ở mức Suy luận, và Desk không nói gì về tần suất hay về việc SV xem lại. Vì vậy Desk không đủ để nâng. Có cờ: chuỗi giờ của R01 và R10 cùng ngày 1/10 khớp nhau quá sát.
- **Thay đổi:** sửa câu, đếm lại, tách R11-CB-11 (CR-06).

### F-07 — Sinh viên coi điểm danh là "xong" khi nào, và ai phát hiện lỗi

**F-07a.** Hai SV chỉ coi việc điểm danh là xong khi thấy chữ Attended trên FAP hoặc myFAP, và tự xem sau mỗi buổi. Các SV còn lại coi là xong khi đã đáp "có", hoặc không quan tâm.

- **Ủng hộ (2):** R07 (R07-SV-04đs, R07-SV-08, R07-SV-09), R10\* (R10-SV-08, R10-SV-09).
- **Trái chiều (3):** R09 (R09-SV-09 vế sau: "trong lòng là xong từ lúc dạ 'có' rồi"). R09 vẫn mở myFAP "cho chắc" khi tiện (R09-SV-08), nhưng được xếp ở phía trái chiều vì chính R09 nói mốc "xong" là lúc đáp. R06 (R06-SV-09; chưa từng xem, R06-SV-08). R08 (R08-SV-09: "Không có lúc nào cả").
- **Độ mạnh: Giả thuyết – Vừa.**

**F-07b.** Lỗi còn sót lại sau buổi học được phát hiện từ phía SV. Trong mọi ca sai được kể, người phát hiện là chính SV hoặc phụ huynh. Không ca nào do GV hay phòng đào tạo phát hiện trước.

- **Ủng hộ (7 kịch bản):** R01-GV-11 (SV email), R02-GV-11 (SV email), R04-GV-11 (SV email sáng hôm sau), R05-GV-11đs (SV nhắn Zalo kèm ảnh myFAP), R07-SV-10 (tự xem), R10-SV-10 (mẹ phát hiện), R11 (R11-CB-03 SV tự xem myFAP hôm sau; R11-CB-11 SV gửi đơn khi thấy "Not yet").
- **Trái chiều:** không có. Lỗi phát sinh ngay trong lớp thì lượt hỏi lại của GV bắt được (F-02a); vế này chỉ nói về lỗi còn sót sau buổi.
- **Độ mạnh: Mạnh.** Bằng chứng là Desk V13 (SV phải xem "điểm danh hàng ngày trên [FAP] và báo với giảng viên trong cùng ngày") và V01 (SV email GV trong ngày; "Sinh viên phát hiện có sự nhầm lẫn…"). Quy định giao việc phát hiện và báo lỗi cho SV. Lưu ý: Desk nói về quy định, không chứng minh SV thực sự xem hằng ngày.
- **Thay đổi:** bỏ "lỗi chỉ được phát hiện khi các em tự xem; không có ai báo", vì câu này sai với ca R10 (mẹ báo). Bỏ R05-GV-13đs vì nó nói về cách làm trước năm 2022. Bỏ "với nhiều sinh viên" (CR-07).

### F-08 — Trong lớp, SV thường không thấy mình được ghi gì

Trong lớp, SV thường không thấy được mình đã được ghi gì. Tín hiệu thường có là cái gật đầu của GV, và có SV không tin tín hiệu này.

- **Ủng hộ (4):** R06 (R06-SV-04đs, R06-P2), R07 (R07-SV-04đs), R09 (R09-SV-04, R09-SV-09), R10 (R10-SV-04đs). Hai người không tin cái gật đầu là R07 và R10. Riêng R09 từng gặp một thầy chiếu trang FAP lên màn hình (R09-SV-06đs) nhưng không đọc kịp; chi tiết này không đổi phía của R09.
- **Trái chiều (1):** R05 đọc to danh sách vắng cho cả lớp nghe (R05-GV-04). Đây là cách riêng của một GV.
- **Không tính:** R08 (không quan tâm).
- **Độ mạnh: Giả thuyết – Vừa.** Có cờ: câu SV-04đs ("bạn biết gì về việc mình đã được ghi nhận hay chưa?") có tính dẫn dắt, và cả bốn câu trả lời đi theo cùng một khung.
- **Thay đổi:** đổi "không có cách nào" thành "thường không thấy" (CR-08).

### F-09 — Công khai kết quả ngay trong lớp

**F-09a.** Một GV đọc to danh sách vắng sau khi đọc tên. Người đang ngồi trong lớp mà bị lỡ thì lên tiếng và được sửa ngay: Quân đáp nhỏ ở bàn cuối, rồi "la lên" khi nghe tên mình trong danh sách vắng.

- **Ủng hộ (1):** R05 (R05-GV-04, R05-GV-06, R05-GV-10, R05-GV-13).
- **Ghi chú:** cách này không bắt được người vào sau lượt đọc lại; ý này đã nằm ở F-04 (R05-GV-11).
- **Độ mạnh: Giả thuyết – Yếu.**

**F-09b.** Khi danh sách FAP được chiếu lên màn hình trong thời gian ngắn, một SV ngồi xa và mắt kém không kịp dò tên mình, ngại hỏi to trước lớp, rồi bồn chồn cho tới giờ giải lao.

- **Ủng hộ (1):** R09 (R09-SV-06đs, R09-P3). R09 tự nói "cũng chỉ một lần thôi" (R09-SV-12).
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** bỏ vế "người nói nhỏ vẫn bị bỏ sót" vì nó trái với nguồn, và tách vế "ngại lên tiếng" thành F-09b (CR-09).

### F-10 — Hai đường sửa: trong ngày và sau ngày

**F-10a.** Có hai đường sửa. Báo trong ngày thì GV tự sửa. Qua ngày thì việc sửa phải đi qua đơn và phòng đào tạo, và mất lâu hơn.

- **Ủng hộ trong ngày (3):** R01\* (R01-GV-11), R02 (R02-GV-11), R10\* (R10-SV-10đs).
- **Ủng hộ qua ngày (4):** R04 (R04-GV-11), R05 (R05-GV-11đs), R07 (R07-SV-10), R11 (R11-CB-04, R11-CB-10đs, R11-P1).
- **Trái chiều:** không kịch bản R nào nói qua ngày thì không sửa được. O-01.7 (Reported: "không còn cứu vãn được") ngược chiều, và Desk đứng về phía các kịch bản R.
- **Độ mạnh: Mạnh.** Bằng chứng là Desk V01 và V13 (SV báo GV trong ngày học), cùng V01 và V02 (quá hạn thì nộp "Đơn khiếu nại điểm danh" trên FAP, đơn chuyển phòng QLĐT, xử lý trong 2 ngày làm việc). Desk **không** xác nhận FAP khóa quyền sửa của GV về mặt kỹ thuật (ý C trong RES-DESK-FAP: không đủ bằng chứng).

**F-10b.** Thời gian trong các ca được kể: sửa trong ngày mất khoảng 1–2 giờ; sửa sau ngày mất từ hơn 1 ngày làm việc đến khoảng 1 tuần.

- **Nguồn:** trong ngày có R01 (khoảng 1 giờ), R02 (khoảng 2 giờ), R10 (khoảng 2 giờ). Qua ngày có R11-CB-04 (hơn 1 ngày làm việc), R11-CB-10đs và R11-P1 (khoảng 4 ngày làm việc), R05 (4–5 ngày), R04 (2/10 đến 7/10), R07 (25/9 đến 30/9).
- **Độ mạnh: Giả thuyết – Vừa.** Desk ghi thời hạn xử lý là 2 ngày làm việc. Con số này khớp với ca nhanh nhất của R11 nhưng không khớp với các ca 4–7 ngày. R11 chỉ phụ trách khối Kinh tế nên không xác nhận được ca của R04, R05 hay R07 (mục 4.11). Có cờ: chi tiết "chưa tới một phút" ở R04-P3 quá tiện cho kết luận.
- **Thay đổi:** sửa khoảng thời gian. Bỏ vế "cả sinh viên, giảng viên lẫn cán bộ đều tốn công hơn hẳn", vì R11 coi ca hơn 1 ngày là ca "theo cách chị muốn nhất" (R11-CB-09đs). Nhãn Mạnh nay dựa trên Desk chứ không dựa trên số kịch bản (CR-10).

### F-11 — Người bị ghi sai phải đi chứng minh

**F-11a.** Khi lỗi do người ghi chỉ được phát hiện sau ngày, có GV bảo SV làm đơn rồi chờ, kể cả khi GV đã nhận lỗi. SV bực vì phải đi chứng minh mình có mặt.

- **Ủng hộ (2):** R07 (R07-SV-10, R07-P3, R07-SV-12). R05 (R05-GV-11đs: bảo Hưng làm đơn trong 2 ngày; R05-GV-13: một em năm 2022 làm đơn bị quá hạn và khóc ngay trong lớp).
- **Trái chiều (1):** R04 (R04-GV-11): GV tự email phòng đào tạo kèm ảnh giấy nhớ, và không chắc SV có nộp đơn hay không. SV của R04 vẫn phải chờ 5 ngày và hỏi lại GV trước cả lớp (R04-P3), nhưng chi tiết này không đổi phía của R04.
- **Độ mạnh: Giả thuyết – Vừa.** Phần thủ tục (quá hạn thì SV nộp đơn) đã có Desk ở F-10a. Phần riêng của vế này, "kể cả khi GV đã nhận lỗi", chỉ có Simulated, và R04 là phản ví dụ.

**F-11b.** Một GV tự trách khi lỗi của mình làm một SV đến đúng giờ bị ghi vắng.

- **Ủng hộ (1):** R04 (R04-GV-11đs, R04-P3). R05-GV-13 không có ý tự trách nên đã bỏ khỏi vế này.
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** tách hai mệnh đề mà v1 đã cộng dồn số người (CR-11).

### F-12 — Một sinh viên tự mò thủ tục khiếu nại

Một SV phải làm đơn lần đầu. SV đó không biết mẫu đơn, không biết gửi cho ai, phải hỏi bạn qua Zalo, rồi gửi bằng email chứ không qua FAP. Không ai báo là đơn đã được nhận, và trong mấy ngày chờ, SV mở mail và mở FAP nhiều lần mỗi ngày.

- **Ủng hộ (1):** R07 (R07-SV-14, R07-P2, R07-SV-14đs).
- **Trái chiều (1):** R11 (R11-CB-13: "sinh viên biết vào đâu để nộp"; R11-P3: cả kỳ chỉ có một bạn hỏi lại). R11 cũng xác nhận "thường thì chị không nhắn riêng cho sinh viên" (R11-CB-09), nhưng nói SV xem kết quả ở phần đơn trên FAP. R11 chỉ được xếp ở phía trái chiều.
- **Ngoài phạm vi:** R08. Đó là đơn xin miễn, không phải đơn khiếu nại; R08 có nhận mail "đã nhận" và không theo dõi gì thêm (R08-P3).
- **Bối cảnh Desk (không phải bằng chứng cùng chiều):** tài liệu FAP có hướng dẫn thủ tục (V01: Thủ tục/Đơn từ → Gửi đơn), nghĩa là thông tin này có tồn tại. R07 không biết tới nó, và vì gửi qua email nên R07 không có phần đơn trên FAP để xem kết quả.
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** giới hạn câu ở R07, bỏ chữ "liên tục", đưa R11-P3 sang phía trái chiều (CR-12).

### F-13 — Căn cứ để quyết định khi đã qua ngày

**F-13a.** Khi đã qua ngày, căn cứ chính để quyết định là xác nhận của GV. Khi SV và GV nói khác nhau, kết quả giữ theo GV.

- **Ủng hộ (4):** R11 (R11-CB-06 "Quan trọng nhất là xác nhận của giảng viên"; R11-CB-10, R11-CB-10đs: tổng hợp lời hai bên, trưởng bộ phận giữ theo GV). R05 (R05-GV-11đs: phòng đào tạo email hỏi GV). R04 (R04-GV-11đs: GV gửi ảnh giấy nhớ làm căn cứ). R07 (R07-SV-10: "thầy sẽ xác nhận").
- **Trái chiều:** không có.
- **Độ mạnh: Giả thuyết – Vừa.**

**F-13b.** Bạn làm chứng do SV nêu tên không được ai hỏi tới.

- **Ủng hộ (1):** R07 (R07-SV-10đs: "không ai hỏi Ngân hết"). Liên quan nhưng không tính: ở R11-CB-10đs, SV có ghi tên một bạn, và R11 không nhắc gì đến việc liên hệ bạn đó.
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** bỏ câu "lời trình bày của sinh viên không được hỏi tới", vì R11 có tổng hợp lời của hai bên (CR-13).

### F-14 — Kênh báo sai trong ngày (giả thuyết)

Giả thuyết: lời báo sai trong ngày có thể không tới GV kịp nếu đi qua kênh mà GV ít mở. Theo tài liệu, kênh báo trong ngày là email cho GV (Desk V01), và có một GV gần như không mở email trường. Chưa có ca thật nào lời báo bị lỡ vì sai kênh.

- **Ủng hộ (1):** R03 (R03-GV-11, giả định "chắc anh cũng chưa đọc"; R03-P1: lần gần nhất mở email trường là đầu tháng 9).
- **Liên quan, không tính:** R11-P1 (một thầy không thấy email của cán bộ, nhưng đó là giai đoạn đã qua ngày). R02, R03, R05 đã chuyển liên lạc với lớp sang Zalo (R02-GV-14, R03-GV-14, R05-GV-08đs).
- **Trái chiều (3):** R01 (R01-GV-11), R02 (R02-GV-11), R10 (R10-SV-10đs). Ở cả ba ca, email tới được GV và lỗi được sửa trong ngày. v1 xếp R04 vào đây là sai, vì SV của R04 gửi email vào sáng hôm sau.
- **Độ mạnh: Giả thuyết – Yếu.** Desk V01 cùng chiều với tiền đề "lời báo trong ngày đi qua email", nhưng không nói gì về chuyện lời báo bị lỡ.
- **Thay đổi:** hạ một mức, viết thành giả thuyết, sửa danh sách trái chiều (CR-14).

### F-15 — Tranh chấp ở sát mốc 5 phút

Việc GV áp mốc 5 phút là W5, không tính. Ở sát ngưỡng, chỉ một GV cho thấy có tranh chấp: GV lấy đồng hồ trên laptop của mình làm chuẩn và không xét lý do F-Bus hay kẹt xe; SV thì cãi lại hoặc giơ giờ trên điện thoại.

- **Ủng hộ (1):** R04 (R04-GV-07, R04-GV-08đs, R04-P1).
- **Cách làm khác (1):** R01 chờ 5 phút rồi mới đọc tên (R01-GV-04). Tuy vậy, SV vào lúc 7g22 vẫn bị tính vắng (R01-GV-04đs).
- **Không dùng làm bằng chứng:**
  - Các ca trễ vượt xa ngưỡng: R01 (22 phút), R02 (15 phút), R07 chứng kiến (25 phút), R09 chứng kiến (hơn 10 phút), R10 (15 phút). Những ca này không cho thấy quy tắc được áp cứng hay mềm.
  - R05-GV-11 không phải trái chiều. Hưng vào lúc 7g05, vẫn trong 5 phút, nên được cho ngồi là đúng quy tắc chứ không phải GV nới tay.
  - R06-SV-11 và R08-SV-11: GV cho SV vào lớp, không rõ ghi thế nào.
- **Liên quan:** R11-CB-10 là một ca tranh chấp giờ đến giữa SV và GV, trong đó ghi nhận của GV được giữ. Ca này nằm ở F-13a.
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** tách phần trùng W5 ra, chỉ giữ ca R04 (CR-15).

### F-16 — Mỗi bên tự lo rủi ro trễ buổi sáng

Mỗi bên tự xử lý rủi ro trễ buổi sáng. SV vừa chạy xe vừa "đếm phút", hoặc ra trạm F-Bus thật sớm. Một GV chờ 5 phút rồi mới đọc tên. Một GV khác coi đó là việc SV phải tự tính.

- **Ủng hộ (4):** R07 (R07-SV-01đs, R07-SV-02, R07-SV-12). R06 (R06-SV-14đs): ra trạm từ 6 giờ vì lỡ chuyến thì phải chờ chuyến của slot sau. Đây là ủng hộ gián tiếp, vì R06 không nhắc tới mốc 5 phút. R01 (R01-GV-04). R04 (R04-GV-12). R04 chỉ được xếp ở phía ủng hộ: quan điểm "các em phải tự tính" chính là một cách chia rủi ro. v1 đếm R04 ở cả hai phía.
- **Trái chiều:** không có.
- **Độ mạnh: Giả thuyết – Vừa.** Bối cảnh kẹt xe và F-Bus là W5 cộng W9, không tính.
- **Thay đổi:** đếm lại, bỏ R04 khỏi phía trái chiều (CR-16).

### F-17 — Thiết bị của GV tùy hoàn cảnh

GV dùng thiết bị nào là do hoàn cảnh: dùng laptop vì đang mở sẵn để chiếu bài, dùng điện thoại khi không có hoặc không dùng được laptop. Khi mạng hay máy trục trặc, GV đổi sang điện thoại hoặc 4G, và cả lớp ngồi chờ khoảng 1 phút.

- **Ủng hộ (3):** R02 (R02-GV-08đs, R02-P1, R02-P3), R03 (R03-GV-02đs, R03-GV-08đs, R03-GV-05, R03-P3), R05 (R05-GV-07đs, R05-P1).
- **Trái chiều (1):** R04 (R04-GV-07đs: "Wifi hôm qua vào FAP được ngay"). R01 không dùng thiết bị trên lớp nên không tính.
- **Độ mạnh: Giả thuyết – Vừa.** RES-CRITIQUE coi phát hiện này là đứng vững; mức chỉ hạ vì thang v2.

### F-18 — SV dùng 4G hoặc máy yếu

SV dùng 4G vì wifi trường chậm, vì không vào được wifi, hoặc vì laptop công ty phải chạy VPN. Có SV dùng máy yếu, không cài thêm được ứng dụng.

- **Ủng hộ (4):** R06 (R06-SV-07đs, R06-SV-08, R06-P3), R07 (R07-SV-07đs), R08 (R08-SV-07đs), R10 (R10-SV-07đs).
- **Không tính:** R09 không nhắc gì đến trục trặc mạng.
- **Độ mạnh: Giả thuyết – Vừa.** Phát hiện này liên quan đến việc học nói chung nhiều hơn là đến việc điểm danh.

### F-19 — Chữ nhỏ trên màn hình

Chữ nhỏ trên màn hình gây khó ở hai bối cảnh khác nhau, mỗi bối cảnh chỉ có một người. GV R01 gặp khó khi nhập FAP từ giấy (phải phóng to trình duyệt, dùng thước để dò). SV R09 gặp khó khi danh sách FAP được chiếu lên trong lúc mình ngồi xa (một lần).

- **Ủng hộ:** R01 (R01-P3, R01-GV-14đs), R09 (R09-SV-06đs, R09-SV-07đs).
- **Độ mạnh: Giả thuyết – Yếu.** Có cờ: thị lực của cả hai người có thể là đặc điểm cài sẵn trong persona; bản này không đọc prompt persona nên không kiểm được điều đó. Phần của R09 trùng với F-09b.
- **Thay đổi:** hạ một mức (CR-17).

### F-20 — GV nhận ra SV nhờ quen mặt

Bốn GV nhận ra SV nhờ đã quen mặt và nhớ chỗ ngồi; hai người trong số đó nói phải mất khoảng 3–4 tuần mới quen. Một GV thỉnh giảng không nhớ mặt SV, và lý do tự nêu là số SV đông.

- **Ủng hộ (4):** R01 (R01-GV-08đs, tuần 3–4), R02 (R02-GV-05đs, R02-P2), R04 (R04-GV-05đs), R05 (R05-GV-05đs, tuần 3).
- **Trái chiều (1):** R03 (R03-GV-05đs: "hai lớp sáu chục đứa").
- **Độ mạnh: Giả thuyết – Vừa.**
- **Thay đổi:** bỏ vế "giảng viên thỉnh giảng dạy ít buổi thì không có lợi thế đó" (CR-18).

### F-21 — Phút gọi tên còn để nhìn mặt SV

Một GV dùng phút gọi tên để nhìn mặt từng SV (em nào mệt, em nào hổng bài), chứ không chỉ để điểm danh. Còn em nào "hay vắng" thì GV này biết nhờ tờ giấy.

- **Ủng hộ (1):** R01 (R01-GV-12, R01-GV-13, R01-P1).
- **Trái chiều (2):** R02 (R02-GV-12), R03 (R03-GV-12).
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** bỏ "hay vắng" khỏi những gì GV nắm qua việc nhìn mặt (CR-19).

### F-22 — Tiêu chí "xong" khác nhau giữa các GV

Các GV nêu tiêu chí "xong" khác nhau: bấm lưu (R02, R03), số trên FAP khớp với số trên tờ giấy (R01), gạch hết tên trên giấy nhớ (R04), đọc danh sách vắng mà không còn ai lên tiếng (R05). Sau khi lưu, có GV không vào kiểm tra lại (R03, ở buổi 12/10).

- **Ủng hộ (5):** R01-GV-10, R02-GV-10, R03-GV-10, R04-GV-10, R05-GV-10.
- **Độ mạnh: Giả thuyết – Vừa.** Có cờ: câu GV-10 buộc mỗi người phải nêu một tiêu chí.
- **Thay đổi:** sửa "không bao giờ kiểm tra lại" thành "sau khi lưu, có GV không kiểm tra lại" (CR-20).

### F-23 — Lớp trưởng là đầu mối

Lớp trưởng là đầu mối nhận câu hỏi về chuyên cần từ cả GV lẫn bạn cùng lớp, và có lúc bị nhờ "đáp giùm" hoặc nhờ xin châm chước. Từ chối thì mất lòng bạn.

- **Ủng hộ:**
  - Vai trò đầu mối: R10 (R10-SV-02đs, R10-SV-04, R10-SV-06đs, R10-SV-12). Ba kịch bản khác cũng cho thấy lớp trưởng là kênh liên lạc: R03-GV-14đs (nhờ lớp trưởng nhắc các bạn vào nhóm), R05-GV-12 (lớp trưởng báo cả lớp đang đi GDQP), R06-SV-08 (lớp trưởng gửi ảnh lịch học).
  - Bị nhờ đáp giùm và mất lòng: chỉ có R10 (R10-SV-06đs, R10-SV-11, R10-P1, R10-P3).
- **Độ mạnh:** Giả thuyết – Vừa cho vai trò đầu mối; Giả thuyết – Yếu cho chuyện bị nhờ đáp giùm và mất lòng.
- **Thay đổi:** bỏ hai nguồn ủng hộ gián tiếp R01-GV-12đs và R05-GV-12đs, vì câu "nên nói chuyện với ai" trỏ đúng sang persona kế tiếp (CR-G1).

### F-24 — Phụ huynh xem myFAP

Phụ huynh xem myFAP, nên một chữ Absent ghi sai khiến SV bị hỏi ngay trong tối đó. Phụ huynh cũng có thể là người phát hiện lỗi.

- **Ủng hộ (1):** R10 (R10-SV-08đs, R10-SV-10, R10-SV-12).
- **Độ mạnh: Giả thuyết – Yếu.** Chưa kiểm chứng phụ huynh có quyền xem myFAP hay không.

### F-25 — Tân sinh viên chưa nắm hệ thống

SV mới vào trường chưa nắm hệ thống: chưa từng xem điểm danh, chưa cài app, không biết số buổi có mặt của mình. GV dạy lớp năm 1 nhận nhiều câu hỏi, và lịch của tân SV dễ bị nhầm.

- **Ủng hộ (2):** R06 (R06-SV-08, R06-SV-08đs, R06-SV-10, R06-SV-13b), R05 (R05-GV-01đs, R05-GV-04đs, R05-GV-12).
- **Trái chiều (1):** R09 (R09-SV-13 vế sau: năm nhất "ngày nào học xong cũng mở ra xem").
- **Độ mạnh: Giả thuyết – Vừa.**

### F-26 — Đã bỏ

Lý do: phần của GV (biết chuyện khóa sau ngày qua đồng nghiệp) chỉ là tiếng vọng của W7, vốn mang nhãn Reported. Phần của SV bỏ qua các nguồn chính thức mà SV đã kể, và hai nguồn v1 trích lại không nói về chuyện khóa sau ngày. Mã CR: **CR-21**. Nội dung được chuyển thành ghi chú phương pháp ở mục 4.10.

### F-27 — Một SV xin miễn điểm danh

Một SV đã nộp hồ sơ xin miễn điểm danh. Sau mail "đã nhận", SV này không nhận được xác nhận nào khác, trên FAP không thấy chỗ nào ghi là được miễn, và SV định để tới lúc bị chặn thi mới tính. SV vẫn mở FAP ở tuần 3, thấy các ô absent nhưng không làm gì.

- **Ủng hộ (1):** R08 (R08-SV-01, R08-SV-04đs, R08-SV-08, R08-P2, R08-P3).
- **Trái chiều:** R11-CB-01 và R11-CB-11đs chỉ nhắc đến miễn do ốm, cần có giấy khám bệnh.
- **Độ mạnh: Giả thuyết – Yếu.** Chính sách miễn điểm danh bằng hợp đồng lao động chưa được kiểm chứng.
- **Thay đổi:** đổi "sinh viên được miễn … hoàn toàn thờ ơ" thành câu về một SV (CR-22).

### F-28 — Sát ngưỡng 20% vào tuần chốt

Khi SV đã sát ngưỡng 20%, đơn dồn về tuần chốt điều kiện dự thi. Lúc đó, sửa được một buổi bị ghi sai cũng không cứu được SV nếu các buổi vắng khác không có minh chứng.

- **Ủng hộ (1):** R11 (R11-CB-02, R11-CB-11đs).
- **Ghi chú:** O-01.8 (Reported) cùng hướng ở phần "sát ngưỡng" nhưng kể khác: ở đó chính buổi bị ghi sai làm SV vượt ngưỡng. Desk V04 (báo cáo điểm danh có hiện phần trăm vắng) là bối cảnh, không cùng chiều mà cũng không ngược chiều.
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** bỏ R07-SV-08 khỏi phía ủng hộ, vì R07 không ở gần ngưỡng (CR-23).

### F-29 — Buổi điểm danh suôn sẻ

Những buổi điểm danh "suôn sẻ nhất" mà các GV và một SV chọn có chung mấy điểm: lớp đủ, đọc một lượt, không phải hỏi lại, không ai cắt ngang, và sau buổi không ai phải hỏi. Lớp đủ người là điều GV không kiểm soát được (R04: các em tới sớm "vì có điểm").

- **Ủng hộ (5):** R01 (R01-GV-10đs), R02 (R02-GV-10đs), R04 (R04-GV-10đs), R05 (R05-GV-10đs, R05-P3), R10 (R10-SV-09đs).
- **Một phần, không tính:** R09 (R09-SV-09đs) chọn buổi đó vì ngồi gần, nghe rõ, không phải căng mắt.
- **Khác:** R07 (R07-SV-09đs: "chỉ cần có mặt thì ghi có mặt"; trong chính buổi đó có người vào lúc 7g25, theo R07-SV-11).
- **Không được hỏi câu này hoặc không chọn được buổi nào:** R03 (câu R03-GV-10đs hỏi "giống hay khác"), R06, R08. R11-CB-09đs nói về việc xử lý đơn nên không tính.
- **Độ mạnh: Giả thuyết – Vừa.** Có cờ: câu GV-10đs và SV-09đs buộc mỗi người chọn một buổi.
- **Thay đổi:** sửa câu và đếm lại (CR-24).

### F-30 — Đổi cách làm

**F-30a.** Hai GV nói rõ họ chỉ đổi một cách làm khi thấy lý do cụ thể.

- **Ủng hộ (2):** R04 (R04-GV-14), R05 (R05-GV-14, R05-GV-14đs).
- **Trái chiều (1):** R01 (R01-GV-14, R01-GV-14đs). Lần đổi lớn nhất của R01 là do trường chuyển sang FAP; R01 mất cả tháng mới quen, và nay "ngại lắm" nếu phải học thêm.
- **Không tính:** R02 và R03 không nêu lý do trước khi đổi; R03 chỉ nêu cái tiện sau khi đã đổi. R09, R10, R11 đổi theo quyết định của GV hoặc của phòng.
- **Độ mạnh: Giả thuyết – Vừa.**

**F-30b.** Giai đoạn chuyển được kể là kéo dài khoảng 2–3 tuần (có khi một tháng); trong thời gian đó người ta thường vẫn chạy song song cách cũ và nhờ người bên cạnh chỉ.

- **Nguồn:** R02, R03, R04, R05, R09, R10, R11 (các câu GV-14đs, SV-14đs, CB-14đs), và R01 (một tháng).
- **Độ mạnh: Giả thuyết – Yếu.** Có cờ khuôn mẫu sinh: nhịp "tuần đầu loạn, qua tuần hai, ba thì quen" lặp ở 7 bản ghi, và chính câu đào sâu gợi ra nhịp này. Những thứ được đổi (Zalo, Google Form, Figma, GitHub, Excel, chuyển từ USB sang email) đều không phải điểm danh, nên không suy rộng sang việc điểm danh.
- **Thay đổi:** tách hai vế; R01 chỉ còn ở phía trái chiều (CR-25).

### F-31 — Thói quen mới ra đời sau sự cố

Có những thói quen điểm danh hoặc kiểm tra mới ra đời ngay sau một sự cố cụ thể.

- **Ủng hộ (4):** R04 (R04-GV-13), R05 (R05-GV-13), R07 (R07-SV-08), R10 (R10-P2).
- **Trái chiều (3):** R01 (R01-GV-13đs) bỏ sổ đầu bài vì dần nhận ra mình không biết mặt SV, không phải sau một sự cố. R02 và R03 làm theo cách được chỉ từ đầu.
- **Độ mạnh: Giả thuyết – Vừa.** Có cờ: câu GV-13 và các câu đào sâu hỏi thẳng về nguồn gốc của thói quen.
- **Thay đổi:** đếm lại còn 2 GV và 2 SV; R01 chuyển sang phía trái chiều (CR-26).

### F-32 — Cái giá của việc đổi thói quen

Một GV gắn bó lâu năm với giấy coi tờ giấy là bản gốc, từng mất cả tháng mới quen FAP, và nay ngại học thêm.

- **Ủng hộ (1):** R01 (R01-GV-10, R01-P2, R01-GV-14đs).
- **Trái chiều (2):** R03 (R03-GV-14, R03-GV-14đs): đổi sang Zalo, sang tuần 2 thì đủ người, "anh thấy tiện hơn"; việc chưa đăng ký mạng giảng viên là do thiếu thời gian. R05 (R05-GV-14đs: "không ngại thử cái mới").
- **Độ mạnh: Giả thuyết – Yếu.**
- **Thay đổi:** bỏ vế về giảng viên thỉnh giảng (CR-27).

---

## 3. Nhu cầu

Mỗi nhu cầu nói **ai** cần **biết hoặc làm được gì**, **trước khi nào**. Câu chữ tránh gợi ý cách giải quyết. Cột "Độ mạnh nguồn" lấy theo vế F mạnh nhất mà nhu cầu thực sự dựa vào; vế nào yếu hơn thì được ghi riêng.

| Mã | Nhu cầu (v2) | Từ F | Độ mạnh nguồn | Thay đổi so với v1 |
|---|---|---|---|---|
| N-01 | Sinh viên có mặt nhưng bị ghi vắng cần **biết** mình đang bị ghi vắng, và cần lời báo của mình **tới được** giảng viên dạy buổi đó, **trước khi hết ngày có buổi học** (với môn LUK là trong 2 ngày kể từ buổi học). | F-01a, F-06, F-07a, F-07b, F-08, F-10a, F-14 | **Mạnh** cho mốc thời gian và cho việc phát hiện nằm ở phía SV (Desk V01, V13, qua F-07b và F-10a). Vế "lời báo tới được GV" chỉ là Giả thuyết – Yếu (F-14). | Nhận phần gộp từ N-07. Mốc "trong ngày" nay dựa trên quy định báo trong ngày (Desk), không dựa vào giả định khóa kỹ thuật (W7, chưa kiểm chứng) (CR-28, CR-34). |
| N-02 | **Gộp vào N-04** (CR-29). | — | — | — |
| N-03 | Sinh viên đến lớp trong 5 phút đầu, kể cả khi đến sau lượt đọc tên và hỏi lại, cần **được tính có mặt** cho buổi đó. Khi hai bên nhìn khác nhau về giờ đến, sinh viên cần **biết** mình bị tính thế nào và vì sao. Cả hai điều này cần có **trước khi hết ngày có buổi học**. | F-04, F-15, F-13a | Giả thuyết – Vừa (F-04). Phần tranh chấp giờ đến là Giả thuyết – Yếu (F-15; R11-CB-10 trong F-13a). | Bỏ vế "mà không phải trông vào trí nhớ của mình", vì vế này ngầm định cách giải. Đổi chủ ngữ sang SV. Nhận phần gộp từ N-05 (CR-30, CR-32). |
| N-04 | Giảng viên cần **chắc** trạng thái đã lưu của từng sinh viên khớp với việc sinh viên đó có đáp hay không, **trước khi hết ngày có buổi học**. Điều này gồm cả người ngồi khuất hoặc đáp nhỏ, người trùng hoặc gần trùng tên, và lúc chuyển từ ghi chép tạm sang FAP. | F-01b, F-02a, F-02b, F-03, F-05 | Giả thuyết – Vừa (F-01b, F-05). F-02a (Mạnh) chỉ cho thấy lượt hỏi lại đã bắt được người bị lỡ trong lớp. F-03 là Giả thuyết – Yếu. | Nhận phần gộp từ N-02. Đổi mốc "trước khi lưu kết quả" thành "trước khi hết ngày" (CR-29, CR-31). |
| N-05 | **Gộp vào N-03** (CR-32). | — | — | — |
| N-06 | Sinh viên đã gửi yêu cầu sửa điểm danh sau ngày học cần **biết** yêu cầu đã tới đúng bên xử lý và khoảng khi nào có kết quả, **trong những ngày chờ, trước tuần chốt điều kiện dự thi**. | F-11a, F-12 | Giả thuyết – Yếu (F-12). Có thể đã được đáp ứng một phần với đơn nộp qua FAP, vì SV xem kết quả ở phần đơn (R11-CB-09); cần kiểm chứng. | Bỏ "đang ở bước nào" (CR-33). |
| N-07 | **Gộp vào N-01** (CR-34). | — | — | — |
| N-08 | Sinh viên khiếu nại sau ngày, khi lời mình khác lời giảng viên, cần **biết** lời trình bày và người làm chứng mình nêu đã được xem xét, **trước khi phòng đào tạo kết luận**. | F-13a, F-13b | Giả thuyết – Yếu. Người xét đơn (R11) không nêu nhu cầu này. | Đổi chủ thể từ "người xét khiếu nại" sang SV; bỏ vế "căn cứ ngoài trí nhớ của giảng viên" (CR-35). |
| N-09 | Sinh viên cần **biết** mình đã vắng tới đâu so với ngưỡng 20% ở từng môn, **trước tuần chốt điều kiện dự thi**. | F-25, F-28 | Giả thuyết – Yếu. Có thể đã được đáp ứng: báo cáo điểm danh trên FAP có phần trăm vắng ở cuối mỗi môn (Desk V04, V14; khớp với R10-SV-08đs). Nếu có khoảng trống thì nằm ở SV chưa từng xem (R06). | Bỏ "còn được vắng bao nhiêu buổi" vì đó là một cách hiển thị; bỏ F-07 khỏi cột nguồn (CR-36). |
| N-10 | Sinh viên ngồi xa hoặc mắt kém cần **biết** mình đã được ghi có mặt hay chưa mà không phải hỏi to trước lớp, **ngay trong buổi học đó**. | F-09b, F-19 | Giả thuyết – Yếu (1 SV, 1 lần). | Hạ một mức. Bỏ mốc "trước khi buổi học tiếp tục", thay bằng "trong buổi học" (CR-37). |
| N-11 | Giảng viên cần **ghi xong** điểm danh trong vài phút đầu slot với thiết bị và mạng đang có trong phòng, kể cả khi mạng chậm, **trước khi vào bài**. | F-17 | Giả thuyết – Vừa. Đây là nhu cầu gần với ràng buộc. | Bỏ F-22 và F-29 khỏi cột nguồn (CR-38). |
| N-12 | Sinh viên đã nộp hồ sơ xin miễn điểm danh cần **biết** việc miễn đã được duyệt hay chưa và áp cho những buổi nào, **trước tuần chốt điều kiện dự thi**. | F-27 | Giả thuyết – Yếu. Chính sách miễn bằng hợp đồng lao động chưa kiểm chứng. | Sửa câu, ghi độ mạnh (CR-39). |
| N-13 | Lớp trưởng cần giảng viên và bạn cùng lớp **hiểu giống nhau** việc gì lớp trưởng làm (báo lý do vắng mà mình biết) và việc gì không làm (đáp thay, xin châm chước), **trước khi bị nhờ**. | F-23 | Giả thuyết – Yếu. | Ghi độ mạnh (CR-40). |
| N-14 | Một số giảng viên (rõ nhất là R01) cần **nhận ra** từng sinh viên và thấy em nào đang mệt hay hổng bài, **từ những tuần đầu của môn, trước khi gọi sinh viên lên bảng hay giao bài trong buổi**. | F-20, F-21 | Giả thuyết – Vừa cho phần nhận mặt (F-20); Giả thuyết – Yếu cho phần nắm tình trạng (F-21). | Thu hẹp chủ ngữ; bỏ vế "dù ghi nhận có mặt bằng cách nào" (CR-41). |
| N-15 | **Đã bỏ.** Đây là yêu cầu triển khai cho một cách làm còn chưa có, không phải nhu cầu về việc điểm danh, và nó dựa trên F-30b (khuôn mẫu sinh) và F-32 (Yếu). Nội dung chuyển sang RB-1 bên dưới (CR-42). | — | — | — |

**Còn lại 11 nhu cầu:** N-01, N-03, N-04, N-06, N-08, N-09, N-10, N-11, N-12, N-13, N-14.

### Ràng buộc ghi nhận (không phải nhu cầu)

| Mã | Ràng buộc | Nguồn | Độ mạnh |
|---|---|---|---|
| RB-1 | Có GV chỉ đổi cách làm khi thấy rõ cách mới giải quyết được việc gì (R05: "miễn là chị thấy rõ nó giải quyết được chuyện gì"; R04 cũng nêu lý do rõ). Có GV ngại học thêm (R01). Các lần đổi được kể đều có giai đoạn chuyển kéo dài vài tuần. | F-30a, F-30b, F-32 (lấy từ N-15 cũ) | Giả thuyết – Vừa (F-30a); phần giai đoạn chuyển là Giả thuyết – Yếu |
| RB-2 | Thiết bị và mạng không ổn định ở cả phía GV lẫn SV; có SV dùng máy yếu và gói 4G ít dung lượng (R06). | F-17, F-18 | Giả thuyết – Vừa |
| RB-3 | Một slot dài 135 phút. | O-01.1 (Observed; nguồn gốc của W2) | Mạnh |
| RB-4 | Theo tài liệu: với môn thường, SV báo GV trong ngày học; với môn LUK, SV làm đơn trên FAP trong 2 ngày; quá hạn thì nộp đơn khiếu nại trên FAP, phòng QLĐT xử lý trong 2 ngày làm việc. Chưa có nguồn xác nhận FAP khóa quyền sửa của GV về mặt kỹ thuật, và chưa có nguồn xác nhận quy định riêng của cơ sở HCM. | Desk V01, V02, V13 | Mạnh ở mức quy định (bản sao tài liệu, chưa rõ thuộc cơ sở nào) |

---

## 4. Mâu thuẫn, điểm đáng ngờ và ghi chú phương pháp (cập nhật mục 7 của v1)

1. **Kênh nộp đơn khiếu nại.** Desk V01 ghi kênh chính thức là đơn trên FAP (Thủ tục/Đơn từ), khớp với R11-CB-02. Trong khi đó R07 và R08 gửi email, còn R04 là GV tự email phòng đào tạo. Chưa rõ đơn gửi qua email được xử lý theo đường nào. Cũng chưa rõ V01 là tài liệu của cơ sở nào.
2. **"Hạn 2 ngày" (mục 7.2 của v1) đã có lời giải.** R05 dạy LUK (R05-GV-01), và Desk V01 ghi: với môn có LUK, SV làm đơn trên FAP trong vòng 2 ngày kể từ buổi học. Vậy R05 không nhầm hai mốc như v1 nghi ngờ. Hạn này chỉ áp cho môn LUK, không áp cho môn thường.
3. **O-01.7 so với các kịch bản R.** Desk đứng về phía R: sau ngày học vẫn còn đường sửa qua đơn và phòng QLĐT. Việc FAP khóa kỹ thuật sau ngày (O-01.6, W7) vẫn chưa được kiểm chứng.
4. **R04 tự đính chính thứ tự lưu** (R04-P2). Giữ như v1: các mốc tính tới từng phút của R04 không đáng tin.
5. **Miễn điểm danh bằng hợp đồng lao động (R08)** chưa có nguồn nào xác nhận.
6. **Các chi tiết hệ thống.**
   - Phần trăm vắng hiển thị trên FAP: **đã có Desk.** V04 (nguồn chính thức, cơ sở Cần Thơ) và V14 cho thấy báo cáo điểm danh có phần trăm vắng ở cuối mỗi môn, khớp với R10-SV-08đs. Ở HCM chưa xác nhận riêng.
   - Extension của R07, việc phụ huynh xem myFAP, việc Phòng SSC gọi điện cho SV, và việc mạng giảng viên phải đăng ký thiết bị: tất cả vẫn chưa kiểm chứng.
7. **Ngày tháng trùng khớp bất thường.** Giữ như v1. Thêm cặp R01-GV-11 và R10-SV-10: cùng thứ Năm 1/10, cùng ca 3, cùng mốc khoảng 7 giờ tối (đánh dấu \*).
8. **Mô-típ lặp lại.**
   - Chuyện trùng tên có ở R01, R02, R10.
   - Chuyện tai nghe và bạn khều có ở R01, R08.
   - Câu "cái đó không phải việc của [tôi/chị/mình/tui]" xuất hiện ở 6/11 bản ghi.
   - Nhịp "tuần đầu loạn, qua tuần hai, ba thì quen" xuất hiện ở 7 bản ghi.
9. **Bối cảnh W9** (Lê Văn Việt, Xa lộ Hà Nội, F-Bus) lặp ở gần như mọi bản ghi. Đây là tiếng vọng từ prompt.
10. **Ghi chú phương pháp, chuyển từ F-26 đã bỏ.**
    - Cả 5/5 GV kể biết chuyện khóa sau ngày qua đồng nghiệp hoặc bộ môn. Điều này khớp quá sát với nhãn "Reported, chưa kiểm chứng" của W7.
    - Phía SV thì biết mốc 20% và mốc 5 phút qua các kênh chính thức: tuần định hướng (R07-SV-08đs, R09-SV-08đs, R10-SV-13), slide buổi đầu môn (R07-P1), GV nhắc ở buổi đầu môn (R08-SV-08đs). Riêng R06 biết qua anh ở phòng trọ bên cạnh (R06-SV-08đs).
    - Không có bằng chứng cho vế "các phiên bản kể lại không giống nhau".
11. **R11 phụ trách khối Kinh tế.** Không dùng R11 để xác nhận trực tiếp ca của R04, R05 hay R07.
12. **R08 tự nhận ít để ý** (R08-P1). Lời kể của R08 về phòng học chỉ nên dùng ở mức thấp.
13. **Ca lẻ R11-CB-11.** Cả lớp vẫn "Not yet" sau khi đã qua ngày; GV gửi danh sách "theo ghi chép của cô"; lý do bị giữ kín. Chỉ có một ca nên không xếp vào phát hiện nào. Ca này được tách khỏi F-05 và F-06.
14. **Bộ câu hỏi tạo ra phát hiện (CR-G2).**
    - GV-10 dẫn tới F-22.
    - GV-11, SV-10 và CB-03 dẫn tới F-01.
    - GV-13 dẫn tới F-31.
    - GV-14đs và SV-14đs dẫn tới F-30b.
    - SV-04đs dẫn tới F-08.
    - GV-10đs và SV-09đs dẫn tới F-29.

    Ngoài ra, gần như mỗi đặc điểm persona thành một phát hiện riêng. Lần biên tập này không đọc prompt persona (AI-06), nên chưa đo được mức trùng.
15. **Giới hạn của các nguồn Desk dùng để ghi Mạnh.** V01, V02 và V13 là bản sao tài liệu trường trên Studocu, chưa rõ thuộc cơ sở nào. V04 là nguồn chính thức nhưng của cơ sở Cần Thơ. Vì vậy cả bốn vế Mạnh đều cần được xác nhận lại cho cơ sở HCM.

---

## 5. Xử lý phản biện

Mã CR theo thứ tự dòng trong bảng mục 1 của RES-CRITIQUE. Mỗi dòng đã được đối chiếu lại với bản ghi trước khi quyết định. Dòng "Áp dụng một phần" có ghi rõ phần không áp dụng và lý do.

| Dòng phản biện | Mã F/N | Áp dụng / Không áp dụng | Lý do |
|---|---|---|---|
| CR-01 | F-01 | Áp dụng | Đã đối chiếu. Các câu GV-11, SV-10, CB-03 chỉ hỏi về lần bị đổi hoặc bị ghi sai. R10-SV-06đs, R10-P1, R04-P1 và R11-CB-10 đúng như phản biện nêu. Cặp R01-GV-11 và R10-SV-10 cùng thứ Năm 1/10, ca 3, khoảng 7 giờ tối (khác môn). Đã bỏ "được kể nhiều nhất" và "không phải khai gian", tách F-01a và F-01b, gắn dấu \*. Vế "loại lỗi có xảy ra" giữ Mạnh, nay có thêm Desk V01, V02. |
| CR-02 | F-02 | Áp dụng một phần | Đồng ý R03 thuộc phía ủng hộ (R03-GV-11), đồng ý tách nguyên nhân cụ thể (chỉ Simulated), và gắn cờ chi tiết tai nghe. **Không áp dụng** đề nghị coi phần trùng W6 là "không tính": theo quy tắc của RES-WORLD (W được dùng qua nguồn gốc O-nn) và theo thang v2, vế này được ghi Mạnh nhờ O-01.3 và O-01.4 Observed, còn R không góp gì vào độ mạnh. F-02b đếm 4 GV chứ không phải 5, vì R03 không nêu nguyên nhân. |
| CR-03 | F-03 | Áp dụng | R01-GV-06 bắt được ngay hai em Minh. R01-P3: "gần đây thì tôi không nhớ có lần nào". Chỉ có R02 xác nhận. Đã hạ xuống Giả thuyết – Yếu, R01 chuyển sang phía trái chiều. |
| CR-04 | F-04 | Áp dụng | R04-GV-13đs: "Có lần nhớ, có lần quên". R04-GV-09: buổi 12/10 không quên. R01 chờ là vì các em đi F-Bus (R01-GV-04). Đã sửa câu, bỏ vế R01, gắn cờ lời kể trôi chảy. |
| CR-05 | F-05 | Áp dụng | R11-CB-11 là buổi không được điểm danh, lý do bị giữ kín. R04 có ghi giấy nhớ rồi sửa sau (R04-GV-04, R04-GV-11). Đã thêm R04, bỏ R11, ghi rõ ý "dò từng dòng" chỉ đến từ R01. |
| CR-06 | F-06 | Áp dụng một phần | Đồng ý tách R11-CB-11, sửa câu "che lỗi" theo R10-P2, và đếm lại 2 GV, 3 SV. **Không áp dụng** phần "Giữ Mạnh": phát hiện chỉ dựa trên Simulated, và Desk V03 chỉ chạm tới việc nhập sau giờ ở mức Suy luận, nên theo thang v2 chỉ được Giả thuyết – Vừa. |
| CR-07 | F-07 | Áp dụng | R09-SV-09 vế sau đúng là trái chiều. R10-SV-10: mẹ là người phát hiện. R05-GV-13đs nói về thời trước 2022. Đã tách F-07a (Giả thuyết – Vừa). Thêm F-07b ghi Mạnh nhờ Desk V13 và V01, một điểm mà phản biện không nêu. |
| CR-08 | F-08 | Áp dụng | Câu SV-04đs có tính gợi ý. Đã đổi "không có cách nào" thành "thường không thấy", nêu R05 là ngoại lệ, và ghi cờ. |
| CR-09 | F-09 | Áp dụng | R05-GV-04 và R05-GV-06: Quân đáp nhỏ được bắt lại nhờ việc đọc to danh sách vắng. R09-SV-12: "cũng chỉ một lần thôi". Đã bỏ vế "nói nhỏ", tách F-09a và F-09b, cả hai ở mức Giả thuyết – Yếu. |
| CR-10 | F-10 | Áp dụng | R11-CB-04 và R11-CB-09đs: đơn đóng sau hơn 1 ngày làm việc và đó là ca R11 "muốn nhất". Đã sửa khoảng thời gian và bỏ vế "cán bộ tốn công". Giữ Mạnh cho vế hai đường sửa, nay dựa trên Desk V01, V02, V13 chứ không dựa trên Simulated. |
| CR-11 | F-11 | Áp dụng | R05-GV-13 không có ý tự trách. Đã tách F-11a (R07, R05) và F-11b (R04). Thêm R04 vào phía trái chiều của F-11a, vì R04 tự gửi phòng đào tạo. |
| CR-12 | F-12 | Áp dụng | R08 nộp đơn miễn chứ không phải khiếu nại, và có nhận mail "đã nhận" (R08-SV-14đs). R08-P3 không theo dõi gì. R11-P3 là bằng chứng trái chiều. Đã hạ xuống Giả thuyết – Yếu và giới hạn câu ở R07. |
| CR-13 | F-13 | Áp dụng | R11-CB-10đs có tổng hợp lời của hai bên. Đã sửa câu, tách F-13a và F-13b. |
| CR-14 | F-14 | Áp dụng | Câu của R03-GV-11 là giả định. R11-P1 là email của cán bộ ở giai đoạn đã qua ngày. SV của R04 email vào sáng hôm sau. Đã hạ xuống Giả thuyết – Yếu, viết thành giả thuyết, sửa danh sách trái chiều thành R01, R02, R10. |
| CR-15 | F-15 | Áp dụng một phần | Đồng ý rằng các ca trễ vượt xa ngưỡng chỉ cho thấy W5, rằng chỉ R04 có ca sát ngưỡng, và đã hạ xuống Giả thuyết – Yếu. **Không áp dụng** việc coi R05-GV-11 là trái chiều: Hưng vào lúc 7g05, vẫn trong 5 phút, nên được cho ngồi là đúng quy tắc chứ không phải nới tay. R01 (chờ 5 phút) được ghi là "cách làm khác", vì SV vào lúc 7g22 vẫn bị tính vắng. |
| CR-16 | F-16 | Áp dụng một phần | Đồng ý R04 bị đếm ở hai phía (nay chỉ ở phía ủng hộ), đồng ý khung chuyện là W5 cộng W9, và đã hạ xuống Giả thuyết – Vừa. **Không áp dụng** việc loại R06: ở R06-SV-14đs, R06 ra trạm từ 6 giờ vì sợ lỡ chuyến, và đó là hành vi đối phó với rủi ro trễ. R06 được giữ ở mức gián tiếp, có ghi rõ R06 không nhắc tới mốc 5 phút. |
| CR-17 | F-19 | Áp dụng | Đã hạ xuống Giả thuyết – Yếu. Bản này không đọc prompt persona nên không kiểm được ý "đặc điểm cài sẵn". Lý do hạ chính là mỗi bối cảnh chỉ có một người (R01 khi nhập FAP, R09 khi xem màn chiếu). |
| CR-18 | F-20 | Áp dụng | R02 và R04 không nói mất bao lâu. R03 dạy 4 ca mỗi tuần, và lý do R03 tự nêu là "hai lớp sáu chục đứa". |
| CR-19 | F-21 | Áp dụng | R01-P1 đã đính chính: chuyện "hay vắng" R01 biết nhờ tờ giấy. |
| CR-20 | F-22 | Áp dụng | R03-GV-10 chỉ nói về buổi đó. R02 và R03 cùng tiêu chí bấm lưu. Đã ghi cờ cho câu GV-10. |
| CR-21 | F-26 | Áp dụng | Đã kiểm: R07-SV-08đs, R09-SV-08đs, R10-SV-13 (tuần định hướng); R07-P1 (slide buổi đầu môn); R08-SV-08đs (GV nhắc buổi đầu). Phần của GV là tiếng vọng W7. Đã bỏ phát hiện và chuyển thành ghi chú phương pháp (mục 4.10). |
| CR-22 | F-27 | Áp dụng | R08-SV-08 có mở FAP vào tuần 3 và có nhìn các ô absent. |
| CR-23 | F-28 | Áp dụng | R07-SV-08: R07 vắng 1 buổi, "xanh là còn yên", tức là không ở gần ngưỡng. |
| CR-24 | F-29 | Áp dụng một phần | Đồng ý sửa câu và đếm lại 4 GV cộng 1 SV (R10). R03 không được hỏi câu này (R03-GV-10đs). R11 nói về việc xử lý đơn. **Không áp dụng** phần "Giữ Mạnh cho phần của giảng viên", vì phần đó chỉ dựa trên Simulated (thang v2). |
| CR-25 | F-30 | Áp dụng | R04 và R05 nêu lý do rõ. R01, R09, R10, R11 đổi do bị áp đặt. Nhịp "tuần đầu loạn" lặp ở nhiều bản ghi. Đã tách F-30a (Giả thuyết – Vừa) và F-30b (Giả thuyết – Yếu, gắn cờ); R01 chỉ còn ở phía trái chiều. |
| CR-26 | F-31 | Áp dụng một phần | Đồng ý rằng ở R01-GV-13đs, R01 dần nhận ra chứ không phải sau một sự cố. Đã đếm lại 2 GV cộng 2 SV, gắn cờ loại 7, chuyển R01 sang trái chiều. **Không áp dụng** phần "Giữ Mạnh" (thang v2). |
| CR-27 | F-32 | Áp dụng | R03-GV-14 và R03-GV-14đs: R03 đổi sang Zalo dễ dàng; việc chưa đăng ký mạng là do thiếu thời gian. Chỉ còn R01, ở mức Giả thuyết – Yếu. |
| CR-28 | N-01 | Áp dụng một phần | Đã giữ N-01 và ghi độ mạnh nguồn. **Không áp dụng** nhận định rằng mốc "trong ngày" chỉ dựa trên W7: Desk V01 và V13 ghi SV phải báo GV trong ngày (môn thường), nên mốc này có căn cứ ở mức quy định. Chỉ phần khóa kỹ thuật là chưa kiểm chứng, và N-01 v2 không dựa vào phần đó. |
| CR-29 | N-02 | Áp dụng | Đã gộp vào N-04. Ghi chú: R01-GV-11đs không chắc lỗi ngày 1/10 là do không nghe hay do lộn dòng, nên nhận định "mọi ca không nghe đều được bắt lại" chỉ đúng với các ca có nguyên nhân rõ. N-04 v2 bao cả hai trường hợp. |
| CR-30 | N-03 | Áp dụng | Đã bỏ vế "không phải trông vào trí nhớ". Độ mạnh nguồn là Giả thuyết – Vừa (F-04). |
| CR-31 | N-04 | Áp dụng | Đã nhận phần gộp từ N-02 và ghi độ mạnh nguồn (F-03 Yếu; F-01b và F-05 Vừa). |
| CR-32 | N-05 | Áp dụng | Khi viết lại theo kết quả ("SV đến trong 5 phút không bị tính vắng oan") thì nhu cầu này trùng với N-03, nên đã gộp vào N-03. Bằng chứng tranh chấp giờ đến (R04-P1, R04-GV-07, R11-CB-10) được nêu trong N-03, ở mức Yếu. |
| CR-33 | N-06 | Áp dụng | Đã sửa câu, ghi nguồn là Yếu, và ghi khả năng việc xem kết quả đơn trên FAP đã có sẵn (R11-CB-09). |
| CR-34 | N-07 | Áp dụng | Đã gộp vào N-01 thành vế "lời báo tới được GV". Vế này mang mức Yếu, vì F-14 không có ca thật. |
| CR-35 | N-08 | Áp dụng | Đã chuyển thành nhu cầu của SV, bỏ vế "căn cứ ngoài trí nhớ của giảng viên", ghi mức Yếu. R11 không nêu nhu cầu này (R11-CB-07, R11-CB-13). |
| CR-36 | N-09 | Áp dụng | Đã viết lại theo kết quả và hạ xuống Yếu. Thêm Desk V04 và V14: báo cáo điểm danh trên FAP đã có phần trăm vắng ở cuối mỗi môn, khớp với R10-SV-08đs. |
| CR-37 | N-10 | Áp dụng một phần | Đã hạ xuống Yếu. **Không áp dụng** việc bỏ hẳn mốc thời gian, vì quy tắc viết nhu cầu đòi phải có "trước khi nào". Giữ mốc "ngay trong buổi học đó" vì R09-P3 kể mình bồn chồn, nghe giảng không tập trung cho tới giờ giải lao. Đã ghi rõ đây là 1 SV, 1 lần, và R09 tự giải quyết bằng myFAP lúc giải lao. |
| CR-38 | N-11 | Áp dụng | Đã bỏ F-22 và F-29 khỏi cột nguồn, giữ vế "mạng chậm" theo F-17, và ghi chú rằng nhu cầu này gần với ràng buộc. |
| CR-39 | N-12 | Áp dụng | Ghi mức Yếu và ghi rõ chính sách chưa kiểm chứng. |
| CR-40 | N-13 | Áp dụng | Ghi mức Yếu. |
| CR-41 | N-14 | Áp dụng | Đã thu hẹp chủ ngữ và bỏ vế giả định có một cách ghi nhận mới. |
| CR-42 | N-15 | Áp dụng | Đã bỏ khỏi danh sách nhu cầu; nội dung chuyển sang RB-1. |
| CR-43 | §1 tổng | Áp dụng | R06#07 (trùng W4) và R10#11 (trùng W7) được ghi rõ là "trùng một phần": nội dung trùng W, còn phần người đó biết thông tin qua đâu thì vượt W nên hai ghi chú vẫn được giữ. Danh sách 7 ghi chú trùng hoàn toàn giữ nguyên như v1. |

**Tổng 43 dòng:** 35 dòng áp dụng · 8 dòng áp dụng một phần (CR-02, CR-06, CR-15, CR-16, CR-24, CR-26, CR-28, CR-37) · **0 dòng không áp dụng toàn bộ.** Trong 8 dòng áp dụng một phần, có 3 dòng (CR-06, CR-24, CR-26) chỉ vướng phần "giữ Mạnh", điều mà thang v2 không cho phép. 5 dòng còn lại có phần không áp dụng vì lý do bằng chứng.

**Nhận xét ngoài bảng của RES-CRITIQUE**

| Nhận xét | Phạm vi | Áp dụng / Không áp dụng | Lý do |
|---|---|---|---|
| CR-G1 (các người trả lời không độc lập; đếm theo kịch bản; không gắn Mạnh cho phát hiện chỉ dựa trên Simulated) | Toàn bộ | Áp dụng | Đã thành thang độ mạnh v2, cách đếm theo kịch bản, và dấu \*. |
| CR-G2 (đặc điểm persona và bộ câu hỏi là nguồn tiếng vọng) | Toàn bộ | Áp dụng | Đã gắn cờ ở F-05, F-08, F-19, F-22, F-29, F-30b, F-31 và ghi ở mục 4.14. Chưa đo được mức trùng với persona, vì prompt AI-06 nằm ngoài phạm vi đọc của lần này. |
| CR-G3 (lời kể trôi chảy và tiện cho kết luận) | Toàn bộ | Áp dụng | Đã gắn cờ ở F-04 và F-10b. Bộ dữ liệu chỉ được dùng để đặt giả thuyết (mục 7). |
| Mục 2 của RES-CRITIQUE (F-17, F-18, F-23, F-24, F-25 đứng vững) | F-17, F-18, F-23, F-24, F-25 | Áp dụng một phần | Giữ câu và số đếm. F-17 và F-18 hạ xuống Giả thuyết – Vừa do thang v2. Ở F-23, bỏ hai nguồn ủng hộ gián tiếp R01-GV-12đs và R05-GV-12đs theo CR-G1, thay bằng R03-GV-14đs, R05-GV-12 và R06-SV-08. |

---

## 6. Độ phủ câu hỏi nghiên cứu (cập nhật)

| RQ | Nội dung | Phát hiện trả lời | Khoảng trống |
|---|---|---|---|
| RQ-1 | Cách giảng viên điểm danh | F-02a, F-02b, F-04, F-05, F-17, F-20, F-22 | Tỷ lệ GV dùng giấy so với GV đánh thẳng trên FAP: UNKNOWN |
| RQ-2 | Sai sót, tranh cãi | F-01a, F-01b, F-02, F-03, F-04, F-05, F-15 | Tần suất sai trên mỗi buổi hoặc mỗi kỳ: UNKNOWN. Việc đáp thay đã thực sự xảy ra hay chưa: UNKNOWN |
| RQ-3 | Thiết bị | F-17, F-18, F-05, F-19 | Thiết bị của GV thỉnh giảng ngoài R03: UNKNOWN |
| RQ-4 | Ghi lên FAP | F-05, F-06, F-10a, F-22 | Ai thao tác sửa sau khi đơn được duyệt: UNKNOWN (R11-CB-08đs từ chối nói; Desk không có văn bản). FAP có khóa kỹ thuật sau ngày không, và giờ chốt là lúc nào: UNKNOWN (Desk: không đủ bằng chứng) |
| RQ-5 | SV biết tình trạng chuyên cần của mình | F-06, F-07a, F-07b, F-08, F-09, F-24, F-25, F-28 | Phần trăm vắng: đã có Desk V04, V14 (báo cáo điểm danh), ở HCM chưa xác nhận riêng. Tỷ lệ SV thực sự xem sau buổi học: UNKNOWN |
| RQ-6 | Ràng buộc môi trường, khả năng tiếp cận | F-02b, F-09b, F-16, F-17, F-18, F-19 | SV khiếm thính hoặc có khuyết tật khác: UNKNOWN |
| RQ-7 | Khiếu nại | F-10a, F-10b, F-11, F-12, F-13, F-14, F-28 | Hạn nộp: đã có Desk V01 (môn thường báo GV trong ngày; môn LUK làm đơn trong 2 ngày). Kênh chuẩn: đơn trên FAP (V01, khớp R11). Cả hai chưa xác nhận riêng cho HCM |
| RQ-8 | Buổi suôn sẻ | F-29 (một phần F-22) | — |
| RQ-9 | Gắn bó với cách cũ | F-30a, F-30b, F-31, F-32, RB-1, bảng "cái giá" ở mục 5 của v1 | Thái độ của GV thỉnh giảng ngoài R03 và của GV lớn tuổi ngoài R01: UNKNOWN |

---

## 7. Giả thuyết cần kiểm chứng với người thật

Mỗi câu hỏi về một việc đã xảy ra, không gợi sẵn câu trả lời, và hỏi được trong cuộc trò chuyện 5 phút hoặc đưa vào Google Form. Cột "Lựa chọn gợi ý" chỉ dùng khi làm Form; khi trò chuyện trực tiếp thì để người trả lời tự kể.

| # | Mã | Giả thuyết đang kiểm | Hỏi ai | Câu hỏi | Lựa chọn gợi ý (Form) |
|---|---|---|---|---|---|
| 1 | F-07a, N-01 | Chỉ một phần SV tự xem kết quả điểm danh trong ngày học. | SV | Sau buổi học gần nhất của bạn, bạn có mở FAP hoặc myFAP để xem buổi đó được ghi thế nào không? Nếu có, vào lúc nào? | Không xem · Ngay trong buổi · Sau buổi, trong cùng ngày · Từ hôm sau trở đi · Không nhớ |
| 2 | F-01a, F-07b | Có SV có mặt mà bị ghi vắng, và người phát hiện là SV hoặc người nhà, không phải GV hay phòng đào tạo. | SV | Từ đầu năm học tới giờ, có lần nào bạn có mặt mà bị ghi vắng không? Nếu có, ai là người thấy điều đó đầu tiên? | Chưa từng · Có, tôi tự thấy · Có, bạn bè báo · Có, phụ huynh báo · Có, GV báo · Có, phòng đào tạo báo |
| 3 | F-10a, F-10b, F-11a | Khi lỗi chỉ được phát hiện sau ngày, việc sửa mất nhiều ngày, và SV thường là người phải làm đơn kể cả khi GV đã nhận lỗi. | SV hoặc GV | Lần gần nhất một buổi bị ghi sai mà chỉ được phát hiện sau ngày học: ai là người làm đơn hoặc liên hệ phòng đào tạo, và bao nhiêu ngày sau thì FAP được đổi? | Người làm: SV tự làm đơn · GV tự liên hệ · Cả hai · Chưa gặp. Số ngày: 1–2 · 3–5 · hơn 5 · không nhớ |
| 4 | F-04, N-03 | SV đến hợp lệ sau lượt hỏi lại có lúc không được sửa thành có mặt vì GV đã chuyển sang dạy. | GV | Trong tuần vừa rồi, có SV nào vào lớp trong 5 phút đầu nhưng sau khi thầy/cô đã đọc tên và hỏi lại không? Thầy/cô ghi cho em đó vào lúc nào? | Không có · Sửa ngay lúc em vào · Sửa cuối buổi · Sửa sau buổi · Quên, em đó báo lại sau |
| 5 | F-06 | Có GV đưa kết quả lên FAP sau khi buổi học đã kết thúc. | GV | Tuần vừa rồi, có buổi nào thầy/cô đưa kết quả điểm danh lên FAP sau khi buổi học đã kết thúc không? Nếu có, vì sao? | Không · Có 1 buổi · Có từ 2 buổi trở lên. Lý do: dạy liền nhiều slot · mạng hoặc máy · đến lớp trễ · ghi trên giấy trước · khác |
| 6 | F-14, N-01 | Lời báo sai trong ngày có thể không tới GV kịp nếu đi qua email trường. | GV | Lần gần nhất thầy/cô mở hộp thư email trường là khi nào? Nếu một SV cần báo điểm danh sai trong ngày, thầy/cô thường thấy tin qua kênh nào sớm nhất? | Lần mở gần nhất: hôm nay · trong tuần · lâu hơn. Kênh: email trường · Zalo · gặp trực tiếp · khác |
| 7 | F-08, F-09b, N-10 | Trong lớp, SV thường không biết chắc mình đã được ghi có mặt; người ngồi xa càng khó biết. | SV | Ở buổi học gần nhất, bạn biết chắc mình được ghi có mặt vào lúc nào? Hôm đó bạn ngồi dãy thứ mấy? | Lúc đáp và thấy GV gật đầu · Khi GV đọc hoặc chiếu danh sách vắng · Khi tự xem FAP hoặc myFAP · Tới giờ vẫn chưa biết chắc. Dãy: 1–2 · 3–4 · 5 trở xuống |
| 8 | F-28, N-09 | SV biết mức vắng của mình so với ngưỡng 20%, và biết qua báo cáo trên FAP. | SV | Ở một môn bạn đang học, bạn đã vắng bao nhiêu buổi hoặc bao nhiêu phần trăm? Bạn lấy con số đó ở đâu? | Biết, xem trên FAP web · Biết, xem trên myFAP · Biết, tự đếm · Biết, qua công cụ khác · Không biết |
