import SectionHeader from '../components/SectionHeader'

const testimonials = [
  {
    quote:
      'Recognized for academic involvement in orthodontic publications and treatment-focused research collaborations.',
    author: 'Professional Summary',
  },
  {
    quote:
      'Associated with the Department of Orthodontics and Dentofacial Orthopedics at Sharad Pawar Dental College and Hospital, DMIMS.',
    author: 'Academic Affiliation',
  },
  {
    quote:
      'Public social profile presence indicates consultant orthodontic services in Nagpur, Wardha, Yavatmal, and Betul.',
    author: 'Public Professional Presence',
  },
]

function TestimonialsPage() {
  return (
    <section className="section container">
      <SectionHeader
        eyebrow="Professional Highlights"
        title="Profile & Practice Snapshot"
        subtitle="A concise overview based on available academic and publicly shared professional information."
      />
      <div className="grid">
        {testimonials.map((item) => (
          <article className="card" key={item.author}>
            <blockquote className="quote">“{item.quote}”</blockquote>
            <p className="patient">— {item.author}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsPage
