import Link from 'next/link'

function ReportList() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>Apa yang ingin Anda laporkan?</h2>
        </div>
        <div className="cats">
          <Link className="cat" href="/laporan">
            <span className="cat-ic t-jalan">
              <svg className="ic" data-i="road" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3"></path>
              </svg>
            </span>
            <div>
              <b>Infrastruktur Jalan</b>
              <span>Lubang, retak, jalan amblas</span>
            </div>
          </Link>
          <Link className="cat" href="/laporan">
            <span className="cat-ic t-bersih">
              <svg className="ic" data-i="trash" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"></path>
              </svg>
            </span>
            <div>
              <b>Kebersihan</b>
              <span>Sampah menumpuk, TPS penuh</span>
            </div>
          </Link>
          <Link className="cat" href="/laporan">
            <span className="cat-ic t-drain">
              <svg className="ic" data-i="drop" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
              </svg>
            </span>
            <div>
              <b>Drainase</b>
              <span>Saluran tersumbat, genangan</span>
            </div>
          </Link>
          <Link className="cat" href="/laporan">
            <span className="cat-ic t-lampu">
              <svg className="ic" data-i="bulb" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.100h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"></path>
              </svg>
            </span>
            <div>
              <b>Penerangan Jalan</b>
              <span>Lampu mati atau rusak</span>
            </div>
          </Link>
          <Link className="cat" href="/laporan">
            <span className="cat-ic t-fasum">
              <svg className="ic" data-i="bench" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 12h18M5 12V8h14v4M6 12v7M18 12v7M3 16h18"></path>
              </svg>
            </span>
            <div>
              <b>Fasilitas Umum</b>
              <span>Halte, taman, trotoar</span>
            </div>
          </Link>
          <Link className="cat" href="/laporan">
            <span className="cat-ic t-ling">
              <svg className="ic" data-i="leaf" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 19C5 10 10 5 20 4c0 10-5 15-13 15M5 19c2-5 5-8 9-10"></path>
              </svg>
            </span>
            <div>
              <b>Lingkungan</b>
              <span>Pohon rawan tumbang, polusi</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReportList