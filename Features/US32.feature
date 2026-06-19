Feature: Visualización de restricciones o condiciones para medicamentos
    Como profesional de salud
    Quiero que el sistema muestre las condiciones de uso y almacenado que tiene cada medicamento registrado
    Para que los pacientes tomen precauciones

Scenario Outline: Visualización de condiciones del medicamento
    Given que el paciente consulta información de un medicamento
    When accede al detalle del producto
    Then el sistema muestra restricciones, condiciones de almacenamiento y advertencias médicas.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |