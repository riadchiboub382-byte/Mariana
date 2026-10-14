function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('الطلبات') || ss.insertSheet('الطلبات');
  if (sh.getLastRow() === 0) {
    sh.appendRow(['التاريخ', 'الاسم', 'الهاتف', 'الولاية', 'العنوان', 'الحقيبة', 'اللون', 'الكمية', 'المجموع (دج)', 'ملاحظات', 'الحالة']);
  }
  var p = e.parameter;
  sh.appendRow([new Date(), p.name, p.phone, p.wilaya, p.address, p.bag, p.color, p.qty, p.total, p.notes, 'جديد']);
  return ContentService.createTextOutput('ok');
}
