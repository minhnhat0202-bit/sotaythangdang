/* =============================================================
   THÔNG TIN KỲ THI HIỆN TẠI — sửa tệp này mỗi khi có kỳ thi mới.

   Nguồn: Thông báo của Liên đoàn Taekwondo thành phố Hà Nội ngày 12/11/2026
   "V/v tổ chức lớp tập huấn và Kỳ thi thăng 1, 2, 3 Đẳng Taekwondo Quốc gia
   lần thứ II năm 2026 tại TP. Hà Nội" (docs/thong-bao-ky-thi-lan-2-2026.pdf).

   - Chữ trong dấu ngoặc kép là nội dung hiện nguyên văn trên trang.
   - Nhãn [CẦN CẬP NHẬT] / [CẦN XÁC NHẬN] sẽ hiện VÀNG trên trang;
     chạy `node tools/kiem-tra.mjs --phat-hanh` để chắc không còn nhãn
     nào trước khi gửi cho thí sinh.
   - Trường để chuỗi rỗng "" hoặc mảng rỗng [] thì phần đó tự ẩn.
   ============================================================= */
window.KY_THI = {
  capNhat: "12/11/2026",

  donViToChuc: "Liên đoàn Taekwondo TP. Hà Nội",
  tieuDe: "Kỳ thi thăng 1, 2, 3 đẳng Quốc gia lần II/2026",
  dot: "Kỳ thi thăng 1, 2, 3 Đẳng Taekwondo Quốc gia lần thứ II năm 2026 tại TP. Hà Nội",
  ngayThi: "Chủ nhật, 15/11/2026",
  ngayPhu: "Thứ Bảy, 14/11/2026 — tập huấn & phát SBD",
  logo: "assets/img/logo.png",
  doiTuong: "Thí sinh thi thăng 1, 2, 3 đẳng đã đăng ký qua các câu lạc bộ, điểm tập, đơn vị thuộc Liên đoàn. Thí sinh thi 1 đẳng có số báo danh từ 1001 đến 1438.",
  ghiChuChung: "Thí sinh có mặt đúng buổi thi theo số báo danh (xem tab Số báo danh). Thắc mắc về số báo danh, lịch thi: liên hệ bộ phận Thư ký hoặc Văn phòng Liên đoàn.",

  /* ---- Văn bản gốc của Ban tổ chức (link hiện ở tab Tổng quan) ---- */
  vanBan: [
    { ten: "Thông báo tổ chức lớp tập huấn và Kỳ thi thăng 1, 2, 3 Đẳng lần thứ II năm 2026 (PDF, 12/11/2026)", url: "docs/thong-bao-ky-thi-lan-2-2026.pdf" }
  ],

  /* ---- Địa điểm: mỗi phần tử là một thẻ; phần tử đầu là địa điểm chính ----
     mapUrl: link Google Maps → nút "Chỉ đường"; mapEmbed: link nhúng (…&output=embed); để "" thì ẩn */
  diaDiem: [
    {
      nhan: "Địa điểm thi · Chủ nhật 15/11",
      ten: "Nhà thi đấu TDTT Trung tâm Văn hóa – Thông tin và Thể thao phường Tương Mai",
      diaChi: "Số 104 Nguyễn An Ninh, phường Tương Mai, TP. Hà Nội",
      ghiChu: "[CẦN CẬP NHẬT] Cổng vào và chỗ gửi xe cho phụ huynh.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=104+Nguyễn+An+Ninh,+Tương+Mai,+Hà+Nội",
      mapEmbed: "https://maps.google.com/maps?q=104+Nguyễn+An+Ninh,+Tương+Mai,+Hà+Nội&z=16&output=embed",
      diChuyen: []
    },
    {
      nhan: "Tập huấn & phát SBD · Thứ Bảy 14/11",
      ten: "Phòng tập Taekwondo Hà Nội",
      diaChi: "Đường Lê Đức Thọ, Mỹ Đình, TP. Hà Nội",
      ghiChu: "[CẦN CẬP NHẬT] Số nhà cụ thể và chỗ gửi xe.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Phòng+tập+Taekwondo+Hà+Nội,+Lê+Đức+Thọ,+Mỹ+Đình",
      mapEmbed: "",
      diChuyen: []
    }
  ],
  diChuyen: [],

  /* ---- Hotline (nút đỏ ở đầu trang) ---- */
  hotline: [
    { ten: "Bộ phận Thư ký kỳ thi", sdt: "[CẦN CẬP NHẬT]" },
    { ten: "Văn phòng Liên đoàn", sdt: "[CẦN CẬP NHẬT]" }
  ],

  /* ---- Tra cứu số báo danh: có link (Google Sheet, form…) thì điền, nút tự hiện ---- */
  traCuu: { nhan: "Tra cứu SBD", url: "" },

  /* ---- Ban tổ chức ---- */
  banToChuc: [
    { vaiTro: "Đơn vị tổ chức", ten: "Liên đoàn Taekwondo thành phố Hà Nội" },
    { vaiTro: "Ký thông báo", ten: "Ông Đào Quốc Thắng — Phó Chủ tịch thường trực" },
    { vaiTro: "Ban Giảng huấn, Ban Trọng tài", ten: "Tập huấn, kiểm tra võ phục, điều hành các nội dung thi" },
    { vaiTro: "Bộ phận Thư ký", ten: "Phát số báo danh, xử lý mất SBD, điều chỉnh thông tin" }
  ],

  /* ---- Khung thời gian ----
     ngay: các thẻ cùng `ngay` được gom thành một ngày (địa điểm lấy ở thẻ đầu của ngày đó)
     mau: emerald | blue | amber | rose | violet | cyan | orange (bỏ trống thì tự xoay vòng) */
  ghiChuLichTrinh: "",
  lichTrinh: [
    {
      ngay: "Thứ Bảy, 14/11/2026 — Tập huấn & phát số báo danh",
      diaDiem: "Phòng tập Taekwondo Hà Nội, đường Lê Đức Thọ, Mỹ Đình",
      gio: "08:00", ten: "Tập huấn buổi sáng", mau: "emerald",
      moTa: "Thí sinh có mặt lúc 08h00. [CẦN XÁC NHẬN] Nhóm nào tập huấn buổi sáng, nhóm nào buổi chiều.",
      buoc: [
        { ten: "Điểm danh, ổn định tổ chức", moTa: "Huấn luyện viên và võ sinh có mặt đúng giờ." },
        { ten: "Triển khai nội dung chuyên môn", moTa: "Theo chương trình của Ban Giảng huấn. Ban Giảng huấn kiểm tra võ phục ngay trong buổi tập huấn." }
      ]
    },
    {
      ngay: "Thứ Bảy, 14/11/2026 — Tập huấn & phát số báo danh",
      gio: "Từ 11:00", ten: "Phát số báo danh", mau: "amber",
      moTa: "Ban Tổ chức bố trí 05 bàn phát số. Thí sinh kiểm tra thông tin, nhận đúng SBD theo danh sách đăng ký và làm theo hướng dẫn của bộ phận Thư ký.",
      buoc: [
        { ten: "Bàn 1–4: thí sinh thi 1 đẳng", moTa: "Bàn 1: SBD 1001–1109 · Bàn 2: SBD 1110–1220 · Bàn 3: SBD 1221–1320 · Bàn 4: SBD 1321–1438." },
        { ten: "Bàn 5: thí sinh thi 2 đẳng và 3 đẳng", moTa: "" }
      ]
    },
    {
      ngay: "Thứ Bảy, 14/11/2026 — Tập huấn & phát số báo danh",
      gio: "13:00", ten: "Tập huấn buổi chiều", mau: "blue",
      moTa: "Thí sinh có mặt lúc 13h00.",
      buoc: [
        { ten: "Điểm danh, ổn định tổ chức", moTa: "" },
        { ten: "Triển khai nội dung chuyên môn", moTa: "Theo chương trình của Ban Giảng huấn." }
      ]
    },
    {
      ngay: "Chủ nhật, 15/11/2026 — Kỳ thi chính thức",
      diaDiem: "Nhà thi đấu TDTT phường Tương Mai, số 104 Nguyễn An Ninh",
      gio: "07:00", ten: "Buổi sáng — có mặt, điểm danh", mau: "rose",
      moTa: "Đối tượng: thí sinh thi 2 đẳng, thí sinh thi 3 đẳng và thí sinh thi 1 đẳng có SBD từ 1001 đến 1088.",
      buoc: [
        { ten: "Điểm danh, kiểm tra võ phục và bảo hộ", moTa: "Ban Trọng tài kiểm tra trước khi vào nội dung thi; chưa đạt phải khắc phục ngay." },
        { ten: "Ổn định tổ chức, vào khu vực thi theo nhóm", moTa: "Đeo số báo danh bên đùi trái trong suốt quá trình thi." },
        { ten: "Thi các nội dung", moTa: "Theo điều hành của Ban Giảng huấn và Ban Trọng tài. [CẦN XÁC NHẬN] Thứ tự và khung giờ từng nội dung thi." }
      ]
    },
    {
      ngay: "Chủ nhật, 15/11/2026 — Kỳ thi chính thức",
      gio: "12:30", ten: "Buổi chiều — có mặt, điểm danh", mau: "violet",
      moTa: "Đối tượng: các thí sinh thi 1 đẳng còn lại, SBD từ 1089 đến 1438.",
      buoc: [
        { ten: "Điểm danh, kiểm tra võ phục và bảo hộ", moTa: "" },
        { ten: "Ổn định tổ chức, vào khu vực thi theo nhóm", moTa: "Đeo số báo danh bên đùi trái trong suốt quá trình thi." },
        { ten: "Thi các nội dung", moTa: "Theo điều hành của Ban Giảng huấn và Ban Trọng tài." }
      ]
    }
  ],

  /* ---- Dặn dò trước kỳ thi (theo Thông báo) ---- */
  danDo: [
    {
      icon: "ticket", tieuDe: "Số báo danh",
      items: [
        "Nhận số báo danh từ 11h00 Thứ Bảy 14/11 tại Phòng tập Taekwondo Hà Nội, đúng bàn theo nhóm (xem tab Số báo danh).",
        "Chủ động kiểm tra thông tin, nhận đúng số báo danh theo danh sách đăng ký và thực hiện theo hướng dẫn của bộ phận Thư ký.",
        "Đeo số báo danh ở vị trí bên đùi TRÁI trong suốt quá trình tham gia các nội dung thi.",
        "Làm mất hoặc thất lạc số báo danh: báo ngay bộ phận Thư ký để được kiểm tra, xác nhận và hướng dẫn xử lý."
      ]
    },
    {
      icon: "shirt", tieuDe: "Võ phục",
      items: [
        "Thi 1 đẳng: võ phục Taekwondo truyền thống đúng quy định, cổ áo màu trắng, thắt đai màu đỏ.",
        "Thi 2 đẳng và 3 đẳng: võ phục theo quy định của Liên đoàn Taekwondo Thế giới (WT), thuộc các nhãn hiệu được WT công nhận năm 2026.",
        "Võ phục đúng quy cách, sạch sẽ, chỉnh tề và phù hợp với cấp đẳng đăng ký dự thi.",
        "Không dùng võ phục có chữ tiếng Hàn Quốc, hình ảnh, ký hiệu hoặc hình vẽ không phù hợp trên áo và quần.",
        "Logo, phù hiệu phải phù hợp quy định của Liên đoàn Taekwondo Việt Nam và Liên đoàn Taekwondo thành phố Hà Nội.",
        "Ban Giảng huấn và Ban Trọng tài kiểm tra võ phục trong tập huấn và trước khi thi; chưa đạt phải khắc phục trước khi dự thi."
      ]
    },
    {
      icon: "shield", tieuDe: "Trang thiết bị tự chuẩn bị",
      items: [
        "Bảo hộ chân, bảo hộ tay, găng tay và võ phục (Kukki) theo quy định.",
        "Kiểm tra kỹ trang thiết bị trước khi đến địa điểm thi: đầy đủ, đúng quy cách, dùng được trong suốt quá trình thi."
      ]
    },
    {
      icon: "timer", tieuDe: "Thời gian & kỷ luật",
      items: [
        "Có mặt đúng giờ, đúng địa điểm theo lịch tập huấn và buổi thi đã phân theo số báo danh; điểm danh và ổn định tổ chức trước khi vào nội dung thi.",
        "Tham gia đầy đủ các nội dung tập huấn; chấp hành hướng dẫn của Ban Giảng huấn, Ban Trọng tài và Ban Tổ chức.",
        "Huấn luyện viên quản lý võ sinh, kiểm tra võ phục, trang thiết bị và nhắc thí sinh thực hiện đúng lịch của Ban Tổ chức.",
        "Khó khăn, vướng mắc hoặc cần điều chỉnh thông tin về số báo danh, lịch thi: liên hệ bộ phận Thư ký hoặc Văn phòng Liên đoàn."
      ]
    }
  ],

  /* ---- Tab thứ 4: đăng ký đã khép nên tab này hiện Số báo danh; kỳ sau có hồ sơ thì đổi nhãn lại ---- */
  nhanTab: { hoSo: { nhan: "Số báo danh", icon: "ticket" } },
  soBaoDanh: {
    tieuDe: "Phát số báo danh",
    thoiGian: "Từ 11h00, Thứ Bảy 14/11/2026",
    diaDiem: "Phòng tập Taekwondo Hà Nội — đường Lê Đức Thọ, Mỹ Đình",
    ban: [
      { ten: "Bàn số 1", doiTuong: "Thí sinh thi 1 đẳng — SBD 1001 đến 1109" },
      { ten: "Bàn số 2", doiTuong: "Thí sinh thi 1 đẳng — SBD 1110 đến 1220" },
      { ten: "Bàn số 3", doiTuong: "Thí sinh thi 1 đẳng — SBD 1221 đến 1320" },
      { ten: "Bàn số 4", doiTuong: "Thí sinh thi 1 đẳng — SBD 1321 đến 1438" },
      { ten: "Bàn số 5", doiTuong: "Thí sinh thi 2 đẳng và 3 đẳng" }
    ],
    quyDinh: [
      "Đeo số báo danh bên đùi trái trong suốt quá trình thi.",
      "Mất hoặc thất lạc số báo danh: báo ngay bộ phận Thư ký."
    ],
    tieuDeBuoiThi: "Buổi thi theo số báo danh · Chủ nhật 15/11",
    buoiThi: [
      { ten: "Sáng · có mặt 07h00", doiTuong: "Thí sinh thi 2 đẳng, 3 đẳng và thí sinh thi 1 đẳng SBD 1001–1088" },
      { ten: "Chiều · có mặt 12h30", doiTuong: "Thí sinh thi 1 đẳng còn lại, SBD 1089–1438" }
    ]
  },

  /* ---- Hồ sơ & lệ phí: kỳ này đã qua giai đoạn đăng ký nên để trống (tự ẩn) ---- */
  hoSo: {
    hanNop: "", noiNop: "", hinhThuc: "",
    giayTo: [], ghiChuHoSo: "",
    lePhi: [], ghiChuLePhi: "",
    cachNop: []
  },

  /* ---- Kết quả & chứng chỉ ---- */
  ketQua: {
    tieuDe: "Kết quả & chứng chỉ",
    items: [
      "[CẦN CẬP NHẬT] Thời gian và kênh công bố kết quả.",
      "Thí sinh đạt được cấp chứng chỉ đẳng theo quy định; thời gian nhận chứng chỉ theo thông báo của Liên đoàn. [CẦN XÁC NHẬN]"
    ]
  },

  /* ---- Liên hệ ---- */
  lienHe: {
    tieuDe: "Văn phòng Liên đoàn Taekwondo thành phố Hà Nội",
    diaChi: "[CẦN CẬP NHẬT]",
    dienThoai: "[CẦN CẬP NHẬT]",
    email: "[CẦN CẬP NHẬT]",
    facebook: "[CẦN CẬP NHẬT] link fanpage",
    website: "",
    gioLamViec: ""
  }
};
