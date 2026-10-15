# Bảng liên kết prototype (trang 06 Prototype)

Bảng này do script đọc thẳng các `reactions` trên trang 06 của file Figma `9yDa2ylfREmndW1mK1hf7w` tạo ra, tối 15/10/2026, để người chấm không mở được chế độ Present vẫn kiểm được từng liên kết. Không có dòng nào gõ tay. Lý do làm: bản chấm chéo bằng Codex (AI-29) chỉ cho 5/10 phần prototype vì không chạy được prototype và repo không có bằng chứng liên kết (CR-66).

## Số liệu

| Mục | Giá trị |
|---|---|
| Frame trên trang 06 | 84 (kể cả 6 overlay, tên bắt đầu “OV”) |
| Điểm bắt đầu (flow starting point) | 12 |
| Tương tác | 166 |
| Liên kết trỏ tới frame không tồn tại | 0 |
| Frame không có lối ra | 0 |
| Frame không có lối vào (trừ điểm bắt đầu) | 0 |

Số trong ngoặc vuông là thứ tự frame trên trang 06. Một màn có thể có nhiều bản sao (ví dụ “lần 1”, “lần 2”, “sau Vy”) để mỗi luồng đi đúng một đường, không phụ thuộc trạng thái trước đó.

## Điểm bắt đầu

| Luồng | Frame đầu |
|---|---|
| FL-1 · Giảng viên điểm danh tại lớp | [00] SC-01 · Đăng nhập |
| FL-1b · Mở điểm danh từ xa | [17] SC-02 · Lịch dạy hôm nay |
| FL-1 lỗi · Sai tài khoản | [21] SC-01 · Đăng nhập · Lỗi tài khoản |
| FL-2 · Sinh viên quét mã | [22] SC-09 · Hôm nay (sinh viên) · Có phiên đang mở |
| FL-2 lỗi · Camera và mất mạng | [31] SC-10 · Quét mã · Chưa có quyền camera |
| FL-2 · Sinh viên báo sai | [38] SC-09 · Hôm nay (sinh viên) · Buổi tối, có buổi Vắng |
| FL-2 phục hồi · Bị từ chối | [47] SC-14 · Báo sai của tôi · Bị từ chối |
| FL-2 phục hồi · Quá hạn (K4) | [49] SC-12 · Chi tiết buổi học · Đã qua hạn |
| FL-3 · Giảng viên xử lý báo sai | [51] SC-02 · Lịch dạy hôm nay · Có báo sai mới |
| FL-3 thứ tự khác · Mở báo sai của Vy trước | [65] SC-08 · Chi tiết báo sai · Ngô Thanh Vy (xử lý trước) |
| FL-1 lỗi · Laptop chưa kết nối | [77] SC-03 · Phiên điểm danh · Laptop chưa kết nối |
| FL-1 · Số quét lớn hơn, còn lượt cần xem | [80] SC-04 · Đối chiếu sĩ số · Số quét lớn hơn số người (nhánh cờ) |

## Mọi tương tác

