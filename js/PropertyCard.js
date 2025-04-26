function PropertyCardComponent({ home, goBack }) {
  const [showMap, setShowMap] = React.useState(false);

  const toggleMap = (e) => {
    e.preventDefault();
    setShowMap(true);
  };

  return (
    <div className="home-detail">
      <div className="image-container">
        <button onClick={goBack}>Volver</button>
        <img src={home.imagen} />
      </div>
      <div className="info-container">
        <h2>{home.nombre}</h2>
        <p><strong>Categoría:</strong> {home.categoria}</p>
        <p><strong>Ciudad:</strong> {home.ciudad}</p>
        <p><strong>Habitaciones:</strong> {home.habitaciones}</p>
        <p><strong>Baños:</strong> {home.baños}</p>
        {!showMap ? (
          <a href="#" className="map" onClick={toggleMap}>Ver en Google Maps</a>
        ) : (
          <iframe
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${home.latitud},${home.longitud}&output=embed`}
          ></iframe>
        )}
      </div>
    </div>
  );
}