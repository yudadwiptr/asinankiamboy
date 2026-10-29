import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  PRODUCT_PACKAGE,
  SPICE_LEVELS,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  STORE_INFO,
  formatRupiah,
} from "../data/asinanData";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onAddQuickBox,
}) {
  const [customerName, setCustomerName] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [addressOrNote, setAddressOrNote] = useState("");

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const buildWhatsAppLink = () => {
    const lines = [
      "Halo Kak *Asinan Kiamboy Milanial*! 🍊✨",
      "Saya ingin memesan:",
      "",
      ...cartItems.map(
        (item, idx) =>
          `${idx + 1}. *${item.name}* (${item.spiceLabel}) × ${
            item.quantity
          } box — ${formatRupiah(item.unitPrice * item.quantity)}`
      ),
      "",
      `*Total Pesanan (${totalItems} Box): ${formatRupiah(totalPrice)}*`,
      "--------------------------------",
      `Metode: *${
        deliveryMethod === "pickup"
          ? "Pickup Langsung di Outlet Katulampa"
          : "Delivery Lokal Area Bogor"
      }*`,
    ];

    if (customerName.trim()) {
      lines.push(`Nama Pemesan: ${customerName.trim()}`);
    }
    if (addressOrNote.trim()) {
      lines.push(
        `${deliveryMethod === "delivery" ? "Alamat / Catatan" : "Catatan"}: ${addressOrNote.trim()}`
      );
    }

    lines.push("", "Mohon info ketersediaan & pembayarannya ya Kak. Terima kasih! 🙏");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F1D11]/60 backdrop-blur-sm"
          />

          {/* Slide-Over Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative z-10 w-full max-w-md bg-[#FAF7F2] text-[#1B2E1E] h-full shadow-2xl flex flex-col justify-between overflow-hidden"
            aria-label="Keranjang Pesanan"
          >
            {/* Drawer Header */}
            <div className="px-6 py-5 bg-[#233D26] text-[#FAF7F2] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2]/12 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#F7B267]" />
                </div>
                <div>
                  <h2 className="font-serif-display text-xl font-semibold leading-tight">
                    Pesanan Kamu
                  </h2>
                  <p className="text-xs text-[#FAF7F2]/75">
                    {totalItems} box dipilih · Fast Pickup / Delivery Bogor
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup keranjang"
                className="w-9 h-9 rounded-full bg-[#FAF7F2]/12 hover:bg-[#FAF7F2]/25 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Cart Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {cartItems.length === 0 ? (
                <div className="py-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white p-2 border border-[#233D26]/10 shadow-xs flex items-center justify-center">
                    <img
                      src={PRODUCT_PACKAGE.image}
                      alt={PRODUCT_PACKAGE.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold mb-1.5">
                    Keranjang Masih Kosong
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A5A3E] mb-6 max-w-xs mx-auto">
                    1 Box Asinan Kiamboy Milanial ({formatRupiah(PRODUCT_PACKAGE.price)}) sudah komplit semua 6 isian buah segar!
                  </p>

                  {/* Quick Add Box by Preference */}
                  <div className="text-left space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#3A5A3E]">
                      Pilih Level Pedas / Kuah:
                    </p>
                    {SPICE_LEVELS.map((spice) => (
                      <div
                        key={spice.id}
                        className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3 border border-[#233D26]/10 shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={PRODUCT_PACKAGE.image}
                            alt={PRODUCT_PACKAGE.name}
                            className="w-12 h-12 rounded-xl object-contain bg-[#FAF7F2] p-1"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-[#1B2E1E]">
                              Box Komplit · {spice.label}
                            </h4>
                            <p className="text-xs font-semibold text-[#E63946]">
                              {formatRupiah(PRODUCT_PACKAGE.price)} / Box
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onAddQuickBox(spice)}
                          className="inline-flex items-center gap-1 rounded-full bg-[#233D26] hover:bg-[#E63946] text-[#FAF7F2] px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer shrink-0"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Tambah</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Selected Items List */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.cartKey}
                        className="rounded-2xl bg-white p-3.5 border border-[#233D26]/10 shadow-xs flex items-center gap-3.5"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-contain bg-[#FAF7F2] p-1 shrink-0 border border-[#233D26]/8"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-bold text-sm text-[#1B2E1E] truncate">
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => onRemoveItem(item.cartKey)}
                              aria-label={`Hapus ${item.name}`}
                              className="text-[#3A5A3E]/60 hover:text-[#E63946] transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <span className="inline-block rounded-full bg-[#FAF7F2] text-[#3A5A3E] px-2 py-0.5 text-[11px] font-semibold mt-0.5 mb-2 border border-[#233D26]/10">
                            Isian Komplit · {item.spiceLabel}
                          </span>

                          <div className="flex items-center justify-between">
                            <span className="text-sm font-extrabold text-[#1B2E1E]">
                              {formatRupiah(item.unitPrice * item.quantity)}
                            </span>

                            {/* Quantity Stepper */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] border border-[#233D26]/12 px-2 py-1">
                              <button
                                type="button"
                                onClick={() =>
                                  onUpdateQty(item.cartKey, item.quantity - 1)
                                }
                                className="w-6 h-6 rounded-full bg-white hover:bg-[#233D26] hover:text-[#FAF7F2] flex items-center justify-center text-xs transition-colors cursor-pointer shadow-2xs"
                                aria-label="Kurangi jumlah"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-extrabold min-w-[18px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  onUpdateQty(item.cartKey, item.quantity + 1)
                                }
                                className="w-6 h-6 rounded-full bg-[#233D26] text-[#FAF7F2] hover:bg-[#E63946] flex items-center justify-center text-xs transition-colors cursor-pointer"
                                aria-label="Tambah jumlah"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Order Details Form */}
                  <div className="rounded-2xl bg-white p-4 border border-[#233D26]/10 space-y-3.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#233D26]">
                      <Sparkles className="w-3.5 h-3.5 text-[#F77F00]" />
                      <span>Detail Pengambilan / Pengiriman</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod("pickup")}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          deliveryMethod === "pickup"
                            ? "bg-[#233D26] text-[#FAF7F2] border-[#233D26]"
                            : "bg-[#FAF7F2] text-[#3A5A3E] border-[#233D26]/12"
                        }`}
                      >
                        Pickup di Outlet
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod("delivery")}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          deliveryMethod === "delivery"
                            ? "bg-[#233D26] text-[#FAF7F2] border-[#233D26]"
                            : "bg-[#FAF7F2] text-[#3A5A3E] border-[#233D26]/12"
                        }`}
                      >
                        Delivery Lokal Bogor
                      </button>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#3A5A3E] mb-1">
                        Nama Pemesan (Opsional)
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Contoh: Kak Intan"
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#233D26]/15 px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#233D26]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#3A5A3E] mb-1">
                        {deliveryMethod === "delivery"
                          ? "Alamat Pengiriman di Bogor / Catatan"
                          : "Jam Pickup / Catatan Tambahan (Opsional)"}
                      </label>
                      <textarea
                        rows={2}
                        value={addressOrNote}
                        onChange={(e) => setAddressOrNote(e.target.value)}
                        placeholder={
                          deliveryMethod === "delivery"
                            ? "Contoh: Perumahan Pajajaran Indah, minta kuah dipisah..."
                            : "Contoh: Ambil jam 14.00 siang ini ya Kak..."
                        }
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#233D26]/15 px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#233D26] resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2 rounded-xl bg-[#FAF7F2] p-2.5 text-[11px] text-[#3A5A3E]">
                      <MapPin className="w-3.5 h-3.5 text-[#E63946] shrink-0 mt-0.5" />
                      <span>{STORE_INFO.shortAddress}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer Checkout CTA */}
            <div className="p-6 bg-white border-t border-[#233D26]/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#3A5A3E]">
                  Estimasi Total ({totalItems} Box)
                </span>
                <span className="text-xl font-extrabold text-[#1B2E1E]">
                  {formatRupiah(totalPrice)}
                </span>
              </div>

              <button
                type="button"
                disabled={cartItems.length === 0}
                onClick={handleCheckoutWhatsApp}
                className={`w-full inline-flex items-center justify-center gap-2.5 rounded-full py-4 px-6 text-sm sm:text-base font-bold text-[#FAF7F2] shadow-lg transition-all ${
                  cartItems.length === 0
                    ? "bg-[#233D26]/30 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#E63946] via-[#EC5824] to-[#F77F00] hover:brightness-105 cursor-pointer active:scale-98 shadow-[0_12px_28px_rgba(230,57,70,0.35)]"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pesan Sekarang via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-[#3A5A3E]">
                Terhubung langsung ke WhatsApp resmi {WHATSAPP_DISPLAY}
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
