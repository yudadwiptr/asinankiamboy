import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Plus,
  Check,
  ShoppingBag,
  Star,
  CheckCircle2,
  Flame,
  ArrowRight,
} from "lucide-react";
import {
  MANGO_SAGO_PRODUCT,
  MANGO_SAGO_LAYERS,
  formatRupiah,
} from "../data/asinanData";

export default function MangoSagoSection({ onAddMangoSago, onOpenCart }) {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddMangoSago();
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <section id="mango-sago" className="py-16 sm:py-24 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F77F00]/12 text-[#D96B00] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest mb-4 border border-[#F77F00]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#F77F00]" />
              Menu Baru Favorit
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B2E1E] tracking-tight leading-[1.12]">
              Creamy Mango Sago{" "}
              <span className="italic font-normal text-[#F77F00]">
                Milanial
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#3A5A3E] max-w-md leading-relaxed">
            Dessert mangga manis creamy dingin berpadu kuah susu lembut, sagu
            mutiara kenyal, dan limpahan keju cheddar gurih. Penutup paling pas
            setelah asinan!
          </p>
        </div>

        {/* Big Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Visual Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#FFF9EE] via-[#FFF3D6] to-[#FFE8B8] border border-[#F77F00]/25 p-7 sm:p-10 shadow-[0_20px_50px_rgba(247,127,0,0.12)] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#F77F00]/18 blur-3xl"
            />

            <div>
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E63946] text-[#FAF7F2] px-3 py-1 text-xs font-bold shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-[#FAF7F2]" />
                  Best Dessert Match
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#233D26] text-[#FAF7F2] px-3 py-1 text-xs font-bold">
                  Rp 35.000 / Box
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 backdrop-blur-xs text-[#8A4F00] px-3 py-1 text-xs font-semibold border border-[#F77F00]/20">
                  Topping Keju Melimpah
                </span>
              </div>

              {/* Central Packshot & Pedestal */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                <motion.img
                  src="/assets/hero-mango-sago-cutout.png"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/card-mango-sago.jpg";
                  }}
                  alt="Creamy Mango Sago Milanial Box"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-[220px] sm:w-[270px] md:w-[300px] h-auto object-contain drop-shadow-[0_22px_36px_rgba(180,100,0,0.32)] relative z-10"
                />

                {/* Stylized Plinth Base */}
                <div className="w-[190px] sm:w-[240px] md:w-[270px] h-4 rounded-[100%] bg-[#8A4F00]/20 blur-[4px] -mt-3" />
              </div>
            </div>

            {/* Price Pill & Action CTA */}
            <div className="mt-6 pt-6 border-t border-[#8A4F00]/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A4F00]">
                  Harga Spesial
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1B2E1E]">
                    {formatRupiah(MANGO_SAGO_PRODUCT.price)}
                  </span>
                  <span className="text-xs font-semibold text-[#8A4F00]">
                    / Box Thinwall Higienis
                  </span>
                </div>
              </div>

              <motion.button
                type="button"
                onClick={handleAdd}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-[#FAF7F2] shadow-[0_12px_28px_rgba(247,127,0,0.35)] transition-all cursor-pointer ${
                  justAdded
                    ? "bg-[#2B8A3E]"
                    : "bg-gradient-to-r from-[#F77F00] via-[#E85D04] to-[#E63946] hover:brightness-105"
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Mango Sago Masuk Keranjang!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Pesan Mango Sago</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Layer Highlights & Real Kitchen Photos (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Real Kitchen Photos Proof Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-3xl bg-white border border-[#233D26]/10 p-6 shadow-[0_14px_36px_rgba(27,46,30,0.06)]"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96B00] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  Foto Asli Dari Dapur Kami
                </span>
                <span className="rounded-full bg-[#233D26]/8 text-[#233D26] px-2.5 py-0.5 text-[11px] font-bold">
                  Fresh Daily
                </span>
              </div>

              {/* 2 Real Photos Grid */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#233D26]/10 shadow-xs group">
                  <img
                    src="/assets/mango-sago-fresh.jpg"
                    alt="Mango Sago topping keju melimpah asli"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/60 backdrop-blur-xs text-white text-[9.5px] font-semibold px-2 py-0.5 rounded-lg text-center truncate">
                    Topping Keju Melimpah
                  </span>
                </div>

                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#233D26]/10 shadow-xs group">
                  <img
                    src="/assets/mango-sago-fridge.jpg"
                    alt="Mango Sago dingin di kulkas siap kirim"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/60 backdrop-blur-xs text-white text-[9.5px] font-semibold px-2 py-0.5 rounded-lg text-center truncate">
                    Dingin Siap Santap
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#3A5A3E] leading-relaxed">
                Disimpan dalam chiller dingin dan disegel rapi (food-grade), siap
                dinikmati langsung saat cuaca panas Bogor.
              </p>
            </motion.div>

            {/* 4 Layers Composition Accordion / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MANGO_SAGO_LAYERS.map((layer, idx) => (
                <div
                  key={layer.id}
                  className="rounded-2xl bg-white p-4 border border-[#233D26]/10 shadow-xs flex items-start gap-3"
                >
                  <span className="text-2xl shrink-0 p-1.5 rounded-xl bg-[#FAF7F2] border border-[#233D26]/8">
                    {layer.icon}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#1B2E1E] leading-tight mb-1">
                      {layer.title}
                    </h4>
                    <p className="text-[11px] text-[#3A5A3E] leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Perfect Pairing Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-[#233D26] to-[#2F5234] text-[#FAF7F2] p-4.5 flex items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 shrink-0 aspect-square rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  🍹
                </span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#FAF7F2]">
                    Kombo Juara: Asinan + Mango Sago
                  </h5>
                  <p className="text-[11px] text-[#FAF7F2]/80">
                    Segar pedas asam dari asinan, ditutup manis lumer dari mango sago!
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenCart}
                className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#FAF7F2] text-[#1B2E1E] hover:bg-[#F77F00] hover:text-[#FAF7F2] px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Lihat Keranjang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
