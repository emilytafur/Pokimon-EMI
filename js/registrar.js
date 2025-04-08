function Registrar() {
    let nombre = document.getElementById("nombre").value;
    // Obtiene el valor del campo "nombre".

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }
    // Valida que el nombre tenga al menos 3 caracteres.

    let apellido = document.getElementById("apellido").value;
    // Obtiene el valor del campo "apellido".

    if (apellido.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres.");
        return false;
    }
    // Valida que el apellido tenga al menos 3 caracteres.

    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular para validar el formato del correo electrónico.

    if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }
    // Valida que el correo electrónico tenga un formato correcto.

    let password = document.getElementById("contrasena").value;
    let passwordConfirm = document.getElementById("contrasenaConfirm").value;
    // Obtiene los valores de las contraseñas.

    if (password !== passwordConfirm) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    // Verifica que las contraseñas coincidan.

    let telefono = document.getElementById("telefono").value;
    let telefonoRegex = /^\d{10}$/;
    // Expresión regular para validar que el teléfono tenga exactamente 10 dígitos.

    if (!telefonoRegex.test(telefono)) {
        alert("El número de teléfono debe tener 10 dígitos.");
        return false;
    }
    // Valida que el teléfono cumpla con el formato esperado.

    let direccion = document.getElementById("direccion").value;
    // Obtiene el valor del campo "dirección".

    if (direccion.length < 5) {
        alert("La dirección debe tener al menos 5 caracteres.");
        return false;
    }
    // Valida que la dirección tenga al menos 5 caracteres.

    let array = [
        nombre,
        apellido,
        email,
        password,
        telefono,
        direccion
    ];
    // Crea un arreglo con los datos ingresados.

    localStorage.setItem("user", JSON.stringify(array));
    // Almacena los datos en el almacenamiento local.

    alert("Usuario registrado correctamente");
    // Muestra un mensaje de éxito.

    window.location.href = "../vistas/Entrenador.html";
    // Redirecciona al archivo "Entrenador.html".
}
