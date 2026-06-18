function abreMenuHamburguesa() {
    document.getElementById("menu-hamburguesa").classList.toggle("active");
    document.getElementById("boton-hamburguesa").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () =>{
    const logoBoton = document.getElementById("logo-doheal");

    logoBoton.addEventListener("click", () => {
        document.location.href = "../Estructuras/index.html"
    })
})