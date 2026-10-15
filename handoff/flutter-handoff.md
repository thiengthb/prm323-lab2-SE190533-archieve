# Flutter handoff

| Thuộc tính | Giá trị |
|---|---|
| Mã tài liệu | HANDOFF-FLUTTER |
| Phiên bản | v1 (14/10/2026) |
| Trạng thái | Đã duyệt (thien, 15/10/2026). Giờ đóng QR và hạn mã theo D-28 A (thien chốt 14/10/2026) |
| Đầu vào | Figma trang 03 (giao diện), trang 04 (token), trang 05 (component), trang 06 (luồng); `design/DESIGN.md` v2; `design/screen-spec.md` (ý đồ từng màn) |
| Người đọc | Lập trình viên Flutter dựng ứng dụng mà chỉ mở Figma để xem hình, không phải hỏi lại người thiết kế |

**Cách dùng tài liệu.** Mục 1 là hai bảng ánh xạ chung: token sang Flutter, component sang widget. Mục 2 là quy tắc chung cho mọi màn: điều hướng, nút quay lại, cỡ chữ hệ thống, màn hình rộng. Mục 3 đặc tả 15 màn, mỗi màn đủ 6 mục mà đề bài yêu cầu: bố cục, component, trạng thái, tương tác, điều hướng, ràng buộc. Ý đồ thiết kế và nội dung chữ của từng màn nằm ở `design/screen-spec.md`; tài liệu này không lặp lại.

**Quy ước tên.** Token viết như trong Figma (`color/primary`, `space/4`). Tên hằng Dart viết như `AppSpace.s4`. Component viết theo mã và tên variant trong Figma, ví dụ `CMP-01 Button · Variant=Primary, State=Loading`. Đơn vị kích thước là dp, cỡ chữ là sp.

---

## 1. Bảng ánh xạ chung

### 1.1. Màu → `ColorScheme` và `ThemeExtension`

Chỉ làm theme Light (bắt buộc). Giá trị Dark có trong `design/DESIGN.md` mục 4 nếu muốn làm thêm. Màu trạng thái không có chỗ trong `ColorScheme` của Material 3 nên đặt trong một `ThemeExtension` tên `StatusColors`.

| Token Figma | Hex (Light) | Flutter | Dùng cho |
|---|---|---|---|
| `color/canvas` | `#EEEEF1` | `ThemeData.scaffoldBackgroundColor` | Nền màn hình |
| `color/surface` | `#FFFFFF` | `ColorScheme.surface` | Thẻ, sheet, dialog, ô nhập, thanh đáy |
| `color/raised` | `#F2F2F7` | `ColorScheme.surfaceContainerHighest` | Chip giờ trung tính, đầu nhóm, ô thông tin |
| `color/text` | `#212529` | `ColorScheme.onSurface` | Chữ chính |
| `color/muted` | `#5C636A` | `ColorScheme.onSurfaceVariant` | Chữ phụ: giờ, mã SV, phòng |
| `color/border` | `#E3E5EC` | `ColorScheme.outlineVariant` | Viền thẻ, đường chia (trang trí) |
| `color/border-control` | `#767D86` | `ColorScheme.outline` | Viền ô nhập, nút viền |
| `color/primary` | `#4254BA` | `ColorScheme.primary` | Nút chính, link, tab đang chọn, viền focus |
| `color/on-primary` | `#FFFFFF` | `ColorScheme.onPrimary` | Chữ trên nền primary, chữ huy hiệu |
| `color/primary-soft` | `#ECEEF8` | `ColorScheme.primaryContainer`; `onPrimaryContainer` = `#4254BA` | Chỉ báo tab đang chọn |
| `color/danger` | `#B42318` | `ColorScheme.error`; `onError` = `#FFFFFF` | Vắng, lỗi, từ chối, huy hiệu |
| `color/danger-soft` | `#FDECEA` | `ColorScheme.errorContainer`; `onErrorContainer` = `#B42318` | Nền chip Vắng, banner lỗi |
| `color/success` | `#0D6E45` | `StatusColors.success` | Có mặt, Đã sửa, Đã lên FAP, thanh tiến độ |
| `color/success-soft` | `#E3F0EA` | `StatusColors.successContainer` | Nền chip Có mặt |
| `color/warning` | `#855A00` | `StatusColors.warning` | Chưa điểm danh, Chờ xác nhận, Chờ điền lên FAP, Cần xem |
| `color/warning-soft` | `#FFF4D2` | `StatusColors.warningContainer` | Nền chip và banner cảnh báo |
| `color/slot` | `#9A3412` | `StatusColors.slot` | Chữ và chấm của chip giờ buổi đang diễn ra |
| `color/slot-soft` | `#FFEFE2` | `StatusColors.slotContainer` | Nền chip giờ buổi đang diễn ra |

`ColorScheme.secondary`, `tertiary` và các màu khác không dùng; đặt bằng `primary` để widget mặc định không lộ màu lạ.

### 1.2. Chữ → `TextTheme`

Font Inter (D-23), thêm vào `pubspec.yaml` với các độ đậm 400, 500, 600. `ThemeData(fontFamily: 'Inter')`. Thang chữ đã theo tên M3 nên ánh xạ thẳng.

| Text style Figma | Cỡ / dòng / đậm | Flutter | Dùng cho |
|---|---|---|---|
| `type/headline-sm` | 24 / 32 / 500 | `textTheme.headlineSmall` | Số lớn: “28/32”, số ở SC-04, SC-06 |
| `type/title-lg` | 22 / 28 / 500 | `textTheme.titleLarge` | Tiêu đề app bar, tiêu đề kết quả SC-11 |
| `type/title-md` | 16 / 24 / 500 | `textTheme.titleMedium` | Tiêu đề thẻ, tên môn. Tiêu đề nhóm (“Sắp tới · 3”) dùng style này với `FontWeight.w600` |
| `type/body-lg` | 16 / 24 / 400 | `textTheme.bodyLarge` | Tên sinh viên |
| `type/body-md` | 14 / 20 / 400 | `textTheme.bodyMedium` | Chữ thân, dòng mô tả |
| `type/label-lg` | 14 / 20 / 500 | `textTheme.labelLarge` | Nút, tab, chip |
| `type/mono` | 14 / 20 / 500 | `AppTextStyles.mono` = `labelLarge.copyWith(fontFeatures: [FontFeature.tabularFigures()])` | Mã SV, giờ, đồng hồ đếm ngược, bộ đếm ký tự |

Chiều cao dòng trong Flutter là tỷ lệ: `height: 32 / 24` cho headlineSmall, tương tự cho các dòng khác. Không có chữ nào dưới 14 sp.

### 1.3. Khoảng cách, kích thước, góc bo, độ nổi → hằng số

