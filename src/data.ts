import { GalleryItem, ServiceItem, TestimonialItem, FactItem } from "./types";

// Import images as ES modules so Vite compiles and bundles them correctly
import heroSunset from "./assets/images/sunset_family_hero_1782116276747.jpg";
import simphiwePortrait from "./assets/images/simphiwe_sithole_portrait_1782116295421.jpg";
import graduationPortrait from "./assets/images/graduation_portrait_1782116311225.jpg";
import maternityPhotoshoot from "./assets/images/maternity_photoshoot_1782116327680.jpg";
import coupleBeachWalk from "./assets/images/couple_beach_walk_1782116346336.jpg";
import familyParkPicnic from "./assets/images/family_park_picnic_1782117697179.jpg";
import motherDaughterSofa from "./assets/images/mother_daughter_sofa_1782117715789.jpg";
import outdoorLifestyleFamily from "./assets/images/outdoor_lifestyle_family_1782117734938.jpg";

// Bespoke generated assets with specific timestamped filenames
export const CUSTOM_IMAGES = {
  heroSunset,
  simphiwePortrait,
  graduationPortrait,
  maternityPhotoshoot,
  coupleBeachWalk,
  familyParkPicnic,
  motherDaughterSofa,
  outdoorLifestyleFamily,
};

// Hand-curated professional photography gallery items mapping to the user's exactly 10 requests:
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Family Portrait at Sunset",
    category: "family",
    categoryLabel: "Family",
    imageUrl: CUSTOM_IMAGES.heroSunset,
    description: "A warm South African family connection at sunset, beautifully backlit by golden sunbeams on a soft tranquil beach.",
  },
  {
    id: "g2",
    title: "Family Picnic in Nature",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000",
    description: "Joyful family sharing raw laughter on an elegant linen picnic blanket surrounded by warm natural foliage.",
  },
  {
    id: "g3",
    title: "Mother and Daughter Portrait",
    category: "portrait",
    categoryLabel: "Portrait",
    imageUrl: CUSTOM_IMAGES.motherDaughterSofa,
    description: "An intimate, soulful moment of love and connection between a happy African mother and her smiling daughter.",
  },
  {
    id: "g4",
    title: "Couple Walking on the Beach",
    category: "couple",
    categoryLabel: "Couples",
    imageUrl: CUSTOM_IMAGES.coupleBeachWalk,
    description: "A peaceful walk along the shoreline at dusk as beautiful lavender and pastel blue sky tones reflect on the water.",
  },
  {
    id: "g5",
    title: "Couple Engagement Session",
    category: "couple",
    categoryLabel: "Couples",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1000",
    description: "Candid emotional moment of warmth and affection, captured in authentic sunset lighting.",
  },
  {
    id: "g6",
    title: "Professional Portrait of a Young Woman",
    category: "portrait",
    categoryLabel: "Portrait",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1000",
    description: "Stunning professional headshot featuring warm ambient lighting, accentuating authentic expressions and beautiful detail.",
  },
  {
    id: "g7",
    title: "Graduation Portrait Session",
    category: "graduation",
    categoryLabel: "Graduation",
    imageUrl: CUSTOM_IMAGES.graduationPortrait,
    description: "A proud milestone portrait celebrating accomplishment, framed by elegant soft focus light peach hues.",
  },
  {
    id: "g8",
    title: "Maternity Photoshoot",
    category: "maternity",
    categoryLabel: "Maternity",
    imageUrl: CUSTOM_IMAGES.maternityPhotoshoot,
    description: "A serene, artistic maternity portrait in an African field, capturing the soft poetic breeze of expected motherhood.",
  },
  {
    id: "g9",
    title: "Multi-Generation Family Portrait",
    category: "family",
    categoryLabel: "Family",
    imageUrl: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=1000",
    description: "A heartwarming embrace spanning multiple generations, preserving deep legacy and familial warmth.",
  },
  {
    id: "g10",
    title: "Outdoor Lifestyle Family Session",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    imageUrl: CUSTOM_IMAGES.outdoorLifestyleFamily,
    description: "A peaceful evening walk with a South African family down a scenic country trail under soft warm skies.",
  },
];

// Elegant services corresponding to user specs:
export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Family Photography",
    price: "R1,800",
    duration: "60-minute session",
    deliverables: "30 edited photos",
    imageUrl: CUSTOM_IMAGES.familyParkPicnic,
    description: "A warm and relaxed experience designed for families to express genuine laughter and capture memories to frame for a lifetime.",
    badge: "Most Popular",
  },
  {
    id: "s2",
    title: "Couple Photography",
    price: "R1,500",
    duration: "60-minute session",
    deliverables: "25 edited photos",
    imageUrl: CUSTOM_IMAGES.coupleBeachWalk,
    description: "An intimate, storytelling photoshoot capturing the unique spark, deep eyes, and authentic chemistry of couples.",
  },
  {
    id: "s3",
    title: "Portrait Photography",
    price: "R1,200",
    duration: "45-minute session",
    deliverables: "20 edited photos",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    description: "Timeless individual portraits celebrating you, suitable for graduation, professional headshots, or creative portfolios.",
  },
  {
    id: "s4",
    title: "Maternity Photography",
    price: "R1,700",
    duration: "60-minute session",
    deliverables: "30 edited photos",
    imageUrl: CUSTOM_IMAGES.maternityPhotoshoot,
    description: "Graceful and elegant sessions celebrating the beautiful journey of motherhood, glowing with golden hour pastel tones.",
  },
  {
    id: "s5",
    title: "Graduation Photography",
    price: "R1,400",
    duration: "45-minute session",
    deliverables: "20 edited photos",
    imageUrl: CUSTOM_IMAGES.graduationPortrait,
    description: "Honoring your hard work and achievements with bright, crisp academic portraits to share with family near and far.",
  },
  {
    id: "s6",
    title: "Event Photography",
    price: "From R2,500",
    duration: "Tailored to your schedule",
    deliverables: "Professional capture of all milestones",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
    description: "Exceptional documentary coverage of birthday milestones, anniversaries, corporate celebrations, or custom local gatherings.",
  },
];

// Why Choose SS Photography points:
export const WHY_CHOOSE_FACTS: FactItem[] = [
  {
    id: "f1",
    title: "30+ Years of Experience",
    description: "Decades spent mastering light, capturing real emotions, and earning deep trust across generations of South African families.",
    iconName: "History",
  },
  {
    id: "f2",
    title: "Natural Editing Style",
    description: "Bespoke clean adjustments that preserve gorgeous real skin tones, authentic sky hues, and a classic pastel warmth.",
    iconName: "Sliders",
  },
  {
    id: "f3",
    title: "Friendly & Relaxed Sessions",
    description: "Simphiwe is known for helping children, toddlers, and couples feel completely at ease right away with his warm paternal charm.",
    iconName: "Smile",
  },
  {
    id: "f4",
    title: "Professional Equipment",
    description: "Utilizing top-tier prime lenses and high-resolution camera bodies that perform flawlessly in soft light or direct golden sun.",
    iconName: "Camera",
  },
  {
    id: "f5",
    title: "High-Quality Images",
    description: "Crisp, richly colored masterpieces exported in ultra-high resolution ready for large fine-art prints or digital sharing.",
    iconName: "Sparkles",
  },
  {
    id: "f6",
    title: "Passion for Storytelling",
    description: "Every portrait session is approached as a narrative piece, turning brief moments into timeless heirloom chapters.",
    iconName: "BookOpen",
  },
];

// Testimonials:
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    stars: 5,
    text: "Simphiwe made our family feel so comfortable. He has a magical way with kids and captured memories we will cherish forever. The sunset lighting was breathtaking!",
    author: "The Jacobs Family",
    location: "Cape Town",
  },
  {
    id: "t2",
    stars: 5,
    text: "Our couple shoot on the beach felt incredibly relaxed. The photos are absolutely stunning, with such a soft, timeless, vintage quality. Highly recommended!",
    author: "Thando & Lerato",
    location: "Johannesburg",
  },
  {
    id: "t3",
    stars: 5,
    text: "Professional, kind, and incredibly talented. Simphiwe captured my graduation portraits and they look like fine-art paintings. He knows exactly how to work with natural light.",
    author: "Sarah M.",
    location: "Stellenbosch",
  },
];
