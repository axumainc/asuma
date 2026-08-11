import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PixelScraper | Deep Website Cloner",
  description:
    "Masukkan tautan target. Sistem kami akan merender halaman, menyematkan semua CSS & JS secara langsung (inline), dan memberikan satu file HTML utuh yang siap digunakan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#f6f3ec] font-sans antialiased text-[#3a3a3c]">
        {children}
      </body>
    </html>
  );
}
