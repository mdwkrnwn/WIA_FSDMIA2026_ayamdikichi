export default function DetailLaporan() {
  return (
    <main id="main">
      <div className="dh">
        <div className="wrap">
          <ol className="crumbs">
            <li>
              <a href="index.html">Beranda</a>
            </li>
            <li>
              <a href="laporan.html">Jelajahi Laporan</a>
            </li>
            <li aria-current="page" id="crt">
              JP-2026-00418
            </li>
          </ol>
          <div className="idrow" id="ids">
            <code>JP-2026-00418</code>
            <span className="badge b-info">Diproses</span>
            <span className="badge b-bad">Melewati target waktu</span>
            <span className="badge b-ok">Terverifikasi</span>
          </div>
          <h1 id="ttl">Lubang besar di Jl. Ijen depan SDN Kauman</h1>
          <ul className="meta" id="meta">
            <li>
              <svg
                className="ic"
                data-i="road"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3" />
              </svg>
              Infrastruktur Jalan
            </li>
            <li>
              <svg
                className="ic"
                data-i="pin"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              Klojen, Kota Malang
            </li>
            <li>
              <svg
                className="ic"
                data-i="cal"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4" />
              </svg>
              Dilaporkan 12 Okt 2026
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap dl">
        <div>
          <section className="sec">
            <h2>Ringkasan laporan</h2>
            <p id="desc" style={{ maxWidth: '640px' }}>
              Lubang sekitar 80 cm di depan gerbang sekolah membahayakan pengendara motor dan anak yang menyeberang.
            </p>
          </section>
          <section className="sec" aria-labelledby="jh">
            <h2 id="jh">Jejak Penanganan</h2>
            <p className="intro">
              Setiap tindakan penting tercatat dengan waktu, peran pelaksana, dan bukti. Data pada halaman ini adalah simulasi.
            </p>
            <ol className="jt" id="jt">
              <li className="ev done">
                <div className="rail">
                  <span className="node">
                    <svg
                      className="ic"
                      data-i="check"
                      style={{ width: '16px', height: '16px', strokeWidth: 3 }}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="m5 12 5 5 9-10" />
                    </svg>
                  </span>
                  <span className="line" />
                </div>
                <div className="body">
                  <time>12 Okt 2026, 08.14 WIB</time>
                  <h3>Laporan diterima</h3>
                  <div className="tags">
                    <span className="badge b-ok">Selesai</span>
                    <span className="badge" style={{ background: '#fff' }}>
                      Peran: Sistem JEJAKPUBLIK
                    </span>
                  </div>
                  <p>Laporan masuk dan mendapat nomor pelacakan.</p>
                  <div className="evs">
                    <figure>
                      <div className="thumb">
                        <svg
                          className="art"
                          viewBox="0 0 640 400"
                          preserveAspectRatio="xMidYMid slice"
                          role="img"
                          aria-label="Ilustrasi Infrastruktur Jalan, sebelum"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient id="bgu8" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#0A1022" />
                              <stop offset="1" stopColor="#17387F" />
                            </linearGradient>
                            <radialGradient id="glu8">
                              <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                              <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                          <rect width="640" height="400" fill="url(#bgu8)" />
                          <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu8)" />
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
                          <ellipse cx="340" cy="335" rx="80" ry="25" fill="#050914" stroke="#64748B" />
                          <path d="M262 330l-30-8M420 328l34-12M340 310l-6-22" stroke="#64748B" fill="none" strokeWidth="2" />
                          <ellipse cx="340" cy="335" rx="98" ry="34" fill="none" stroke="#F97316" strokeWidth="2.5" strokeDasharray="7 7" />
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
                      </div>
                      <figcaption>
                        Kondisi awal<br />
                        Diunggah 12 Okt 2026, 08.14
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>
              <li className="ev done">
                <div className="rail">
                  <span className="node">
                    <svg
                      className="ic"
                      data-i="check"
                      style={{ width: '16px', height: '16px', strokeWidth: 3 }}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="m5 12 5 5 9-10" />
                    </svg>
                  </span>
                  <span className="line" />
                </div>
                <div className="body">
                  <time>13 Okt 2026, 10.30 WIB</time>
                  <h3>Laporan diverifikasi</h3>
                  <div className="tags">
                    <span className="badge b-ok">Selesai</span>
                    <span className="badge" style={{ background: '#fff' }}>
                      Peran: Verifikator
                    </span>
                  </div>
                  <p>Petugas memeriksa lokasi, kelengkapan foto, dan kemungkinan laporan ganda.</p>
                </div>
              </li>
              <li className="ev done">
                <div className="rail">
                  <span className="node">
                    <svg
                      className="ic"
                      data-i="check"
                      style={{ width: '16px', height: '16px', strokeWidth: 3 }}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="m5 12 5 5 9-10" />
                    </svg>
                  </span>
                  <span className="line" />
                </div>
                <div className="body">
                  <time>14 Okt 2026, 09.00 WIB</time>
                  <h3>Diteruskan ke petugas</h3>
                  <div className="tags">
                    <span className="badge b-ok">Selesai</span>
                    <span className="badge" style={{ background: '#fff' }}>
                      Peran: Koordinator layanan
                    </span>
                  </div>
                  <p>Laporan ditugaskan ke tim terkait dengan target penyelesaian.</p>
                </div>
              </li>
              <li className="ev now">
                <div className="rail">
                  <span className="node">4</span>
                  <span className="line" />
                </div>
                <div className="body">
                  <time>24 Okt 2026, 07.45 WIB</time>
                  <h3>Penanganan dimulai</h3>
                  <div className="tags">
                    <span className="badge b-info">Sedang berlangsung</span>
                    <span className="badge" style={{ background: '#fff' }}>
                      Peran: Petugas lapangan
                    </span>
                  </div>
                  <p>Petugas tiba di lokasi dan mulai bekerja.</p>
                  <div className="evs">
                    <figure>
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
                            <linearGradient id="bgu9" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0" stopColor="#0A1022" />
                              <stop offset="1" stopColor="#17387F" />
                            </linearGradient>
                            <radialGradient id="glu9">
                              <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                              <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                          <rect width="640" height="400" fill="url(#bgu9)" />
                          <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu9)" />
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
                      </div>
                      <figcaption>
                        Progres penanganan<br />
                        Diunggah 24 Okt 2026, 07.45
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>
              <li className="ev next">
                <div className="rail">
                  <span className="node">5</span>
                  <span className="line" />
                </div>
                <div className="body">
                  <time>Belum ada</time>
                  <h3>Dokumentasi perkembangan</h3>
                  <div className="tags">
                    <span className="badge">Menunggu</span>
                    <span className="badge" style={{ background: '#fff' }}>
                      Peran: Petugas lapangan
                    </span>
                  </div>
                  <p>Foto perkembangan dilampirkan sebagai bukti kerja.</p>
                </div>
              </li>
              <li className="ev next">
                <div className="rail">
                  <span className="node">6</span>
                  <span className="line" />
                </div>
                <div className="body">
                  <time>Belum ada</time>
                  <h3>Penyelesaian diajukan</h3>
                  <div className="tags">
                    <span className="badge">Menunggu</span>
                    <span className="badge" style={{ background: '#fff' }}>
                      Peran: Petugas lapangan
                    </span>
                  </div>
                  <p>Petugas mengajukan penyelesaian beserta foto sesudah penanganan.</p>
                </div>
              </li>
              <li className="ev next">
                <div className="rail">
                  <span className="node">7</span>
                </div>
                <div className="body">
                  <time>Belum ada</time>
                  <h3>Konfirmasi masyarakat</h3>
                  <div className="tags">
                    <span className="badge">Menunggu</span>
                    <span className="badge" style={{ background: '#fff' }}>
                      Peran: Pelapor
                    </span>
                  </div>
                  <p>Pelapor menilai apakah hasil penanganan sudah sesuai.</p>
                </div>
              </li>
            </ol>
          </section>
          <section className="sec">
            <h2>Galeri bukti</h2>
            <div className="gal" id="gal">
              <figure>
                <div className="thumb">
                  <svg
                    className="art"
                    viewBox="0 0 640 400"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    aria-label="Ilustrasi Infrastruktur Jalan, sebelum"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="bgu10" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#0A1022" />
                        <stop offset="1" stopColor="#17387F" />
                      </linearGradient>
                      <radialGradient id="glu10">
                        <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                        <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="640" height="400" fill="url(#bgu10)" />
                    <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu10)" />
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
                    <ellipse cx="340" cy="335" rx="80" ry="25" fill="#050914" stroke="#64748B" />
                    <path d="M262 330l-30-8M420 328l34-12M340 310l-6-22" stroke="#64748B" fill="none" strokeWidth="2" />
                    <ellipse cx="340" cy="335" rx="98" ry="34" fill="none" stroke="#F97316" strokeWidth="2.5" strokeDasharray="7 7" />
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
                <figcaption>
                  <b>Sebelum</b>Foto asli dari pelapor.<br />
                  <span>Diunggah 12 Okt 2026, 08.14 WIB</span>
                </figcaption>
              </figure>
              <figure>
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
                      <linearGradient id="bgu11" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#0A1022" />
                        <stop offset="1" stopColor="#17387F" />
                      </linearGradient>
                      <radialGradient id="glu11">
                        <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                        <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="640" height="400" fill="url(#bgu11)" />
                    <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu11)" />
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
                <figcaption>
                  <b>Selama penanganan</b>Foto saat pekerjaan berlangsung.<br />
                  <span>Diunggah 24 Okt 2026, 07.45 WIB</span>
                </figcaption>
              </figure>
              <figure>
                <div className="none">Belum ada dokumentasi sesudah</div>
                <figcaption>
                  <b>Sesudah</b>
                  <span>Akan muncul setelah diunggah petugas</span>
                </figcaption>
              </figure>
            </div>
          </section>
          <section className="sec">
            <h2>Konfirmasi masyarakat</h2>
            <div className="conf" id="conf">
              <span className="badge">Belum dibuka</span>
              <p>Konfirmasi dibuka setelah petugas mengajukan penyelesaian.</p>
            </div>
          </section>
        </div>
        <aside className="side" aria-label="Ringkasan penanganan">
          <div className="card">
            <h2>Ringkasan penanganan</h2>
            <dl className="kv" id="sum">
              <dt>Status</dt>
              <dd>
                <span className="badge b-info">Diproses</span>
              </dd>
              <dt>Tim</dt>
              <dd>Tim Pemeliharaan Jalan</dd>
              <dt>Pembaruan terakhir</dt>
              <dd>24 Okt 2026</dd>
              <dt>Durasi</dt>
              <dd>16 hari sejak dilaporkan</dd>
              <dt>Target selesai</dt>
              <dd>26 Okt 2026 (terlewat)</dd>
            </dl>
          </div>
          <div className="card">
            <h2>Lokasi</h2>
            <div className="map" id="map">
              <svg viewBox="0 0 800 520" role="img" aria-label="Lokasi laporan pada peta skematis">
                <rect width="800" height="520" fill="#EEF2F6" />
                <g fill="#D8E8D3">
                  <rect x="40" y="60" width="150" height="110" rx="14" />
                  <rect x="560" y="400" width="190" height="80" rx="14" />
                  <rect x="330" y="215" width="70" height="55" rx="10" />
                </g>
                <path d="M0 360C150 330 230 400 380 360S620 300 800 340" fill="none" stroke="#BCD6EE" strokeWidth="22" />
                <g fill="none" stroke="#fff" strokeLinecap="round">
                  <path d="M0 150H800" strokeWidth="12" />
                  <path d="M270 0V520" strokeWidth="12" />
                  <path d="M0 60 800 300" strokeWidth="9" />
                  <path d="M520 0V520" strokeWidth="7" />
                  <path d="M0 280H800" strokeWidth="7" />
                  <path d="M120 520 400 0" strokeWidth="6" />
                </g>
                <g fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="6 6">
                  <path d="M150 0V210L400 250L640 160V0" />
                  <path d="M80 380 400 310 700 380" />
                </g>
                <text x="416" y="18.2" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="600" fill="#475569" stroke="#EEF2F6" strokeWidth="4" paintOrder="stroke">
                  Singosari
                </text>
                <text x="128" y="46.800000000000004" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="600" fill="#475569" stroke="#EEF2F6" strokeWidth="4" paintOrder="stroke">
                  Batu
                </text>
                <text x="288" y="114.4" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="600" fill="#475569" stroke="#EEF2F6" strokeWidth="4" paintOrder="stroke">
                  Lowokwaru
                </text>
                <text x="512" y="114.4" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="600" fill="#475569" stroke="#EEF2F6" strokeWidth="4" paintOrder="stroke">
                  Blimbing
                </text>
                <text x="400" y="223.6" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="600" fill="#475569" stroke="#EEF2F6" strokeWidth="4" paintOrder="stroke">
                  Klojen
                </text>
                <text x="256" y="322.40000000000003" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="600" fill="#475569" stroke="#EEF2F6" strokeWidth="4" paintOrder="stroke">
                  Sukun
                </text>
                <text x="576" y="312" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="600" fill="#475569" stroke="#EEF2F6" strokeWidth="4" paintOrder="stroke">
                  Kedungkandang
                </text>
                <rect x="16" y="474" width="318" height="30" rx="8" fill="#fff" stroke="#E2E8F0" />
                <text x="30" y="494" fontFamily="Inter,sans-serif" fontSize="13" fill="#475569">
                  Wilayah demonstrasi: Malang Raya (peta skematis)
                </text>
                <g className="mk" data-id="JP-2026-00418" transform="translate(352 235.04000000000002)">
                  <circle r="26" fill="transparent" />
                  <circle className="halo" r="22" fill="#2563EB" fillOpacity=".2" stroke="#2563EB" strokeWidth="2" />
                  <circle r="12" fill="#2563EB" stroke="#fff" strokeWidth="3" />
                  <circle r="4" fill="#fff" />
                </g>
              </svg>
            </div>
            <p className="small" style={{ marginTop: '8px' }} id="loc">
              Klojen, Kota Malang
            </p>
          </div>
          <div className="card">
            <h2>Privasi pelapor</h2>
            <ul className="priv">
              <li>Nama pelapor disamarkan.</li>
              <li>Kontak pelapor tidak dipublikasikan.</li>
              <li>Lokasi ditampilkan sebatas kecamatan.</li>
            </ul>
          </div>
          <div className="card">
            <h2>Laporan terkait</h2>
            <ul className="rel" id="rel">
              <li>
                <a href="detail-laporan.html">Jalan retak panjang di Jl. Raya Karanglo</a>
                <span>Infrastruktur Jalan · Singosari · Selesai</span>
              </li>
              <li>
                <a href="detail-laporan.html">Lampu taman kota padam di Taman Slamet</a>
                <span>Penerangan Jalan · Klojen · Diterima</span>
              </li>
              <li>
                <a href="detail-laporan.html">Tumpukan sampah di TPS dekat Pasar Blimbing</a>
                <span>Kebersihan · Blimbing · Diproses</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}