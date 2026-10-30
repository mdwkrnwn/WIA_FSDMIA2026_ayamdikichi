import React from 'react'

function Transparency() {
  return (
    <section className="section dark" id="transparansi">
      <div className="wrap">
        <div className="section-head">
          <h2>Jejak Penanganan: setiap langkah tercatat</h2>
          <p>Laporan tidak berhenti di “terkirim”. Setiap tindakan penting dicatat lengkap dengan waktu, pelaksana, dan bukti.</p>
        </div>
        <ol className="jejak">
          <li>
            <span className="badge">Selesai</span>
            <h3>Diterima</h3>
            <time>12 Okt, 08.14</time>
            <p>Laporan masuk dan mendapat nomor pelacakan.</p>
          </li>
          <li>
            <span className="badge">Selesai</span>
            <h3>Diverifikasi</h3>
            <time>13 Okt, 10.30</time>
            <p>Petugas memeriksa lokasi dan kelengkapan foto.</p>
          </li>
          <li>
            <span className="badge">Selesai</span>
            <h3>Ditugaskan</h3>
            <time>14 Okt, 09.00</time>
            <p>Diteruskan ke tim jalan dengan target 14 hari.</p>
          </li>
          <li className="now">
            <span className="badge">Berjalan</span>
            <h3>Dikerjakan</h3>
            <time>24 Okt, 07.45</time>
            <p>Foto progres dilampirkan oleh pelaksana.</p>
          </li>
          <li className="next">
            <span className="badge">Menunggu</span>
            <h3>Bukti selesai</h3>
            <time>Belum ada</time>
            <p>Warga dapat menilai hasil sebelum ditutup.</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Transparency