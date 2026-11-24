(() => {
  const WHATSAPP_NUMBER = '60178330166';
  const LANG_STORAGE_KEY = 'ezcustom_lang';
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

  // Complete BM (ms) & EN (en) translation dictionary
  const I18N = {
    ms: {
      pageTitle: 'EzCustom — Tempah Baju & Jersi Custom',
      brandSub: 'Studio Baju & Jersi Custom',
      catalogBtn: 'Katalog Kain & Kolar',
      heroEyebrow: 'EzCustom Studio',
      heroTitle: 'Tempah baju custom.<br /><span>Ringkas. Pantas. Kemas.</span>',
      heroSubtitle:
        'Pilih jenis baju, letak design sendiri atau minta kami buatkan, pilih saiz, dan terus lock order di WhatsApp.',

      step1Pill: 'Langkah 1',
      step1Title: 'Pilih jenis baju anda.',
      step1Sub: 'Tekan salah satu kad untuk mula kira harga & tarikh siap automatik.',
      dtfBadge1: '1 Helai Pun Boleh',
      dtfBadge2: 'Siap 2–4 Hari',
      dtfName: 'Baju Cotton DTF',
      dtfDesc: 'Selesa dipakai harian • Siap 2–4 hari bekerja',
      dtfFootnote: 'Free Postage bila ambil 3 helai ke atas',
      jersiBadge1: 'Min 10 Helai',
      jersiBadge2: 'Siap 10–14 Hari',
      jersiName: 'Jersi Sublimation Team',
      jersiDesc: 'Penuh warna • Siap 10–14 hari bekerja',
      jersiFootnote: 'Sesuai bola, futsal, batch, larian & family day',
      perPiece: '/ helai',
      etaLabel: 'Dijangka siap pos (dikira dari hari ini)',
      etaNote: 'Tidak termasuk Sabtu & Ahad. Tarikh rasmi dikira selepas deposit & confirm design.',

      step2Pill: 'Langkah 2',
      step2Title: 'Design ikut gaya anda.',
      step2Sub: 'Upload gambar terus atas baju, atau biar kami buatkan basic design percuma.',
      tabOwn: 'Ada Design Sendiri',
      tabCustom: 'Minta Kami Buatkan (FREE)',
      placeholderText: 'Pratonton design anda di sini',
      stageCaption: 'Seret gambar dengan jari atau laras guna slider di sebelah.',
      uploadBtn: 'Muat Naik Gambar Design',
      fileEmpty: 'Belum pilih gambar (PNG atau JPG)',
      fileInvalid: 'Sila pilih fail gambar sahaja (PNG atau JPG).',
      fileUploaded: (name) => `Dimuat naik: ${name}`,
      adjustTitle: 'Laras Kedudukan & Saiz',
      sliderSize: 'Saiz',
      sliderY: 'Atas / Bawah',
      sliderX: 'Kiri / Kanan',
      resetPosBtn: 'Tengah Semula',
      removeDesignBtn: 'Buang Gambar',
      studioTip:
        '<strong>Tip ringkas:</strong> Pratonton ini untuk lihat anggaran posisi atas baju. Lepas tekan WhatsApp nanti, hantar sekali gambar asal supaya cetakan paling tajam.',
      customPill1: 'FREE Basic Design',
      customPill2: 'Max 3x Edit Kecil',
      customPill3: 'Tiada Logo Hak Cipta / Trademark',
      customLead:
        'Tak pandai edit gambar? Tiada masalah. Cerita sahaja idea anda di bawah — kami buatkan basic design secara <strong>percuma</strong> selepas bayar deposit design RM50.',
      customPolicy:
        'Kami tidak mencetak logo hak cipta atau trademark berjenama (contoh: Nike, Adidas, Puma, Marvel, kartun berlesen, dan sebagainya).',
      designNoteLabel: 'Tulis idea ringkas anda (pilihan)',
      designNotePlaceholder:
        "Contoh: Nak tulis 'FAMILY DAY 2026' warna putih depan dada, tema biru & oren...",

      step3Pill: 'Langkah 3',
      step3Title: 'Pilih saiz & bilangan.',
      step3Sub: 'Tekan + atau − pada saiz yang diperlukan. Harga dikira automatik.',
      sizeChartBtn: 'Lihat Carta Saiz ›',
      clearSizesBtn: 'Kosongkan semua saiz',
      qtySelected: (q) => `${q} helai dipilih`,
      qtyUnit: (q) => `${q} helai`,
      perPieceCompact: '/helai',
      sumProductLabel: 'Jenis Baju',
      sumQtyLabel: 'Jumlah Helai',
      sumUnitLabel: 'Harga Sehelai',
      sumPostageLabel: 'Postage',
      sumTotalLabel: 'Jumlah Harga',
      postageFree: 'Free Postage',
      postageByLocation: 'Ikut lokasi (bincang di WhatsApp)',
      postageByLocationShort: 'Ikut lokasi',
      depLabelCustom: 'Anggaran Deposit (RM50 design / 60%–70% cetak)',
      depLabelOwn: 'Anggaran Deposit Cetak (60%–70%)',
      depValCustomWithQty: (d60, d70) => `RM50 (design) • RM${d60}–RM${d70} (cetak)`,
      depValCustomZero: 'RM50 (mula design)',
      depValOwn: (d60, d70) => `RM${d60} – RM${d70}`,

      tierDtf: [
        { label: '1–2 helai', note: 'Postage ikut lokasi' },
        { label: '3–4 helai', note: 'Free Postage' },
        { label: '5–6 helai', note: 'Free Postage' },
        { label: '7+ helai', note: 'Free Postage' },
      ],
      tierJersi: [
        { label: '10–19 helai', note: 'Min 10 helai' },
        { label: '20+ helai', note: 'Harga borong team' },
      ],

      nudgeJersiMin: (need) =>
        `Jersi Sublimation minimum 10 helai ya. Tambah lagi ${need} helai untuk lock order.`,
      nudgeDtf2: 'Tip jimat: Tambah 1 helai lagi (jadi 3 helai) dapat RM32/helai + Free Postage.',
      nudgeDtf4: 'Tip jimat: Tambah 1 helai lagi (jadi 5 helai) turun jadi RM31/helai + Free Postage.',
      nudgeDtf6:
        'Tip jimat: Tambah 1 helai lagi (jadi 7 helai) dapat harga paling rendah RM30/helai + Free Postage.',
      nudgeDtfFree: 'Order anda layak mendapat Free Postage.',
      nudgeJersiNear20: (need) =>
        `Tip jimat: Tambah lagi ${need} helai (jadi 20 helai) turun jadi RM25/helai.`,
      nudgeJersi20: 'Anda mendapat harga borong team RM25/helai.',

      step4Pill: 'Langkah 4',
      step4Title: 'Pengesahan ringkas.',
      step4Sub: 'Tick semua 4 kotak di bawah untuk aktifkan butang WhatsApp.',
      policy1:
        '<strong>Setuju Deposit</strong> — Saya setuju bayar deposit dulu (RM50 untuk mula design / 60%–70% untuk mula cetak).',
      policy2:
        '<strong>Had Edit &amp; Hak Cipta</strong> — Saya faham free basic design termasuk max 3 kali edit kecil sahaja &amp; tiada logo hak cipta/trademark.',
      policy3:
        '<strong>Saiz Muktamad</strong> — Saya sudah semak carta saiz &amp; faham saiz adalah muktamad lepas confirm.',
      policy4:
        '<strong>Masa Balas &amp; Mockup</strong> — Saya faham admin akan balas mesej &amp; hantar mockup selepas jam 6 petang.',
      lockReady: 'Semua lengkap! Tekan butang hijau untuk lock order di WhatsApp.',
      lockNeedJersi: (q) =>
        `Pilih sekurang-kurangnya 10 helai jersi (sekarang ${q} helai) & tick semua 4 kotak di atas.`,
      lockNeedDtf: 'Pilih sekurang-kurangnya 1 helai saiz di Langkah 3 & tick semua 4 kotak di atas.',
      lockNeedChecks: (rem) =>
        `Tinggal ${rem} kotak lagi belum tick untuk hidupkan butang WhatsApp.`,
      whatsappBtn: 'Lock Order & Hantar ke WhatsApp',
      footerText: 'EzCustom • Tempahan rasmi melalui WhatsApp (017-833 0166)',

      dockBtn: 'Lock Order',
      dockEtaPrefix: 'Dijangka siap pos:',
      daysLabel: (min, max) => `${min}–${max} hari bekerja`,
      days: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
      months: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],

      helpFab: 'Bantuan?',
      helpHead: 'Jawapan Pantas',
      faqTabHarga: 'Harga',
      faqTabSiap: 'Bila Siap',
      faqTabDeposit: 'Deposit',
      faqTabDesign: 'Tak Pandai Design',
      faqAnswers: (dtfEta, jersiEta) => ({
        harga: `
          <strong>Senarai Harga Ringkas:</strong>
          <ul>
            <li><strong>Baju Cotton DTF:</strong> 1–2 helai RM33 • 3–4 helai RM32 (+Free Postage) • 5–6 helai RM31 (+Free Postage) • 7+ helai RM30 (+Free Postage).</li>
            <li><strong>Jersi Sublimation Team (min 10 helai):</strong> 10–19 helai RM28/helai • 20+ helai RM25/helai.</li>
          </ul>
        `,
        siap: `
          <strong>Dijangka Siap Pos (dari hari ini):</strong>
          <ul>
            <li><strong>Baju Cotton DTF (2–4 hari bekerja):</strong> ${dtfEta.text}</li>
            <li><strong>Jersi Sublimation (10–14 hari bekerja):</strong> ${jersiEta.text}</li>
          </ul>
        `,
        deposit: `
          <strong>Cara Bayar Deposit:</strong>
          <ul>
            <li><strong>Mula Design:</strong> Deposit <strong>RM50</strong> dulu untuk kami buat mockup.</li>
            <li><strong>Mula Cetak:</strong> Deposit <strong>60%–70%</strong> daripada jumlah order sebelum masuk mesin cetak. Baki bayar bila baju dah siap.</li>
          </ul>
        `,
        design: `
          <strong>Tak Pandai Design? Tak Apa!</strong><br/>
          Pilih tab <em>"Minta Kami Buatkan (FREE)"</em> di Langkah 2. Kami buatkan basic design <strong>percuma</strong> termasuk <strong>max 3 kali edit kecil</strong>. Cuma kami tidak cetak logo hak cipta/trademark (Nike, Adidas, dll).
        `,
      }),

      sizeChartTitle: 'Carta Saiz (XS – 5XL)',
      sizeChartNote:
        'Ukuran standard Unisex dalam <strong>inci</strong> (±0.5 inci). Kalau suka longgar, ambil 1 saiz lebih besar.',
      colSize: 'Saiz',
      colChest: 'Lebar Dada',
      colLength: 'Labuh Baju',
      colWeight: 'Anggaran Berat',

      catalogTitle: 'Katalog Jenis Kolar, Kain & Add-on',
      catalogNote:
        'Pilihan tambahan untuk kolar, jenis kain jersi, atau nama & nombor (boleh bincang di WhatsApp):',
      catCap1: 'Jenis Kolar',
      catCap2: 'Jenis Kain — Eyelet, Mini Eyelet, Interlock',
      catCap3: 'Jenis Kain — RJPK, Diamond, Lycra',
      catCap4: 'Add-on — Lengan Panjang, Muslimah, Poket & Cuff',
      catCap5: 'Add-on — Nama & Nombor',

      waMessage: ({ prodName, designLine, sizeSummary, qty, unitPrice, postageText, total, depositLine, eta }) =>
        [
          'Hai admin EzCustom! Saya nak LOCK ORDER baju:',
          '',
          `👕 Jenis: ${prodName}`,
          `🎨 Design: ${designLine}`,
          `📏 Saiz: ${sizeSummary}`,
          `🔢 Jumlah: ${qty} helai (RM${unitPrice}/helai)`,
          `🚚 Postage: ${postageText}`,
          `💰 Jumlah Harga: RM${total}`,
          `💳 Anggaran Deposit: ${depositLine}`,
          `📅 Dijangka Siap Pos: ${eta.text} (${eta.daysLabel})`,
          '',
          '✅ Saya dah setuju semua 4 syarat (deposit, max 3x edit & tiada logo trademark, saiz muktamad, balas/mockup selepas 6 petang).',
        ].join('\n'),
      waDesignOwnWithFile: (f) => `Ada design sendiri (fail: ${f} — saya hantar gambar kejap lagi)`,
      waDesignOwnNoFile: 'Ada design sendiri (saya hantar gambar dalam chat ni)',
      waDesignCustomWithNote: (n) => `Minta kedai buatkan (FREE basic design) — Idea: ${n}`,
      waDesignCustomNoNote: 'Minta kedai buatkan (FREE basic design)',
      waDepositCustom: (d60, d70) => `RM50 (mula design) / RM${d60}–RM${d70} (60%–70% cetak)`,
      waDepositOwn: (d60, d70) => `RM${d60}–RM${d70} (60%–70% cetak)`,
    },

    en: {
      pageTitle: 'EzCustom — Custom T-Shirts & Team Jerseys',
      brandSub: 'Custom Apparel & Jersey Studio',
      catalogBtn: 'Fabric & Collar Catalog',
      heroEyebrow: 'EzCustom Studio',
      heroTitle: 'Custom shirts made easy.<br /><span>Simple. Fast. Clean.</span>',
      heroSubtitle:
        'Pick your apparel, upload your artwork or let us design it for free, choose sizes, and lock your order on WhatsApp.',

      step1Pill: 'Step 1',
      step1Title: 'Choose your apparel.',
      step1Sub: 'Tap either card to calculate live pricing and estimated ship-out dates.',
      dtfBadge1: 'From 1 Piece',
      dtfBadge2: 'Ready in 2–4 Days',
      dtfName: 'DTF Cotton T-Shirt',
      dtfDesc: 'Soft everyday comfort • Ready in 2–4 working days',
      dtfFootnote: 'Free Postage when you order 3 pieces or more',
      jersiBadge1: 'Min 10 Pieces',
      jersiBadge2: 'Ready in 10–14 Days',
      jersiName: 'Sublimation Team Jersey',
      jersiDesc: 'Full-color athletic print • Ready in 10–14 working days',
      jersiFootnote: 'Great for football, futsal, batch, running & family day',
      perPiece: '/ pc',
      etaLabel: 'Estimated ship-out (calculated from today)',
      etaNote: 'Excludes weekends. Final ship-out date starts after deposit & design confirmation.',

      step2Pill: 'Step 2',
      step2Title: 'Customize your design.',
      step2Sub: 'Preview your artwork right on the shirt, or let our team create a free basic design.',
      tabOwn: 'Upload Your Own Design',
      tabCustom: 'Let Us Design It (FREE)',
      placeholderText: 'Your design preview appears here',
      stageCaption: 'Drag your artwork directly on the shirt or adjust with the sliders.',
      uploadBtn: 'Upload Design Image',
      fileEmpty: 'No image selected yet (PNG or JPG)',
      fileInvalid: 'Please select an image file only (PNG or JPG).',
      fileUploaded: (name) => `Uploaded: ${name}`,
      adjustTitle: 'Adjust Position & Size',
      sliderSize: 'Size',
      sliderY: 'Up / Down',
      sliderX: 'Left / Right',
      resetPosBtn: 'Reset Center',
      removeDesignBtn: 'Remove Image',
      studioTip:
        '<strong>Quick tip:</strong> This preview helps you check placement. After tapping WhatsApp, please attach your original high-res file in the chat for crisp printing.',
      customPill1: 'FREE Basic Design',
      customPill2: 'Max 3 Minor Edits',
      customPill3: 'No Copyright / Trademark Logos',
      customLead:
        'Not sure how to design? No worries. Just share your idea below — we will craft a basic design for <strong>free</strong> once the RM50 design deposit is paid.',
      customPolicy:
        'We do not print copyrighted or trademarked brand logos (e.g. Nike, Adidas, Puma, Marvel, licensed cartoons, etc.).',
      designNoteLabel: 'Describe your design idea (optional)',
      designNotePlaceholder:
        "Example: White text 'FAMILY DAY 2026' on the front chest, blue & orange theme...",

      step3Pill: 'Step 3',
      step3Title: 'Select sizes & quantity.',
      step3Sub: 'Tap + or − for each size. Pricing updates automatically.',
      sizeChartBtn: 'View Size Chart ›',
      clearSizesBtn: 'Clear all sizes',
      qtySelected: (q) => `${q} ${q === 1 ? 'pc' : 'pcs'} selected`,
      qtyUnit: (q) => `${q} ${q === 1 ? 'pc' : 'pcs'}`,
      perPieceCompact: '/pc',
      sumProductLabel: 'Apparel Type',
      sumQtyLabel: 'Total Quantity',
      sumUnitLabel: 'Price per Piece',
      sumPostageLabel: 'Postage',
      sumTotalLabel: 'Total Price',
      postageFree: 'Free Postage',
      postageByLocation: 'Based on location (confirm on WhatsApp)',
      postageByLocationShort: 'Based on location',
      depLabelCustom: 'Est. Deposit (RM50 design / 60%–70% print)',
      depLabelOwn: 'Est. Printing Deposit (60%–70%)',
      depValCustomWithQty: (d60, d70) => `RM50 (design) • RM${d60}–RM${d70} (print)`,
      depValCustomZero: 'RM50 (start design)',
      depValOwn: (d60, d70) => `RM${d60} – RM${d70}`,

      tierDtf: [
        { label: '1–2 pcs', note: 'Postage by location' },
        { label: '3–4 pcs', note: 'Free Postage' },
        { label: '5–6 pcs', note: 'Free Postage' },
        { label: '7+ pcs', note: 'Free Postage' },
      ],
      tierJersi: [
        { label: '10–19 pcs', note: 'Min 10 pcs' },
        { label: '20+ pcs', note: 'Team bulk rate' },
      ],

      nudgeJersiMin: (need) =>
        `Sublimation Jerseys require a minimum of 10 pcs. Add ${need} more to lock your order.`,
      nudgeDtf2: 'Save more: Add 1 more piece (3 pcs total) to unlock RM32/pc + Free Postage.',
      nudgeDtf4: 'Save more: Add 1 more piece (5 pcs total) to drop to RM31/pc + Free Postage.',
      nudgeDtf6: 'Save more: Add 1 more piece (7 pcs total) for our lowest rate of RM30/pc + Free Postage.',
      nudgeDtfFree: 'Awesome! Your order qualifies for Free Postage.',
      nudgeJersiNear20: (need) =>
        `Save more: Add ${need} more pcs (20 pcs total) to unlock RM25/pc team bulk pricing.`,
      nudgeJersi20: 'You unlocked our RM25/pc team bulk rate!',

      step4Pill: 'Step 4',
      step4Title: 'Quick confirmation.',
      step4Sub: 'Tick all 4 boxes below to activate the WhatsApp checkout button.',
      policy1:
        '<strong>Deposit Agreement</strong> — I agree to pay the deposit first (RM50 to start design / 60%–70% to start printing).',
      policy2:
        '<strong>Edits &amp; Copyright</strong> — I understand free basic design includes max 3 minor edits &amp; no copyrighted/trademarked logos.',
      policy3:
        '<strong>Final Sizes</strong> — I have checked the size chart &amp; understand sizes are final once confirmed.',
      policy4:
        '<strong>Replies &amp; Mockups</strong> — I understand admin replies &amp; sends mockups after 6:00 PM.',
      lockReady: 'All set! Tap the green button to lock your order on WhatsApp.',
      lockNeedJersi: (q) =>
        `Select at least 10 jerseys (currently ${q} pcs) & tick all 4 policy boxes above.`,
      lockNeedDtf: 'Select at least 1 piece in Step 3 & tick all 4 policy boxes above.',
      lockNeedChecks: (rem) =>
        `${rem} more ${rem === 1 ? 'box' : 'boxes'} left to tick before unlocking WhatsApp checkout.`,
      whatsappBtn: 'Lock Order & Send via WhatsApp',
      footerText: 'EzCustom • Official orders via WhatsApp (017-833 0166)',

      dockBtn: 'Lock Order',
      dockEtaPrefix: 'Est. ship-out:',
      daysLabel: (min, max) => `${min}–${max} working days`,
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      helpFab: 'Help?',
      helpHead: 'Quick Answers',
      faqTabHarga: 'Pricing',
      faqTabSiap: 'Lead Time',
      faqTabDeposit: 'Deposit',
      faqTabDesign: 'No Design?',
      faqAnswers: (dtfEta, jersiEta) => ({
        harga: `
          <strong>Quick Price Guide:</strong>
          <ul>
            <li><strong>DTF Cotton T-Shirt:</strong> 1–2 pcs RM33 • 3–4 pcs RM32 (+Free Postage) • 5–6 pcs RM31 (+Free Postage) • 7+ pcs RM30 (+Free Postage).</li>
            <li><strong>Sublimation Team Jersey (min 10 pcs):</strong> 10–19 pcs RM28/pc • 20+ pcs RM25/pc.</li>
          </ul>
        `,
        siap: `
          <strong>Estimated Ship-Out (from today):</strong>
          <ul>
            <li><strong>DTF Cotton T-Shirt (2–4 working days):</strong> ${dtfEta.text}</li>
            <li><strong>Sublimation Jersey (10–14 working days):</strong> ${jersiEta.text}</li>
          </ul>
        `,
        deposit: `
          <strong>How Deposits Work:</strong>
          <ul>
            <li><strong>Start Design:</strong> <strong>RM50</strong> deposit to begin your mockup.</li>
            <li><strong>Start Printing:</strong> <strong>60%–70%</strong> deposit before printing begins. Pay the balance once your shirts are ready.</li>
          </ul>
        `,
        design: `
          <strong>Don't Know How to Design? No Problem!</strong><br/>
          Select the <em>"Let Us Design It (FREE)"</em> tab in Step 2. We create a basic design for <strong>free</strong> with up to <strong>3 minor edits</strong>. Please note we cannot print copyrighted/trademarked logos (Nike, Adidas, etc.).
        `,
      }),

      sizeChartTitle: 'Size Chart (XS – 5XL)',
      sizeChartNote:
        'Standard Unisex measurements in <strong>inches</strong> (±0.5 in). For a looser fit, go 1 size up.',
      colSize: 'Size',
      colChest: 'Chest Width',
      colLength: 'Shirt Length',
      colWeight: 'Est. Weight',

      catalogTitle: 'Collar, Fabric & Add-on Catalog',
      catalogNote:
        'Optional upgrades for collar styles, jersey fabrics, or names & numbers (discuss with us on WhatsApp):',
      catCap1: 'Collar Styles',
      catCap2: 'Fabric Types — Eyelet, Mini Eyelet, Interlock',
      catCap3: 'Fabric Types — RJPK, Diamond, Lycra',
      catCap4: 'Add-ons — Long Sleeve, Muslimah, Pocket & Cuff',
      catCap5: 'Add-ons — Name & Number',

      waMessage: ({ prodName, designLine, sizeSummary, qty, unitPrice, postageText, total, depositLine, eta }) =>
        [
          'Hi EzCustom admin! I would like to LOCK MY ORDER:',
          '',
          `👕 Item: ${prodName}`,
          `🎨 Design: ${designLine}`,
          `📏 Sizes: ${sizeSummary}`,
          `🔢 Quantity: ${qty} pcs (RM${unitPrice}/pc)`,
          `🚚 Postage: ${postageText}`,
          `💰 Total Price: RM${total}`,
          `💳 Est. Deposit: ${depositLine}`,
          `📅 Estimated Ship-Out: ${eta.text} (${eta.daysLabel})`,
          '',
          '✅ I agree to all 4 terms (deposit, max 3 minor edits & no trademarked logos, final sizes after confirmation, replies/mockups after 6 PM).',
        ].join('\n'),
      waDesignOwnWithFile: (f) => `Own design (file: ${f} — I will send the image right after this)`,
      waDesignOwnNoFile: 'Own design (I will send the artwork in this chat)',
      waDesignCustomWithNote: (n) => `Request free basic design — Idea: ${n}`,
      waDesignCustomNoNote: 'Request free basic design',
      waDepositCustom: (d60, d70) => `RM50 (start design) / RM${d60}–RM${d70} (60%–70% print)`,
      waDepositOwn: (d60, d70) => `RM${d60}–RM${d70} (60%–70% print)`,
    },
  };

  const PRODUCTS = {
    dtf: {
      image: 'images/baju-dtf.png',
      minQty: 1,
      minWorkDays: 2,
      maxWorkDays: 4,
      tierPrices: [33, 32, 31, 30],
      tierChecks: [
        (q) => q >= 1 && q <= 2,
        (q) => q >= 3 && q <= 4,
        (q) => q >= 5 && q <= 6,
        (q) => q >= 7,
      ],
    },
    jersi: {
      image: 'images/jersi-sublimation.png',
      minQty: 10,
      minWorkDays: 10,
      maxWorkDays: 14,
      tierPrices: [28, 25],
      tierChecks: [(q) => q >= 10 && q <= 19, (q) => q >= 20],
    },
  };

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      return saved === 'en' ? 'en' : 'ms';
    } catch {
      return 'ms';
    }
  }

  const state = {
    lang: getSavedLang(),
    product: 'dtf',
    designMode: 'own',
    uploadedFileName: '',
    fileInvalid: false,
    sizes: Object.fromEntries(SIZES.map((s) => [s, 0])),
    designPos: { x: 50, y: 38, scale: 68 },
  };

  // DOM references
  const langButtons = document.querySelectorAll('.lang-btn');
  const productTiles = document.querySelectorAll('.product-tile');
  const etaDateText = document.getElementById('etaDateText');
  const segButtons = document.querySelectorAll('.seg-btn');
  const panelOwn = document.getElementById('panelOwn');
  const panelCustom = document.getElementById('panelCustom');
  const previewShirtImg = document.getElementById('previewShirtImg');
  const designFileInput = document.getElementById('designFileInput');
  const fileStatus = document.getElementById('fileStatus');
  const designPlaceholder = document.getElementById('designPlaceholder');
  const designOverlay = document.getElementById('designOverlay');
  const adjustBox = document.getElementById('adjustBox');
  const sizeSlider = document.getElementById('sizeSlider');
  const posYSlider = document.getElementById('posYSlider');
  const posXSlider = document.getElementById('posXSlider');
  const resetPosBtn = document.getElementById('resetPosBtn');
  const removeDesignBtn = document.getElementById('removeDesignBtn');
  const shirtStage = document.getElementById('shirtStage');
  const designNoteInput = document.getElementById('designNoteInput');

  const tierStrip = document.getElementById('tierStrip');
  const sizeGrid = document.getElementById('sizeGrid');
  const clearSizesBtn = document.getElementById('clearSizesBtn');
  const totalQtyPill = document.getElementById('totalQtyPill');
  const nudgeBox = document.getElementById('nudgeBox');

  const sumProduct = document.getElementById('sumProduct');
  const sumQty = document.getElementById('sumQty');
  const sumUnitPrice = document.getElementById('sumUnitPrice');
  const sumPostage = document.getElementById('sumPostage');
  const sumTotal = document.getElementById('sumTotal');
  const sumDepositLabel = document.getElementById('sumDepositLabel');
  const sumDeposit = document.getElementById('sumDeposit');

  const dockTotal = document.getElementById('dockTotal');
  const dockQty = document.getElementById('dockQty');
  const dockEta = document.getElementById('dockEta');
  const dockWhatsappBtn = document.getElementById('dockWhatsappBtn');

  const agreeCheckboxes = document.querySelectorAll('.agree-checkbox');
  const lockHint = document.getElementById('lockHint');
  const whatsappBtn = document.getElementById('whatsappBtn');

  const helpFab = document.getElementById('helpFab');
  const helpPopover = document.getElementById('helpPopover');
  const closeHelpBtn = document.getElementById('closeHelpBtn');
  const helpPills = document.querySelectorAll('.help-pill');
  const helpAnswer = document.getElementById('helpAnswer');

  const openSizeChartBtn = document.getElementById('openSizeChartBtn');
  const openCatalogBtn = document.getElementById('openCatalogBtn');

  function t() {
    return I18N[state.lang];
  }

  function triggerAnim(el, className) {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  }

  // --- Working-day date helpers ---
  function addWorkingDays(startDate, workDays) {
    const d = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    let added = 0;
    while (added < workDays) {
      d.setDate(d.getDate() + 1);
      const day = d.getDay();
      if (day !== 0 && day !== 6) added++;
    }
    return d;
  }

  function formatDateLocalized(date) {
    const dict = t();
    return `${dict.days[date.getDay()]}, ${date.getDate()} ${dict.months[date.getMonth()]} ${date.getFullYear()}`;
  }

  function formatShortDateLocalized(date) {
    const dict = t();
    return `${date.getDate()} ${dict.months[date.getMonth()]}`;
  }

  function getEtaRange(productKey) {
    const prod = PRODUCTS[productKey];
    const dict = t();
    const today = new Date();
    const start = addWorkingDays(today, prod.minWorkDays);
    const end = addWorkingDays(today, prod.maxWorkDays);
    return {
      text: `${formatDateLocalized(start)} – ${formatDateLocalized(end)}`,
      shortText: `${formatShortDateLocalized(start)} – ${formatShortDateLocalized(end)}`,
      daysLabel: dict.daysLabel(prod.minWorkDays, prod.maxWorkDays),
    };
  }

  // --- Pricing logic ---
  function getTotalQty() {
    return Object.values(state.sizes).reduce((a, b) => a + b, 0);
  }

  function calculatePricing() {
    const qty = getTotalQty();
    const prod = PRODUCTS[state.product];
    let unitPrice = 0;
    let freePostage = false;

    if (state.product === 'dtf') {
      if (qty >= 7) {
        unitPrice = 30;
        freePostage = true;
      } else if (qty >= 5) {
        unitPrice = 31;
        freePostage = true;
      } else if (qty >= 3) {
        unitPrice = 32;
        freePostage = true;
      } else {
        unitPrice = 33;
        freePostage = false;
      }
    } else {
      unitPrice = qty >= 20 ? 25 : 28;
      freePostage = false;
    }

    const total = qty * unitPrice;
    const dep60 = Math.round(total * 0.6);
    const dep70 = Math.round(total * 0.7);
    const meetsMin = qty >= prod.minQty;

    return { qty, unitPrice, total, freePostage, dep60, dep70, meetsMin, prod };
  }

  // --- Build XS–5XL pills ---
  function buildSizeGrid() {
    sizeGrid.innerHTML = '';
    SIZES.forEach((size) => {
      const cell = document.createElement('div');
      cell.className = 'size-cell';
      cell.dataset.size = size;
      cell.innerHTML = `
        <span class="size-label">${size}</span>
        <div class="qty-control">
          <button type="button" class="qty-btn minus" data-action="dec" data-size="${size}" aria-label="− ${size}">−</button>
          <span class="qty-val" id="qty-${size}">0</span>
          <button type="button" class="qty-btn plus" data-action="inc" data-size="${size}" aria-label="+ ${size}">+</button>
        </div>
      `;
      sizeGrid.appendChild(cell);
    });
  }

  // --- Apply static & dynamic translations ---
  function applyStaticTranslations() {
    const dict = t();
    document.documentElement.lang = state.lang;
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (typeof dict[key] === 'string') el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (typeof dict[key] === 'string') el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (typeof dict[key] === 'string') el.setAttribute('placeholder', dict[key]);
    });

    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === state.lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    updateFileStatusText();
  }

  function updateFileStatusText() {
    const dict = t();
    if (state.fileInvalid) {
      fileStatus.textContent = dict.fileInvalid;
    } else if (state.uploadedFileName) {
      fileStatus.textContent = dict.fileUploaded(state.uploadedFileName);
    } else {
      fileStatus.textContent = dict.fileEmpty;
    }
  }

  function setLanguage(lang) {
    if (lang !== 'ms' && lang !== 'en') return;
    state.lang = lang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage restrictions
    }
    applyStaticTranslations();
    updateAll(false);
    updateHelpAnswer();
  }

  // --- Update all dynamic UI ---
  function updateAll(animatePrice = false) {
    const dict = t();
    const { qty, unitPrice, total, freePostage, dep60, dep70, meetsMin, prod } = calculatePricing();
    const eta = getEtaRange(state.product);
    const prodName = state.product === 'dtf' ? dict.dtfName : dict.jersiName;

    // 1) ETA
    etaDateText.textContent = `${eta.text} (${eta.daysLabel})`;

    // 2) Tier pills
    const tierMeta = state.product === 'dtf' ? dict.tierDtf : dict.tierJersi;
    tierStrip.innerHTML = tierMeta
      .map((meta, idx) => {
        const price = prod.tierPrices[idx];
        const active = qty > 0 && prod.tierChecks[idx](qty) ? 'active-tier' : '';
        return `
          <div class="tier-pill ${active}">
            <span>${meta.label}</span>
            <strong>RM${price}${dict.perPieceCompact}</strong>
            <span>${meta.note}</span>
          </div>
        `;
      })
      .join('');

    // 3) Size pills
    SIZES.forEach((s) => {
      const count = state.sizes[s];
      document.getElementById(`qty-${s}`).textContent = count;
      const cell = sizeGrid.querySelector(`.size-cell[data-size="${s}"]`);
      if (cell) cell.classList.toggle('has-qty', count > 0);
    });
    totalQtyPill.textContent = dict.qtySelected(qty);

    // 4) Nudge banner
    nudgeBox.className = 'nudge-banner hidden';
    if (state.product === 'jersi' && qty > 0 && qty < 10) {
      nudgeBox.className = 'nudge-banner warn';
      nudgeBox.textContent = dict.nudgeJersiMin(10 - qty);
    } else if (state.product === 'dtf' && qty === 2) {
      nudgeBox.className = 'nudge-banner save';
      nudgeBox.textContent = dict.nudgeDtf2;
    } else if (state.product === 'dtf' && qty === 4) {
      nudgeBox.className = 'nudge-banner save';
      nudgeBox.textContent = dict.nudgeDtf4;
    } else if (state.product === 'dtf' && qty === 6) {
      nudgeBox.className = 'nudge-banner save';
      nudgeBox.textContent = dict.nudgeDtf6;
    } else if (state.product === 'dtf' && qty >= 3) {
      nudgeBox.className = 'nudge-banner good';
      nudgeBox.textContent = dict.nudgeDtfFree;
    } else if (state.product === 'jersi' && qty >= 17 && qty <= 19) {
      nudgeBox.className = 'nudge-banner save';
      nudgeBox.textContent = dict.nudgeJersiNear20(20 - qty);
    } else if (state.product === 'jersi' && qty >= 20) {
      nudgeBox.className = 'nudge-banner good';
      nudgeBox.textContent = dict.nudgeJersi20;
    }

    // 5) Receipt summary
    sumProduct.textContent = prodName;
    sumQty.textContent = dict.qtyUnit(qty);
    sumUnitPrice.textContent = `RM${unitPrice}`;
    sumPostage.textContent = freePostage ? dict.postageFree : dict.postageByLocation;
    sumTotal.textContent = `RM${total}`;

    if (state.designMode === 'custom') {
      sumDepositLabel.textContent = dict.depLabelCustom;
      sumDeposit.textContent = qty > 0 ? dict.depValCustomWithQty(dep60, dep70) : dict.depValCustomZero;
    } else {
      sumDepositLabel.textContent = dict.depLabelOwn;
      sumDeposit.textContent = qty > 0 ? dict.depValOwn(dep60, dep70) : 'RM0';
    }

    // 6) Sticky Glassmorphism Floating Dock
    dockTotal.textContent = `RM${total}`;
    dockQty.textContent = `${dict.qtyUnit(qty)}${freePostage ? ` • ${dict.postageFree}` : ''}`;
    dockEta.textContent = `${dict.dockEtaPrefix} ${eta.shortText} (${eta.daysLabel})`;

    if (animatePrice) {
      triggerAnim(sumTotal, 'anim-pop');
      triggerAnim(dockTotal, 'anim-pop');
    }

    // 7) 4 Policy Checkboxes + Min Qty gate
    const allChecked = Array.from(agreeCheckboxes).every((cb) => cb.checked);
    const canSend = meetsMin && allChecked;
    whatsappBtn.disabled = !canSend;
    dockWhatsappBtn.disabled = !canSend;

    if (canSend) {
      lockHint.textContent = dict.lockReady;
      lockHint.classList.add('ready');
    } else if (!meetsMin) {
      lockHint.classList.remove('ready');
      lockHint.textContent =
        state.product === 'jersi' ? dict.lockNeedJersi(qty) : dict.lockNeedDtf;
    } else {
      const remaining = Array.from(agreeCheckboxes).filter((cb) => !cb.checked).length;
      lockHint.classList.remove('ready');
      lockHint.textContent = dict.lockNeedChecks(remaining);
    }
  }

  // --- WhatsApp Checkout (in currently selected language) ---
  function openWhatsAppCheckout() {
    const dict = t();
    const { qty, unitPrice, total, freePostage, dep60, dep70 } = calculatePricing();
    const eta = getEtaRange(state.product);
    const prodName = state.product === 'dtf' ? dict.dtfName : dict.jersiName;
    const sizeSummary = SIZES.filter((s) => state.sizes[s] > 0)
      .map((s) => `${s} x${state.sizes[s]}`)
      .join(', ');

    let designLine = '';
    if (state.designMode === 'own') {
      designLine = state.uploadedFileName
        ? dict.waDesignOwnWithFile(state.uploadedFileName)
        : dict.waDesignOwnNoFile;
    } else {
      const note = designNoteInput.value.trim();
      designLine = note ? dict.waDesignCustomWithNote(note) : dict.waDesignCustomNoNote;
    }

    const depositLine =
      state.designMode === 'custom'
        ? dict.waDepositCustom(dep60, dep70)
        : dict.waDepositOwn(dep60, dep70);

    const postageText = freePostage ? dict.postageFree.toUpperCase() : dict.postageByLocationShort;

    const message = dict.waMessage({
      prodName,
      designLine,
      sizeSummary,
      qty,
      unitPrice,
      postageText,
      total,
      depositLine,
      eta,
    });

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  whatsappBtn.addEventListener('click', openWhatsAppCheckout);
  dockWhatsappBtn.addEventListener('click', openWhatsAppCheckout);

  // --- Language Toggle (BM | EN) ---
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang !== state.lang) {
        setLanguage(btn.dataset.lang);
      }
    });
  });

  // --- Step 1: Switch Product ---
  productTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      if (state.product === tile.dataset.product) return;
      state.product = tile.dataset.product;
      productTiles.forEach((el) => {
        const isActive = el.dataset.product === state.product;
        el.classList.toggle('active', isActive);
        el.setAttribute('aria-pressed', String(isActive));
      });
      previewShirtImg.src = PRODUCTS[state.product].image;
      triggerAnim(shirtStage, 'anim-stage');
      triggerAnim(etaDateText, 'anim-pop');
      updateAll(true);
      updateHelpAnswer();
    });
  });

  // --- Step 2: Segmented Control ---
  segButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.designMode = btn.dataset.mode;
      segButtons.forEach((b) => {
        const isActive = b.dataset.mode === state.designMode;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });
      panelOwn.classList.toggle('hidden', state.designMode !== 'own');
      panelCustom.classList.toggle('hidden', state.designMode !== 'custom');
      updateAll(false);
    });
  });

  // --- Step 2: Upload & Live Preview Positioning ---
  function applyDesignTransform() {
    const { x, y, scale } = state.designPos;
    designOverlay.style.left = `${x}%`;
    designOverlay.style.top = `${y}%`;
    const widthPct = 16 + ((scale - 25) / 75) * 40;
    designOverlay.style.width = `${widthPct}%`;
  }

  designFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      state.fileInvalid = true;
      updateFileStatusText();
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      state.fileInvalid = false;
      state.uploadedFileName = file.name;
      designOverlay.src = reader.result;
      designOverlay.classList.remove('hidden');
      designPlaceholder.classList.add('hidden');
      adjustBox.classList.remove('hidden');
      updateFileStatusText();
      applyDesignTransform();
      triggerAnim(designOverlay, 'anim-design-in');
    };
    reader.readAsDataURL(file);
  });

  sizeSlider.addEventListener('input', () => {
    state.designPos.scale = Number(sizeSlider.value);
    applyDesignTransform();
  });

  posYSlider.addEventListener('input', () => {
    state.designPos.y = Number(posYSlider.value);
    applyDesignTransform();
  });

  posXSlider.addEventListener('input', () => {
    state.designPos.x = Number(posXSlider.value);
    applyDesignTransform();
  });

  resetPosBtn.addEventListener('click', () => {
    state.designPos = { x: 50, y: 38, scale: 68 };
    sizeSlider.value = 68;
    posXSlider.value = 50;
    posYSlider.value = 38;
    applyDesignTransform();
  });

  removeDesignBtn.addEventListener('click', () => {
    state.uploadedFileName = '';
    state.fileInvalid = false;
    designFileInput.value = '';
    designOverlay.src = '';
    designOverlay.classList.add('hidden');
    designPlaceholder.classList.remove('hidden');
    adjustBox.classList.add('hidden');
    updateFileStatusText();
  });

  // Drag design directly on shirt (Pointer Events)
  let dragging = false;
  designOverlay.addEventListener('pointerdown', (e) => {
    dragging = true;
    designOverlay.setPointerCapture(e.pointerId);
  });

  designOverlay.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const rect = shirtStage.getBoundingClientRect();
    const xPct = Math.min(75, Math.max(25, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.min(75, Math.max(15, ((e.clientY - rect.top) / rect.height) * 100));
    state.designPos.x = Math.round(xPct);
    state.designPos.y = Math.round(yPct);
    posXSlider.value = state.designPos.x;
    posYSlider.value = state.designPos.y;
    applyDesignTransform();
  });

  const stopDrag = () => {
    dragging = false;
  };
  designOverlay.addEventListener('pointerup', stopDrag);
  designOverlay.addEventListener('pointercancel', stopDrag);

  // --- Step 3: Size +/- controls ---
  sizeGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-btn');
    if (!btn) return;
    const size = btn.dataset.size;
    const action = btn.dataset.action;
    if (action === 'inc') {
      state.sizes[size] = Math.min(999, state.sizes[size] + 1);
    } else if (action === 'dec') {
      state.sizes[size] = Math.max(0, state.sizes[size] - 1);
    }
    updateAll(true);
  });

  clearSizesBtn.addEventListener('click', () => {
    SIZES.forEach((s) => {
      state.sizes[s] = 0;
    });
    updateAll(true);
  });

  // --- Step 4: Checkboxes ---
  agreeCheckboxes.forEach((cb) => cb.addEventListener('change', () => updateAll(false)));

  // --- FAQ Bubble (4 Quick Answers) ---
  let activeFaq = 'harga';

  function updateHelpAnswer() {
    const dtfEta = getEtaRange('dtf');
    const jersiEta = getEtaRange('jersi');
    const answers = t().faqAnswers(dtfEta, jersiEta);
    helpAnswer.innerHTML = answers[activeFaq];
  }

  helpFab.addEventListener('click', () => {
    const isHidden = helpPopover.classList.toggle('hidden');
    helpFab.setAttribute('aria-expanded', String(!isHidden));
    if (!isHidden) updateHelpAnswer();
  });

  closeHelpBtn.addEventListener('click', () => {
    helpPopover.classList.add('hidden');
    helpFab.setAttribute('aria-expanded', 'false');
  });

  helpPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      activeFaq = pill.dataset.faq;
      helpPills.forEach((p) => p.classList.toggle('active', p.dataset.faq === activeFaq));
      updateHelpAnswer();
    });
  });

  // --- Modals ---
  function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
  }

  function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
  }

  openSizeChartBtn.addEventListener('click', () => openModal('sizeChartModal'));
  openCatalogBtn.addEventListener('click', () => openModal('catalogModal'));

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
  });

  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.add('hidden');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
      helpPopover.classList.add('hidden');
      helpFab.setAttribute('aria-expanded', 'false');
    }
  });

  // Init
  buildSizeGrid();
  applyStaticTranslations();
  updateAll(false);
  updateHelpAnswer();
})();
