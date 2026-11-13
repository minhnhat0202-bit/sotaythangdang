# Công thức cho agent (omp, Claude)

Dự án: Sổ tay Kỳ thi thăng đẳng — Liên đoàn Taekwondo Hà Nội. Trang tĩnh, không build.

## Kiểm tra trước khi commit
```bash
node tools/phien-ban.mjs             # đóng dấu ?v=<băm> vào index.html sau khi sửa data/, assets/
node tools/kiem-tra.mjs              # phải ra "✓ không có lỗi" (cảnh báo nhãn [CẦN …] được phép)
node tools/kiem-tra.mjs --phat-hanh  # chỉ trước khi phát hành: không được còn nhãn [CẦN …]
```
Quên `phien-ban.mjs` thì `kiem-tra.mjs` báo lỗi ở mục [7]; không đóng dấu, trình duyệt của phụ huynh
sẽ còn thấy nội dung cũ trong bộ nhớ đệm dù đã push.

## Phân việc
- **omp** (theo công thức, chỉ sửa `data/`): đổi ngày, địa điểm, hotline, lịch ngày thi, dặn dò,
  hồ sơ, lệ phí, liên hệ, nội dung từng đẳng. Commit được, **không push**.
- **Claude**: mọi thứ đụng `index.html`, `assets/`, `tools/`; thêm tab/mục mới; đổi cấu trúc dữ liệu.

## Cập nhật kỳ thi mới
Chỉ sửa `data/ky-thi.js`. Các trường:
- `capNhat`, `dot`, `ngayThi`, `ngayPhu` — chữ hiện nguyên văn (ngày ghi dạng "Chủ nhật, 15/11/2026");
  `ngayPhu` là ngày phụ (tập huấn, phát SBD…), hiện thành huy hiệu thứ hai ở đầu trang, để `""` thì ẩn.
- `vanBan[]` `{ten, url}` — văn bản gốc của Ban tổ chức (PDF/ảnh đặt trong `docs/`), hiện ở tab Tổng quan.
  Ảnh scan nhiều trang → ghép thành một PDF (PIL: `save(..., save_all=True, append_images=[...])`, thu về 1240 px
  ngang). Văn bản **nội bộ** (phân công nhiệm vụ, bản scan gốc) để ở `docs/noi-bo/` — thư mục này đã gitignore.
- `diaDiem[]` — mỗi phần tử một thẻ `{nhan, ten, diaChi, ghiChu, mapUrl, mapEmbed, diChuyen[]}`; phần tử đầu
  là địa điểm chính (thẻ màu xanh đậm). `mapUrl` là link Google Maps (nút Chỉ đường), có thể dùng dạng
  `https://www.google.com/maps/search/?api=1&query=<địa chỉ>`; `mapEmbed` là link nhúng
  (`https://maps.google.com/maps?q=<địa chỉ>&z=16&output=embed`); để `""` thì phần đó tự ẩn.
- `hotline[]` `{ten, sdt}` — số điện thoại 9–11 chữ số, được có dấu cách/chấm; để `[]` thì nút Hotline ở đầu trang ẩn.
- `tabAn[]` — tên tab muốn ẩn khỏi thanh đáy (`"tong-quan" | "lich-trinh" | "noi-dung" | "ho-so" | "lien-he"`);
  hiện đang ẩn `"lien-he"` vì chưa có thông tin văn phòng/kết quả.
- `traCuu.url` — có link thì nút "Tra cứu SBD" tự hiện ở đầu trang.
- `banToChuc[]` `{vaiTro, ten}`.
- `lichTrinh[]` `{ngay, diaDiem, gio, ten, mau, moTa, buoc[]}` — các thẻ cùng chuỗi `ngay` được gom
  thành một ngày (tiêu đề ngày + `diaDiem` lấy ở thẻ đầu của ngày đó); `mau` chọn một trong
  `emerald | blue | amber | rose | violet | cyan | orange`, bỏ trống thì tự xoay vòng.
  Mỗi bước `buoc[]` `{ten, moTa, items[], nhom[], ghiChu}`: **không viết câu dài nhồi nhiều nhóm** — dùng
  `items[]` (gạch đầu dòng) hoặc `nhom[]` `{ten, san: [[nhan, giaTri], …]}` (mỗi nhóm một dòng, bên phải là
  các ô "Kỹ thuật · Bàn 1"); `ghiChu` là dòng nghiêng nhỏ ở cuối. Khối `phanThi[]` ở `noi-dung-thi.js` cũng
  nhận `nhom[]`, `ghiChu` như vậy.
