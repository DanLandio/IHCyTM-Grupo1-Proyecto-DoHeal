Feature: Solicitud de información adicional
    Como profesional de salud
    Quiero solicitar información adicional sobre un medicamento registrado
    Para completar correctamente el proceso de validación

Scenario Outline: Solicitud de datos adicionales
    Given que el profesional de salud revisa un <medicamento> registrado
    When detecta que el medicamento no cumple con las condiciones necesarias
    Then el sistema solicita registrar la razón del rechazo

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |