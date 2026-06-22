import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("");

  // Smoothly scrolls to a designated section layout
  const scrollToBooking = () => {
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Trigger when client chooses a specific service catalog
  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToBooking();
  };

  const handleClearSelectedService = () => {
    setSelectedService("");
  };

  return (
    <div className="relative min-h-screen flex flex-col pt-[70px]">
      {/* Dynamic Sticky Header */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Sections flow */}
      <main className="flex-grow">
        {/* Hero Banner Showcase */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* Biography Section */}
        <About />

        {/* Photography Catalog Offerings */}
        <Services onBookService={handleBookService} />

        {/* 10-Item Portfolio Gallery */}
        <Gallery />

        {/* Why Choose SS Photography Facts Cards */}
        <WhyChoose />

        {/* Client Reviews Board */}
        <Testimonials />

        {/* Reservation Booking Form Panel */}
        <BookingForm
          selectedService={selectedService}
          onClearSelectedService={handleClearSelectedService}
        />

        {/* Map & Touchpoints Panel */}
        <Contact />
      </main>

      {/* Navigation utilities */}
      <FloatingButtons />

      {/* Cohesive Footer & Hours branding */}
      <Footer onOpenBooking={scrollToBooking} />
    </div>
  );
}
