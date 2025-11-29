fetch("/main-components/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });

fetch("/main-components/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });

const formRegistro = document.getElementById("registro-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", function () {
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.border = "2px solid red";
    } else {
        confirmPassword.style.border = "2px solid green";
    }
});

formRegistro.addEventListener("submit", function(e) {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        alert("Las contraseñas no coinciden ❌");
        return;
    }
    
    const dato = {
        usuario: document.getElementById("usuario").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value,
        fecha_nac: document.getElementById("fecha_nac").value,
        pais: document.getElementById("pais").value
    }
})

