import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import BlogSection from "@/components/blog-section"
import TestimonialsSection from "@/components/testimonials-section"
import FormationsSection from "@/components/formations-section"
import TelemedicineSection from "@/components/telemedicine-section"
import AppointmentCalendar from "@/components/appointment-calendar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AboutSection />
      <GallerySection />
      <BlogSection />
      <TestimonialsSection />
      <FormationsSection />
      <TelemedicineSection />
      <AppointmentCalendar />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  )
}
