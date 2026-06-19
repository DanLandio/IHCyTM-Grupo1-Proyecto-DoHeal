Feature: Publicación y registro de medicamentos a donar
    Como donante de medicamentos
    Quiero publicar los medicamentos que tengo disponibles para donar
    Para que otros pacientes puedan encontrarlos y solicitarlos.

Scenario Outline: Publicación de medicamento disponible
    Given que el donante registró correctamente un medicamento válido
    When selecciona la opción de publicar medicamento
    Then el sistema muestra el medicamento dentro del catálogo disponible para donaciones.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |