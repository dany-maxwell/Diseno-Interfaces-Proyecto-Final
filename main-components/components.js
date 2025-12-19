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
            });
        } else {
            user_log.style.display = "none";
            user_Nlog.style.display = "flex";
        }

        const menu = document.getElementById("menu");
        const bar = document.getElementById("bar");
        menu.addEventListener("click", () => {
            bar.classList.toggle("activo")
        });

        const user = document.getElementById("user");
        const options = document.getElementById("options");
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
