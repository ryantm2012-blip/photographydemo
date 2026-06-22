import { Camera, Calendar, Mail, Phone, Heart } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white border-t border-white/5 relative overflow-hidden select-none">
      {/* Soft dark warm background lights */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-peach-dark/5 blur-3xl" />
      <div className="absolute bottom-1/8 right-10 w-96 h-96 rounded-full bg-sage-dark/5 blur-3xl" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Camera className="w-5 h-5 text-peach" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-wider text-white font-bold">
                  SS Photography
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-white/50 font-sans">
                  SIMPHIWE SITHOLE
                </span>
              </div>
            </a>
            
            <p className="text-xs md:text-sm text-white/60 font-sans font-light leading-relaxed max-w-sm">
              More than 30 years spent creating authentic, timeless photographs that celebrate legacy, 
              laughter, and genuine South African relationships. Let us tell your story.
            </p>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full text-xs font-sans tracking-larger uppercase text-charcoal font-bold bg-peach hover:bg-white transition-colors duration-200 shadow-md"
              id="footer-book-btn"
            >
              Book session with Simphiwe
            </button>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-white/40">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-sm text-white/70">
              <a href="#about" className="hover:text-peach transition-colors duration-200">
                About Simphiwe
              </a>
              <a href="#services" className="hover:text-peach transition-colors duration-200">
                Services & Pricing
              </a>
              <a href="#gallery" className="hover:text-peach transition-colors duration-200">
                Portfolio Gallery
              </a>
              <a href="#testimonials" className="hover:text-peach transition-colors duration-200">
                Client Reviews
              </a>
              <a href="#contact" className="hover:text-peach transition-colors duration-200">
                Contact Details
              </a>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-white/40">
              Studio Hours
            </h4>
            <div className="space-y-2.5 font-sans text-xs md:text-sm text-white/70">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="font-light">Monday – Friday</span>
                <span className="font-semibold text-white">08:00 – 18:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="font-light">Saturday</span>
                <span className="font-semibold text-white">08:00 – 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-light">Sunday</span>
                <span className="font-semibold text-peach italic">By Appointment Only</span>
              </div>
            </div>
          </div>

          {/* Direct Support Header */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-white/40">
              The Studio
            </h4>
            <div className="space-y-3 font-sans text-xs md:text-sm text-white/70">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-peach shrink-0" />
                <a href="tel:+27723456789" className="hover:text-peach transition-colors">
                  +27 72 345 6789
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-peach shrink-0" />
                <a href="mailto:hello@ssphotography.co.za" className="hover:text-peach transition-colors">
                  hello@ssphotography.co.za
                </a>
              </p>
              <p className="text-xs text-white/40 font-light pt-2 line-clamp-2 leading-relaxed">
                Cape Town, South Africa. Member of the South African Professional Photography Association.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/40">
          <p>
            &copy; {currentYear} SS Photography. All Rights Reserved. Coordinated in Cape Town, South Africa.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for multigenerational families.
          </p>
        </div>
      </div>
    </footer>
  );
}
