/* =============================================================
   THÔNG TIN KỲ THI HIỆN TẠI — sửa tệp này mỗi khi có kỳ thi mới.

   - Chữ trong dấu ngoặc kép là nội dung hiện nguyên văn trên trang.
   - Nhãn [CẦN CẬP NHẬT] / [CẦN XÁC NHẬN] sẽ hiện VÀNG trên trang;
     chạy `node tools/kiem-tra.mjs --phat-hanh` để chắc không còn nhãn
     nào trước khi gửi cho thí sinh.
   - Trường để chuỗi rỗng "" hoặc mảng rỗng [] thì phần đó tự ẩn.
   ============================================================= */
window.KY_THI = {
  capNhat: "12/11/2026",

  donViToChuc: "Liên đoàn Taekwondo Hà Nội",
  tieuDe: "Kỳ thi thăng đẳng Taekwondo",
  dot: "[CẦN CẬP NHẬT] Đợt … năm 2026",
  ngayThi: "[CẦN CẬP NHẬT] Chủ nhật, …/…/2026",
  logo: "assets/img/logo.svg",
  doiTuong: "Võ sinh cấp 1 (đai đỏ 3 vạch đen) đủ điều kiện thi 1 đẳng và võ sinh đang giữ đẳng đủ thời gian theo quy định, thuộc các câu lạc bộ thành viên của Liên đoàn.",
  ghiChuChung: "",

  /* ---- Địa điểm & di chuyển ---- */
  diaDiem: {
    ten: "[CẦN CẬP NHẬT] Nhà thi đấu …",
    diaChi: "[CẦN CẬP NHẬT] Số …, phường …, Hà Nội",
    ghiChu: "[CẦN CẬP NHẬT] Cổng vào, chỗ gửi xe",
    mapUrl: "",      // link Google Maps → hiện nút "Chỉ đường"; để trống thì ẩn
    mapEmbed: ""     // link nhúng Google Maps (Share → Embed a map → chỉ lấy phần src="…"); để trống thì ẩn
  },
  diChuyen: [
    { icon: "car", phuongTien: "Xe máy / ô tô", moTa: "[CẦN CẬP NHẬT] Gửi xe tại …, phí …" },
    { icon: "bus", phuongTien: "Xe buýt", moTa: "[CẦN CẬP NHẬT] Tuyến …, xuống điểm …" }
  ],

  /* ---- Hotline (nút đỏ ở đầu trang) ---- */
  hotline: [
    { ten: "Văn phòng Liên đoàn", sdt: "[CẦN CẬP NHẬT]" },
    { ten: "Thư ký kỳ thi", sdt: "[CẦN CẬP NHẬT]" }
  ],

  /* ---- Tra cứu số báo danh: có link (Google Sheet, form…) thì điền, nút tự hiện ---- */
  traCuu: { nhan: "Tra cứu SBD", url: "" },

  /* ---- Ban tổ chức & hội đồng khảo thí ---- */
  banToChuc: [
    { vaiTro: "Trưởng ban tổ chức", ten: "[CẦN CẬP NHẬT]" },
    { vaiTro: "Chủ tịch hội đồng khảo thí", ten: "[CẦN CẬP NHẬT]" },
    { vaiTro: "Thư ký kỳ thi", ten: "[CẦN CẬP NHẬT]" }
  ],

  /* ---- Khung thời gian ngày thi ----
     mau: emerald | blue | amber | rose | violet | cyan | orange (bỏ trống thì tự xoay vòng) */
  ghiChuLichTrinh: "[CẦN XÁC NHẬN] Khung giờ dưới đây là dự kiến theo kỳ thi thông thường, chờ lịch chính thức của Ban tổ chức.",
  lichTrinh: [
    {
      gio: "07:00–07:45", ten: "Check-in & tập kết", mau: "emerald",
      buoc: [
        { ten: "Điểm danh, nhận số báo danh", moTa: "Thí sinh xuất trình CCCD/giấy khai sinh, đối chiếu hồ sơ với thư ký kỳ thi." },
        { ten: "Kiểm tra trang phục", moTa: "Võ phục đúng quy định, đai đúng cấp/đẳng hiện tại, móng tay cắt ngắn, không đeo trang sức." },
        { ten: "Khởi động theo khu vực", moTa: "Thí sinh tập kết theo nhóm đẳng dự thi dưới sự hướng dẫn của huấn luyện viên; phụ huynh và người thân lên khán đài." }
      ]
    },
    {
      gio: "07:45–08:15", ten: "Khai mạc", mau: "blue",
      buoc: [
        { ten: "Chào cờ, giới thiệu hội đồng khảo thí", moTa: "" },
        { ten: "Phổ biến quy chế và trình tự thi", moTa: "Thí sinh nghe kỹ thứ tự gọi tên, khu vực sàn thi của nhóm mình." }
      ]
    },
    {
      gio: "08:15–11:30", ten: "Thi thực hành", mau: "amber",
      moTa: "Thi theo nhóm đẳng, mỗi nhóm lần lượt qua các phần thi. Thứ tự có thể thay đổi theo điều hành của hội đồng.",
      buoc: [
        { ten: "Kỹ thuật căn bản", moTa: "Thực hiện theo hiệu lệnh của giám khảo." },
        { ten: "Bài quyền (Poomsae)", moTa: "Bài bắt buộc và bài tự chọn do hội đồng chỉ định tại chỗ." },
        { ten: "Đối luyện & tự vệ", moTa: "Thực hiện với bạn tập cùng nhóm." },
        { ten: "Thi đấu (Kyorugi)", moTa: "Mang đủ bảo hộ trước khi được gọi tên." },
        { ten: "Công phá (Kyokpa)", moTa: "[CẦN XÁC NHẬN] Vật liệu công phá do Ban tổ chức chuẩn bị hay thí sinh tự mang." }
      ]
    },
    {
      gio: "11:30–12:00", ten: "Lý thuyết & bế mạc", mau: "violet",
      buoc: [
        { ten: "Thi lý thuyết", moTa: "[CẦN XÁC NHẬN] Hình thức vấn đáp hay bài viết, áp dụng cho đẳng nào." },
        { ten: "Thông báo thời gian công bố kết quả", moTa: "Thí sinh và huấn luyện viên theo dõi tại kênh thông tin của Liên đoàn (xem mục Liên hệ)." }
      ]
    }
  ],

  /* ---- Dặn dò trước kỳ thi ---- */
  danDo: [
    {
      icon: "shirt", tieuDe: "Trang phục & dụng cụ",
      items: [
        "Võ phục Taekwondo sạch, phẳng, đúng quy định: thí sinh thi 1 đẳng mặc võ phục cổ trắng (hoặc cổ đỏ-đen với thí sinh thi Poom); thí sinh đã có đẳng mặc võ phục cổ đen.",
        "Đai đúng cấp/đẳng hiện tại. Không thắt đai cao hơn đẳng mình đang giữ.",
        "Bảo hộ thi đấu đầy đủ: mũ, giáp, bảo hộ răng, cẳng tay, ống chân, bàn chân, hạ bộ. [CẦN XÁC NHẬN] Ban tổ chức có cho mượn bảo hộ hay không.",
        "Mang theo CCCD/giấy khai sinh (bản gốc hoặc bản sao công chứng) để đối chiếu khi điểm danh."
      ]
    },
    {
      icon: "timer", tieuDe: "Thời gian & kỷ luật",
      items: [
        "Có mặt trước giờ check-in ít nhất 15 phút. Thí sinh đến muộn sau khi nhóm đã thi xong phần quyền sẽ không được thi bù. [CẦN XÁC NHẬN]",
        "Không rời khu vực tập kết khi chưa thi xong; nghe gọi tên theo số báo danh.",
        "Chào hội đồng khi vào và ra sàn thi; tuân thủ hiệu lệnh của giám khảo và trọng tài.",
        "Không dùng điện thoại trong khu vực sàn thi. Phụ huynh, người thân ở khán đài, không xuống sàn."
      ]
    },
    {
      icon: 'heart-pulse', tieuDe: "Sức khỏe & an toàn",
      items: [
        "Ăn sáng nhẹ, uống đủ nước; mang theo nước uống riêng.",
        "Thí sinh đang chấn thương hoặc có bệnh lý cần báo huấn luyện viên và thư ký kỳ thi trước khi thi phần đối kháng.",
        "Có tổ y tế trực tại địa điểm thi. [CẦN XÁC NHẬN]"
      ]
    }
  ],

  /* ---- Hồ sơ & lệ phí ---- */
  hoSo: {
    hanNop: "[CẦN CẬP NHẬT] …/…/2026",
    noiNop: "[CẦN CẬP NHẬT] Qua câu lạc bộ, tổng hợp gửi Văn phòng Liên đoàn",
    hinhThuc: "[CẦN XÁC NHẬN] Bản giấy và/hoặc bản mềm theo mẫu của Liên đoàn",
    giayTo: [
      "Đơn đăng ký dự thi theo mẫu của Liên đoàn (có xác nhận của câu lạc bộ, huấn luyện viên phụ trách).",
      "02 ảnh 3×4 nền trắng, chụp trong 6 tháng gần nhất, mặc võ phục. [CẦN XÁC NHẬN số lượng, nền ảnh]",
      "Bản sao CCCD (từ 14 tuổi) hoặc giấy khai sinh (dưới 14 tuổi).",
      "Bản sao chứng chỉ đẳng hiện tại (Kukkiwon hoặc Liên đoàn Taekwondo Việt Nam) đối với thí sinh thi từ 2 đẳng trở lên.",
      "Giấy chứng nhận cấp 1 (đai đỏ 3 vạch đen) đối với thí sinh thi 1 đẳng. [CẦN XÁC NHẬN]",
      "Danh sách tổng hợp của câu lạc bộ theo mẫu (file Excel). [CẦN XÁC NHẬN]"
    ],
    ghiChuHoSo: "Hồ sơ không đầy đủ hoặc nộp sau hạn sẽ không được xếp lịch thi.",
    lePhi: [
      { muc: "Lệ phí thi 1 đẳng (Poom/Dan)", phi: "[CẦN CẬP NHẬT]" },
      { muc: "Lệ phí thi 2 đẳng", phi: "[CẦN CẬP NHẬT]" },
      { muc: "Lệ phí thi 3 đẳng", phi: "[CẦN CẬP NHẬT]" },
      { muc: "Phí chứng chỉ Kukkiwon (nếu thu riêng)", phi: "[CẦN CẬP NHẬT]" }
    ],
    ghiChuLePhi: "[CẦN XÁC NHẬN] Lệ phí nộp cùng hồ sơ hay nộp tại ngày thi; có hoàn lại khi vắng thi hay không.",
    cachNop: [
      "Thí sinh nộp hồ sơ và lệ phí cho huấn luyện viên phụ trách tại câu lạc bộ.",
      "Câu lạc bộ tổng hợp danh sách, kiểm tra điều kiện dự thi và gửi về Văn phòng Liên đoàn trước hạn.",
      "Liên đoàn rà soát hồ sơ, công bố danh sách thí sinh đủ điều kiện và số báo danh trước ngày thi. [CẦN XÁC NHẬN] thời điểm công bố."
    ]
  },

  /* ---- Kết quả & chứng chỉ ---- */
  ketQua: {
    tieuDe: "Kết quả & chứng chỉ",
    items: [
      "Kết quả công bố trên kênh thông tin của Liên đoàn trong vòng … ngày sau kỳ thi. [CẦN CẬP NHẬT]",
      "Thí sinh đạt được cấp chứng chỉ đẳng theo quy định; chứng chỉ Kukkiwon thường nhận sau 2–3 tháng. [CẦN XÁC NHẬN]",
      "Thí sinh không đạt được đăng ký thi lại ở kỳ thi gần nhất theo hướng dẫn của Liên đoàn."
    ]
  },

  /* ---- Liên hệ ---- */
  lienHe: {
    tieuDe: "Văn phòng Liên đoàn Taekwondo Hà Nội",
    diaChi: "[CẦN CẬP NHẬT]",
    dienThoai: "[CẦN CẬP NHẬT]",
    email: "[CẦN CẬP NHẬT]",
    facebook: "[CẦN CẬP NHẬT] link fanpage",
    website: "",
    gioLamViec: "[CẦN CẬP NHẬT] Thứ 2 – Thứ 6, 8:00–17:00"
  }
};
