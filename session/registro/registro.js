const formRegistro = document.getElementById("register-form");
const password = document.getElementById("rg-password");
const confirmPassword = document.getElementById("rg-con-password");
const mensaje = document.getElementById("ms-pass");

confirmPassword.addEventListener("input", function () {
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.border = "2px solid #e34f14";
        mensaje.textContent = "Las contrseñas deben coincidir";
        mensaje.style.color = '#db6e43';
    } else {
        confirmPassword.style.border = "2px solid #0f215a";
        mensaje.textContent = '';
    }
});

password.addEventListener("input", function () {
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.border = "2px solid #e34f14";
        mensaje.textContent = "Las contrseñas debe coincidir";
        mensaje.style.color = '#db6e43';
    } else {
        confirmPassword.style.border = "2px solid #0f215a";
        mensaje.textContent = '';
    }
});

formRegistro.addEventListener("submit", function(e) {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        return;
    }
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const nuevoUsuario = {
        usuario: document.getElementById("rg-user").value,
        correo: document.getElementById("rg-mail").value,
        contraseña: document.getElementById("rg-password").value,
        fecha_nac: document.getElementById("rg-fecha_nac").value,
        pais: document.getElementById("rg-country").value
    }

    const existe = usuarios.some(u => u.correo === document.getElementById("rg-mail"));

    if (existe) {
        alert("Este correo ya está registrado ❌");
        return;
    }

    usuarios.push(nuevoUsuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert("usuario registrado");
    window.location.href = '/session/login';
})

