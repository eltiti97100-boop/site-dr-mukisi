import PatientPortal from "@/components/patient-portal"

// Données patient exemple
const patientData = {
  id: "PAT001",
  firstName: "Marie",
  lastName: "Dubois",
  email: "marie.dubois@email.com",
  phone: "+590 590 12 34 56",
  dateOfBirth: "1985-03-15",
  address: "45 Rue des Palmiers",
  city: "Pointe-à-Pitre",
  postalCode: "97110",
}

export default function PatientPage() {
  return <PatientPortal patient={patientData} />
}
