import React from 'react';
export default function Transparansi() {
  return (
    <main id="main">
      <div className="th">
        <div className="wrap">
          <ol className="crumbs">
            <li>
              <a href="index.html">Beranda</a>
            </li>
            <li aria-current="page">Transparansi</li>
          </ol>
          <h1>Transparansi Penanganan Laporan</h1>
          <p className="lead">
            Pantau perkembangan penanganan masalah publik melalui data yang terbuka,
            mudah dipahami, dan dapat ditelusuri.
          </p>
          <dl className="tmeta">
            <div>
              <dt>Periode pelaporan</dt>
              <dd>1 Januari – 28 Oktober 2026</dd>
            </div>
            <div>
              <dt>Cakupan data</dt>
              <dd>7 kecamatan di Malang Raya</dd>
            </div>
            <div>
              <dt>Pembaruan terakhir</dt>
              <dd>28 Oktober 2026, 08.00 WIB</dd>
            </div>
          </dl>
          <p className="demo">
            Seluruh angka pada halaman ini adalah data demonstrasi. Prototipe ini tidak
            terhubung dengan layanan atau data pemerintah.
          </p>
        </div>
      </div>
      <div className="wrap tp">
        <section className="dsec" aria-labelledby="s1">
          <h2 id="s1">Statistik publik</h2>
          <div className="kpis" id="kp">
            <div className="kpi ">
              <span>Laporan terverifikasi</span>
              <strong>9.312</strong>
              <small>74,6% dari 12.480 laporan masuk</small>
            </div>
            <div className="kpi ">
              <span>Tingkat penyelesaian</span>
              <strong>55,1%</strong>
              <small>6.874 laporan selesai</small>
            </div>
            <div className="kpi ">
              <span>Rata-rata waktu respons</span>
              <strong>3,2 hari</strong>
              <small>Diterima sampai ditugaskan</small>
            </div>
            <div className="kpi ">
              <span>Rata-rata waktu penyelesaian</span>
              <strong>9,7 hari</strong>
              <small>Diterima sampai diajukan selesai</small>
            </div>
            <div className="kpi warn">
              <span>Melewati target</span>
              <strong>312</strong>
              <small>Belum selesai lebih dari 14 hari</small>
            </div>
            <div className="kpi ">
              <span>Dikonfirmasi warga</span>
              <strong>5.120</strong>
              <small>74,5% dari laporan selesai</small>
            </div>
          </div>
        </section>
        <section className="dsec" aria-labelledby="s2">
          <h2 id="s2">Tren laporan</h2>
          <div className="g11">
            <div className="dp">
              <h2>Laporan masuk dan selesai</h2>
              <p className="sub">Per bulan</p>
              <div id="t1">
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
                    viewBox="0 0 640 280"
                    role="img"
                    aria-label="Laporan masuk dan selesai per bulan (data simulasi)"
                  >
                    <line x1="52" x2="600" y1="248" y2="248" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="252"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      0
                    </text>
                    <line x1="52" x2="600" y1="190" y2="190" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="194"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      500
                    </text>
                    <line x1="52" x2="600" y1="132" y2="132" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="136"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      1.000
                    </text>
                    <line x1="52" x2="600" y1="74" y2="74" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="78"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      1.500
                    </text>
                    <line x1="52" x2="600" y1="16" y2="16" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="20"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      2.000
                    </text>
                    <text
                      x="52"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Jan
                    </text>
                    <text
                      x="112.88888888888889"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Feb
                    </text>
                    <text
                      x="173.77777777777777"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Mar
                    </text>
                    <text
                      x="234.66666666666666"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Apr
                    </text>
                    <text
                      x="295.55555555555554"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Mei
                    </text>
                    <text
                      x="356.44444444444446"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Jun
                    </text>
                    <text
                      x="417.3333333333333"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Jul
                    </text>
                    <text
                      x="478.22222222222223"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Agu
                    </text>
                    <text
                      x="539.1111111111111"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Sep
                    </text>
                    <text
                      x="600"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Okt
                    </text>
                    <polyline
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      points="52,134.32 112.88888888888889,129.68 173.77777777777777,119.24 234.66666666666666,111.12 295.55555555555554,104.16 356.44444444444446,98.36 417.3333333333333,93.72 478.22222222222223,87.92000000000002 539.1111111111111,79.80000000000001 600,74"
                    />
                    <circle
                      cx="52"
                      cy="134.32"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="112.88888888888889"
                      cy="129.68"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="173.77777777777777"
                      cy="119.24"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="234.66666666666666"
                      cy="111.12"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="295.55555555555554"
                      cy="104.16"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="356.44444444444446"
                      cy="98.36"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="417.3333333333333"
                      cy="93.72"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="478.22222222222223"
                      cy="87.92000000000002"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="539.1111111111111"
                      cy="79.80000000000001"
                      r="3"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="600"
                      cy="74"
                      r="5"
                      fill="#2563EB"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <text
                      x="600"
                      y="62"
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                      fill="#2563EB"
                      fontFamily="Inter,sans-serif"
                    >
                      1.500
                    </text>
                    <polyline
                      fill="none"
                      stroke="#059669"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      points="52,199.28 112.88888888888889,193.48 173.77777777777777,187.68 234.66666666666666,179.56 295.55555555555554,173.76 356.44444444444446,166.8 417.3333333333333,158.68 478.22222222222223,152.88000000000002 539.1111111111111,140.11999999999998 600,130.376"
                    />
                    <circle
                      cx="52"
                      cy="199.28"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="112.88888888888889"
                      cy="193.48"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="173.77777777777777"
                      cy="187.68"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="234.66666666666666"
                      cy="179.56"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="295.55555555555554"
                      cy="173.76"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="356.44444444444446"
                      cy="166.8"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="417.3333333333333"
                      cy="158.68"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="478.22222222222223"
                      cy="152.88000000000002"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="539.1111111111111"
                      cy="140.11999999999998"
                      r="3"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="600"
                      cy="130.376"
                      r="5"
                      fill="#059669"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <text
                      x="600"
                      y="118.376"
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                      fill="#059669"
                      fontFamily="Inter,sans-serif"
                    >
                      1.014
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="dp">
              <h2>Laporan belum selesai</h2>
              <p className="sub">Kumulatif pada akhir setiap bulan</p>
              <div id="t2">
                <ul className="leg">
                  <li>
                    <i style={{ background: '#B45309' }} />
                    Belum selesai (kumulatif)
                  </li>
                </ul>
                <div className="chart">
                  <svg
                    viewBox="0 0 640 280"
                    role="img"
                    aria-label="Laporan belum selesai kumulatif per akhir bulan (data simulasi)"
                  >
                    <line x1="52" x2="600" y1="248" y2="248" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="252"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      0
                    </text>
                    <line x1="52" x2="600" y1="190" y2="190" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="194"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      2.500
                    </text>
                    <line x1="52" x2="600" y1="132" y2="132" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="136"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      5.000
                    </text>
                    <line x1="52" x2="600" y1="74" y2="74" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="78"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      7.500
                    </text>
                    <line x1="52" x2="600" y1="16" y2="16" stroke="#E2E8F0" />
                    <text
                      x="44"
                      y="20"
                      textAnchor="end"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      10.000
                    </text>
                    <text
                      x="52"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Jan
                    </text>
                    <text
                      x="112.88888888888889"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Feb
                    </text>
                    <text
                      x="173.77777777777777"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Mar
                    </text>
                    <text
                      x="234.66666666666666"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Apr
                    </text>
                    <text
                      x="295.55555555555554"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Mei
                    </text>
                    <text
                      x="356.44444444444446"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Jun
                    </text>
                    <text
                      x="417.3333333333333"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Jul
                    </text>
                    <text
                      x="478.22222222222223"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Agu
                    </text>
                    <text
                      x="539.1111111111111"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Sep
                    </text>
                    <text
                      x="600"
                      y="272"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#475569"
                      fontFamily="Inter,sans-serif"
                    >
                      Okt
                    </text>
                    <polyline
                      fill="none"
                      stroke="#B45309"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      points="52,235.00799999999998 112.88888888888889,222.248 173.77777777777777,208.56 234.66666666666666,194.872 295.55555555555554,180.95200000000003 356.44444444444446,167.264 417.3333333333333,154.272 478.22222222222223,141.28 539.1111111111111,129.216 600,117.9408"
                    />
                    <circle
                      cx="52"
                      cy="235.00799999999998"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="112.88888888888889"
                      cy="222.248"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="173.77777777777777"
                      cy="208.56"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="234.66666666666666"
                      cy="194.872"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="295.55555555555554"
                      cy="180.95200000000003"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="356.44444444444446"
                      cy="167.264"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="417.3333333333333"
                      cy="154.272"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="478.22222222222223"
                      cy="141.28"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="539.1111111111111"
                      cy="129.216"
                      r="3"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="600"
                      cy="117.9408"
                      r="5"
                      fill="#B45309"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <text
                      x="600"
                      y="105.9408"
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                      fill="#B45309"
                      fontFamily="Inter,sans-serif"
                    >
                      5.606
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dsec" aria-labelledby="s3">
          <h2 id="s3">Perbandingan wilayah</h2>
          <div className="toolbar">
            <div className="field">
              <label htmlFor="gs">Urutkan berdasarkan</label>
              <select className="select" id="gs">
                <option value="n">Jumlah laporan</option>
                <option value="rate">Tingkat penyelesaian</option>
                <option value="t">Waktu penanganan tercepat</option>
              </select>
            </div>
          </div>
          <div className="twrap">
            <table className="tbl">
              <caption className="sr">Perbandingan kecamatan</caption>
              <thead>
                <tr>
                  <th>Kecamatan</th>
                  <th className="num">Jumlah laporan</th>
                  <th className="num">Tingkat penyelesaian</th>
                  <th className="num">Rata-rata waktu penanganan</th>
                </tr>
              </thead>
              <tbody id="geo">
                <tr>
                  <td>
                    <b>Lowokwaru</b>
                  </td>
                  <td className="num">
                    2.890<i className="mini" style={{ width: '100%' }} />
                  </td>
                  <td className="num">
                    63,7%
                    <i
                      className="mini"
                      style={{ width: '64%', background: '#059669' }}
                    />
                  </td>
                  <td className="num">
                    9,1 hari
                    <i
                      className="mini"
                      style={{ width: '65%', background: '#B45309' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Klojen</b>
                  </td>
                  <td className="num">
                    2.410<i className="mini" style={{ width: '83%' }} />
                  </td>
                  <td className="num">
                    68,5%
                    <i
                      className="mini"
                      style={{ width: '68%', background: '#059669' }}
                    />
                  </td>
                  <td className="num">
                    8,4 hari
                    <i
                      className="mini"
                      style={{ width: '60%', background: '#B45309' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Blimbing</b>
                  </td>
                  <td className="num">
                    2.050<i className="mini" style={{ width: '71%' }} />
                  </td>
                  <td className="num">
                    57,6%
                    <i
                      className="mini"
                      style={{ width: '58%', background: '#059669' }}
                    />
                  </td>
                  <td className="num">
                    9,9 hari
                    <i
                      className="mini"
                      style={{ width: '71%', background: '#B45309' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Sukun</b>
                  </td>
                  <td className="num">
                    1.580<i className="mini" style={{ width: '55%' }} />
                  </td>
                  <td className="num">
                    51,9%
                    <i
                      className="mini"
                      style={{ width: '52%', background: '#059669' }}
                    />
                  </td>
                  <td className="num">
                    10,6 hari
                    <i
                      className="mini"
                      style={{ width: '76%', background: '#B45309' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Kedungkandang</b>
                  </td>
                  <td className="num">
                    1.470<i className="mini" style={{ width: '51%' }} />
                  </td>
                  <td className="num">
                    46,9%
                    <i
                      className="mini"
                      style={{ width: '47%', background: '#059669' }}
                    />
                  </td>
                  <td className="num">
                    11,4 hari
                    <i
                      className="mini"
                      style={{ width: '81%', background: '#B45309' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Singosari</b>
                  </td>
                  <td className="num">
                    1.250<i className="mini" style={{ width: '43%' }} />
                  </td>
                  <td className="num">
                    33,6%
                    <i
                      className="mini"
                      style={{ width: '34%', background: '#059669' }}
                    />
                  </td>
                  <td className="num">
                    12,2 hari
                    <i
                      className="mini"
                      style={{ width: '87%', background: '#B45309' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Batu</b>
                  </td>
                  <td className="num">
                    830<i className="mini" style={{ width: '29%' }} />
                  </td>
                  <td className="num">
                    33,0%
                    <i
                      className="mini"
                      style={{ width: '33%', background: '#059669' }}
                    />
                  </td>
                  <td className="num">
                    9,5 hari
                    <i
                      className="mini"
                      style={{ width: '68%', background: '#B45309' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="dsec" aria-labelledby="s4">
          <h2 id="s4">Analisis kategori</h2>
          <div className="g3">
            <div className="dp">
              <h2>Paling banyak dilaporkan</h2>
              <p className="sub">Jumlah laporan</p>
              <div id="c1">
                <ul className="bars">
                  <li>
                    <span>Infrastruktur Jalan</span>
                    <b>3.620</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '100%', background: '#2563EB' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Kebersihan</span>
                    <b>2.410</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '67%', background: '#2563EB' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Drainase</span>
                    <b>2.250</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '62%', background: '#2563EB' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Penerangan Jalan</span>
                    <b>1.740</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '48%', background: '#2563EB' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Fasilitas Umum</span>
                    <b>1.380</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '38%', background: '#2563EB' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Lingkungan</span>
                    <b>1.080</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '30%', background: '#2563EB' }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dp">
              <h2>Penanganan terlama</h2>
              <p className="sub">Rata-rata hari sampai selesai</p>
              <div id="c2">
                <ul className="bars">
                  <li>
                    <span>Lingkungan</span>
                    <b>14,3 hari</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '95%', background: '#B45309' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Infrastruktur Jalan</span>
                    <b>12,4 hari</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '83%', background: '#B45309' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Fasilitas Umum</span>
                    <b>11,6 hari</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '77%', background: '#B45309' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Drainase</span>
                    <b>10,8 hari</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '72%', background: '#B45309' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Penerangan Jalan</span>
                    <b>7,1 hari</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '47%', background: '#B45309' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Kebersihan</span>
                    <b>5,2 hari</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '35%', background: '#B45309' }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dp">
              <h2>Belum selesai terbanyak</h2>
              <p className="sub">Jumlah laporan belum selesai</p>
              <div id="c3">
                <ul className="bars">
                  <li>
                    <span>Infrastruktur Jalan</span>
                    <b>1.640</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '100%', background: '#DC2626' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Drainase</span>
                    <b>1.120</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '68%', background: '#DC2626' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Kebersihan</span>
                    <b>850</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '52%', background: '#DC2626' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Fasilitas Umum</span>
                    <b>740</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '45%', background: '#DC2626' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Penerangan Jalan</span>
                    <b>650</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '40%', background: '#DC2626' }}
                      />
                    </span>
                  </li>
                  <li>
                    <span>Lingkungan</span>
                    <b>606</b>
                    <span className="track">
                      <span
                        className="fill"
                        style={{ width: '37%', background: '#DC2626' }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="dsec" aria-labelledby="s5">
          <h2 id="s5">Data publik</h2>
          <p className="intro">
            Contoh 12 laporan dari data simulasi. Saring, urutkan, lalu unduh
            sebagai CSV.
          </p>
          <div className="toolbar">
            <div className="field">
              <label htmlFor="fc">Kategori</label>
              <select className="select" id="fc">
                <option value="">Semua kategori</option>
                <option value="jalan">Infrastruktur Jalan</option>
                <option value="bersih">Kebersihan</option>
                <option value="drain">Drainase</option>
                <option value="lampu">Penerangan Jalan</option>
                <option value="fasum">Fasilitas Umum</option>
                <option value="ling">Lingkungan</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="fd">Kecamatan</label>
              <select className="select" id="fd">
                <option value="">Semua kecamatan</option>
                <option value="Klojen">Klojen</option>
                <option value="Lowokwaru">Lowokwaru</option>
                <option value="Blimbing">Blimbing</option>
                <option value="Sukun">Sukun</option>
                <option value="Kedungkandang">Kedungkandang</option>
                <option value="Singosari">Singosari</option>
                <option value="Batu">Batu</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="fs">Status</label>
              <select className="select" id="fs">
                <option value="">Semua status</option>
                <option value="diterima">Diterima</option>
                <option value="diproses">Diproses</option>
                <option value="selesai">Selesai</option>
              </select>
            </div>
            <button className="btn btn-primary" type="button" id="csv">
              <svg
                className="ic"
                data-i="download"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
              </svg>
              Unduh CSV
            </button>
          </div>
          <p
            className="small"
            id="cnt"
            style={{ marginBottom: 'var(--s1)' }}
            aria-live="polite"
          >
            12 dari 12 laporan contoh
          </p>
          <div className="twrap">
            <table className="tbl">
              <caption className="sr">Data laporan simulasi</caption>
              <thead>
                <tr>
                  <th data-k="id" aria-sort="none">
                    <button className="sortbtn" type="button">
                      ID
                    </button>
                  </th>
                  <th data-k="title" aria-sort="none">
                    <button className="sortbtn" type="button">
                      Judul
                    </button>
                  </th>
                  <th data-k="cat" aria-sort="none">
                    <button className="sortbtn" type="button">
                      Kategori
                    </button>
                  </th>
                  <th data-k="district" aria-sort="none">
                    <button className="sortbtn" type="button">
                      Kecamatan
                    </button>
                  </th>
                  <th data-k="date" aria-sort="descending">
                    <button className="sortbtn" type="button">
                      Tanggal
                    </button>
                  </th>
                  <th data-k="status" aria-sort="none">
                    <button className="sortbtn" type="button">
                      Status
                    </button>
                  </th>
                  <th data-k="ver" aria-sort="none">
                    <button className="sortbtn" type="button">
                      Verifikasi
                    </button>
                  </th>
                  <th data-k="dur" aria-sort="none">
                    <button className="sortbtn" type="button">
                      Durasi (hari)
                    </button>
                  </th>
                  <th data-k="over" aria-sort="none">
                    <button className="sortbtn" type="button">
                      Melewati target
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody id="rows">
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00458</a>
                  </td>
                  <td>Lampu taman kota padam di Taman Slamet</td>
                  <td>Penerangan Jalan</td>
                  <td>Klojen</td>
                  <td>26 Okt 2026</td>
                  <td>
                    <span className="badge b-warn">Diterima</span>
                  </td>
                  <td>Belum</td>
                  <td className="num">2</td>
                  <td>Tidak</td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00455</a>
                  </td>
                  <td>Lima lampu PJU mati di jalur Pandaan–Malang</td>
                  <td>Penerangan Jalan</td>
                  <td>Singosari</td>
                  <td>25 Okt 2026</td>
                  <td>
                    <span className="badge b-warn">Diterima</span>
                  </td>
                  <td>Belum</td>
                  <td className="num">3</td>
                  <td>Tidak</td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00449</a>
                  </td>
                  <td>
                    Pohon tua condong ke kabel listrik di Jl. Panglima Sudirman
                  </td>
                  <td>Lingkungan</td>
                  <td>Batu</td>
                  <td>22 Okt 2026</td>
                  <td>
                    <span className="badge b-warn">Diterima</span>
                  </td>
                  <td>Belum</td>
                  <td className="num">6</td>
                  <td>Tidak</td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00402</a>
                  </td>
                  <td>Tumpukan sampah di TPS dekat Pasar Blimbing</td>
                  <td>Kebersihan</td>
                  <td>Blimbing</td>
                  <td>18 Okt 2026</td>
                  <td>
                    <span className="badge b-info">Diproses</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">10</td>
                  <td>Tidak</td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00408</a>
                  </td>
                  <td>Halte rusak di Jl. Raya Dieng</td>
                  <td>Fasilitas Umum</td>
                  <td>Klojen</td>
                  <td>14 Okt 2026</td>
                  <td>
                    <span className="badge b-warn">Diterima</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">14</td>
                  <td>Tidak</td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00418</a>
                  </td>
                  <td>Lubang besar di Jl. Ijen depan SDN Kauman</td>
                  <td>Infrastruktur Jalan</td>
                  <td>Klojen</td>
                  <td>12 Okt 2026</td>
                  <td>
                    <span className="badge b-info">Diproses</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">16</td>
                  <td>
                    <span className="badge b-bad">Terlewat</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00391</a>
                  </td>
                  <td>Genangan air tiap hujan di Perumahan Tlogomas</td>
                  <td>Drainase</td>
                  <td>Lowokwaru</td>
                  <td>9 Okt 2026</td>
                  <td>
                    <span className="badge b-info">Diproses</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">19</td>
                  <td>
                    <span className="badge b-bad">Terlewat</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00386</a>
                  </td>
                  <td>Bau limbah dari selokan di Jl. Ahmad Yani</td>
                  <td>Lingkungan</td>
                  <td>Blimbing</td>
                  <td>6 Okt 2026</td>
                  <td>
                    <span className="badge b-info">Diproses</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">22</td>
                  <td>
                    <span className="badge b-bad">Terlewat</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan-selesai.html">JP-2026-00377</a>
                  </td>
                  <td>Saluran tersumbat sampah di Jl. Soekarno-Hatta</td>
                  <td>Drainase</td>
                  <td>Lowokwaru</td>
                  <td>3 Okt 2026</td>
                  <td>
                    <span className="badge b-ok">Selesai</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">7</td>
                  <td>Tidak</td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00339</a>
                  </td>
                  <td>Tong sampah publik hilang di Jl. Veteran</td>
                  <td>Kebersihan</td>
                  <td>Lowokwaru</td>
                  <td>30 Sep 2026</td>
                  <td>
                    <span className="badge b-ok">Selesai</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">7</td>
                  <td>Tidak</td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00351</a>
                  </td>
                  <td>Trotoar amblas di depan Alun-Alun Batu</td>
                  <td>Fasilitas Umum</td>
                  <td>Batu</td>
                  <td>29 Sep 2026</td>
                  <td>
                    <span className="badge b-info">Diproses</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">29</td>
                  <td>
                    <span className="badge b-bad">Terlewat</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="detail-laporan.html">JP-2026-00322</a>
                  </td>
                  <td>Jalan retak panjang di Jl. Raya Karanglo</td>
                  <td>Infrastruktur Jalan</td>
                  <td>Singosari</td>
                  <td>21 Sep 2026</td>
                  <td>
                    <span className="badge b-ok">Selesai</span>
                  </td>
                  <td>Ya</td>
                  <td className="num">7</td>
                  <td>Tidak</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="dsec" aria-labelledby="s6">
          <h2 id="s6">Metodologi</h2>
          <div className="meth">
            <div className="dp">
              <h3>Sumber data</h3>
              <ul>
                <li>
                  Seluruh angka dibuat untuk prototipe MIA 2026 dan bukan data
                  instansi mana pun.
                </li>
                <li>Angka total sama dengan beranda dan dashboard admin.</li>
                <li>
                  Tabel data memuat 12 laporan contoh yang sama dengan halaman
                  Jelajahi Laporan.
                </li>
              </ul>
            </div>
            <div className="dp">
              <h3>Definisi metrik</h3>
              <ul>
                <li>
                  <b>Tingkat penyelesaian:</b> laporan selesai dibagi total laporan
                  masuk.
                </li>
                <li>
                  <b>Waktu respons:</b> sejak laporan diterima sampai ditugaskan ke
                  petugas.
                </li>
                <li>
                  <b>Waktu penyelesaian:</b> sejak diterima sampai penyelesaian
                  diajukan.
                </li>
                <li>
                  <b>Melewati target:</b> belum selesai setelah 14 hari sejak
                  dilaporkan.
                </li>
                <li>
                  <b>Dikonfirmasi warga:</b> laporan selesai yang dibenarkan oleh
                  pelapor.
                </li>
              </ul>
            </div>
            <div className="dp">
              <h3>Cara perhitungan</h3>
              <ul>
                <li>Rata-rata dihitung dalam hari kalender.</li>
                <li>
                  Rata-rata per wilayah dan kategori dibobot jumlah laporan selesai.
                </li>
                <li>
                  Tren bulanan memakai tanggal laporan dan tanggal penyelesaian.
                </li>
                <li>
                  Laporan belum selesai adalah kumulatif masuk dikurangi kumulatif
                  selesai.
                </li>
              </ul>
            </div>
            <div className="dp">
              <h3>Keterbatasan prototipe</h3>
              <ul>
                <li>Data fiktif, statis, dan tidak diperbarui otomatis.</li>
                <li>Tidak terintegrasi dengan sistem pemerintah.</li>
                <li>Peta bersifat skematis dan bukan peta resmi.</li>
                <li>Jangan mengutip angka ini sebagai fakta.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}