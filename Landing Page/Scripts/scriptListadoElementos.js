//Datos estaticos de ejemplo

const medicinasRegistradas = [
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067848X.jpg",
        nombre: "Paracetamol",
        presentacion: "500 mg - Tabletas",
        estado: "Disponible",
        caduca: "2027-06",
        lote: "PAR500-202506A",
        descripcion: "Analgésico y antipirético utilizado para aliviar dolores leves a moderados y reducir la fiebre."
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/015814X.jpg",
        nombre: "Ibuprofeno",
        presentacion: "400 mg - Capsulas",
        estado: "Disponible",
        caduca: "2026-08",
        lote: "IBU400-202504B",
        descripcion: "Antiinflamatorio no esteroideo indicado para el alivio del dolor, inflamación y fiebre."
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071462X.jpg",
        nombre: "Amoxicilina",
        presentacion: "500 mg - Capsulas",
        estado: "Agotado",
        caduca: "2025-09",
        lote: "AMX500-202409C",
        descripcion: "Antibiótico de amplio espectro utilizado para tratar infecciones bacterianas bajo indicación médica."
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/013075X.jpg",
        nombre: "Loratadina",
        presentacion: "10 mg - Tabletas",
        estado: "Disponible",
        caduca: "2028-03",
        lote: "LOR10-202601D",
        descripcion: "Antihistamínico utilizado para el alivio de síntomas asociados a alergias como estornudos, picazón y congestión."
    }
]

const recetasRegistradas = [
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Fenobarbital_receta.jpg/120px-Fenobarbital_receta.jpg",
        medicamento: "Paracetamol",
        dosis: "500 mg",
        frecuencia: "Cada 8 horas",
        duracion: "5 dias",
        diagnostico: "Dolor de cabeza",
        estado: "Activo"
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Receta_Metronidazol.jpg/120px-Receta_Metronidazol.jpg",
        medicamento: "Ibuprofeno",
        dosis: "400 mg",
        frecuencia: "Cada 12 horas",
        duracion: "7 dias",
        diagnostico: "Inflamacion muscular",
        estado: "Finalizado"
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Clotrimazol_receta_MGT.jpg/120px-Clotrimazol_receta_MGT.jpg",
        medicamento: "Amoxicilina",
        dosis: "500 mg",
        frecuencia: "Cada 8 horas",
        duracion: "10 dias",
        diagnostico: "Infeccion respiratoria",
        estado: "Finalizado"
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Typical_Doctors_Prescription.jpg/120px-Typical_Doctors_Prescription.jpg",
        medicamento: "Omeprazol",
        dosis: "20 mg",
        frecuencia: "1 vez al dia",
        duracion: "14 dias",
        diagnostico: "Gastritis",
        estado: "Finalizado"
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Clotrimazol_receta_MGT.jpg/120px-Clotrimazol_receta_MGT.jpg",
        medicamento: "Cetirizina",
        dosis: "10 mg",
        frecuencia: "1 vez al dia",
        duracion: "7 dias",
        diagnostico: "Alergia",
        estado: "Finalizado"
    },
        {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Vnv_pharmacie_03.jpg/120px-Vnv_pharmacie_03.jpg",
        medicamento: "Losartan",
        dosis: "50 mg",
        frecuencia: "1 vez al dia",
        duracion: "Continuo",
        diagnostico: "Hipertension",
        estado: "Activo"
    }
]

