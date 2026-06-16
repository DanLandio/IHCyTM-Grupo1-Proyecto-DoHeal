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
        imagen: "https://eee",
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
                etiqueta.textContent = valor;
            }

            });

        });

        contenedor.appendChild(nodo);

    });

    }