| Token Figma | Giá trị | Flutter | Dùng cho |
|---|---|---|---|
| `space/1` | 4 | `AppSpace.s1` | Khoảng giữa biểu tượng và chữ trong chip |
| `space/2` | 8 | `AppSpace.s2` | Khoảng giữa các dòng trong thẻ |
| `space/3` | 12 | `AppSpace.s3` | Khoảng giữa các thẻ trong một nhóm; padding trong chip, banner |
| `space/4` | 16 | `AppSpace.s4` | Lề trái phải của màn hình; padding trong thẻ |
| `space/5` | 20 | `AppSpace.s5` | Padding trong dialog, sheet |
| `space/6` | 24 | `AppSpace.s6` | Khoảng giữa các nhóm |
| `space/7` | 32 | `AppSpace.s7` | Khoảng trên dưới của empty state, error state |
| `space/8` | 40 | `AppSpace.s8` | Cỡ ảnh FAP trong dòng sinh viên |
| `size/control` | 48 | `AppSize.control` | Chiều cao tối thiểu của nút, ô nhập, vùng chạm. `ThemeData.materialTapTargetSize = MaterialTapTargetSize.padded` |
| `size/appbar` | 64 | `AppSize.appBar` | `AppBar.toolbarHeight` |
| `radius/sm` | 6 | `AppRadius.sm` | Huy hiệu số |
| `radius/md` | 8 | `AppRadius.md` | Nút, ô nhập, chip |
| `radius/lg` | 10 | `AppRadius.lg` | Banner, ô thông tin |
| `radius/xl` | 14 | `AppRadius.xl` | Thẻ |
| `radius/2xl` | 18 | `AppRadius.xxl` | Dialog, bottom sheet (chỉ góc trên) |
| `radius/full` | 999 | `AppRadius.full` | Avatar, chấm, chỉ báo tab |
| `elevation/1` | bóng y1 blur2, đen 5% | `AppShadow.e1` (`List<BoxShadow>`) | Thẻ |
| `elevation/2` | y1 b2 5% + y8 b24 12% | `AppShadow.e2` | Thanh hành động cố định đáy |
| `elevation/3` | y2 b4 6% + y12 b32 16% | `AppShadow.e3` | Dialog, bottom sheet |
| `elevation/4` | y4 b8 8% + y24 b56 22% | `AppShadow.e4` | SnackBar |

Thẻ dùng `Card(elevation: 0)` cộng viền 1 dp `outlineVariant` và `AppShadow.e1`, không dùng elevation của Material 3 vì M3 phủ màu tint lên nền.

### 1.4. Component → widget

| Component Figma (variant) | Widget Flutter | Ghi chú |
|---|---|---|
| CMP-01 Button · Primary | `FilledButton` | `minimumSize: Size(64, 48)`, bo `AppRadius.md`, chữ `labelLarge`. Mỗi màn chỉ một nút Primary |
| CMP-01 Button · Secondary | `OutlinedButton` | Viền 1 dp `outline` |
| CMP-01 Button · Text | `TextButton` | Dùng cho link như “Báo sai điểm danh”, “Không quét được?” khi không có viền |
| CMP-01 Button · Danger | `FilledButton` với `backgroundColor: colorScheme.error` | Chỉ trong dialog từ chối |
| CMP-01 · State=Pressed | Hiệu ứng nhấn mặc định | Không dựng riêng |
| CMP-01 · State=Disabled | `onPressed: null` | Màu tắt mặc định của M3 |
| CMP-01 · State=Loading | Cùng nút, `onPressed: null`, `child` chỉ là `CircularProgressIndicator(strokeWidth: 2)` cỡ 20, không có chữ (đúng component Figma). Bọc `Semantics(label: ...)` theo việc đang làm, ví dụ “Đang đăng nhập”, “Đang gửi” | Giữ nguyên chiều rộng nút |
| CMP-02 Text field | `TextFormField` | Nhãn đặt trên ô bằng `Text` riêng (không dùng nhãn nổi). `maxLength: 200` hiện bộ đếm. Lỗi qua `errorText`. Focused: viền 2 dp `primary` |
| CMP-03 Card · Default, Pressed | `Card` + `InkWell` | Thẻ chỉ để xem thì không bọc `InkWell` |
| CMP-04 Navigation bar · Vai trò, Tab | `NavigationBar` + 2 `NavigationDestination` | `indicatorColor: primaryContainer`, cao 80. Huy hiệu: `Badge.count(count: n, isLabelVisible: n > 0)` bọc biểu tượng tab “Báo sai” |
| CMP-05 App bar · Top-level | `AppBar` không có nút quay lại, `title` là `Column` (tiêu đề + ngày giờ `bodyMedium` màu `onSurfaceVariant`) | Màn cấp một |
| CMP-05 App bar · Default | `AppBar` với `BackButton` hoặc `CloseButton` | Màn lồng |
| CMP-05 App bar · With actions | `AppBar` + `actions` (tối đa 1) | |
| CMP-06 Dialog · Confirmation | `AlertDialog` qua `showDialog` | Nút trái `TextButton` “Hủy”, nút phải `FilledButton` |
| CMP-06 Dialog · Destructive | `AlertDialog`, nút phải `FilledButton` màu `error` | Không đóng khi chạm ra ngoài (`barrierDismissible: false`) |
| CMP-07 Loading · Skeleton thẻ slot | Widget riêng `SlotCardSkeleton` | Khối màu `outlineVariant` theo đúng hình thẻ slot. Không chạy hiệu ứng nhấp nháy khi `MediaQuery.disableAnimations` là true |
| CMP-07 Loading · Skeleton list | Widget riêng `StudentRowSkeleton` | Cho danh sách lớp ở SC-03 lúc mới mở |
| CMP-07 Loading · Spinner | `CircularProgressIndicator` giữa màn + chữ | SC-11 đang xác thực |
| CMP-08 Empty state · Có nút, Không có nút | Widget riêng `EmptyState(icon, title, message, action)`, `action` có thể null | Có nút: một nút Secondary (SC-07, SC-14). Không có nút: SC-02, SC-09 khi không có việc gì để làm tiếp |
| CMP-09 Error state · Mã hết hạn, Mất mạng | Widget riêng `ErrorState(icon, title, cause, action)` | Tiêu đề, nguyên nhân bằng lời thường, một nút thử lại |
| CMP-10 Status chip · 13 trạng thái | Widget riêng `StatusChip(status)` | Không dùng `Chip` vì chip này không bấm được. `Container` bo `AppRadius.md`, `Row(Icon 20, Text labelLarge)`. Bọc `Semantics(label: 'Trạng thái: Có mặt')` |
| CMP-11 Student row · 5 trạng thái | `ListTile` | `leading`: `CircleAvatar` 40 (ảnh FAP, không có ảnh thì chữ cái đầu). `title` `bodyLarge`, `subtitle` `mono` màu `onSurfaceVariant`, `trailing` `StatusChip`. `minVerticalPadding` để cao ít nhất 64 |
| CMP-12 Deadline banner · 3 trạng thái | Widget riêng `DeadlineBanner` | Nền `warningContainer`, biểu tượng đồng hồ, chữ `bodyMedium` màu `warning`. Không dùng `MaterialBanner` vì banner này nằm trong nội dung, không ở đầu `Scaffold` |
| CMP-13 Report timeline · 4 bước | Widget riêng `ReportTimeline(steps)` | Cột biểu tượng + đường dọc 2 dp, mỗi bước có tên và giờ (`mono`). Không dùng `Stepper` vì không có thao tác |
| CMP-14 Scan counter · Đang mở, Sắp đóng, Đã đóng | Widget riêng `ScanCounter` | Số `headlineSmall`; `LinearProgressIndicator(value: scanned / total, color: StatusColors.success, backgroundColor: outlineVariant, minHeight: 8)`; đồng hồ `mono`; `StatusChip` pha |
| CMP-15 Spot-check card · Chờ, Đúng người, Không có mặt | `Card` chứa ảnh FAP 72, tên, mã SV, `Row` hai nút | “Không có mặt” là `OutlinedButton`, “Đúng người” là `FilledButton.tonal`. Sau khi chọn, hai nút đổi thành `StatusChip` kết quả và nút “Đổi” dạng `TextButton` |
| Sheet (“Không quét được?”, “Ghi tay thêm sinh viên”) | `showModalBottomSheet(useSafeArea: true, showDragHandle: true)` | Bo góc trên `AppRadius.xxl`, padding `AppSpace.s5` |
| Thông báo ngắn (ví dụ “Đã ghi tay Võ Minh Tâm”) | `SnackBar` | Không dùng cho lỗi cần hành động; lỗi dùng `ErrorState` hoặc banner |

---

## 2. Quy tắc chung

### 2.1. Cấu trúc điều hướng

