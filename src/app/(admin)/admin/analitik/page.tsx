import React from 'react';
import Header from '../../_components/Header';

export default function AnalitikPage() {
  return (
    <>
      <Header title="Analitik" />
      <main className="ac" id="main">
        <div className="dsec" id="analitik">
          <h2 style={{ fontSize: '24px', marginBottom: 'var(--s2)' }}>
            Analitik laporan
          </h2>
          <div className="g21">
            <section className="dp">
              <h2>Tren laporan masuk dan selesai</h2>
              <p className="sub">Per bulan, Januari sampai Oktober 2026</p>
              <div id="tr">
                <ul className="leg">
                  <li>
                    <i style={{ background: '#2563EB' }} />
                    Laporan masuk
                  </li>
                  <li>
                    <i style={{ background: '#059669' }} />
                    Laporan selesai
                  </li>
                </ul>
                <div className="chart">
                  <svg
                    aria-label="Tren laporan masuk dan selesai per bulan, Januari sampai Oktober 2026 (data simulasi)"
                    role="img"
                    viewBox="0 0 640 280"
                  >
                    <line stroke="#E2E8F0" x1="52" x2="600" y1="248" y2="248" />
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="end" x="44" y="252">0</text>
                    <line stroke="#E2E8F0" x1="52" x2="600" y1="190" y2="190" />
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="end" x="44" y="194">500</text>
                    <line stroke="#E2E8F0" x1="52" x2="600" y1="132" y2="132" />
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="end" x="44" y="136">1.000</text>
                    <line stroke="#E2E8F0" x1="52" x2="600" y1="74" y2="74" />
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="end" x="44" y="78">1.500</text>
                    <line stroke="#E2E8F0" x1="52" x2="600" y1="16" y2="16" />
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="end" x="44" y="20">2.000</text>

                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="52" y="272">Jan</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="112.88888888888889" y="272">Feb</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="173.77777777777777" y="272">Mar</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="234.66666666666666" y="272">Apr</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="295.55555555555554" y="272">Mei</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="356.44444444444446" y="272">Jun</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="417.3333333333333" y="272">Jul</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="478.22222222222223" y="272">Agu</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="539.1111111111111" y="272">Sep</text>
                    <text fill="#475569" fontFamily="Inter,sans-serif" fontSize="12" textAnchor="middle" x="600" y="272">Okt</text>

                    <polyline fill="none" points="52,134.32 112.88888888888889,129.68 173.77777777777777,119.24 234.66666666666666,111.12 295.55555555555554,104.16 356.44444444444446,98.36 417.3333333333333,93.72 478.22222222222223,87.92000000000002 539.1111111111111,79.80000000000001 600,74" stroke="#2563EB" strokeJoin="round" strokeWidth="3" />
                    <circle cx="52" cy="134.32" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="112.88888888888889" cy="129.68" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="173.77777777777777" cy="119.24" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="234.66666666666666" cy="111.12" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="295.55555555555554" cy="104.16" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="356.44444444444446" cy="98.36" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="417.3333333333333" cy="93.72" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="478.22222222222223" cy="87.92000000000002" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="539.1111111111111" cy="79.80000000000001" fill="#2563EB" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="600" cy="74" fill="#2563EB" r="5" stroke="#fff" strokeWidth="1.5" />
                    <text fill="#2563EB" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="600" textAnchor="middle" x="600" y="62">1.500</text>

                    <polyline fill="none" points="52,199.28 112.88888888888889,193.48 173.77777777777777,187.68 234.66666666666666,179.56 295.55555555555554,173.76 356.44444444444446,166.8 417.3333333333333,158.68 478.22222222222223,152.88000000000002 539.1111111111111,140.11999999999998 600,130.376" stroke="#059669" strokeJoin="round" strokeWidth="3" />
                    <circle cx="52" cy="199.28" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="112.88888888888889" cy="193.48" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="173.77777777777777" cy="187.68" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="234.66666666666666" cy="179.56" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="295.55555555555554" cy="173.76" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="356.44444444444446" cy="166.8" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="417.3333333333333" cy="158.68" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="478.22222222222223" cy="152.88000000000002" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="539.1111111111111" cy="140.11999999999998" fill="#059669" r="3" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="600" cy="130.376" fill="#059669" r="5" stroke="#fff" strokeWidth="1.5" />
                    <text fill="#059669" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="600" textAnchor="middle" x="600" y="118.376">1.014</text>
                  </svg>
                </div>
              </div>
            </section>

            <section className="dp">
              <h2>Distribusi kategori</h2>
              <p className="sub">Jumlah laporan per kategori</p>
              <div id="cd">
                <ul className="bars">
                  <li>
                    <span>Infrastruktur Jalan</span>
                    <b>3.620 (29,0%)</b>
                    <span className="track">
                      <span className="fill" style={{ width: '100%', background: '#2563EB' }} />
                    </span>
                  </li>
                  <li>
                    <span>Kebersihan</span>
                    <b>2.410 (19,3%)</b>
                    <span className="track">
                      <span className="fill" style={{ width: '67%', background: '#2563EB' }} />
                    </span>
                  </li>
                  <li>
                    <span>Drainase</span>
                    <b>2.250 (18,0%)</b>
                    <span className="track">
                      <span className="fill" style={{ width: '62%', background: '#2563EB' }} />
                    </span>
                  </li>
                  <li>
                    <span>Penerangan Jalan</span>
                    <b>1.740 (13,9%)</b>
                    <span className="track">
                      <span className="fill" style={{ width: '48%', background: '#2563EB' }} />
                    </span>
                  </li>
                  <li>
                    <span>Fasilitas Umum</span>
                    <b>1.380 (11,1%)</b>
                    <span className="track">
                      <span className="fill" style={{ width: '38%', background: '#2563EB' }} />
                    </span>
                  </li>
                  <li>
                    <span>Lingkungan</span>
                    <b>1.080 (8,7%)</b>
                    <span className="track">
                      <span className="fill" style={{ width: '30%', background: '#2563EB' }} />
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <section className="dp" style={{ marginTop: 'var(--s3)' }}>
            <h2>Kinerja penanganan</h2>
            <p className="sub">Rata-rata lama tiap tahap dibanding target</p>
            <div id="hp">
              <ul className="bars">
                <li>
                  <span>Verifikasi (target 2 hari)</span>
                  <b>1,4 hari</b>
                  <span className="track">
                    <span className="fill" style={{ width: '18%', background: '#059669' }} />
                    <span className="tick" style={{ left: '25%' }} title="Target" />
                  </span>
                </li>
                <li>
                  <span>Penugasan (target 2 hari)</span>
                  <b>1,8 hari</b>
                  <span className="track">
                    <span className="fill" style={{ width: '23%', background: '#059669' }} />
                    <span className="tick" style={{ left: '25%' }} title="Target" />
                  </span>
                </li>
                <li>
                  <span>Pengerjaan (target 7 hari)</span>
                  <b>6,5 hari</b>
                  <span className="track">
                    <span className="fill" style={{ width: '81%', background: '#059669' }} />
                    <span className="tick" style={{ left: '87.5%' }} title="Target" />
                  </span>
                </li>
              </ul>
              <p className="small" style={{ marginTop: 'var(--s2)' }}>
                Garis hitam menandai target. Respons (verifikasi + penugasan) 3,2 hari; penyelesaian 9,7 hari.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}