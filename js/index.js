function Loguear() {
    let username = document.getElementById('username').value;
    // Obtiene el valor ingresado en el campo "username".

    let password = document.getElementById('clave').value;
    // Obtiene el valor ingresado en el campo "clave".

    let user = JSON.parse(localStorage.getItem("user"));
    // Obtiene los datos del usuario almacenados en localStorage y los convierte en un objeto.

    if (user == null) {
        alert('No tienes cuenta, registrate');
        // Muestra una alerta indicando que no existe una cuenta registrada.
        window.location.href = "../vistas/registrar.html";
        // Redirige a la página de registro.
    } else if (user[2] == username && user[3] == password) {
        // Comprueba si el correo (posición 2) y la contraseña (posición 3) coinciden con los valores ingresados.
        localStorage.setItem("user", username);
        // Actualiza el almacenamiento local con el nombre de usuario ingresado.
        window.location.href = "../vistas/Entrenador.html";
        // Redirige a la página "Entrenador.html".
        alert('Usuario valido');
        // Muestra un mensaje indicando que el inicio de sesión es exitoso.
    }
}


