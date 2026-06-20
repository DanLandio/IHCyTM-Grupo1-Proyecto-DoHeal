Feature: Registro automático de detalles del medicamento
    Como donante de medicamentos
    Quiero registrar un medicamento a donar mediante una foto y que el sistema haga el registro de sus detalles automáticamente
    Para no seguir un proceso tedioso de registro de detalles

Scenario Outline: Registro automático mediante fotografía
    Given que el donante desea registrar un <medicamento>
    When sube una fotografía clara del empaque
    Then el sistema detecta automáticamente el nombre, dosis y fecha de vencimiento

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |