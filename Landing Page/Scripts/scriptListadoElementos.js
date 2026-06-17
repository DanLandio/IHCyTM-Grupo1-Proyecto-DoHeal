//Datos

const medicinasRegistradas = [
{
        imagen: "https://eee",
        nombre: "Paracetamol",
        presentacion: "500 mg - Tabletas",
        estado: "Disponible",
        caduca: "2027-06"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/015814X.jpg",
        nombre: "Ibuprofeno",
        presentacion: "400 mg - Capsulas",
        estado: "Disponible",
        caduca: "2026-11"
    },
    {
        imagen: "https://eee",
        nombre: "Amoxicilina",
        presentacion: "500 mg - Capsulas",
        estado: "Agotado",
        caduca: "2025-09"
    },
    {
        imagen: "https://eee",
        nombre: "Loratadina",
        presentacion: "10 mg - Tabletas",
        estado: "Disponible",
        caduca: "2028-03"
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
        imagen: "",
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
        imagen: "",
        medicamento: "Amoxicilina",
        dosis: "500 mg",
        proximaToma: "2026-06-16 14:00",
        intervalo: "cada 8 horas",
        estado: "Inactivo"
    },
    {
        imagen: "",
        medicamento: "Omeprazol",
        dosis: "20 mg",
        proximaToma: "2026-06-16 07:00",
        intervalo: "1 vez al dia",
        estado: "Inactivo"
    },
    {
        imagen: "",
        medicamento: "Cetirizina",
        dosis: "10 mg",
        proximaToma: "2026-06-16 22:00",
        intervalo: "1 vez al dia",
        estado: "Inactivo"
    },
    {
        imagen: "",
        medicamento: "Losartan",
        dosis: "50 mg",
        proximaToma: "2026-06-17 09:00",
        intervalo: "1 vez al dia",
        estado: "Pendiente"
    }
]

const solicitudesRecibidas = [
    {
        imagen: "",
        nombre: "Luis Perez",
        medicamentoSolicitado: "Amoxicilina 500 mg",
        ubicacion: "San Juan de Lurigancho, Lima",
        recibido: "2026-06-10",
        estadoReceta: "Validada"
    },
    {
        imagen: "",
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
        imagen: "",
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
    },
    {
        imagen: "",
        nombre: "Lucia Gomez",
        medicamentoSolicitado: "Omeprazol 20 mg",
        ubicacion: "Los Olivos, Lima",
        recibido: "2026-06-15",
        estadoReceta: "Pendiente"
    },
    {
        imagen: "",
        nombre: "Pedro Vargas",
        medicamentoSolicitado: "Cetirizina 10 mg",
        ubicacion: "Surco, Lima",
        recibido: "2026-06-16",
        estadoReceta: "Validada"
    }
]

const solicitudesEnviadas = [
    {
        imagen: "",
        medicamento: "Amoxicilina 500 mg",
        caduca: "08/2027",
        publicador: "Maria Torres",
        ubicacion: "Villa El Salvador, Lima",
        enviado: "2026-06-10",
        hasta: "2026-06-18"
    },
    {
        imagen: "",
        medicamento: "Losartan 50 mg",
        caduca: "05/2027",
        publicador: "Ana Lopez",
        ubicacion: "Comas, Lima",
        enviado: "2026-06-12",
        hasta: "2026-06-20"
    },
    {
        imagen: "https://images.pexels.com/photos/9661928/pexels-photo-9661928.jpeg",
        medicamento: "Paracetamol 500 mg",
        caduca: "12/2026",
        publicador: "Jorge Sanchez",
        ubicacion: "San Martin de Porres, Lima",
        enviado: "2026-06-13",
        hasta: "2026-06-21"
    },
    {
        imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/015814X.jpg",
        medicamento: "Ibuprofeno 400 mg",
        caduca: "03/2027",
        publicador: "Lucia Gomez",
        ubicacion: "Los Olivos, Lima",
        enviado: "2026-06-14",
        hasta: "2026-06-22"
    },
    {
        imagen: "",
        medicamento: "Omeprazol 20 mg",
        caduca: "09/2026",
        publicador: "Pedro Vargas",
        ubicacion: "Surco, Lima",
        enviado: "2026-06-15",
        hasta: "2026-06-23"
    },
    {
        imagen: "",
        medicamento: "Cetirizina 10 mg",
        caduca: "01/2027",
        publicador: "Luis Perez",
        ubicacion: "San Juan de Lurigancho, Lima",
        enviado: "2026-06-16",
        hasta: "2026-06-24"
    }
]

