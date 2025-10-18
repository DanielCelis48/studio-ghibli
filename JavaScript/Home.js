function buscadorFuncion(valor) {
  if (valor.length >= 3) {
    const filtradas = peliculas.filter(p =>
      p.title.toLowerCase().includes(valor.toLowerCase())
    );
    document.getElementById("la-lista").innerHTML = generarLista(filtradas);
  } else {
    document.getElementById("la-lista").innerHTML = generarLista(peliculas);
  }
}

function generarLista(arrayPeliculas) {
  let listaHTML = "";
  for (let i = 0; i < arrayPeliculas.length; i++) {
    listaHTML += `
      <div class="c-lista" onclick="Detalle('${arrayPeliculas[i].id}')">
        <img src="${arrayPeliculas[i].image}" alt="${arrayPeliculas[i].title}" height="100" loading="lazy">
        <p><strong>${arrayPeliculas[i].title}</strong></p>
        <p>${arrayPeliculas[i].release_date}</p>
      </div>
    `;
  }
  return listaHTML;
}

function Home() {
  document.getElementById("root").innerHTML = "";

  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar película...";
  buscador.addEventListener("input", () => buscadorFuncion(buscador.value));

  const directores = [...new Set(peliculas.map(p => p.director))];
  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("directores-container");

  directores.forEach(director => {
    const btn = document.createElement("button");
    btn.textContent = director;
    btn.addEventListener("click", () => FiltroConexion(director));
    contenedorFiltro.appendChild(btn);
  });

  const contenedorPeliculas = document.createElement("div");
  contenedorPeliculas.id = "la-lista";
  contenedorPeliculas.innerHTML = generarLista(peliculas);

  document.getElementById("root").append(buscador, contenedorFiltro, contenedorPeliculas);
}

function FiltroConexion(director) {
  const filtradas = peliculas.filter(p => p.director === director);
  document.getElementById("la-lista").innerHTML = generarLista(filtradas);
}
