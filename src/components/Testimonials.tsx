import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream relative overflow-hidden select-none">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-peach/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-peach-dark block">
            Client Love
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold tracking-tight">
            Stories from the Heart
          </h2>
          <div className="w-16 h-1 bg-peach rounded-full mx-auto" />
          <p className="text-sm md:text-base text-charcoal-light/80 font-sans font-light">
            Read what South African families, couples, and individuals say about their
            unforgettable portrait experiences behind Simphiwe's lens.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-warm-white p-8 rounded-[2.2rem] border border-beige-dark/30 shadow-sm relative hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Background elegant quota indicator */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-cream-dark opacity-40 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* 5-Star Row */}
                <div className="flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-peach-dark text-peach-dark" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base font-serif italic text-charcoal leading-relaxed font-light">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author Attribution Card */}
              <div className="flex items-center gap-3 pt-6 border-t border-beige-dark/15 mt-6 relative z-10">
                {/* Visual Avatar with initials */}
                <div className="w-10 h-10 rounded-full bg-sage text-sage-dark flex items-center justify-center font-sans font-bold text-xs uppercase shadow-inner border border-sage-dark/15">
                  {testimonial.author.charAt(0) || "U"}
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-charcoal leading-none">
                    {testimonial.author}
                  </span>
                  {testimonial.location && (
                    <span className="text-[10px] text-charcoal-light/60 uppercase tracking-widest font-sans mt-1">
                      {testimonial.location}, South Africa
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
