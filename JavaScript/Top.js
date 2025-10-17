function Top() {
  document.getElementById("root").innerHTML = "<h2 style='text-align:center;'>🎬 Mejores Películas de Studio Ghibli</h2>";

  // Ordenamos las películas por puntuación (rt_score)
  const ordenadas = [...peliculas].sort((a, b) => b.rt_score - a.rt_score);

  let listaHTML = "<div id='top-lista' class='top-container'>";
  for (let i = 0; i < ordenadas.length; i++) {
    listaHTML += `
      <div class="top-card" onclick="Detalle('${ordenadas[i].id}')">
        <img src="${ordenadas[i].image}" alt="${ordenadas[i].title}" height="140">
        <h3>${ordenadas[i].title}</h3>
        <p><strong>Año:</strong> ${ordenadas[i].release_date}</p>
        <p><strong>Puntaje:</strong> ${ordenadas[i].rt_score}/100</p>
      </div>
    `;
  }
  listaHTML += "</div>";

  document.getElementById("root").innerHTML += listaHTML;
}
