function ClinicMap({ embedUrl }) {
  if (!embedUrl) {
    return (
      <article className="map-card">
        <h3>Clinic Location Map</h3>
        <p>
          Add your Google Maps embed URL in <strong>MAP_EMBED_URL</strong> inside the Home page file to display the
          clinic location here.
        </p>
      </article>
    )
  }

  return (
    <article className="map-card">
      <h3>Clinic Location Map</h3>
      <div className="map-frame-wrap">
        <iframe
          className="map-frame"
          title="Doctor clinic location"
          src={embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </article>
  )
}

export default ClinicMap