const dosisRegistradas = [
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067848X.jpg",
        medicamento: "Paracetamol",
        dosis: "500 mg",
        proximaToma: "2026-06-16 16:00",
        intervalo: "Cada 8 horas",
        estado: "Tomada"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/015814X.jpg",
        medicamento: "Ibuprofeno",
        dosis: "400 mg",
        proximaToma: "2026-06-16 20:00",
        intervalo: "cada 12 horas",
        estado: "Inactivo"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071462X.jpg",
        medicamento: "Amoxicilina",
        dosis: "500 mg",
        proximaToma: "2026-06-16 14:00",
        intervalo: "cada 8 horas",
        estado: "Inactivo"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/425383X.jpg",
        medicamento: "Omeprazol",
        dosis: "20 mg",
        proximaToma: "2026-06-16 07:00",
        intervalo: "1 vez al dia",
        estado: "Inactivo"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/268147X.jpg",
        medicamento: "Cetirizina",
        dosis: "10 mg",
        proximaToma: "2026-06-16 22:00",
        intervalo: "1 vez al dia",
        estado: "Inactivo"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/031394X.jpg",
        medicamento: "Losartan",
        dosis: "50 mg",
        proximaToma: "2026-06-17 09:00",
        intervalo: "1 vez al dia",
        estado: "Pendiente"
    }
]

const solicitudesRecibidas = [
    {
        imagen: "https://images.pexels.com/photos/9159678/pexels-photo-9159678.jpeg",
        nombre: "Luis Perez",
        medicamentoSolicitado: "Amoxicilina 500 mg",
        ubicacion: "San Juan de Lurigancho, Lima",
        recibido: "2026-06-10",
        estadoReceta: "Validada"
    },
    {
        imagen: "https://images.pexels.com/photos/35583068/pexels-photo-35583068.jpeg",
        nombre: "Maria Torres",
        medicamentoSolicitado: "Metformina 850 mg",
        ubicacion: "Villa El Salvador, Lima",
        recibido: "2026-06-12",
        estadoReceta: "Pendiente"
    },
    {
        imagen: "https://images.pexels.com/photos/7561911/pexels-photo-7561911.jpeg",
        nombre: "Carlos Ramirez",
        medicamentoSolicitado: "Losartan 50 mg",
        ubicacion: "Ate, Lima",
        recibido: "2026-06-11",
        estadoReceta: "Validada"
    },
    {
        imagen: "https://images.pexels.com/photos/13430313/pexels-photo-13430313.jpeg",
        nombre: "Ana Lopez",
        medicamentoSolicitado: "Paracetamol 500 mg",
        ubicacion: "Comas, Lima",
        recibido: "2026-06-13",
        estadoReceta: "Rechazada"
    },
    {
        imagen: "https://images.pexels.com/photos/9661928/pexels-photo-9661928.jpeg",
        nombre: "Jorge Sanchez",
        medicamentoSolicitado: "Ibuprofeno 400 mg",
        ubicacion: "San Martin de Porres, Lima",
        recibido: "2026-06-14",
        estadoReceta: "Validada"
    }
]

const solicitudesEnviadas = [
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071462X.jpg",
        medicamento: "Amoxicilina 500 mg",
        caduca: "08/2027",
        publicador: "Maria Torres",
        ubicacion: "Villa El Salvador",
        enviado: "2026-06-10",
        hasta: "2026-06-18"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/031394X.jpg",
        medicamento: "Losartan 50 mg",
        caduca: "05/2027",
        publicador: "Ana Lopez",
        ubicacion: "Comas",
        enviado: "2026-06-12",
        hasta: "2026-06-20"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067848X.jpg",
        medicamento: "Paracetamol 500 mg",
        caduca: "12/2026",
        publicador: "Jorge Sanchez",
        ubicacion: "San Martin de Porres",
        enviado: "2026-06-13",
        hasta: "2026-06-21"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/015814X.jpg",
        medicamento: "Ibuprofeno 400 mg",
        caduca: "03/2027",
        publicador: "Lucia Gomez",
        ubicacion: "Los Olivos",
        enviado: "2026-06-14",
        hasta: "2026-06-22"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/425383X.jpg",
        medicamento: "Omeprazol 20 mg",
        caduca: "09/2026",
        publicador: "Pedro Vargas",
        ubicacion: "Surco",
        enviado: "2026-06-15",
        hasta: "2026-06-23"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/268147X.jpg",
        medicamento: "Cetirizina 10 mg",
        caduca: "01/2027",
        publicador: "Luis Perez",
        ubicacion: "San Juan de Lurigancho",
        enviado: "2026-06-16",
        hasta: "2026-06-24"
    }
]

const busquedaPacientes = [
    {
        imagen: "https://images.pexels.com/photos/18671528/pexels-photo-18671528.jpeg",
        nombre: "Maria Lopez",
        ubicacion: "San Juan de Lurigancho",
        solicita: "Paracetamol 500mg",
        diagnostico: "Infeccion respiratoria leve"
    },
    {
        imagen: "https://images.pexels.com/photos/7561911/pexels-photo-7561911.jpeg",
        nombre: "Carlos Ramirez",
        ubicacion: "Ate",
        solicita: "Insulina rapida",
        diagnostico: "Diabetes tipo 2"
    },
    {
        imagen: "https://images.pexels.com/photos/11462529/pexels-photo-11462529.jpeg",
        nombre: "Lucia Gomez",
        ubicacion: "Los Olivos",
        solicita: "Ibuprofeno 400mg",
        diagnostico: "Dolor muscular agudo"
    },
    {
        imagen: "https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg",
        nombre: "Jorge Medina",
        ubicacion: "Comas",
        solicita: "Salbutamol inhalador",
        diagnostico: "Asma bronquial"
    },
    {
        imagen: "https://images.pexels.com/photos/13430313/pexels-photo-13430313.jpeg",
        nombre: "Ana Lopez",
        ubicacion: "Comas",
        solicita: "Loratadina 10mg",
        diagnostico: "Rinitis alergica"
    }
]


const busquedaMedicinas = [
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067848X.jpg",
        nombreMedicamento: "Paracetamol",
        publicador: "Maria Fernandez",
        ubicacion: "La Molina",
        presentacion: "500 mg - tabletas",
        caduca: "08/2027",
        numLote: "PTM240815"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/015814X.jpg",
        nombreMedicamento: "Ibuprofeno",
        publicador: "Carlos Rojas",
        ubicacion: "Ate",
        presentacion: "400 mg - capsulas",
        caduca: "03/2028",
        numLote: "IBF230921"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/071462X.jpg",
        nombreMedicamento: "Amoxicilina",
        publicador: "Ana Torres",
        ubicacion: "San borja",
        presentacion: "500 mg - capsulas",
        caduca: "11/2026",
        numLote: "AMX220745"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/013075X.jpg",
        nombreMedicamento: "Loratadina",
        publicador: "Jorge Medina",
        ubicacion: "Lince",
        presentacion: "10 mg - tabletas",
        caduca: "06/2027",
        numLote: "LRT241003"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/425383X.jpg",
        nombreMedicamento: "Omeprazol",
        publicador: "Lucia Gomez",
        ubicacion: "Javier Prado",
        presentacion: "20 mg - capsulas",
        caduca: "01/2028",
        numLote: "OMP230688"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/085451X.jpg",
        nombreMedicamento: "Metformina",
        publicador: "Pedro Salazar",
        ubicacion: "Ceres",
        presentacion: "850 mg - tabletas",
        caduca: "09/2027",
        numLote: "MTF240212"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/031394X.jpg",
        nombreMedicamento: "Losartan",
        publicador: "Sofia Ramirez",
        ubicacion: "San Borja",
        presentacion: "50 mg - tabletas",
        caduca: "12/2028",
        numLote: "LSR250117"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/024881X.jpg",
        nombreMedicamento: "Vitamina C",
        publicador: "Diego Castro",
        ubicacion: "Ate Vitarte",
        presentacion: "10 mg - tabletas efervescentes",
        caduca: "05/2027",
        numLote: "VTC231544"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/268147X.jpg",
        nombreMedicamento: "Cetirizina",
        publicador: "Valeria Paredes",
        ubicacion: "Huacho",
        presentacion: "10 mg - tabletas",
        caduca: "10/2027",
        numLote: "CTZ240554"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/016797X.jpg",
        nombreMedicamento: "Diclofenaco",
        publicador: "Ricardo Vega",
        ubicacion: "Barranco",
        presentacion: "50 mg - tabletas",
        caduca: "02/2028",
        numLote: "DCF250098"
    }
]


