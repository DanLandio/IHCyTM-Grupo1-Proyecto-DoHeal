Feature: Visualización de medicamentos necesarios para el tratamiento
    Como paciente con una receta médica vigente
    Quiero visualizar los medicamentos registrados para mi tratamiento
    Para verificar cuáles ya conseguí y cuáles sigo necesitando.

Scenario Outline: Visualización de medicamentos del tratamiento
    Given que el paciente registró una receta médica
    When regresa al apartado de tratamiento
    Then el sistema muestra la lista de medicamentos asociados a la receta.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |