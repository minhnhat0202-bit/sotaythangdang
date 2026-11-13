/* =============================================================
   NỘI DUNG THI — chỉ ghi những gì có nguồn.

   - Ba sàn thi và bàn theo nhóm: sơ đồ phân sàn của Ban tổ chức (docs/noi-bo/phan-san-thi.jpg).
   - Võ phục, trang thiết bị: Thông báo số 14/TB-LĐ TKDHN ngày 12/11/2026.
   - Bài quyền theo đẳng: Quy định thi thăng cấp, đẳng của VTF (QĐ 152/2025/QĐ-VTF,
     căn cứ Kukkiwon) — là quy định chung, không phải văn bản riêng của kỳ thi.
   Không tự dựng thêm nội dung (điều kiện dự thi, chi tiết từng sàn…) khi chưa có văn bản.

   Mỗi phần tử trong `dang`:
     so        số đẳng (dùng làm mã, không trùng)
     ten       tên hiện trên trang      tenNgan: chữ trên nút chọn
     phu       dòng phụ                  mau: màu ô số
     ghiChu    ô vàng nhạt ở đầu (để "" nếu không có)
     dieuKien  mảng câu (để [] thì ẩn)
     quyen     { batBuoc: [...], tuChon: [...] }
     phanThi   mảng { icon, ten, moTa, items } (để [] thì ẩn)
   ============================================================= */
window.NOI_DUNG_THI = {
  capNhat: "13/11/2026",

  nguon: {
    ten: "Quy định thi thăng cấp, đẳng của Liên đoàn Taekwondo Việt Nam",
    quyetDinh: "Quyết định số 152/2025/QĐ-VTF",
    ngay: "22/12/2025",
    canCu: "Căn cứ Quy định thi thăng cấp, đẳng hiện hành của Kukkiwon"
  },

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
      so: 1, ten: "Nhất đẳng", tenNgan: "1 đẳng", phu: "SBD 1001–1438 · sáng: 1001–1088 · chiều: 1089–1438", mau: "#111111",
      ghiChu: "Võ phục Taekwondo truyền thống, cổ áo trắng, thắt đai đỏ. Sáng (SBD 1001–1088): Kỹ thuật bàn 1 · Đối luyện bàn 2 · Thể lực bàn 5. Chiều: SBD 1089–1264 bàn 1 · 2 · 5; SBD 1265–1438 bàn 3 · 4 · 5.",
      dieuKien: [],
      quyen: {
        batBuoc: ["Taegeuk 8 (Taegeuk Pal-jang)"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 7"]
      },
      phanThi: []
    },
    {
      so: 2, ten: "Nhị đẳng", tenNgan: "2 đẳng", phu: "Thi buổi sáng · có mặt 07h00", mau: "#1C3D82",
      ghiChu: "Võ phục theo quy định WT, nhãn hiệu được WT công nhận năm 2026. Kỹ thuật bàn 3 · Đối luyện bàn 4 · Thể lực bàn 5.",
      dieuKien: [],
      quyen: {
        batBuoc: ["Koryo"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 8"]
      },
      phanThi: []
    },
    {
      so: 3, ten: "Tam đẳng", tenNgan: "3 đẳng", phu: "Thi buổi sáng · có mặt 07h00", mau: "#C8102E",
      ghiChu: "Võ phục theo quy định WT, nhãn hiệu được WT công nhận năm 2026. Thi tất cả các nội dung tại bàn 1.",
      dieuKien: [],
      quyen: {
        batBuoc: ["Keumgang"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 8", "Koryo"]
      },
      phanThi: []
    }
  ]
};
