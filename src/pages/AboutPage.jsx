import SectionHeader from '../components/SectionHeader'

const credentials = [
  'Department of Orthodontics and Dentofacial Orthopedics, Sharad Pawar Dental College and Hospital (DMIMS), Sawangi (Wardha).',
  'Academic association with Datta Meghe Institute of Medical Sciences / Datta Meghe Institute of Higher Education & Research.',
  'Research and clinical focus in orthodontic treatment techniques and dentofacial correction.',
]

function AboutPage() {
  return (
    <section className="section container">
      <div className="about-intro">
        <div className="about-title">
          <SectionHeader
            eyebrow="About The Doctor"
            title="Meet Dr. Shriya Prakash Murarka"
            subtitle="Orthodontics professional, dentist, and dental surgeon combining academic research exposure with patient-focused consultation support."
          />
        </div>
        <article className="card about-intro-image">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGyNK6RPMzHsg/profile-displayphoto-shrink_200_200/B4DZTbgG9NGcAY-/0/1738849415829?e=2147483647&v=beta&t=aaOjulcMW_TU7CFxBAjmmu3LDkwmRxwqLt4CMCeEkZQ"
            alt="Dr. Shriya Prakash Murarka profile"
            className="showcase-image profile-image"
          />
        </article>
      </div>

      <div className="about">
        <div className="card">
          <h3>Academic & Clinical Profile</h3>
          <p>
            Dr. Shriya Prakash Murarka is associated with orthodontic academic environments and has contributed as a
            co-author to orthodontic publications in treatment-focused studies.
          </p>
          <ul>
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-box">
          <p className="stat">DMIMS</p>
          <p>Academic orthodontics association</p>
          <hr className="divider" />
          <p className="stat">Research</p>
          <p>Published orthodontic co-author contributions</p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
