Feature: Búsqueda de medicamentos por receta
    Como paciente con receta médica vigente
    Quiero buscar medicamentos usando la información de mi receta
    Para encontrar opciones compatibles con mi tratamiento.

Scenario Outline: Búsqueda mediante receta médica
    Given que el paciente tiene una receta registrada y validada
    When selecciona la opción de buscar medicamentos
    Then el sistema muestra medicamentos compatibles con la receta médica.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |