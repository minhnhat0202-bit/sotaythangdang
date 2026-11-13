# Thông tin cần Liên đoàn cung cấp

Cập nhật 13/11/2026 — sau khi nhập bản ký Thông báo số 14/TB-LĐ TKDHN (12/11/2026), sơ đồ phân sàn thi và
Thông báo số 13 phân công Ban chuyên môn (27/10/2026, nội bộ — giữ ở `docs/noi-bo/`, không lên repo).
Mỗi mục xong thì đánh `[x]` và xoá nhãn `[CẦN …]` tương ứng trong `data/`.
Chạy `node tools/kiem-tra.mjs` để xem còn bao nhiêu nhãn, ở dòng nào.

## Đã có (không cần hỏi lại)
- [x] Tên kỳ thi, ngày thi 15/11/2026, ngày tập huấn 14/11/2026, giờ phát SBD **15h00**
- [x] Địa điểm thi: Nhà thi đấu TDTT TTVH-TT&TT phường Tương Mai, số 104 (ngõ 104) Nguyễn An Ninh
- [x] Địa điểm tập huấn: Nhà tập Bộ môn Taekwondo, TT Huấn luyện và Thi đấu Thể thao Hà Nội, 38 Lê Đức Thọ, Từ Liêm
- [x] Giờ có mặt từng buổi, phân buổi thi theo SBD, 5 bàn phát số
- [x] Phân sàn thi: 3 sàn Kỹ thuật – Đối luyện – Thể lực, bàn 1–5 theo nhóm SBD
- [x] Quy định võ phục, trang thiết bị thí sinh tự mang; giáp & mũ do BTC chuẩn bị
- [x] Có tổ y tế, an ninh, khu vực để xe phụ huynh tại nhà thi đấu; khai mạc có đội tuyển Quyền biểu diễn
- [x] Ban tổ chức: người ký Thông báo 14 (Hồ Anh Tuấn), phân công Ban chuyên môn (9 người)
- [x] Logo HNTF → `assets/img/logo.png`

## Nhận diện
- [ ] Logo bản vector (SVG/AI) nếu Liên đoàn có, để in và hiện nét hơn ảnh JPG hiện tại
- [ ] Ảnh đại diện khi chia sẻ link (1200×630) → thêm thẻ `og:image` trong `index.html`

## Kỳ thi (`data/ky-thi.js`)
- [ ] Số điện thoại bộ phận Thư ký kỳ thi và Văn phòng Liên đoàn (hotline) — **quan trọng nhất**
- [ ] Nhóm nào tập huấn buổi sáng, nhóm nào buổi chiều ngày 14/11
- [ ] Giờ khai mạc và giờ bắt đầu thi từng sàn (hiện chỉ có giờ có mặt 07h00 / 12h30)
- [ ] Kiểm tra lại vị trí hai địa điểm trên Google Maps (link tạo từ địa chỉ, chưa ghim toạ độ)
- [ ] Thời điểm và kênh công bố kết quả; thời gian nhận chứng chỉ
- [ ] Văn phòng: địa chỉ, điện thoại, email, fanpage, giờ làm việc
- [ ] Link tra cứu SBD (nếu Liên đoàn công bố danh sách online) → `traCuu.url`
- [ ] Danh sách Ban tổ chức lấy từ văn bản nội bộ: Liên đoàn đồng ý công khai tên hay chỉ ghi vai trò?

## Quy định chuyên môn (`data/noi-dung-thi.js`)
- [ ] Nội dung cụ thể sàn Thể lực; số thế một bước đối luyện; hình thức đối luyện có bảo hộ
- [ ] Văn bản quy định thi thăng đẳng mà Liên đoàn Hà Nội áp dụng (QĐ 152/2025/QĐ-VTF hay văn bản riêng)
- [ ] Thời gian giữ cấp 1 tối thiểu để thi 1 đẳng; cách tính tuổi (đến ngày thi hay theo năm)
- [ ] Tuổi và thời gian giữ đẳng tối thiểu của 2, 3 đẳng theo VTF (hiện ghi theo Kukkiwon)
- [ ] Thủ tục chuyển đổi Poom → Dan khi đủ 15 tuổi
