Feature: Guardado de búsquedas de medicamentos continuos
    Como paciente con tratamiento médico continuo
    Quiero guardar búsquedas frecuentes de medicamentos
    Para acceder rápidamente a ellas en futuras consultas.

Scenario Outline: Guardado de búsqueda frecuente
    Given que el paciente realiza una búsqueda de medicamentos
    When selecciona la opción de guardar búsqueda
    Then el sistema almacena la búsqueda en el perfil del usuario.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |