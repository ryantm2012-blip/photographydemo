import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-40 select-none">
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/27723456789"
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center shadow-xl border border-emerald-400/20 focus:outline-none relative group"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        
        {/* Hover label */}
        <span className="absolute right-15 bg-charcoal text-white text-[10px] uppercase font-sans font-bold tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
          Chat with Simphiwe
        </span>
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 10 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="w-13 h-13 rounded-full bg-warm-white hover:bg-beige text-charcoal flex items-center justify-center shadow-xl border border-beige-dark/50 focus:outline-none cursor-pointer"
            aria-label="Back to Top"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-5 h-5 text-charcoal" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
