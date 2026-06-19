Feature: Registro de la razón del rechazo del medicamento
    Como donante de medicamentos
    Quiero visualizar la razón por la cual un medicamento fue rechazado en la validación
    Para conocer las observaciones realizadas y evitar errores en futuras donaciones

Scenario Outline: Visualización de observación de rechazo
    Given que el <medicamento> registrado por el donante fue rechazado durante la validación
    When el donante accede al detalle del medicamento rechazado
    Then el sistema muestra la razón del rechazo registrada por el profesional de salud

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |