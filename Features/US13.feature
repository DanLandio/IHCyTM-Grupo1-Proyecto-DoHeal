Feature: Bloqueo automatico de medicamentos cerca de vencer
    Como paciente que necesita medicamentos
    Quiero que el sistema elimine de forma automática registros de medicamentos que estén vencidos o muy cerca de vencer
    Para proteger mi salud y la de otros pacientes que pueden recibir esas medicinas

Scenario Outline: Bloqueo de medicamento no apto
    Given que un donante registra un <medicamento> con fecha de vencimiento
    When el sistema detecta que la fecha de vencimiento se acerca
    Then elimina el registro en la plataforma
    And muestra un mensaje indicando que no puede ser donado

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |