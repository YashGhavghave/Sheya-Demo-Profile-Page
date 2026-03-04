import { NavLink } from 'react-router-dom'
import ClinicMap from '../components/ClinicMap'
import InfoCard from '../components/InfoCard'
import OrthoImageStrip from '../components/OrthoImageStrip'
import SectionHeader from '../components/SectionHeader'

const MAP_EMBED_URL = 'https://www.google.com/maps?q=Wardha%2C%20Maharashtra%2C%20India&output=embed'

const highlights = [
  {
    title: 'Academic & Clinical Foundation',
    text: 'Associated with the Department of Orthodontics and Dentofacial Orthopedics at Sharad Pawar Dental College and Hospital, DMIMS.',
  },
  {
    title: 'Research-Backed Orthodontics',
    text: 'Co-authored studies including work on Twin Block appliance, Clear Block appliance, and interdisciplinary approaches.',
  },
  {
    title: 'Regional Consultation Access',
    text: 'Consultation support available across Nagpur, Wardha, Yavatmal, and Betul.',
  },
]

const homeImages = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1677174625625-fb6f183af447?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Orthodontics braces visual panel',
    caption: 'Braces Treatment',
  },
  {
    src: 'https://media.gettyimages.com/id/1480586860/photo/womans-hand-holding-invisible-aligners.jpg?s=612x612&w=0&k=20&c=cNDEQ-ix4l3Fo-h9wTykDZQ7eYkis05efd0qZKNcw6M=',
    alt: 'Clear aligner planning visual panel',
    caption: 'Aligner Planning',
  },
  {
    src: 'https://www.myradental.co.uk/api/media/file/orthodontics-in-smile-design-1280x720.webp',
    alt: 'Orthodontic smile design visual panel',
    caption: 'Smile Design',
  },
]

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <SectionHeader
              eyebrow="Orthodontics Doctor, Dentist & Dental Surgeon"
              title="Dr. Shriya Prakash Murarka"
              subtitle="Orthodontics professional, dentist, and dental surgeon with academic and clinical involvement in Dentofacial Orthopedics and smile correction care."
            />
            <div className="hero-actions">
              <NavLink to="/contact" className="btn btn-solid">
                Schedule Appointment
              </NavLink>
              <NavLink to="/services" className="btn btn-outline">
                View Services
              </NavLink>
            </div>
          </div>
          <article className="hero-visual card">
            <img src="https://plus.unsplash.com/premium_photo-1663088767412-b10c8dc27ad1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dr. Shriya Prakash Murarka dentist and dental surgeon profile visual" className="showcase-image profile-image" />
          </article>
        </div>
      </section>

      <section className="section container">
        <h2>Professional Highlights</h2>
        <OrthoImageStrip items={homeImages} />
        <div className="grid">
          {highlights.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>Advanced Orthodontic Visuals</h2>
        <div className="showcase-grid">
          <article className="card cool-panel">
            <img src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41368-025-00350-2/MediaObjects/41368_2025_350_Fig9_HTML.png" alt="Clear aligner treatment concept" className="showcase-image" />
            <h3>Clear Aligner Planning</h3>
            <p>Digital-first treatment pathways that support precision and patient comfort.</p>
          </article>
          <article className="card cool-panel">
            <img src="https://www.shutterstock.com/shutterstock/photos/2534738081/display_1500/stock-photo-smile-design-treatment-in-dental-aesthetic-dentistry-with-laminate-veneers-and-dental-crown-2534738081.jpg" alt="Orthodontic smile planning concept" className="showcase-image" />
            <h3>Smile Design Workflow</h3>
            <p>Structured consultation and treatment staging for better orthodontic outcomes.</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <h2>Find the Clinic</h2>
        <ClinicMap embedUrl={MAP_EMBED_URL} />
      </section>
    </>
  )
}

export default HomePage