Dùng `go_router` với hai `StatefulShellRoute` (một cho mỗi vai trò), mỗi shell có 2 nhánh tương ứng 2 tab. Màn lồng đẩy lên trên shell và ẩn thanh điều hướng.

| Route | Màn | Shell |
|---|---|---|
| `/login` | SC-01 | Không |
| `/gv/today` | SC-02 | Giảng viên, tab “Hôm nay” |
| `/gv/session/:slotId` | SC-03 | Không (toàn màn) |
| `/gv/session/:slotId/headcount` | SC-04 | Không |
| `/gv/session/:slotId/spot-check` | SC-05 | Không |
| `/gv/session/:slotId/review` | SC-06 | Không |
| `/gv/reports` | SC-07 | Giảng viên, tab “Báo sai” |
| `/gv/reports/:reportId` | SC-08 | Không |
| `/sv/today` | SC-09 | Sinh viên, tab “Hôm nay” |
| `/sv/scan` | SC-10 | Không (`fullscreenDialog: true`) |
| `/sv/scan/result` | SC-11 | Không |
| `/sv/session/:slotId` | SC-12 | Không |
| `/sv/session/:slotId/report` | SC-13 | Không |
| `/sv/reports` | SC-14 | Sinh viên, tab “Báo sai” |
| `/sv/appeal/:slotId` | SC-15 | Không |

Thông báo đẩy (báo sai mới cho giảng viên, kết quả báo sai cho sinh viên) mở thẳng `/gv/reports/:reportId` hoặc `/sv/reports`.

### 2.2. Nút quay lại

- Màn cấp một (SC-02, SC-07, SC-09, SC-14): nút Back của Android thoát ứng dụng, giống hành vi mặc định.
- Màn lồng: Back về màn trước, trừ những ngoại lệ ghi ở mục “Điều hướng” của từng màn (SC-06 sau khi xác nhận, SC-11 sau khi quét, SC-14 sau khi gửi).
- Không có màn nào để Back quay lại một bước đã hoàn tất không thể làm lại (ví dụ: không quay lại camera sau khi đã ghi nhận, không quay lại form đã gửi).

### 2.3. Dữ liệu và thời gian

- Giờ hiển thị theo múi giờ Asia/Ho_Chi_Minh, định dạng 24 giờ “07:01”. Ngày dạng “Thứ 4, 14/10”.
- Ngày giờ trên app bar của SC-02 và SC-09 cập nhật mỗi phút. Nhóm thẻ (Đang diễn ra, Sắp tới, Đã xong) tính lại mỗi khi giờ đổi.
- Mã QR đổi sau mỗi 15 giây do máy chủ cấp. Máy chủ nhận cả mã hiện tại và mã liền trước, nên một mã có hiệu lực tối đa 30 giây (D-28 A).
- Phiên QR tự đóng lúc giờ vào slot cộng 5 phút (ví dụ slot 07:00 đóng lúc 07:05). Nếu giảng viên mở sau giờ vào slot, phiên mở đủ 5 phút từ lúc mở (D-28 A; theo nội quy “vào lớp muộn quá 5 phút bị tính vắng”).

### 2.4. Cỡ chữ hệ thống và accessibility

- Bố cục phải chịu được `textScaler` tới 2,0. Mọi nội dung nằm trong vùng cuộn; thanh hành động đáy được phép cao lên; không đặt chiều cao cố định cho widget chứa chữ.
- Vùng chạm ít nhất 48 × 48. Biểu tượng bấm được dùng `IconButton` (vùng chạm 48).
- Mọi `StatusChip`, huy hiệu và biểu tượng mang nghĩa có `Semantics` bằng chữ. Huy hiệu tab: “Báo sai, 2 việc chưa xử lý” (giảng viên) hoặc “Báo sai, 1 kết quả mới” (sinh viên).
- Thứ tự đọc của TalkBack theo thứ tự trên xuống trong mục “Bố cục” của từng màn.

### 2.5. Màn hình rộng (600 dp trở lên)

Đề bài không yêu cầu thiết kế; đây là cách đổi bố cục.

| Độ rộng | Thay đổi |
|---|---|
| Dưới 600 (compact) | Như Figma |
| 600 đến dưới 840 (medium) | `NavigationRail` bên trái thay cho `NavigationBar`. Nội dung giữa màn, rộng tối đa 600. Thanh hành động đáy rộng theo nội dung, không kéo hết màn. Dialog rộng tối đa 400 |
| 840 trở lên (expanded) | Như medium, thêm bố cục hai cột: SC-07 danh sách bên trái, SC-08 chi tiết bên phải; SC-03 bộ đếm và nút ở cột trái, danh sách lớp ở cột phải; SC-09 và SC-12 cũng có thể hai cột (danh sách buổi, chi tiết buổi) |

Màn ngang trên điện thoại dùng bố cục medium nếu đủ rộng. SC-10 (camera) luôn khóa dọc.

---

## 3. Đặc tả từng màn

Mỗi màn có 6 mục theo đề bài. Tên frame trong ngoặc kép là tên frame trên Figma trang 03.

### SC-01 · Đăng nhập

1. **Bố cục.** `Scaffold` (nền `canvas`, không có app bar) → `SafeArea` → `Padding` ngang `s4` → `Column`: vùng thương hiệu canh giữa (biểu tượng 64 bo `xl`, khoảng `s4`, tiêu đề `titleLarge`, khoảng `s2`, dòng phụ `bodyMedium` màu `onSurfaceVariant`) → `Spacer` → banner lỗi (nếu có) → khoảng `s4` → dòng hướng dẫn `bodyMedium` canh giữa → khoảng `s3` → nút → khoảng `s6`. Khi chữ lớn, cả cột nằm trong `SingleChildScrollView` và `Spacer` được thay bằng khoảng `s8`.
2. **Component.** CMP-01 Button · Variant=Primary (Default, Loading); banner lỗi dùng nền `errorContainer` (cùng kiểu với CMP-12 nhưng màu danger).
3. **Trạng thái.** Mặc định (“SC-01 · Đăng nhập”). Đang đăng nhập (“SC-01 · Đăng nhập · Đang đăng nhập (CMP-01 Loading)”): nút ở State=Loading, `Semantics` đọc “Đang đăng nhập”. Lỗi email (“SC-01 · Đăng nhập · Lỗi tài khoản”): banner hiện email vừa dùng. Lỗi mạng: dùng cùng vị trí banner với nội dung “Chưa kết nối được. Kiểm tra mạng rồi thử lại.”
4. **Tương tác.** Chạm “Đăng nhập bằng Google” → mở luồng Google Sign-In của hệ thống. Kết quả trả về email; máy chủ tra email trong danh sách của trường: giảng viên (email @fpt.edu.vn) hoặc sinh viên (email đã đăng ký với trường, thường là Gmail cá nhân, CR-41). Email không có trong danh sách → hiện banner lỗi, đăng xuất khỏi Google để người dùng chọn tài khoản khác ở lần chạm sau. Người dùng hủy hộp chọn tài khoản → không hiện lỗi.
5. **Điều hướng.** Vào từ: mở ứng dụng khi chưa đăng nhập. Đăng nhập thành công: giảng viên `go('/gv/today')`, sinh viên `go('/sv/today')`, xóa SC-01 khỏi ngăn xếp. Back: thoát ứng dụng.
6. **Ràng buộc.** Nút cao 48, rộng hết lề. Email trong banner có thể dài: cho xuống dòng, không cắt. Không có ô nhập nên không có bàn phím. Màn rộng: cột nội dung tối đa 400, canh giữa.

