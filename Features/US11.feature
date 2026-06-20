Feature: Validacion de la caducidad de los medicamentos registrados
    Como profesional de salud o sistema de validación
    Quiero revisar la fecha de vencimiento de los medicamentos registrados
    Para evitar que se donen medicinas vencidas o próximas a caducar

Scenario Outline: Verificación de fecha de vencimiento
    Given que el donante registra un <medicamento> mediante foto o escaneo
    When el sistema identifica la fecha de vencimiento
    Then valida el medicamento solo si cumple con el tiempo mínimo de vigencia permitido

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |