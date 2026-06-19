Feature: Rechazo de emparejamientos
    Como donante de medicamentos
    Quiero rechazar una solicitud de emparejamiento
    Para evitar entregar un medicamento cuando no tenga disponibilidad o no me sienta seguro con la solicitud

Scenario Outline: Rechazo de una solicitud de emparejamiento
    Given que el donante recibe una solicitud para el <medicamento>
    When selecciona la opción de rechazar solicitud
    Then el sistema cancela el emparejamiento y notifica al paciente que debe buscar otra alternativa

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |