function Informativa() {
  document.getElementById("root").innerHTML = `
    <section class="informativa">
      <h2>Sobre Studio Ghibli</h2>
      <p>
        Studio Ghibli es un estudio de animación japonés fundado por Hayao Miyazaki e Isao Takahata.
        Es reconocido mundialmente por sus películas que combinan arte, emoción y mensajes sobre la naturaleza y la humanidad.
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Studio_Ghibli_logo.svg" 
           alt="Logo Ghibli" 
           width="220"
           style="margin: 20px auto; display: block;">
      <p>
        Esta aplicación usa la <a href="https://ghibliapi.vercel.app" target="_blank">Ghibli API</a>
        para mostrar información de las películas del estudio.
      </p>
    </section>
  `;
}
