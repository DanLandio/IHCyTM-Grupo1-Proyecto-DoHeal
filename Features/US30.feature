Feature: Visualización de datos de los medicamentos
    Como paciente que necesita medicamentos
    Quiero visualizar información detallada de los medicamentos disponibles
    Para verificar si cumplen con mis necesidades médicas.

Scenario Outline: Consulta de información del medicamento
    Given que el paciente visualiza un medicamento disponible
    When accede al detalle del medicamento
    Then el sistema muestra nombre, dosis, fecha de vencimiento y estado de validación.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |