// header-footer.js

const header = `
<header>
    <h1>CityTrek BA</h1>
    <nav>
        <ul class="menu">
            <li><a href="index.html">Página Principal</a></li>
            <li><a href="#">Categorías</a>
                <ul class="submenu">
                    <li><a href="lugares.html?categoria=Restaurantes">Restaurantes</a></li>
                    <li><a href="lugares.html?categoria=Museos">Museos</a></li>
                    <li><a href="lugares.html?categoria=Bares">Bares</a></li>
                    <li><a href="lugares.html?categoria=Club de Jazz">Clubes de Jazz</a></li>
                </ul>
            </li>
            <li><a href="telefonos.html">Teléfonos Útiles</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
        </ul>
    </nav>
</header>
`;

const footer = `
<footer>
  <p>&copy; 2023 CityTrek BA</p>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Inserta el encabezado en todas las páginas
  const headerContainer = document.querySelectorAll(".header-container");
  headerContainer.forEach((element) => {
    element.innerHTML = header;
  });

  // Inserta el pie de página en todas las páginas
  const footerContainer = document.querySelectorAll(".footer-container");
  footerContainer.forEach((element) => {
    element.innerHTML = footer;
  });
});