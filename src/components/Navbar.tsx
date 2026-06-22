import { useState, useEffect } from "react";
import { Camera, Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-beige-dark/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo"
            aria-label="SS Photography"
          >
            <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center border border-beige-dark/40 group-hover:bg-peach/80 transition-colors duration-300">
              <Camera className="w-5 h-5 text-peach-dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wider text-charcoal font-bold">
                SS Photography
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal-light/70 font-sans">
                SIMPHIWE SITHOLE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-wide text-charcoal-light hover:text-peach-dark transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-peach-dark after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/27723456789"
              target="_blank"
              rel="noopener referrer"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 text-xs font-sans text-sage-dark hover:text-peach-dark transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>+27 72 345 6789</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase text-white bg-peach-dark hover:bg-peach-dark/90 active:scale-95 transition-all duration-200 shadow-sm"
              id="desktop-book-btn"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile Hamburguer button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal-light hover:text-peach-dark focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bg-cream/95 backdrop-blur-lg border-b border-beige-dark/30 z-40 shadow-lg md:hidden py-6 px-6"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-sans tracking-wide text-charcoal font-medium hover:text-peach-dark py-1 border-b border-beige-dark/10"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="https://wa.me/27723456789"
                  target="_blank"
                  rel="noopener referrer"
                  referrerPolicy="no-referrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-sm text-charcoal-light hover:text-peach-dark"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>+27 72 345 6789 (WhatsApp)</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center py-3 rounded-full text-sm font-sans tracking-wider uppercase text-white bg-peach-dark hover:bg-peach-dark/90 transition-all duration-200"
                  id="mobile-book-btn"
                >
                  Book a Session
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