### SC-02 · Lịch dạy hôm nay

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Top-level: “Hôm nay” + ngày giờ) → `RefreshIndicator` → `CustomScrollView`, padding ngang `s4`: cho mỗi nhóm khác rỗng theo thứ tự “Đang diễn ra”, “Sắp tới”, “Đã xong”: tiêu đề nhóm (`titleMedium` w600 + “ · n” màu `onSurfaceVariant`), khoảng `s3`, các thẻ cách nhau `s3`; giữa các nhóm khoảng `s6` → `bottomNavigationBar` CMP-04. Cuộn: toàn bộ danh sách thẻ.
2. **Component.** CMP-05 · Top-level; CMP-03 Card (thẻ slot); CMP-10 Status chip · Giờ slot (đang diễn ra), Giờ slot · khác (sắp tới, đã xong), Chưa điểm danh, Chờ điền lên FAP, Đã lên FAP; CMP-01 · Primary “Mở điểm danh” và · Secondary “Mở từ xa” trên thẻ slot kế tiếp; CMP-07 · Skeleton thẻ slot; CMP-04 · Vai trò=Giảng viên, Tab=Hôm nay, có huy hiệu.
3. **Trạng thái.** Đang tải: 3 `SlotCardSkeleton` (“… · Đang tải (CMP-07 skeleton)”). Có dữ liệu: 7 frame theo giờ trong ngày (xem `design/screen-spec.md`). Trống (không có slot hôm nay): CMP-08 · Không có nút, “Hôm nay thầy không có slot nào” (frame “SC-02 · Lịch dạy hôm nay · Trống (CMP-08)”). Lỗi tải: CMP-09 · Mất mạng thay cho danh sách, nút “Thử lại”; nếu đã có dữ liệu cũ thì giữ danh sách và hiện `SnackBar` “Chưa cập nhật được”.
4. **Tương tác.** Kéo xuống để tải lại. “Mở điểm danh” → tạo phiên tại lớp. “Mở từ xa” → tạo phiên từ xa (mã chỉ hiện trên màn hình lớp, tức TV phòng, D-24). Nút trên thẻ chỉ bật trong khoảng 15 phút trước giờ vào slot tới hết giờ slot; ngoài khoảng đó thẻ không có nút. Chạm thẻ “Chờ điền lên FAP” → mở SC-06 ở trạng thái chờ để thử điền lại. Chạm thẻ có phiên đang mở hoặc chờ xác nhận → mở lại SC-03 hoặc SC-04. Thẻ sắp tới khác và thẻ đã lên FAP chỉ để xem, không bấm được (không có `InkWell`). Chạm tab “Báo sai” → SC-07.
5. **Điều hướng.** Vào từ: SC-01, SC-06 (“Về lịch dạy”), SC-07 (tab), SC-08 (qua SC-07). Đi tới: SC-03 (`push`), SC-06, SC-07 (đổi tab). Back: thoát ứng dụng.
6. **Ràng buộc.** Tên môn và phòng `maxLines: 1` với dấu “…”; dòng mô tả cho xuống tối đa 2 dòng. Chip giờ và chip trạng thái nằm trong `Wrap` (khoảng `s2`) để xuống dòng khi chữ lớn. Huy hiệu tối đa “99+”. Hai nút trên thẻ chia đôi chiều rộng; khi chữ lớn làm nút cao quá 2 dòng thì xếp dọc. Màn rộng: thẻ rộng tối đa 600.

### SC-03 · Phiên điểm danh

1. **Bố cục.** `Scaffold` (không có thanh điều hướng) → `AppBar` (CMP-05 Default: “PRM393 · Slot 1 · P.205”, nút Back) → `Column`: `ScanCounter` (padding `s4`, nền `surface`) → dòng nguồn mã `bodyMedium` màu `onSurfaceVariant`, padding ngang `s4` → `Expanded` chứa danh sách lớp (`ListView.builder`: tiêu đề “Danh sách lớp · 32” và “Chưa quét n”, rồi CMP-11 các dòng) → thanh hành động đáy (nền `surface`, `AppShadow.e2`, padding `s4`) chứa nút chính. Chỉ danh sách cuộn; bộ đếm và nút đứng yên.
   Biến thể mở từ xa: thay danh sách bằng khối giải thích (biểu tượng TV, câu “Mã đang hiện trên màn hình lớp P.205…”) và dòng nhắc trên nút.
2. **Component.** CMP-05 · Default; CMP-14 Scan counter · Đang mở, Sắp đóng, Đã đóng; CMP-10 · QR đang mở, QR sắp đóng, QR đã đóng, Chưa quét, Đã quét; CMP-11 · Chưa quét, Đã quét; CMP-07 · Skeleton list (lúc mở); CMP-01 · Primary; CMP-06 · Confirmation (đóng QR sớm).
3. **Trạng thái.** Đang tải danh sách: `StudentRowSkeleton` × 6. QR đang mở tại lớp (“SC-03 · Phiên điểm danh”). Sắp đóng, còn dưới 30 giây (“… · QR sắp đóng (CMP-14 Sắp đóng)”): chip “QR còn 0:20” màu `warning`, kèm chữ “Sắp đóng · còn 20 giây”. Đã đóng (“… · QR đã đóng (CR-25)”). Mở từ xa (“… · Mở từ xa (K1b)”) và đã đóng của mở từ xa (“… · QR đã đóng, mở từ xa (K1b)”). Laptop chưa kết nối (“… · Laptop chưa kết nối”): bộ đếm 0/32, banner `warningContainer` “Laptop phòng P.205 chưa kết nối nên mã chưa hiện trên màn hình lớp. Mở app desktop trên laptop, hoặc chiếu tạm mã từ điện thoại này.” và CMP-01 · Secondary “Chiếu tạm mã từ điện thoại”. Mất kết nối máy chủ: banner `errorContainer` “Đang mất kết nối. Số đã quét có thể chưa mới nhất.” ở dưới bộ đếm, tự ẩn khi có mạng lại.
4. **Tương tác.** Số đã quét và danh sách cập nhật theo thời gian thực (WebSocket hoặc stream; nếu phải hỏi lại thì mỗi 2 giây). Người mới quét chuyển từ nhóm “Chưa quét” sang đầu nhóm “Đã quét” kèm giờ. Đồng hồ đếm ngược mỗi giây. “Đóng QR và kiểm tra”: nếu còn người chưa quét và QR còn thời gian → dialog “Đóng QR sớm?” (Hủy / Đóng QR); nếu không → đóng ngay. QR tự đóng khi hết giờ: chip, chấm, chữ đổi cùng lúc, nút đổi thành “Đối chiếu sĩ số”, rung nhẹ (`HapticFeedback.mediumImpact`). Mở từ xa: “Tôi đã vào lớp: đóng QR” → đóng phiên và đi tới SC-04. Chạm dòng sinh viên: không có hành động.
5. **Điều hướng.** Vào từ: SC-02. Đi tới: SC-04 (`push`). Back khi QR đang mở: về SC-02, phiên vẫn chạy (thẻ slot hiện “Đang mở”), không hỏi lại. Back khi QR đã đóng: về SC-02, phiên giữ ở “Chờ xác nhận”. Không có cách mở lại một phiên đã đóng.
6. **Ràng buộc.** Bộ đếm luôn hiện, kể cả khi cuộn. Tên sinh viên `maxLines: 1` với “…”; dòng phụ (mã SV, giờ quét, lý do cờ) xuống dòng, không cắt (CR-24). Danh sách tối đa sĩ số lớp (đến khoảng 40) nên không cần phân trang. Giữ màn sáng khi phiên đang mở (`wakelock`). Màn rộng 840+: hai cột như mục 2.5.

### SC-04 · Đối chiếu sĩ số

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Default “Đối chiếu sĩ số”) → `ListView`, padding `s4`: hướng dẫn `bodyMedium` → khoảng `s4` → nhãn “Số người trong phòng” `labelLarge` → hàng nhập số (nút “−” 48 × 48, ô số `headlineSmall` canh giữa, nút “+” 48 × 48) → khoảng `s4` → thẻ ba số (Đã quét / Trong phòng / Chênh, mỗi số `headlineSmall`, nhãn `bodyMedium`) → khoảng `s3` → banner kết quả → khoảng `s6` → tiêu đề danh sách và các dòng CMP-11 → thanh hành động đáy chứa nút chính.
2. **Component.** CMP-05 · Default; CMP-02 Text field (ô số, kiểu số) với hai `IconButton.outlined`; CMP-12 kiểu banner (nền `warningContainer` khi khớp, `errorContainer` khi số quét lớn hơn); CMP-11 · Chưa quét, Cùng thiết bị; CMP-10 · Trong phòng, Chưa quét, Cần xem; CMP-01 · Primary.
3. **Trạng thái.** Khớp (“SC-04 · Đối chiếu sĩ số (L3)”). Số quét lớn hơn số người (“… · Số quét lớn hơn số người”): “Chênh +n” màu `error`, danh sách đổi thành “Lượt quét cần xem”. Số quét nhỏ hơn số người (“… · Số quét nhỏ hơn số người”): “Chênh −n” màu `onSurface`, banner `warningContainer` “Thiếu n lượt quét, bằng số người chưa quét đang ngồi trong phòng. Ghi tay họ ở bước xem lại. Vẫn kiểm tra ngẫu nhiên vì số thiếu có thể che một lượt quét hộ.”, dòng chưa quét có chip “Trong phòng”, nút vẫn là “Kiểm tra ngẫu nhiên”. Không có trạng thái tải (dữ liệu có sẵn từ SC-03).
4. **Tương tác.** Ô số bắt đầu bằng số đã quét. “−” và “+” đổi 1 đơn vị; giữ nút thì đổi liên tục. Có thể gõ số trực tiếp: chỉ nhận số nguyên từ 0 đến 99. Ba số và banner tính lại ngay khi ô số đổi. Ở dòng “Chưa quét”, chạm chip để đổi giữa “Chưa quét” và “Trong phòng” (giảng viên nhìn thấy người đó trong phòng); số “Trong phòng” không tự đổi theo. Dòng “Cần xem” không có thao tác ở đây; quyết định ở SC-06. “Kiểm tra ngẫu nhiên” luôn bật.
5. **Điều hướng.** Vào từ: SC-03 (sau khi QR đóng), SC-02 (phiên chờ xác nhận). Đi tới: SC-05 (`push`). Back: về SC-03 ở trạng thái đã đóng; số đã nhập được giữ.
6. **Ràng buộc.** Bàn phím số (`TextInputType.number`, `FilteringTextInputFormatter.digitsOnly`, `maxLength: 2` ẩn bộ đếm). Khi bàn phím mở, nút chính đẩy lên trên bàn phím. Lý do gắn cờ xuống dòng, màu `warning`, có biểu tượng điện thoại (CR-24). Màu đỏ chỉ dùng khi số quét lớn hơn số người (D-27).

### SC-05 · Kiểm tra ngẫu nhiên

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Default “Kiểm tra ngẫu nhiên”) → `ListView`, padding `s4`: hướng dẫn `bodyMedium` → khoảng `s3` → tiến độ “Đã kiểm tra n/3” `titleMedium` → banner kết quả (nếu có người không có mặt) → 3 thẻ CMP-15 cách nhau `s3` → thanh hành động đáy: dòng nhắc (khi chưa đủ) và nút chính.
2. **Component.** CMP-05 · Default; CMP-15 Spot-check card · Chờ, Đúng người, Không có mặt; CMP-10 · Đúng người, Không có mặt (sau khi chọn); banner nền `errorContainer`; CMP-01 · Primary (Disabled khi chưa đủ 3).
3. **Trạng thái.** Đang kiểm (“SC-05 · Kiểm tra ngẫu nhiên (L4)”). Đã kiểm 3/3, có người không có mặt (“… · Đã kiểm tra 3/3”). Đã kiểm 3/3, cả 3 đúng người: không có banner. Ảnh FAP không tải được: hiện chữ cái đầu trên nền `surfaceContainerHighest` và dòng “Không tải được ảnh FAP”; giảng viên vẫn chọn được.
4. **Tương tác.** Ba người được máy chủ chọn ngẫu nhiên trong số đã quét lúc màn mở; không chọn lại khi quay lại màn. Chạm “Đúng người” hoặc “Không có mặt” trên từng thẻ; chọn “Không có mặt” thì lượt quét đó chuyển thành Vắng và được ghi lý do “không có mặt khi kiểm tra”. Đổi ý: chạm “Đổi” trên thẻ đã chọn. Theo FL-1, khi có người không có mặt, hệ thống thêm 3 thẻ nữa (chưa vẽ; prototype đi thẳng sang SC-06). “Xem lại và xác nhận” chỉ bật khi mọi thẻ đã có kết quả.
5. **Điều hướng.** Vào từ: SC-04. Đi tới: SC-06 (`push`). Back: về SC-04, kết quả đã chọn được giữ.
6. **Ràng buộc.** Ảnh FAP 72 × 72, bo `AppRadius.md`, có `semanticLabel` “Ảnh FAP của Lê Ngọc Anh”. Hai nút trên thẻ mỗi nút cao 48, chia đôi chiều rộng; chữ lớn thì xếp dọc. Không cho bỏ qua kiểm tra (NT-3).

### SC-06 · Xem lại và xác nhận

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Default “Xem lại và xác nhận”; sau khi xác nhận là “Kết quả điểm danh”) → `ListView`, padding `s4`: banner trạng thái (chỉ sau khi xác nhận) → hàng ba số (Có mặt / Vắng / Cần xử lý) → hai dòng kiểm (biểu tượng `check`, `bodyMedium`) → nhóm “Ghi tay · n” (CMP-11) → nút “Ghi tay thêm sinh viên” (Secondary, rộng hết) → nhóm “Vắng · n” → nhóm “Cần xem · n” (nếu có) → thanh hành động đáy.
2. **Component.** CMP-05 · Default; CMP-11 · Ghi tay, Đã quét, Cùng thiết bị; CMP-10 · Có mặt, Vắng, Cần xem, Chờ điền lên FAP, Đã lên FAP; CMP-01 · Primary, Secondary; CMP-06 · Confirmation; bottom sheet “Ghi tay thêm sinh viên”.
3. **Trạng thái.** Xem lại (“SC-06 · Xem lại và xác nhận”). Còn cờ chưa xử lý (“… · Còn lượt quét cần xem (NT-3)”): số “Cần xử lý” lớn hơn 0 màu `warning`, nhóm “Cần xem · n” với hai `OutlinedButton` “Có mặt” và “Vắng” dưới mỗi dòng, nút chính tắt và phía trên có dòng “Chọn Có mặt hoặc Vắng cho n lượt quét cần xem để xác nhận.” Dialog xác nhận (“… · Dialog xác nhận (overlay)”). Đang gửi: nút chính ở State=Loading. Chờ điền lên FAP (“… · Chờ điền lên FAP (NT-5)”). Đã lên FAP (“… · Đã lên FAP”). Gửi lỗi (mất mạng): banner `errorContainer` “Chưa gửi được vì mất mạng. Kết quả vẫn được giữ trên máy.” và nút “Thử lại”.
4. **Tương tác.** Dòng “Cần xem”: chạm để mở menu hai lựa chọn “Có mặt” / “Vắng”. “Ghi tay thêm sinh viên” mở sheet: ô tìm theo tên hoặc mã SV (lọc trong số chưa có trạng thái Có mặt), chọn một người → ghi Có mặt kèm giờ hiện tại, đóng sheet, `SnackBar` “Đã ghi tay … lúc 07:08” có nút “Hoàn tác”. Khi mọi người đã có trạng thái, sheet chỉ hiện giải thích và nút “Đã hiểu” (frame “… · Sheet Ghi tay thêm sinh viên”). Vuốt một dòng ghi tay sang trái để bỏ ghi tay. “Xác nhận và gửi lên FAP” → dialog (Hủy / Gửi lên FAP) → gửi kết quả; máy chủ chuyển cho extension trên laptop. Sau khi gửi, màn nghe trạng thái extension: “Đã lên FAP” khi extension báo xong. “Thử điền lại” gửi lại yêu cầu cho extension. Không sửa được danh sách sau khi đã xác nhận; muốn sửa thì qua luồng báo sai (FL-3).
5. **Điều hướng.** Vào từ: SC-05; SC-02 (chạm thẻ “Chờ điền lên FAP”). Đi tới: SC-02 (“Về lịch dạy”, `go('/gv/today')`, xóa SC-03..SC-06 khỏi ngăn xếp). Back trước khi xác nhận: về SC-05. Back sau khi xác nhận: như “Về lịch dạy”.
6. **Ràng buộc.** Tổng Có mặt + Vắng luôn bằng sĩ số; nút chính chỉ bật khi “Cần xử lý” bằng 0 (NT-3). “Đã lên FAP” chỉ hiện khi extension báo xong (NT-5). Ô tìm trong sheet: bàn phím chữ, tối đa 50 ký tự; sheet đẩy lên trên bàn phím. Tên trong dòng `maxLines: 1`, dòng phụ xuống dòng.

