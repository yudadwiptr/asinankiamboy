import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Check,
  Flame,
  Sparkles,
  Star,
  Clock,
} from "lucide-react";
import {
  ASINAN_INGREDIENTS,
  PRODUCT_PACKAGE,
  SPICE_LEVELS,
  TIKTOK_URL,
  TIKTOK_HANDLE,
  formatRupiah,
} from "../data/asinanData";

export default function HeroShowcase({
  activeIndex,
  setActiveIndex,
  onAddToCart,
}) {
  const [selectedSpice, setSelectedSpice] = useState(SPICE_LEVELS[0]);
  const [justAdded, setJustAdded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const wheelLockRef = useRef(false);
  const touchStartXRef = useRef(null);

  const total = ASINAN_INGREDIENTS.length;
  const activeIngredient = ASINAN_INGREDIENTS[activeIndex] || ASINAN_INGREDIENTS[0];

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const stepCarousel = useCallback(
    (dir) => {
      setActiveIndex((prev) => (prev + dir + total) % total);
    },
    [setActiveIndex, total]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (window.scrollY > 550) return;
      if (e.key === "ArrowRight") stepCarousel(1);
      if (e.key === "ArrowLeft") stepCarousel(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [stepCarousel]);

  const handleStageWheel = (e) => {
    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);
    if (absX > 14 || (absY > 18 && absY < 140)) {
      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;
      const delta = absX > absY ? e.deltaX : e.deltaY;
      stepCarousel(delta > 0 ? 1 : -1);
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 360);
    }
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 38) {
      stepCarousel(diffX > 0 ? 1 : -1);
    }
    touchStartXRef.current = null;
  };

  const handleQuickAdd = () => {
    onAddToCart(selectedSpice);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1300);
  };

  // Symmetric 6-slot arc (-2.5, -1.5, -0.5, +0.5, +1.5, +2.5)
  const getArcPosition = (index) => {
    const rel = (index - activeIndex + total) % total;
    const slotOrder = [-0.5, 0.5, 1.5, 2.5, -2.5, -1.5];
    return slotOrder[rel] ?? 0;
  };

  return (
    <section
      id="hero-menu"
      className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#1D3520] via-[#233D26] to-[#2F4E33] text-[#FAF7F2] shadow-[0_25px_70px_rgba(20,38,22,0.22)] pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* Subtle organic grain & reactive ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-70" />
      <motion.div
        aria-hidden="true"
        animate={{
          background: `radial-gradient(circle at 50% 45%, ${activeIngredient.glowColor}, transparent 62%)`,
        }}
        transition={{ duration: 0.7 }}
        className="pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -left-36 w-96 h-96 rounded-full bg-[#3A5A3E]/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-28 w-[28rem] h-[28rem] rounded-full bg-[#F77F00]/12 blur-3xl"
      />

      {/* Top Social-Proof Pills with plenty of bottom margin so cards NEVER collide */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#FAF7F2]/15 px-3.5 py-1 text-[11px] sm:text-xs font-medium text-[#FAF7F2]/90">
          <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
          5.0 Rating Google (70+ Ulasan Asli)
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#FAF7F2]/15 px-3.5 py-1 text-[11px] sm:text-xs font-medium text-[#FAF7F2]/90">
          <Clock className="w-3.5 h-3.5 text-[#8CE99A]" />
          Dibuat Segar Setiap Hari
        </span>
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2]/12 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#1B2E1E] backdrop-blur-md border border-[#FAF7F2]/20 px-3.5 py-1 text-[11px] sm:text-xs font-semibold transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
          <span>TikTok {TIKTOK_HANDLE}</span>
        </a>
      </div>

      {/* CENTRAL INTERACTIVE INGREDIENT ARC & ASINAN BOX STAGE */}
      <div
        onWheel={handleStageWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Spacious Stage Container so top cards have generous headroom */}
        <div className="relative w-full h-[395px] sm:h-[475px] md:h-[520px] flex items-end justify-center">
          {/* Decorative orbital arc dashed line */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 420"
            className="pointer-events-none absolute top-14 sm:top-16 w-[340px] sm:w-[620px] md:w-[740px] h-auto opacity-20 text-[#FAF7F2]"
          >
            <path
              d="M 70 360 A 330 270 0 0 1 730 360"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
          </svg>

          {/* Left / Right Step Buttons */}
          <button
            type="button"
            onClick={() => stepCarousel(-1)}
            aria-label="Isian sebelumnya"
            className="absolute left-0 sm:left-4 md:left-8 bottom-24 sm:bottom-32 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF7F2]/12 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#1D3520] backdrop-blur-md border border-[#FAF7F2]/20 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => stepCarousel(1)}
            aria-label="Isian selanjutnya"
            className="absolute right-0 sm:right-4 md:right-8 bottom-24 sm:bottom-32 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF7F2]/12 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#1D3520] backdrop-blur-md border border-[#FAF7F2]/20 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 6 CURVED FLOATING INGREDIENT CARDS (ISIAN DALAM 1 BOX) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {ASINAN_INGREDIENTS.map((item, idx) => {
              const slot = getArcPosition(idx);
              const isActive = idx === activeIndex;

              const angleDeg = slot * (isMobile ? 29 : 30);
              const angleRad = (angleDeg * Math.PI) / 180;
              const rx = isMobile ? 136 : 338;
              const ry = isMobile ? 138 : 208;

              // Positive y-offset shifts the arc downward cleanly away from top badges
              const x = Math.sin(angleRad) * rx;
              const y =
                -Math.cos(angleRad) * ry +
                (isMobile ? 42 : 66) -
                (isActive ? 8 : 0);
              const rotate = isActive ? 0 : slot * (isMobile ? 11 : 13);
              const scale = isActive
                ? 1.1
                : Math.abs(slot) < 1
                ? 0.97
                : Math.abs(slot) < 2
                ? 0.9
                : 0.83;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  initial={false}
                  animate={{
                    x,
                    y,
                    rotate,
                    scale,
                    opacity: 1,
                    zIndex: isActive ? 18 : Math.round(16 - Math.abs(slot) * 2),
                  }}
                  whileHover={{
                    scale: isActive ? 1.14 : 1.04,
                    y: y - 6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    mass: 0.9,
                  }}
                  className={`pointer-events-auto group absolute w-[68px] h-[68px] sm:w-[96px] sm:h-[96px] md:w-[112px] md:h-[112px] rounded-2xl bg-[#FAF7F2] p-1.5 sm:p-2 shadow-[0_18px_38px_rgba(10,22,12,0.38)] cursor-pointer transition-shadow focus:outline-none ${
                    isActive
                      ? "ring-3 ring-[#F77F00] shadow-[0_22px_48px_rgba(247,127,0,0.35)]"
                      : "ring-1 ring-[#FAF7F2]/60 hover:ring-2 hover:ring-[#FAF7F2]"
                  }`}
                  aria-label={`Lihat isian ${item.name}`}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden bg-[#FAF7F2] relative flex items-center justify-center">
                    <img
                      src={item.cardImage}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-108"
                      loading="eager"
                    />
                  </div>

                  {/* Ingredient Name Pill at Bottom of Card */}
                  <span
                    className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[8.5px] sm:text-[10px] font-bold shadow-sm transition-colors ${
                      isActive
                        ? "bg-[#1A2E1C] text-[#FAF7F2]"
                        : "bg-[#FAF7F2] text-[#233D26] border border-[#233D26]/10"
                    }`}
                  >
                    {item.shortIngredient}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* CENTERPIECE: SIGNATURE TRANSPARENT BOX + STYLIZED BASE */}
          <div className="relative z-20 flex flex-col items-center pb-2">
            <div className="relative flex flex-col items-center">
              <motion.img
                src="/assets/hero-asinan-cutout.png"
                onError={(e) => {
                  e.currentTarget.src = "/assets/hero-asinan-box.png";
                }}
                alt="Asinan Kiamboy Milanial Box Komplit"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[198px] sm:w-[250px] md:w-[278px] h-auto object-contain drop-shadow-[0_24px_32px_rgba(8,18,10,0.55)] relative z-20"
              />

              {/* Stylized Showcase Pedestal Base */}
              <div className="relative -mt-4 sm:-mt-5 z-10 flex flex-col items-center">
                <div className="w-[186px] sm:w-[240px] md:w-[270px] h-5 sm:h-6 rounded-[100%] bg-gradient-to-b from-[#FAF7F2] to-[#E5DEC9] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] border border-[#FAF7F2]/70 relative flex items-center justify-center">
                  <div className="w-[82%] h-2.5 rounded-[100%] bg-[#182B1A]/35 blur-[3px]" />
                </div>
                <div className="w-[162px] sm:w-[210px] md:w-[238px] h-4 sm:h-5 -mt-2.5 rounded-b-3xl bg-gradient-to-r from-[#C8BFA6] via-[#EAE3D2] to-[#BFB59B] shadow-[0_16px_30px_rgba(7,16,9,0.55)] border-b-2 border-[#F77F00]/40" />
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE INGREDIENT HIGHLIGHT + ORDER BOX KOMPLIT */}
        <div className="relative z-20 mt-4 max-w-xl mx-auto text-center flex flex-col items-center">
          {/* Carousel Pagination Dots */}
          <div className="flex items-center gap-1.5 mb-3">
            {ASINAN_INGREDIENTS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Lihat isian ${item.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-7 bg-[#F77F00]"
                    : "w-1.5 bg-[#FAF7F2]/30 hover:bg-[#FAF7F2]/60"
                }`}
              />
            ))}
          </div>

          {/* Animated Highlight of Selected Ingredient Inside the Box */}
          <div className="min-h-[92px] sm:min-h-[96px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIngredient.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2]/12 border border-[#FAF7F2]/18 px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F7B267] mb-1.5">
                  <Sparkles className="w-3 h-3" />
                  Isian Dalam Box · {activeIngredient.role}
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FAF7F2] mb-1">
                  {activeIngredient.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#FAF7F2]/80 max-w-md leading-relaxed px-2">
                  {activeIngredient.tagline}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Preference Pills (All Rp 35.000 Komplit!) */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 px-2">
            {SPICE_LEVELS.map((spice) => {
              const isSelected = selectedSpice.id === spice.id;
              return (
                <button
                  key={spice.id}
                  type="button"
                  onClick={() => setSelectedSpice(spice)}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#FAF7F2] text-[#1D3520] shadow-md scale-[1.03]"
                      : "bg-[#FAF7F2]/10 text-[#FAF7F2]/80 hover:bg-[#FAF7F2]/20 border border-[#FAF7F2]/12"
                  }`}
                >
                  {spice.id === "extra" && (
                    <Flame className="w-3 h-3 text-[#E63946] fill-[#E63946]" />
                  )}
                  <span>{spice.label}</span>
                </button>
              );
            })}
          </div>

          {/* Price Tag Pill (Rp 35.000 / Box Komplit) + Add to Order CTA */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] text-[#1B2E1E] px-5 py-3 shadow-lg border border-[#FAF7F2]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3A5A3E]">
                1 Box Komplit
              </span>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#1B2E1E]">
                {formatRupiah(PRODUCT_PACKAGE.price)}
              </span>
            </div>

            <motion.button
              type="button"
              onClick={handleQuickAdd}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-[#FAF7F2] shadow-[0_14px_30px_rgba(230,57,70,0.42)] transition-all cursor-pointer ${
                justAdded
                  ? "bg-[#2B8A3E]"
                  : "bg-gradient-to-r from-[#E63946] via-[#EE5626] to-[#F77F00] hover:brightness-105"
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Masuk Keranjang!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Pesan Sekarang</span>
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* GRAND EDITORIAL SERIF HEADLINE AT BOTTOM CENTER */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-[#FAF7F2]/12 w-full text-center">
          <p className="font-editorial italic text-lg sm:text-2xl text-[#F7B267] tracking-wide mb-1">
            Semua 6 isian buah & rempah segar berpadu lengkap dalam satu box
          </p>
          <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.06] text-[#FAF7F2]">
            Segarnya Asinan Kiamboy{" "}
            <span className="italic font-normal text-[#FDE4CF]">Milanial</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
