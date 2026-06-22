export interface GalleryItem {
  id: string;
  title: string;
  category: "family" | "couple" | "portrait" | "maternity" | "graduation" | "lifestyle";
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  deliverables: string;
  imageUrl: string;
  description: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  stars: number;
  text: string;
  author: string;
  location?: string;
}

export interface FactItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // we will map this to Lucide icons
}

export interface BookingSubmission {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  sessionType: string;
  preferredDate: string;
  preferredLocation: string;
  additionalNotes: string;
}
