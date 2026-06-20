Feature: Prohibición de medicamentos con alertas sanitarias
    Como profesional de salud
    Quiero que el sistema bloquee medicamentos que tengan alertas sanitarias activas
    Para evitar riesgos para la salud de los pacientes

Scenario Outline: Bloqueo de medicamento con alerta sanitaria
    Given que un donante registra un <medicamento> en la plataforma
    When el sistema detecta que el medicamento posee una alerta sanitaria vigente
    Then el medicamento es bloqueado automáticamente

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |