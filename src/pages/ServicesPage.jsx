import InfoCard from '../components/InfoCard'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    title: 'Clear Aligner Consultation',
    text: 'Assessment and treatment planning for discreet, removable orthodontic correction pathways.',
  },
  {
    title: 'Twin Block Appliance Planning',
    text: 'Orthodontic functional appliance-focused consultation aligned with growth and jaw correction goals.',
  },
  {
    title: 'Clear Block Approach Insights',
    text: 'Clinical guidance based on treatment research involving clear block appliance techniques.',
  },
  {
    title: 'Dentofacial Orthopedic Evaluation',
    text: 'Consultation support for bite correction, jaw growth balance, and functional alignment concerns.',
  },
  {
    title: 'Interdisciplinary Case Review',
    text: 'Orthodontic-prosthetic coordination guidance for complex treatment planning scenarios.',
  },
  {
    title: 'Second Opinion Consultation',
    text: 'Independent review of treatment options for ongoing or newly planned orthodontic care.',
  },
]

function ServicesPage() {
  return (
    <section className="section container">
      <SectionHeader
        eyebrow="Clinical Services"
        title="Orthodontic Consultation & Treatment Support"
        subtitle="Professional guidance informed by academic orthodontic exposure, dentofacial orthopedics, and clinical care standards."
      />
      <div className="grid">
        {services.map((service) => (
          <InfoCard key={service.title} title={service.title} text={service.text} />
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
