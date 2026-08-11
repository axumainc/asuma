"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Search,
  Mail,
  Bell,
  Sparkles,
  Rocket,
  Globe,
  Clock,
  Check,
  ChevronDown,
  Send,
  Shield,
  MessageSquare,
  Layers,
  Cpu,
  FileCode,
  Star,
  Crown,
  Coins,
} from "lucide-react";

const WA_NUMBER = "6281227856788";

function waLink(text: string) {
  return `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(
    text
  )}&type=phone_number&app_absent=0`;
}

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Tools", href: "/scrape" },
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Fitur", href: "#features" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const STEPS = [
  {
    label: "Langkah 01",
    title: "Tempel URL Target",
    desc: "Cukup salin dan tempel alamat URL halaman website yang ingin Anda kloning. Sistem kami mendukung protokol HTTP/HTTPS untuk halaman arahan, portofolio, dokumentasi, dan lainnya.",
    icon: Globe,
    accent: "bg-[#FFF5EB] border-[#FFEDD5] text-[#F59E0B]",
  },
  {
    label: "Langkah 02",
    title: "Inlining Aset & Render DOM",
    desc: "Sistem kami merender DOM target secara dinamis dengan engine browser headless cloud, mengunduh seluruh stylesheet, skrip, font web, dan gambar eksternal, lalu menyusunnya menjadi file HTML mandiri.",
    icon: Cpu,
    accent: "bg-[#EFF6FF] border-[#DBEAFE] text-[#3B82F6]",
  },
  {
    label: "Langkah 03",
    title: "Visual Edit & Ekspor",
    desc: "Setelah proses kloning selesai, Anda dapat langsung melakukan pratinjau interaktif, mengedit teks secara visual di browser, melihat source code yang bersih, atau membuka Visual Editor berbasis Monaco Editor.",
    icon: FileCode,
    accent: "bg-[#ECFDF5] border-[#D1FAE5] text-[#10B981]",
  },
];

const FEATURES = [
  {
    title: "Inlining Aset Otomatis",
    desc: "Semua stylesheet, skrip, gambar, dan font eksternal diunduh dan disematkan langsung (inline) ke dalam file HTML tunggal.",
    icon: FileCode,
  },
  {
    title: "Monaco Editor (VS Code Core)",
    desc: "Edit source code HTML & CSS hasil kloning Anda secara mendalam menggunakan engine Monaco Editor yang andal langsung di browser.",
    icon: FileCode,
  },
  {
    title: "Visual Click & Edit",
    desc: "Klik elemen teks atau tombol apa pun di halaman pratinjau untuk mengubah tulisan atau gambar secara langsung tanpa menyentuh baris kode.",
    icon: Layers,
  },
  {
    title: "Kloning Secepat Kilat",
    desc: "Engine browser cloud serverless kami memproses render DOM, inlining aset, dan kompresi HTML dalam rata-rata waktu kurang dari 5 detik.",
    icon: Clock,
  },
  {
    title: "Riwayat Kloning Aman",
    desc: "Aktivitas kloning tersimpan otomatis dan aman di database cloud pribadi Anda untuk diunduh atau diedit kembali kapan saja.",
    icon: Shield,
  },
  {
    title: "Pratinjau Multi-Device",
    desc: "Pratinjau halaman hasil kloning Anda secara responsif di berbagai resolusi layar desktop, tablet, maupun mobile secara akurat.",
    icon: Globe,
  },
];

const TESTIMONIALS = [
  {
    name: "Setyadi Nugroho",
    role: "Lead Front-end Developer, Bandung",
    quote:
      "PixelScraper membantu tim kami menduplikasi landing page portofolio klien dengan sangat akurat. Proses inlining aset berjalan mulus, menghemat waktu coding kami hingga 80%.",
  },
  {
    name: "Rian Hermawan",
    role: "Full-stack Developer, Jakarta",
    quote:
      "Proses scrape HTML dari platform ini luar biasa. Semua script, stylesheet, dan aset eksternal di-inline secara otomatis dan rapi, menghasilkan satu file HTML tunggal yang langsung siap di-upload.",
  },
  {
    name: "Amanda Widjaja",
    role: "UI/UX Engineer, Surabaya",
    quote:
      "Terintegrasi langsung dengan Monaco Editor (VS Code) membuat penyesuaian CSS hasil kloning menjadi sangat gampang. Hasil scraping bersih dari link eksternal yang rusak.",
  },
];