- `danDo[]` `{icon, tieuDe, items[]}` — `icon` là tên icon Lucide (https://lucide.dev/icons).
- Tab thứ 4 hiện cả hai khối, khối nào trống thì tự ẩn; `nhanTab.hoSo.{nhan, icon}` đổi tên/icon nút ở thanh đáy:
  - `soBaoDanh.{tieuDe, thoiGian, diaDiem, ban[{ten, doiTuong}], quyDinh[], tieuDeBuoiThi, buoiThi[{ten, doiTuong}],
    sanThi{tieuDe, cot[], dong[][], ghiChu}}` — dùng sát ngày thi (bàn phát số, buổi thi theo SBD, sàn thi theo nhóm;
    `sanThi` là bảng nhiều cột: `cot` tiêu đề cột, mỗi phần tử `dong` là một hàng, cột đầu in đậm).
  - `hoSo.{hanNop, noiNop, hinhThuc, giayTo[], ghiChuHoSo, lePhi[{muc, phi}], ghiChuLePhi, cachNop[]}`
    — dùng trong giai đoạn đăng ký.
- `ketQua.{tieuDe, items[]}`, `lienHe.{tieuDe, diaChi, dienThoai, email, facebook, website, gioLamViec}`.

Thông tin chưa có thì ghi `[CẦN CẬP NHẬT]` ngay trong chuỗi, **không bịa**. Thông tin suy đoán
hoặc lấy từ kỳ trước thì ghi `[CẦN XÁC NHẬN]`. Có thông tin chính thức rồi thì xoá nhãn.

## Sửa tab Nội dung thi
Chỉ sửa `data/noi-dung-thi.js`. **Chỉ ghi những gì văn bản của Ban tổ chức quy định** (võ phục, buổi thi, bàn
nhận SBD, sàn thi, trang thiết bị); không đưa nội dung bài thi cụ thể (bài quyền, kỹ thuật…) khi văn bản không nêu
— người dùng đã yêu cầu rõ (13/11/2026).
Đầu tab: `luuY` (ô vàng, `""` thì ẩn), `poomDan` (`null` thì ẩn), `phanMon[]` (các sàn thi), `nguon` (`null` thì ẩn).
Mỗi phần tử `dang[]`: `so` (không trùng), `ten`, `tenNgan`, `phu`, `mau` (mã màu hex), `ghiChu`,
`dieuKien[]` + `tieuDeDieuKien`, `quyen.{batBuoc[], tuChon[]}` (cả hai trống thì ẩn),
`phanThi[{icon, ten, moTa, items[]}]` + `tieuDePhanThi`. Khối nào trống thì tự ẩn.
Bỏ một đẳng: xoá cả phần tử. Thêm đẳng: chép một phần tử có sẵn, đổi `so` và nội dung.

## Cỡ chữ
Thang cỡ chữ Tailwind được định nghĩa lại trong `index.html` (`fontSize`): `text-2xs` = 12px (nhãn phụ),
`text-xs` = 14px (chữ thường), `text-sm` = 16px, `text-base` = 17px. Muốn to/nhỏ toàn trang thì đổi ở đó,
**không** sửa từng class trong `app.js`. Không dùng `text-[11px]`/`text-[9px]` tuỳ ý — dùng `text-2xs`.

## Thay logo
Logo hiện tại: `assets/img/logo.png` (256×256, cắt tròn, nền trong suốt, ~21 KB; gốc là ảnh JPG HNTF trong
`2. Taekwondo/Logo/`, cắt bằng PIL: tìm khung bao phần không trắng → cắt vuông → mặt nạ tròn → quantize). Có logo mới: làm ảnh vuông nền trong suốt ≥ 256 px, ghi đè tệp này hoặc đổi trường
`logo` trong `data/ky-thi.js` và hai thẻ `<link rel="icon">`, `apple-touch-icon` trong `index.html`.
Đầu trang hiển thị logo trong khung tròn nền trắng (`rounded-full bg-white`). Việc của Claude.

## Quy ước commit & push
Tiếng Việt, một dòng nói rõ đổi gì, ví dụ: `Cập nhật ngày thi và địa điểm đợt 1/2027`.
Remote `origin` là https://github.com/minhnhat0202-bit/sotaythangdang (tài khoản gh `minhnhat0202-bit`,
repo đã cấu hình credential qua `gh auth git-credential`). Push lên `main` là GitHub Pages tự cập nhật:
https://minhnhat0202-bit.github.io/sotaythangdang/ — **omp không push**, Claude push sau khi người dùng duyệt.
