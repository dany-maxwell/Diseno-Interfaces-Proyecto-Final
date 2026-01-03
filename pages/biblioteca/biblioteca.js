const container = document.getElementById("library-c");
const library = JSON.parse(localStorage.getItem("library")) || [];

console.log(library)

function comprobarLibreria() {
    if (library.length == 0) {
        document.getElementById("library-c").style.display = "none";
        document.getElementById("library-e").style.display = "block";
    } else {
        document.getElementById("library-c").style.display = "flex";
        document.getElementById("library-e").style.display = "none";
    }
}
comprobarLibreria();

function llenarLibreria() {
    container.innerHTML = "";
    library.forEach(game => {
        container.innerHTML += `
            <div class="l-game">
                <img src="${game.img}" alt="">
                <div class="l-title">
                    <p>${game.name}</p>
                    <button class="btn-start">Jugar</button>
                </div>
            </div>
        `;
    })
}

llenarLibreria();