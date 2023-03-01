let ingreso = document.getElementById("presentacion");

ingreso.addEventListener("click", () => {
  titulo();
  contenido();
});

function titulo() {
  presentacion.innerHTML = `<header>
    <img class="img1" src="/img/images.jpg" alt="">
    <div class="titulo">
        <h1>Alberto Estrada</h1><br>
        <div class="subtitulo">
            <h3>Curriculum Vitae</h3>
        </div>
    </div>
</header>
`;
}
let main = document.getElementById("main");

function contenido() {
  let contenidocv = `<main class="block">
  <div class="card">
  <img src="imagen.jpg" alt="Imagen de ejemplo">
  <h2>Título de la tarjeta</h2>
  <p>Contenido de la tarjeta</p>
  <a href="/habilidades.html">Habilidades</a>
</div><br>
<div class="card">
<img src="imagen.jpg" alt="Imagen de ejemplo">
<h2>Título de la tarjeta</h2>
<p>Contenido de la tarjeta</p>
<a href="/habilidades.html">Habilidades</a>
</div><br>
<div class="card">
<img src="imagen.jpg" alt="Imagen de ejemplo">
<h2>Título de la tarjeta</h2>
<p>Contenido de la tarjeta</p>
<a href="/habilidades.html">Habilidades</a>
</div>

  </main>`;

  main.innerHTML = contenidocv;
}
