
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-recuperar");
    const correoInput = form.querySelector('input[name="correo"]');

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const correo = correoInput.value.trim();

        if (correo === "") {
            alert("Por favor ingresa tu correo electrónico.");
        } else {
            alert("Si este correo está registrado, recibirás instrucciones para restablecer tu contraseña.");
            form.reset();
        }
    });
});
