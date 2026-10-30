import type React from 'react';
import Sidebar from './_components/Sidebar';
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--ff-b",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--ff-h",
  display: "swap",
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body>
        <div className="ad">
          <Sidebar />
          <div>{children}</div>
        </div>
      </body >
    </html>
  );
}