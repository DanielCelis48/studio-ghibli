let peliculas = [];

async function Conexion() {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  const data = await res.json();
  return data;
}

async function General() {
  if (peliculas.length === 0) {
    peliculas = await Conexion();
  }
  Home();
}

General();