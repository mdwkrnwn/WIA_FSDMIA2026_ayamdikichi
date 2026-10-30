import React from 'react';
import Link from 'next/link';
import Header from '../../_components/Header';

export default function PenangananPage() {
  return (
    <>
      <Header title="Penanganan" />
      <main className="ac" id="main">
        <section className="dsec">
          <h2>Penanganan laporan</h2>
          <p className="small" style={{ marginBottom: '16px' }}>
            Pantau laporan melewati target dan tindak lanjut terbaru.
          </p>
          <div className="g11">
            <section className="dp">
              <h2>Melewati target</h2>
              <p className="sub">Laporan yang membutuhkan tindak lanjut.</p>
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
        </section>
      </main>
    </>
  );
}