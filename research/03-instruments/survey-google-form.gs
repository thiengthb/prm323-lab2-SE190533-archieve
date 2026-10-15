/**
 * Dựng Google Form khảo sát D-05a từ research/03-instruments/survey-google-form.md.
 *
 * Cách chạy (một lần, khoảng 3 phút):
 *   1. Mở https://script.google.com bằng tài khoản Google cá nhân → Dự án mới.
 *   2. Xóa đoạn mã mẫu, dán toàn bộ tệp này, bấm Lưu.
 *   3. Chọn hàm taoForm ở thanh trên cùng → Chạy → cấp quyền khi Google hỏi
 *      (Nâng cao → Đi tới dự án → Cho phép).
 *   4. Mở Nhật ký thực thi: có link để gửi đi, link chỉnh sửa và link Sheets.
 *
 * Script tự đặt lịch đóng form lúc 11:00 thứ Sáu 16/10/2026 (giờ Việt Nam).
 * Câu hỏi giữ nguyên văn trong survey-google-form.md, không thêm câu nào.
 */

var HAN_DONG = new Date('2026-10-16T11:00:00+07:00');

function taoForm() {
  var form = FormApp.create('Khảo sát 2 phút về việc điểm danh trên lớp');
  form.setDescription('Mình là sinh viên FPTU, đang làm bài môn PRM323 về trải nghiệm điểm danh. ' +
    'Khảo sát ẩn danh, không có câu trả lời đúng hay sai. Cảm ơn bạn đã giúp!');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setProgressBar(true);
  form.setConfirmationMessage('Cảm ơn bạn đã trả lời!');
  form.setCustomClosedFormMessage('Khảo sát đã đóng lúc 11:00 ngày 16/10/2026. Cảm ơn bạn!');
  try { form.setRequireLogin(false); } catch (e) { /* chỉ có ở tài khoản Workspace */ }

  // Phần 1
  var vaiTro = form.addMultipleChoiceItem().setTitle('Bạn là:').setRequired(true);

  // Phần 2: Sinh viên (chia ba trang để câu 6 chỉ hiện khi câu 5 chọn “Có”)
  var p2 = form.addPageBreakItem().setTitle('Phần 2: Sinh viên');
  chonMot(form, 'Buổi học gần nhất có điểm danh, giảng viên điểm danh bằng cách nào?',
    ['Gọi tên từng người', 'Nhìn lớp rồi tự đánh dấu, không gọi tên', 'Chuyền giấy ký tên'], true);
  chonMot(form, 'Phần điểm danh đó diễn ra vào lúc nào của buổi học?',
    ['Đầu buổi', 'Giữa buổi', 'Cuối buổi', 'Nhiều lần trong buổi', 'Không để ý']);
  chonMot(form, 'Trong học kỳ này, bạn xem tình trạng điểm danh của mình trên FAP khoảng bao nhiêu lần?',
    ['Chưa lần nào', '1–2 lần', '3–5 lần', 'Hơn 5 lần']);
  var cau5 = form.addMultipleChoiceItem().setRequired(true)
    .setTitle('Từ đầu học kỳ này, đã có lần nào tình trạng điểm danh trên FAP của bạn khác với những gì đã xảy ra chưa?');

  var p2b = form.addPageBreakItem().setTitle('Phần 2: Sinh viên (tiếp)');
  form.addTextItem().setTitle('Sau đó bạn đã làm gì?');

  var p2c = form.addPageBreakItem().setTitle('Phần 2: Sinh viên (tiếp)');
  chonNhieu(form, 'Lúc ngồi trong lớp, bạn thường có thiết bị nào trong tay hoặc trên bàn?',
    ['Điện thoại', 'Laptop', 'Máy tính bảng', 'Không có']);
  chonMot(form, 'Điện thoại bạn đang dùng chạy hệ điều hành nào?', ['Android', 'iOS', 'Khác']);

  // Phần 3: Giảng viên / Cán bộ
  var p3 = form.addPageBreakItem().setTitle('Phần 3: Giảng viên / Cán bộ');
  p3.setGoToPage(FormApp.PageNavigationType.SUBMIT); // hết Phần 2 thì gửi luôn
  chonMot(form, 'Buổi dạy gần nhất có điểm danh, anh/chị điểm danh bằng cách nào?',
    ['Gọi tên', 'Nhìn lớp rồi đánh dấu', 'Chuyền giấy', 'Tôi không trực tiếp điểm danh'], true);
  chonMot(form, 'Với buổi đó, phần điểm danh (từ lúc bắt đầu đến lúc xong trên FAP) mất khoảng bao lâu?',
    ['Dưới 3 phút', '3–5 phút', '5–10 phút', 'Hơn 10 phút', 'Không nhớ']);
  chonMot(form, 'Kết quả điểm danh buổi đó được ghi lên FAP vào lúc nào?',
    ['Trong giờ học', 'Ngay sau buổi', 'Trong ngày', 'Ngày khác', 'Không phải tôi ghi']);
  chonNhieu(form, 'Lúc điểm danh, anh/chị dùng thiết bị nào để ghi lên FAP?',
    ['Laptop', 'Máy tính của phòng học', 'Điện thoại', 'Máy tính bảng', 'Giấy rồi nhập sau']);
  chonMot(form, 'Trong học kỳ này, anh/chị đã phải sửa điểm danh của một buổi đã ghi khoảng bao nhiêu lần?',
    ['Chưa lần nào', '1–2', '3–5', 'Hơn 5']);
  form.addTextItem().setTitle('Một buổi điểm danh suôn sẻ với anh/chị là như thế nào?')
    .setHelpText('Không bắt buộc');
  chonMot(form, 'Anh/chị đang dạy hoặc làm việc với khoảng bao nhiêu lớp trong học kỳ này?',
    ['1–2', '3–4', '5–6', 'Hơn 6']);

  // Rẽ nhánh
  vaiTro.setChoices([
    vaiTro.createChoice('Sinh viên', p2),
    vaiTro.createChoice('Giảng viên', p3),
    vaiTro.createChoice('Cán bộ/nhân viên trường', p3)
  ]);
  cau5.setChoices([
    cau5.createChoice('Chưa', p2c),
    cau5.createChoice('Có, 1 lần', p2b),
    cau5.createChoice('Có, nhiều hơn 1 lần', p2b),
    cau5.createChoice('Không biết', p2c)
  ]);

  // Bảng tính nhận câu trả lời, để xuất CSV gửi Claude
  var ss = SpreadsheetApp.create('Câu trả lời: Khảo sát điểm danh D-05a');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  try { form.setPublished(true); } catch (e) { /* bản FormApp cũ không có hàm này */ }
  form.setAcceptingResponses(true);

  PropertiesService.getScriptProperties().setProperty('FORM_ID', form.getId());
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('dongForm').timeBased().at(HAN_DONG).create();

  Logger.log('Link gửi đi: ' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('Link chỉnh sửa: ' + form.getEditUrl());
  Logger.log('Bảng câu trả lời: ' + ss.getUrl());
  Logger.log('Form sẽ tự đóng lúc 11:00 ngày 16/10/2026 (giờ Việt Nam)');
}

function dongForm() {
  var id = PropertiesService.getScriptProperties().getProperty('FORM_ID');
  if (id) FormApp.openById(id).setAcceptingResponses(false);
}

function chonMot(form, tieuDe, luaChon, coCachKhac) {
  var item = form.addMultipleChoiceItem().setTitle(tieuDe).setChoiceValues(luaChon).setRequired(true);
  if (coCachKhac) item.showOtherOption(true);
  return item;
}

function chonNhieu(form, tieuDe, luaChon) {
  return form.addCheckboxItem().setTitle(tieuDe).setChoiceValues(luaChon).setRequired(true);
}
