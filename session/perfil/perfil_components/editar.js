const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

document.getElementById("edit-user").value = usuarioActivo.usuario;
document.getElementById("edit-mail").value = usuarioActivo.correo;
document.getElementById("edit-country").value = usuarioActivo.pais;
document.getElementById("edit-fecha").value = usuarioActivo.fecha_nac;

// Mostrar imagen guardada
if (usuarioActivo.foto) {
    document.getElementById("preview-img").src = usuarioActivo.foto;
}

// Cambiar imagen
document.getElementById("edit-foto").addEventListener("change", function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        document.getElementById("preview-img").src = reader.result;
        usuarioActivo.foto = reader.result;
    };

    if (file) reader.readAsDataURL(file);
});

// Guardar
document.getElementById("edit-form").addEventListener("submit", function(e){
    e.preventDefault();

    const index = usuarios.findIndex(u => u.correo === usuarioActivo.correo);

    usuarios[index].usuario = document.getElementById("edit-user").value;
    usuarios[index].correo = document.getElementById("edit-mail").value;
    usuarios[index].pais = document.getElementById("edit-country").value;
    usuarios[index].fecha_nac = document.getElementById("edit-fecha").value;
    usuarios[index].foto = usuarioActivo.foto;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarios[index]));

    alert("Perfil actualizado");
    window.location.href = "../perfil.html";
});