### SC-07 · Báo sai hôm nay

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Top-level: “Báo sai” + dòng phụ hạn hoặc tình trạng) → `RefreshIndicator` → `ListView`, padding `s4`: nhóm “Mới · n” (tiêu đề `titleMedium` w600, thẻ cách `s3`) → khoảng `s6` → nhóm “Đã xử lý · n” → `bottomNavigationBar` CMP-04.
2. **Component.** CMP-05 · Top-level; CMP-03 Card (thẻ báo sai); CMP-10 · Giờ slot · khác, Vắng (“Đang ghi: Vắng”), Có mặt (“Đã sửa: Có mặt”), Vắng (“Giữ Vắng”); CMP-08 Empty state; CMP-04 · Vai trò=Giảng viên, Tab=Báo sai; CMP-07 · Skeleton list.
3. **Trạng thái.** Đang tải: `SlotCardSkeleton` × 2. Có báo sai mới (“SC-07 · Báo sai hôm nay”). Sau khi xử lý một cái (“… · Sau khi từ chối”, “… · Sau khi sửa Vy”). Đã xử lý hết (“… · Đã xử lý hết”). Trống (“… · Trống (CMP-08)”). Lỗi tải: CMP-09 · Mất mạng, nút “Thử lại”.
4. **Tương tác.** Chạm thẻ trong nhóm “Mới” → SC-08. Chạm thẻ “Đã xử lý” → SC-08 ở trạng thái đã sửa hoặc đã từ chối (chỉ xem). Kéo xuống để tải lại. Báo sai mới đến khi đang mở màn: thẻ chèn vào đầu nhóm “Mới”, huy hiệu tăng. Huy hiệu bằng số thẻ trong nhóm “Mới” và vẫn hiện khi đang ở tab này.
5. **Điều hướng.** Vào từ: tab “Báo sai”, thông báo đẩy. Đi tới: SC-08 (`push`), SC-02 (tab “Hôm nay” hoặc nút “Về lịch dạy” ở trạng thái trống). Back: thoát ứng dụng.
6. **Ràng buộc.** Lời sinh viên trên thẻ tối đa 2 dòng với “…”; xem đủ ở SC-08. Danh sách chỉ gồm báo sai của hôm nay; báo sai quá 23:59 không còn ở đây. Màn rộng 840+: hai cột với SC-08.

### SC-08 · Chi tiết báo sai

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Default “Chi tiết báo sai”) → `ListView`, padding `s4`: banner kết quả (chỉ sau khi quyết) → hàng hồ sơ (ảnh FAP 56, tên `titleMedium`, mã SV `mono`, `StatusChip`) → khoảng `s4` → thẻ bằng chứng (ba hàng nhãn `bodyMedium` màu `onSurfaceVariant` / giá trị `bodyMedium`: Buổi, Lượt quét, Kiểm tra) → khoảng `s4` → “Lời sinh viên · gửi hh:mm” và nội dung trong khối `surfaceContainerHighest` → thanh hành động đáy: dòng nhắc `bodyMedium`, `Row` hai nút “Từ chối” (Secondary) và “Sửa thành Có mặt” (Primary).
2. **Component.** CMP-05 · Default; CMP-10 · Vắng, Có mặt; CMP-01 · Secondary, Primary; CMP-06 · Destructive; banner nền `successContainer` (đã sửa) hoặc `surfaceContainerHighest` (đã từ chối).
3. **Trạng thái.** Chờ xử lý, có bằng chứng không có mặt (“SC-08 · … · Hoàng Mai Linh (bằng chứng: không có mặt)”). Chờ xử lý, không có bằng chứng ngược (“… · Ngô Thanh Vy (mất mạng)”). Dialog từ chối (“… · Dialog từ chối (destructive)”). Đang lưu: nút đang chạm ở State=Loading, nút còn lại tắt. Đã sửa (“… · Đã sửa”). Đã từ chối (“… · Đã từ chối (Giữ Vắng)”): banner nền `surfaceContainerHigh` (color/raised), icon info màu `onSurfaceVariant`, chữ “Đã từ chối, giữ Vắng. Sinh viên đã nhận lý do (…) và hướng dẫn gửi đơn khiếu nại trên FAP.”; chip “Giữ Vắng”; hai nút thay bằng “Về danh sách báo sai”. Lỗi lưu: `SnackBar` “Chưa lưu được vì mất mạng” với nút “Thử lại”.
4. **Tương tác.** “Sửa thành Có mặt” → lưu ngay, không hỏi lại (sửa được hoàn tác bằng cách mở lại; TC-2 cần ≤ 3 lần chạm), sinh viên nhận thông báo, extension điền lại lên FAP. “Từ chối” → dialog destructive có lý do soạn sẵn từ bằng chứng (ví dụ “không có mặt khi kiểm tra ngẫu nhiên lúc 07:07”); nếu không có bằng chứng thì dialog có ô nhập lý do bắt buộc, tối đa 200 ký tự. “Hủy” đóng dialog, ở lại SC-08. “Từ chối” trong dialog → lưu, gửi lý do và hướng dẫn đơn khiếu nại cho sinh viên.
5. **Điều hướng.** Vào từ: SC-07, thông báo đẩy. Sau khi sửa hoặc từ chối: về SC-07 (`pop`), thẻ chuyển sang nhóm “Đã xử lý”. Back: về SC-07, không thay đổi gì.
6. **Ràng buộc.** Lời sinh viên hiện đủ, không cắt (tối đa 200 ký tự theo SC-13). Hai nút mỗi nút cao 48, chia đôi; chữ lớn thì xếp dọc với nút Primary ở dưới cùng. Chỉ xử lý được trước 23:59 của ngày có slot; sau mốc đó hai nút tắt và dòng nhắc đổi thành “Đã qua hạn xử lý trong ngày”.

