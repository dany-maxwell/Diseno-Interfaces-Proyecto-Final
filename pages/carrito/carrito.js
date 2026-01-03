const container = document.getElementById("kart");
let bill = document.getElementById("bill-list")
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let library = JSON.parse(localStorage.getItem("library")) || [];

function comprobarCart() {
    if (cart.length == 0) {
        document.getElementById("pre-bill").style.display = "none";
        document.getElementById("kart-e").style.display = "block";
    } else {
        document.getElementById("pre-bill").style.display = "block";
        document.getElementById("kart-e").style.display = "none";
    }
}

function renderCart() {
    comprobarCart()
    container.innerHTML = "";
    bill.innerHTML = "";
    cart.forEach(game => {
        container.innerHTML += `
            <div class="kart-g">
                <div class="g-game">
                    <img src="${game.img}" alt="">
                    <h2>${game.name}</h2>
                </div>
                <div class="g-price">
                    <button class="del-g" data-id="${game.id}">Eliminar de Carrito</button>
                </div>
            </div>
        `;

        bill.innerHTML += `
            <div class="list-g">
                <p>${game.name}</p>
                <p>${game.price}</p>
            </div>
        `;
    });

    addDeleteEvents();
}
renderCart();

function addDeleteEvents() {
    document.querySelectorAll(".del-g").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;

            cart = cart.filter(game => game.id !== id);

            localStorage.setItem("cart", JSON.stringify(cart));

            renderCart();
        });
    });
}

document.getElementById("btn-pago").addEventListener("click", () => {
    cart.forEach(game => {
        library.push(game)
    })
    localStorage.setItem("library", JSON.stringify(library));
    cart.length = 0;
    renderCart();
    localStorage.setItem("cart", JSON.stringify(cart));
})
