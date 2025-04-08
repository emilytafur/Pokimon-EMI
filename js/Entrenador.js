


function GetDataUser(){
    let dataUser = localStorage.getItem("user")
    
    if(dataUser == null){
        alert('No has iniciado sesion')
        window.location.href = "../index.html"
    }
    
}

GetDataUser()

function GetDataUser(){
    let dataUser = localStorage.getItem("user")
    
    if(dataUser == null){
        alert('No has iniciado sesion')
        window.location.href = "../index.html"
    }
    
}


GetDataUser();
document.addEventListener("DOMContentLoaded", function () {
    const pokimones = [
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

    // Llenar select
    pokimones.forEach(p => {
        const option = document.createElement("option");
        option.value = p.nombre;
        option.textContent = p.nombre;
        select.appendChild(option);
    });

    // Evento al seleccionar un pokimon
    select.addEventListener("change", function () {
        const seleccionado = pokimones.find(p => p.nombre === this.value);
        if (seleccionado) {
            tipoInput.value = seleccionado.tipo;
            ataqueInput.value = seleccionado.ataque;
            defensaInput.value = seleccionado.defensa;
        } else {
            tipoInput.value = "";
            ataqueInput.value = "";
            defensaInput.value = "";
        }
    });

    // Evento al hacer clic en "Combatir"
    const btnCombatir = document.getElementById("btnCombatir"); 
    const resultadoDiv = document.getElementById("resultadoCombate");

    btnCombatir.addEventListener("click", function () {
        const nombreJugador = select.value;
        const pokimonJugador = pokimones.find(p => p.nombre === nombreJugador);

        if (!pokimonJugador) {
            resultadoDiv.textContent = "Selecciona tu Pokimon primero.";
            return;
        }

        // Elegir rival aleatorio (distinto al tuyo)
        const rivales = pokimones.filter(p => p.nombre !== nombreJugador);
        const rival = rivales[Math.floor(Math.random() * rivales.length)];

        // Calcular poder total
        const poderJugador = pokimonJugador.ataque + pokimonJugador.defensa;
        const poderRival = rival.ataque + rival.defensa;

        // Mostrar resultado
        let mensaje = `🔥 ${nombreJugador} (Poder: ${poderJugador}) vs ${rival.nombre} (Poder: ${poderRival})\n\n`;
        if (poderJugador > poderRival) {
            mensaje += `🎉 ¡${nombreJugador} ha derrotado a ${rival.nombre}!`;
        } else if (poderJugador < poderRival) {
            mensaje += `😵 ¡${rival.nombre} ha vencido a ${nombreJugador}!`;
        } else {
            mensaje += `🤝 ¡Empate entre ${nombreJugador} y ${rival.nombre}!`;
        }

        resultadoDiv.textContent = mensaje;
        
    });
});