const PRICING = [
  {
    name: "1 Token",
    price: "Rp 10.000",
    desc: "Pilihan uji coba hemat untuk kloning instan satu halaman.",
    features: [
      "1 Kloning Website Sukses",
      "Akses Source Code Lengkap",
      "Dukungan Aset CSS & JS Inline",
      "Aktif Selamanya (Tanpa Kedaluwarsa)",
    ],
    highlight: false,
  },
  {
    name: "10 Token",
    price: "Rp 85.000",
    desc: "Lebih hemat untuk proyek kecil, hemat Rp 15.000 dibanding beli satuan.",
    features: [
      "10 Kloning Website Sukses",
      "Akses Source Code Lengkap",
      "Dukungan Aset CSS & JS Inline",
      "Aktif Selamanya (Tanpa Kedaluwarsa)",
      "Hemat hingga 15%",
    ],
    highlight: true,
    badge: "Paling Populer",
  },
  {
    name: "25 Token",
    price: "Rp 225.000",
    desc: "Pilihan paling populer bagi developer, hemat Rp 25.000 dengan performa tinggi.",
    features: [
      "25 Kloning Website Sukses",
      "Akses Source Code Lengkap",
      "Dukungan Aset CSS & JS Inline",
      "Aktif Selamanya (Tanpa Kedaluwarsa)",
      "Lebih hemat & efisien",
      "Prioritas Pemrosesan Antrean",
    ],
    highlight: false,
  },
  {
    name: "VIP Unlimited",
    price: "Rp 2.500.000",
    desc: "Akses mutlak tanpa batasan token. Kloning situs web sebanyak apa pun.",
    features: [
      "Kloning Tanpa Batas (Unlimited)",
      "Akses Source Code Lengkap",
      "Dukungan Aset CSS & JS Inline",
      "Prioritas Pemrosesan Tertinggi",
      "Status VIP Badge pada Profil",
      "Akses Fitur Premium Mendatang",
    ],
    highlight: false,
    vip: true,
    badge: "Akses Utama",
  },
];

