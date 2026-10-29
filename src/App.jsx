import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ViewportFrame from "./components/ViewportFrame";
import Navbar from "./components/Navbar";
import HeroShowcase from "./components/HeroShowcase";
import AdvantagesSection from "./components/AdvantagesSection";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import CartDrawer from "./components/CartDrawer";
import { PRODUCT_PACKAGE, formatRupiah } from "./data/asinanData";

const STORAGE_KEY = "asinan_kiamboy_milanial_cart_v4";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBump, setCartBump] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartItems]);

  const handleAddBoxToCart = useCallback(() => {
    const cartKey = PRODUCT_PACKAGE.id;
    const unitPrice = PRODUCT_PACKAGE.price;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey);
      if (existing) {
        return prev.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          cartKey,
          name: PRODUCT_PACKAGE.name,
          image: PRODUCT_PACKAGE.image,
          unitPrice,
          quantity: 1,
        },
      ];
    });

    setCartBump(true);
    setTimeout(() => setCartBump(false), 450);
  }, []);

  const handleUpdateQty = useCallback((cartKey, nextQty) => {
    if (nextQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: nextQty } : item
      )
    );
  }, []);

  const handleRemoveItem = useCallback((cartKey) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  }, []);

  const handleSelectIngredientFromGrid = useCallback((idx) => {
    setActiveIndex(idx);
    const el = document.getElementById("hero-menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1B2E1E] p-2.5 sm:p-5 lg:p-6">
      {/* Persistent Outer Showcase Frame with Rounded Inner Corners */}
      <ViewportFrame />

      {/* Floating Glassmorphic Top Navigation */}
      <Navbar
        totalItems={totalItems}
        totalPrice={totalPrice}
        onOpenCart={() => setIsCartOpen(true)}
        cartBump={cartBump}
      />

      {/* Main Showcase Content */}
      <main className="relative z-10 pb-16 sm:pb-0">
        <HeroShowcase
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onAddToCart={handleAddBoxToCart}
        />

        <AdvantagesSection
          activeIndex={activeIndex}
          onSelectIngredient={handleSelectIngredientFromGrid}
          onQuickAddBox={handleAddBoxToCart}
        />

        <ReviewsSection />

        <LocationSection onOpenCart={() => setIsCartOpen(true)} />
      </main>

      {/* Mobile Sticky Bottom Quick-Cart Pill */}
      <AnimatePresence>
        {!isCartOpen && totalItems > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-5 inset-x-5 sm:hidden z-30"
          >
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="w-full flex items-center justify-between rounded-full bg-[#132315] text-[#FAF7F2] px-5 py-3.5 shadow-[0_16px_38px_rgba(0,0,0,0.38)] border border-[#FAF7F2]/15"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 shrink-0 aspect-square rounded-full bg-[#E63946] text-xs font-extrabold">
                  {totalItems}
                </span>
                <span className="text-xs font-bold">Lihat Pesanan</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#F7B267]">
                <span>{formatRupiah(totalPrice)}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-Over WhatsApp Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onAddQuickBox={handleAddBoxToCart}
      />
    </div>
  );
}
