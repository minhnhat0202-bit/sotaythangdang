#!/usr/bin/env node
/* =============================================================
   KIỂM TRA SỔ TAY TRƯỚC KHI COMMIT / PHÁT HÀNH
       node tools/kiem-tra.mjs              lỗi cấu trúc → thoát mã 1; nhãn [CẦN …] chỉ cảnh báo
       node tools/kiem-tra.mjs --phat-hanh  thêm: còn nhãn [CẦN …] nào cũng là lỗi

   Bắt các lớp lỗi hay gặp khi sửa bằng tay hoặc bằng agent:
     1. Thẻ HTML lệch trong index.html
     2. Ngoặc CSS lệch
     3. Tệp tham chiếu (href/src, logo, ảnh trong dữ liệu) không tồn tại
     4. Tệp dữ liệu không nạp được hoặc thiếu trường bắt buộc
     5. Còn nhãn [CẦN CẬP NHẬT] / [CẦN XÁC NHẬN] trong dữ liệu
     6. Số điện thoại hotline không hợp lệ
   ============================================================= */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

// Dùng fileURLToPath vì đường dẫn dự án có thể chứa dấu cách / tiếng Việt.
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PHAT_HANH = process.argv.includes('--phat-hanh');
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const DATA = ['data/ky-thi.js', 'data/noi-dung-thi.js'];

let loi = 0, canh = 0;
const KO = m => { console.log(`  ✗ ${m}`); loi++; };
const NB = m => { console.log(`  ! ${m}`); canh++; };
const OK = m => console.log(`  ✓ ${m}`);
const doc = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const co = f => fs.existsSync(path.join(ROOT, f));

/* ---------- 1. Thẻ HTML ---------- */
console.log('\n[1] Cân bằng thẻ HTML (index.html)');
{
  const s = doc('index.html');
  const i = s.indexOf('<body'), j = s.lastIndexOf('</body>');
  if (i < 0 || j < 0) KO('index.html: thiếu thẻ <body>');
  else {
    const body = s.slice(i, j).replace(/<script\b[\s\S]*?<\/script>/g, '');
    const stack = [];
    let sai = null;
    for (const m of body.matchAll(/<(\/?)([a-zA-Z][\w-]*)([^>]*)>/g)) {
      const [, dong, ten, attrs] = m;
      const tag = ten.toLowerCase();
      if (VOID.has(tag) || attrs.trimEnd().endsWith('/')) continue;
      if (dong) {
        if (stack.at(-1) === tag) stack.pop();
        else if (!sai) sai = `đóng </${tag}> nhưng đang mở <${stack.at(-1) ?? '—'}>`;
      } else stack.push(tag);
    }
    const con = stack.filter(t => t !== 'body');
    if (sai) KO(`index.html: ${sai}`);
    else if (con.length) KO(`index.html: còn mở ${con.join(', ')}`);
    else OK('index.html cân bằng');
  }
}

/* ---------- 2. Ngoặc CSS ---------- */
console.log('\n[2] Cân bằng ngoặc CSS');
{
  const css = fs.readdirSync(path.join(ROOT, 'assets/css')).filter(f => f.endsWith('.css'));
  let xau = 0;
  for (const f of css) {
    const s = doc(`assets/css/${f}`);
    let d = 0, min = 0;
    for (const c of s) { if (c === '{') d++; else if (c === '}') { d--; if (d < min) min = d; } }
    if (d !== 0 || min < 0) { KO(`${f}: lệch ${d}, có lúc âm ${min}`); xau++; }
  }
  if (!xau) OK(`${css.length} tệp CSS cân bằng`);
}

/* ---------- 4 (chạy trước 3 vì 3 cần dữ liệu). Nạp dữ liệu ---------- */
console.log('\n[3] Tệp dữ liệu nạp được và đủ trường');
const win = {};
{
  const ctx = vm.createContext({ window: win });
  for (const f of DATA) {
    try { vm.runInContext(doc(f), ctx, { filename: f }); }
    catch (e) { KO(`${f}: không nạp được — ${e.message}`); }
  }
  const K = win.KY_THI, N = win.NOI_DUNG_THI;
  const thieu = [];
  const can = (dk, ten) => { if (!dk) thieu.push(ten); };
  if (!K) KO('data/ky-thi.js không gán window.KY_THI');
  else {
    can(K.donViToChuc, 'KY_THI.donViToChuc');
    can(K.tieuDe, 'KY_THI.tieuDe');
    can(K.ngayThi, 'KY_THI.ngayThi');
    can(K.diaDiem && K.diaDiem.ten, 'KY_THI.diaDiem.ten');
    can(K.diaDiem && K.diaDiem.diaChi, 'KY_THI.diaDiem.diaChi');
    can(Array.isArray(K.hotline) && K.hotline.length, 'KY_THI.hotline (ít nhất 1)');
    can(Array.isArray(K.lichTrinh) && K.lichTrinh.length, 'KY_THI.lichTrinh (ít nhất 1)');
    can(K.hoSo && Array.isArray(K.hoSo.giayTo) && K.hoSo.giayTo.length, 'KY_THI.hoSo.giayTo (ít nhất 1)');
    for (const [i, c] of (K.lichTrinh || []).entries()) {
      can(c.gio && c.ten, `KY_THI.lichTrinh[${i}].gio / .ten`);
    }
  }
  if (!N) KO('data/noi-dung-thi.js không gán window.NOI_DUNG_THI');
  else {
    can(Array.isArray(N.dang) && N.dang.length, 'NOI_DUNG_THI.dang (ít nhất 1)');
    const so = new Set();
    for (const [i, d] of (N.dang || []).entries()) {
      can(d.so != null && d.ten, `NOI_DUNG_THI.dang[${i}].so / .ten`);
      can(d.quyen && Array.isArray(d.quyen.batBuoc) && d.quyen.batBuoc.length, `NOI_DUNG_THI.dang[${i}].quyen.batBuoc`);
      if (so.has(d.so)) thieu.push(`NOI_DUNG_THI.dang: số đẳng ${d.so} bị trùng`);
      so.add(d.so);
    }
  }
  thieu.length ? thieu.forEach(t => KO(`thiếu/sai: ${t}`)) : OK('đủ trường bắt buộc');
}

/* ---------- 3. Tệp tham chiếu ---------- */
console.log('\n[4] Tệp được tham chiếu');
{
  const thieu = new Set();
  const s = doc('index.html');
  for (const m of s.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|tel:|mailto:|#|data:|javascript:)/.test(u)) continue;
    const p = u.split('#')[0].split('?')[0];
    if (p && !co(p)) thieu.add(`index.html → ${u}`);
  }
  const K = win.KY_THI || {};
  if (K.logo && !/^https?:/.test(K.logo) && !co(K.logo)) thieu.add(`data/ky-thi.js → logo: ${K.logo}`);
  thieu.size ? [...thieu].forEach(KO) : OK('không thiếu tệp nào');
}

/* ---------- 5. Nhãn chờ cập nhật ---------- */
console.log(`\n[5] Nhãn [CẦN …] trong dữ liệu${PHAT_HANH ? ' (chế độ phát hành: còn là lỗi)' : ''}`);
{
  let tong = 0;
  for (const f of DATA) {
    // Bỏ phần chú thích (/* … */ và dòng // …) nhưng giữ nguyên số dòng, để nhãn
    // trong lời hướng dẫn ở đầu tệp không bị đếm nhầm thành nội dung.
    const dong = doc(f)
      .replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, ' '))
      .split('\n')
      .map(l => l.replace(/^\s*\/\/.*$/, ''));
    const vi = [];
    dong.forEach((l, i) => { const n = (l.match(/\[CẦN[^\]]*\]/g) || []).length; if (n) vi.push(`${i + 1}${n > 1 ? `×${n}` : ''}`); });
    const n = vi.reduce((a, v) => a + (v.includes('×') ? +v.split('×')[1] : 1), 0);
    tong += n;
    if (n) (PHAT_HANH ? KO : NB)(`${f}: ${n} nhãn (dòng ${vi.slice(0, 12).join(', ')}${vi.length > 12 ? ', …' : ''})`);
  }
  if (!tong) OK('không còn nhãn chờ cập nhật');
}

/* ---------- 6. Hotline ---------- */
console.log('\n[6] Số điện thoại hotline');
{
  const K = win.KY_THI || {};
  let xau = 0;
  for (const h of K.hotline || []) {
    const so = String(h.sdt || '').replace(/[^\d+]/g, '');
    if (/\[CẦN/.test(h.sdt || '')) continue;            // đã đếm ở mục 5
    if (!/^\+?\d{9,11}$/.test(so)) { KO(`hotline "${h.ten}": "${h.sdt}" không phải số điện thoại hợp lệ`); xau++; }
  }
  if (!xau) OK('hotline hợp lệ hoặc đang chờ cập nhật');
}

console.log(`\n${loi ? `✗ ${loi} lỗi` : '✓ không có lỗi'}${canh ? `, ${canh} cảnh báo` : ''}\n`);
process.exit(loi ? 1 : 0);
