Feature: Filtrado de búsqueda de medicamentos
    Como paciente que necesita medicamentos
    Quiero aplicar filtros en la búsqueda de medicamentos
    Para encontrar resultados más adecuados según mis necesidades.

Scenario Outline: Aplicación de filtros de búsqueda
    Given que el paciente realiza una búsqueda de medicamentos
    When selecciona filtros como ubicación, fecha de vencimiento o presentación
    Then el sistema muestra resultados ajustados a los filtros seleccionados.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |