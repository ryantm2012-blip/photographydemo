import { motion } from "motion/react";
import { Clock, Image as ImageIcon, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-cream-dark/20 relative overflow-hidden">
      {/* Pastel decorative circle background */}
      <div className="absolute top-1/10 left-1/12 w-[400px] h-[400px] rounded-full bg-peach/20 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sage/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-peach-dark block">
            Sesions & Investment
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold tracking-tight">
            Our Photography Offerings
          </h2>
          <div className="w-16 h-1 bg-peach rounded-full mx-auto" />
          <p className="text-sm md:text-base text-charcoal-light/80 font-sans font-light">
            Each session is crafted to be gentle, fun, and memorable, ensuring you receive
            breathtaking, highly-polished digital images that your family will treasure for generations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-warm-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl border border-beige-dark/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Card Image banner */}
              <div className="relative aspect-[3/2] overflow-hidden bg-beige">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent pointer-events-none" />

                {/* Optional most popular badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-peach text-peach-dark text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm border border-peach-dark/15">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Service Details */}
              <div className="p-8 flex flex-col flex-grow space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-serif text-2xl font-bold text-charcoal tracking-tight">
                      {service.title}
                    </h3>
                    <span className="font-serif text-xl font-bold text-peach-dark whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-light/80 font-sans font-light line-clamp-2 md:line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Mini details list */}
                <div className="space-y-2.5 pt-4 border-t border-beige-dark/20 text-xs text-charcoal-light font-sans font-medium">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-peach-dark" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ImageIcon className="w-4 h-4 text-peach-dark" />
                    <span>{service.deliverables}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-peach-dark" />
                    <span>Custom lighting & natural editing included</span>
                  </div>
                </div>

                {/* Footer Action Click list */}
                <div className="pt-2">
                  <button
                    onClick={() => onBookService(service.title)}
                    className="w-full py-3 rounded-xl text-xs font-sans tracking-widest uppercase text-charcoal font-bold bg-beige hover:bg-peach-dark hover:text-white transition-all duration-300 border border-beige-dark/40 shadow-sm flex items-center justify-center gap-2 group-hover:bg-peach/30"
                    id={`book-${service.id}`}
                  >
                    Book This Session
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
