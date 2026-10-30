import React from 'react';
import Link from 'next/link';
import Header from '../_components/Header';

export default function AdminDashboardPage() {
  return (
    <>
      <Header title="Dashboard" />
      <main className="ac" id="main">
        <div className="kpis" id="kp">
          <div className="kpi">
            <span>Total laporan</span>
            <strong>12.480</strong>
            <small>Sejak 1 Jan 2026</small>
          </div>
          <div className="kpi pend">
            <span>Menunggu verifikasi</span>
            <strong>3.168</strong>
            <small>25,4% dari laporan masuk</small>
          </div>
          <div className="kpi">
            <span>Sedang diproses</span>
            <strong>2.214</strong>
            <small>17,7% dari laporan masuk</small>
          </div>
          <div className="kpi">
            <span>Laporan selesai</span>
            <strong>6.874</strong>
            <small>55,1% dari laporan masuk</small>
          </div>
          <div className="kpi warn">
            <span>Melewati target</span>
            <strong>312</strong>
            <small>Dari 5.606 laporan belum selesai</small>
          </div>
          <div className="kpi">
            <span>Rata-rata respons</span>
            <strong>3,2 hari</strong>
            <small>Target maksimal 4 hari</small>
          </div>
        </div>

        <div className="dsec g21" id="prioritas">
          <section aria-labelledby="h1p" className="dp">
            <h2 id="h1p">Laporan prioritas</h2>
            <p className="sub" id="prn">
              Contoh dari data simulasi. Total nasional: 312 melewati target, 3.168 menunggu verifikasi.
            </p>
            <div id="pr">
              <h3 className="ph">
                Melewati target <span className="badge b-bad">4 contoh</span>
              </h3>
              <ul className="pl">
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00351</Link> · Trotoar amblas di depan Alun-Alun Batu
                  </div>
                  <span>Terlambat 15 hari dari target 13 Okt 2026</span>
                </li>
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00386</Link> · Bau limbah dari selokan di Jl. Ahmad Yani
                  </div>
                  <span>Terlambat 8 hari dari target 20 Okt 2026</span>
                </li>
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00391</Link> · Genangan air tiap hujan di Perumahan Tlogomas
                  </div>
                  <span>Terlambat 5 hari dari target 23 Okt 2026</span>
                </li>
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00418</Link> · Lubang besar di Jl. Ijen depan SDN Kauman
                  </div>
                  <span>Terlambat 2 hari dari target 26 Okt 2026</span>
                </li>
              </ul>

              <h3 className="ph">
                Menunggu verifikasi <span className="badge b-warn">3 contoh</span>
              </h3>
              <ul className="pl">
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00449</Link> · Pohon tua condong ke kabel listrik di Jl. Panglima Sudirman
                  </div>
                  <span>Menunggu verifikasi 6 hari · Batu</span>
                </li>
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00455</Link> · Lima lampu PJU mati di jalur Pandaan–Malang
                  </div>
                  <span>Menunggu verifikasi 3 hari · Singosari</span>
                </li>
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00458</Link> · Lampu taman kota padam di Taman Slamet
                  </div>
                  <span>Menunggu verifikasi 2 hari · Klojen</span>
                </li>
              </ul>

              <h3 className="ph">
                Perlu bukti <span className="badge b-info">3 contoh</span>
              </h3>
              <ul className="pl">
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00351</Link> · Trotoar amblas di depan Alun-Alun Batu
                  </div>
                  <span>Pelapor meminta tindak lanjut; butuh bukti perbaikan</span>
                </li>
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00391</Link> · Genangan air tiap hujan di Perumahan Tlogomas
                  </div>
                  <span>Belum ada bukti baru selama 14 hari</span>
                </li>
                <li>
                  <div>
                    <Link href="/admin/laporan">JP-2026-00386</Link> · Bau limbah dari selokan di Jl. Ahmad Yani
                  </div>
                  <span>Belum ada bukti baru selama 19 hari</span>
                </li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="h1a" className="dp" id="aktivitas">
            <h2 id="h1a">Aktivitas terbaru</h2>
            <p className="sub">Dari Jejak Penanganan</p>
            <ul className="act" id="ac">
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l3 2" />
                  </svg>
                </span>
                <div>
                  <b>Pembaruan status · JP-2026-00418</b>
                  <span>Lubang besar di Jl. Ijen depan SDN Kauman</span>
                  <br />
                  <span>24 Okt 2026, 07.45 WIB</span>
                </div>
              </li>
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l3 2" />
                  </svg>
                </span>
                <div>
                  <b>Pembaruan status · JP-2026-00402</b>
                  <span>Tumpukan sampah di TPS dekat Pasar Blimbing</span>
                  <br />
                  <span>21 Okt 2026, 07.45 WIB</span>
                </div>
              </li>
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 20c1-4 4-6 8-6s7 2 8 6" />
                  </svg>
                </span>
                <div>
                  <b>Penugasan · JP-2026-00402</b>
                  <span>Tumpukan sampah di TPS dekat Pasar Blimbing</span>
                  <br />
                  <span>20 Okt 2026, 09.00 WIB</span>
                </div>
              </li>
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <b>Verifikasi · JP-2026-00402</b>
                  <span>Tumpukan sampah di TPS dekat Pasar Blimbing</span>
                  <br />
                  <span>19 Okt 2026, 10.30 WIB</span>
                </div>
              </li>
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <b>Verifikasi · JP-2026-00408</b>
                  <span>Halte rusak di Jl. Raya Dieng</span>
                  <br />
                  <span>15 Okt 2026, 10.30 WIB</span>
                </div>
              </li>
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M4 8h3l2-3h6l2 3h3v11H4zM12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                </span>
                <div>
                  <b>Unggah bukti · JP-2026-00391</b>
                  <span>Genangan air tiap hujan di Perumahan Tlogomas</span>
                  <br />
                  <span>14 Okt 2026, 15.20 WIB</span>
                </div>
              </li>
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 20c1-4 4-6 8-6s7 2 8 6" />
                  </svg>
                </span>
                <div>
                  <b>Penugasan · JP-2026-00418</b>
                  <span>Lubang besar di Jl. Ijen depan SDN Kauman</span>
                  <br />
                  <span>14 Okt 2026, 09.00 WIB</span>
                </div>
              </li>
              <li>
                <span className="ai">
                  <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <b>Verifikasi · JP-2026-00418</b>
                  <span>Lubang besar di Jl. Ijen depan SDN Kauman</span>
                  <br />
                  <span>13 Okt 2026, 10.30 WIB</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}