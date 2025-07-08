document.addEventListener("DOMContentLoaded", () => {
  const barras = document.querySelectorAll(".progreso");

  barras.forEach(barra => {
    const width = barra.style.width;
    barra.title = "Progreso: " + width;
  });
});