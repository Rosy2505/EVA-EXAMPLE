
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');

    form.addEventListener("submit", function(e) {
        let errores = [];

        if (!email.value.trim()) {
            errores.push("Por favor ingresa tu correo electrónico.");
        }

        if (!password.value.trim()) {
            errores.push("Por favor ingresa tu contraseña.");
        }

        if (errores.length > 0) {
            e.preventDefault();
            alert(errores.join("\n"));
        }
    });
});
