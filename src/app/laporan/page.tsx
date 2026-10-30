import Link from "next/link";

export default function LaporanPage() {
  return (
    <main id="main">
      <div className="page-head">
        <div className="wrap">
          <ol className="crumbs">
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li aria-current="page">Jelajahi Laporan</li>
          </ol>
          <h1 style={{ fontSize: "clamp(30px,4vw,44px)" }}>Jelajahi Laporan</h1>
          <p>Cari laporan warga dan lihat sejauh mana penanganannya.</p>
          <span className="demo">Seluruh laporan di halaman ini adalah data simulasi.</span>
        </div>
      </div>

      <div className="wrap layout">
        <form className="card filters" id="f" role="search" aria-label="Filter laporan">
          <h2>Filter</h2>
          <div className="field">
            <label htmlFor="q">Cari laporan</label>
            <input className="input" id="q" type="search" placeholder="Misalnya: lampu, Klojen" />
          </div>
          <div className="field">
            <label htmlFor="cat">Kategori</label>
            <select className="select" id="cat">
              <option value="">Semua kategori</option>
              <option value="jalan">Infrastruktur Jalan</option>
              <option value="bersih">Kebersihan</option>
              <option value="drain">Drainase</option>
              <option value="lampu">Penerangan Jalan</option>
              <option value="fasum">Fasilitas Umum</option>
              <option value="ling">Lingkungan</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="ver">Verifikasi</label>
            <select className="select" id="ver">
              <option value="">Semua</option>
              <option value="1">Terverifikasi</option>
              <option value="0">Belum diverifikasi</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="sta">Status penanganan</label>
            <select className="select" id="sta">
              <option value="">Semua status</option>
              <option value="diterima">Diterima</option>
              <option value="diproses">Diproses</option>
              <option value="selesai">Selesai</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="loc">Lokasi</label>
            <select className="select" id="loc">
              <option value="">Semua lokasi</option>
              <option>Kota Malang</option>
              <option>Kabupaten Malang</option>
              <option>Kota Batu</option>
            </select>
          </div>
          <button className="btn btn-secondary" type="button" id="reset">
            Atur ulang filter
          </button>
        </form>

        <section aria-live="polite">
          <div className="bar">
            <p className="count" id="count">12 laporan ditemukan</p>
            <div className="field">
              <label htmlFor="sort">Urutkan</label>
              <select className="select" id="sort">
                <option value="baru">Terbaru</option>
                <option value="lama">Terlama</option>
              </select>
            </div>
          </div>

          <div className="rgrid" id="list">
            <article className="card rcard">
              <div className="thumb">
                <svg
                  className="art"
                  viewBox="0 0 640 400"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Ilustrasi Penerangan Jalan, sebelum"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bgu18" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0A1022" />
                      <stop offset="1" stopColor="#17387F" />
                    </linearGradient>
                    <radialGradient id="glu18">
                      <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                      <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="640" height="400" fill="url(#bgu18)" />
                  <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu18)" />
                  <g fill="#fff" opacity=".55">
                    <circle cx="60" cy="40" r="1.3" />
                    <circle cx="150" cy="90" r="1.3" />
                    <circle cx="240" cy="30" r="1.3" />
                    <circle cx="420" cy="60" r="1.3" />
                    <circle cx="510" cy="26" r="1.3" />
                    <circle cx="590" cy="100" r="1.3" />
                    <circle cx="90" cy="140" r="1.3" />
                    <circle cx="560" cy="160" r="1.3" />
                  </g>
                  <g stroke="#38BDF8" strokeOpacity=".16" strokeWidth="1">
                    <line x1="128" y1="210" x2="-480" y2="400" />
                    <line x1="147" y1="210" x2="-400" y2="400" />
                    <line x1="166" y1="210" x2="-320" y2="400" />
                    <line x1="185" y1="210" x2="-240" y2="400" />
                    <line x1="204" y1="210" x2="-160" y2="400" />
                    <line x1="224" y1="210" x2="-80" y2="400" />
                    <line x1="243" y1="210" x2="0" y2="400" />
                    <line x1="262" y1="210" x2="80" y2="400" />
                    <line x1="281" y1="210" x2="160" y2="400" />
                    <line x1="300" y1="210" x2="240" y2="400" />
                    <line x1="320" y1="210" x2="320" y2="400" />
                    <line x1="339" y1="210" x2="400" y2="400" />
                    <line x1="358" y1="210" x2="480" y2="400" />
                    <line x1="377" y1="210" x2="560" y2="400" />
                    <line x1="396" y1="210" x2="640" y2="400" />
                    <line x1="416" y1="210" x2="720" y2="400" />
                    <line x1="435" y1="210" x2="800" y2="400" />
                    <line x1="454" y1="210" x2="880" y2="400" />
                    <line x1="473" y1="210" x2="960" y2="400" />
                    <line x1="492" y1="210" x2="1040" y2="400" />
                    <line x1="512" y1="210" x2="1120" y2="400" />
                    <line x1="0" y1="210" x2="640" y2="210" />
                    <line x1="0" y1="228" x2="640" y2="228" />
                    <line x1="0" y1="252" x2="640" y2="252" />
                    <line x1="0" y1="286" x2="640" y2="286" />
                    <line x1="0" y1="332" x2="640" y2="332" />
                  </g>
                  <line x1="0" y1="205" x2="640" y2="205" stroke="#38BDF8" strokeOpacity=".5" />
                  <ellipse cx="320" cy="338" rx="46" ry="10" fill="#0B1530" stroke="#38BDF8" strokeOpacity=".4" />
                  <rect x="316" y="120" width="9" height="218" rx="3" fill="#94A3B8" />
                  <path d="M320 124h80" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
                  <path d="M386 126h48l-8 14h-32z" fill="#475569" />
                  <g stroke="#F97316" strokeWidth="3" strokeLinecap="round">
                    <path d="M446 112l16 16M462 112l-16 16" />
                  </g>
                  <g fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity=".85">
                    <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                  </g>
                  <rect x="34" y="32" width="104" height="28" rx="14" fill="#050914" fillOpacity=".6" stroke="#F97316" strokeOpacity=".7" />
                  <circle cx="52" cy="46" r="5" fill="#F97316" />
                  <text x="64" y="51" fontFamily="Inter,Arial,sans-serif" fontSize="13" fontWeight="600" fill="#fff">
                    Sebelum
                  </text>
                  <path d="M590 372 574 344h32z" fill="#F97316" fillOpacity=".2" stroke="#F97316" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M590 354v8" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <small>Ilustrasi simulasi</small>
              </div>
              <div className="rcard-body">
                <div className="rcard-meta">
                  <span className="badge">Penerangan Jalan</span>
                  <span className="badge b-warn">Diterima</span>
                </div>
                <h3>Lampu taman kota padam di Taman Slamet</h3>
                <p className="small">
                  <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                  Klojen, Kota Malang
                </p>
                <p className="small">
                  <svg className="ic" data-i="search" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4"></path>
                  </svg>
                  Belum diverifikasi
                </p>
                <div className="rcard-foot">
                  <span className="small">
                    <svg className="ic" data-i="cal" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4"></path>
                    </svg>
                    26 Okt 2026
                  </span>
                  <Link href="/detail-laporan">Lihat detail</Link>
                </div>
              </div>
            </article>

            <article className="card rcard">
              <div className="thumb">
                <svg
                  className="art"
                  viewBox="0 0 640 400"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Ilustrasi Penerangan Jalan, sebelum"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bgu19" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0A1022" />
                      <stop offset="1" stopColor="#17387F" />
                    </linearGradient>
                    <radialGradient id="glu19">
                      <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                      <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="640" height="400" fill="url(#bgu19)" />
                  <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu19)" />
                  <g fill="#fff" opacity=".55">
                    <circle cx="60" cy="40" r="1.3" />
                    <circle cx="150" cy="90" r="1.3" />
                    <circle cx="240" cy="30" r="1.3" />
                    <circle cx="420" cy="60" r="1.3" />
                    <circle cx="510" cy="26" r="1.3" />
                    <circle cx="590" cy="100" r="1.3" />
                    <circle cx="90" cy="140" r="1.3" />
                    <circle cx="560" cy="160" r="1.3" />
                  </g>
                  <g stroke="#38BDF8" strokeOpacity=".16" strokeWidth="1">
                    <line x1="128" y1="210" x2="-480" y2="400" />
                    <line x1="147" y1="210" x2="-400" y2="400" />
                    <line x1="166" y1="210" x2="-320" y2="400" />
                    <line x1="185" y1="210" x2="-240" y2="400" />
                    <line x1="204" y1="210" x2="-160" y2="400" />
                    <line x1="224" y1="210" x2="-80" y2="400" />
                    <line x1="243" y1="210" x2="0" y2="400" />
                    <line x1="262" y1="210" x2="80" y2="400" />
                    <line x1="281" y1="210" x2="160" y2="400" />
                    <line x1="300" y1="210" x2="240" y2="400" />
                    <line x1="320" y1="210" x2="320" y2="400" />
                    <line x1="339" y1="210" x2="400" y2="400" />
                    <line x1="358" y1="210" x2="480" y2="400" />
                    <line x1="377" y1="210" x2="560" y2="400" />
                    <line x1="396" y1="210" x2="640" y2="400" />
                    <line x1="416" y1="210" x2="720" y2="400" />
                    <line x1="435" y1="210" x2="800" y2="400" />
                    <line x1="454" y1="210" x2="880" y2="400" />
                    <line x1="473" y1="210" x2="960" y2="400" />
                    <line x1="492" y1="210" x2="1040" y2="400" />
                    <line x1="512" y1="210" x2="1120" y2="400" />
                    <line x1="0" y1="210" x2="640" y2="210" />
                    <line x1="0" y1="228" x2="640" y2="228" />
                    <line x1="0" y1="252" x2="640" y2="252" />
                    <line x1="0" y1="286" x2="640" y2="286" />
                    <line x1="0" y1="332" x2="640" y2="332" />
                  </g>
                  <line x1="0" y1="205" x2="640" y2="205" stroke="#38BDF8" strokeOpacity=".5" />
                  <ellipse cx="320" cy="338" rx="46" ry="10" fill="#0B1530" stroke="#38BDF8" strokeOpacity=".4" />
                  <rect x="316" y="120" width="9" height="218" rx="3" fill="#94A3B8" />
                  <path d="M320 124h80" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
                  <path d="M386 126h48l-8 14h-32z" fill="#475569" />
                  <g stroke="#F97316" strokeWidth="3" strokeLinecap="round">
                    <path d="M446 112l16 16M462 112l-16 16" />
                  </g>
                  <g fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity=".85">
                    <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                  </g>
                  <rect x="34" y="32" width="104" height="28" rx="14" fill="#050914" fillOpacity=".6" stroke="#F97316" strokeOpacity=".7" />
                  <circle cx="52" cy="46" r="5" fill="#F97316" />
                  <text x="64" y="51" fontFamily="Inter,Arial,sans-serif" fontSize="13" fontWeight="600" fill="#fff">
                    Sebelum
                  </text>
                  <path d="M590 372 574 344h32z" fill="#F97316" fillOpacity=".2" stroke="#F97316" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M590 354v8" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <small>Ilustrasi simulasi</small>
              </div>
              <div className="rcard-body">
                <div className="rcard-meta">
                  <span className="badge">Penerangan Jalan</span>
                  <span className="badge b-warn">Diterima</span>
                </div>
                <h3>Lima lampu PJU mati di jalur Pandaan–Malang</h3>
                <p className="small">
                  <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                  Singosari, Kabupaten Malang
                </p>
                <p className="small">
                  <svg className="ic" data-i="search" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4"></path>
                  </svg>
                  Belum diverifikasi
                </p>
                <div className="rcard-foot">
                  <span className="small">
                    <svg className="ic" data-i="cal" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4"></path>
                    </svg>
                    25 Okt 2026
                  </span>
                  <Link href="/detail-laporan">Lihat detail</Link>
                </div>
              </div>
            </article>

            <article className="card rcard">
              <div className="thumb">
                <svg
                  className="art"
                  viewBox="0 0 640 400"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Ilustrasi Lingkungan, sebelum"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bgu20" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0A1022" />
                      <stop offset="1" stopColor="#17387F" />
                    </linearGradient>
                    <radialGradient id="glu20">
                      <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                      <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="640" height="400" fill="url(#bgu20)" />
                  <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu20)" />
                  <g fill="#fff" opacity=".55">
                    <circle cx="60" cy="40" r="1.3" />
                    <circle cx="150" cy="90" r="1.3" />
                    <circle cx="240" cy="30" r="1.3" />
                    <circle cx="420" cy="60" r="1.3" />
                    <circle cx="510" cy="26" r="1.3" />
                    <circle cx="590" cy="100" r="1.3" />
                    <circle cx="90" cy="140" r="1.3" />
                    <circle cx="560" cy="160" r="1.3" />
                  </g>
                  <g stroke="#38BDF8" strokeOpacity=".16" strokeWidth="1">
                    <line x1="128" y1="210" x2="-480" y2="400" />
                    <line x1="147" y1="210" x2="-400" y2="400" />
                    <line x1="166" y1="210" x2="-320" y2="400" />
                    <line x1="185" y1="210" x2="-240" y2="400" />
                    <line x1="204" y1="210" x2="-160" y2="400" />
                    <line x1="224" y1="210" x2="-80" y2="400" />
                    <line x1="243" y1="210" x2="0" y2="400" />
                    <line x1="262" y1="210" x2="80" y2="400" />
                    <line x1="281" y1="210" x2="160" y2="400" />
                    <line x1="300" y1="210" x2="240" y2="400" />
                    <line x1="320" y1="210" x2="320" y2="400" />
                    <line x1="339" y1="210" x2="400" y2="400" />
                    <line x1="358" y1="210" x2="480" y2="400" />
                    <line x1="377" y1="210" x2="560" y2="400" />
                    <line x1="396" y1="210" x2="640" y2="400" />
                    <line x1="416" y1="210" x2="720" y2="400" />
                    <line x1="435" y1="210" x2="800" y2="400" />
                    <line x1="454" y1="210" x2="880" y2="400" />
                    <line x1="473" y1="210" x2="960" y2="400" />
                    <line x1="492" y1="210" x2="1040" y2="400" />
                    <line x1="512" y1="210" x2="1120" y2="400" />
                    <line x1="0" y1="210" x2="640" y2="210" />
                    <line x1="0" y1="228" x2="640" y2="228" />
                    <line x1="0" y1="252" x2="640" y2="252" />
                    <line x1="0" y1="286" x2="640" y2="286" />
                    <line x1="0" y1="332" x2="640" y2="332" />
                  </g>
                  <line x1="0" y1="205" x2="640" y2="205" stroke="#38BDF8" strokeOpacity=".5" />
                  <ellipse cx="320" cy="346" rx="150" ry="22" fill="#0B1530" stroke="#38BDF8" strokeOpacity=".3" />
                  <path d="M60 150Q320 190 580 150" fill="none" stroke="#94A3B8" strokeWidth="3" />
                  <rect x="70" y="140" width="6" height="200" fill="#64748B" />
                  <rect x="566" y="140" width="6" height="200" fill="#64748B" />
                  <g transform="rotate(-17 320 342)">
                    <rect x="310" y="236" width="20" height="106" rx="4" fill="#8B6B4A" />
                    <circle cx="320" cy="190" r="62" fill="#16A34A" />
                    <circle cx="276" cy="220" r="44" fill="#15803D" />
                    <circle cx="364" cy="220" r="44" fill="#22C55E" />
                  </g>
                  <circle cx="408" cy="146" r="12" fill="#FDE047" fillOpacity=".85" />
                  <circle cx="408" cy="146" r="22" fill="none" stroke="#F97316" strokeWidth="2.5" strokeDasharray="5 5" />
                  <g fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity=".85">
                    <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                  </g>
                  <rect x="34" y="32" width="104" height="28" rx="14" fill="#050914" fillOpacity=".6" stroke="#F97316" strokeOpacity=".7" />
                  <circle cx="52" cy="46" r="5" fill="#F97316" />
                  <text x="64" y="51" fontFamily="Inter,Arial,sans-serif" fontSize="13" fontWeight="600" fill="#fff">
                    Sebelum
                  </text>
                  <path d="M590 372 574 344h32z" fill="#F97316" fillOpacity=".2" stroke="#F97316" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M590 354v8" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <small>Ilustrasi simulasi</small>
              </div>
              <div className="rcard-body">
                <div className="rcard-meta">
                  <span className="badge">Lingkungan</span>
                  <span className="badge b-warn">Diterima</span>
                </div>
                <h3>Pohon tua condong ke kabel listrik di Jl. Panglima Sudirman</h3>
                <p className="small">
                  <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                  Batu, Kota Batu
                </p>
                <p className="small">
                  <svg className="ic" data-i="search" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4"></path>
                  </svg>
                  Belum diverifikasi
                </p>
                <div className="rcard-foot">
                  <span className="small">
                    <svg className="ic" data-i="cal" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4"></path>
                    </svg>
                    22 Okt 2026
                  </span>
                  <Link href="/detail-laporan">Lihat detail</Link>
                </div>
              </div>
            </article>

            <article className="card rcard">
              <div className="thumb">
                <svg
                  className="art"
                  viewBox="0 0 640 400"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Ilustrasi Kebersihan, progres"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bgu21" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0A1022" />
                      <stop offset="1" stopColor="#17387F" />
                    </linearGradient>
                    <radialGradient id="glu21">
                      <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                      <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="640" height="400" fill="url(#bgu21)" />
                  <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu21)" />
                  <g fill="#fff" opacity=".55">
                    <circle cx="60" cy="40" r="1.3" />
                    <circle cx="150" cy="90" r="1.3" />
                    <circle cx="240" cy="30" r="1.3" />
                    <circle cx="420" cy="60" r="1.3" />
                    <circle cx="510" cy="26" r="1.3" />
                    <circle cx="590" cy="100" r="1.3" />
                    <circle cx="90" cy="140" r="1.3" />
                    <circle cx="560" cy="160" r="1.3" />
                  </g>
                  <g stroke="#38BDF8" strokeOpacity=".16" strokeWidth="1">
                    <line x1="128" y1="210" x2="-480" y2="400" />
                    <line x1="147" y1="210" x2="-400" y2="400" />
                    <line x1="166" y1="210" x2="-320" y2="400" />
                    <line x1="185" y1="210" x2="-240" y2="400" />
                    <line x1="204" y1="210" x2="-160" y2="400" />
                    <line x1="224" y1="210" x2="-80" y2="400" />
                    <line x1="243" y1="210" x2="0" y2="400" />
                    <line x1="262" y1="210" x2="80" y2="400" />
                    <line x1="281" y1="210" x2="160" y2="400" />
                    <line x1="300" y1="210" x2="240" y2="400" />
                    <line x1="320" y1="210" x2="320" y2="400" />
                    <line x1="339" y1="210" x2="400" y2="400" />
                    <line x1="358" y1="210" x2="480" y2="400" />
                    <line x1="377" y1="210" x2="560" y2="400" />
                    <line x1="396" y1="210" x2="640" y2="400" />
                    <line x1="416" y1="210" x2="720" y2="400" />
                    <line x1="435" y1="210" x2="800" y2="400" />
                    <line x1="454" y1="210" x2="880" y2="400" />
                    <line x1="473" y1="210" x2="960" y2="400" />
                    <line x1="492" y1="210" x2="1040" y2="400" />
                    <line x1="512" y1="210" x2="1120" y2="400" />
                    <line x1="0" y1="210" x2="640" y2="210" />
                    <line x1="0" y1="228" x2="640" y2="228" />
                    <line x1="0" y1="252" x2="640" y2="252" />
                    <line x1="0" y1="286" x2="640" y2="286" />
                    <line x1="0" y1="332" x2="640" y2="332" />
                  </g>
                  <line x1="0" y1="205" x2="640" y2="205" stroke="#38BDF8" strokeOpacity=".5" />
                  <ellipse cx="320" cy="345" rx="230" ry="38" fill="#0B1530" stroke="#38BDF8" strokeOpacity=".3" />
                  <rect x="240" y="262" width="46" height="62" rx="6" fill="#1D4ED8" stroke="#38BDF8" strokeOpacity=".5" />
                  <rect x="236" y="253" width="54" height="10" rx="4" fill="#0F172A" stroke="#38BDF8" strokeOpacity=".5" />
                  <rect x="340" y="262" width="46" height="62" rx="6" fill="#0F766E" stroke="#38BDF8" strokeOpacity=".5" />
                  <rect x="336" y="253" width="54" height="10" rx="4" fill="#0F172A" stroke="#38BDF8" strokeOpacity=".5" />
                  <circle cx="210" cy="330" r="14" fill="#F59E0B" fillOpacity=".9" />
                  <circle cx="240" cy="322" r="12" fill="#94A3B8" fillOpacity=".9" />
                  <circle cx="300" cy="318" r="15" fill="#E2E8F0" fillOpacity=".9" />
                  <circle cx="360" cy="326" r="13" fill="#F59E0B" fillOpacity=".9" />
                  <g fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" opacity=".85">
                    <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                  </g>
                  <rect x="34" y="32" width="104" height="28" rx="14" fill="#050914" fillOpacity=".6" stroke="#38BDF8" strokeOpacity=".7" />
                  <circle cx="52" cy="46" r="5" fill="#38BDF8" />
                  <text x="64" y="51" fontFamily="Inter,Arial,sans-serif" fontSize="13" fontWeight="600" fill="#fff">
                    Progres
                  </text>
                  <rect x="440" y="354" width="150" height="10" rx="5" fill="#fff" fillOpacity=".15" />
                  <rect x="440" y="354" width="90" height="10" rx="5" fill="#38BDF8" />
                </svg>
                <small>Ilustrasi simulasi</small>
              </div>
              <div className="rcard-body">
                <div className="rcard-meta">
                  <span className="badge">Kebersihan</span>
                  <span className="badge b-info">Diproses</span>
                </div>
                <h3>Tumpukan sampah di TPS dekat Pasar Blimbing</h3>
                <p className="small">
                  <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                  Blimbing, Kota Malang
                </p>
                <p className="small">
                  <svg className="ic" data-i="shield" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4"></path>
                  </svg>
                  Terverifikasi
                </p>
                <div className="rcard-foot">
                  <span className="small">
                    <svg className="ic" data-i="cal" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4"></path>
                    </svg>
                    18 Okt 2026
                  </span>
                  <Link href="/detail-laporan">Lihat detail</Link>
                </div>
              </div>
            </article>

            <article className="card rcard">
              <div className="thumb">
                <svg
                  className="art"
                  viewBox="0 0 640 400"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Ilustrasi Fasilitas Umum, sebelum"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bgu22" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0A1022" />
                      <stop offset="1" stopColor="#17387F" />
                    </linearGradient>
                    <radialGradient id="glu22">
                      <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                      <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="640" height="400" fill="url(#bgu22)" />
                  <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu22)" />
                  <g fill="#fff" opacity=".55">
                    <circle cx="60" cy="40" r="1.3" />
                    <circle cx="150" cy="90" r="1.3" />
                    <circle cx="240" cy="30" r="1.3" />
                    <circle cx="420" cy="60" r="1.3" />
                    <circle cx="510" cy="26" r="1.3" />
                    <circle cx="590" cy="100" r="1.3" />
                    <circle cx="90" cy="140" r="1.3" />
                    <circle cx="560" cy="160" r="1.3" />
                  </g>
                  <g stroke="#38BDF8" strokeOpacity=".16" strokeWidth="1">
                    <line x1="128" y1="210" x2="-480" y2="400" />
                    <line x1="147" y1="210" x2="-400" y2="400" />
                    <line x1="166" y1="210" x2="-320" y2="400" />
                    <line x1="185" y1="210" x2="-240" y2="400" />
                    <line x1="204" y1="210" x2="-160" y2="400" />
                    <line x1="224" y1="210" x2="-80" y2="400" />
                    <line x1="243" y1="210" x2="0" y2="400" />
                    <line x1="262" y1="210" x2="80" y2="400" />
                    <line x1="281" y1="210" x2="160" y2="400" />
                    <line x1="300" y1="210" x2="240" y2="400" />
                    <line x1="320" y1="210" x2="320" y2="400" />
                    <line x1="339" y1="210" x2="400" y2="400" />
                    <line x1="358" y1="210" x2="480" y2="400" />
                    <line x1="377" y1="210" x2="560" y2="400" />
                    <line x1="396" y1="210" x2="640" y2="400" />
                    <line x1="416" y1="210" x2="720" y2="400" />
                    <line x1="435" y1="210" x2="800" y2="400" />
                    <line x1="454" y1="210" x2="880" y2="400" />
                    <line x1="473" y1="210" x2="960" y2="400" />
                    <line x1="492" y1="210" x2="1040" y2="400" />
                    <line x1="512" y1="210" x2="1120" y2="400" />
                    <line x1="0" y1="210" x2="640" y2="210" />
                    <line x1="0" y1="228" x2="640" y2="228" />
                    <line x1="0" y1="252" x2="640" y2="252" />
                    <line x1="0" y1="286" x2="640" y2="286" />
                    <line x1="0" y1="332" x2="640" y2="332" />
                  </g>
                  <line x1="0" y1="205" x2="640" y2="205" stroke="#38BDF8" strokeOpacity=".5" />
                  <ellipse cx="320" cy="346" rx="200" ry="26" fill="#0B1530" stroke="#38BDF8" strokeOpacity=".3" />
                  <rect x="214" y="228" width="212" height="74" fill="#38BDF8" fillOpacity=".12" stroke="#38BDF8" strokeOpacity=".5" />
                  <rect x="204" y="226" width="7" height="112" fill="#94A3B8" />
                  <rect x="430" y="226" width="7" height="112" fill="#94A3B8" />
                  <polygon points="190,206 450,206 436,226 204,226" fill="#2B4A8F" stroke="#38BDF8" strokeOpacity=".7" />
                  <path d="M290 228l14 22-12 16 16 22" fill="none" stroke="#F97316" strokeWidth="2.5" />
                  <rect x="250" y="298" width="150" height="9" rx="3" fill="#64748B" transform="rotate(5 325 302)" />
                  <rect x="262" y="307" width="6" height="30" fill="#64748B" />
                  <g fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity=".85">
                    <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                  </g>
                  <rect x="34" y="32" width="104" height="28" rx="14" fill="#050914" fillOpacity=".6" stroke="#F97316" strokeOpacity=".7" />
                  <circle cx="52" cy="46" r="5" fill="#F97316" />
                  <text x="64" y="51" fontFamily="Inter,Arial,sans-serif" fontSize="13" fontWeight="600" fill="#fff">
                    Sebelum
                  </text>
                  <path d="M590 372 574 344h32z" fill="#F97316" fillOpacity=".2" stroke="#F97316" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M590 354v8" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <small>Ilustrasi simulasi</small>
              </div>
              <div className="rcard-body">
                <div className="rcard-meta">
                  <span className="badge">Fasilitas Umum</span>
                  <span className="badge b-warn">Diterima</span>
                </div>
                <h3>Halte rusak di Jl. Raya Dieng</h3>
                <p className="small">
                  <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                  Klojen, Kota Malang
                </p>
                <p className="small">
                  <svg className="ic" data-i="shield" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4"></path>
                  </svg>
                  Terverifikasi
                </p>
                <div className="rcard-foot">
                  <span className="small">
                    <svg className="ic" data-i="cal" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4"></path>
                    </svg>
                    14 Okt 2026
                  </span>
                  <Link href="/detail-laporan">Lihat detail</Link>
                </div>
              </div>
            </article>

            <article className="card rcard">
              <div className="thumb">
                <svg
                  className="art"
                  viewBox="0 0 640 400"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Ilustrasi Infrastruktur Jalan, progres"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bgu23" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0A1022" />
                      <stop offset="1" stopColor="#17387F" />
                    </linearGradient>
                    <radialGradient id="glu23">
                      <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                      <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="640" height="400" fill="url(#bgu23)" />
                  <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu23)" />
                  <g fill="#fff" opacity=".55">
                    <circle cx="60" cy="40" r="1.3" />
                    <circle cx="150" cy="90" r="1.3" />
                    <circle cx="240" cy="30" r="1.3" />
                    <circle cx="420" cy="60" r="1.3" />
                    <circle cx="510" cy="26" r="1.3" />
                    <circle cx="590" cy="100" r="1.3" />
                    <circle cx="90" cy="140" r="1.3" />
                    <circle cx="560" cy="160" r="1.3" />
                  </g>
                  <g stroke="#38BDF8" strokeOpacity=".16" strokeWidth="1">
                    <line x1="128" y1="210" x2="-480" y2="400" />
                    <line x1="147" y1="210" x2="-400" y2="400" />
                    <line x1="166" y1="210" x2="-320" y2="400" />
                    <line x1="185" y1="210" x2="-240" y2="400" />
                    <line x1="204" y1="210" x2="-160" y2="400" />
                    <line x1="224" y1="210" x2="-80" y2="400" />
                    <line x1="243" y1="210" x2="0" y2="400" />
                    <line x1="262" y1="210" x2="80" y2="400" />
                    <line x1="281" y1="210" x2="160" y2="400" />
                    <line x1="300" y1="210" x2="240" y2="400" />
                    <line x1="320" y1="210" x2="320" y2="400" />
                    <line x1="339" y1="210" x2="400" y2="400" />
                    <line x1="358" y1="210" x2="480" y2="400" />
                    <line x1="377" y1="210" x2="560" y2="400" />
                    <line x1="396" y1="210" x2="640" y2="400" />
                    <line x1="416" y1="210" x2="720" y2="400" />
                    <line x1="435" y1="210" x2="800" y2="400" />
                    <line x1="454" y1="210" x2="880" y2="400" />
                    <line x1="473" y1="210" x2="960" y2="400" />
                    <line x1="492" y1="210" x2="1040" y2="400" />
                    <line x1="512" y1="210" x2="1120" y2="400" />
                    <line x1="0" y1="210" x2="640" y2="210" />
                    <line x1="0" y1="228" x2="640" y2="228" />
                    <line x1="0" y1="252" x2="640" y2="252" />
                    <line x1="0" y1="286" x2="640" y2="286" />
                    <line x1="0" y1="332" x2="640" y2="332" />
                  </g>
                  <line x1="0" y1="205" x2="640" y2="205" stroke="#38BDF8" strokeOpacity=".5" />
                  <polygon points="250,205 390,205 600,400 40,400" fill="#1E2D55" stroke="#38BDF8" strokeOpacity=".4" />
                  <g fill="#E2E8F0" fillOpacity=".6">
                    <rect x="318" y="212" width="4" height="14" />
                    <rect x="317" y="242" width="6" height="24" />
                    <rect x="315" y="288" width="10" height="40" />
                  </g>
                  <ellipse cx="340" cy="335" rx="80" ry="25" fill="#334155" stroke="#38BDF8" strokeOpacity=".7" />
                  <ellipse cx="340" cy="335" rx="42" ry="12" fill="#050914" />
                  <polygon points="470,330 492,330 484,296 478,296" fill="#F97316" />
                  <rect x="466" y="330" width="30" height="6" rx="2" fill="#7C2D12" />
                  <rect x="474" y="308" width="12" height="4" fill="#fff" />
                  <g fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" opacity=".85">
                    <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                  </g>
                  <rect x="34" y="32" width="104" height="28" rx="14" fill="#050914" fillOpacity=".6" stroke="#38BDF8" strokeOpacity=".7" />
                  <circle cx="52" cy="46" r="5" fill="#38BDF8" />
                  <text x="64" y="51" fontFamily="Inter,Arial,sans-serif" fontSize="13" fontWeight="600" fill="#fff">
                    Progres
                  </text>
                  <rect x="440" y="354" width="150" height="10" rx="5" fill="#fff" fillOpacity=".15" />
                  <rect x="440" y="354" width="90" height="10" rx="5" fill="#38BDF8" />
                </svg>
                <small>Ilustrasi simulasi</small>
              </div>
              <div className="rcard-body">
                <div className="rcard-meta">
                  <span className="badge">Infrastruktur Jalan</span>
                  <span className="badge b-info">Diproses</span>
                </div>
                <h3>Lubang besar di Jl. Ijen depan SDN Kauman</h3>
                <p className="small">
                  <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                  Klojen, Kota Malang
                </p>
                <p className="small">
                  <svg className="ic" data-i="shield" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4"></path>
                  </svg>
                  Terverifikasi
                </p>
                <div className="rcard-foot">
                  <span className="small">
                    <svg className="ic" data-i="cal" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4"></path>
                    </svg>
                    12 Okt 2026
                  </span>
                  <Link href="/detail-laporan">Lihat detail</Link>
                </div>
              </div>
            </article>
          </div>

          <div className="card empty" id="empty" hidden>
            <h2 style={{ fontSize: "22px" }}>Tidak ada laporan yang cocok</h2>
            <p className="small">Coba kata kunci lain atau hapus beberapa filter.</p>
            <button className="btn btn-primary" type="button" id="reset2">
              Atur ulang filter
            </button>
          </div>

          <nav className="pager" id="pager" aria-label="Halaman">
            <button type="button" disabled data-p="0" aria-label="Halaman sebelumnya">
              ‹
            </button>
            <button type="button" data-p="1" aria-current={true} aria-label="Halaman 1">
              1
            </button>
            <button type="button" data-p="2" aria-label="Halaman 2">
              2
            </button>
            <button type="button" data-p="2" aria-label="Halaman berikutnya">
              ›
            </button>
          </nav>
        </section>
      </div>
    </main>
  );
}