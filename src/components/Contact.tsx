import { motion } from "motion/react";
import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const contactCards = [
    {
      id: "c1",
      title: "Call Direct",
      value: "+27 72 345 6789",
      href: "tel:+27723456789",
      icon: Phone,
      bgColor: "bg-peach",
      textColor: "text-peach-dark",
      borderColor: "border-peach-dark/10",
      description: "Available Mon-Sat for session briefings and direct inquiries.",
    },
    {
      id: "c2",
      title: "WhatsApp Chat",
      value: "+27 72 345 6789",
      href: "https://wa.me/27723456789",
      icon: MessageCircle,
      bgColor: "bg-sage",
      textColor: "text-sage-dark",
      borderColor: "border-sage-dark/10",
      description: "Send us a quick chat or reference photoshoot inspiration photos.",
    },
    {
      id: "c3",
      title: "Email Studio",
      value: "hello@ssphotography.co.za",
      href: "mailto:hello@ssphotography.co.za",
      icon: Mail,
      bgColor: "bg-dusty-blue",
      textColor: "text-dusty-blue-dark",
      borderColor: "border-dusty-blue-dark/10",
      description: "For wedding outlines, corporate events, and custom proposals.",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@SSPhotographyZA",
      href: "https://instagram.com/SSPhotographyZA",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
    {
      name: "Facebook",
      handle: "SS Photography",
      href: "https://facebook.com/SSPhotography",
      icon: Facebook,
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden select-none">
      <div className="absolute top-1/10 left-1/3 w-[500px] h-[500px] rounded-full bg-lavender/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-peach-dark block">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold tracking-tight">
            Let&rsquo;s Create Something Beautiful
          </h2>
          <div className="w-16 h-1 bg-peach rounded-full mx-auto" />
          <p className="text-sm md:text-base text-charcoal-light/80 font-sans font-light">
            Based in the serene slopes of Cape Town, South Africa, capturing moments 
            countrywide. Reach out through your preferred platform today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.a
                  href={card.href}
                  key={card.id}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  referrerPolicy={card.href.startsWith("http") ? "no-referrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-6 p-6 bg-warm-white rounded-[2rem] border border-beige-dark/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none"
                  id={`contact-${card.id}`}
                >
                  {/* Decorative pastel icon frame */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${card.bgColor} ${card.textColor} ${card.borderColor} shrink-0 transform group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow space-y-0.5">
                    <span className="text-[10px] tracking-widest font-sans font-bold uppercase text-charcoal-light/50">
                      {card.title}
                    </span>
                    <h3 className="text-base md:text-lg font-serif font-bold text-charcoal tracking-wide">
                      {card.value}
                    </h3>
                    <p className="text-xs text-charcoal-light/80 font-sans font-light">
                      {card.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-beige-dark/70 group-hover:text-peach-dark transform group-hover:translate-x-1.5 transition-all" />
                </motion.a>
              );
            })}
          </div>

          {/* Right Side: Address & Social channels */}
          <div className="lg:col-span-5 bg-warm-white p-8 md:p-10 rounded-[2.5rem] border border-beige-dark/30 shadow-sm space-y-8 select-none">
            
            {/* Studio Location Map Mockup */}
            <div className="space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-peach-dark flex items-center gap-2">
                <MapPin className="w-4 h-4 text-peach-dark" />
                Studio Base
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Cape Town, South Africa
              </h3>
              <p className="text-xs font-sans text-charcoal-light font-light leading-relaxed">
                Our home base is in the gorgeous Peninsula, but our portfolio extends all over South Africa, 
                including Johannesburg, Durban, and the picturesque Garden Route. 
              </p>
              {/* Artistic map placeholder */}
              <div className="aspect-[16/9] w-full rounded-2xl bg-beige border border-beige-dark/20 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8c6a5e_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="w-10 h-10 rounded-full bg-peach/50 animate-ping absolute" />
                <div className="w-6 h-6 rounded-full bg-peach flex items-center justify-center border-2 border-warm-white shadow-md relative">
                  <MapPin className="w-3.5 h-3.5 text-peach-dark" />
                </div>
                <span className="absolute bottom-3 left-3 text-[9px] font-mono uppercase bg-warm-white/90 px-2 py-0.5 rounded border border-beige-dark/20 text-charcoal-light">
                  -33.9249° S, 18.4241° E
                </span>
              </div>
            </div>

            {/* Social Channels panel */}
            <div className="pt-6 border-t border-beige-dark/20 space-y-4">
              <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-charcoal-light">
                Follow Simphiwe&rsquo;s Journey
              </h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      href={social.href}
                      key={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className="flex items-center justify-between text-sm font-sans text-charcoal-light hover:text-charcoal group p-2.5 rounded-lg hover:bg-cream-dark/15 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <SocialIcon className={`w-5 h-5 text-charcoal-light group-hover:scale-105 transition-transform ${social.color}`} />
                        <span className="font-medium">{social.name}</span>
                      </div>
                      <span className="text-xs text-peach-dark font-mono">{social.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
