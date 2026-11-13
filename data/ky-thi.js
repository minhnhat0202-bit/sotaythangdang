/* =============================================================
   THÔNG TIN KỲ THI HIỆN TẠI — sửa tệp này mỗi khi có kỳ thi mới.

   Nguồn:
   - Thông báo số 14/TB-LĐ TKDHN ngày 12/11/2026 (bản ký) của Liên đoàn Taekwondo
     thành phố Hà Nội "V/v tổ chức lớp tập huấn và Kỳ thi thăng 1, 2, 3 Đẳng
     Taekwondo Quốc gia lần thứ II năm 2026" → docs/thong-bao-14-ky-thi-lan-2-2026.pdf
   - Sơ đồ phân sàn thi theo nhóm và số báo danh (ảnh gốc ở docs/noi-bo/, nội dung
     đã chuyển thành bảng soBaoDanh.sanThi bên dưới, không đưa ảnh thô lên trang)
   - Thông báo số 13/TB-LĐTKDHN ngày 27/10/2026 phân công Ban chuyên môn
     (văn bản nội bộ, giữ ở docs/noi-bo/, không đưa lên repo)

   - Chữ trong dấu ngoặc kép là nội dung hiện nguyên văn trên trang.
   - Nhãn [CẦN CẬP NHẬT] / [CẦN XÁC NHẬN] sẽ hiện VÀNG trên trang;
     chạy `node tools/kiem-tra.mjs --phat-hanh` để chắc không còn nhãn
     nào trước khi gửi cho thí sinh.
   - Trường để chuỗi rỗng "" hoặc mảng rỗng [] thì phần đó tự ẩn.
   ============================================================= */
