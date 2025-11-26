const datos = JSON.parse(localStorage.getItem("Jugador"))||[];

const resultado = document.getElementById("resultado");
console.log(datos);
if (datos.length > 0) {
    let ultimoJugador = datos[datos.length - 1];
    resultado.textContent = `${ultimoJugador.puntaje}/5`;
    if (ultimoJugador.puntaje == 5){
        resultado.style.color = "#fe0"
    }
}
const tabla = document.getElementById("tabla-participantes");

datos.sort((a, b) => b.puntaje - a.puntaje);

datos.forEach((jugador, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML += `
    <td> ${ i + 1 } </td>
    <td> ${jugador.nombre || "PLAYER"} </td>
    <td> ${jugador.puntaje} </td>`;
    tabla.appendChild(tr);
});
