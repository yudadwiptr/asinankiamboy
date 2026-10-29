import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Camera,
  ExternalLink,
  MapPin,
  Car,
} from "lucide-react";
import {
  CUSTOMER_REVIEWS,
  GOOGLE_REVIEWS_URL,
  TIKTOK_URL,
  TIKTOK_HANDLE,
} from "../data/asinanData";

function GoogleMapsPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7z"
      />
      <circle cx="12" cy="9" r="2.75" fill="#FAF7F2" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#1F3722] via-[#233D26] to-[#345538] text-[#FAF7F2] p-6 sm:p-10 lg:p-14 shadow-[0_24px_65px_rgba(24,45,27,0.2)] relative overflow-hidden">
        {/* Background Accent Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-24 w-96 h-96 rounded-full bg-[#F77F00]/15 blur-3xl"
        />

        {/* Top Header + Authentic Google Review Badge */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#FAF7F2]/12">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              {/* Verified Google Rating Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FAF7F2] text-[#1B2E1E] px-4 py-2 shadow-lg">
                <GoogleMapsPinIcon />
                <span className="font-extrabold text-sm sm:text-base">5.0</span>
                <span
                  className="text-[#F59E0B] tracking-tight text-sm sm:text-base"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#3A5A3E]">
                  (70+ Google Reviews)
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
              </div>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12]">
              Dicintai Pecinta Kuliner Segar di{" "}
              <span className="italic font-normal text-[#F7B267]">
                Kota Bogor
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111F13] hover:bg-black text-[#FAF7F2] border border-[#FAF7F2]/18 px-5 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all duration-200 group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#F7B267] shrink-0" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span>Cek TikTok {TIKTOK_HANDLE}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAF7F2] hover:bg-[#F77F00] text-[#1B2E1E] hover:text-[#FAF7F2] px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all duration-200 group"
            >
              <GoogleMapsPinIcon />
              <span>Lihat Semua Review di Google Maps</span>
              <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* REVIEW CARDS GRID */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 ${
                idx === 0
                  ? "bg-[#FAF7F2] text-[#1B2E1E] shadow-xl ring-2 ring-[#F77F00]/60"
                  : "bg-[#FAF7F2]/95 text-[#1B2E1E] shadow-lg"
              }`}
            >
              <div>
                {/* Reviewer Info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${review.avatarBg} text-[#FAF7F2] flex items-center justify-center font-bold text-sm shadow-sm`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-sm sm:text-base text-[#1B2E1E]">
                          {review.name}
                        </h3>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                      </div>
                      <p className="text-[11px] font-medium text-[#3A5A3E]">
                        {review.badge}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#233D26]/8 text-[#233D26] px-2.5 py-1 text-[11px] font-bold">
                    {review.highlightTag}
                  </span>
                </div>

                {/* 5-Star Rating + Timestamp */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-[#F59E0B]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#3A5A3E]/80 font-medium">
                    · {review.timeAgo}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-sm sm:text-[15px] leading-relaxed font-medium text-[#1B2E1E] mb-4">
                  “{review.comment}”
                </p>
              </div>

              {/* Authentic Customer Photo Attachment Badge for Intan Nalalita */}
              {review.hasPhotoAttachment ? (
                <div className="mt-2 rounded-xl bg-[#233D26]/6 border border-[#233D26]/12 p-3 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-white p-1 shrink-0 shadow-sm border border-[#233D26]/10">
                    <img
                      src="/assets/hero-asinan-cutout.png"
                      alt="Foto kemasan box asinan pelanggan di mobil"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#E63946] mb-0.5">
                      <Camera className="w-3.5 h-3.5" />
                      <span>Customer Photo Attachment</span>
                    </div>
                    <p className="text-xs font-semibold text-[#1B2E1E] flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#233D26] shrink-0" />
                      <span className="truncate">
                        Kemasan box asinan tersegel rapi di dalam mobil
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-2 pt-3 border-t border-[#233D26]/10 flex items-center justify-between text-[11px] text-[#3A5A3E] font-medium">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E63946]" />
                    Asinan Kiamboy Milanial · Kota Bogor
                  </span>
                  <span>Google Maps Ulasan Asli</span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

