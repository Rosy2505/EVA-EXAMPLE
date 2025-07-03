
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nombre = form.querySelector('input[name="nombre"]');
    const correo = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    const edad = form.querySelector('input[name="edad"]');

    form.addEventListener("submit", function(e) {
        let errores = [];

        if (!nombre.value.trim()) {
            errores.push("Por favor ingresa tu nombre.");
        }

        if (!correo.value.trim()) {
            errores.push("Por favor ingresa tu correo electrónico.");
        }

        if (!password.value.trim()) {
            errores.push("Por favor ingresa tu contraseña.");
        }

        if (!edad.value.trim()) {
            errores.push("Por favor ingresa tu edad.");
        } else if (parseInt(edad.value) < 0) {
            errores.push("La edad no puede ser menor a 0.");
        }

        if (errores.length > 0) {
            e.preventDefault();
            alert(errores.join("\n"));
        }
    });
});
