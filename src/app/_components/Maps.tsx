function Maps() {
  return (
    <section className="section" id="peta">
      <div className="wrap">
        <div className="section-head">
          <h2>Lihat sebaran laporan di sekitar Anda</h2>
          <p>Pratinjau peta statis dengan titik laporan simulasi.</p>
        </div>
        <div className="mapgrid">
          <div className="card map">
            <svg viewBox="0 0 640 400" role="img" aria-label="Peta simulasi sebaran laporan">
              <rect width="640" height="400" fill="#EAF1F8"></rect>
              <path d="M0 300C140 270 220 330 360 290S560 250 640 270V400H0z" fill="#CFE0F1"></path>
              <g stroke="#fff" strokeWidth="14" fill="none">
                <path d="M0 120H640"></path>
                <path d="M200 0V400"></path>
                <path d="M0 40 640 200"></path>
              </g>
              <g stroke="#fff" strokeWidth="7" fill="none">
                <path d="M420 0V400"></path>
                <path d="M0 220H640"></path>
                <path d="M60 0 320 400"></path>
              </g>
              <g fill="#DCE7D5">
                <rect x="230" y="140" width="150" height="60" rx="8"></rect>
                <rect x="450" y="40" width="150" height="60" rx="8"></rect>
              </g>
              <g stroke="#fff" strokeWidth="3">
                <circle cx="150" cy="95" r="11" fill="#2563EB"></circle>
                <circle cx="280" cy="170" r="11" fill="#D97706"></circle>
                <circle cx="330" cy="75" r="11" fill="#059669"></circle>
                <circle cx="470" cy="150" r="11" fill="#2563EB"></circle>
                <circle cx="540" cy="240" r="11" fill="#DC2626"></circle>
                <circle cx="110" cy="190" r="11" fill="#059669"></circle>
                <circle cx="380" cy="250" r="11" fill="#D97706"></circle>
              </g>
            </svg>
          </div>
          <div className="maplist">
            <div className="card mrow">
              <span className="dot" style={{ background: "#2563EB" }}></span>
              <div>
                <b>Sedang diproses</b>
                <p className="small">3 titik pada contoh ini</p>
              </div>
            </div>
            <div className="card mrow">
              <span className="dot" style={{ background: "#D97706" }}></span>
              <div>
                <b>Menunggu verifikasi</b>
                <p className="small">2 titik pada contoh ini</p>
              </div>
            </div>
            <div className="card mrow">
              <span className="dot" style={{ background: "#059669" }}></span>
              <div>
                <b>Selesai dengan bukti</b>
                <p className="small">2 titik pada contoh ini</p>
              </div>
            </div>
            <div className="card mrow">
              <span className="dot" style={{ background: "#DC2626" }}></span>
              <div>
                <b>Melewati target waktu</b>
                <p className="small">1 titik pada contoh ini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maps