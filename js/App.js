function NavBarComponent() {
    return (
      <nav className="navbar">
        <h1 className="navbar-title">Home</h1>
        <ul className="navitems">
          <li>
            <a href="index.html">Catálogo</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  function FooterComponent() {
    return (
      <footer>
        <p>Av Flora Tristan s/n, La Molina - Peru</p>
        <p>home@gmail.com</p>
        <p>&copy; 2025 Home. Todos los derechos reservados.</p>
      </footer>
    );
  }
  
  ReactDOM.render(
    <NavBarComponent />,
    document.getElementById("navbarcomponent")
  );
  ReactDOM.render(
    <FooterComponent />,
    document.getElementById("footercomponent")
  );