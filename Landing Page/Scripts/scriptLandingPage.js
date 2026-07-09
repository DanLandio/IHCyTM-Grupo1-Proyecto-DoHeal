
document.addEventListener("DOMContentLoaded", ()=>{
    
    const modalIS = document.getElementById("Modelo-IniciarSesion");
    const modalRe = document.getElementById("Modelo-Registrarse");

    const btnCerrarIS = document.getElementById("Btn-CerrarIS");
    const btnCerrarRe= document.getElementById("Btn-CerrarRe");

    const btnRegistrarseNav = document.querySelector(".btn-primario");
    const btnIniciarSesionNav = document.querySelector(".btn-secundario");

    const btnUneteDoHeal = document.getElementById("Btn-Unete-Do-Heal")
    const btnEmpezarAhora = document.getElementById("Btn-Empezar-Ahora");

    const formRegistrarse = document.getElementById("FormRegistrarse");
    const formIniciarSesion = document.getElementById("FormIniciarSesion");
    const inputDNI = document.getElementById("RegistrarDNI");
    const errorDNI = document.getElementById("ErrorDni");


    btnIniciarSesionNav.addEventListener("click", ()=>{
        modalIS.style.display = "flex";
    });

    btnEmpezarAhora.addEventListener("click", ()=>{
        modalIS.style.display = "flex"
    })
    
    btnCerrarIS.addEventListener("click", ()=>{
        modalIS.style.display = "none";
    });

    btnRegistrarseNav.addEventListener("click", ()=>{
        modalRe.style.display = "flex";
    });

    btnUneteDoHeal.addEventListener("click", ()=>{
        modalRe.style.display = "flex";
    })

    btnCerrarRe.addEventListener("click", ()=>{
        modalRe.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if(e.target === modalIS) {
            modalIS.style.display = "none";
        }
        if (e.target === modalRe) {
            modalRe.style.display = "none";
        }
    });


    inputDNI.addEventListener("input", (e) => {
        //esto de aca reemplaza cualquier caracter que no sea un numero del 0 al 9
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });


    FormRegistrarse.addEventListener("submit", (e) => {
        const regexDNI = /^\d{8}$/; //evalua que sean exactamente 8 numeros

        if (!regexDNI.test(inputDNI.value)) {
            e.preventDefault();
            errorDNI.style.display = "block"; // esto muestra el mensaje rojo
            inputDNI.style.borderColor = "#ef4444";
            inputDNI.focus();
        }else {
            errorDNI.style.display = "none";
            inputDNI.style.borderColor = "#cbd5e1"
            alert("Registro enviado exitosamente (Simulacion)");
          }
    });   

            //Aqui agregaremos las funciones y la logica interactiva mas

            if (formIniciarSesion) {
        formIniciarSesion.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Inicio de sesión exitoso (Simulación). Redirigiendo...");
            window.location.href = "../Estructuras/vistaPlataformaInicio.html";
        });
    }

});