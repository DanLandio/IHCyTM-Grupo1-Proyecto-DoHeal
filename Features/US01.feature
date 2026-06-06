
Feature: Registro de recetas medicas
    Como paciente que necesita medicamentos
    Quiero registrar mi receta en la plataforma
    Para que el sistema busque donantes con las medicinas que necesito

Scenario Outline: Registro de receta correcto
    Given que el paciente está en una sesión activa en la plataforma
    And se encuentre en el apartado de registro de recetas
    When ingresa los datos básicos (<medicamento>,<cantidad>,<dosis>) de su receta
    And registra una fotografía de la receta 
    Then el sistema registra la solicitud para buscar donantes
    And muestra un aviso en la aplicación
    |RECETA REGISTRADA CON ÉXITO|
    |-CERRAR-|

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20 | 500mg |
    | Ibuprofeno | 10 | 200mg |