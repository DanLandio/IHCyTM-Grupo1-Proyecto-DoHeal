Feature: Recomendación de solicitudes en base a medicamentos registrados
    Como paciente con medicamentos en exceso
    Quiero que el sistema me sugiera pacientes que necesiten los medicamentos que tengo registrados
    Para realizar una rápida decisión sobre a quién donar

Scenario Outline: Emparejamiento con pacientes compatibles
    Given que el paciente donante haya registrado el <medicamento> en la plataforma
    When el sistema revise solicitudes de medicinas
    And detecte que un paciente necesita unos medicamentos que se tienen registrados
    Then el sistema muestra sugerencias sobre pacientes a los que les puede donar sus medicinas.

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |