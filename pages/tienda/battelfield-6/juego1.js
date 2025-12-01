const item = document.querySelectorAll(".gl-item")
const main = document.querySelectorAll(".game-main")

item.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.dataset.category;

        item.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");

        main.forEach(juego => {
            if (juego.dataset.category === categoria) {
                juego.style.display = "block";                
            }
            else {
                juego.style.display = "none";
            }
        });
    });
});
document.querySelector('[id="inicio"]').click();

const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
const bt_carrito = document.getElementById("bt-carrito")

if (usuarioActivo) {
    bt_carrito.addEventListener("click", () =>{
        window.location.href = "/pages/carrito"
    })
} else {
    bt_carrito.addEventListener("click", () =>{
        window.location.href = "/session/login"
    })
}