fetch("/main-components/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
        const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

        const user_log = document.querySelector(".user");
        const user_Nlog = document.querySelector(".login");
        const btnLogout = document.getElementById("logout");

        if (usuarioActivo) {
            user_log.style.display = "flex";
            user_Nlog.style.display = "none";

            btnLogout.addEventListener("click", () => {
                localStorage.removeItem("usuarioActivo");
                window.location.href = "/pages/tienda/";
            });
        } else {
            user_log.style.display = "none";
            user_Nlog.style.display = "flex";
            const login = document.getElementById("login");
            login.addEventListener("click", () => {
                window.location.href = "/session/login/"
            })
        }

        const menu = document.getElementById("menu");
        const bar = document.getElementById("bar");
        menu.addEventListener("click", () => {
            bar.classList.toggle("activo")
        });

        const logo = document.getElementById("logo");
        logo.addEventListener("click", () => {
            window.location.href = "/pages/tienda/";
        });

        const tienda = document.getElementById("tienda");
        tienda.addEventListener("click", () => {
            window.location.href = "/pages/tienda/";
        });

        const novedades = document.getElementById("novedades");
        novedades.addEventListener("click", () => {
            window.location.href = "/pages/novedades/";
        });

        const comunidad = document.getElementById("comunidad");
        comunidad.addEventListener("click", () => {
            window.location.href = "/pages/comunidad/";
        });

        const user = document.getElementById("user");
        const options = document.getElementById("options");
        let u_checked = false;
        user.addEventListener("click", () => {
            options.classList.toggle("activo");
        });
    });

fetch("/main-components/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    }
    );
