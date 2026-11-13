/* =============================================================
   QUY ĐỊNH THI THĂNG ĐẲNG — nội dung ổn định giữa các kỳ thi.

   Kỳ thi lần II/2026 tổ chức theo ba sàn: Kỹ thuật, Đối luyện, Thể lực
   (sơ đồ phân sàn của Ban tổ chức, docs/phan-san-thi.jpg). Nội dung chi tiết
   từng sàn và bài quyền theo đẳng dựng theo Quy định thi thăng cấp, đẳng của
   Liên đoàn Taekwondo Việt Nam (QĐ 152/2025/QĐ-VTF, căn cứ Kukkiwon); mục có
   nhãn [CẦN XÁC NHẬN] phải đối chiếu với Ban giảng huấn trước khi phát hành.

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

  /* Ba sàn thi, hiện ở đầu tab "Nội dung thi" */
  phanMon: [
    { ten: "Sàn Kỹ thuật", moTa: "Kỹ thuật căn bản (tấn, đòn đỡ, đòn đấm, đòn chân) và bài quyền theo đẳng, thực hiện theo hiệu lệnh của giám khảo. Bàn 1 hoặc bàn 3 tuỳ nhóm." },
    { ten: "Sàn Đối luyện", moTa: "Thực hiện với bạn tập cùng nhóm, mang đủ bảo hộ chân, bảo hộ tay, găng tay (giáp, mũ do Ban tổ chức chuẩn bị). Bàn 2 hoặc bàn 4 tuỳ nhóm." },
    { ten: "Sàn Thể lực", moTa: "Các bài kiểm tra thể lực theo yêu cầu của Ban giảng huấn. [CẦN XÁC NHẬN] Nội dung cụ thể. Bàn 5 cho mọi nhóm." }
  ],

  dang: [
    {
      so: 1, ten: "Nhất đẳng", tenNgan: "1 đẳng", phu: "1 Dan (từ 15 tuổi) · 1 Poom (dưới 15 tuổi) · SBD 1001–1438", mau: "#111111",
      ghiChu: "Võ phục truyền thống cổ trắng, thắt đai đỏ. Buổi sáng: SBD 1001–1088; buổi chiều: SBD 1089–1438.",
      dieuKien: [
        "Đang giữ cấp 1 (đai đỏ 3 vạch đen), có xác nhận của câu lạc bộ và huấn luyện viên phụ trách.",
        "Thời gian giữ cấp 1 tối thiểu: [CẦN XÁC NHẬN theo QĐ 152/2025/QĐ-VTF].",
        "Dưới 15 tuổi dự thi 1 Poom; từ 15 tuổi dự thi 1 Dan (tuổi tính đến ngày thi). [CẦN XÁC NHẬN cách tính tuổi]",
        "Là võ sinh của câu lạc bộ, điểm tập, đơn vị thuộc Liên đoàn Taekwondo thành phố Hà Nội."
      ],
      quyen: {
        batBuoc: ["Taegeuk 8 (Taegeuk Pal-jang)"],
        tuChon: ["Một bài trong Taegeuk 1 – Taegeuk 7"]
      },
      phanThi: [
        { icon: "hand", ten: "Sàn Kỹ thuật", moTa: "", items: [
          "Hệ thống tấn (Seogi), đòn đỡ (Makki), đòn đấm (Jireugi), đòn đánh (Chigi) cơ bản.",
          "Đòn chân: Ap chagi, Dollyo chagi, Yeop chagi, Dwi chagi, Naeryeo chagi và đòn kết hợp.",
          "Di chuyển tấn kết hợp đòn tay, đòn chân theo hiệu lệnh.",
          "Bài quyền bắt buộc Taegeuk 8; bài tự chọn do giám khảo chỉ định."
        ] },
        { icon: "swords", ten: "Sàn Đối luyện", moTa: "Mang đủ bảo hộ chân, bảo hộ tay, găng tay.", items: [
          "Một bước đối luyện (Hanbon kyorugi) và phân thế bài quyền Taegeuk 8. [CẦN XÁC NHẬN số thế]",
          "Đối luyện có bảo hộ theo điều hành của giám khảo."
        ] },
        { icon: "heart-pulse", ten: "Sàn Thể lực", moTa: "", items: [
          "[CẦN XÁC NHẬN] Bài kiểm tra thể lực theo yêu cầu của Ban giảng huấn."
        ] }
      ]
    },
    {
      so: 2, ten: "Nhị đẳng", tenNgan: "2 đẳng", phu: "2 Dan · 2 Poom · thi buổi sáng", mau: "#1C3D82",
      ghiChu: "Võ phục theo quy định WT, nhãn hiệu được WT công nhận năm 2026. Thi buổi sáng: Kỹ thuật bàn 3 · Đối luyện bàn 4 · Thể lực bàn 5.",
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
        { icon: "hand", ten: "Sàn Kỹ thuật", moTa: "Như 1 đẳng, yêu cầu cao hơn về lực, tốc độ và độ chính xác.", items: [
          "Đòn chân nâng cao: đòn xoay (Dwi huryeo chagi), đòn bay (Twio chagi), đòn kết hợp 2–3 đòn.",
          "Bài quyền bắt buộc Koryo; bài tự chọn do giám khảo chỉ định."
        ] },
        { icon: "swords", ten: "Sàn Đối luyện", moTa: "Mang đủ bảo hộ chân, bảo hộ tay, găng tay.", items: [
          "Một bước đối luyện và phân thế bài Koryo.",
          "Đối luyện có bảo hộ theo điều hành của giám khảo. [CẦN XÁC NHẬN]"
        ] },
        { icon: "heart-pulse", ten: "Sàn Thể lực", moTa: "", items: [
          "[CẦN XÁC NHẬN] Bài kiểm tra thể lực theo yêu cầu của Ban giảng huấn."
        ] }
      ]
    },
    {
      so: 3, ten: "Tam đẳng", tenNgan: "3 đẳng", phu: "3 Dan · 3 Poom · thi buổi sáng", mau: "#C8102E",
      ghiChu: "Võ phục theo quy định WT, nhãn hiệu được WT công nhận năm 2026. Thi buổi sáng, tất cả các nội dung tại bàn 1.",
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
        { icon: "hand", ten: "Kỹ thuật (bàn 1)", moTa: "Kỹ thuật tổng hợp, có thể yêu cầu trình bày và giải thích nguyên lý phát lực.", items: [
          "Bài quyền bắt buộc Keumgang; bài tự chọn do giám khảo chỉ định."
        ] },
        { icon: "swords", ten: "Đối luyện (bàn 1)", moTa: "Mang đủ bảo hộ chân, bảo hộ tay, găng tay.", items: [
          "Phân thế bài Keumgang và Koryo.",
          "Đối luyện có bảo hộ theo điều hành của giám khảo. [CẦN XÁC NHẬN]"
        ] },
        { icon: "heart-pulse", ten: "Thể lực (bàn 1)", moTa: "", items: [
          "[CẦN XÁC NHẬN] Bài kiểm tra thể lực theo yêu cầu của Ban giảng huấn."
        ] }
      ]
    }
  ]
};
