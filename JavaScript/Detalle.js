async function Detalle(id) {
  const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  const data = await res.json();

  document.getElementById("root").innerHTML = `
    <section class="c-detalle">
      <button onclick="Home()" class="btn-volver">⬅ Volver</button>
      <img src="${data.movie_banner}" alt="${data.title}" class="banner">
      <h2>${data.title} (${data.release_date})</h2>
      <p><em>${data.original_title_romanised}</em></p>
      <p><strong>Director:</strong> ${data.director}</p>
      <p><strong>Productor:</strong> ${data.producer}</p>
      <p><strong>Duración:</strong> ${data.running_time} min</p>
      <p><strong>Rating:</strong> ${data.rt_score}/100</p>
      <p>${data.description}</p>
    </section>
  `;
}
