Feature: Visualización de solicitudes para donantes
    Como paciente con medicamentos en exceso
    Quiero visualizar solicitudes de medicamentos por parte de otros pacientes
    Para decidir a quién puedo donar las medicinas que tengo

Scenario Outline: Vista de solicitudes por parte de pacientes
    Given que el donante esté en una sesión activa en la plataforma
    When el usuario acceda al apartado de "Donaciones"
    Then el sistema mostrará las solicitudes de los pacientes que necesiten el <medicamento> para una receta médica

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |