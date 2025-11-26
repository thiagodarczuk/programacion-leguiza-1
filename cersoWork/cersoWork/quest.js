let button = document.getElementById("button-submit")
let form = document.getElementById("form")

let correctas = Array.from(document.getElementsByClassName("correcta"));

let nombre = document.getElementById("name");

button.addEventListener("click", (e) => {
    e.preventDefault();

    let puntajx = 0;
    correctas.forEach((correcta) => {
        if (correcta.checked) {
            puntajx++;
        }
    });

    let jugador = { nombre: nombre.value, puntaje: puntajx };

    // Recuperar jugadores anteriores
    let jugadores = JSON.parse(localStorage.getItem("Jugador")) || [];

    // Agregar el nuevo jugador
    jugadores.push(jugador);

    // Guardar de nuevo en localStorage
    localStorage.setItem("Jugador", JSON.stringify(jugadores));

    console.log(JSON.parse(localStorage.getItem("Jugador")) || []);

    window.location.href = "resultado.html";
});


