# Sổ tay Kỳ thi thăng đẳng — Liên đoàn Taekwondo Hà Nội

Trang web mở tốt trên điện thoại, gửi cho thí sinh, huấn luyện viên và phụ huynh trước mỗi
kỳ thi thăng đẳng: địa điểm, lịch trình ngày thi, nội dung thi theo từng đẳng, hồ sơ, lệ phí, liên hệ.

Nền tảng: HTML + Tailwind (CDN) + JavaScript thuần. Không cần cài đặt, không cần build.
Toàn bộ nội dung nằm trong hai tệp dữ liệu; giao diện tự dựng từ đó.

## Cấu trúc

```
index.html              Khung trang (chỉ có vỏ, nội dung do app.js dựng)
assets/
  css/style.css         Kiểu riêng ngoài Tailwind (tab, nhãn vàng, in ấn)
  js/app.js             Dựng giao diện từ dữ liệu, chuyển tab
  img/logo.svg          Logo TẠM — thay bằng logo chính thức của Liên đoàn
data/
  ky-thi.js             Kỳ thi hiện tại: ngày, địa điểm, lịch, hotline, hồ sơ, lệ phí, liên hệ
  noi-dung-thi.js       Quy định thăng đẳng: điều kiện, bài quyền, phần thi của từng đẳng
tools/
  kiem-tra.mjs          Kiểm tra trước khi commit / phát hành
docs/
  CAN-BO-SUNG.md        Danh sách thông tin còn thiếu, cần Liên đoàn cung cấp
AGENTS.md               Công thức cho agent (omp, Claude) khi cập nhật nội dung
```

## Xem thử tại máy

Nhấp đúp `index.html` là chạy (cần mạng để tải Tailwind và bộ icon Lucide). Hoặc:

```bash
python3 -m http.server 8000      # rồi mở http://localhost:8000
```

Mở trên điện thoại thì thêm `#lich-trinh`, `#noi-dung`, `#ho-so`, `#lien-he` vào cuối địa chỉ
để mở thẳng một tab.

## Cập nhật nội dung

| Muốn đổi | Sửa ở |
|---|---|
| Ngày thi, địa điểm, hotline, lịch ngày thi, dặn dò, hồ sơ, lệ phí, liên hệ | `data/ky-thi.js` |
| Điều kiện dự thi, bài quyền, các phần thi của từng đẳng | `data/noi-dung-thi.js` |
| Logo | thay `assets/img/logo.svg` (hoặc đổi trường `logo` trong `data/ky-thi.js`) |
| Bố cục, màu, tab mới | `assets/js/app.js`, `assets/css/style.css`, `index.html` |

Chỗ nào chưa có thông tin chính thức thì ghi `[CẦN CẬP NHẬT]` hoặc `[CẦN XÁC NHẬN]` ngay trong
chuỗi: trang sẽ hiện nhãn **vàng** để người duyệt không bỏ sót, và `kiem-tra.mjs` đếm lại được.

## Kiểm tra

```bash
node tools/kiem-tra.mjs              # trước khi commit: phải ra "✓ không có lỗi"
node tools/kiem-tra.mjs --phat-hanh  # trước khi gửi cho thí sinh: không được còn nhãn [CẦN …]
```

## Đưa lên mạng (GitHub Pages)

1. Đẩy nhánh `main` lên GitHub.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
3. Địa chỉ sẽ là `https://<tài-khoản>.github.io/<tên-repo>/`. Tệp `.nojekyll` đã có sẵn để
   GitHub không xử lý lại thư mục.

## Việc còn thiếu

Xem [docs/CAN-BO-SUNG.md](docs/CAN-BO-SUNG.md).
