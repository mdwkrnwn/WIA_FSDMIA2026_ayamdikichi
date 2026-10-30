'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  searchValue?: string;
}

export default function Header({
  title,
  searchPlaceholder = 'Cari laporan di halaman laporan',
  onSearchChange,
  searchValue,
}: HeaderProps) {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      router.push(`/admin/laporan?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <header className="tb">
      <h1>{title}</h1>
      <span className="demo" style={{ margin: 0 }}>
        Data simulasi · per 28 Okt 2026
      </span>
      <div className="field">
        <label className="sr" htmlFor="sq">
          Cari laporan
        </label>
        <input
          className="input"
          id="sq"
          type="search"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Link className="btn btn-secondary btn-sm" href="/admin">
        Kembali ke dashboard
      </Link>
      <span className="chip-user">
        <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
          <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 20c1-4 4-6 8-6s7 2 8 6" />
        </svg>
        Admin Demo
      </span>
    </header>
  );
}