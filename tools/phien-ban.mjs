#!/usr/bin/env node
/* =============================================================
   ĐÓNG DẤU PHIÊN BẢN — để trình duyệt không dùng bản cũ trong bộ nhớ đệm
       node tools/phien-ban.mjs          ghi ?v=<băm nội dung> vào các thẻ trong index.html
       node tools/phien-ban.mjs --kiem   chỉ kiểm tra; lệch thì thoát mã 1 (kiem-tra.mjs gọi)

   Băm được tính từ nội dung CSS, dữ liệu và app.js: sửa bất kỳ tệp nào thì
   địa chỉ tệp đổi (?v=…), trình duyệt và GitHub Pages buộc phải tải bản mới.
   ============================================================= */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INDEX = path.join(ROOT, 'index.html');
// Các tệp được đóng dấu; thêm tệp mới vào đây nếu index.html nạp thêm
const TEP = ['assets/css/style.css', 'data/ky-thi.js', 'data/noi-dung-thi.js', 'assets/js/app.js'];

export function bam() {
  const h = crypto.createHash('sha1');
  for (const f of TEP) h.update(fs.readFileSync(path.join(ROOT, f)));
  return h.digest('hex').slice(0, 8);
}

// Trả về index.html đã gắn ?v=<băm> cho đúng các tệp trong TEP (có hay chưa có ?v= đều xử lý được)
export function dongDau(html, v) {
  const mau = TEP.map(f => f.replace(/[.\/]/g, m => '\\' + m)).join('|');
  const re = new RegExp(`((?:href|src)="(?:${mau}))(?:\\?v=[0-9a-f]+)?"`, 'g');
  return html.replace(re, `$1?v=${v}"`);
}

export function kiem() {
  const html = fs.readFileSync(INDEX, 'utf8');
  const v = bam();
  const dung = dongDau(html, v) === html;
  const thieu = TEP.filter(f => !html.includes(`${f}?v=${v}"`));
  return { dung, v, thieu };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { dung, v, thieu } = kiem();
  if (process.argv.includes('--kiem')) {
    if (dung) { console.log(`  ✓ index.html đã đóng dấu phiên bản ${v}`); process.exit(0); }
    console.log(`  ✗ index.html chưa đóng dấu phiên bản ${v} (lệch: ${thieu.join(', ')}) — chạy: node tools/phien-ban.mjs`);
    process.exit(1);
  }
  if (dung) { console.log(`✓ index.html đã ở phiên bản ${v}, không cần sửa`); process.exit(0); }
  const html = fs.readFileSync(INDEX, 'utf8');
  fs.writeFileSync(INDEX, dongDau(html, v));
  console.log(`✓ đã đóng dấu phiên bản ${v} vào index.html (${TEP.length} tệp)`);
}