const FAQS = [
  {
    q: "Bagaimana cara kerja PixelScraper?",
    a: "PixelScraper menggunakan browser headless cloud untuk memuat halaman website target secara penuh, mengeksekusi Javascript, mengunduh seluruh aset eksternal (CSS, gambar, font, skrip), lalu merangkum dan menyatukannya menjadi satu file HTML mandiri (inline).",
  },
  {
    q: "Apakah file HTML hasil kloning bisa digunakan langsung?",
    a: "Sangat bisa! Karena semua aset disematkan secara inline (CSS diletakkan di dalam tag style, gambar diubah ke Base64, dan skrip dikelompokkan), file HTML tersebut bersifat self-contained. Anda tinggal menyimpannya dan membuka file tersebut di browser mana saja secara offline maupun online.",
  },
  {
    q: "Bagaimana sistem token di PixelScraper bekerja?",
    a: "Setiap satu kloning website yang sukses akan memotong saldo akun Anda sebanyak 1 Token. Transaksi kloning yang gagal atau error tidak akan memotong token Anda. Anda dapat membeli token tambahan di halaman Harga dan menukarkannya melalui Redeem Kode.",
  },
  {
    q: "Bagaimana cara mengedit halaman yang sudah berhasil dikloning?",
    a: "Anda dapat menggunakan Visual Editor bawaan kami untuk mengedit teks secara langsung di preview halaman. Untuk pengeditan lanjutan, Anda bisa membuka Visual Editor Monaco (VS Code Core) yang menampilkan source code lengkap dengan fitur formatting dan sinkronisasi pratinjau real-time.",
  },
  {
    q: "Apakah data riwayat kloning saya aman?",
    a: "Ya, 100% aman. Seluruh riwayat kloning Anda disimpan di database cloud aman kami menggunakan otentikasi Supabase. Anda dapat menghapus data riwayat Anda kapan saja secara permanen.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(4);
  const [cloneUrl, setCloneUrl] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Halo Admin, saya ${contactForm.name} (${contactForm.email}).\nSubjek: ${contactForm.subject}\nPesan: ${contactForm.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  function handleCloneSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cloneUrl) return;
    alert(`Memulai kloning untuk: ${cloneUrl}`);
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-6 left-4 right-4 lg:left-0 lg:right-0 z-40 mx-auto bg-[#1A1A1A]/95 backdrop-blur-md text-white rounded-full px-6 lg:px-8 py-3 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.05)_inset] border border-white/10 w-[95%] xl:w-full max-w-5xl">
        <div className="flex items-center shrink-0">
          <a href="#" className="flex items-center space-x-2">
            <span className="w-7 h-7 rounded-[8px] bg-white/10 mr-2 flex items-center justify-center text-xs font-bold">
              PS
            </span>
            <span className="font-bold tracking-tight text-sm lg:text-base text-white">
              PixelScraper
            </span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3.5 text-[12.5px] xl:text-[13.5px] font-semibold text-gray-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-2.5 py-1.5 rounded-[8px] transition-all hover:text-white hover:bg-white/5 whitespace-nowrap ${
                link.label === "Home" ? "text-white font-bold bg-white/10" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button className="text-[13px] font-semibold text-gray-300 hover:text-white transition-colors px-2 bg-transparent border-0 cursor-pointer">
            Masuk
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full text-[13px] font-bold hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-sm border-0 cursor-pointer">
            Daftar
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Buka Menu"
          className="flex lg:hidden items-center justify-center h-8.5 w-8.5 rounded-[8px] bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer border-0"
        >
          {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-30 lg:hidden bg-[#1A1A1A]/98 backdrop-blur-md text-white rounded-3xl p-5 shadow-2xl border border-white/10">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-white/10 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-1 flex flex-col">
        <div className="font-sans antialiased text-[#3a3a3c] bg-[#f6f3ec] overflow-x-hidden min-h-screen pb-0 pt-16">
          {/* Hero */}
          <section className="relative pt-20 md:pt-23 pb-0 px-4 min-h-[55vh] md:min-h-[68vh] flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="max-w-[850px] mx-auto z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/60 backdrop-blur-md border border-white p-0.5 pr-2.5 rounded-full mb-6 shadow-sm cursor-pointer hover:bg-white/80 transition-all hover:scale-[1.02]">
                <span className="bg-[#2D2D2F] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Baru
                </span>
                <span className="text-[10.5px] font-bold text-gray-900">Engine Cloner |</span>
                <span className="text-[10.5px] text-gray-400 font-semibold">
                  Coba Kloning Instant &rsaquo;
                </span>
              </div>
              <h1 className="text-[1.65rem] sm:text-[2.2rem] md:text-[3.8rem] leading-[1.1] font-bold tracking-[-0.03em] mb-3 md:mb-4 text-[#2D2D2F]">
                Replikasi Halaman
                <br className="hidden sm:block" />
                <span className="text-[#3a3a3c]/70">Website Secara Instan</span>
              </h1>
              <p className="text-[0.82rem] sm:text-[0.95rem] md:text-[1rem] text-[#6b6b6f] max-w-[640px] mx-auto mb-6 md:mb-8 leading-relaxed font-medium px-2 sm:px-0">
                Masukkan tautan target. Sistem kami akan merender halaman secara mendalam,
                menyematkan seluruh CSS, JS, dan gambar secara langsung (inline), lalu memberikan
                satu file HTML utuh yang siap pakai.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto">
                <a
                  href="#dashboard-section"
                  className="w-full sm:w-auto bg-[#2D2D2F] text-white px-6 py-2.5 rounded-full font-bold text-[13.5px] hover:bg-[#3A3A3C] hover:-translate-y-0.5 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#4ecdc4]" />
                  Mulai Kloning Gratis
                </a>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto bg-white/70 backdrop-blur-sm text-[#2D2D2F] px-6 py-2.5 rounded-full font-bold text-[13.5px] hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-sm border border-white/60 text-center"
                >
                  Pelajari Cara Kerja
                </a>
              </div>
            </div>
          </section>

          {/* Workspace dashboard preview */}
          <div className="px-4 md:px-8">
            <div id="dashboard-section" className="relative w-full max-w-[1040px] z-20 mx-auto mt-16 scroll-mt-24">
              <div className="dashboard-border relative z-10 mx-auto w-full">
                <div className="bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row min-h-[520px] w-full border border-gray-100/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                  <div className="w-full md:w-[220px] bg-[#FCFCFA] border-r border-gray-100 p-5 hidden md:flex flex-col text-left">
                    <div className="flex items-center justify-center gap-2.5 font-bold text-[15px] mb-10 mt-2 px-2 text-gray-900 tracking-tight">
                      <span className="w-5 h-5 rounded-[6px] bg-gray-900 text-white flex items-center justify-center text-[9px]">
                        PS
                      </span>
                      PixelScraper
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">
                      Main Workspace
                    </p>
                    <nav className="flex flex-col gap-1.5">
                      <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-[13px] transition text-left border bg-white text-gray-900 shadow-sm border-gray-100">
                        <div className="bg-gray-50 p-1.5 rounded-lg border border-gray-100/50">
                          <Layers className="w-4 h-4 text-gray-700" />
                        </div>
                        Overview
                      </button>
                      <button className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 px-3 py-2.5 rounded-xl font-semibold text-[13px] border border-transparent hover:border-gray-100 transition text-left">
                        <div className="p-1.5">
                          <Clock className="w-4 h-4" />
                        </div>
                        Riwayat Kloning
                      </button>
                      <button className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 px-3 py-2.5 rounded-xl font-semibold text-[13px] border border-transparent hover:border-gray-100 transition text-left">
                        <div className="p-1.5">
                          <Coins className="w-4 h-4" />
                        </div>
                        Harga Token
                      </button>
                    </nav>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-white to-[#FDFDFD] flex flex-col relative overflow-hidden text-left">
                    <header className="flex justify-between items-center px-4 sm:px-8 py-3.5 sm:py-5 border-b border-gray-50">
                      <div className="relative w-full flex-1 max-w-[140px] sm:max-w-[240px] md:max-w-[320px]">
                        <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Cari tautan..."
                          className="bg-[#F8F8F8] border border-gray-100 rounded-full py-2 pl-10 pr-4 text-[13px] w-full focus:outline-none text-gray-600 font-medium"
                        />
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        <button className="text-[12px] font-bold text-gray-600 hover:text-black transition">
                          Login Akun
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-500 hover:bg-gray-50 transition">
                          <Mail className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-500 hover:bg-gray-50 transition">
                          <Bell className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </header>

                    <div className="px-4 sm:px-8 pb-6 sm:pb-8 pt-4 sm:pt-6 flex-1 flex flex-col overflow-y-auto">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-end items-center gap-4 mb-6">
                        <div className="text-center sm:text-left w-full">
                          <h2 className="text-[24px] font-bold mb-1 tracking-tight text-gray-900">
                            Workspace Kloning
                          </h2>
                          <p className="text-[13px] text-gray-500 font-medium">
                            Replikasi halaman website target instan dengan render aset inline
                            secara otomatis.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-100 p-6 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] mb-6">
                        <h3 className="text-sm font-bold text-gray-800 mb-3">Mulai Kloning Baru</h3>
                        <form
                          onSubmit={handleCloneSubmit}
                          className="w-full flex flex-col sm:flex-row gap-3"
                        >
                          <input
                            type="url"
                            value={cloneUrl}
                            onChange={(e) => setCloneUrl(e.target.value)}
                            placeholder="Masukkan URL website, cth: https://apple.com"
                            required
                            className="flex-1 h-11 text-sm px-4 bg-gray-50 border border-gray-100 focus:border-gray-200 focus:bg-white text-gray-800 rounded-xl focus:outline-none transition-colors"
                          />
                          <button
                            type="submit"
                            className="h-11 px-6 text-sm text-white font-bold border-0 rounded-full cursor-pointer bg-[#2D2D2F] shadow-sm transition-all w-full sm:w-auto hover:bg-black/90"
                          >
                            Mulai Kloning
                          </button>
                        </form>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {[
                          { label: "Total Kloning", value: "1.2M+", tag: "Online" },
                          { label: "Avg Speed", value: "2.8s", tag: "Optimal" },
                          { label: "Success Rate", value: "99.1%", tag: "99%" },
                          { label: "Sisa Token", value: "1 Free", tag: "Aktif" },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="bg-white border border-gray-100 rounded-[20px] p-4.5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative text-left"
                          >
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2.5">
                              {stat.label}
                            </span>
                            <div className="text-[20px] md:text-[22px] font-extrabold text-gray-900 tracking-tight">
                              {stat.value}
                            </div>
                            <div className="flex items-center gap-1 text-[9px] font-bold mt-1.5">
                              <span className="text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-100">
                                {stat.tag}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="relative flex-1">
                        <h3 className="font-bold text-[13px] mb-3 text-gray-800">
                          Kloning Terakhir Anda
                        </h3>
                        <div className="p-8 border border-dashed border-gray-250 rounded-[20px] text-center text-gray-450 text-xs font-semibold bg-white/20">
                          Silakan masuk untuk melihat riwayat kloning Anda.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <section
            id="how-it-works"
            className="py-16 md:py-28 px-4 md:px-6 overflow-hidden bg-white/40 border-t border-gray-100 scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <span className="inline-flex items-center gap-2 bg-[#2D2D2F] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                  <Sparkles className="w-3 h-3 text-[#4ecdc4]" />
                  Cara Kerja
                </span>
                <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold tracking-[-0.03em] text-[#111] mb-4">
                  Tiga Langkah Kloning
                </h2>
                <p className="text-gray-500 max-w-[540px] mx-auto text-[0.9rem] sm:text-[1.05rem] font-medium leading-relaxed px-2 sm:px-0">
                  Dari menempelkan tautan hingga mengunduh kode — hanya butuh beberapa detik untuk
                  menduplikasi halaman website secara sempurna.
                </p>
              </div>

              <div className="flex flex-col gap-12 md:gap-20">
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className={`flex flex-col ${
                        i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                      } items-center gap-12 lg:gap-16`}
                    >
                      <div className="flex-1 max-w-[480px] text-left">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm ${step.accent}`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-gray-450 uppercase tracking-widest block mb-0.5">
                              {step.label}
                            </span>
                            <h3 className="text-[1.5rem] font-bold text-gray-900 tracking-tight leading-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6 text-justify">
                          {step.desc}
                        </p>
                      </div>
                      <div className="flex-1 max-w-[520px] w-full relative">
                        <div className="bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 w-full h-52 flex items-center justify-center">
                          <Icon className="w-16 h-16 text-gray-200" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features */}
          <section
            id="features"
            className="py-16 md:py-28 px-4 md:px-6 bg-[#1c1a17] text-white scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-white/10 text-white/80 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 border border-white/10">
                  Fitur Unggulan
                </span>
                <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold tracking-[-0.03em] mb-4 text-white">
                  Kenapa Memilih Kami?
                </h2>
                <p className="text-gray-400 max-w-[500px] mx-auto text-[0.9rem] sm:text-[1.05rem] font-medium leading-relaxed px-2 sm:px-0">
                  Semua alat yang Anda butuhkan untuk mereplikasi, memodifikasi, dan mengekspor
                  halaman website secara instan dan mandiri.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {FEATURES.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-[24px] p-7 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 group text-left"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-white/[0.1] transition">
                        <Icon className="w-5 h-5 text-white/70" />
                      </div>
                      <h3 className="text-[1.15rem] font-bold mb-2 text-white">{f.title}</h3>
                      <p className="text-gray-400 text-[14px] font-medium leading-relaxed text-justify">
                        {f.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section
            id="testimonials"
            className="py-16 md:py-28 px-4 md:px-6 bg-white/40 border-t border-gray-100 scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#2D2D2F] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                  Testimoni Pengguna
                </span>
                <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold tracking-[-0.03em] text-[#111] mb-4">
                  Disukai oleh Developer &amp; Designer
                </h2>
                <p className="text-gray-500 max-w-[500px] mx-auto text-[0.9rem] sm:text-[1.05rem] font-medium leading-relaxed px-2 sm:px-0">
                  Bergabunglah dengan ribuan pengguna yang mempercepat workflow pengembangan web
                  mereka menggunakan PixelScraper.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.name}
                    className="bg-white rounded-[28px] border border-gray-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-0.5 mb-5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                      <p className="text-[14.5px] text-gray-600 font-medium leading-relaxed mb-6 text-justify">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[14px] text-gray-900 leading-tight">
                          {t.name}
                        </p>
                        <p className="text-[12px] text-gray-400 font-medium mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section
            id="pricing"
            className="py-16 md:py-28 px-4 md:px-6 bg-[#f6f3ec] border-t border-gray-150 scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto space-y-12 text-gray-800">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="inline-block bg-[#2D2D2F] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Harga Paket
                </span>
                <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold tracking-[-0.03em] text-[#111] leading-tight">
                  Pilih Paket Kekuatan Kloning Anda
                </h2>
                <p className="text-gray-500 text-sm sm:text-base font-semibold leading-relaxed">
                  Dapatkan saldo token tambahan atau buka akses VIP tanpa batas untuk mengkloning
                  halaman website apa pun secara instan dan mandiri.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">
                {PRICING.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col justify-between p-5 md:p-6 rounded-[24px] border bg-white transition-all duration-300 group hover:-translate-y-1 text-left ${
                      plan.vip
                        ? "border-pink-500/50 shadow-[0_12px_32px_rgba(236,72,153,0.06)]"
                        : plan.highlight
                        ? "border-[#2D2D2F] shadow-[0_12px_32px_rgba(0,0,0,0.06)] ring-1 ring-[#2D2D2F]/20"
                        : "border-gray-150 hover:border-gray-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
                    }`}
                  >
                    {plan.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md select-none whitespace-nowrap ${
                          plan.vip ? "bg-pink-500 text-white" : "bg-[#2D2D2F] text-white"
                        }`}
                      >
                        {plan.vip ? (
                          <Crown className="h-3 w-3 text-white" />
                        ) : (
                          <Sparkles className="h-3 w-3 text-[#4ecdc4] animate-pulse" />
                        )}
                        {plan.badge}
                      </span>
                    )}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h3 className="text-md font-bold text-gray-900">{plan.name}</h3>
                          {plan.vip ? (
                            <Crown className="h-5 w-5 text-pink-500" />
                          ) : (
                            <Coins className="h-5 w-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                          )}
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                            {plan.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-505 font-semibold min-h-[32px] md:min-h-[40px] leading-relaxed">
                          {plan.desc}
                        </p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                      <ul className="space-y-3">
                        {plan.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-xs text-gray-650 font-medium"
                          >
                            <Check
                              className={`h-4 w-4 shrink-0 mt-0.5 ${
                                plan.vip
                                  ? "text-pink-500"
                                  : plan.highlight
                                  ? "text-[#4ecdc4]"
                                  : "text-emerald-500"
                              }`}
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 md:pt-8">
                      <a
                        href={waLink(
                          `Halo Admin, saya ingin membeli paket ${plan.name} seharga ${plan.price} untuk PixelScraper. Email akun saya: [Email Anda]`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 h-10 px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${
                          plan.vip
                            ? "bg-pink-600 text-white hover:bg-pink-500"
                            : plan.highlight
                            ? "bg-[#2D2D2F] text-white hover:bg-[#3A3A3C]"
                            : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200"
                        }`}
                      >
                        Beli {plan.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 sm:p-6 border border-gray-150/70 bg-white shadow-sm rounded-[24px] flex items-start gap-4 max-w-3xl mx-auto text-left">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-xl border border-amber-100/50 shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Cara Melakukan Transaksi Pembelian
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold leading-relaxed text-justify">
                    Setelah mengklik tombol pembelian di atas, Anda akan diarahkan ke WhatsApp
                    kami. Admin akan mengirimkan detail pembayaran. Setelah pembayaran selesai,
                    Admin akan langsung membagikan{" "}
                    <span className="font-bold text-gray-900 bg-amber-50/50 px-1.5 py-0.5 rounded border border-amber-100/30">
                      Kode Token unik
                    </span>{" "}
                    yang bisa Anda inputkan di halaman Home untuk menambahkan token.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="py-16 md:py-28 px-4 md:px-6 bg-white/50 border-t border-gray-150 scroll-mt-24"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-[#2D2D2F] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                  FAQ
                </span>
                <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold tracking-[-0.03em] text-[#111] mb-4">
                  Pertanyaan Umum
                </h2>
              </div>
              <div className="flex flex-col gap-3 text-left">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={faq.q}
                      className="bg-white rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full text-left px-4 md:px-7 py-4 md:py-5 flex justify-between items-center gap-3 md:gap-4 hover:bg-gray-50 focus:outline-none transition-colors"
                      >
                        <span className="text-[13px] md:text-[15px] font-bold text-gray-900">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-52 pb-5 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="px-4 md:px-7 text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed text-justify">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="py-16 md:py-28 px-4 md:px-6 bg-white/30 border-t border-gray-150 scroll-mt-24"
          >
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="inline-block bg-[#2D2D2F] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Hubungi Kami
                </span>
                <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold tracking-[-0.03em] text-[#111] leading-tight">
                  Hubungi Tim Dukungan PixelScraper
                </h2>
                <p className="text-gray-500 text-sm sm:text-base font-semibold leading-relaxed">
                  Punya kendala teknis, pertanyaan seputar kemitraan, atau transaksi pembelian
                  token? Kami siap membantu.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800 text-left">
                <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      Saluran Bantuan Langsung
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                      Silakan hubungi kami via WhatsApp Admin untuk respon instan atau kirim pesan
                      resmi via email dukungan.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-150 bg-white shadow-sm">
                      <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-150 shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          WhatsApp Admin
                        </h4>
                        <p className="text-sm font-bold text-gray-900">+62 812-2785-6788</p>
                        <p className="text-[11px] text-gray-400 font-semibold">
                          Respon cepat dalam hitungan menit (Jam Kerja)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-150 bg-white shadow-sm">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-150 shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Email Hubungan
                        </h4>
                        <p className="text-sm font-bold text-gray-900">Depzni@gmail.com</p>
                        <p className="text-[11px] text-gray-400 font-semibold">
                          Tanggapan tertulis resmi dalam 24 jam
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-150 bg-white shadow-sm">
                      <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl border border-amber-150 shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Jam Operasional
                        </h4>
                        <p className="text-sm font-bold text-gray-900">
                          Setiap Hari 08:00 - 17:00 WIB
                        </p>
                        <p className="text-[11px] text-gray-400 font-semibold">
                          Respon cepat selama jam aktif operasional
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl border border-rose-200/60 bg-rose-50/30 text-rose-850 flex items-start gap-3">
                    <Shield className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs font-bold leading-none text-rose-900">
                        Peringatan Penting
                      </p>
                      <p className="text-[11px] font-semibold leading-relaxed text-rose-600/90">
                        Harap tidak melakukan spam pengiriman pesan. Kirimkan pesan sekali saja
                        dan tunggu dengan sabar sampai pesan dibalas oleh admin.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 bg-white rounded-[28px] border border-gray-150 p-6 md:p-8 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Kirim Pesan Langsung</h3>
                  <p className="text-xs text-gray-500 font-semibold mb-6">
                    Formulir di bawah ini akan dihubungkan secara otomatis ke WhatsApp Admin.
                  </p>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                          Nama Anda
                        </label>
                        <input
                          type="text"
                          placeholder="Nama Lengkap"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm((f) => ({ ...f, name: e.target.value }))
                          }
                          className="w-full h-11 text-xs px-4 bg-gray-55 border border-gray-250 focus:border-gray-300 text-gray-800 rounded-xl focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                          Email Akun
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm((f) => ({ ...f, email: e.target.value }))
                          }
                          className="w-full h-11 text-xs px-4 bg-gray-55 border border-gray-250 focus:border-gray-300 text-gray-800 rounded-xl focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                        Subjek Hubungan
                      </label>
                      <input
                        type="text"
                        placeholder="contoh: Masalah Pembelian Token"
                        required
                        value={contactForm.subject}
                        onChange={(e) =>
                          setContactForm((f) => ({ ...f, subject: e.target.value }))
                        }
                        className="w-full h-11 text-xs px-4 bg-gray-55 border border-gray-250 focus:border-gray-300 text-gray-800 rounded-xl focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                        Isi Pesan Anda
                      </label>
                      <textarea
                        placeholder="Tuliskan keluhan atau pertanyaan Anda secara detail di sini..."
                        rows={5}
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className="w-full text-xs p-4 bg-gray-55 border border-gray-250 focus:border-gray-300 text-gray-800 rounded-xl focus:outline-none transition-colors resize-none leading-relaxed"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full h-11 text-xs mt-6 cursor-pointer bg-[#2D2D2F] hover:bg-[#3A3A3C] text-white font-bold rounded-full transition-all border-0 flex items-center justify-center gap-2 shadow-md"
                    >
                      <Send className="w-4.5 h-4.5 text-[#4ecdc4]" />
                      <span>Kirim Pesan via WhatsApp</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1c1a17] text-white pt-12 md:pt-20 pb-8 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-[1.5rem] sm:text-[2.2rem] md:text-[3.2rem] font-extrabold tracking-[-0.03em] mb-4 text-white">
            Siap Kloning Website Anda?
          </h2>
          <p className="text-gray-400 max-w-[480px] mx-auto text-[14px] md:text-[16px] font-medium mb-8 leading-relaxed">
            Mulai replikasi halaman website target Anda dalam hitungan detik. Cepat, instan, dan
            aset tersaji secara inline otomatis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto sm:max-w-none">
            <a
              href="/register"
              className="w-full sm:w-auto bg-white text-[#1c1a17] px-8 py-3.5 rounded-full font-bold text-[14px] hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-sm text-center"
            >
              Daftar Akun Gratis
            </a>
            <a
              href="/price"
              className="w-full sm:w-auto bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-[14px] hover:bg-white/15 transition-all border border-white/10 text-center"
            >
              Lihat Harga Token
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 text-left">
            <div>
              <div className="flex items-center gap-2.5 font-bold text-[16px] mb-4 text-white">
                <span className="w-6 h-6 rounded-[6px] bg-white/10 flex items-center justify-center text-[9px]">
                  PS
                </span>
                PixelScraper
              </div>
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed text-justify">
                Platform replikasi dan pengklonan halaman website secara instan dan mandiri,
                dilengkapi asset inline otomatis dan editor visual.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[13px] mb-4 text-white/80 uppercase tracking-wider">
                Fitur Utama
              </h4>
              <ul className="flex flex-col gap-2.5">
                {["Replikasi HTML", "Asset Inlining", "Live Visual Editor", "Monaco Editor Integration"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition text-[13px] font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[13px] mb-4 text-white/80 uppercase tracking-wider">
                Navigasi
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Home", href: "#" },
                  { label: "Tools (Kloning)", href: "/scrape" },
                  { label: "Riwayat Kloning", href: "/history" },
                  { label: "Harga Token", href: "/price" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition text-[13px] font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[13px] mb-4 text-white/80 uppercase tracking-wider">
                Legalitas
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Syarat & Ketentuan", href: "/terms" },
                  { label: "Kebijakan Privasi", href: "/privacy" },
                  { label: "Hubungi Kami", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition text-[13px] font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-[12px] text-gray-500 font-medium">
            © 2026 PixelScraper. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
