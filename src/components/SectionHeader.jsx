function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {subtitle ? <p className="hero-text">{subtitle}</p> : null}
    </div>
  )
}

export default SectionHeader
