Feature: Ampliación de opciones de medicinas con ayuda profesional
    Como profesional de salud
    Quiero brindar alternativas a los medicamentos para ciertos tratamientos
    Para que el emparejamiento sea más amplio y efectivo

Scenario Outline: Sugerencia de alternativa por profesional de salud
    Given que un paciente solicita un <medicamento> que no se encuentra disponible
    When el profesional de salud registra una alternativa válida
    Then el sistema muestra la opción sugerida como alternativa revisada profesionalmente

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |