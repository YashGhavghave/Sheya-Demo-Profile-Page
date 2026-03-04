import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section container">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Book a Professional Consultation"
        subtitle="Connect for orthodontic consultations, treatment queries, and appointment details."
      />

      <article className="card booking-card">
        <h3>Book a Consultation</h3>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input className="booking-input" type="text" placeholder="Full Name" required />
          <input className="booking-input" type="tel" placeholder="Phone Number" required />
          <input className="booking-input" type="email" placeholder="Email Address" required />
          <textarea className="booking-input booking-textarea" placeholder="Message" rows="4" />
          <button type="submit" className="btn btn-solid booking-submit">
            Submit
          </button>
        </form>
        {submitted ? <p className="booking-note">Connect to developer for more changes.</p> : null}
      </article>

      <div className="contact-grid">
        <article className="card">
          <h3>Reception</h3>
          <p>Phone: +91 75586 33168</p>
          <p>Instagram: @shri_orthodontics</p>
        </article>

        <article className="card">
          <h3>Coverage Areas</h3>
          <p>Nagpur</p>
          <p>Wardha, Yavatmal, Betul</p>
          <p>Clinic location can be shared on request</p>
        </article>

        <article className="card">
          <h3>Verification Note</h3>
          <p>Contact details above are from publicly shared professional profile information.</p>
          <p>For exact clinic map and slot timings, please confirm directly during appointment booking.</p>
        </article>
      </div>
    </section>
  )
}

export default ContactPage
