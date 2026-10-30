import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "JEJAKPUBLIK - Laporkan Masalahnya. Pantau Prosesnya. Buktikan Hasilnya.",
  description:
    "Setiap laporan warga punya jejak penanganan yang terbuka: siapa menangani, kapan, dan bukti apa yang ditunjukkan sebelum laporan dinyatakan selesai.",
};

export default function RootLayout({
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}