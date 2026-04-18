// LOGIN
function login() {
    const usuario = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    if (usuario === "" || pass === "") {
        alert("Llena todos los campos");
        return;
    }

    let rol = "";

    if (usuario.toLowerCase() === "dueño") rol = "Dueño";
    if (usuario.toLowerCase() === "barbero") rol = "Barbero";

    if (rol === "") {
        alert("Usuario no válido");
        return;
    }

    localStorage.setItem("rol", rol);

    // Redirección según rol
    if (rol === "Dueño") {
        window.location.href = "empleados.html";
    } else {
        window.location.href = "citas.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("rol");
    window.location.href = "login.html";
}

// MENÚ DINÁMICO
function cargarMenu() {
    const rol = localStorage.getItem("rol");

    if (!rol) {
        window.location.href = "login.html";
        return;
    }

    const menu = document.getElementById("menu");
    const rolText = document.getElementById("rolActual");

    rolText.innerText = "Rol activo: " + rol;

    menu.innerHTML = "";

    // 🔴 MENÚ DUEÑO
    if (rol === "Dueño") {
        menu.innerHTML += `<a href="empleados.html">Gestión de empleados</a>`;
        menu.innerHTML += `<a href="promociones.html">Gestión de promociones</a>`;
        menu.innerHTML += `<a href="pagos.html">Gestionar pagos</a>`;
        menu.innerHTML += `<a href="respaldo.html">Copia de seguridad</a>`;
    }

    // 🔵 MENÚ BARBERO
    if (rol === "Barbero") {
        menu.innerHTML += `<a href="citas.html">Agendar cita</a>`;
        menu.innerHTML += `<a href="modificar.html">Modificar y/o cancelar cita</a>`;
        menu.innerHTML += `<a href="estilos.html">Seleccionar estilo</a>`;
        menu.innerHTML += `<a href="pagos.html">Gestionar pagos</a>`;
    }

    // 🔐 Cerrar sesión (para ambos)
    menu.innerHTML += `<button onclick="logout()">Cerrar sesión</button>`;
}
