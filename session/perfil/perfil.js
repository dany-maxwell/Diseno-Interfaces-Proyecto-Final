document.addEventListener("DOMContentLoaded", () => {

    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

    // Si nadie ha iniciado sesión al login
    if (!usuarioActivo) {
        window.location.href = "/session/login";
        return;
    }

    // Colocar los datos en el HTML
    document.getElementById("perfil-nombre").textContent = usuarioActivo.usuario;
    document.getElementById("perfil-usuario").textContent = "@" + usuarioActivo.usuario;
    document.getElementById("perfil-email").textContent = usuarioActivo.correo;
    document.getElementById("perfil-pais").textContent = usuarioActivo.pais;
    document.getElementById("perfil-fecha").textContent = usuarioActivo.fecha_nac;

    
    if (usuarioActivo.foto) {
        document.getElementById("perfil-foto-img").src = usuarioActivo.foto;
    }

});


document.getElementById("btn-cerrar-sesion").addEventListener("click", () => {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "/session/login";
});

document.querySelector(".btn-editar").addEventListener("click", () => {
    window.location.href = "perfil_components/editar.html";
});
