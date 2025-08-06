import Header from "@/components/header"
import Footer from "@/components/footer"
import AppointmentCalendar from "@/components/appointment-calendar"

export default function RendezVousPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AppointmentCalendar />
      <Footer />
    </div>
  )
}