const busquedaPacientes = [
    {
        imagen: "https://",
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
        imagen: "https://",
        nombre: "Lucia Fernandez",
        ubicacion: "Miraflores",
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
        imagen: "https://",
        nombre: "Ana Torres",
        ubicacion: "Surco",
        solicita: "Loratadina 10mg",
        diagnostico: "Rinitis alergica"
    }
]


const busquedaMedicinas = [
    {
        imagen: "https://",
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
        imagen: "https://",
        nombreMedicamento: "Amoxicilina",
        publicador: "Ana Torres",
        ubicacion: "San borja",
        presentacion: "500 mg - capsulas",
        caduca: "11/2026",
        numLote: "AMX220745"
    },
    {
        imagen: "https://",
        nombreMedicamento: "Loratadina",
        publicador: "Jorge Medina",
        ubicacion: "Lince",
        presentacion: "10 mg - tabletas",
        caduca: "06/2027",
        numLote: "LRT241003"
    },
    {
        imagen: "https://",
        nombreMedicamento: "Omeprazol",
        publicador: "Lucia Gomez",
        ubicacion: "Javier Prado",
        presentacion: "20 mg - capsulas",
        caduca: "01/2028",
        numLote: "OMP230688"
    },
    {
        imagen: "https://",
        nombreMedicamento: "Metformina",
        publicador: "Pedro Salazar",
        ubicacion: "Ceres",
        presentacion: "850 mg - tabletas",
        caduca: "09/2027",
        numLote: "MTF240212"
    },
    {
        imagen: "https://",
        nombreMedicamento: "Losartan",
        publicador: "Sofia Ramirez",
        ubicacion: "San Borja",
        presentacion: "50 mg - tabletas",
        caduca: "12/2028",
        numLote: "LSR250117"
    },
    {
        imagen: "https://",
        nombreMedicamento: "Vitamina C",
        publicador: "Diego Castro",
        ubicacion: "Ate Vitarte",
        presentacion: "1000 mg - tabletas efervescentes",
        caduca: "05/2027",
        numLote: "VTC231544"
    },
    {
        imagen: "https://",
        nombreMedicamento: "Cetirizina",
        publicador: "Valeria Paredes",
        ubicacion: "Huacho",
        presentacion: "10 mg - tabletas",
        caduca: "10/2027",
        numLote: "CTZ240554"
    },
    {
        imagen: "https://",
        nombreMedicamento: "Diclofenaco",
        publicador: "Ricardo Vega",
        ubicacion: "Barranco",
        presentacion: "50 mg - tabletas",
        caduca: "02/2028",
        numLote: "DCF250098"
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

//Funcion

function mostrarLista(datos, idPlantilla, idContenedor) {

    const plantilla = document.getElementById(idPlantilla);
    const contenedor = document.getElementById(idContenedor);

    datos.forEach(item => {

        const nodo = plantilla.content.cloneNode(true);

        Object.entries(item).forEach(([clave, valor]) => {

        nodo.querySelectorAll(`[data-i="${clave}"]`)
            .forEach(etiqueta => {

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
                if (etiqueta.classList.contains("elemento-titulo")){etiqueta.textContent = valor; return;}
                etiqueta.textContent = devolverStringClave(clave)+": " + valor;
            }

            });

        });

        contenedor.appendChild(nodo);

    });

    }