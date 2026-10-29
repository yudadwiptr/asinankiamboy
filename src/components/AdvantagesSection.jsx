import React from "react";
import { motion } from "framer-motion";
import {
  Apple,
  Droplets,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Plus,
  CheckCircle2,
  Flame,
} from "lucide-react";
import {
  ASINAN_INGREDIENTS,
  PRODUCT_PACKAGE,
  formatRupiah,
} from "../data/asinanData";

const ADVANTAGE_CARDS = [
  {
    number: "01",
    icon: Apple,
    badge: "Fresh Daily Cut",
    title: "100% Buah Segar Pilihan",
    description:
      "Potongan buah segar berkualitas tinggi (mangga, nanas, salak, rambutan, lengkeng, anggur) yang renyah dan manis alami di setiap gigitan.",
    highlights: ["Mangga, Nanas & Salak", "Anggur & Lengkeng", "Rambutan Segar"],
    previewImages: ["/assets/card-anggur-lengkeng.jpg", "/assets/card-nanas.jpg"],
    theme: "light",
  },
  {
    number: "02",
    icon: Droplets,
    badge: "0% Pengawet & Pemanis Buatan",
    title: "Kuah Kiamboy Asli & Jeruk Sonkit",
    description:
      "Satu racikan standar autentik manis, asam, asin, dan pedas segar yang langsung dicampur agar meresap sempurna ke dalam buah.",
    highlights: ["Plum Kiamboy Import", "Perasan Sonkit Murni", "Pedas Segar Meresap"],
    previewImages: ["/assets/card-kiamboy.jpg", "/assets/card-sonkit.jpg"],
    theme: "green",
  },
  {
    number: "03",
    icon: PackageCheck,
    badge: "Travel-Friendly Box",
    title: "Kemasan Box Higienis & Aman",
    description:
      "Dikemas rapi dalam food-grade transparent box bersegel, siap santap kapan saja dan aman dibawa perjalanan.",
    highlights: ["Food-Grade Sealed", "Aman di Mobil", "Tersegel Rapat"],
    previewImages: ["/assets/hero-asinan-cutout.png"],
    theme: "warm",
  },
];

export default function AdvantagesSection({
  activeIndex,
  onSelectIngredient,
  onQuickAddBox,
}) {
  return (
    <section id="ingredients" className="py-16 sm:py-24 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#233D26]/10 text-[#233D26] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
              Kenapa Pilih Kami
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B2E1E] tracking-tight leading-[1.12]">
              Racikan Autentik,{" "}
              <span className="italic font-normal text-[#E63946]">
                Segar Maksimal
              </span>{" "}
              di Setiap Suapan
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#3A5A3E] max-w-md leading-relaxed">
            Dibuat segar setiap hari di Kota Bogor menggunakan buah kupas pilihan
            dan kuah kiamboy sonkit pedas segar tanpa bahan pengawet.
          </p>
        </div>

        {/* 3-COLUMN BENTO-STYLE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ADVANTAGE_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            const isGreen = card.theme === "green";
            const isWarm = card.theme === "warm";

            return (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-shadow ${
                  isGreen
                    ? "bg-gradient-to-br from-[#233D26] to-[#345638] text-[#FAF7F2] shadow-[0_22px_50px_rgba(35,61,38,0.22)]"
                    : isWarm
                    ? "bg-gradient-to-br from-[#FFF6EC] to-[#F5EDE0] text-[#1B2E1E] border border-[#233D26]/10 shadow-[0_14px_36px_rgba(27,46,30,0.06)]"
                    : "bg-white text-[#1B2E1E] border border-[#233D26]/10 shadow-[0_14px_36px_rgba(27,46,30,0.06)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-12 h-12 shrink-0 aspect-square rounded-2xl flex items-center justify-center shadow-sm ${
                        isGreen
                          ? "bg-[#FAF7F2]/14 text-[#F7B267] border border-[#FAF7F2]/15"
                          : "bg-[#233D26] text-[#FAF7F2]"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${
                        isGreen
                          ? "bg-[#E63946] text-[#FAF7F2]"
                          : "bg-[#233D26]/8 text-[#233D26]"
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    {card.previewImages.map((src, i) => (
                      <div
                        key={src}
                        className={`relative rounded-2xl overflow-hidden bg-[#FAF7F2] p-1.5 shadow-md border shrink-0 ${
                          isGreen ? "border-[#FAF7F2]/20" : "border-[#233D26]/10"
                        } ${
                          card.previewImages.length === 1
                            ? "w-24 h-20"
                            : "w-20 h-20 aspect-square"
                        } transition-transform duration-300 group-hover:scale-105 ${
                          i === 1 ? "-rotate-3" : "rotate-2"
                        }`}
                      >
                        <img
                          src={src}
                          alt={card.title}
                          className="w-full h-full object-contain rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    ))}
                    <span
                      className={`ml-auto font-serif-display text-4xl font-semibold opacity-20 ${
                        isGreen ? "text-[#FAF7F2]" : "text-[#233D26]"
                      }`}
                    >
                      {card.number}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl sm:text-[1.65rem] font-semibold tracking-tight mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isGreen ? "text-[#FAF7F2]/82" : "text-[#3A5A3E]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-current/10">
                  {card.highlights.map((chip) => (
                    <span
                      key={chip}
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        isGreen
                          ? "bg-[#FAF7F2]/12 text-[#FAF7F2]"
                          : "bg-[#FAF7F2] text-[#233D26] border border-[#233D26]/10"
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3 text-[#E63946] shrink-0" />
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* KOMPOSISI 8 ISIAN DALAM 1 BOX ASINAN */}
        <div className="mt-12 rounded-3xl bg-white border border-[#233D26]/10 p-6 sm:p-8 shadow-[0_14px_40px_rgba(27,46,30,0.05)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-[#233D26]/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E63946] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Komplit Dalam 1 Kemasan
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#233D26]/8 text-[#233D26] px-2.5 py-0.5 text-[11px] font-semibold">
                  <Flame className="w-3 h-3 text-[#E63946]" />
                  Kuah Pedas Segar Langsung Tercampur (Tidak Dipisah)
                </span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#1B2E1E]">
                8 Isian Segar di Dalam Setiap Box
              </h3>
              <p className="text-xs sm:text-sm text-[#3A5A3E] mt-0.5">
                Seluruh buah segar & bumbu kiamboy sonkit di bawah ini sudah termasuk lengkap dalam setiap box.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onQuickAddBox()}
              className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-full bg-gradient-to-r from-[#E63946] to-[#F77F00] text-[#FAF7F2] px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-97 transition-all cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>
                Tambah 1 Box Komplit · {formatRupiah(PRODUCT_PACKAGE.price)}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {ASINAN_INGREDIENTS.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectIngredient(idx)}
                  className={`group rounded-2xl p-3.5 transition-all cursor-pointer flex flex-col justify-between border ${
                    isCurrent
                      ? "bg-[#233D26] text-[#FAF7F2] border-[#233D26] shadow-lg"
                      : "bg-[#FAF7F2]/70 hover:bg-[#FAF7F2] text-[#1B2E1E] border-[#233D26]/10"
                  }`}
                >
                  <div>
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF7F2] mb-2.5 p-2">
                      <img
                        src={item.cardImage}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                        isCurrent ? "text-[#F7B267]" : "text-[#E63946]"
                      }`}
                    >
                      {item.role}
                    </span>
                    <h4 className="font-serif-display text-base sm:text-lg font-semibold leading-snug">
                      {item.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