window.KY_THI = {
  capNhat: "13/11/2026",

  donViToChuc: "Liên đoàn Taekwondo TP. Hà Nội",
  tieuDe: "Kỳ thi thăng 1, 2, 3 đẳng Quốc gia lần II/2026",
  dot: "Kỳ thi thăng 1, 2, 3 Đẳng Taekwondo Quốc gia lần thứ II năm 2026 tại TP. Hà Nội (Thông báo số 14/TB-LĐ TKDHN ngày 12/11/2026)",
  ngayThi: "Chủ nhật, 15/11/2026",
  ngayPhu: "Thứ Bảy, 14/11/2026 — tập huấn & phát SBD",
  logo: "assets/img/logo.png",
  doiTuong: "Thí sinh thi thăng 1, 2, 3 đẳng đã đăng ký qua các câu lạc bộ, điểm tập, đơn vị thuộc Liên đoàn. Thí sinh thi 1 đẳng có số báo danh từ 1001 đến 1438.",
  ghiChuChung: "Thí sinh có mặt đúng buổi thi theo số báo danh và thi đúng sàn của nhóm mình (xem tab Số báo danh). Thắc mắc về số báo danh, lịch thi: liên hệ bộ phận Thư ký hoặc Văn phòng Liên đoàn.",

  /* ---- Văn bản gốc của Ban tổ chức (link hiện ở tab Tổng quan) ---- */
  vanBan: [
    { ten: "Thông báo số 14/TB-LĐ TKDHN ngày 12/11/2026 — tổ chức lớp tập huấn và Kỳ thi thăng 1, 2, 3 Đẳng lần thứ II năm 2026 (bản ký, PDF)", url: "docs/thong-bao-14-ky-thi-lan-2-2026.pdf" }
  ],

  /* ---- Địa điểm: mỗi phần tử là một thẻ; phần tử đầu là địa điểm chính ----
     mapUrl: link Google Maps → nút "Chỉ đường"; mapEmbed: link nhúng (…&output=embed); để "" thì ẩn */
  diaDiem: [
    {
      nhan: "Địa điểm thi · Chủ nhật 15/11",
      ten: "Nhà thi đấu TDTT Trung tâm Văn hóa – Thông tin và Thể thao phường Tương Mai",
      diaChi: "Số 104 (ngõ 104) phố Nguyễn An Ninh, phường Tương Mai, TP. Hà Nội",
      ghiChu: "Nhà thi đấu bố trí khu vực để xe cho phụ huynh, võ sinh và có tổ y tế, an ninh trực trong ngày thi; đi theo hướng dẫn của Ban tổ chức tại cổng.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=104+Nguyễn+An+Ninh,+Tương+Mai,+Hà+Nội",
      mapEmbed: "https://maps.google.com/maps?q=104+Nguyễn+An+Ninh,+Tương+Mai,+Hà+Nội&z=16&output=embed",
      diChuyen: []
    },
    {
      nhan: "Tập huấn & phát SBD · Thứ Bảy 14/11",
      ten: "Nhà tập Bộ môn Taekwondo — Trung tâm Huấn luyện và Thi đấu Thể thao Hà Nội",
      diaChi: "Số 38 đường Lê Đức Thọ, phường Từ Liêm, TP. Hà Nội",
      ghiChu: "Trên Google Maps tìm \"Trung Tâm Huấn Luyện VĐV Cấp Cao Hà Nội\" (toạ độ 21.04388, 105.73418).",
      mapUrl: "https://maps.app.goo.gl/HuBMPpaFqKrGW4Cs5",
      mapEmbed: "https://maps.google.com/maps?q=21.0438817,105.7341757&z=17&output=embed",
      diChuyen: []
    }
  ],
  diChuyen: [],

  /* ---- Hotline (nút đỏ ở đầu trang): để [] thì nút tự ẩn; có số thì thêm {ten, sdt} ---- */
  hotline: [],

  /* ---- Tab muốn ẩn khỏi thanh đáy: "tong-quan" | "lich-trinh" | "noi-dung" | "ho-so" | "lien-he" ---- */
  tabAn: ["lien-he"],

  /* ---- Tra cứu số báo danh: có link (Google Sheet, form…) thì điền, nút tự hiện ---- */
  traCuu: { nhan: "Tra cứu SBD", url: "" },

  /* ---- Ban tổ chức: để [] thì thẻ tự ẩn (phân công Ban chuyên môn là văn bản nội bộ, không công khai) ---- */
  banToChuc: [],

  /* ---- Khung thời gian ----
     ngay: các thẻ cùng `ngay` được gom thành một ngày (địa điểm lấy ở thẻ đầu của ngày đó)
     mau: emerald | blue | amber | rose | violet | cyan | orange (bỏ trống thì tự xoay vòng) */
  ghiChuLichTrinh: "",
  lichTrinh: [
    {
      ngay: "Thứ Bảy, 14/11/2026 — Tập huấn & phát số báo danh",
      diaDiem: "Nhà tập Bộ môn Taekwondo, 38 Lê Đức Thọ (Trung tâm Huấn luyện VĐV cấp cao Hà Nội)",
      gio: "08:00", ten: "Tập huấn buổi sáng", mau: "emerald",
      moTa: "Tất cả thí sinh cùng tập huấn, không chia nhóm. Có mặt lúc 08h00.",
      buoc: [
        { ten: "Điểm danh, ổn định tổ chức", moTa: "Huấn luyện viên và võ sinh có mặt đúng giờ." },
        { ten: "Triển khai nội dung chuyên môn", moTa: "Ban giảng huấn phổ biến nội dung ba sàn thi (Kỹ thuật, Đối luyện, Thể lực) và kiểm tra võ phục ngay trong buổi tập huấn." }
      ]
    },
    {
      ngay: "Thứ Bảy, 14/11/2026 — Tập huấn & phát số báo danh",
      gio: "13:00", ten: "Tập huấn buổi chiều", mau: "blue",
      moTa: "Tất cả thí sinh cùng tập huấn, không chia nhóm. Có mặt lúc 13h00.",
      buoc: [
        { ten: "Điểm danh, ổn định tổ chức", moTa: "" },
        { ten: "Triển khai nội dung chuyên môn", moTa: "Theo chương trình của Ban giảng huấn." }
      ]
    },
    {
      ngay: "Thứ Bảy, 14/11/2026 — Tập huấn & phát số báo danh",
      gio: "Từ 15:00", ten: "Phát số báo danh", mau: "amber",
      moTa: "Ban Tổ chức bố trí 05 bàn phát số. Thí sinh kiểm tra thông tin, nhận đúng SBD theo danh sách đăng ký và làm theo hướng dẫn của bộ phận Thư ký.",
      buoc: [
        { ten: "Bàn 1–4: thí sinh thi 1 đẳng", moTa: "Bàn 1: SBD 1001–1109 · Bàn 2: SBD 1110–1220 · Bàn 3: SBD 1221–1320 · Bàn 4: SBD 1321–1438." },
        { ten: "Bàn 5: thí sinh thi 2 đẳng và 3 đẳng", moTa: "" }
      ]
    },
    {
      ngay: "Chủ nhật, 15/11/2026 — Kỳ thi chính thức",
      diaDiem: "Nhà thi đấu Tương Mai, ngõ 104 phố Nguyễn An Ninh",
      gio: "07:00", ten: "Buổi sáng — có mặt, điểm danh", mau: "rose",
      moTa: "Đối tượng: thí sinh thi 3 đẳng, thí sinh thi 2 đẳng và thí sinh thi 1 đẳng có SBD từ 1001 đến 1088.",
      buoc: [
        { ten: "Điểm danh, kiểm tra võ phục và bảo hộ", moTa: "Ban Trọng tài kiểm tra trước khi vào nội dung thi; chưa đạt phải khắc phục ngay. Đeo số báo danh bên đùi trái." },
        { ten: "Khai mạc kỳ thi", moTa: "Chào cờ, giới thiệu Ban tổ chức; biểu diễn chào mừng của đội tuyển Quyền Taekwondo Hà Nội." },
        { ten: "Thi theo sàn của nhóm", moTa: "3 đẳng: bàn 1 (tất cả nội dung). 2 đẳng: Kỹ thuật bàn 3 · Đối luyện bàn 4 · Thể lực bàn 5. 1 đẳng SBD 1001–1088: Kỹ thuật bàn 1 · Đối luyện bàn 2 · Thể lực bàn 5. Thứ tự lần lượt qua các sàn theo điều hành của Ban Trọng tài." }
      ]
    },
    {
      ngay: "Chủ nhật, 15/11/2026 — Kỳ thi chính thức",
      gio: "12:30", ten: "Buổi chiều — có mặt, điểm danh", mau: "violet",
      moTa: "Đối tượng: các thí sinh thi 1 đẳng còn lại, SBD từ 1089 đến 1438.",
      buoc: [
        { ten: "Điểm danh, kiểm tra võ phục và bảo hộ", moTa: "Đeo số báo danh bên đùi trái trong suốt quá trình thi." },
        { ten: "Thi theo sàn của nhóm", moTa: "SBD 1089–1264: Kỹ thuật bàn 1 · Đối luyện bàn 2 · Thể lực bàn 5. SBD 1265–1438: Kỹ thuật bàn 3 · Đối luyện bàn 4 · Thể lực bàn 5. Thứ tự lần lượt qua các sàn theo điều hành của Ban Trọng tài." }
      ]
    }
  ],

  /* ---- Dặn dò trước kỳ thi (theo Thông báo số 14) ---- */
  danDo: [
    {
      icon: "ticket", tieuDe: "Số báo danh",
      items: [
        "Nhận số báo danh từ 15h00 Thứ Bảy 14/11 tại Nhà tập Bộ môn Taekwondo (38 Lê Đức Thọ), đúng bàn theo nhóm (xem tab Số báo danh).",
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
      icon: "shield", tieuDe: "Trang thiết bị",
      items: [
        "Thí sinh tự chuẩn bị: bảo hộ chân, bảo hộ tay, găng tay và võ phục (Kukki) theo quy định.",
        "Giáp và mũ thi đấu do Ban tổ chức chuẩn bị theo tiêu chuẩn; dùng xong trả lại cho bộ phận trang thiết bị.",
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
    thoiGian: "Từ 15h00, Thứ Bảy 14/11/2026",
    diaDiem: "Nhà tập Bộ môn Taekwondo — 38 Lê Đức Thọ (Trung tâm Huấn luyện VĐV cấp cao Hà Nội)",
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
      { ten: "Sáng · có mặt 07h00", doiTuong: "Thí sinh thi 3 đẳng, 2 đẳng và thí sinh thi 1 đẳng SBD 1001–1088" },
      { ten: "Chiều · có mặt 12h30", doiTuong: "Thí sinh thi 1 đẳng còn lại, SBD 1089–1438" }
    ],
    /* Bảng nhiều cột: cot = tiêu đề cột, dong = từng hàng (cột đầu in đậm) */
    sanThi: {
      tieuDe: "Sàn thi theo nhóm · Chủ nhật 15/11",
      cot: ["Nhóm thi", "Kỹ thuật", "Đối luyện", "Thể lực"],
      dong: [
        ["Sáng · 3 đẳng", "Bàn 1", "Bàn 1", "Bàn 1"],
        ["Sáng · 2 đẳng", "Bàn 3", "Bàn 4", "Bàn 5"],
        ["Sáng · 1 đẳng SBD 1001–1088", "Bàn 1", "Bàn 2", "Bàn 5"],
        ["Chiều · 1 đẳng SBD 1089–1264", "Bàn 1", "Bàn 2", "Bàn 5"],
        ["Chiều · 1 đẳng SBD 1265–1438", "Bàn 3", "Bàn 4", "Bàn 5"]
      ],
      ghiChu: "Thí sinh 3 đẳng thi tất cả các nội dung tại bàn 1. Thứ tự lần lượt qua các sàn theo điều hành của Ban Trọng tài; thí sinh nghe gọi số báo danh tại khu vực tập kết."
    }
  },

  /* ---- Hồ sơ & lệ phí: kỳ này đã qua giai đoạn đăng ký nên để trống (tự ẩn) ---- */
  hoSo: {
    hanNop: "", noiNop: "", hinhThuc: "",
    giayTo: [], ghiChuHoSo: "",
    lePhi: [], ghiChuLePhi: "",
    cachNop: []
  },

  /* ---- Kết quả & chứng chỉ và Liên hệ: hiện ở tab "lien-he" (đang ẩn qua tabAn). Có thông tin thì điền và bỏ "lien-he" khỏi tabAn ---- */
  ketQua: { tieuDe: "Kết quả & chứng chỉ", items: [] },
  lienHe: {
    tieuDe: "Văn phòng Liên đoàn Taekwondo thành phố Hà Nội",
    diaChi: "", dienThoai: "", email: "", facebook: "", website: "", gioLamViec: ""
  }
};
