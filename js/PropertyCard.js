function PropertyCardComponent({ home, goBack }) {
  
    return (
      <div className="home-detail">
        <button onClick={goBack}>← Volver</button>
        <h2>{home.nombre}</h2>
        <p><strong>Categoría:</strong> {home.categoria}</p>
        <p><strong>Ciudad:</strong> {home.ciudad}</p>
        <p><strong>Habitaciones:</strong> {home.habitaciones}</p>
        <p><strong>Baños:</strong> {home.baños}</p>
        <a href="">Ver en Google Maps</a>
      </div>
    );
  }