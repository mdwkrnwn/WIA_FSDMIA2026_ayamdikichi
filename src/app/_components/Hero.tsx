import Link from 'next/link'

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>
            Laporkan Masalahnya.<br />
            Pantau Prosesnya.<br />
            Buktikan Hasilnya.
          </h1>
          <p className="lead">
            Setiap laporan warga punya jejak penanganan yang terbuka: siapa menangani, kapan, dan bukti apa yang ditunjukkan sebelum laporan dinyatakan selesai.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/buat-laporan-langkah-1">
              Buat Laporan
            </Link>
            <Link className="btn btn-secondary" href="/laporan">
              Jelajahi Laporan
            </Link>
          </div>
          <ul className="trust">
            <li>
              <svg className="ic" data-i="shield" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4"></path>
              </svg>
              Laporan diverifikasi sebelum diproses
            </li>
            <li>
              <svg className="ic" data-i="cam" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 8h3l2-3h6l2 3h3v11H4zM12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
              </svg>
              Bukti foto sebelum dan sesudah
            </li>
            <li>
              <svg className="ic" data-i="check" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 5 5 9-10"></path>
              </svg>
              Riwayat tidak dapat dihapus
            </li>
          </ul>
        </div>
        <div className="hero-visual">
          <svg
            className="art"
            viewBox="0 0 640 560"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hbu12" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#080E20" />
                <stop offset="1" stopColor="#1B3E94" />
              </linearGradient>
              <radialGradient id="hgu12">
                <stop offset="0" stopColor="#38BDF8" stopOpacity=".45" />
                <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="640" height="560" fill="url(#hbu12)" />
            <ellipse cx="320" cy="330" rx="360" ry="170" fill="url(#hgu12)" />
            <g stroke="#38BDF8" strokeOpacity=".16">
              <line x1="136" y1="330" x2="-600" y2="560" />
              <line x1="154" y1="330" x2="-510" y2="560" />
              <line x1="172" y1="330" x2="-420" y2="560" />
              <line x1="190" y1="330" x2="-330" y2="560" />
              <line x1="208" y1="330" x2="-240" y2="560" />
              <line x1="226" y1="330" x2="-150" y2="560" />
              <line x1="244" y1="330" x2="-60" y2="560" />
              <line x1="262" y1="330" x2="30" y2="560" />
              <line x1="280" y1="330" x2="120" y2="560" />
              <line x1="298" y1="330" x2="210" y2="560" />
              <line x1="316" y1="330" x2="300" y2="560" />
              <line x1="334" y1="330" x2="390" y2="560" />
              <line x1="352" y1="330" x2="480" y2="560" />
              <line x1="370" y1="330" x2="570" y2="560" />
              <line x1="388" y1="330" x2="660" y2="560" />
              <line x1="406" y1="330" x2="750" y2="560" />
              <line x1="424" y1="330" x2="840" y2="560" />
              <line x1="442" y1="330" x2="930" y2="560" />
              <line x1="460" y1="330" x2="1020" y2="560" />
              <line x1="478" y1="330" x2="1110" y2="560" />
              <line x1="496" y1="330" x2="1200" y2="560" />
              <line x1="0" y1="330" x2="640" y2="330" />
              <line x1="0" y1="352" x2="640" y2="352" />
              <line x1="0" y1="382" x2="640" y2="382" />
              <line x1="0" y1="424" x2="640" y2="424" />
              <line x1="0" y1="480" x2="640" y2="480" />
            </g>
            <polygon points="40,270 66,254 136,254 110,270" fill="#5B8DEF" />
            <polygon points="110,270 136,254 136,404 110,420" fill="#1E3A8A" />
            <rect x="40" y="270" width="70" height="150" fill="#16275A" />
            <rect x="47" y="280" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="47" y="298" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="47" y="316" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="47" y="334" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="47" y="352" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="47" y="370" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="47" y="388" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="61" y="280" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="61" y="298" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="61" y="316" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="61" y="334" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="61" y="352" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="61" y="370" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="61" y="388" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="75" y="280" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="75" y="298" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="75" y="316" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="75" y="334" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="75" y="352" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="75" y="370" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="75" y="388" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="89" y="280" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="89" y="298" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="89" y="316" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="89" y="334" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="89" y="352" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="89" y="370" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="89" y="388" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <polygon points="130,230 154,215 214,215 190,230" fill="#38BDF8" />
            <polygon points="190,230 214,215 214,425 190,440" fill="#155E75" />
            <rect x="130" y="230" width="60" height="210" fill="#14306B" />
            <rect x="137" y="240" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="137" y="258" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="137" y="276" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="137" y="294" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="137" y="312" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="137" y="330" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="137" y="348" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="137" y="366" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="137" y="384" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="137" y="402" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="240" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="258" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="276" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="294" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="151" y="312" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="330" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="348" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="366" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="151" y="384" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="151" y="402" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="165" y="240" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="165" y="258" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="165" y="276" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="165" y="294" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="165" y="312" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="165" y="330" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="165" y="348" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="165" y="366" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="165" y="384" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="165" y="402" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <polygon points="212,280 240,263 320,263 292,280" fill="#818CF8" />
            <polygon points="292,280 320,263 320,383 292,400" fill="#3730A3" />
            <rect x="212" y="280" width="80" height="120" fill="#1B2F6E" />
            <rect x="219" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="219" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="219" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="219" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="219" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="233" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="233" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="233" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="233" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="233" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="247" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="247" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="247" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="247" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="247" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="261" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="261" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="261" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="261" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="261" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="275" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="275" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="275" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="275" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="275" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <polygon points="330,190 356,174 420,174 394,190" fill="#5B8DEF" />
            <polygon points="394,190 420,174 420,414 394,430" fill="#1E3A8A" />
            <rect x="330" y="190" width="64" height="240" fill="#12285C" />
            <rect x="337" y="200" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="218" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="236" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="337" y="254" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="272" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="337" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="337" y="380" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="337" y="398" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="200" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="218" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="236" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="254" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="351" y="272" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="351" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="380" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="351" y="398" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="365" y="200" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="365" y="218" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="236" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="254" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="272" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="365" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="365" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="380" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="365" y="398" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="200" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="218" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="379" y="236" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="254" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="272" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="290" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="379" y="308" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="326" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="344" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="362" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="379" y="380" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="379" y="398" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <polygon points="420,250 448,233 524,233 496,250" fill="#38BDF8" />
            <polygon points="496,250 524,233 524,393 496,410" fill="#155E75" />
            <rect x="420" y="250" width="76" height="160" fill="#18327A" />
            <rect x="427" y="260" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="427" y="278" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="427" y="296" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="427" y="314" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="427" y="332" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="427" y="350" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="427" y="368" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="427" y="386" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="441" y="260" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="441" y="278" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="441" y="296" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="441" y="314" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="441" y="332" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="441" y="350" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="441" y="368" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="441" y="386" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="455" y="260" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="455" y="278" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="455" y="296" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="455" y="314" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="455" y="332" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="455" y="350" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="455" y="368" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="455" y="386" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="469" y="260" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="469" y="278" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="469" y="296" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="469" y="314" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="469" y="332" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="469" y="350" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="469" y="368" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="469" y="386" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <polygon points="520,250 542,236 602,236 580,250" fill="#818CF8" />
            <polygon points="580,250 602,236 602,426 580,440" fill="#3730A3" />
            <rect x="520" y="250" width="60" height="190" fill="#16275A" />
            <rect x="527" y="260" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="527" y="278" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="527" y="296" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="527" y="314" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="527" y="332" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="527" y="350" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="527" y="368" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="527" y="386" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="527" y="404" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="541" y="260" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="541" y="278" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="541" y="296" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="541" y="314" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="541" y="332" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="541" y="350" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="541" y="368" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="541" y="386" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="541" y="404" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="555" y="260" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="555" y="278" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="555" y="296" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="555" y="314" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="555" y="332" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="555" y="350" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="555" y="368" width="5" height="7" fill="#7DD3FC" fillOpacity=".2" />
            <rect x="555" y="386" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <rect x="555" y="404" width="5" height="7" fill="#7DD3FC" fillOpacity=".8" />
            <path d="M40 500C160 440 220 520 330 460S500 400 600 330" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="10 9" />
            <ellipse cx="150" cy="490" rx="34" ry="12" fill="#F97316" fillOpacity=".25" />
            <circle cx="150" cy="478" r="11" fill="#F97316" stroke="#fff" strokeWidth="3" />
            <circle cx="150" cy="478" r="4" fill="#fff" />
            <path d="M150 466v-34" stroke="#F97316" strokeWidth="2" strokeDasharray="3 4" />
            <ellipse cx="350" cy="464" rx="34" ry="12" fill="#2563EB" fillOpacity=".25" />
            <circle cx="350" cy="452" r="11" fill="#2563EB" stroke="#fff" strokeWidth="3" />
            <circle cx="350" cy="452" r="4" fill="#fff" />
            <path d="M350 440v-34" stroke="#2563EB" strokeWidth="2" strokeDasharray="3 4" />
            <ellipse cx="560" cy="362" rx="34" ry="12" fill="#34D399" fillOpacity=".25" />
            <circle cx="560" cy="350" r="11" fill="#34D399" stroke="#fff" strokeWidth="3" />
            <circle cx="560" cy="350" r="4" fill="#fff" />
            <path d="M560 338v-34" stroke="#34D399" strokeWidth="2" strokeDasharray="3 4" />
          </svg>
          <article className="card prev" aria-label="Contoh laporan (simulasi)">
            <div className="prev-top">
              <span>JP-2026-00418 · Data simulasi</span>
              <span className="badge b-info">Sedang diproses</span>
            </div>
            <h3>Lubang besar di Jl. Ijen depan SDN Kauman</h3>
            <p className="small">
              <svg className="ic" data-i="pin" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>
              Kota Malang, Kec. Klojen
            </p>
            <div className="evid">
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
                      <linearGradient id="bgu13" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#0A1022" />
                        <stop offset="1" stopColor="#17387F" />
                      </linearGradient>
                      <radialGradient id="glu13">
                        <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                        <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="640" height="400" fill="url(#bgu13)" />
                    <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu13)" />
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
                <figcaption>Sebelum · 12 Okt</figcaption>
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
                      <linearGradient id="bgu14" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#0A1022" />
                        <stop offset="1" stopColor="#17387F" />
                      </linearGradient>
                      <radialGradient id="glu14">
                        <stop offset="0" stopColor="#38BDF8" stopOpacity=".5" />
                        <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="640" height="400" fill="url(#bgu14)" />
                    <ellipse cx="320" cy="205" rx="330" ry="120" fill="url(#glu14)" />
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
                <figcaption>Progres · 24 Okt</figcaption>
              </figure>
            </div>
            <ol className="tl">
              <li>
                <b>Laporan diterima</b>
                <span>12 Okt, 08.14 · Sistem</span>
              </li>
              <li>
                <b>Terverifikasi petugas</b>
                <span>13 Okt · Survei lokasi, 3 foto</span>
              </li>
              <li className="now">
                <b>Penambalan dimulai</b>
                <span>24 Okt · Tim jalan, foto progres dilampirkan</span>
              </li>
              <li className="next">
                <b>Bukti selesai</b>
                <span>Menunggu foto sesudah</span>
              </li>
            </ol>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero