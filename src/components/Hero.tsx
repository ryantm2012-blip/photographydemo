import { motion } from "motion/react";
import { ArrowRight, Calendar, Bookmark } from "lucide-react";
import { CUSTOM_IMAGES } from "../data";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-cream-dark/20">
      {/* Decorative Pastel Background Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-peach/30 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-sage/30 blur-3xl -z-10" />
      <div className="absolute top-10 right-1/3 w-72 h-72 rounded-full bg-dusty-blue/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side: Headline and Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-sage px-4 py-1.5 rounded-full border border-sage-dark/10 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage-dark animate-pulse" />
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-sage-dark">
              South Africa • Cape Town & Beyond
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl xl:text-7.5xl text-charcoal leading-[1.08] tracking-tight font-bold"
            >
              Capturing Life&rsquo;s Most <br className="hidden md:inline" />
              <span className="text-peach-dark italic font-normal">Precious</span> Moments
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-charcoal-light font-sans max-w-xl font-light leading-relaxed flex flex-wrap gap-y-1 items-center gap-x-2"
            >
              <span className="font-medium text-charcoal">Family</span> •
              <span className="font-medium text-charcoal">Portrait</span> •
              <span className="font-medium text-charcoal">Couples</span> •
              <span className="font-medium text-charcoal">Maternity</span> •
              <span className="font-medium text-charcoal">Events</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full text-sm font-sans tracking-wider uppercase text-white bg-peach-dark hover:bg-peach-dark/95 active:scale-98 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              id="hero-book-btn"
            >
              <Calendar className="w-4 h-4" />
              Book a Session
            </button>
            <a
              href="#gallery"
              className="px-8 py-4 rounded-full text-sm font-sans tracking-wider uppercase hover:text-charcoal text-charcoal-light bg-beige hover:bg-beige-dark/50 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 border border-beige-dark/30"
              id="hero-portfolio-btn"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Quick Stats / Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 grid grid-cols-3 gap-6 border-t border-beige-dark/30 max-w-lg"
          >
            <div>
              <p className="font-serif text-3xl font-bold text-charcoal">30+</p>
              <p className="text-xs text-charcoal-light/70 uppercase tracking-widest mt-1 font-sans">
                Years Experience
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-charcoal">500+</p>
              <p className="text-xs text-charcoal-light/70 uppercase tracking-widest mt-1 font-sans">
                Happy Families
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-charcoal">100%</p>
              <p className="text-xs text-charcoal-light/70 uppercase tracking-widest mt-1 font-sans">
                Cherished Heirlooms
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual Masterpiece */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Main Sunset Hero Image - Framed gorgeously */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-w-md rounded-[2.5rem] overflow-hidden border-8 border-warm-white shadow-xl bg-beige"
          >
            <img
              src={CUSTOM_IMAGES.heroSunset}
              alt="Family laughing at sunset on beach"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Soft Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Overlapping portrait card of Simphiwe Sithole */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-8 -left-6 sm:left-10 lg:-left-12 w-48 bg-warm-white p-3.5 rounded-[1.8rem] shadow-2xl border border-beige/40"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-beige mb-3">
              <img
                src={CUSTOM_IMAGES.simphiwePortrait}
                alt="Simphiwe Sithole Portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center">
              <h4 className="font-serif text-sm font-bold text-charcoal leading-snug">
                Simphiwe Sithole
              </h4>
              <p className="text-[10px] text-peach-dark font-sans tracking-wide uppercase font-medium mt-0.5">
                Master Photographer
              </p>
            </div>
            {/* Little floating detail */}
            <div className="absolute -top-3 -right-3 bg-lavender text-lavender-dark text-[9px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-lavender-dark/15 shadow-sm">
              30+ Yrs
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
