document.addEventListener("DOMContentLoaded", () => {
  const btnCargar = document.getElementById("btnCargar");
  const salida = document.getElementById("salida");

  btnCargar.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/alumnos"); 
      if (!response.ok) throw new Error("Error en la petición");

      const data = await response.json();

      salida.innerHTML = "";
      data.forEach(alumno => {
        const p = document.createElement("p");
        p.textContent = `ID: ${alumno.id} - Nombre: ${alumno.nombre}`;
        salida.appendChild(p);
      });

    } catch (error) {
      salida.innerHTML = `<p style="color:red;"> ${error.message}</p>`;
    }
  });
});