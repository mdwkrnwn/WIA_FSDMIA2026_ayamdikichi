import React from 'react';
import Link from 'next/link';
import Header from '../../_components/Header';

export default function VerifikasiPage() {
  return (
    <>
      <Header title="Verifikasi" />
      <main className="ac" id="main">
        <section className="dsec">
          <h2>Antrean verifikasi</h2>
          <p className="small" style={{ marginBottom: '16px' }}>
            Laporan yang memerlukan pemeriksaan awal (data simulasi).
          </p>
          <section className="dp">
            <h2>Menunggu verifikasi</h2>
            <p className="sub">Prioritaskan laporan yang paling lama menunggu.</p>
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
          </section>
        </section>
      </main>
    </>
  );
}