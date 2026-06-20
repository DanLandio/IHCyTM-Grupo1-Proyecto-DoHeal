Feature: Exploración de medicamentos en catálogo
    Como paciente que necesita medicamentos
    Quiero explorar el catálogo general de medicamentos disponibles
    Para conocer las opciones disponibles en la plataforma.

Scenario Outline: Exploración del catálogo
    Given que el usuario accede al apartado de catálogo
    When revisa la lista de medicamentos
    Then el sistema muestra los medicamentos disponibles con información básica.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |