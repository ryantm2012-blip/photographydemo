import { motion } from "motion/react";
import { History, Sliders, Smile, Camera, Sparkles, BookOpen, HelpCircle } from "lucide-react";
import { WHY_CHOOSE_FACTS } from "../data";

// Type-safe lookup dictionary for Lucide icons
const ICON_MAP: Record<string, typeof Camera> = {
  History: History,
  Sliders: Sliders,
  Smile: Smile,
  Camera: Camera,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
};

export default function WhyChoose() {
  return (
    <section className="py-24 bg-cream-dark/20 relative overflow-hidden">
      {/* Pastel background glow circles */}
      <div className="absolute top-1/4 right-5 w-80 h-80 rounded-full bg-lavender/30 blur-3xl -z-10" />
      <div className="absolute bottom-1/8 left-10 w-96 h-96 rounded-full bg-sage/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-peach-dark block">
            The Difference
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold tracking-tight">
            Why Choose SS Photography?
          </h2>
          <div className="w-16 h-1 bg-peach rounded-full mx-auto" />
          <p className="text-sm md:text-base text-charcoal-light/80 font-sans font-light">
            With decades of experience and a welcoming touch, Simphiwe ensures every 
            milestone and authentic emotion is documented beautifully.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_FACTS.map((fact, index) => {
            // Safe, type-safe lookup fallback
            const IconComponent = ICON_MAP[fact.iconName] || HelpCircle;

            // Define gorgeous pastel icon backgrounds matching our theme
            const pastelBgClasses = [
              "bg-peach text-peach-dark border-peach-dark/10",
              "bg-sage text-sage-dark border-sage-dark/10",
              "bg-dusty-blue text-dusty-blue-dark border-dusty-blue-dark/10",
              "bg-lavender text-lavender-dark border-lavender-dark/10",
              "bg-cream-dark/60 text-charcoal-light border-beige-dark/20",
              "bg-peach/80 text-peach-dark border-peach-dark/15",
            ];

            const cellColor = pastelBgClasses[index % pastelBgClasses.length];

            return (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-warm-white p-8 rounded-[2rem] border border-beige-dark/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-5"
              >
                {/* Custom Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-sm ${cellColor} transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-charcoal tracking-wide group-hover:text-peach-dark transition-colors duration-200">
                    {fact.title}
                  </h3>
                  <p className="text-xs md:text-sm text-charcoal-light/95 font-sans font-light leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
