Feature: Visualización de medicinas alternativas recomendadas por profesionales
    Como paciente que necesita medicamentos
    Quiero visualizar medicamentos alternativos recomendados por profesionales de salud
    Para tener más opciones seguras para mi tratamiento.

Scenario Outline: Visualización de medicamentos alternativos
    Given que un medicamento solicitado no se encuentra disponible
    When el profesional de salud registra alternativas válidas
    Then el sistema muestra las medicinas alternativas recomendadas al paciente.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |