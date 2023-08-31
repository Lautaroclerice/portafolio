//DECLARACION DE VARIABLES
const botonMenu = document.getElementById("toggle-menu");
const listaMenu = document.getElementById("navbar-list1");
const barraNav = document.getElementById("header");
const navbarOpciones = document.getElementsByClassName("navbar-opciones");
//------------------------------------------------------------>

// TRANSICION MENU HAMBURGUESA
botonMenu.addEventListener("click", () => {
  listaMenu.classList.toggle("visible");
  if (listaMenu.classList.contains("visible")) {
    listaMenu.style.maxHeight = listaMenu.scrollHeight + "0px";
  } else {
    listaMenu.style.maxHeight = "0";
  }
});
//--------------------------------------------------------------->

   // COLOR AL SCROLLER EL NAV
window.addEventListener("scroll", () =>{
  const scrollY = window.scrollY
  const alturaCambio = 350;
  const alturaCambioSobremi = 400;
  if(scrollY > alturaCambio) {
    barraNav.classList.add("colorNavMov");
    for (let i = 0; i < navbarOpciones.length; i++) {
      navbarOpciones[i].style.color = "black";
    }
  }else if(scrollY == alturaCambioSobremi) {
    const sobreMi = document.getElementById("sobreMiId");
    sobreMi.style.color = "yellow";
  }else{
    barraNav.classList.remove("colorNavMov");
  }
});
//-------------------------------------------------------------->

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".navbar-list a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    listaMenu.classList.remove("visible");
    listaMenu.style.maxHeight = "0";
  });
});
//--------------------------------------------------------------->

//ESTILOS PARA LA ANIMACION DE SCROLL
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 200 });
ScrollReveal().reveal('.punchline', { delay: 200 });
//---------------------------------------------------------------->

