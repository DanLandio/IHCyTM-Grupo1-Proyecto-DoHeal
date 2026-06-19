Feature: Emparejamiento por cercanía
    Como paciente que necesita medicamentos
    Quiero que la plataforma priorice donantes cercanos a mi ubicación
    Para reducir el tiempo y costo de traslado al momento de recoger el medicamento

Scenario Outline: Búsqueda de donantes cercanos
    Given que el paciente activa su ubicación en la aplicación
    When busca un <medicamento> disponible
    Then el sistema muestra primero los donantes más cercanos a su zona

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |