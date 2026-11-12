# Thông tin cần Liên đoàn cung cấp

Cập nhật 12/11/2026 — sau khi nhập Thông báo ngày 12/11/2026 về Kỳ thi thăng 1, 2, 3 Đẳng lần thứ II năm 2026
(`docs/thong-bao-ky-thi-lan-2-2026.pdf`). Mỗi mục xong thì đánh `[x]` và xoá nhãn `[CẦN …]` tương ứng trong `data/`.
Chạy `node tools/kiem-tra.mjs` để xem còn bao nhiêu nhãn, ở dòng nào.

## Đã có từ Thông báo (không cần hỏi lại)
- [x] Tên kỳ thi, ngày thi 15/11/2026, ngày tập huấn & phát SBD 14/11/2026
- [x] Địa điểm thi: Nhà thi đấu TDTT TTVH-TT&TT phường Tương Mai, 104 Nguyễn An Ninh
- [x] Địa điểm tập huấn: Phòng tập Taekwondo Hà Nội, đường Lê Đức Thọ, Mỹ Đình
- [x] Giờ có mặt từng buổi, phân buổi thi theo SBD, 5 bàn phát số
- [x] Quy định võ phục (1 đẳng cổ trắng đai đỏ; 2–3 đẳng võ phục WT), trang thiết bị, đeo SBD đùi trái
- [x] Người ký: Phó Chủ tịch thường trực Đào Quốc Thắng
- [x] Logo HNTF (cắt tròn từ ảnh JPG trong `2. Taekwondo/Logo/`, 512 px) → `assets/img/logo.png`

## Nhận diện
- [ ] Logo bản vector (SVG/AI) nếu Liên đoàn có, để in và hiện nét hơn ảnh JPG hiện tại
- [ ] Màu nhận diện (nếu có quy định) → đổi bảng màu `navy` / `brand` trong `index.html`
- [ ] Ảnh đại diện khi chia sẻ link (1200×630) → thêm thẻ `og:image` trong `index.html`

## Kỳ thi (`data/ky-thi.js`)
- [ ] Số điện thoại bộ phận Thư ký kỳ thi và Văn phòng Liên đoàn (hotline)
- [ ] Số nhà cụ thể của Phòng tập Taekwondo Hà Nội; cổng vào, chỗ gửi xe ở cả hai địa điểm
- [ ] Kiểm tra lại vị trí hai địa điểm trên Google Maps (link hiện tạo từ địa chỉ, chưa ghim toạ độ)
- [ ] Nhóm nào tập huấn buổi sáng, nhóm nào buổi chiều ngày 14/11
- [ ] Thứ tự và khung giờ từng nội dung thi trong ngày 15/11
- [ ] Thời điểm và kênh công bố kết quả; thời gian nhận chứng chỉ
- [ ] Văn phòng: địa chỉ, điện thoại, email, fanpage, giờ làm việc
- [ ] Link tra cứu SBD (nếu Liên đoàn công bố danh sách online) → `traCuu.url`

## Quy định chuyên môn (`data/noi-dung-thi.js`)
- [ ] Văn bản quy định thi thăng đẳng mà Liên đoàn Hà Nội áp dụng (QĐ 152/2025/QĐ-VTF hay văn bản riêng)
- [ ] Thời gian giữ cấp 1 tối thiểu để thi 1 đẳng; cách tính tuổi (đến ngày thi hay theo năm)
- [ ] Tuổi và thời gian giữ đẳng tối thiểu của 2, 3 đẳng theo VTF (hiện ghi theo Kukkiwon)
- [ ] Số thế một bước đối luyện; nội dung tự vệ theo từng đẳng
- [ ] Thi đấu: số hiệp, thời gian mỗi hiệp, cách ghép cặp
- [ ] Công phá: đòn chỉ định, số lượng, vật liệu do ai chuẩn bị
- [ ] Lý thuyết: hình thức (vấn đáp / viết), áp dụng cho đẳng nào, phạm vi câu hỏi
- [ ] Thủ tục chuyển đổi Poom → Dan khi đủ 15 tuổi