const notificaciones = [
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/067848X.jpg",
        titulo: "Recordatorio de Dosis",
        contenido: "Tu proxima dosis de Paracetamol es en 15 minutos"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/031394X.jpg",
        titulo: "Solicitud rechazada",
        contenido: "Sofia Ramirez rechazó tu solicitud de Losartan"
    },
    {
        imagen: "https://images.pexels.com/photos/11462529/pexels-photo-11462529.jpeg",
        titulo: "Solicitud aceptada",
        contenido: "Lucia Gomez aceptó tu solicitud de Omeprazol"
        
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/015814X.jpg",
        titulo: "Medicina proxima a vencer",
        contenido: "Tu Ibuprofeno caducará en un mes (08/2026)"
    }
]

//Apoyo

function devolverStringClave(clave){
    let texto = "";

    for (let i = 0; i < clave.length; i++) {
        const letra = clave[i];
        if (i === 0) {texto+=letra.toUpperCase(); continue;}
        if (i !== 0 && letra === letra.toUpperCase()){
            texto+=" ";
        }
        texto+=letra;
    }
    return texto;
}

//Funciones

function abrirModalRegistro(idPlantilla){
    const plantilla = document.getElementById(idPlantilla);
    const nodo = plantilla.content.cloneNode(true);

    const modalContenido = document.getElementById("modal-contenido");
    console.log(modalContenido);
    console.log(nodo);
    modalContenido.replaceChildren(nodo);
    const modal = document.getElementById("modal");
    modal.classList.add("activo");
}

function abrirModalDetalles(dato, idPlantilla) {
    const plantilla = document.getElementById(idPlantilla);
    const nodo = plantilla.content.cloneNode(true);

    nodo.querySelectorAll("[data-i]").forEach(etiqueta =>{
        const clave = etiqueta.dataset.i;
        const valor = dato[clave];
        if (etiqueta.tagName === "IMG") {
        etiqueta.src = valor;
        etiqueta.onerror = () =>{
                etiqueta.src = "../Recursos/Imagenes/no-image.png";
            }
        }
        else if (etiqueta.tagName === "A") {
            etiqueta.href = valor;
        }
        else {
            etiqueta.textContent = valor;
        }
    })

    const modalContenido = document.getElementById("modal-contenido");
    modalContenido.replaceChildren(nodo);
    const modal = document.getElementById("modal");
    modal.classList.add("activo");
}

function cerrarModal(){
    const modal = document.getElementById("modal");
    modal.classList.remove("activo");
}


function mostrarLista(datos, idPlantilla, idContenedor) {
    const plantilla = document.getElementById(idPlantilla);
    const contenedor = document.getElementById(idContenedor);
    datos.forEach(item => {
        const nodo = plantilla.content.cloneNode(true);
        Object.entries(item).forEach(([clave, valor]) => {
        nodo.querySelectorAll("[data-i]").forEach(etiqueta => {
            const clave = etiqueta.dataset.i;
            const valor = item[clave] ?? "";
            
            if (etiqueta.tagName === "IMG") {
                etiqueta.src = valor;
                etiqueta.onerror = () =>{
                    etiqueta.src = "../Recursos/Imagenes/no-image.png";
                }
            }
            else if (etiqueta.tagName === "A") {
                etiqueta.href = valor;
            }
            else if (etiqueta.tagName === "BUTTON"){
                console.log("boton", etiqueta.dataset)
                etiqueta.onclick = () => {
                    abrirModalDetalles(item,etiqueta.dataset.plantilla)
                }
            }
            else {
                if (etiqueta.classList.contains("elemento-titulo") || etiqueta.classList.contains("sin-titulo")){etiqueta.textContent = valor; return;}
                etiqueta.textContent = devolverStringClave(clave)+": " + valor;
            }

            });

        });

        contenedor.appendChild(nodo);

    });

}