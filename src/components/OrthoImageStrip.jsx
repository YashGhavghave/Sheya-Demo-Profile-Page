function OrthoImageStrip({ items }) {
  return (
    <section className="ortho-strip" aria-label="Orthodontic visual highlights">
      {items.map((item) => (
        <article className="card ortho-strip-card" key={item.src}>
          <img src={item.src} alt={item.alt} className="showcase-image strip-image" />
          <p className="strip-caption">{item.caption}</p>
        </article>
      ))}
    </section>
  )
}

export default OrthoImageStrip
