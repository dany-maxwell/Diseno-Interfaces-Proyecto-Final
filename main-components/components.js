fetch("/main-components/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;

        const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

        const noLogueado = document.querySelector(".no-logueado");
        const logueado = document.querySelector(".logueado");
        
        const btnLogout = document.getElementById("btnLogout");

        if (usuarioActivo) {
            noLogueado.style.display = "none";
            logueado.style.display = "flex";
            

            btnLogout.addEventListener("click", () => {
                localStorage.removeItem("usuarioActivo");
                window.location.href = "/pages/tienda/";
            });

        } else {
            noLogueado.style.display = "flex";
            logueado.style.display = "none";
        }
    });

fetch("/main-components/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });