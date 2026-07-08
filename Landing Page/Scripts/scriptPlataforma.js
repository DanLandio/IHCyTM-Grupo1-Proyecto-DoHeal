function abreMenuHamburguesa(idMenu, idBoton) {
    document.getElementById(idMenu).classList.toggle("active");
    document.getElementById(idBoton).classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () =>{
    const logoBoton = document.getElementById("logo-doheal");

    logoBoton.addEventListener("click", () => {
        document.location.href = "../../index.html"
    })
})