### SC-09 · Hôm nay (sinh viên)

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Top-level: “Hôm nay” + ngày giờ) → `RefreshIndicator` → `ListView`, padding `s4`: CMP-12 (nếu có buổi Vắng còn hạn) → các nhóm “Đang diễn ra”, “Sắp tới”, “Đã xong” như SC-02 → link “Báo sai điểm danh” ngay dưới thẻ Vắng còn hạn → vùng đáy cố định (chỉ khi trong khung giờ học): dòng trạng thái phiên `bodyMedium` canh giữa và nút “Quét mã điểm danh” → `bottomNavigationBar` CMP-04.
2. **Component.** CMP-05 · Top-level; CMP-12 · Còn hạn, Sắp hết hạn; CMP-03 Card; CMP-10 · Giờ slot, Giờ slot · khác, Chưa điểm danh, Chờ xác nhận, Có mặt, Vắng; CMP-01 · Primary (Default, Disabled), · Text (“Báo sai điểm danh”); CMP-04 · Vai trò=Sinh viên, có huy hiệu; CMP-07 · Skeleton thẻ slot.
3. **Trạng thái.** Đang tải: skeleton như SC-02. 7 frame có dữ liệu (xem `design/screen-spec.md`). Trống (hôm nay không có buổi): CMP-08 “Hôm nay bạn không có buổi học nào”, không có nút. Lỗi tải: CMP-09 · Mất mạng.
4. **Tương tác.** “Quét mã điểm danh” chỉ bật khi có phiên đang mở cho một buổi của sinh viên này và sinh viên chưa quét buổi đó; khi tắt, dòng phía trên nói lý do (“Chưa có phiên điểm danh nào đang mở”, “Bạn đã quét PRM393 lúc 07:01”). Chạm nút → SC-10. Chạm thẻ buổi đã xong → SC-12. Chạm thẻ buổi sắp tới hoặc đang diễn ra: không có hành động. Chạm “Báo sai điểm danh” → SC-12 của buổi Vắng đó. Trạng thái thẻ đổi từ “Chờ xác nhận” sang “Có mặt” hoặc “Vắng” khi giảng viên xác nhận (đẩy từ máy chủ hoặc khi mở lại màn).
5. **Điều hướng.** Vào từ: SC-01, SC-11 (“Về Hôm nay”), SC-14 (tab). Đi tới: SC-10 (`push`, toàn màn), SC-12 (`push`), SC-14 (đổi tab). Back: thoát ứng dụng.
6. **Ràng buộc.** Như SC-02 về cắt chữ và `Wrap` chip. Banner hạn chỉ hiện khi có buổi Vắng còn hạn; hạn tính theo môn (23:59 cùng ngày, môn LUK 2 ngày). Vùng đáy chỉ hiện từ 15 phút trước buổi đầu tiên tới hết buổi cuối cùng trong ngày.

### SC-10 · Quét mã

1. **Bố cục.** `Scaffold` (nền đen, `extendBodyBehindAppBar: true`) → `AppBar` trong suốt (CMP-05 Default với `CloseButton` màu trắng, “Quét mã điểm danh”) → `Stack`: xem trước camera full màn → khung ngắm canh giữa (vuông 240, 4 góc trắng) và dòng hướng dẫn trắng `bodyMedium` bên dưới → tấm đáy nền `surface`, bo góc trên `xxl`, padding `s4`: dòng nhắc chống gian lận (biểu tượng `hand`, `bodyMedium`) và nút “Không quét được?” (Secondary, rộng hết).
2. **Component.** CMP-05 · Default; CMP-01 · Secondary; CMP-09 Error state (bản quyền camera, nền `canvas`); thư viện quét mã (ví dụ `mobile_scanner`).
3. **Trạng thái.** Camera đang mở (“SC-10 · Quét mã”). Đang khởi động camera: nền đen, `CircularProgressIndicator` trắng giữa khung. Chưa có quyền camera hoặc bị từ chối (“… · Chưa có quyền camera”): CMP-09 với nút “Mở Cài đặt”. Thiết bị không có camera: CMP-09 “Máy này không có camera”, nút “Không quét được?”.
4. **Tương tác.** Camera tự nhận mã QR trong khung; nhận được mã hợp lệ của ứng dụng thì rung nhẹ và chuyển ngay sang SC-11 (không cần chạm). Mã QR lạ (không phải của ứng dụng): bỏ qua, không báo. “Không quét được?” → sheet hướng dẫn (xem SC-11). “Mở Cài đặt” → `openAppSettings()`; khi quay lại ứng dụng, kiểm tra quyền lại và mở camera nếu đã được cấp. Lần đầu: hỏi quyền camera của hệ thống trước khi hiện màn chưa có quyền.
5. **Điều hướng.** Vào từ: SC-09, SC-11 (“Quét lại”). Đi tới: SC-11 (`pushReplacement`, để Back từ SC-11 không quay lại camera). Back hoặc nút đóng: về SC-09.
6. **Ràng buộc.** Khóa hướng dọc. Không chụp hay lưu ảnh. Giữ màn sáng khi camera mở. Tấm đáy không che khung ngắm ở 360 × 800 và 412 × 915; khi chữ lớn, tấm đáy cao lên còn khung ngắm thu nhỏ tới tối thiểu 200.

### SC-11 · Kết quả quét

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Default “Kết quả quét”, nút Back) → `ListView`, padding `s4`: khối kết quả canh giữa (biểu tượng 48 trong vòng tròn nền soft, khoảng `s4`, tiêu đề `titleLarge`, khoảng `s2`, nguyên nhân `bodyMedium` canh giữa) → khoảng `s6` → thẻ thông tin (Môn, Phòng, Giờ quét `mono`) khi có → thanh hành động đáy: nút chính, và nút “Không quét được?” (Secondary) ở các lỗi không tự sửa được.
2. **Component.** CMP-05 · Default; CMP-07 · Spinner; CMP-09 · Mã hết hạn, Mất mạng (và cùng khuôn cho 4 lỗi còn lại); CMP-10 · Chờ xác nhận; CMP-01 · Primary, Secondary; bottom sheet “Không quét được?”.
3. **Trạng thái.** Đang xác thực (spinner, “Đang xác thực mã…”). Thành công. Mã hết hạn. Mất mạng. Đã quét rồi. Không có trong lớp. Máy đã dùng cho tài khoản khác. QR đã đóng. Mỗi trạng thái một frame trên trang 03; chữ ở `design/screen-spec.md`.
4. **Tương tác.** Màn mở ra ở trạng thái đang xác thực và gửi mã lên máy chủ ngay; hết 10 giây chưa có trả lời thì coi như mất mạng. “Quét lại” (mã hết hạn) → SC-10. “Thử lại” (mất mạng) → gửi lại đúng mã vừa quét; máy chủ xét hạn mã theo lúc quét và nhận mã liền trước (mục 2.3), nên thử lại trong vòng 30 giây vẫn có thể thành công; quá hạn thì trả “Mã đã hết hạn”. “Về Hôm nay” → SC-09. “Không quét được?” → sheet: “Báo giảng viên ngay trong giờ”, giải thích ghi tay, nút “Đã hiểu” đóng sheet.
5. **Điều hướng.** Vào từ: SC-10 (thay thế SC-10 trong ngăn xếp). Đi tới: SC-10 (“Quét lại”, `pushReplacement`), SC-09 (“Về Hôm nay”, `go('/sv/today')`). Back: về SC-09, không về camera.
6. **Ràng buộc.** Giờ quét hiện tới giây (`mono`). Chữ nguyên nhân xuống dòng, không cắt. Thành công không đồng nghĩa “Có mặt”: chip là “Chờ xác nhận” (NT-5). Gửi lại khi mất mạng không tạo lượt quét thứ hai (máy chủ chống trùng theo mã sinh viên và phiên).

### SC-12 · Chi tiết buổi học

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Default “MAS291 · Slot 2”) → `ListView`, padding `s4`: thẻ “Trạng thái trên FAP” (ngày `bodyMedium` + `StatusChip`) → khoảng `s4` → thẻ thông tin (Môn, Phòng, Giờ học, Giảng viên, Lượt quét; nhãn trái `onSurfaceVariant`, giá trị phải) → thanh hành động đáy: CMP-12 phía trên nút chính.
2. **Component.** CMP-05 · Default; CMP-10 · Có mặt, Vắng, Chưa điểm danh, Chờ xác nhận; CMP-12 · Còn hạn, Sắp hết hạn, Đã qua hạn; CMP-01 · Primary.
3. **Trạng thái.** Còn hạn (“SC-12 · Chi tiết buổi học (K3)”). Đã qua hạn (“… · Đã qua hạn (K4)”). Buổi Có mặt: không có banner, không có nút. Buổi đã có báo sai đang chờ: banner “Bạn đã báo sai buổi này lúc 21:02” và nút “Xem báo sai” (Secondary) thay cho nút báo sai. Đang tải: skeleton hai thẻ.
4. **Tương tác.** “Báo sai điểm danh” → SC-13. “Xem cách gửi đơn khiếu nại” → SC-15. “Xem báo sai” → SC-14. Hạn kiểm tra lại lúc mở màn và mỗi phút; qua 23:59 khi đang mở màn thì nút đổi sang “Xem cách gửi đơn khiếu nại”.
5. **Điều hướng.** Vào từ: SC-09 (chạm thẻ hoặc link báo sai). Đi tới: SC-13, SC-15, SC-14. Back: về SC-09.
6. **Ràng buộc.** Nút báo sai chỉ có ở buổi đang ghi Vắng và còn hạn. Tên môn đầy đủ xuống dòng, không cắt. Màn rộng: cột phải của SC-09 (mục 2.5).

### SC-13 · Gửi báo sai

1. **Bố cục.** `Scaffold(resizeToAvoidBottomInset: true)` → `AppBar` (CMP-05 Default “Gửi báo sai”) → `ListView`, padding `s4`: thẻ đọc sẵn (Buổi, Ngày, Đang ghi, Gửi tới) → khoảng `s4` → CMP-02 “Lý do báo sai” (nhiều dòng, 4 đến 8 dòng) với gợi ý “Giảng viên đọc lý do này” và bộ đếm → banner lỗi (khi mất mạng) → thanh hành động đáy: dòng hạn `bodyMedium` và nút chính.
2. **Component.** CMP-05 · Default; CMP-02 · Default, Focused, Filled, Error, Disabled (khi đang gửi); CMP-01 · Primary (Default, Disabled, Loading); banner `errorContainer`.
3. **Trạng thái.** Nhập (“SC-13 · Gửi báo sai (K3)”). Đang gửi (“… · Đang gửi”): ô nhập tắt, nút Loading. Mất mạng (“… · Mất mạng (lỗi có đường hồi phục)”): giữ chữ đã nhập, nút “Thử gửi lại”. Lỗi nhập: ô rỗng mà bấm gửi → ô ở State=Error “Viết lý do để giảng viên hiểu chuyện gì đã xảy ra.”
4. **Tương tác.** Ô lý do tối đa 200 ký tự (không cho gõ thêm), tối thiểu 10 ký tự sau khi bỏ khoảng trắng hai đầu. Nút “Gửi báo sai” luôn bật; kiểm tra khi bấm. Gửi thành công → SC-14 trạng thái “Đã gửi”. Chữ đang nhập được lưu nháp trên máy; rời màn rồi quay lại vẫn còn. Không có dialog xác nhận trước khi gửi (gửi được sửa bằng cách báo lại, và một buổi chỉ có một báo sai đang chờ).
5. **Điều hướng.** Vào từ: SC-12. Đi tới: SC-14 (`go('/sv/reports')`, xóa SC-12, SC-13 khỏi ngăn xếp). Back: về SC-12, giữ nháp.
6. **Ràng buộc.** Bàn phím chữ, `textCapitalization: sentences`, `keyboardType: multiline`. Khi bàn phím mở, thanh hành động đáy nằm ngay trên bàn phím và ô nhập cuộn vào tầm nhìn. Bộ đếm “90/200” dùng `mono`. Hết hạn khi đang nhập: banner đổi sang “Đã qua hạn báo sai”, nút đổi thành “Xem cách gửi đơn khiếu nại”, nháp vẫn giữ để sinh viên chép sang đơn.

### SC-14 · Báo sai của tôi

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Top-level “Báo sai của tôi”) → `RefreshIndicator` → `ListView`, padding `s4`: mỗi báo sai là một thẻ (tiêu đề buổi `titleMedium`, dòng phụ ngày và người nhận, CMP-13 timeline, phần kết quả) cách nhau `s4`; mới nhất ở trên → `bottomNavigationBar` CMP-04.
2. **Component.** CMP-05 · Top-level; CMP-03 Card; CMP-13 Report timeline · Đã gửi, Đã xem, Đã sửa, Bị từ chối; CMP-10 · Đã lên FAP; CMP-01 · Secondary (“Xem cách gửi đơn khiếu nại”); CMP-08 Empty state; CMP-04 · Vai trò=Sinh viên, Tab=Báo sai.
3. **Trạng thái.** Đã gửi (“SC-14 · … · Đã gửi (K3)”). Đã sửa (“… · Đã sửa”). Bị từ chối (“… · Bị từ chối”). Trống (“… · Trống”). Đang tải: skeleton một thẻ. Lỗi tải: CMP-09 · Mất mạng.
4. **Tương tác.** Mở tab này đánh dấu mọi kết quả mới là đã xem; huy hiệu trên tab mất. Kéo xuống để tải lại. “Xem cách gửi đơn khiếu nại” (khi bị từ chối) → SC-15. “Về Hôm nay” (khi trống) → SC-09. Thẻ không bấm được (mọi thông tin đã hiện).
5. **Điều hướng.** Vào từ: tab “Báo sai”, SC-13 (sau khi gửi), thông báo đẩy. Đi tới: SC-15 (`push`), SC-09 (đổi tab). Back: thoát ứng dụng.
6. **Ràng buộc.** Lý do từ chối hiện đủ, xuống dòng. Mỗi bước trên timeline có giờ dạng “21:20 hôm nay” (khác ngày thì “21:20, 13/10”). Danh sách giữ báo sai của học kỳ hiện tại.

### SC-15 · Hướng dẫn đơn khiếu nại

1. **Bố cục.** `Scaffold` → `AppBar` (CMP-05 Default “Đơn khiếu nại điểm danh”) → `ListView`, padding `s4`: CMP-12 · Đã qua hạn (có câu nói buổi nào) → khoảng `s6` → “3 bước trên FAP” `titleMedium` → 3 bước (số tròn 32 nền `primaryContainer` + chữ `bodyMedium`) cách nhau `s3` → khoảng `s6` → thẻ “Thời gian xử lý”, “Nơi xử lý” → thanh hành động đáy: dòng “Mở fap.fpt.edu.vn trên trình duyệt” và nút “Mở FAP”.
2. **Component.** CMP-05 · Default; CMP-12 · Đã qua hạn; CMP-01 · Primary (có biểu tượng `external-link`).
3. **Trạng thái.** Một trạng thái (“SC-15 · Hướng dẫn đơn khiếu nại (K4)”). Nội dung bước 2 điền theo buổi (môn, slot, ngày).
4. **Tương tác.** “Mở FAP” → `launchUrl(Uri.parse('https://fap.fpt.edu.vn'), mode: LaunchMode.externalApplication)`. Không mở được trình duyệt → `SnackBar` “Không mở được trình duyệt. Truy cập fap.fpt.edu.vn bằng máy khác.” Nhấn giữ đoạn “MAS291 · Slot 2 · 13/10” ở bước 2 để sao chép (`SelectableText`).
5. **Điều hướng.** Vào từ: SC-12 (đã qua hạn), SC-14 (bị từ chối). Back: về màn trước.
6. **Ràng buộc.** Ứng dụng không làm lại quy trình đơn, chỉ dẫn sang FAP. Tên mục “Thủ tục/Đơn từ”, nơi và thời gian xử lý cần đối chiếu với FAP thật trước khi phát hành (`design/figma-build.md` mục 4); đặt trong file chuỗi để sửa không cần build lại giao diện.
