import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter Categories list
  const categories = [
    { value: "all", label: "All Work" },
    { value: "family", label: "Family" },
    { value: "couple", label: "Couples" },
    { value: "portrait", label: "Portraits" },
    { value: "maternity", label: "Maternity" },
    { value: "graduation", label: "Graduation" },
    { value: "lifestyle", label: "Lifestyle" },
  ];

  // Filter items based on active category selection
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  // Lightbox keyboard navigations
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const prevIndex = lightboxIndex === 0 ? GALLERY_ITEMS.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === GALLERY_ITEMS.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-cream relative select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-peach-dark block">
            Featured Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold tracking-tight">
            Capturing Real Moments
          </h2>
          <div className="w-16 h-1 bg-peach rounded-full mx-auto" />
          <p className="text-sm md:text-base text-charcoal-light/80 font-sans font-light">
            Browse through some of our most cherisable moments captured across South Africa. 
            Click on any image to open the high-fidelity detailed viewer.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 border focus:outline-none cursor-pointer relative ${
                activeCategory === cat.value
                  ? "bg-peach-dark text-white border-transparent"
                  : "bg-warm-white text-charcoal-light hover:text-charcoal border-beige-dark/40 hover:border-peach-dark/30 hover:bg-peach/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid with animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              // Find the absolute original index in GALLERY_ITEMS for consistency in Lightbox
              const originalIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setLightboxIndex(originalIndex)}
                  className="group relative cursor-pointer aspect-[4/5] rounded-[2rem] overflow-hidden bg-beige border border-beige-dark/30 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Elegant hovering overlay capture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-flex items-center gap-1.5 bg-peach-dark text-white text-[9px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                        <Tag className="w-3.5 h-3.5" />
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 font-sans font-light leading-snug line-clamp-2">
                        {item.description}
                      </p>
                      
                      <span className="inline-flex items-center gap-1.5 text-xs text-peach hover:text-white font-sans font-medium hover:underline pt-2">
                        <Maximize2 className="w-3.5 h-3.5" />
                        View Fullscreen
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal Slider */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/95 backdrop-blur-md z-50 flex flex-col justify-between p-6 select-none"
          >
            {/* Lightbox Header Close Control */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-2">
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.2em] font-sans text-peach uppercase font-semibold">
                  SS Photography Portfolio
                </span>
                <span className="text-sm font-sans text-white/50">
                  Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full transition-colors duration-200"
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Content Area */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto flex-grow gap-4">
              
              {/* Previous Click Button */}
              <button
                onClick={handlePrev}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors active:scale-95 shrink-0"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Central Image Container */}
              <div className="relative max-h-[65vh] md:max-h-[70vh] flex flex-col items-center justify-center">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="rounded-2xl max-h-[60vh] max-w-full md:max-w-4xl object-contain border border-white/10 bg-black/40"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Click Button */}
              <button
                onClick={handleNext}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors active:scale-95 shrink-0"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Lightbox Information Bar at bottom */}
            <div className="w-full max-w-2xl mx-auto text-center pb-6 space-y-2">
              <span className="text-xs bg-peach-dark text-white font-sans px-3 py-1 rounded-full inline-block tracking-widest uppercase font-bold">
                {GALLERY_ITEMS[lightboxIndex].categoryLabel}
              </span>
              <h4 className="font-serif text-2xl font-bold text-white tracking-wide">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h4>
              <p className="text-sm font-sans text-white/70 font-light max-w-xl mx-auto">
                {GALLERY_ITEMS[lightboxIndex].description}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
