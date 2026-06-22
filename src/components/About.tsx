import { motion } from "motion/react";
import { Award, Heart, CheckCircle2 } from "lucide-react";
import { CUSTOM_IMAGES } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Pastel Blob */}
      <div className="absolute top-1/2 left-3/4 w-[500px] h-[500px] rounded-full bg-lavender/40 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm">
              
              {/* Outer decorative soft border */}
              <div className="absolute -inset-4 rounded-[3rem] border border-beige-dark/40 transform -rotate-3 pointer-events-none" />
              
              {/* Soft background panel offset */}
              <div className="absolute inset-0 bg-sage rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10" />

              {/* Main image container */}
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-beige border-4 border-warm-white shadow-2xl">
                <img
                  src={CUSTOM_IMAGES.simphiwePortrait}
                  alt="Simphiwe Sithole Portrait"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative experience ring */}
                <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-peach flex items-center justify-center">
                    <Award className="w-5 h-5 text-peach-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-widest font-sans font-semibold">
                      Legacy
                    </p>
                    <p className="text-sm font-serif font-bold text-white">
                      30+ Years Behind Camera
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: First-Person Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-8 select-none">
            <div className="space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-peach-dark block">
                Meet the Storyteller
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold tracking-tight">
                Hello, I&rsquo;m Simphiwe Sithole
              </h2>
              <div className="w-16 h-1 bg-peach rounded-full" />
            </div>

            {/* Biography with comfortable line heights and spacing */}
            <div className="space-y-6 text-charcoal-light font-sans text-base leading-relaxed font-light">
              <p className="text-lg text-charcoal leading-relaxed font-normal">
                Hello, my name is <span className="font-semibold text-peach-dark">Simphiwe Sithole</span>, founder of SS Photography. I am a passionate South African photographer who has spent more than <span className="font-semibold text-charcoal">30 years</span> capturing the beauty of people, families, relationships, and life's most meaningful moments. 
              </p>
              
              <p>
                Photography has always been more than a profession to me&mdash;it is a way of preserving memories that families can cherish for generations. Over the years I have photographed hundreds of families, couples, graduates, newborns, and special events throughout South Africa. My goal is always to create natural, authentic images that tell real stories and capture genuine emotions.
              </p>

              <p className="italic font-normal font-serif text-charcoal text-lg bg-beige/30 p-4 border-l-4 border-peach-dark rounded-r-xl">
                &ldquo;I believe every smile, embrace, and milestone deserves to be remembered beautifully. Through my lens, I strive to create photographs that become treasured family heirlooms for years to come.&rdquo;
              </p>
            </div>

            {/* Quick trust bullet features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-beige-dark/30">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-dark shrink-0" />
                <span className="text-sm text-charcoal font-medium">Cape Town based, catering countrywide</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-dark shrink-0" />
                <span className="text-sm text-charcoal font-medium">Warm, family-first shooting philosophy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-dark shrink-0" />
                <span className="text-sm text-charcoal font-medium">Stunning natural-light specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-dark shrink-0" />
                <span className="text-sm text-charcoal font-medium">High-resolution heirloom digital deliverables</span>
              </div>
            </div>

            {/* Fine elegance: Simphiwe's artistic signature */}
            <div className="pt-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-serif italic text-2xl text-peach-dark font-medium leading-none">
                  Simphiwe Sithole
                </span>
                <span className="text-[10px] text-charcoal-light/60 uppercase tracking-widest font-sans mt-1.5">
                  Founder & Principal Artist
                </span>
              </div>
              <div className="w-20 h-px bg-beige-dark/60 block" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
