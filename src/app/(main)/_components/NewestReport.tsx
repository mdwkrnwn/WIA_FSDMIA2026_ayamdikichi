import Link from 'next/link'
import React from 'react'

function NewestReport() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>Laporan terbaru dari warga</h2>
          <p>Contoh laporan simulasi lengkap dengan status penanganannya.</p>
        </div>
        <div className="grid3">
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
                  <linearGradient id="bgu15" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0A1022" />
                    <stop offset="1" stopColor="#17387F" />
                  </linearGradient>
                  <radialGradient id="glu15">
                    <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                    <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="640" height="400" fill="url(#bgu15)" />
                <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu15)" />
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

          <article className="card rcard">
            <div className="thumb">
              <svg
                className="art"
                viewBox="0 0 640 400"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                aria-label="Ilustrasi Drainase, sesudah"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bgu16" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0A1022" />
                    <stop offset="1" stopColor="#17387F" />
                  </linearGradient>
                  <radialGradient id="glu16">
                    <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                    <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="640" height="400" fill="url(#bgu16)" />
                <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu16)" />
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
                <rect x="40" y="318" width="560" height="52" rx="4" fill="#0B1530" stroke="#38BDF8" strokeOpacity=".35" />
                <rect x="220" y="326" width="200" height="34" rx="4" fill="#050914" stroke="#64748B" />
                <line x1="236" y1="330" x2="236" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="252" y1="330" x2="252" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="268" y1="330" x2="268" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="284" y1="330" x2="284" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="300" y1="330" x2="300" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="316" y1="330" x2="316" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="332" y1="330" x2="332" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="348" y1="330" x2="348" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="364" y1="330" x2="364" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="380" y1="330" x2="380" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <line x1="396" y1="330" x2="396" y2="356" stroke="#38BDF8" strokeOpacity=".55" strokeWidth="3" />
                <g fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeOpacity=".8">
                  <path d="M120 300q50-14 100 0M420 300q50-14 100 0M260 296q60-18 120 0" />
                </g>
                <g fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" opacity=".85">
                  <path d="M16 42V16h26M598 16h26v26M624 358v26h-26M42 384H16V358" />
                </g>
                <rect x="34" y="32" width="104" height="28" rx="14" fill="#050914" fillOpacity=".6" stroke="#34D399" strokeOpacity=".7" />
                <circle cx="52" cy="46" r="5" fill="#34D399" />
                <text x="64" y="51" fontFamily="Inter,Arial,sans-serif" fontSize="13" fontWeight="600" fill="#fff">
                  Sesudah
                </text>
                <circle cx="584" cy="358" r="20" fill="#34D399" fillOpacity=".2" stroke="#34D399" strokeWidth="2.5" />
                <path d="m574 358 7 7 12-14" fill="none" stroke="#34D399" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <small>Ilustrasi simulasi</small>
            </div>
            <div className="rcard-body">
              <div className="rcard-meta">
                <span className="badge">Drainase</span>
                <span className="badge b-ok">Selesai</span>
              </div>
              <h3>Saluran tersumbat sampah di Jl. Soekarno-Hatta</h3>
              <p className="small">
                <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                </svg>
                Lowokwaru, Kota Malang
              </p>
              <div className="rcard-foot">
                <span className="small">
                  <svg className="ic" data-i="cal" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 7h16v13H4zM4 11h16M8 4v4M16 4v4"></path>
                  </svg>
                  3 Okt 2026
                </span>
                <Link href="/detail-laporan-selesai">Lihat detail</Link>
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
                  <linearGradient id="bgu17" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0A1022" />
                    <stop offset="1" stopColor="#17387F" />
                  </linearGradient>
                  <radialGradient id="glu17">
                    <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                    <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="640" height="400" fill="url(#bgu17)" />
                <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu17)" />
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
                Singosari, Kab. Malang
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
        </div>
      </div>
    </section>
  )
}

export default NewestReport