/* =============================================================
   NỘI DUNG THI — chỉ ghi những gì văn bản quy định.

   Nguồn: Thông báo số 14/TB-LĐ TKDHN ngày 12/11/2026 (võ phục, trang thiết bị,
   buổi thi, bàn phát số báo danh) và sơ đồ phân sàn thi của Ban tổ chức.
   Không đưa nội dung bài thi cụ thể (bài quyền, kỹ thuật…) khi văn bản không nêu.

   Mỗi phần tử trong `dang`:
     so            số đẳng (dùng làm mã, không trùng)
     ten           tên hiện trên trang      tenNgan: chữ trên nút chọn
     phu           dòng phụ                  mau: màu ô số
     ghiChu        ô vàng nhạt ở đầu (để "" nếu không có)
     dieuKien      mảng câu (để [] thì ẩn), tiêu đề khối: tieuDeDieuKien
     quyen         { batBuoc: [], tuChon: [] } (cả hai trống thì ẩn)
     phanThi       mảng { icon, ten, moTa, items } (để [] thì ẩn), tiêu đề khối: tieuDePhanThi
   ============================================================= */
window.NOI_DUNG_THI = {
  capNhat: "13/11/2026",

  /* Dòng nguồn ở chân tab: để null thì ẩn */
  nguon: null,

  /* Ô ghi chú vàng đầu tab: để "" thì ẩn */
  luuY: "",

  /* Thẻ "Poom hay Dan?": để null thì ẩn; muốn hiện lại thì đặt { tieuDe, items: [...] } */
  poomDan: null,

  /* Ba sàn thi (theo sơ đồ phân sàn), hiện ở đầu tab "Nội dung thi" */
  phanMon: [
    { ten: "Sàn Kỹ thuật", moTa: "Bàn 1 hoặc bàn 3 tuỳ nhóm — xem bảng Sàn thi theo nhóm ở tab Số báo danh." },
    { ten: "Sàn Đối luyện", moTa: "Bàn 2 hoặc bàn 4 tuỳ nhóm. Thí sinh mang đủ bảo hộ chân, bảo hộ tay, găng tay; giáp và mũ do Ban tổ chức chuẩn bị." },
    { ten: "Sàn Thể lực", moTa: "Bàn 5 cho mọi nhóm." }
  ],

  dang: [
    {
      so: 1, ten: "Nhất đẳng", tenNgan: "1 đẳng", phu: "SBD 1001–1438", mau: "#111111",
      ghiChu: "",
      dieuKien: [],
      quyen: { batBuoc: [], tuChon: [] },
      tieuDePhanThi: "Yêu cầu theo Thông báo số 14",
      phanThi: [
        { icon: "shirt", ten: "Võ phục", moTa: "", items: [
          "Võ phục Taekwondo truyền thống theo đúng quy định.",
          "Cổ áo màu trắng.",
          "Thắt đai màu đỏ."
        ] },
        { icon: "ticket", ten: "Nhận số báo danh — từ 15h00 Thứ Bảy 14/11", moTa: "", items: [
          "Bàn số 1: SBD 1001–1109",
          "Bàn số 2: SBD 1110–1220",
          "Bàn số 3: SBD 1221–1320",
          "Bàn số 4: SBD 1321–1438"
        ] },
        { icon: "calendar-check", ten: "Buổi thi — Chủ nhật 15/11", moTa: "", nhom: [
          { ten: "SBD 1001–1088", san: [["Buổi sáng · có mặt", "07h00"]] },
          { ten: "SBD 1089–1438", san: [["Buổi chiều · có mặt", "12h30"]] }
        ] },
        { icon: "layout-grid", ten: "Sàn thi", moTa: "", nhom: [
          { ten: "SBD 1001–1088 · sáng", san: [["Kỹ thuật", "Bàn 1"], ["Đối luyện", "Bàn 2"], ["Thể lực", "Bàn 5"]] },
          { ten: "SBD 1089–1264 · chiều", san: [["Kỹ thuật", "Bàn 1"], ["Đối luyện", "Bàn 2"], ["Thể lực", "Bàn 5"]] },
          { ten: "SBD 1265–1438 · chiều", san: [["Kỹ thuật", "Bàn 3"], ["Đối luyện", "Bàn 4"], ["Thể lực", "Bàn 5"]] }
        ] },
        { icon: "shield", ten: "Trang thiết bị tự chuẩn bị", moTa: "", items: [
          "Bảo hộ chân, bảo hộ tay, găng tay, võ phục (Kukki) theo quy định.",
          "Kiểm tra kỹ trước khi đến địa điểm thi: đầy đủ, đúng quy cách."
        ] }
      ]
    },
    {
      so: 2, ten: "Nhị đẳng", tenNgan: "2 đẳng", phu: "Thi buổi sáng Chủ nhật 15/11", mau: "#1C3D82",
      ghiChu: "",
      dieuKien: [],
      quyen: { batBuoc: [], tuChon: [] },
      tieuDePhanThi: "Yêu cầu theo Thông báo số 14",
      phanThi: [
        { icon: "shirt", ten: "Võ phục", moTa: "", items: [
          "Võ phục theo quy định của Liên đoàn Taekwondo Thế giới (WT).",
          "Thuộc các nhãn hiệu được Liên đoàn Taekwondo Thế giới công nhận năm 2026."
        ] },
        { icon: "ticket", ten: "Nhận số báo danh — từ 15h00 Thứ Bảy 14/11", moTa: "", items: [
          "Bàn số 5 (chung cho thí sinh thi 2 đẳng và 3 đẳng)."
        ] },
        { icon: "calendar-check", ten: "Buổi thi — Chủ nhật 15/11", moTa: "", items: [
          "Buổi sáng, có mặt điểm danh 07h00."
        ] },
        { icon: "layout-grid", ten: "Sàn thi", moTa: "", nhom: [
          { ten: "Buổi sáng", san: [["Kỹ thuật", "Bàn 3"], ["Đối luyện", "Bàn 4"], ["Thể lực", "Bàn 5"]] }
        ] },
        { icon: "shield", ten: "Trang thiết bị tự chuẩn bị", moTa: "", items: [
          "Bảo hộ chân, bảo hộ tay, găng tay, võ phục (Kukki) theo quy định.",
          "Kiểm tra kỹ trước khi đến địa điểm thi: đầy đủ, đúng quy cách."
        ] }
      ]
    },
    {
      so: 3, ten: "Tam đẳng", tenNgan: "3 đẳng", phu: "Thi buổi sáng Chủ nhật 15/11", mau: "#C8102E",
      ghiChu: "",
      dieuKien: [],
      quyen: { batBuoc: [], tuChon: [] },
      tieuDePhanThi: "Yêu cầu theo Thông báo số 14",
      phanThi: [
        { icon: "shirt", ten: "Võ phục", moTa: "", items: [
          "Võ phục theo quy định của Liên đoàn Taekwondo Thế giới (WT).",
          "Thuộc các nhãn hiệu được Liên đoàn Taekwondo Thế giới công nhận năm 2026."
        ] },
        { icon: "ticket", ten: "Nhận số báo danh — từ 15h00 Thứ Bảy 14/11", moTa: "", items: [
          "Bàn số 5 (chung cho thí sinh thi 2 đẳng và 3 đẳng)."
        ] },
        { icon: "calendar-check", ten: "Buổi thi — Chủ nhật 15/11", moTa: "", items: [
          "Buổi sáng, có mặt điểm danh 07h00."
        ] },
        { icon: "layout-grid", ten: "Sàn thi", moTa: "", nhom: [
          { ten: "Buổi sáng", san: [["Tất cả nội dung", "Bàn 1"]] }
        ] },
        { icon: "shield", ten: "Trang thiết bị tự chuẩn bị", moTa: "", items: [
          "Bảo hộ chân, bảo hộ tay, găng tay, võ phục (Kukki) theo quy định.",
          "Kiểm tra kỹ trước khi đến địa điểm thi: đầy đủ, đúng quy cách."
        ] }
      ]
    }
  ]
};
