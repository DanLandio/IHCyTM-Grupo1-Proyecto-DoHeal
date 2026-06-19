Feature: Registro de medicamentos guardados para un tratamiento
    Como paciente con tratamiento médico
    Quiero registrar medicamentos que tengo guardados para mi tratamiento
    Para llevar un control de las medicinas disponibles en mi hogar.

Scenario Outline: Registro de medicamentos almacenados
    Given que el paciente accede al apartado de gestión de medicamentos
    When registra un medicamento indicando nombre, dosis y fecha de vencimiento
    Then el sistema almacena la información del medicamento en su perfil.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |