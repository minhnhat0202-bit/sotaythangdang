/* =============================================================
   SỔ TAY KỲ THI THĂNG ĐẲNG — Liên đoàn Taekwondo Hà Nội
   Dựng toàn bộ giao diện từ hai tệp dữ liệu:
     data/ky-thi.js        → window.KY_THI        (kỳ thi hiện tại)
     data/noi-dung-thi.js  → window.NOI_DUNG_THI  (quy định thăng đẳng)
   Muốn đổi nội dung thì sửa hai tệp dữ liệu, không sửa tệp này.
   ============================================================= */
(function () {
  'use strict';

  const K = window.KY_THI || {};
  const N = window.NOI_DUNG_THI || {};

  /* ---------- Tiện ích ---------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Văn bản trong dữ liệu có thể chứa nhãn [CẦN CẬP NHẬT] / [CẦN XÁC NHẬN]:
  // hiện thành nhãn vàng để người duyệt không bỏ sót trước khi phát hành.
  const txt = v => esc(v).replace(/\[(CẦN[^\]]*)\]/g, '<mark class="cho">[$1]</mark>');
  const ic  = (name, cls = 'w-4 h-4') => `<i data-lucide="${esc(name)}" class="${cls}"></i>`;
  const tel = s => String(s || '').replace(/[^\d+]/g, '');
  const coSo = s => /\d{9,}/.test(tel(s));
  const list = (arr, cls = '') => (arr || []).map(x => `<li class="${cls}">${txt(x)}</li>`).join('');
  const laLink = s => /^https?:\/\//.test(String(s || ''));
  const MAU = ['emerald', 'blue', 'amber', 'rose', 'violet', 'cyan', 'orange'];
  const mau = i => MAU[i % MAU.length];

  const card = (icon, title, body, tone = 'navy') => `
    <section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <h2 class="flex items-center gap-2 px-4 py-2.5 bg-${tone}-700 text-white text-xs font-extrabold uppercase tracking-wide">
        ${ic(icon)}<span>${esc(title)}</span>
      </h2>
      <div class="p-4 space-y-3">${body}</div>
    </section>`;

  const block = (icon, title, body) => `
    <div class="space-y-2">
      <h3 class="flex items-center gap-2 text-xs font-extrabold text-navy-800 uppercase tracking-wide">
        ${ic(icon, 'w-4 h-4 text-brand-red')}<span>${esc(title)}</span>
      </h3>
      ${body}
    </div>`;

  const dt = (k, v) => v
    ? `<dt class="font-bold text-slate-500 whitespace-nowrap">${esc(k)}</dt><dd class="text-slate-800 leading-relaxed">${txt(v)}</dd>`
    : '';

  const ghiChu = v => v
    ? `<p class="text-xs bg-amber-50 border border-amber-200 text-amber-900 rounded-lg px-3 py-2 leading-relaxed">${txt(v)}</p>`
    : '';

  // Bảng hai cột {ten, doiTuong}
  const bang = (rows, c1, c2) => (rows || []).length ? `
    <table class="w-full text-xs">
      <thead>
        <tr class="text-left text-[11px] uppercase tracking-wide text-slate-500 border-b border-slate-200">
          <th class="py-1.5 pr-3 font-bold">${esc(c1)}</th><th class="py-1.5 font-bold">${esc(c2)}</th>
        </tr>
      </thead>
      <tbody>${rows.map(r => `
        <tr class="border-b border-slate-100 last:border-0">
          <td class="py-2 pr-3 font-bold text-navy-800 whitespace-nowrap align-top">${txt(r.ten)}</td>
          <td class="py-2 text-slate-800 leading-relaxed">${txt(r.doiTuong)}</td>
        </tr>`).join('')}
      </tbody>
    </table>` : '';

  // Bảng nhiều cột {cot: [...], dong: [[...], ...]} — cột đầu in đậm, cuộn ngang nếu chật
  const bangNhieuCot = t => t && (t.cot || []).length && (t.dong || []).length ? `
    <div class="overflow-x-auto -mx-1 px-1">
      <table class="w-full text-xs">
        <thead>
          <tr class="text-left text-[11px] uppercase tracking-wide text-slate-500 border-b border-slate-200">
            ${t.cot.map((c, i) => `<th class="py-1.5 ${i ? 'px-2' : 'pr-2'} font-bold whitespace-nowrap">${esc(c)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>${t.dong.map(r => `
          <tr class="border-b border-slate-100 last:border-0">
            ${(r || []).map((v, i) => `<td class="py-2 ${i ? 'px-2 text-slate-800' : 'pr-2 font-bold text-navy-800'} leading-snug align-top">${txt(v)}</td>`).join('')}
          </tr>`).join('')}
        </tbody>
      </table>
    </div>` : '';

  // Nhóm → các ô "nội dung · bàn": nhom = [{ten, san: [[nhan, giaTri], ...]}]
  const chipNhom = (nhom, m = 'navy') => (nhom || []).length ? `
    <div class="mt-2 space-y-1.5">${nhom.map(n => `
      <div class="flex flex-wrap items-center gap-x-2 gap-y-1 bg-white/80 border border-${m}-200/70 rounded-lg px-2.5 py-1.5">
        <span class="font-bold text-slate-900 text-xs basis-full sm:basis-auto sm:min-w-[8.5rem]">${txt(n.ten)}</span>
        <span class="flex flex-wrap gap-1.5">${(n.san || []).map(([nhan, gt]) => `
          <span class="inline-flex items-center gap-1 text-[11px] bg-${m}-100 text-${m}-900 rounded px-1.5 py-0.5 whitespace-nowrap">
            <span class="opacity-70">${esc(nhan)}</span><span class="font-extrabold">${esc(gt)}</span>
          </span>`).join('')}</span>
      </div>`).join('')}
    </div>` : '';

  // Phần đuôi dùng chung cho một bước / một khối: danh sách, nhóm-ô, ghi chú nhỏ
  const duoi = (b, m) => `
    ${(b.items || []).length ? `<ul class="text-xs text-slate-600 mt-1 list-disc pl-4 space-y-0.5 leading-relaxed">${list(b.items)}</ul>` : ''}
    ${chipNhom(b.nhom, m)}
    ${b.ghiChu ? `<p class="text-[11px] text-slate-500 mt-1.5 italic leading-relaxed">${txt(b.ghiChu)}</p>` : ''}`;

  /* ---------- Pill chọn mục con (dùng chung cho mọi tab) ---------- */
  const PILL_ON  = 'bg-navy-700 text-white border-navy-700 font-bold shadow-md';
  const PILL_OFF = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 font-medium shadow-sm';

  function pills(group, items) {
    return `<div class="flex overflow-x-auto no-scrollbar gap-2 py-1 px-0.5 scroll-smooth snap-x">${
      items.map(([id, emoji, label], i) => `
        <button type="button" data-sub-group="${esc(group)}" data-sub="${esc(id)}"
          class="pill snap-start shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs transition-all duration-200 border ${i === 0 ? PILL_ON : PILL_OFF}">
          ${emoji ? `<span class="text-sm">${emoji}</span>` : ''}<span>${esc(label)}</span>
        </button>`).join('')
    }</div>`;
  }

  function switchSub(group, id) {
    $$(`[data-sub-group="${group}"]`).forEach(b => {
      const on = b.dataset.sub === id;
      b.className = b.className.split(' ')
        .filter(c => !PILL_ON.split(' ').includes(c) && !PILL_OFF.split(' ').includes(c))
        .concat((on ? PILL_ON : PILL_OFF).split(' ')).join(' ');
      if (on) b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
    $$(`[data-sub-panel^="${group}:"]`).forEach(p => {
      const on = p.dataset.subPanel === `${group}:${id}`;
      p.classList.toggle('hidden', !on);
      p.classList.toggle('fade-in', on);
    });
  }

  /* ---------- Đầu trang ---------- */
  function renderHeader() {
    const hot = (K.hotline || []).map(h => `
      <li class="flex justify-between items-center gap-2 bg-slate-50 p-1.5 rounded">
        <span class="font-medium text-slate-700">${txt(h.ten)}</span>
        ${coSo(h.sdt)
          ? `<a href="tel:${tel(h.sdt)}" class="font-bold text-navy-700 whitespace-nowrap">${txt(h.sdt)}</a>`
          : `<span class="font-bold text-slate-500 whitespace-nowrap">${txt(h.sdt)}</span>`}
      </li>`).join('');

    const traCuu = K.traCuu && K.traCuu.url ? `
      <a href="${esc(K.traCuu.url)}" target="_blank" rel="noopener"
         class="flex items-center gap-1 bg-brand-gold hover:brightness-95 text-navy-900 text-[11px] font-bold py-2 px-2 rounded-md shadow transition active:scale-95 whitespace-nowrap">
        ${ic('search', 'w-3 h-3')}<span>${esc(K.traCuu.nhan || 'Tra cứu SBD')}</span>${ic('external-link', 'w-3 h-3 opacity-70')}
      </a>` : '';

    $('#header').innerHTML = `
      <div class="flex justify-between items-center gap-2">
        <div class="flex flex-col gap-1.5 min-w-0">
          <div class="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider leading-normal">
            <img src="${esc(K.logo || 'assets/img/logo.png')}" alt="Logo ${esc(K.donViToChuc)}" width="24" height="24" class="w-6 h-6 rounded-full object-cover bg-white shrink-0">
            <span class="truncate">${esc(K.donViToChuc)}</span>
          </div>
          <h1 class="text-xs font-extrabold text-brand-gold uppercase tracking-wider leading-normal">${esc(K.tieuDe)}</h1>
          <div class="flex flex-wrap gap-1.5">
            <span class="text-[11px] bg-brand-gold text-navy-900 font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">${txt(K.ngayThi)}</span>
            ${K.ngayPhu ? `<span class="text-[11px] bg-white/15 text-white font-bold px-2.5 py-0.5 rounded-full tracking-wide inline-block">${txt(K.ngayPhu)}</span>` : ''}
          </div>
        </div>
        <div class="flex flex-col gap-2 items-end shrink-0">
          ${hot ? `
          <button type="button" data-toggle="hotlineDropdown"
            class="flex items-center gap-1 bg-brand-red hover:brightness-110 text-white text-[11px] font-bold py-2 px-2 rounded-md shadow transition active:scale-95">
            ${ic('phone-call', 'w-3 h-3')}<span>Hotline</span>${ic('chevron-down', 'w-3 h-3 opacity-70')}
          </button>` : ''}
          ${traCuu}
        </div>
      </div>
      ${hot ? `
      <div id="hotlineDropdown" class="hidden mt-2.5 bg-white text-slate-800 p-3 rounded-xl shadow-2xl border border-slate-200 fade-in">
        <div class="flex justify-between items-center border-b pb-1.5 mb-2">
          <span class="text-[11px] font-bold text-navy-800 uppercase flex items-center gap-1">
            ${ic('phone', 'w-3.5 h-3.5 text-brand-red')} Hotline kỳ thi
          </span>
          <button type="button" data-toggle="hotlineDropdown" class="text-slate-400 text-xs font-bold px-1" aria-label="Đóng">✕</button>
        </div>
        <ul class="space-y-1.5 text-xs">${hot}</ul>
      </div>` : ''}`;
  }

  /* ---------- Tab 1: Tổng quan ---------- */
  function renderTongQuan() {
    // diaDiem là mảng (nhiều địa điểm) hoặc một đối tượng (kiểu cũ)
    const dds = (Array.isArray(K.diaDiem) ? K.diaDiem : [K.diaDiem]).filter(Boolean);

    const theDiaDiem = (d, i) => {
      const mapBtn = laLink(d.mapUrl) ? `
        <a href="${esc(d.mapUrl)}" target="_blank" rel="noopener"
           class="inline-flex items-center gap-1.5 bg-navy-700 hover:bg-navy-800 text-white text-xs font-bold px-3 py-2 rounded-lg shadow transition active:scale-95">
          ${ic('navigation', 'w-3.5 h-3.5')} Chỉ đường (Google Maps)
        </a>` : '';
      const mapEmbed = laLink(d.mapEmbed) ? `
        <div class="rounded-xl overflow-hidden border border-slate-200 aspect-video">
          <iframe src="${esc(d.mapEmbed)}" class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="Bản đồ: ${esc(d.ten)}"></iframe>
        </div>` : '';
      const dc = (d.diChuyen || []).concat(i === 0 ? (K.diChuyen || []) : []);
      const diChuyen = dc.map(x => `
        <li class="flex items-start gap-2">
          <span class="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-navy-50 text-navy-700 flex items-center justify-center">${ic(x.icon || 'arrow-right', 'w-3 h-3')}</span>
          <div class="leading-relaxed"><span class="font-bold text-slate-900">${txt(x.phuongTien)}:</span> <span class="text-slate-600">${txt(x.moTa)}</span></div>
        </li>`).join('');
      return card('map-pin', d.nhan || 'Địa điểm & di chuyển', `
        <div class="text-xs space-y-1">
          <div class="font-bold text-slate-900 text-sm leading-snug">${txt(d.ten)}</div>
          <div class="text-slate-600">${txt(d.diaChi)}</div>
          ${d.ghiChu ? `<div class="text-slate-500 italic">${txt(d.ghiChu)}</div>` : ''}
        </div>
        ${mapBtn}
        ${mapEmbed}
        ${diChuyen ? `<ul class="text-xs space-y-2 pt-1">${diChuyen}</ul>` : ''}`, i === 0 ? 'navy' : 'slate');
    };

    const vanBan = (K.vanBan || []).filter(v => v && v.url).map(v => `
      <li>
        <a href="${esc(v.url)}" target="_blank" rel="noopener" class="flex items-start gap-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg px-3 py-2 transition">
          <span class="shrink-0 w-7 h-7 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">${ic('file-text', 'w-3.5 h-3.5')}</span>
          <span class="font-bold text-navy-700 leading-relaxed">${txt(v.ten)}</span>
        </a>
      </li>`).join('');

    const btc = (K.banToChuc || []).map(x => `
      <li class="flex justify-between gap-3 bg-slate-50 px-3 py-2 rounded-lg">
        <span class="text-slate-600 shrink-0">${txt(x.vaiTro)}</span>
        <span class="font-bold text-slate-900 text-right leading-relaxed">${txt(x.ten)}</span>
      </li>`).join('');

    $('#tab-tong-quan').innerHTML = `
      ${card('info', 'Thông tin kỳ thi', `
        <dl class="text-xs grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
          ${dt('Đơn vị tổ chức', K.donViToChuc)}
          ${dt('Kỳ thi', K.dot)}
          ${dt('Ngày thi', K.ngayThi)}
          ${dt('Trước ngày thi', K.ngayPhu)}
          ${dt('Đối tượng', K.doiTuong)}
        </dl>
        ${ghiChu(K.ghiChuChung)}`)}
      ${dds.map(theDiaDiem).join('')}
      ${vanBan ? card('file-text', 'Văn bản của Ban tổ chức', `<ul class="text-xs space-y-1.5">${vanBan}</ul>`) : ''}
      ${btc ? card('users', 'Ban tổ chức', `<ul class="text-xs space-y-1.5">${btc}</ul>`) : ''}
      <p class="text-[11px] text-slate-400 text-center px-1">Cập nhật ${esc(K.capNhat || '')} · ${esc(K.donViToChuc || '')}</p>`;
  }

  /* ---------- Tab 2: Lịch trình ---------- */
  function renderLichTrinh() {
    const theCard = (c, i) => {
      const m = c.mau || mau(i);
      const steps = (c.buoc || []).map((b, j) => `
        <div class="relative flex items-start gap-2.5">
          <div class="absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-${m}-600 text-white font-bold text-xs flex items-center justify-center shrink-0 z-10 shadow-sm">${j + 1}</div>
          <div class="w-full min-w-0">
            <h4 class="font-bold text-slate-900 text-xs">${txt(b.ten)}</h4>
            ${b.moTa ? `<p class="text-xs text-slate-600 mt-0.5 leading-relaxed">${txt(b.moTa)}</p>` : ''}
            ${duoi(b, m)}
          </div>
        </div>`).join('');
      return `
        <div class="relative">
          <div class="absolute -left-[23px] top-3.5 w-3.5 h-3.5 rounded-full border-2 border-${m}-600 bg-white flex items-center justify-center z-10">
            <div class="w-1.5 h-1.5 rounded-full bg-${m}-600"></div>
          </div>
          <div class="bg-${m}-50/60 border border-${m}-200 rounded-xl p-3.5 shadow-sm space-y-3">
            <div class="text-xs font-bold flex items-center gap-1.5 flex-wrap border-b border-${m}-200/60 pb-2">
              <span class="text-${m}-700 font-extrabold bg-${m}-100 px-2 py-0.5 rounded text-[11px]">${txt(c.gio)}</span>
              <span class="text-${m}-400">·</span>
              <span class="uppercase tracking-wide text-slate-900 font-extrabold">${txt(c.ten)}</span>
            </div>
            ${c.moTa ? `<p class="text-xs text-slate-600 leading-relaxed">${txt(c.moTa)}</p>` : ''}
            ${steps ? `<div class="relative pl-8 space-y-3"><div class="absolute left-[11px] top-3 bottom-3 w-[2px] bg-${m}-300"></div>${steps}</div>` : ''}
          </div>
        </div>`;
    };

    // Gom thẻ theo trường `ngay`; không có `ngay` thì tất cả chung một nhóm
    const nhom = [];
    (K.lichTrinh || []).forEach((c, i) => {
      const key = c.ngay || '';
      let g = nhom[nhom.length - 1];
      if (!g || g.ngay !== key) { g = { ngay: key, diaDiem: c.diaDiem || '', cards: [] }; nhom.push(g); }
      g.cards.push(theCard(c, i));
    });
    const timeline = nhom.map(g => `
      ${g.ngay ? `
        <div class="flex items-start gap-2 pt-1">
          <span class="shrink-0 w-7 h-7 rounded-lg bg-navy-800 text-white flex items-center justify-center">${ic('calendar-days', 'w-3.5 h-3.5')}</span>
          <div class="min-w-0">
            <div class="text-xs font-extrabold text-navy-900 uppercase tracking-wide leading-snug">${txt(g.ngay)}</div>
            ${g.diaDiem ? `<div class="text-[11px] text-slate-500 leading-snug">${txt(g.diaDiem)}</div>` : ''}
          </div>
        </div>` : ''}
      <div class="relative pl-6 space-y-4 before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200">${g.cards.join('')}</div>`).join('');

    const danDo = (K.danDo || []).map(g => `
      <div class="border border-slate-200 rounded-xl p-3.5 space-y-2">
        <h3 class="flex items-center gap-2 text-xs font-extrabold text-navy-800 uppercase tracking-wide">
          ${ic(g.icon || 'circle-check', 'w-4 h-4 text-brand-red')}<span>${esc(g.tieuDe)}</span>
        </h3>
        <ul class="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">${list(g.items)}</ul>
      </div>`).join('');

    $('#tab-lich-trinh').innerHTML = `
      ${pills('lich', [['sched', '⏳', 'Khung thời gian'], ['rules', '📝', 'Dặn dò trước kỳ thi']])}
      <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div data-sub-panel="lich:sched" class="fade-in space-y-4">
          ${ghiChu(K.ghiChuLichTrinh)}
          ${timeline}
        </div>
        <div data-sub-panel="lich:rules" class="hidden space-y-3">${danDo}</div>
      </div>`;
  }

  /* ---------- Tab 3: Nội dung thi theo đẳng ---------- */
  function renderNoiDung() {
    const dangs = N.dang || [];
    const pillItems = dangs.map(d => [`d${d.so}`, '', d.tenNgan || `${d.so} đẳng`]);

    const panels = dangs.map((d, i) => {
      const q = d.quyen || {};
      const phan = (d.phanThi || []).map(p => `
        <div class="border border-slate-200 rounded-xl p-3.5 space-y-1.5">
          <h4 class="flex items-center gap-2 text-xs font-extrabold text-navy-800">
            ${ic(p.icon || 'circle-dot', 'w-4 h-4 text-brand-red')}<span>${esc(p.ten)}</span>
          </h4>
          ${p.moTa ? `<p class="text-xs text-slate-600 leading-relaxed">${txt(p.moTa)}</p>` : ''}
          ${(p.items || []).length ? `<ul class="text-xs text-slate-700 space-y-1 list-disc pl-4 leading-relaxed">${list(p.items)}</ul>` : ''}
          ${chipNhom(p.nhom, 'navy')}
          ${p.ghiChu ? `<p class="text-[11px] text-slate-500 italic leading-relaxed">${txt(p.ghiChu)}</p>` : ''}
        </div>`).join('');
      return `
        <div data-sub-panel="dang:d${esc(d.so)}" class="${i ? 'hidden' : 'fade-in'} space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg shadow shrink-0" style="background:${esc(d.mau || '#111111')}">${esc(d.so)}</span>
            <div class="min-w-0">
              <div class="text-sm font-extrabold text-slate-900">${esc(d.ten)}</div>
              ${d.phu ? `<div class="text-[11px] text-slate-500">${txt(d.phu)}</div>` : ''}
            </div>
          </div>
          ${ghiChu(d.ghiChu)}
          ${(d.dieuKien || []).length ? block('clipboard-check', d.tieuDeDieuKien || 'Điều kiện dự thi',
            `<ul class="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">${list(d.dieuKien)}</ul>`) : ''}
          ${((q.batBuoc || []).length || (q.tuChon || []).length) ? block('scroll', 'Bài quyền (Poomsae)', `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div class="bg-navy-50 rounded-lg p-3">
                <div class="font-bold text-navy-800 mb-1">Bắt buộc</div>
                <ul class="space-y-1">${list(q.batBuoc)}</ul>
              </div>
              <div class="bg-slate-50 rounded-lg p-3">
                <div class="font-bold text-slate-700 mb-1">Tự chọn (hội đồng chỉ định)</div>
                <ul class="space-y-1">${list(q.tuChon)}</ul>
              </div>
            </div>`) : ''}
          ${phan ? block('list-checks', d.tieuDePhanThi || 'Các phần thi', `<div class="space-y-2">${phan}</div>`) : ''}
        </div>`;
    }).join('');

    const phanMon = (N.phanMon || []).map((p, i) => `
      <li class="flex items-start gap-2.5">
        <span class="shrink-0 w-6 h-6 rounded-full bg-${mau(i)}-600 text-white font-bold text-xs flex items-center justify-center">${i + 1}</span>
        <div class="leading-relaxed"><span class="font-bold text-slate-900">${esc(p.ten)}</span>${p.moTa ? ` — <span class="text-slate-600">${txt(p.moTa)}</span>` : ''}</div>
      </li>`).join('');

    const nguon = N.nguon ? `
      <p class="text-[11px] text-slate-500 px-1 leading-relaxed">
        Nguồn: ${esc(N.nguon.ten)}${N.nguon.quyetDinh ? ` — ${esc(N.nguon.quyetDinh)}` : ''}${N.nguon.ngay ? ` (${esc(N.nguon.ngay)})` : ''}${N.nguon.canCu ? `. ${esc(N.nguon.canCu)}` : ''}.
      </p>` : '';

    $('#tab-noi-dung').innerHTML = `
      ${ghiChu(N.luuY)}
      ${N.poomDan ? card('baby', N.poomDan.tieuDe || 'Poom hay Dan?',
        `<ul class="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">${list(N.poomDan.items)}</ul>`) : ''}
      ${phanMon ? card('list-checks', 'Các phần thi', `<ul class="text-xs space-y-2">${phanMon}</ul>`) : ''}
      <div class="space-y-2">
        <h2 class="text-xs font-extrabold text-navy-800 uppercase tracking-wide px-1">Yêu cầu theo từng đẳng</h2>
        ${pills('dang', pillItems)}
        <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200">${panels}</div>
      </div>
      ${nguon}`;
  }

  /* ---------- Tab 4: Số báo danh / Hồ sơ & lệ phí ---------- */
  function renderHoSo() {
    const h = K.hoSo || {};
    const s = K.soBaoDanh || {};

    const sanThi = s.sanThi && (s.sanThi.dong || []).length
      ? card('layout-grid', s.sanThi.tieuDe || 'Sàn thi theo nhóm', `${bangNhieuCot(s.sanThi)}${ghiChu(s.sanThi.ghiChu)}`, 'violet')
      : '';
    const sbd = ((s.ban || []).length || (s.buoiThi || []).length || sanThi) ? `
      ${card('ticket', s.tieuDe || 'Số báo danh', `
        <dl class="text-xs grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
          ${dt('Thời gian', s.thoiGian)}
          ${dt('Địa điểm', s.diaDiem)}
        </dl>
        ${bang(s.ban, 'Bàn phát số', 'Đối tượng & số báo danh')}
        ${(s.quyDinh || []).length ? `<ul class="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">${list(s.quyDinh)}</ul>` : ''}`)}
      ${(s.buoiThi || []).length ? card('calendar-check', s.tieuDeBuoiThi || 'Buổi thi theo số báo danh',
        bang(s.buoiThi, 'Buổi thi', 'Đối tượng'), 'rose') : ''}
      ${sanThi}` : '';

    const han = (h.hanNop || h.noiNop || h.hinhThuc) ? card('calendar-clock', 'Thời hạn & nơi nộp', `
      <dl class="text-xs grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
        ${dt('Hạn nộp', h.hanNop)}
        ${dt('Nơi nộp', h.noiNop)}
        ${dt('Hình thức', h.hinhThuc)}
      </dl>`) : '';

    const giayTo = (h.giayTo || []).map((g, i) => `
      <li class="flex items-start gap-2.5 bg-slate-50 rounded-lg px-3 py-2">
        <span class="shrink-0 w-5 h-5 rounded-full bg-navy-700 text-white text-[11px] font-bold flex items-center justify-center mt-0.5">${i + 1}</span>
        <span class="text-slate-800 leading-relaxed">${txt(g)}</span>
      </li>`).join('');
    const phi = (h.lePhi || []).map(p => `
      <tr class="border-b border-slate-100 last:border-0">
        <td class="py-2 pr-3 text-slate-700 leading-relaxed">${txt(p.muc)}</td>
        <td class="py-2 text-right font-bold text-slate-900 whitespace-nowrap">${txt(p.phi)}</td>
      </tr>`).join('');
    const buoc = (h.cachNop || []).map((b, i) => `
      <li class="flex items-start gap-2.5">
        <span class="shrink-0 w-6 h-6 rounded-full bg-${mau(i)}-600 text-white font-bold text-xs flex items-center justify-center">${i + 1}</span>
        <span class="text-slate-800 leading-relaxed">${txt(b)}</span>
      </li>`).join('');

    const body = sbd + han
      + (giayTo ? card('folder-check', 'Hồ sơ dự thi', `<ul class="text-xs space-y-1.5">${giayTo}</ul>${ghiChu(h.ghiChuHoSo)}`) : '')
      + (phi ? card('wallet', 'Lệ phí', `
          <table class="w-full text-xs"><tbody>${phi}</tbody></table>
          ${h.ghiChuLePhi ? `<p class="text-[11px] text-slate-500 leading-relaxed">${txt(h.ghiChuLePhi)}</p>` : ''}`) : '')
      + (buoc ? card('list-ordered', 'Các bước đăng ký', `<ol class="text-xs space-y-2">${buoc}</ol>`) : '');

    $('#tab-ho-so').innerHTML = body
      || `<p class="text-xs text-slate-500 text-center py-8">Chưa có thông tin cho mục này.</p>`;
  }

  /* ---------- Tab 5: Liên hệ & kết quả ---------- */
  function renderLienHe() {
    const l = K.lienHe || {};
    const r = K.ketQua || {};
    const row = (icon, label, value, href) => value ? `
      <li class="flex items-start gap-2.5">
        <span class="shrink-0 w-7 h-7 rounded-full bg-navy-50 text-navy-700 flex items-center justify-center">${ic(icon, 'w-3.5 h-3.5')}</span>
        <div class="min-w-0">
          <div class="text-[11px] text-slate-500">${esc(label)}</div>
          ${href
            ? `<a href="${esc(href)}" ${laLink(href) ? 'target="_blank" rel="noopener"' : ''} class="font-bold text-navy-700 break-words">${txt(value)}</a>`
            : `<div class="font-bold text-slate-900 break-words">${txt(value)}</div>`}
        </div>
      </li>` : '';

    $('#tab-lien-he').innerHTML = `
      ${card('building-2', l.tieuDe || 'Văn phòng Liên đoàn', `<ul class="text-xs space-y-3">
        ${row('map-pin', 'Địa chỉ', l.diaChi)}
        ${row('phone', 'Điện thoại', l.dienThoai, coSo(l.dienThoai) ? 'tel:' + tel(l.dienThoai) : '')}
        ${row('mail', 'Email', l.email, /^[^\s@[\]]+@[^\s@]+$/.test(l.email || '') ? 'mailto:' + l.email : '')}
        ${row('external-link', 'Fanpage', l.facebook, laLink(l.facebook) ? l.facebook : '')}
        ${row('globe', 'Website', l.website, laLink(l.website) ? l.website : '')}
        ${row('clock', 'Giờ làm việc', l.gioLamViec)}
      </ul>`)}
      ${(r.items || []).length ? card('award', r.tieuDe || 'Kết quả & chứng chỉ',
        `<ul class="text-xs text-slate-700 space-y-1.5 list-disc pl-4 leading-relaxed">${list(r.items)}</ul>`) : ''}
      <p class="text-[11px] text-slate-400 text-center px-1">Cập nhật ${esc(K.capNhat || '')} · ${esc(K.donViToChuc || '')}</p>`;
  }

  /* ---------- Thanh điều hướng & chuyển tab ---------- */
  const nhanHoSo = (K.nhanTab && K.nhanTab.hoSo) || {};
  const tabAn = new Set(K.tabAn || []);          // tab liệt kê trong KY_THI.tabAn thì không hiện
  const TABS = [
    ['tong-quan',  'info',                            'Tổng quan'],
    ['lich-trinh', 'clock',                           'Lịch trình'],
    ['noi-dung',   'book-open-check',                 'Nội dung thi'],
    ['ho-so',      nhanHoSo.icon || 'folder-check',   nhanHoSo.nhan || 'Hồ sơ & lệ phí'],
    ['lien-he',    'phone',                           'Liên hệ'],
  ].filter(t => !tabAn.has(t[0]));

  function renderNav() {
    $('#nav').innerHTML = TABS.map(([id, icon, label]) => `
      <button type="button" data-tab="${id}" id="nav-${id}"
        class="nav-btn flex-1 flex flex-col items-center gap-1 text-[9px] leading-tight text-center font-medium text-slate-500 transition-colors">
        ${ic(icon)}<span>${esc(label)}</span>
      </button>`).join('');
  }

  function switchTab(id) {
    if (!TABS.some(t => t[0] === id)) id = TABS[0][0];
    $$('.tab-content').forEach(p => p.classList.toggle('active', p.id === `tab-${id}`));
    $$('.nav-btn').forEach(b => {
      const on = b.dataset.tab === id;
      b.classList.toggle('text-navy-800', on);
      b.classList.toggle('font-bold', on);
      b.classList.toggle('text-slate-500', !on);
      b.classList.toggle('font-medium', !on);
    });
    if (location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- Khởi động ---------- */
  function init() {
    renderHeader();
    renderNav();
    renderTongQuan();
    renderLichTrinh();
    renderNoiDung();
    renderHoSo();
    renderLienHe();

    document.addEventListener('click', e => {
      const t = e.target.closest('[data-toggle]');
      if (t) { const el = $('#' + t.dataset.toggle); if (el) el.classList.toggle('hidden'); return; }
      const nb = e.target.closest('.nav-btn');
      if (nb) { switchTab(nb.dataset.tab); return; }
      const sb = e.target.closest('[data-sub-group]');
      if (sb) switchSub(sb.dataset.subGroup, sb.dataset.sub);
    });
    window.addEventListener('hashchange', () => switchTab(location.hash.slice(1)));
    switchTab(location.hash.slice(1) || TABS[0][0]);

    try { window.lucide && lucide.createIcons(); } catch (e) { /* bộ icon chưa tải: trang vẫn đọc được */ }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
