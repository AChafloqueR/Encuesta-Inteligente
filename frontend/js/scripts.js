document.getElementById("encuesta-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const opinion = document.getElementById("opinion").value;

  const datos = { nombre, edad, opinion };

  try {
    const respuesta = await fetch("https://yc0teg7yhl.execute-api.us-east-1.amazonaws.com/dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const resultado = await respuesta.json();
    document.getElementById("mensaje").textContent = "¡Gracias por participar!";
    document.getElementById("encuesta-form").reset();
  } catch (error) {
    console.error(error);
    document.getElementById("mensaje").textContent = "Ocurrió un error. Intenta nuevamente.";
  }
});