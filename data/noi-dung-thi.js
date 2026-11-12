/* =============================================================
   QUY ĐỊNH THI THĂNG ĐẲNG — nội dung ổn định giữa các kỳ thi.

   Dựng theo Quy định thi thăng cấp, đẳng của Liên đoàn Taekwondo Việt Nam
   (QĐ 152/2025/QĐ-VTF, căn cứ quy định Kukkiwon). Các con số về tuổi và
   thời gian giữ đẳng ghi theo chuẩn Kukkiwon; mục có nhãn [CẦN XÁC NHẬN]
   phải đối chiếu với văn bản của Liên đoàn Taekwondo Hà Nội trước khi phát hành.

   Mỗi phần tử trong `dang`:
     so        số đẳng (dùng làm mã, không trùng)
     ten       tên hiện trên trang      tenNgan: chữ trên nút chọn
     phu       dòng phụ (Dan/Poom)       mau: màu ô số
     ghiChu    nhãn vàng ở đầu (để "" nếu không có)
     dieuKien  mảng câu
     quyen     { batBuoc: [...], tuChon: [...] }
     phanThi   mảng { icon, ten, moTa, items }
   ============================================================= */
window.NOI_DUNG_THI = {
  capNhat: "12/11/2026",

  nguon: {
    ten: "Quy định thi thăng cấp, đẳng của Liên đoàn Taekwondo Việt Nam",
    quyetDinh: "Quyết định số 152/2025/QĐ-VTF",
    ngay: "22/12/2025",
    canCu: "Căn cứ Quy định thi thăng cấp, đẳng hiện hành của Kukkiwon"
  },

  luuY: "[CẦN XÁC NHẬN] Nội dung dưới đây dựng theo quy định VTF/Kukkiwon. Ban tổ chức đối chiếu với văn bản của Liên đoàn Taekwondo Hà Nội và bỏ nhãn này trước khi phát hành.",

  poomDan: {
    tieuDe: "Poom hay Dan?",
    items: [
      "Thí sinh dưới 15 tuổi dự thi và được cấp đẳng thiếu niên (Poom).",
      "Thí sinh từ 15 tuổi trở lên dự thi và được cấp đẳng (Dan).",
      "Người đang giữ 1–3 Poom khi đủ 15 tuổi được chuyển đổi sang Dan tương ứng theo quy định Kukkiwon; thủ tục chuyển đổi thực hiện qua Liên đoàn. [CẦN XÁC NHẬN]"
    ]
  },

  /* Các phần thi chung cho mọi đẳng, hiện ở đầu tab "Nội dung thi" */
  phanMon: [
    { ten: "Kỹ thuật căn bản (Kibon)", moTa: "Tấn, đòn đỡ, đòn đấm, đòn chân theo hiệu lệnh của hội đồng." },
    { ten: "Bài quyền (Poomsae)", moTa: "Một bài bắt buộc và một bài tự chọn do hội đồng chỉ định trong danh sách của từng đẳng." },
    { ten: "Đối luyện & tự vệ", moTa: "Một bước đối luyện (Hanbon kyorugi), phân thế bài quyền, tự vệ (Hosinsul)." },
    { ten: "Thi đấu (Kyorugi)", moTa: "Đấu đối kháng có bảo hộ, số hiệp và thời gian theo từng đẳng." },
    { ten: "Công phá (Kyokpa)", moTa: "Đòn tay hoặc đòn chân theo chỉ định của hội đồng." },
    { ten: "Lý thuyết", moTa: "Lịch sử Taekwondo, tinh thần Taekwondo, thuật ngữ, luật thi đấu cơ bản." }
  ],

  dang: [
    {
      so: 1, ten: "Nhất đẳng", tenNgan: "1 đẳng", phu: "1 Dan (từ 15 tuổi) · 1 Poom (dưới 15 tuổi)", mau: "#111111",
      ghiChu: "",
      dieuKien: [
        "Đang giữ cấp 1 (đai đỏ 3 vạch đen), có xác nhận của câu lạc bộ và huấn luyện viên phụ trách.",
        "Thời gian giữ cấp 1 tối thiểu: [CẦN XÁC NHẬN theo QĐ 152/2025/QĐ-VTF].",
        "Dưới 15 tuổi dự thi 1 Poom; từ 15 tuổi dự thi 1 Dan (tuổi tính đến ngày thi). [CẦN XÁC NHẬN cách tính tuổi]",
        "Là võ sinh của câu lạc bộ thành viên Liên đoàn Taekwondo Hà Nội."
      ],
      quyen: {
        batBuoc: ["Taegeuk 8 (Taegeuk Pal-jang)"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 7"]
      },
      phanThi: [
        { icon: "hand", ten: "Kỹ thuật căn bản", moTa: "", items: [
          "Hệ thống tấn (Seogi), đòn đỡ (Makki), đòn đấm (Jireugi), đòn đánh (Chigi) cơ bản.",
          "Đòn chân: Ap chagi, Dollyo chagi, Yeop chagi, Dwi chagi, Naeryeo chagi và đòn kết hợp.",
          "Di chuyển tấn kết hợp đòn tay, đòn chân theo hiệu lệnh."
        ] },
        { icon: "swords", ten: "Đối luyện & tự vệ", moTa: "", items: [
          "Một bước đối luyện (Hanbon kyorugi): tối thiểu 5 thế. [CẦN XÁC NHẬN số thế]",
          "Phân thế bài quyền Taegeuk 8.",
          "Tự vệ cơ bản (Hosinsul): thoát khỏi nắm tay, nắm cổ áo."
        ] },
        { icon: "shield", ten: "Thi đấu (Kyorugi)", moTa: "Đối kháng có bảo hộ, ghép cặp theo cân nặng và lứa tuổi.", items: [
          "[CẦN XÁC NHẬN] Số hiệp và thời gian mỗi hiệp."
        ] },
        { icon: "zap", ten: "Công phá (Kyokpa)", moTa: "", items: [
          "[CẦN XÁC NHẬN] Đòn chỉ định (ví dụ: Dollyo chagi, Dwi chagi) và vật liệu công phá."
        ] },
        { icon: "brain", ten: "Lý thuyết", moTa: "", items: [
          "Lịch sử Taekwondo và Taekwondo Việt Nam.",
          "Năm tinh thần Taekwondo: Lễ nghĩa, Liêm sỉ, Nhẫn nại, Khắc kỷ, Bách chiết bất khuất.",
          "Thuật ngữ cơ bản và ý nghĩa bài quyền Taegeuk.",
          "[CẦN XÁC NHẬN] Hình thức: vấn đáp hay bài viết."
        ] }
      ]
    },
    {
      so: 2, ten: "Nhị đẳng", tenNgan: "2 đẳng", phu: "2 Dan · 2 Poom", mau: "#1C3D82",
      ghiChu: "",
      dieuKien: [
        "Đang giữ 1 đẳng (Dan hoặc Poom) có chứng chỉ Kukkiwon hoặc Liên đoàn Taekwondo Việt Nam.",
        "Thời gian giữ 1 đẳng tối thiểu 1 năm tính đến ngày thi (chuẩn Kukkiwon).",
        "Tuổi tối thiểu thi 2 Dan: 16 tuổi (chuẩn Kukkiwon); dưới 15 tuổi thi 2 Poom. [CẦN XÁC NHẬN theo quy định VTF]"
      ],
      quyen: {
        batBuoc: ["Koryo"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 8"]
      },
      phanThi: [
        { icon: "hand", ten: "Kỹ thuật căn bản", moTa: "Như 1 đẳng, yêu cầu cao hơn về lực, tốc độ và độ chính xác.", items: [
          "Đòn chân nâng cao: đòn xoay (Dwi huryeo chagi), đòn bay (Twio chagi), đòn kết hợp 2–3 đòn."
        ] },
        { icon: "swords", ten: "Đối luyện & tự vệ", moTa: "", items: [
          "Một bước đối luyện và phân thế bài Koryo.",
          "Tự vệ: thoát khỏi ôm, khóa tay; phản đòn từ đòn đấm thẳng. [CẦN XÁC NHẬN]"
        ] },
        { icon: "shield", ten: "Thi đấu (Kyorugi)", moTa: "", items: [
          "[CẦN XÁC NHẬN] Số hiệp và thời gian mỗi hiệp."
        ] },
        { icon: "zap", ten: "Công phá (Kyokpa)", moTa: "", items: [
          "[CẦN XÁC NHẬN] Đòn chỉ định, số lượng và vật liệu."
        ] },
        { icon: "brain", ten: "Lý thuyết", moTa: "", items: [
          "Ý nghĩa bài quyền Koryo; luật thi đấu Kyorugi cơ bản.",
          "[CẦN XÁC NHẬN] Hình thức: vấn đáp hay bài viết."
        ] }
      ]
    },
    {
      so: 3, ten: "Tam đẳng", tenNgan: "3 đẳng", phu: "3 Dan · 3 Poom", mau: "#C8102E",
      ghiChu: "",
      dieuKien: [
        "Đang giữ 2 đẳng có chứng chỉ Kukkiwon hoặc Liên đoàn Taekwondo Việt Nam.",
        "Thời gian giữ 2 đẳng tối thiểu 2 năm tính đến ngày thi (chuẩn Kukkiwon).",
        "Tuổi tối thiểu thi 3 Dan: 18 tuổi (chuẩn Kukkiwon); dưới 15 tuổi thi 3 Poom. [CẦN XÁC NHẬN theo quy định VTF]"
      ],
      quyen: {
        batBuoc: ["Keumgang"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 8", "Koryo"]
      },
      phanThi: [
        { icon: "hand", ten: "Kỹ thuật căn bản", moTa: "Kỹ thuật tổng hợp, có thể yêu cầu trình bày và giải thích nguyên lý phát lực.", items: [] },
        { icon: "swords", ten: "Đối luyện & tự vệ", moTa: "", items: [
          "Phân thế bài Keumgang và Koryo.",
          "Tự vệ nâng cao: phản đòn với nhiều tình huống. [CẦN XÁC NHẬN]"
        ] },
        { icon: "shield", ten: "Thi đấu (Kyorugi)", moTa: "", items: [
          "[CẦN XÁC NHẬN] Số hiệp và thời gian mỗi hiệp."
        ] },
        { icon: "zap", ten: "Công phá (Kyokpa)", moTa: "", items: [
          "[CẦN XÁC NHẬN] Đòn chỉ định, số lượng và vật liệu."
        ] },
        { icon: "brain", ten: "Lý thuyết", moTa: "", items: [
          "Ý nghĩa bài quyền Keumgang; phương pháp huấn luyện cơ bản; luật thi đấu.",
          "[CẦN XÁC NHẬN] Hình thức: vấn đáp hay bài viết."
        ] }
      ]
    },
    {
      so: 4, ten: "Tứ đẳng", tenNgan: "4 đẳng", phu: "4 Dan · 4 Poom", mau: "#44494D",
      ghiChu: "[CẦN XÁC NHẬN] Kỳ thi từ 4 đẳng trở lên thường do Liên đoàn Taekwondo Việt Nam tổ chức (thi thăng cao đẳng). Nếu Liên đoàn Hà Nội không tổ chức, xoá mục này trong data/noi-dung-thi.js.",
      dieuKien: [
        "Đang giữ 3 đẳng có chứng chỉ Kukkiwon.",
        "Thời gian giữ 3 đẳng tối thiểu 3 năm tính đến ngày thi (chuẩn Kukkiwon).",
        "Tuổi tối thiểu thi 4 Dan: 21 tuổi (chuẩn Kukkiwon)."
      ],
      quyen: {
        batBuoc: ["Taebaek"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 8", "Koryo", "Keumgang"]
      },
      phanThi: [
        { icon: "hand", ten: "Kỹ thuật căn bản", moTa: "Trình bày kỹ thuật và phương pháp giảng dạy.", items: [] },
        { icon: "swords", ten: "Đối luyện & tự vệ", moTa: "", items: ["Phân thế bài Taebaek; tự vệ nâng cao. [CẦN XÁC NHẬN]"] },
        { icon: "brain", ten: "Lý thuyết", moTa: "", items: ["[CẦN XÁC NHẬN] Bài viết về lý luận, phương pháp huấn luyện."] }
      ]
    }
  ]
};
