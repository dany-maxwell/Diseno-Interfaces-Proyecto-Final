//-------------------------------------------------------------------//
//----------------------------Scrpts Ofertas-------------------------//
//-------------------------------------------------------------------//

const ofertas = document.querySelectorAll(".oferta");
const of_next = document.getElementById("of-next");
const of_prev = document.getElementById("of-prev");
let index = 0;

function mostrarOferta (i){
    const contenedor = document.querySelector(".of-slides");
    contenedor.style.transform = `translateX(-${(i * 100)}%)`;
}

of_next.addEventListener("click", () => {
    index++;
    if (index >= ofertas.length){
        index = 0
    }
    mostrarOferta(index);
})

of_prev.addEventListener("click", () => {
    index--;
    if (index < 0){
        index = ofertas.length -1;
    }
    mostrarOferta(index);
})

//-----------------------------Responsivo----------------------------//
const ofertas_cr = document.querySelector(".of-box");
const contenedor = document.querySelector(".of-slides")
let startX = 0;
let endX = 0;

ofertas_cr.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});
ofertas_cr.addEventListener("touchend", e => {
    endX = e.changedTouches[0].clientX;
    moverCarrusel();
});

function moverCarrusel() {
  if (startX - endX > 50) {
    if (index < ofertas.length - 1) index++;
  } else if (endX - startX > 50) {
    if (index > 0) index--;
  }

  contenedor.style.transform = `translateX(-${index * 100}%)`;
}

//-------------------------------------------------------------------//
//----------------------------Scrpts Para Ti-------------------------//
//-------------------------------------------------------------------//
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
const paraTi = document.querySelector(".para-ti");

if (usuarioActivo) {
            paraTi.style.display = "block";
        } else {
            paraTi.style.display = "none";
        }

const parati = document.querySelectorAll(".pt-slide");
const pt_next = document.getElementById("pt-next");
const pt_prev = document.getElementById("pt-prev");


function mostrarPTSilde (i){
    const contenedor = document.querySelector(".pt-slides");
    contenedor.style.transform = `translateX(-${(i * 100)}%)`;
}

pt_next.addEventListener("click", () => {
    index++;
    if (index >= parati.length){
        index = 0
    }
    mostrarPTSilde(index);
})

//-------------------------------------------------------------------//
//--------------------------Scrpts Descubrir-------------------------//
//-------------------------------------------------------------------//

//-------------------------------------------------------------------//
//-------------------------Scrpts Categorias-------------------------//
//-------------------------------------------------------------------//

const ct_botones = document.querySelectorAll(".ct-name")
const ct_juegos = document.querySelectorAll(".ct-games")

ct_botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const categoria = boton.dataset.category;
        
        ct_botones.forEach(b => b.classList.remove("active"));
        boton.classList.add("active");

        ct_juegos.forEach(juego => {
            if (juego.dataset.category === categoria){
                juego.style.display = "block";
            }
            else {
                juego.style.display = "none";
            }
        });
    });
});
document.querySelector('[data-category="accion"]').click();