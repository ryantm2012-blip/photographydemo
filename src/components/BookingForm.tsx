import React, { useState, useEffect } from "react";
import { Calendar, User, Phone, Mail, MapPin, ClipboardList, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BookingSubmission } from "../types";

interface BookingFormProps {
  selectedService: string;
  onClearSelectedService: () => void;
}

export default function BookingForm({ selectedService, onClearSelectedService }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingSubmission>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    sessionType: "",
    preferredDate: "",
    preferredLocation: "",
    additionalNotes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState<BookingSubmission | null>(null);

  // Pre-fill the sessionType selection when chosen from a service card
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        sessionType: selectedService,
      }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process form
    setSubmissionDetails({ ...formData });
    setIsSubmitted(true);
    
    // Clear state inputs in background
    setFormData({
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      sessionType: "",
      preferredDate: "",
      preferredLocation: "",
      additionalNotes: "",
    });
    
    onClearSelectedService();
  };

  // Session options list
  const sessionOptions = [
    "Family Photography (R1,800)",
    "Couple Photography (R1,500)",
    "Portrait Photography (R1,200)",
    "Maternity Photography (R1,700)",
    "Graduation Photography (R1,400)",
    "Event Photography (From R2,500)",
  ];

  return (
    <section id="booking" className="py-24 bg-cream-dark/20 relative overflow-hidden">
      {/* Dynamic pastel background grids */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-peach/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/8 right-1/10 w-80 h-80 rounded-full bg-sage/10 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-peach-dark block">
            Reservation
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold tracking-tight">
            Book Your Session
          </h2>
          <div className="w-16 h-1 bg-peach rounded-full mx-auto" />
          <p className="text-sm md:text-base text-charcoal-light/80 font-sans font-light">
            Ready to capture your milestones? Fill out our professional query form below, 
            and Simphiwe will reach out personally to plan your custom story.
          </p>
        </div>

        {/* Elegant Form Card */}
        <div className="bg-warm-white rounded-[2.5rem] border border-beige-dark/40 shadow-xl p-8 md:p-12 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-charcoal/80 uppercase block">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-peach-dark/60 pointer-events-none" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Sipho Nkosi"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-beige-dark/30 bg-cream/30 focus:bg-white text-charcoal font-sans text-sm outline-none transition-all duration-200 focus:border-peach-dark focus:ring-1 focus:ring-peach-dark"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-charcoal/80 uppercase block">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-peach-dark/60 pointer-events-none" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +27 72 345 6789"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-beige-dark/30 bg-cream/30 focus:bg-white text-charcoal font-sans text-sm outline-none transition-all duration-200 focus:border-peach-dark focus:ring-1 focus:ring-peach-dark"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-charcoal/80 uppercase block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-peach-dark/60 pointer-events-none" />
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                        placeholder="e.g. sipho@gmail.com"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-beige-dark/30 bg-cream/30 focus:bg-white text-charcoal font-sans text-sm outline-none transition-all duration-200 focus:border-peach-dark focus:ring-1 focus:ring-peach-dark"
                      />
                    </div>
                  </div>

                  {/* Session Type Select Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-charcoal/80 uppercase block">
                      Session Type
                    </label>
                    <div className="relative">
                      <ClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-peach-dark/60 pointer-events-none" />
                      <select
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-beige-dark/30 bg-cream/30 focus:bg-white text-charcoal font-sans text-sm outline-none transition-all duration-200 focus:border-peach-dark focus:ring-1 focus:ring-peach-dark appearance-none cursor-pointer"
                      >
                        <option value="">-- Choose a Shoot Style --</option>
                        {sessionOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-charcoal/80 uppercase block">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-peach-dark/60 pointer-events-none" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-beige-dark/30 bg-cream/30 focus:bg-white text-charcoal font-sans text-sm outline-none transition-all duration-200 focus:border-peach-dark focus:ring-1 focus:ring-peach-dark cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Preferred Location */}
                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-charcoal/80 uppercase block">
                      Preferred Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-peach-dark/60 pointer-events-none" />
                      <input
                        type="text"
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        placeholder="e.g. Camps Bay Beach or Nature Reserve"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-beige-dark/30 bg-cream/30 focus:bg-white text-charcoal font-sans text-sm outline-none transition-all duration-200 focus:border-peach-dark focus:ring-1 focus:ring-peach-dark"
                      />
                    </div>
                  </div>

                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold tracking-widest text-charcoal/80 uppercase block">
                    Additional Notes & Vision
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about your family, your goals for the photoshoot, clothing ideas, or custom timing preferences..."
                    className="w-full p-4 rounded-xl border border-beige-dark/30 bg-cream/30 focus:bg-white text-charcoal font-sans text-sm outline-none transition-all duration-200 focus:border-peach-dark focus:ring-1 focus:ring-peach-dark resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 rounded-full text-xs font-sans font-semibold tracking-widest uppercase text-white bg-peach-dark hover:bg-peach-dark/95 active:scale-98 transition-all duration-200 shadow-md cursor-pointer"
                    id="submit-booking-btn"
                  >
                    Book Your Session
                  </button>
                  <p className="text-[10px] text-charcoal-light/60 mt-3 font-sans">
                    * No payment required upfront. Simphiwe will verify availability first.
                  </p>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-6 select-none"
              >
                <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto border border-sage-dark/30 shadow-inner">
                  <CheckCircle className="w-10 h-10 text-sage-dark" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-charcoal">
                    Thank You, {submissionDetails?.fullName}!
                  </h3>
                  <p className="text-sm font-sans text-peach-dark font-medium uppercase tracking-[0.15em]">
                    Your Session Request has been Received
                  </p>
                  <div className="w-12 h-0.5 bg-peach mx-auto my-3" />
                  <p className="text-sm text-charcoal-light max-w-lg mx-auto leading-relaxed">
                    We&rsquo;ve successfully logged your request for the{" "}
                    <strong className="text-charcoal">{submissionDetails?.sessionType}</strong> on{" "}
                    <span className="underline font-medium text-charcoal">
                      {submissionDetails?.preferredDate}
                    </span>
                    . Simphiwe will reach out directly on{" "}
                    <span className="font-semibold text-charcoal">{submissionDetails?.phoneNumber}</span>{" "}
                    or at <span className="font-semibold text-charcoal">{submissionDetails?.emailAddress}</span>{" "}
                    within the next 24 hours to confirm schedule availability and coordinate locations.
                  </p>
                </div>

                {/* Return button */}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-beige hover:bg-beige-dark text-charcoal-light hover:text-charcoal text-xs font-sans font-bold tracking-wider uppercase rounded-full border border-beige-dark/40 transition-colors duration-200 mt-4 cursor-pointer"
                  id="success-back-btn"
                >
                  Submit Another Query
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
