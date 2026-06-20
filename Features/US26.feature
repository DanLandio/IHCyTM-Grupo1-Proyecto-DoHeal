Feature: Gestión de medicamentos indicados en receta
    Como paciente con receta médica vigente
    Quiero gestionar los medicamentos indicados en mi receta
    Para mantener un mejor control de los medicamentos que necesito conseguir.

Scenario Outline: Visualización de medicamentos registrados en receta
    Given que el paciente registró correctamente una receta médica
    When accede al apartado de "Medicamentos de receta"
    Then el sistema muestra la lista de medicamentos asociados a la receta registrada.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |