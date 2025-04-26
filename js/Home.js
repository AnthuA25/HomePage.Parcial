const HomeComponent = ({ nombre, imagen, ciudad, area, categoria, habitaciones, baños, precio_actual, parqueaderos, precio_anterior, onHomeClick }) => {
    const home = { nombre, imagen, ciudad, area, habitaciones, baños, precio_actual, precio_anterior };
    return (
        <div className="card" data-category={categoria} onClick={() => onHomeClick(home)}>
            <img src={imagen} />
            <div className="card-information">
                <div className="titleHome">
                    <h5>{ciudad}</h5>
                </div>
                <div className="price-content">
                    <div className="current_price">$ {precio_actual}</div>
                    <div className="previous_price">$ {precio_anterior}</div>
                </div>
                <div className="name">{nombre}</div>
                <div className="extra-info">
                    <div className="area">{area} - {habitaciones}Hab - {baños}Baños - {parqueaderos}Parq.</div>
                </div>
                <button className="btn-detail">Ver Detalle</button>
            </div>
        </div>
    );
};



const HomeListComponent = ({ homesData, onHomeClick }) => (
    <div className="card-grid">
        {homesData.map((card, index) => (
            <HomeComponent
                nombre={card.nombre}
                imagen={card.imagen}
                ciudad={card.ciudad}
                area={card.area}
                parqueaderos={card.parqueaderos}
                habitaciones={card.habitaciones}
                baños={card.baños}
                precio_actual={card.precio_actual}
                categoria={card.categoria}
                precio_anterior={card.precio_anterior}
                latitud={card.latitud}
                longitud={card.longitud}
                key={index}
                onHomeClick={onHomeClick}
            />
        ))}
    </div>
);

