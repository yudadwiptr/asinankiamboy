import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Truck,
  PhoneCall,
  Navigation,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  STORE_INFO,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_REVIEWS_URL,
} from "../data/asinanData";

export default function LocationSection({ onOpenCart }) {
  const directWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Kak Asinan Kiamboy Milanial! Saya ingin tanya stok & pesan asinan segar hari ini."
  )}`;

  return (
    <section id="location" className="pt-8 pb-20 sm:pb-24 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Store Location Card (Left 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-[#233D26]/12 p-7 sm:p-10 shadow-[0_18px_50px_rgba(27,46,30,0.06)] flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#233D26] text-[#FAF7F2] px-3.5 py-1 text-xs font-bold tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-[#F77F00]" />
                  Lokasi Outlet Resmi
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8EC] text-[#1D6F34] px-3 py-1 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% Segar Setiap Hari
                </span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#1B2E1E] tracking-tight mb-3">
                {STORE_INFO.brandName}
              </h2>

              <p className="text-sm sm:text-base text-[#3A5A3E] leading-relaxed mb-6 max-w-xl">
                {STORE_INFO.address}
              </p>

              {/* Service Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="rounded-2xl bg-[#FAF7F2] p-4 border border-[#233D26]/8">
                  <div className="flex items-center gap-2.5 text-[#1B2E1E] font-bold text-sm mb-1">
                    <Clock className="w-4 h-4 text-[#E63946]" />
                    <span>Pickup Langsung di Outlet</span>
                  </div>
                  <p className="text-xs text-[#3A5A3E] leading-relaxed">
                    Pesan via WhatsApp dan ambil langsung pesanan segar yang sudah dikemas rapi di lokasi kami.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FAF7F2] p-4 border border-[#233D26]/8">
                  <div className="flex items-center gap-2.5 text-[#1B2E1E] font-bold text-sm mb-1">
                    <Truck className="w-4 h-4 text-[#F77F00]" />
                    <span>Pengiriman Area Bogor</span>
                  </div>
                  <p className="text-xs text-[#3A5A3E] leading-relaxed">
                    Tersedia pengiriman lokal sekitar Kota Bogor & Kabupaten Bogor via kurir instant/same-day.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#233D26]/10">
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#233D26] hover:bg-[#192D1C] text-[#FAF7F2] px-5 py-3 text-xs sm:text-sm font-bold shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#F7B267]" />
                <span>Buka Petunjuk Arah Maps</span>
              </a>

              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] hover:bg-[#233D26]/10 text-[#1B2E1E] border border-[#233D26]/15 px-5 py-3 text-xs sm:text-sm font-bold transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#E63946]" />
                <span>WA: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </motion.div>

          {/* Direct Order CTA Card (Right 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#E63946] via-[#EB5428] to-[#F77F00] text-[#FAF7F2] p-7 sm:p-10 shadow-[0_22px_50px_rgba(230,57,70,0.28)] relative overflow-hidden flex flex-col justify-between"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-white/12 blur-2xl"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/18 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Siap Santap Hari Ini
              </span>

              <h3 className="font-serif-display text-3xl sm:text-4xl font-semibold leading-[1.12] mb-3">
                Ngidam yang Segar, Asam, Manis & Pedas?
              </h3>
              <p className="text-sm sm:text-base text-[#FAF7F2]/90 leading-relaxed mb-6">
                Tentukan jumlah box asinan komplit pesananmu di keranjang dan kirim otomatis ke WhatsApp kami dalam hitungan detik.
              </p>
            </div>

            <div className="relative z-10 space-y-3">
              <button
                type="button"
                onClick={onOpenCart}
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#152717] hover:bg-[#1E3621] text-[#FAF7F2] px-6 py-4 text-sm sm:text-base font-bold shadow-xl transition-all cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-[#8CE99A]" />
                <span>Buka Keranjang & Pesan via WhatsApp</span>
              </button>

              <p className="text-center text-xs text-[#FAF7F2]/85 font-medium">
                Respon cepat · {STORE_INFO.hours}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Framed Footer */}
        <footer className="mt-14 pt-8 border-t border-[#233D26]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3A5A3E]">
          <div className="flex items-center gap-2.5 font-semibold text-[#1B2E1E]">
            <img
              src="/assets/logo-asinan-cutout.png"
              onError={(e) => {
                e.currentTarget.src = "/assets/logo-asinan-kiamboy.png";
              }}
              alt="Logo Asinan Kiamboy Milanial"
              className="w-8 h-8 rounded-full object-contain shadow-xs"
            />
            <span className="font-serif-display text-base">
              Asinan Kiamboy Milanial
            </span>
            <span className="text-[#3A5A3E]/50">•</span>
            <span>Katulampa, Kota Bogor</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 font-medium">
            <a href="#hero-menu" className="hover:text-[#E63946] transition-colors">
              Isian Buah
            </a>
            <a href="#ingredients" className="hover:text-[#E63946] transition-colors">
              Keunggulan
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E63946] transition-colors"
            >
              Google Reviews (5.0 ★)
            </a>
            <span>© {new Date().getFullYear()} Asinan Kiamboy Milanial</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

