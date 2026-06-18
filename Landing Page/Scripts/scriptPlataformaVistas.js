function cambiarVista(idVista, idBoton) {
    document.querySelectorAll('.vista').forEach(vista => {
        vista.classList.remove('active');
    });

    const boton = document.getElementById(idBoton);
    const botones = boton.closest('.division-vistas');

    botones.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(idVista).classList.add('active');
    boton.classList.add('active');
}

// // Vista inicial, elige primera vista (obsoleto, ahora se ejecuta en una linea desde el html :v)
// document.addEventListener('DOMContentLoaded', () => {
//     const div = document.querySelector('.division-vistas');
    
//     let idBtn = div.firstElementChild.id;
//     let idVista = idBtn.replace("boton-", "");

//     const vista = document.getElementById(idVista);
//     const boton = document.getElementById(idBtn);

//     vista.classList.add('active');
//     boton.classList.add('active');
// });