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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".btn-cart").forEach(btn => {
  btn.addEventListener("click", () => {

    const game = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: btn.dataset.price,
      img: btn.dataset.img,
    };
    const exists = cart.some(g => g.id === game.id);

    if (exists) {
      return;
    }
    
    cart.push(game);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});