'use client';

import React, { useState } from 'react';

export default function BuatLaporanPage() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [cat, setCat] = useState<string>('jalan');
  const [title, setTitle] = useState<string>(
    'Lubang besar di Jl. Ijen depan SDN Kauman'
  );
  const [desc, setDesc] = useState<string>(
    'Lubang sekitar 80 cm di depan gerbang sekolah membahayakan pengendara motor.'
  );
  const [date, setDate] = useState<string>('2026-10-12');
  const [prov, setProv] = useState<string>('Jawa Timur');
  const [city, setCity] = useState<string>('Kota Malang');
  const [dist, setDist] = useState<string>('Klojen');
  const [addr, setAddr] = useState<string>(
    'Jl. Ijen, depan gerbang SDN Kauman'
  );
  const [priv, setPriv] = useState<string>('anonymous');
  const [agree, setAgree] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="main">
      <div className="wrap">
        <div className="bh">
          <ol className="crumbs">
            <li>
              <a href="index.html">Beranda</a>
            </li>
            <li aria-current="page">Buat Laporan</li>
          </ol>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Buat Laporan</h1>
          <p>
            Isi dalam empat langkah. Ini prototipe: laporan tidak dikirim ke
            layanan pemerintah mana pun dan tidak disimpan.
          </p>
        </div>

        {/* Stepper Header */}
        <ol className="stepper" aria-label="Langkah pengisian">
          <li className={step > 1 ? 'ok' : step === 1 ? 'cur' : ''} aria-current={step === 1 ? 'step' : undefined}>
            <b>{step > 1 ? '✓' : '1'}</b>
            <span>Informasi masalah</span>
          </li>
          <li className={step > 2 ? 'ok' : step === 2 ? 'cur' : ''} aria-current={step === 2 ? 'step' : undefined}>
            <b>{step > 2 ? '✓' : '2'}</b>
            <span>Lokasi</span>
          </li>
          <li className={step > 3 ? 'ok' : step === 3 ? 'cur' : ''} aria-current={step === 3 ? 'step' : undefined}>
            <b>{step > 3 ? '✓' : '3'}</b>
            <span>Dokumentasi</span>
          </li>
          <li className={step === 4 ? 'cur' : ''} aria-current={step === 4 ? 'step' : undefined}>
            <b>4</b>
            <span>Konfirmasi</span>
          </li>
        </ol>

        <div className="form-grid">
          <div>
            {!submitted ? (
              <form className="card" id="f" noValidate onSubmit={handleSubmit}>
                {/* Step 1: Informasi masalah */}
                {step === 1 && (
                  <section className="panel">
                    <h2 tabIndex={-1}>Informasi masalah</h2>
                    <p className="lead">
                      Ceritakan masalahnya dengan singkat dan jelas.
                    </p>
                    <div className="errsum" id="sum1" role="alert"></div>
                    <div className="fields">
                      <div className="field">
                        <label htmlFor="cat">Kategori</label>
                        <select
                          className="select"
                          id="cat"
                          value={cat}
                          onChange={(e) => setCat(e.target.value)}
                        >
                          <option value="">Pilih kategori</option>
                          <option value="jalan">Infrastruktur Jalan</option>
                          <option value="bersih">Kebersihan</option>
                          <option value="drain">Drainase</option>
                          <option value="lampu">Penerangan Jalan</option>
                          <option value="fasum">Fasilitas Umum</option>
                          <option value="ling">Lingkungan</option>
                        </select>
                        <span className="err" id="e-cat"></span>
                      </div>
                      <div className="field">
                        <label htmlFor="title">Judul laporan</label>
                        <input
                          className="input"
                          id="title"
                          maxLength={100}
                          placeholder="Contoh: Lampu jalan mati di Jl. Ijen"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <span className="err" id="e-title"></span>
                      </div>
                      <div className="field">
                        <label htmlFor="desc">Deskripsi</label>
                        <textarea
                          className="textarea"
                          id="desc"
                          placeholder="Apa yang terjadi, sejak kapan, dan apa dampaknya?"
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        />
                        <span className="err" id="e-desc"></span>
                      </div>
                      <div className="field">
                        <label htmlFor="date">Tanggal kejadian</label>
                        <input
                          className="input"
                          id="date"
                          type="date"
                          max="2026-10-28"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                        <span className="err" id="e-date"></span>
                      </div>
                    </div>
                    <div className="actions">
                      <span />
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => setStep(2)}
                      >
                        Lanjut ke lokasi
                      </button>
                    </div>
                  </section>
                )}

                {/* Step 2: Lokasi */}
                {step === 2 && (
                  <section className="panel">
                    <h2>Lokasi</h2>
                    <p className="lead">
                      Wilayah demonstrasi dibatasi pada Malang Raya.
                    </p>
                    <div className="errsum" id="sum2" role="alert"></div>
                    <div className="fields">
                      <div className="field">
                        <label htmlFor="prov">Provinsi</label>
                        <select
                          className="select"
                          id="prov"
                          value={prov}
                          onChange={(e) => setProv(e.target.value)}
                        >
                          <option value="">Pilih provinsi</option>
                          <option value="Jawa Timur">Jawa Timur</option>
                        </select>
                        <span className="err" id="e-prov"></span>
                      </div>
                      <div className="two">
                        <div className="field">
                          <label htmlFor="city">Kota atau kabupaten</label>
                          <select
                            className="select"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          >
                            <option value="">Pilih kota atau kabupaten</option>
                            <option value="Kota Malang">Kota Malang</option>
                            <option value="Kabupaten Malang">
                              Kabupaten Malang
                            </option>
                            <option value="Kota Batu">Kota Batu</option>
                          </select>
                          <span className="err" id="e-city"></span>
                        </div>
                        <div className="field">
                          <label htmlFor="dist">Kecamatan</label>
                          <select
                            className="select"
                            id="dist"
                            value={dist}
                            onChange={(e) => setDist(e.target.value)}
                          >
                            <option value="">Pilih kecamatan</option>
                            <option value="Klojen">Klojen</option>
                            <option value="Lowokwaru">Lowokwaru</option>
                            <option value="Blimbing">Blimbing</option>
                            <option value="Sukun">Sukun</option>
                            <option value="Kedungkandang">Kedungkandang</option>
                          </select>
                          <span className="err" id="e-dist"></span>
                        </div>
                      </div>
                      <div className="field">
                        <label htmlFor="addr">Alamat atau patokan</label>
                        <input
                          className="input"
                          id="addr"
                          placeholder="Contoh: Jl. Ijen, depan gerbang SDN Kauman"
                          value={addr}
                          onChange={(e) => setAddr(e.target.value)}
                        />
                        <span className="err" id="e-addr"></span>
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => setStep(1)}
                      >
                        Kembali
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => setStep(3)}
                      >
                        Lanjut ke dokumentasi
                      </button>
                    </div>
                  </section>
                )}

                {/* Step 3: Dokumentasi */}
                {step === 3 && (
                  <section className="panel">
                    <h2>Dokumentasi</h2>
                    <p className="lead">
                      Foto membantu petugas memverifikasi laporan.
                    </p>
                    <div className="errsum" id="sum3" role="alert"></div>
                    <div className="drop">
                      <label htmlFor="files">
                        <b>Pilih foto dari perangkat</b>
                      </label>
                      <input
                        id="files"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                      />
                      <ul className="reqs">
                        <li>Format JPG, PNG, atau WebP</li>
                        <li>Maksimal 5 MB per foto</li>
                        <li>Maksimal 5 foto</li>
                      </ul>
                    </div>
                    <p
                      className="err"
                      id="e-files"
                      role="alert"
                      tabIndex={-1}
                      style={{ marginTop: '8px' }}
                    ></p>
                    <p className="small" id="fcount">
                      0 dari 5 foto
                    </p>
                    <ul className="prevs" id="prevs"></ul>
                    <div className="actions">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => setStep(2)}
                      >
                        Kembali
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => setStep(4)}
                      >
                        Lanjut ke konfirmasi
                      </button>
                    </div>
                  </section>
                )}

                {/* Step 4: Konfirmasi */}
                {step === 4 && (
                  <section className="panel">
                    <h2>Konfirmasi</h2>
                    <p className="lead">Periksa kembali sebelum mengirim.</p>
                    <div className="errsum" id="sum4" role="alert"></div>
                    <dl className="sumlist" id="sumlist">
                      <dt>Kategori</dt>
                      <dd>Infrastruktur Jalan</dd>
                      <dt>Judul</dt>
                      <dd>{title || 'Lubang besar di Jl. Ijen depan SDN Kauman'}</dd>
                      <dt>Deskripsi</dt>
                      <dd>{desc || 'Lubang sekitar 80 cm di depan gerbang sekolah membahayakan pengendara motor.'}</dd>
                      <dt>Tanggal kejadian</dt>
                      <dd>12 Okt 2026</dd>
                      <dt>Lokasi</dt>
                      <dd>
                        {addr ? `${addr}, ${dist}, ${city}, ${prov}` : 'Jl. Ijen, depan gerbang SDN Kauman, Klojen, Kota Malang, Jawa Timur'}
                      </dd>
                      <dt>Foto</dt>
                      <dd>2 berkas</dd>
                    </dl>
                    <fieldset className="f">
                      <legend>Privasi nama pelapor</legend>
                      <label className="opt">
                        <input
                          type="radio"
                          name="priv"
                          checked={priv === 'anonymous'}
                          onChange={() => setPriv('anonymous')}
                        />
                        <div>
                          <b>Samarkan nama saya</b>
                          <span>
                            Disarankan. Yang tampil hanya “Pelapor warga”.
                          </span>
                        </div>
                      </label>
                      <label className="opt">
                        <input
                          type="radio"
                          name="priv"
                          checked={priv === 'named'}
                          onChange={() => setPriv('named')}
                        />
                        <div>
                          <b>Tampilkan nama saya</b>
                          <span>Nama akan terlihat di halaman laporan.</span>
                        </div>
                      </label>
                    </fieldset>
                    <label className="opt">
                      <input
                        type="checkbox"
                        id="agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                      />
                      <div>
                        <b>Saya menyatakan informasi ini benar</b>
                        <span>
                          Ini prototipe: laporan tidak dikirim ke layanan mana pun.
                        </span>
                      </div>
                    </label>
                    <p
                      className="err"
                      id="e-agree"
                      style={{ marginTop: '8px' }}
                    ></p>
                    <div className="actions">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => setStep(3)}
                      >
                        Kembali
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Kirim laporan (simulasi)
                      </button>
                    </div>
                  </section>
                )}
              </form>
            ) : (
              /* Success Confirmation Box */
              <div className="card ok-box" id="ok">
                <span className="ok-ic">
                  <svg
                    className="ic"
                    data-i="check"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                </span>
                <h2 tabIndex={-1}>Simulasi selesai</h2>
                <p className="track" id="trk">
                  JP-2026-00419
                </p>
                <p className="lead" style={{ margin: 0 }}>
                  Nomor ini hanya contoh. Laporan Anda tidak dikirim ke layanan
                  pemerintah dan tidak disimpan.
                </p>
                <div
                  className="cta-row"
                  style={{
                    display: 'flex',
                    gap: 'var(--s1)',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <a className="btn btn-primary" href="laporan.html">
                    Lihat laporan lain
                  </a>
                  <a className="btn btn-secondary" href="index.html">
                    Kembali ke beranda
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Guide & Map Preview */}
          <aside className="aside" aria-label="Panduan">
            <div className="card">
              <h2>Pratinjau lokasi</h2>
              <div id="mp">
                <svg
                  viewBox="0 0 800 520"
                  role="img"
                  aria-label="Pratinjau lokasi pada peta skematis"
                >
                  <rect width="800" height="520" fill="#EEF2F6" />
                  <g fill="#D8E8D3">
                    <rect x="40" y="60" width="150" height="110" rx="14" />
                    <rect x="560" y="400" width="190" height="80" rx="14" />
                    <rect x="330" y="215" width="70" height="55" rx="10" />
                  </g>
                  <path
                    d="M0 360C150 330 230 400 380 360S620 300 800 340"
                    fill="none"
                    stroke="#BCD6EE"
                    strokeWidth="22"
                  />
                  <g fill="none" stroke="#fff" strokeLinecap="round">
                    <path d="M0 150H800" strokeWidth="12" />
                    <path d="M270 0V520" strokeWidth="12" />
                    <path d="M0 60 800 300" strokeWidth="9" />
                    <path d="M520 0V520" strokeWidth="7" />
                    <path d="M0 280H800" strokeWidth="7" />
                    <path d="M120 520 400 0" strokeWidth="6" />
                  </g>
                  <g
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  >
                    <path d="M150 0V210L400 250L640 160V0" />
                    <path d="M80 380 400 310 700 380" />
                  </g>
                  <text
                    x="416"
                    y="18.2"
                    textAnchor="middle"
                    fontFamily="Inter,sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#475569"
                    stroke="#EEF2F6"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Singosari
                  </text>
                  <text
                    x="128"
                    y="46.800000000000004"
                    textAnchor="middle"
                    fontFamily="Inter,sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#475569"
                    stroke="#EEF2F6"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Batu
                  </text>
                  <text
                    x="288"
                    y="114.4"
                    textAnchor="middle"
                    fontFamily="Inter,sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#475569"
                    stroke="#EEF2F6"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Lowokwaru
                  </text>
                  <text
                    x="512"
                    y="114.4"
                    textAnchor="middle"
                    fontFamily="Inter,sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#475569"
                    stroke="#EEF2F6"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Blimbing
                  </text>
                  <text
                    x="400"
                    y="223.6"
                    textAnchor="middle"
                    fontFamily="Inter,sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#475569"
                    stroke="#EEF2F6"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Klojen
                  </text>
                  <text
                    x="256"
                    y="322.40000000000003"
                    textAnchor="middle"
                    fontFamily="Inter,sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#475569"
                    stroke="#EEF2F6"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Sukun
                  </text>
                  <text
                    x="576"
                    y="312"
                    textAnchor="middle"
                    fontFamily="Inter,sans-serif"
                    fontSize="14"
                    fontWeight="600"
                    fill="#475569"
                    stroke="#EEF2F6"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    Kedungkandang
                  </text>
                  <rect
                    x="16"
                    y="474"
                    width="318"
                    height="30"
                    rx="8"
                    fill="#fff"
                    stroke="#E2E8F0"
                  />
                  <text
                    x="30"
                    y="494"
                    fontFamily="Inter,sans-serif"
                    fontSize="13"
                    fill="#475569"
                  >
                    Wilayah demonstrasi: Malang Raya (peta skematis)
                  </text>
                  {dist && (
                    <g className="mk" data-id="new" transform="translate(400 260)">
                      <circle r="26" fill="transparent" />
                      <circle
                        className="halo"
                        r="22"
                        fill="#D97706"
                        fillOpacity=".2"
                        stroke="#D97706"
                        strokeWidth="2"
                      />
                      <circle
                        r="12"
                        fill="#D97706"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                      <circle r="4" fill="#fff" />
                    </g>
                  )}
                </svg>
              </div>
              <p className="small" id="mpn" style={{ marginTop: '8px' }}>
                {dist
                  ? `Penanda berada di pusat kecamatan ${dist} (perkiraan).`
                  : 'Pilih kecamatan untuk menampilkan penanda.'}
              </p>
            </div>
            <div className="card">
              <h2>Setelah dikirim</h2>
              <p className="small">
                Pada layanan nyata, laporan akan diverifikasi, ditugaskan, lalu
                dicatat di Jejak Penanganan.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}