Feature: Búsqueda de medicamento por nombre
    Como paciente que necesita medicamentos
    Quiero buscar medicamentos mediante su nombre
    Para encontrar rápidamente opciones disponibles en la plataforma.

Scenario Outline: Búsqueda correcta de medicamento
    Given que el paciente se encuentra en la sección de búsqueda
    When ingresa el nombre de un medicamento
    Then el sistema muestra los medicamentos relacionados disponibles para donación.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |