# Công thức cho agent (omp, Claude)

Dự án: Sổ tay Kỳ thi thăng đẳng — Liên đoàn Taekwondo Hà Nội. Trang tĩnh, không build.

## Kiểm tra trước khi commit
```bash
node tools/kiem-tra.mjs              # phải ra "✓ không có lỗi" (cảnh báo nhãn [CẦN …] được phép)
node tools/kiem-tra.mjs --phat-hanh  # chỉ trước khi phát hành: không được còn nhãn [CẦN …]
```

## Phân việc
- **omp** (theo công thức, chỉ sửa `data/`): đổi ngày, địa điểm, hotline, lịch ngày thi, dặn dò,
  hồ sơ, lệ phí, liên hệ, nội dung từng đẳng. Commit được, **không push**.
- **Claude**: mọi thứ đụng `index.html`, `assets/`, `tools/`; thêm tab/mục mới; đổi cấu trúc dữ liệu.

## Cập nhật kỳ thi mới
Chỉ sửa `data/ky-thi.js`. Các trường:
- `capNhat`, `dot`, `ngayThi`, `ngayPhu` — chữ hiện nguyên văn (ngày ghi dạng "Chủ nhật, 15/11/2026");
  `ngayPhu` là ngày phụ (tập huấn, phát SBD…), hiện thành huy hiệu thứ hai ở đầu trang, để `""` thì ẩn.
- `vanBan[]` `{ten, url}` — văn bản gốc của Ban tổ chức (PDF đặt trong `docs/`), hiện ở tab Tổng quan.
- `diaDiem[]` — mỗi phần tử một thẻ `{nhan, ten, diaChi, ghiChu, mapUrl, mapEmbed, diChuyen[]}`; phần tử đầu
  là địa điểm chính (thẻ màu xanh đậm). `mapUrl` là link Google Maps (nút Chỉ đường), có thể dùng dạng
  `https://www.google.com/maps/search/?api=1&query=<địa chỉ>`; `mapEmbed` là link nhúng
  (`https://maps.google.com/maps?q=<địa chỉ>&z=16&output=embed`); để `""` thì phần đó tự ẩn.
- `hotline[]` `{ten, sdt}` — số điện thoại 9–11 chữ số, được có dấu cách/chấm.
- `traCuu.url` — có link thì nút "Tra cứu SBD" tự hiện ở đầu trang.
- `banToChuc[]` `{vaiTro, ten}`.
- `lichTrinh[]` `{ngay, diaDiem, gio, ten, mau, moTa, buoc[{ten, moTa}]}` — các thẻ cùng chuỗi `ngay` được gom
  thành một ngày (tiêu đề ngày + `diaDiem` lấy ở thẻ đầu của ngày đó); `mau` chọn một trong
  `emerald | blue | amber | rose | violet | cyan | orange`, bỏ trống thì tự xoay vòng.
- `danDo[]` `{icon, tieuDe, items[]}` — `icon` là tên icon Lucide (https://lucide.dev/icons).
- Tab thứ 4 hiện cả hai khối, khối nào trống thì tự ẩn; `nhanTab.hoSo.{nhan, icon}` đổi tên/icon nút ở thanh đáy:
  - `soBaoDanh.{tieuDe, thoiGian, diaDiem, ban[{ten, doiTuong}], quyDinh[], tieuDeBuoiThi, buoiThi[{ten, doiTuong}]}`
    — dùng sát ngày thi (bàn phát số, buổi thi theo SBD).
  - `hoSo.{hanNop, noiNop, hinhThuc, giayTo[], ghiChuHoSo, lePhi[{muc, phi}], ghiChuLePhi, cachNop[]}`
    — dùng trong giai đoạn đăng ký.
- `ketQua.{tieuDe, items[]}`, `lienHe.{tieuDe, diaChi, dienThoai, email, facebook, website, gioLamViec}`.

Thông tin chưa có thì ghi `[CẦN CẬP NHẬT]` ngay trong chuỗi, **không bịa**. Thông tin suy đoán
hoặc lấy từ kỳ trước thì ghi `[CẦN XÁC NHẬN]`. Có thông tin chính thức rồi thì xoá nhãn.

## Sửa quy định thăng đẳng
Chỉ sửa `data/noi-dung-thi.js` (nguồn: QĐ 152/2025/QĐ-VTF, căn cứ Kukkiwon). Mỗi phần tử `dang[]`:
`so` (không trùng), `ten`, `tenNgan`, `phu`, `mau` (mã màu hex), `ghiChu`, `dieuKien[]`,
`quyen.{batBuoc[], tuChon[]}`, `phanThi[{icon, ten, moTa, items[]}]`.
Bỏ một đẳng: xoá cả phần tử. Thêm đẳng: chép một phần tử có sẵn, đổi `so` và nội dung.

## Thay logo
Đặt tệp logo chính thức vào `assets/img/` (PNG nền trong suốt, ≥ 256 px hoặc SVG), đổi trường
`logo` trong `data/ky-thi.js` và thẻ `<link rel="icon">` trong `index.html` cho khớp. Việc của Claude.

## Quy ước commit & push
Tiếng Việt, một dòng nói rõ đổi gì, ví dụ: `Cập nhật ngày thi và địa điểm đợt 1/2027`.
Remote `origin` là https://github.com/minhnhat0202-bit/sotaythangdang (tài khoản gh `minhnhat0202-bit`,
repo đã cấu hình credential qua `gh auth git-credential`). Push lên `main` là GitHub Pages tự cập nhật:
https://minhnhat0202-bit.github.io/sotaythangdang/ — **omp không push**, Claude push sau khi người dùng duyệt.
