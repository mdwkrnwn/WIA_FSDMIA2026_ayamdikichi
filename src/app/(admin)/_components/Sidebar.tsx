'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      href: '/admin',
      label: 'Dashboard',
      icon: (
        <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
        </svg>
      ),
    },
    {
      href: '/admin/laporan',
      label: 'Manajemen Laporan',
      icon: (
        <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
          <path d="M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6" />
        </svg>
      ),
    },
    {
      href: '/admin/verifikasi',
      label: 'Verifikasi',
      icon: (
        <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6zM9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      href: '/admin/penanganan',
      label: 'Penanganan',
      icon: (
        <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
          <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.700 2.700-2.300-.7-.7-2.300z" />
        </svg>
      ),
    },
    {
      href: '/admin/analitik',
      label: 'Analitik',
      icon: (
        <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
          <path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3" />
        </svg>
      ),
    },
  ];

  return (
    <aside className={`sb ${isOpen ? 'open' : ''}`} id="sb">
      <div className="sb-top">
        <Link className="logo" href="/">
          <svg aria-hidden="true" viewBox="0 0 32 32">
            <rect fill="#2563EB" height="32" rx="8" width="32" />
            <path
              d="M9 22l5-6 4 3 5-8"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
            />
            <circle cx="9" cy="22" fill="#fff" r="2" />
            <circle cx="23" cy="11" fill="#fff" r="2" />
          </svg>
          JEJAKPUBLIK
        </Link>
        <button
          aria-controls="snav"
          aria-expanded={isOpen}
          aria-label="Buka menu admin"
          className="sb-toggle"
          id="sbt"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <nav aria-label="Menu admin" id="snav">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a aria-disabled="true" href="#top" title="Belum tersedia di prototipe">
              <svg aria-hidden="true" className="ic" viewBox="0 0 24 24">
                <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4" />
              </svg>
              Pengaturan<small>Segera</small>
            </a>
          </li>
        </ul>
      </nav>
      <p className="sb-note">
        Panel demonstrasi. Seluruh data adalah simulasi dan tidak terhubung dengan layanan pemerintah.
      </p>
    </aside>
  );
}