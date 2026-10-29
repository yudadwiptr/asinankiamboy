import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, MapPin } from "lucide-react";
import { formatRupiah, TIKTOK_URL, TIKTOK_HANDLE } from "../data/asinanData";

const NAV_LINKS = [
  { label: "Isian Buah", href: "#hero-menu" },
  { label: "Keunggulan", href: "#ingredients" },
  { label: "Reviews", href: "#reviews" },
  { label: "Lokasi", href: "#location" },
];

export default function Navbar({ totalItems, totalPrice, onOpenCart, cartBump }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-7 lg:top-8 inset-x-4 sm:inset-x-9 lg:inset-x-12 z-30 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Top-Left Standalone Round Brand Logo (Strict aspect-square & zero mobile tap-box) */}
        <a
          href="#hero-menu"
          aria-label="Asinan Kiamboy Milanial"
          className="pointer-events-auto inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden select-none shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:outline-none [-webkit-tap-highlight-color:transparent]"
        >
          <img
            src="/assets/logo-asinan-cutout.png"
            onError={(e) => {
              e.currentTarget.src = "/assets/logo-asinan-kiamboy.png";
            }}
            alt="Logo Asinan Kiamboy Milanial"
            draggable={false}
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 aspect-square rounded-full object-cover select-none pointer-events-none"
          />
        </a>

        {/* Center Floating Glassmorphic Pill Navigation */}
        <nav
          aria-label="Main navigation"
          className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full bg-[#152717]/80 backdrop-blur-xl border border-[#FAF7F2]/18 p-1.5 shadow-[0_14px_34px_rgba(12,24,14,0.28)]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-xs lg:text-sm font-medium text-[#FAF7F2]/88 hover:text-[#1A2E1C] hover:bg-[#FAF7F2] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Top-Right Dark Cart Button + Counter Badge + Mobile Menu Trigger */}
        <div className="pointer-events-auto flex items-center gap-2">
          <motion.button
            type="button"
            onClick={onOpenCart}
            animate={cartBump ? { scale: [1, 1.12, 0.96, 1] } : { scale: 1 }}
            transition={{ duration: 0.38 }}
            className="relative inline-flex items-center gap-2.5 rounded-full bg-[#111F13] hover:bg-[#192D1C] text-[#FAF7F2] pl-4 pr-3 py-2.5 border border-[#FAF7F2]/18 shadow-[0_12px_30px_rgba(0,0,0,0.28)] cursor-pointer transition-colors"
            aria-label="Buka keranjang pesanan"
          >
            <ShoppingBag className="w-4 h-4 text-[#F77F00]" />
            <span className="hidden sm:inline text-xs font-semibold tracking-wide">
              {totalItems > 0 ? formatRupiah(totalPrice) : "Keranjang"}
            </span>

            {/* Item Counter Badge */}
            <span
              className={`inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-[11px] font-extrabold transition-colors ${
                totalItems > 0
                  ? "bg-gradient-to-r from-[#E63946] to-[#F77F00] text-[#FAF7F2] shadow-sm"
                  : "bg-[#FAF7F2]/15 text-[#FAF7F2]"
              }`}
            >
              {totalItems}
            </span>
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#152717]/85 backdrop-blur-xl border border-[#FAF7F2]/18 text-[#FAF7F2] shadow-lg"
            aria-label="Toggle menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Pill */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-2.5 rounded-2xl bg-[#152717]/95 backdrop-blur-xl border border-[#FAF7F2]/15 p-3 shadow-2xl text-[#FAF7F2]"
          >
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#FAF7F2]/8 hover:bg-[#FAF7F2] hover:text-[#1D3320] text-xs font-semibold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-2.5 pt-2.5 border-t border-[#FAF7F2]/10 flex items-center justify-between text-[11px] text-[#FAF7F2]/70 px-1">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F77F00]" />
                Katulampa, Kota Bogor
              </span>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7B267] hover:underline font-bold"
              >
                TikTok {TIKTOK_HANDLE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
