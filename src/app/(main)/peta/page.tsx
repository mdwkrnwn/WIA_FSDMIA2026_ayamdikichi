import React from 'react';

export default function PetaLaporan() {
  return (
    <main id="main">
      <div className="wrap">
        <div className="pm-head">
          <ol className="crumbs">
            <li>
              <a href="index.html">Beranda</a>
            </li>
            <li aria-current="page">Peta Laporan</li>
          </ol>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Peta Laporan</h1>
          <p>
            Pilih titik di peta untuk melihat laporan dan jejak penanganannya.
            Data dan peta bersifat simulasi.
          </p>
        </div>
        <div className="pm">
          <details className="card pm-f" id="fd" open>
            <summary>Cari dan filter laporan</summary>
            <div className="pm-fb">
              <div className="field">
                <label htmlFor="q">Cari lokasi</label>
                <input
                  className="input"
                  id="q"
                  type="search"
                  list="dl"
                  placeholder="Kecamatan atau nama jalan"
                />
                <datalist id="dl">
                  <option value="Klojen" />
                  <option value="Lowokwaru" />
                  <option value="Blimbing" />
                  <option value="Sukun" />
                  <option value="Kedungkandang" />
                  <option value="Singosari" />
                  <option value="Batu" />
                </datalist>
              </div>
              <fieldset>
                <legend>Kategori</legend>
                <div className="chips" id="cc">
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="jalan"
                  >
                    Infrastruktur Jalan
                  </button>
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="bersih"
                  >
                    Kebersihan
                  </button>
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="drain"
                  >
                    Drainase
                  </button>
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="lampu"
                  >
                    Penerangan Jalan
                  </button>
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="fasum"
                  >
                    Fasilitas Umum
                  </button>
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="ling"
                  >
                    Lingkungan
                  </button>
                </div>
              </fieldset>
              <fieldset>
                <legend>Status penanganan</legend>
                <div className="chips" id="sc">
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="diterima"
                  >
                    Diterima
                  </button>
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="diproses"
                  >
                    Diproses
                  </button>
                  <button
                    type="button"
                    className="chip"
                    aria-pressed="false"
                    data-k="selesai"
                  >
                    Selesai
                  </button>
                </div>
              </fieldset>
              <p className="count" id="cnt" aria-live="polite">
                12 laporan di peta
              </p>
              <button className="btn btn-secondary" type="button" id="rs">
                Atur ulang filter
              </button>
            </div>
          </details>
          <section className="card pm-m" aria-label="Peta">
            <div id="map">
              <svg
                viewBox="0 0 800 520"
                role="img"
                aria-label="Peta skematis wilayah demonstrasi"
              >
                <rect width="800" height="520" fill="#EEF2F6" />
                <g fill="#D8E8D3">
                  <rect x="40" y="60" width="150" height="110" rx="14" />
                  <rect x="560" y="400" width="190" height="80" rx="14" />
                  <rect x="330" y="215" width="70" height="55" rx="10" />
                </g>
                <path
                  d="M0 360C150 330 230 400 380 360S620 300 800 340"
                  fill="none"
                  stroke="#BCD6EE"
                  strokeWidth="22"
                />
                <g fill="none" stroke="#fff" strokeLinecap="round">
                  <path d="M0 150H800" strokeWidth="12" />
                  <path d="M270 0V520" strokeWidth="12" />
                  <path d="M0 60 800 300" strokeWidth="9" />
                  <path d="M520 0V520" strokeWidth="7" />
                  <path d="M0 280H800" strokeWidth="7" />
                  <path d="M120 520 400 0" strokeWidth="6" />
                </g>
                <g
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                >
                  <path d="M150 0V210L400 250L640 160V0" />
                  <path d="M80 380 400 310 700 380" />
                </g>
                <text
                  x="416"
                  y="18.2"
                  textAnchor="middle"
                  fontFamily="Inter,sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  fill="#475569"
                  stroke="#EEF2F6"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  Singosari
                </text>
                <text
                  x="128"
                  y="46.800000000000004"
                  textAnchor="middle"
                  fontFamily="Inter,sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  fill="#475569"
                  stroke="#EEF2F6"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  Batu
                </text>
                <text
                  x="288"
                  y="114.4"
                  textAnchor="middle"
                  fontFamily="Inter,sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  fill="#475569"
                  stroke="#EEF2F6"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  Lowokwaru
                </text>
                <text
                  x="512"
                  y="114.4"
                  textAnchor="middle"
                  fontFamily="Inter,sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  fill="#475569"
                  stroke="#EEF2F6"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  Blimbing
                </text>
                <text
                  x="400"
                  y="223.6"
                  textAnchor="middle"
                  fontFamily="Inter,sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  fill="#475569"
                  stroke="#EEF2F6"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  Klojen
                </text>
                <text
                  x="256"
                  y="322.40000000000003"
                  textAnchor="middle"
                  fontFamily="Inter,sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  fill="#475569"
                  stroke="#EEF2F6"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  Sukun
                </text>
                <text
                  x="576"
                  y="312"
                  textAnchor="middle"
                  fontFamily="Inter,sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  fill="#475569"
                  stroke="#EEF2F6"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  Kedungkandang
                </text>
                <rect
                  x="16"
                  y="474"
                  width="318"
                  height="30"
                  rx="8"
                  fill="#fff"
                  stroke="#E2E8F0"
                />
                <text
                  x="30"
                  y="494"
                  fontFamily="Inter,sans-serif"
                  fontSize="13"
                  fill="#475569"
                >
                  Wilayah demonstrasi: Malang Raya (peta skematis)
                </text>
                <g
                  className="mk"
                  data-id="JP-2026-00377"
                  tabIndex={0}
                  role="button"
                  aria-label="Saluran tersumbat sampah di Jl. Soekarno-Hatta, Selesai"
                  transform="translate(324 172.64000000000001)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#059669"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00455"
                  tabIndex={0}
                  role="button"
                  aria-label="Lima lampu PJU mati di jalur Pandaan–Malang, Diterima"
                  transform="translate(428 52)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#D97706"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00402"
                  tabIndex={0}
                  role="button"
                  aria-label="Tumpukan sampah di TPS dekat Pasar Blimbing, Diproses"
                  transform="translate(500 139.36)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#2563EB"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00351"
                  tabIndex={0}
                  role="button"
                  aria-label="Trotoar amblas di depan Alun-Alun Batu, Diproses"
                  transform="translate(92 108.16000000000001)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#2563EB"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00449"
                  tabIndex={0}
                  role="button"
                  aria-label="Pohon tua condong ke kabel listrik di Jl. Panglima Sudirman, Diterima"
                  transform="translate(176 91.52000000000001)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#D97706"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00391"
                  tabIndex={0}
                  role="button"
                  aria-label="Genangan air tiap hujan di Perumahan Tlogomas, Diproses"
                  transform="translate(312 147.68)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#2563EB"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00408"
                  tabIndex={0}
                  role="button"
                  aria-label="Halte rusak di Jl. Raya Dieng, Diterima"
                  transform="translate(400 235.04000000000002)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#D97706"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00322"
                  tabIndex={0}
                  role="button"
                  aria-label="Jalan retak panjang di Jl. Raya Karanglo, Selesai"
                  transform="translate(392 68.64)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#059669"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00458"
                  tabIndex={0}
                  role="button"
                  aria-label="Lampu taman kota padam di Taman Slamet, Diterima"
                  transform="translate(352 260)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#D97706"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00386"
                  tabIndex={0}
                  role="button"
                  aria-label="Bau limbah dari selokan di Jl. Ahmad Yani, Diproses"
                  transform="translate(548 139.36)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#2563EB"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00339"
                  tabIndex={0}
                  role="button"
                  aria-label="Tong sampah publik hilang di Jl. Veteran, Selesai"
                  transform="translate(300 180.95999999999998)"
                >
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="12" fill="none" />
                  <circle
                    r="12"
                    fill="#059669"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
                <g
                  className="mk"
                  data-id="JP-2026-00418"
                  tabIndex={0}
                  role="button"
                  aria-label="Lubang besar di Jl. Ijen depan SDN Kauman, Diproses"
                  transform="translate(352 235.04000000000002)"
                >
                  <circle r="26" fill="transparent" />
                  <circle
                    className="halo"
                    r="22"
                    fill="#2563EB"
                    fillOpacity=".2"
                    stroke="#2563EB"
                    strokeWidth="2"
                  />
                  <circle
                    r="12"
                    fill="#2563EB"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <circle r="4" fill="#fff" />
                </g>
              </svg>
            </div>
            <ul className="legend" aria-label="Legenda">
              <li>
                <i style={{ background: '#D97706' }} />
                Diterima
              </li>
              <li>
                <i style={{ background: '#2563EB' }} />
                Diproses
              </li>
              <li>
                <i style={{ background: '#059669' }} />
                Selesai
              </li>
              <li>Lingkaran besar: laporan terpilih</li>
            </ul>
          </section>
          <aside
            className="card pm-p"
            id="pv"
            aria-live="polite"
            aria-label="Laporan terpilih"
          >
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
                  <linearGradient id="bgu24" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0A1022" />
                    <stop offset="1" stopColor="#17387F" />
                  </linearGradient>
                  <radialGradient id="glu24">
                    <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                    <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="640" height="400" fill="url(#bgu24)" />
                <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu24)" />
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
                <line
                  x1="0"
                  y1="205"
                  x2="640"
                  y2="205"
                  stroke="#38BDF8"
                  strokeOpacity=".5"
                />
                <polygon
                  points="250,205 390,205 600,400 40,400"
                  fill="#1E2D55"
                  stroke="#38BDF8"
                  strokeOpacity=".4"
                />
                <g fill="#E2E8F0" fillOpacity=".6">
                  <rect x="318" y="212" width="4" height="14" />
                  <rect x="317" y="242" width="6" height="24" />
                  <rect x="315" y="288" width="10" height="40" />
                </g>
                <ellipse
                  cx="340"
                  cy="335"
                  rx="80"
                  ry="25"
                  fill="#334155"
                  stroke="#38BDF8"
                  strokeOpacity=".7"
                />
                <ellipse cx="340" cy="335" rx="42" ry="12" fill="#050914" />
                <polygon
                  points="470,330 492,330 484,296 478,296"
                  fill="#F97316"
                />
                <rect
                  x="466"
                  y="330"
                  width="30"
                  height="6"
                  rx="2"
                  fill="#7C2D12"
                />
                <rect x="474" y="308" width="12" height="4" fill="#fff" />
                <g
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity=".85"
                >
                  <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                </g>
                <rect
                  x="34"
                  y="32"
                  width="104"
                  height="28"
                  rx="14"
                  fill="#050914"
                  fillOpacity=".6"
                  stroke="#38BDF8"
                  strokeOpacity=".7"
                />
                <circle cx="52" cy="46" r="5" fill="#38BDF8" />
                <text
                  x="64"
                  y="51"
                  fontFamily="Inter,Arial,sans-serif"
                  fontSize="13"
                  fontWeight="600"
                  fill="#fff"
                >
                  Progres
                </text>
                <rect
                  x="440"
                  y="354"
                  width="150"
                  height="10"
                  rx="5"
                  fill="#fff"
                  fillOpacity=".15"
                />
                <rect
                  x="440"
                  y="354"
                  width="90"
                  height="10"
                  rx="5"
                  fill="#38BDF8"
                />
              </svg>
              <small>Ilustrasi simulasi</small>
            </div>
            <div className="pv-body">
              <span className="pv-id">JP-2026-00418</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge">Infrastruktur Jalan</span>
                <span className="badge b-info">Diproses</span>
              </div>
              <h2>Lubang besar di Jl. Ijen depan SDN Kauman</h2>
              <p className="small">
                <svg className="ic" data-i="pin" viewBox="0 0 24 24">
                  <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                Klojen, Kota Malang
              </p>
              <p className="small">
                <svg className="ic" data-i="cal" viewBox="0 0 24 24">
                  <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4" />
                </svg>
                12 Okt 2026
              </p>
              <a className="btn btn-primary btn-sm" href="detail-laporan.html">
                Lihat Jejak Penanganan
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}