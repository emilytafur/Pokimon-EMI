

function GetDataUser() {
    let dataUser = localStorage.getItem("user");
    // Obtiene los datos del usuario almacenados en localStorage.

    if (dataUser == null) {
        alert('No has iniciado sesión');
        // Muestra un mensaje si no hay sesión iniciada.
        window.location.href = "../index.html";
        // Redirige a la página principal.
    }
}

GetDataUser();
// Llama a la función para verificar si el usuario ha iniciado sesión.

document.addEventListener("DOMContentLoaded", function () {
    const pokimones = [
        // Lista de Pokimones con sus datos (nombre, tipo, ataque y defensa).
        { nombre: "Pikachu", tipo: "Eléctrico", ataque: 55, defensa: 40 },
        { nombre: "Charizard", tipo: "Fuego", ataque: 84, defensa: 78 },
        { nombre: "Espeon", tipo: "Psíquico", ataque: 65, defensa: 60 },
        { nombre: "Blastoise", tipo: "Agua", ataque: 83, defensa: 100 },
        { nombre: "Lapras", tipo: "Hielo", ataque: 85, defensa: 80 },
        { nombre: "Snorlax", tipo: "Normal", ataque: 110, defensa: 65 },
        { nombre: "Venusaur", tipo: "Planta/Veneno", ataque: 82, defensa: 83 }
    ];

    const select = document.getElementById("nombrePokimon");
    const tipoInput = document.getElementById("tipo");
    const ataqueInput = document.getElementById("ataque");
    const defensaInput = document.getElementById("defensa");
    // Obtiene los elementos del formulario donde se mostrarán los datos.

    // Llenar el select con los nombres de los Pokimones.
    pokimones.forEach(p => {
        const option = document.createElement("option");
        option.value = p.nombre;
        option.textContent = p.nombre;
        select.appendChild(option);
    });

    // Evento al seleccionar un Pokémon del menú desplegable.
    select.addEventListener("change", function () {
        const seleccionado = pokimones.find(p => p.nombre === this.value);
        if (seleccionado) {
            tipoInput.value = seleccionado.tipo;
            ataqueInput.value = seleccionado.ataque;
            defensaInput.value = seleccionado.defensa;
            // Llena los campos con los datos del Pokémon seleccionado.
        } else {
            tipoInput.value = "";
            ataqueInput.value = "";
            defensaInput.value = "";
            // Limpia los campos si no hay selección.
        }
    });

    const btnCombatir = document.getElementById("btnCombatir");
    const resultadoDiv = document.getElementById("resultadoCombate");
    // Obtiene el botón de "Combatir" y el área para mostrar el resultado.

    btnCombatir.addEventListener("click", function () {
        const nombreJugador = select.value;
        const pokimonJugador = pokimones.find(p => p.nombre === nombreJugador);
        // Obtiene los datos del Pokémon del jugador.

        if (!pokimonJugador) {
            resultadoDiv.textContent = "Selecciona tu Pokimon primero.";
            // Mensaje si no se selecciona un Pokémon.
            return;
        }

        const rivales = pokimones.filter(p => p.nombre !== nombreJugador);
        // Obtiene un rival aleatorio distinto al Pokémon seleccionado por el jugador.
        const rival = rivales[Math.floor(Math.random() * rivales.length)];

        const poderJugador = pokimonJugador.ataque + pokimonJugador.defensa;
        const poderRival = rival.ataque + rival.defensa;
        // Calcula el poder total del jugador y el rival.

        let mensaje = `🔥 ${nombreJugador} (Poder: ${poderJugador}) vs ${rival.nombre} (Poder: ${poderRival})\n\n`;
        if (poderJugador > poderRival) {
            mensaje += `🎉 ¡${nombreJugador} ha derrotado a ${rival.nombre}!`;
        } else if (poderJugador < poderRival) {
            mensaje += `😵 ¡${rival.nombre} ha vencido a ${nombreJugador}!`;
        } else {
            mensaje += `🤝 ¡Empate entre ${nombreJugador} y ${rival.nombre}!`;
        }
        // Determina y muestra el resultado del combate.

        resultadoDiv.textContent = mensaje;
        // Muestra el mensaje en el área de resultados.
    });
});