| Frame | Phần tử | Kích hoạt | Đi tới |
|---|---|---|---|
| [00] SC-01 · Đăng nhập | Đăng nhập bằng Google | Bấm | [72] SC-01 · Đăng nhập · Đang đăng nhập (CMP-01 Loading) |
| [01] SC-02 · Lịch dạy hôm nay · Đang tải | cả frame | Tự chuyển sau thời gian chờ | [02] SC-02 · Lịch dạy hôm nay |
| [01] SC-02 · Lịch dạy hôm nay · Đang tải | hotspot · tab right | Bấm | [14] SC-07 · Báo sai hôm nay · Trống |
| [02] SC-02 · Lịch dạy hôm nay | PRM393 · Slot 1 · P.205 | Bấm | [03] SC-03 · Phiên điểm danh |
| [02] SC-02 · Lịch dạy hôm nay | Mở từ xa | Bấm | [18] SC-03 · Phiên điểm danh · Mở từ xa |
| [02] SC-02 · Lịch dạy hôm nay | Mở điểm danh | Bấm | [03] SC-03 · Phiên điểm danh |
| [02] SC-02 · Lịch dạy hôm nay | hotspot · tab right | Bấm | [14] SC-07 · Báo sai hôm nay · Trống |
| [03] SC-03 · Phiên điểm danh | Đóng QR và kiểm tra | Bấm | [15] OV · Dialog đóng QR sớm (overlay) |
| [03] SC-03 · Phiên điểm danh | hotspot · back | Bấm | [73] SC-02 · Lịch dạy hôm nay · QR đang mở |
| [04] SC-03 · Phiên điểm danh · QR đã đóng | Đối chiếu sĩ số | Bấm | [05] SC-04 · Đối chiếu sĩ số |
| [04] SC-03 · Phiên điểm danh · QR đã đóng | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [05] SC-04 · Đối chiếu sĩ số | − | Bấm | [06] SC-04 · Đối chiếu sĩ số · Số quét lớn hơn số người |
| [05] SC-04 · Đối chiếu sĩ số | + | Bấm | [75] SC-04 · Đối chiếu sĩ số · Số quét nhỏ hơn số người |
| [05] SC-04 · Đối chiếu sĩ số | Kiểm tra ngẫu nhiên | Bấm | [07] SC-05 · Kiểm tra ngẫu nhiên |
| [05] SC-04 · Đối chiếu sĩ số | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [06] SC-04 · Đối chiếu sĩ số · Số quét lớn hơn số người | + | Bấm | [05] SC-04 · Đối chiếu sĩ số |
| [06] SC-04 · Đối chiếu sĩ số · Số quét lớn hơn số người | Kiểm tra ngẫu nhiên | Bấm | [07] SC-05 · Kiểm tra ngẫu nhiên |
| [06] SC-04 · Đối chiếu sĩ số · Số quét lớn hơn số người | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [07] SC-05 · Kiểm tra ngẫu nhiên | Ảnh FAP | Bấm | [08] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 |
| [07] SC-05 · Kiểm tra ngẫu nhiên | Ảnh FAP | Bấm | [08] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 |
| [07] SC-05 · Kiểm tra ngẫu nhiên | Ảnh FAP | Bấm | [08] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 |
| [07] SC-05 · Kiểm tra ngẫu nhiên | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [08] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 | Xem lại và xác nhận | Bấm | [09] SC-06 · Xem lại và xác nhận |
| [08] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [09] SC-06 · Xem lại và xác nhận | Ghi tay thêm sinh viên | Bấm | [71] OV · Sheet Ghi tay thêm sinh viên (overlay) |
| [09] SC-06 · Xem lại và xác nhận | Xác nhận và gửi lên FAP | Bấm | [16] OV · Dialog xác nhận gửi lên FAP (overlay) |
| [09] SC-06 · Xem lại và xác nhận | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [10] SC-06 · Xem lại và xác nhận · Chờ điền lên FAP | Về lịch dạy | Bấm | [11] SC-02 · Lịch dạy hôm nay · Sau slot 1, chờ điền lên FAP |
| [10] SC-06 · Xem lại và xác nhận · Chờ điền lên FAP | Thử điền lại | Bấm | [12] SC-06 · Xem lại và xác nhận · Đã lên FAP |
| [11] SC-02 · Lịch dạy hôm nay · Sau slot 1, chờ điền lên FAP | PRM393 · Slot 1 · P.205 | Bấm | [10] SC-06 · Xem lại và xác nhận · Chờ điền lên FAP |
| [11] SC-02 · Lịch dạy hôm nay · Sau slot 1, chờ điền lên FAP | hotspot · tab right | Bấm | [14] SC-07 · Báo sai hôm nay · Trống |
| [12] SC-06 · Xem lại và xác nhận · Đã lên FAP | Về lịch dạy | Bấm | [13] SC-02 · Lịch dạy hôm nay · Sau slot 1, đã lên FAP |
| [13] SC-02 · Lịch dạy hôm nay · Sau slot 1, đã lên FAP | PRM393 · Slot 1 · P.205 | Bấm | [12] SC-06 · Xem lại và xác nhận · Đã lên FAP |
| [13] SC-02 · Lịch dạy hôm nay · Sau slot 1, đã lên FAP | hotspot · tab right | Bấm | [14] SC-07 · Báo sai hôm nay · Trống |
| [14] SC-07 · Báo sai hôm nay · Trống | hotspot · tab left | Bấm | Quay lại màn trước (Back) |
| [14] SC-07 · Báo sai hôm nay · Trống | hotspot · Empty state>button | Bấm | Quay lại màn trước (Back) |
| [15] OV · Dialog đóng QR sớm | hotspot · Hủy | Bấm | Đóng overlay |
| [15] OV · Dialog đóng QR sớm | hotspot · Đóng QR | Bấm | [04] SC-03 · Phiên điểm danh · QR đã đóng |
| [16] OV · Dialog xác nhận gửi lên FAP | hotspot · Hủy | Bấm | Đóng overlay |
| [16] OV · Dialog xác nhận gửi lên FAP | hotspot · Gửi lên FAP | Bấm | [10] SC-06 · Xem lại và xác nhận · Chờ điền lên FAP |
| [17] SC-02 · Lịch dạy hôm nay | Mở từ xa | Bấm | [18] SC-03 · Phiên điểm danh · Mở từ xa |
| [17] SC-02 · Lịch dạy hôm nay | Mở điểm danh | Bấm | [03] SC-03 · Phiên điểm danh |
| [17] SC-02 · Lịch dạy hôm nay | hotspot · tab right | Bấm | [14] SC-07 · Báo sai hôm nay · Trống |
| [18] SC-03 · Phiên điểm danh · Mở từ xa | Mã đang hiện trên màn hình l | Bấm | [19] SC-03 · Màn hình lớp P.205 (web trên TV phòng) |
| [18] SC-03 · Phiên điểm danh · Mở từ xa | Tôi đã vào lớp: đóng QR | Bấm | [20] SC-03 · Phiên điểm danh · QR đã đóng, mở từ xa (K1b) |
| [18] SC-03 · Phiên điểm danh · Mở từ xa | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [19] SC-03 · Màn hình lớp P.205 (web trên TV phòng) | cả frame | Bấm | Quay lại màn trước (Back) |
| [20] SC-03 · Phiên điểm danh · QR đã đóng, mở từ xa (K1b) | Đối chiếu sĩ số | Bấm | [05] SC-04 · Đối chiếu sĩ số |
| [20] SC-03 · Phiên điểm danh · QR đã đóng, mở từ xa (K1b) | hotspot · back | Bấm | [76] SC-02 · Lịch dạy hôm nay · Chờ xác nhận (mở từ xa, K1b) |
| [21] SC-01 · Đăng nhập · Lỗi tài khoản | Đăng nhập bằng Google | Bấm | [72] SC-01 · Đăng nhập · Đang đăng nhập (CMP-01 Loading) |
| [22] SC-09 · Hôm nay (sinh viên) · Có phiên đang mở | Quét mã điểm danh | Bấm | [23] SC-10 · Quét mã (lần 1) |
| [22] SC-09 · Hôm nay (sinh viên) · Có phiên đang mở | hotspot · tab right | Bấm | [30] SC-14 · Báo sai của tôi · Trống |
| [23] SC-10 · Quét mã (lần 1) | close | Bấm | Quay lại màn trước (Back) |
| [23] SC-10 · Quét mã (lần 1) | viewfinder 240 | Bấm | [24] SC-11 · Kết quả quét · Đang xác thực (lần 1) |
| [23] SC-10 · Quét mã (lần 1) | Không quét được? | Bấm | [59] OV · Sheet Không quét được? (overlay) |
| [24] SC-11 · Kết quả quét · Đang xác thực (lần 1) | cả frame | Tự chuyển sau thời gian chờ | [25] SC-11 · Kết quả quét · Mã hết hạn |
| [25] SC-11 · Kết quả quét · Mã hết hạn | Không quét được? | Bấm | [59] OV · Sheet Không quét được? (overlay) |
| [25] SC-11 · Kết quả quét · Mã hết hạn | hotspot · Error state>button | Bấm | [26] SC-10 · Quét mã (lần 2) |
| [25] SC-11 · Kết quả quét · Mã hết hạn | hotspot · back | Bấm | [22] SC-09 · Hôm nay (sinh viên) · Có phiên đang mở |
| [26] SC-10 · Quét mã (lần 2) | close | Bấm | Quay lại màn trước (Back) |
| [26] SC-10 · Quét mã (lần 2) | viewfinder 240 | Bấm | [27] SC-11 · Kết quả quét · Đang xác thực (lần 2) |
| [26] SC-10 · Quét mã (lần 2) | Không quét được? | Bấm | [59] OV · Sheet Không quét được? (overlay) |
| [27] SC-11 · Kết quả quét · Đang xác thực (lần 2) | cả frame | Tự chuyển sau thời gian chờ | [28] SC-11 · Kết quả quét · Thành công |
| [28] SC-11 · Kết quả quét · Thành công | Về Hôm nay | Bấm | [29] SC-09 · Hôm nay (sinh viên) · Đã quét, chờ xác nhận |
| [28] SC-11 · Kết quả quét · Thành công | hotspot · back | Bấm | [29] SC-09 · Hôm nay (sinh viên) · Đã quét, chờ xác nhận |
| [29] SC-09 · Hôm nay (sinh viên) · Đã quét, chờ xác nhận | hotspot · tab right | Bấm | [30] SC-14 · Báo sai của tôi · Trống |
| [30] SC-14 · Báo sai của tôi · Trống | hotspot · tab left | Bấm | Quay lại màn trước (Back) |
| [30] SC-14 · Báo sai của tôi · Trống | hotspot · Empty state>button | Bấm | Quay lại màn trước (Back) |
| [31] SC-10 · Quét mã · Chưa có quyền camera | hotspot · Error state>button | Bấm | [32] SC-10 · Quét mã |
| [32] SC-10 · Quét mã | close | Bấm | Quay lại màn trước (Back) |
| [32] SC-10 · Quét mã | viewfinder 240 | Bấm | [33] SC-11 · Kết quả quét · Đang xác thực (lần 1) |
| [32] SC-10 · Quét mã | Không quét được? | Bấm | [59] OV · Sheet Không quét được? (overlay) |
| [33] SC-11 · Kết quả quét · Đang xác thực (lần 1) | cả frame | Tự chuyển sau thời gian chờ | [34] SC-11 · Kết quả quét · Mất mạng |
| [34] SC-11 · Kết quả quét · Mất mạng | hotspot · Error state>button | Bấm | [35] SC-11 · Kết quả quét · Đang xác thực (lần 2) |
| [35] SC-11 · Kết quả quét · Đang xác thực (lần 2) | cả frame | Tự chuyển sau thời gian chờ | [36] SC-11 · Kết quả quét · Thành công |
| [36] SC-11 · Kết quả quét · Thành công | Về Hôm nay | Bấm | [37] SC-09 · Hôm nay (sinh viên) · Đã quét, chờ xác nhận |
| [36] SC-11 · Kết quả quét · Thành công | hotspot · back | Bấm | [37] SC-09 · Hôm nay (sinh viên) · Đã quét, chờ xác nhận |
| [37] SC-09 · Hôm nay (sinh viên) · Đã quét, chờ xác nhận | hotspot · tab right | Bấm | [30] SC-14 · Báo sai của tôi · Trống |
| [38] SC-09 · Hôm nay (sinh viên) · Buổi tối, có buổi Vắng | MAS291 · P.312 | Bấm | [39] SC-12 · Chi tiết buổi học |
| [38] SC-09 · Hôm nay (sinh viên) · Buổi tối, có buổi Vắng | Báo sai điểm danh | Bấm | [40] SC-13 · Gửi báo sai |
| [38] SC-09 · Hôm nay (sinh viên) · Buổi tối, có buổi Vắng | hotspot · tab right | Bấm | [46] SC-14 · Báo sai của tôi · Trống |
| [39] SC-12 · Chi tiết buổi học | Báo sai điểm danh | Bấm | [40] SC-13 · Gửi báo sai |
| [39] SC-12 · Chi tiết buổi học | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [40] SC-13 · Gửi báo sai | Gửi báo sai | Bấm | [41] SC-13 · Gửi báo sai · Đang gửi (lần 1) |
| [40] SC-13 · Gửi báo sai | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [41] SC-13 · Gửi báo sai · Đang gửi (lần 1) | cả frame | Tự chuyển sau thời gian chờ | [42] SC-13 · Gửi báo sai · Mất mạng |
| [42] SC-13 · Gửi báo sai · Mất mạng | Thử gửi lại | Bấm | [43] SC-13 · Gửi báo sai · Đang gửi (lần 2) |
| [42] SC-13 · Gửi báo sai · Mất mạng | hotspot · back | Bấm | [40] SC-13 · Gửi báo sai |
| [43] SC-13 · Gửi báo sai · Đang gửi (lần 2) | cả frame | Tự chuyển sau thời gian chờ | [44] SC-14 · Báo sai của tôi |
| [44] SC-14 · Báo sai của tôi | hotspot · tab left | Bấm | [61] SC-09 · Hôm nay (sinh viên) · Báo sai có kết quả (K3) |
| [45] SC-14 · Báo sai của tôi · Đã sửa | hotspot · tab left | Bấm | [62] SC-09 · Hôm nay (sinh viên) · Báo sai có kết quả, đã xem |
| [46] SC-14 · Báo sai của tôi · Trống | hotspot · tab left | Bấm | Quay lại màn trước (Back) |
| [46] SC-14 · Báo sai của tôi · Trống | hotspot · Empty state>button | Bấm | Quay lại màn trước (Back) |
| [47] SC-14 · Báo sai của tôi · Bị từ chối | Xem cách gửi đơn khiếu nại | Bấm | [48] SC-15 · Hướng dẫn đơn khiếu nại (từ chối) |
| [47] SC-14 · Báo sai của tôi · Bị từ chối | hotspot · tab left | Bấm | [64] SC-09 · Hôm nay (sinh viên) · Báo sai bị từ chối |
| [48] SC-15 · Hướng dẫn đơn khiếu nại (từ chối) | Mở FAP | Bấm | Mở liên kết FAP (ngoài app) |
| [48] SC-15 · Hướng dẫn đơn khiếu nại (từ chối) | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [49] SC-12 · Chi tiết buổi học · Đã qua hạn | Xem cách gửi đơn khiếu nại | Bấm | [50] SC-15 · Hướng dẫn đơn khiếu nại (quá hạn) |
| [50] SC-15 · Hướng dẫn đơn khiếu nại (quá hạn) | Mở FAP | Bấm | Mở liên kết FAP (ngoài app) |
| [50] SC-15 · Hướng dẫn đơn khiếu nại (quá hạn) | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [51] SC-02 · Lịch dạy hôm nay · Có báo sai mới | hotspot · tab right | Bấm | [52] SC-07 · Báo sai hôm nay |
| [52] SC-07 · Báo sai hôm nay | Hoàng Mai Linh · PRM393 Slot | Bấm | [53] SC-08 · Chi tiết báo sai · Hoàng Mai Linh |
| [52] SC-07 · Báo sai hôm nay | Ngô Thanh Vy · SWT301 Slot 2 | Bấm | [65] SC-08 · Chi tiết báo sai · Ngô Thanh Vy (xử lý trước) |
| [52] SC-07 · Báo sai hôm nay | hotspot · tab left | Bấm | [51] SC-02 · Lịch dạy hôm nay · Có báo sai mới |
| [53] SC-08 · Chi tiết báo sai · Hoàng Mai Linh | Từ chối | Bấm | [58] OV · Dialog từ chối báo sai (overlay) |
| [53] SC-08 · Chi tiết báo sai · Hoàng Mai Linh | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [54] SC-08 · Chi tiết báo sai · Đã sửa | Về danh sách báo sai | Bấm | [55] SC-07 · Báo sai hôm nay · Đã xử lý hết |
| [54] SC-08 · Chi tiết báo sai · Đã sửa | hotspot · back | Bấm | [55] SC-07 · Báo sai hôm nay · Đã xử lý hết |
| [55] SC-07 · Báo sai hôm nay · Đã xử lý hết | hotspot · tab left | Bấm | [57] SC-02 · Lịch dạy hôm nay · Đã xử lý hết báo sai |
| [56] SC-07 · Báo sai hôm nay · Sau khi từ chối | Ngô Thanh Vy · SWT301 Slot 2 | Bấm | [60] SC-08 · Chi tiết báo sai · Ngô Thanh Vy |
| [56] SC-07 · Báo sai hôm nay · Sau khi từ chối | hotspot · tab left | Bấm | [63] SC-02 · Lịch dạy hôm nay · Còn 1 báo sai |
| [57] SC-02 · Lịch dạy hôm nay · Đã xử lý hết báo sai | hotspot · tab right | Bấm | [55] SC-07 · Báo sai hôm nay · Đã xử lý hết |
| [58] OV · Dialog từ chối báo sai | hotspot · Hủy | Bấm | Đóng overlay |
| [58] OV · Dialog từ chối báo sai | hotspot · Từ chối | Bấm | [78] SC-08 · Chi tiết báo sai · Đã từ chối (Giữ Vắng) |
| [59] OV · Sheet Không quét được? | scrim 40% | Bấm | Đóng overlay |
| [59] OV · Sheet Không quét được? | Đã hiểu | Bấm | Đóng overlay |
| [60] SC-08 · Chi tiết báo sai · Ngô Thanh Vy | Sửa thành Có mặt | Bấm | [54] SC-08 · Chi tiết báo sai · Đã sửa |
| [60] SC-08 · Chi tiết báo sai · Ngô Thanh Vy | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [61] SC-09 · Hôm nay (sinh viên) · Báo sai có kết quả (K3) | Link · Báo sai điểm danh | Bấm | [45] SC-14 · Báo sai của tôi · Đã sửa |
| [61] SC-09 · Hôm nay (sinh viên) · Báo sai có kết quả (K3) | hotspot · tab right | Bấm | [45] SC-14 · Báo sai của tôi · Đã sửa |
| [62] SC-09 · Hôm nay (sinh viên) · Báo sai có kết quả, đã xem | Link · Báo sai điểm danh | Bấm | [45] SC-14 · Báo sai của tôi · Đã sửa |
| [62] SC-09 · Hôm nay (sinh viên) · Báo sai có kết quả, đã xem | hotspot · tab right | Bấm | [45] SC-14 · Báo sai của tôi · Đã sửa |
| [63] SC-02 · Lịch dạy hôm nay · Còn 1 báo sai | hotspot · tab right | Bấm | [56] SC-07 · Báo sai hôm nay · Sau khi từ chối |
| [64] SC-09 · Hôm nay (sinh viên) · Báo sai bị từ chối | Link · Báo sai điểm danh | Bấm | [47] SC-14 · Báo sai của tôi · Bị từ chối |
| [64] SC-09 · Hôm nay (sinh viên) · Báo sai bị từ chối | hotspot · tab right | Bấm | [47] SC-14 · Báo sai của tôi · Bị từ chối |
| [65] SC-08 · Chi tiết báo sai · Ngô Thanh Vy (xử lý trước) | Sửa thành Có mặt | Bấm | [66] SC-08 · Chi tiết báo sai · Đã sửa (Vy trước) |
| [65] SC-08 · Chi tiết báo sai · Ngô Thanh Vy (xử lý trước) | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [66] SC-08 · Chi tiết báo sai · Đã sửa (Vy trước) | Về danh sách báo sai | Bấm | [67] SC-07 · Báo sai hôm nay · Sau khi sửa Vy |
| [66] SC-08 · Chi tiết báo sai · Đã sửa (Vy trước) | hotspot · back | Bấm | [67] SC-07 · Báo sai hôm nay · Sau khi sửa Vy |
| [67] SC-07 · Báo sai hôm nay · Sau khi sửa Vy | Hoàng Mai Linh · PRM393 Slot | Bấm | [68] SC-08 · Chi tiết báo sai · Hoàng Mai Linh (sau Vy) |
| [67] SC-07 · Báo sai hôm nay · Sau khi sửa Vy | hotspot · tab left | Bấm | [70] SC-02 · Lịch dạy hôm nay · Còn 1 báo sai (Linh) |
| [68] SC-08 · Chi tiết báo sai · Hoàng Mai Linh (sau Vy) | Từ chối | Bấm | [69] OV · Dialog từ chối báo sai (sau Vy) (overlay) |
| [68] SC-08 · Chi tiết báo sai · Hoàng Mai Linh (sau Vy) | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [69] OV · Dialog từ chối báo sai (sau Vy) | hotspot · Hủy | Bấm | Đóng overlay |
| [69] OV · Dialog từ chối báo sai (sau Vy) | hotspot · Từ chối | Bấm | [79] SC-08 · Chi tiết báo sai · Đã từ chối (sau Vy) |
| [70] SC-02 · Lịch dạy hôm nay · Còn 1 báo sai (Linh) | hotspot · tab right | Bấm | [67] SC-07 · Báo sai hôm nay · Sau khi sửa Vy |
| [71] OV · Sheet Ghi tay thêm sinh viên | scrim 40% | Bấm | Đóng overlay |
| [71] OV · Sheet Ghi tay thêm sinh viên | Đã hiểu | Bấm | Đóng overlay |
| [72] SC-01 · Đăng nhập · Đang đăng nhập (CMP-01 Loading) | cả frame | Tự chuyển sau thời gian chờ | [01] SC-02 · Lịch dạy hôm nay · Đang tải |
| [73] SC-02 · Lịch dạy hôm nay · QR đang mở | PRM393 · Slot 1 · P.205 | Bấm | [74] SC-03 · Phiên điểm danh · QR sắp đóng (CMP-14 Sắp đóng) |
| [73] SC-02 · Lịch dạy hôm nay · QR đang mở | hotspot · tab right | Bấm | [14] SC-07 · Báo sai hôm nay · Trống |
| [74] SC-03 · Phiên điểm danh · QR sắp đóng (CMP-14 Sắp đóng) | cả frame | Tự chuyển sau thời gian chờ | [04] SC-03 · Phiên điểm danh · QR đã đóng |
| [74] SC-03 · Phiên điểm danh · QR sắp đóng (CMP-14 Sắp đóng) | Đóng QR và kiểm tra | Bấm | [15] OV · Dialog đóng QR sớm (overlay) |
| [74] SC-03 · Phiên điểm danh · QR sắp đóng (CMP-14 Sắp đóng) | hotspot · back | Bấm | [73] SC-02 · Lịch dạy hôm nay · QR đang mở |
| [75] SC-04 · Đối chiếu sĩ số · Số quét nhỏ hơn số người | − | Bấm | [05] SC-04 · Đối chiếu sĩ số |
| [75] SC-04 · Đối chiếu sĩ số · Số quét nhỏ hơn số người | Kiểm tra ngẫu nhiên | Bấm | [07] SC-05 · Kiểm tra ngẫu nhiên |
| [75] SC-04 · Đối chiếu sĩ số · Số quét nhỏ hơn số người | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [76] SC-02 · Lịch dạy hôm nay · Chờ xác nhận (mở từ xa, K1b) | PRM393 · Slot 1 · P.205 | Bấm | [05] SC-04 · Đối chiếu sĩ số |
| [76] SC-02 · Lịch dạy hôm nay · Chờ xác nhận (mở từ xa, K1b) | hotspot · tab right | Bấm | [14] SC-07 · Báo sai hôm nay · Trống |
| [77] SC-03 · Phiên điểm danh · Laptop chưa kết nối | cả frame | Tự chuyển sau thời gian chờ | [03] SC-03 · Phiên điểm danh |
| [77] SC-03 · Phiên điểm danh · Laptop chưa kết nối | Đóng QR và kiểm tra | Bấm | [15] OV · Dialog đóng QR sớm (overlay) |
| [77] SC-03 · Phiên điểm danh · Laptop chưa kết nối | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [78] SC-08 · Chi tiết báo sai · Đã từ chối (Giữ Vắng) | Về danh sách báo sai | Bấm | [56] SC-07 · Báo sai hôm nay · Sau khi từ chối |
| [78] SC-08 · Chi tiết báo sai · Đã từ chối (Giữ Vắng) | hotspot · back | Bấm | [56] SC-07 · Báo sai hôm nay · Sau khi từ chối |
| [79] SC-08 · Chi tiết báo sai · Đã từ chối (sau Vy) | Về danh sách báo sai | Bấm | [55] SC-07 · Báo sai hôm nay · Đã xử lý hết |
| [79] SC-08 · Chi tiết báo sai · Đã từ chối (sau Vy) | hotspot · back | Bấm | [55] SC-07 · Báo sai hôm nay · Đã xử lý hết |
| [80] SC-04 · Đối chiếu sĩ số · Số quét lớn hơn số người (nhánh cờ) | Kiểm tra ngẫu nhiên | Bấm | [81] SC-05 · Kiểm tra ngẫu nhiên (nhánh cờ) |
| [80] SC-04 · Đối chiếu sĩ số · Số quét lớn hơn số người (nhánh cờ) | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [81] SC-05 · Kiểm tra ngẫu nhiên (nhánh cờ) | Ảnh FAP | Bấm | [82] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 (nhánh cờ) |
| [81] SC-05 · Kiểm tra ngẫu nhiên (nhánh cờ) | Ảnh FAP | Bấm | [82] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 (nhánh cờ) |
| [81] SC-05 · Kiểm tra ngẫu nhiên (nhánh cờ) | Ảnh FAP | Bấm | [82] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 (nhánh cờ) |
| [81] SC-05 · Kiểm tra ngẫu nhiên (nhánh cờ) | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [82] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 (nhánh cờ) | Xem lại và xác nhận | Bấm | [83] SC-06 · Xem lại và xác nhận · Còn lượt quét cần xem (NT-3) |
| [82] SC-05 · Kiểm tra ngẫu nhiên · Đã kiểm tra 3/3 (nhánh cờ) | hotspot · back | Bấm | Quay lại màn trước (Back) |
| [83] SC-06 · Xem lại và xác nhận · Còn lượt quét cần xem (NT-3) | Ghi tay thêm sinh viên | Bấm | [71] OV · Sheet Ghi tay thêm sinh viên (overlay) |
| [83] SC-06 · Xem lại và xác nhận · Còn lượt quét cần xem (NT-3) | hotspot · back | Bấm | Quay lại màn trước (Back) |
