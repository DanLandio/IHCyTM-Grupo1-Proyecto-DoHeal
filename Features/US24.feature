Feature: Gestión de medicamentos guardados
    Como donante de medicamentos
    Quiero tener un registro de los medicamentos que tengo almacenados
    Para estar al tanto de sus fechas de caducidad

Scenario Outline: Consulta de medicamentos almacenados
    Given que el usuario registró medicamentos en la plataforma
    When accede al apartado de medicamentos guardados
    Then el sistema muestra el listado con fechas de vencimiento y estado de validación.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |