const formLogin = document.getElementById("login-form");

formLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuarioIngresado = document.getElementById("user").value;
    const passwordImgresado = document.getElementById("password").value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuarios.find(
        u => u.usuario === usuarioIngresado && u.contraseña === passwordImgresado
    )

    if (!usuarios){
        alert("No hay datos")
    }

    if (usuarioValido) {
        localStorage.setItem("usuarioActivo",JSON.stringify(usuarioValido));
        window.location.href = "/pages/tienda/"
    } else {
        alert("Usuario o Contraseña incorrectos")
    }
})