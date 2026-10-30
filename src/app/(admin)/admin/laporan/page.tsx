'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '../../_components/Header';

interface Report {
  id: string;
  title: string;
  category: string;
  district: string;
  city: string;
  date: string;
  verified: boolean;
  status: 'Diterima' | 'Diproses';
}

const initialReports: Report[] = [
  {
    id: 'JP-2026-00458',
    title: 'Lampu taman kota padam di Taman Slamet',
    category: 'Penerangan Jalan',
    district: 'Klojen',
    city: 'Kota Malang',
    date: '26 Okt 2026',
    verified: false,
    status: 'Diterima',
  },
  {
    id: 'JP-2026-00455',
    title: 'Lima lampu PJU mati di jalur Pandaan–Malang',
    category: 'Penerangan Jalan',
    district: 'Singosari',
    city: 'Kabupaten Malang',
    date: '25 Okt 2026',
    verified: false,
    status: 'Diterima',
  },
  {
    id: 'JP-2026-00449',
    title: 'Pohon tua condong ke kabel listrik di Jl. Panglima Sudirman',
    category: 'Lingkungan',
    district: 'Batu',
    city: 'Kota Batu',
    date: '22 Okt 2026',
    verified: false,
    status: 'Diterima',
  },
  {
    id: 'JP-2026-00402',
    title: 'Tumpukan sampah di TPS dekat Pasar Blimbing',
    category: 'Kebersihan',
    district: 'Blimbing',
    city: 'Kota Malang',
    date: '18 Okt 2026',
    verified: true,
    status: 'Diproses',
  },
  {
    id: 'JP-2026-00408',
    title: 'Halte rusak di Jl. Raya Dieng',
    category: 'Fasilitas Umum',
    district: 'Klojen',
    city: 'Kota Malang',
    date: '14 Okt 2026',
    verified: true,
    status: 'Diterima',
  },
  {
    id: 'JP-2026-00418',
    title: 'Lubang besar di Jl. Ijen depan SDN Kauman',
    category: 'Infrastruktur Jalan',
    district: 'Klojen',
    city: 'Kota Malang',
    date: '12 Okt 2026',
    verified: true,
    status: 'Diproses',
  },
  {
    id: 'JP-2026-00391',
    title: 'Genangan air tiap hujan di Perumahan Tlogomas',
    category: 'Drainase',
    district: 'Lowokwaru',
    city: 'Kota Malang',
    date: '9 Okt 2026',
    verified: true,
    status: 'Diproses',
  },
  {
    id: 'JP-2026-00386',
    title: 'Bau limbah dari selokan di Jl. Ahmad Yani',
    category: 'Lingkungan',
    district: 'Blimbing',
    city: 'Kota Malang',
    date: '6 Okt 2026',
    verified: true,
    status: 'Diproses',
  },
];

function LaporanContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const filteredReports = initialReports.filter((report) => {
    const q = searchQuery.toLowerCase();
    return (
      report.id.toLowerCase().includes(q) ||
      report.title.toLowerCase().includes(q) ||
      report.district.toLowerCase().includes(q) ||
      report.city.toLowerCase().includes(q) ||
      report.category.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <Header
        title="Manajemen Laporan"
        searchPlaceholder="Cari ID, judul, atau kecamatan"
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="ac" id="main">
        <section className="dsec" id="laporan">
          <h2>Laporan terbaru</h2>
          <p aria-live="polite" className="small" id="tc" style={{ marginBottom: 'var(--s1)' }}>
            {filteredReports.length} laporan ditampilkan
          </p>
          <div className="twrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Judul</th>
                  <th>Kategori</th>
                  <th>Lokasi</th>
                  <th>Tanggal</th>
                  <th>Verifikasi</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody id="tb">
                {filteredReports.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link href="/admin/laporan">{item.id}</Link>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>
                      {item.district}
                      <small>{item.city}</small>
                    </td>
                    <td>{item.date}</td>
                    <td>
                      {item.verified ? (
                        <span className="badge b-ok">Terverifikasi</span>
                      ) : (
                        <span className="badge b-warn">Belum</span>
                      )}
                    </td>
                    <td>
                      <span className={`badge ${item.status === 'Diproses' ? 'b-info' : 'b-warn'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <Link href="/admin/laporan">Tinjau</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}

export default function LaporanPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LaporanContent />
    </Suspense>
  );
}