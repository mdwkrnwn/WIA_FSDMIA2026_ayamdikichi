import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="logo" style={{ color: "#fff" }} href="/">
              JEJAKPUBLIK
            </Link>
            <p style={{ marginTop: "12px", maxWidth: "340px" }}>
              Platform pelaporan warga dengan jejak penanganan yang bisa dibuktikan.
            </p>
          </div>
          <div>
            <h4>Platform</h4>
            <ul>
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/laporan">Jelajahi Laporan</Link>
              </li>
              <li>
                <Link href="/peta">Peta Laporan</Link>
              </li>
              <li>
                <Link href="/transparansi">Transparansi</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Tentang prototipe</h4>
            <ul>
              <li>Karya Multimedia In Action (MIA) 2026</li>
              <li>Seluruh data adalah simulasi</li>
              <li>Tidak terhubung dengan layanan pemerintah resmi</li>
            </ul>
          </div>
        </div>
        <p className="foot-note">
          Prototipe desain untuk kompetisi. Laporan, lokasi, dan angka pada situs ini fiktif dan hanya untuk demonstrasi.
        </p>
      </div>
    </footer>
  );
}