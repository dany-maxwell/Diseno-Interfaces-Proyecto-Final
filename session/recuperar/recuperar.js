// ---------------------------------------------------------------
// Animación de entrada del formulario
// ---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".recover-container");
    card.style.opacity = "0";

    setTimeout(() => {
        card.style.transition = "0.5s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 100);
});


// ---------------------------------------------------------------
// Validación en tiempo real del correo
// ---------------------------------------------------------------
const inputCorreo = document.querySelector("#recover-email");
const msg = document.querySelector("#msg-email");

inputCorreo.addEventListener("input", () => {
    const email = inputCorreo.value.trim();

    // Expresión regular básica de validación de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        msg.textContent = "";
        inputCorreo.style.borderColor = "#0f215a"; // estado neutro
        return;
    }

    if (regex.test(email)) {
        msg.textContent = "Correo válido ✔";
        msg.style.color = "#66d17a";
        inputCorreo.style.borderColor = "#66d17a";
    } else {
        msg.textContent = "Formato de correo inválido ✘";
        msg.style.color = "#fc5837";
        inputCorreo.style.borderColor = "#fc5837";
    }
});


// ---------------------------------------------------------------
// Envío del formulario (simulado + profesional)
// ---------------------------------------------------------------
const form = document.querySelector("#recover-form");
const btn = document.querySelector("#btn-recover");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = inputCorreo.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación antes de enviar
    if (!regex.test(email)) {
        msg.textContent = "Ingresa un correo válido antes de continuar.";
        msg.style.color = "#fc5837";
        inputCorreo.style.borderColor = "#fc5837";
        return;
    }

    // Bloquear botón y mostrar mensaje de envío
    btn.disabled = true;
    btn.value = "Enviando...";
    btn.style.opacity = ".7";

    // --- Simulación de envío (si no tienes backend aún) ---
    setTimeout(() => {
        alert("Si este correo está registrado, recibirás un enlace de recuperación.");
        btn.disabled = false;
        btn.value = "Enviar";
        btn.style.opacity = "1";

        // Si tienes backend, aquí pondrías form.submit();
    }, 1500);
});
