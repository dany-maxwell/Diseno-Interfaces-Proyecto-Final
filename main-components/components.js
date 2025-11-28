fetch("/main-components/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });

fetch("/main-components/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });