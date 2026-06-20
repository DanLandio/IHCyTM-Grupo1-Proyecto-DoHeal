Feature: Priorización de emparejamiento por urgencias médicas
    Como paciente que necesita medicamentos
    Quiero que el sistema de emparejamiento con donantes tenga en cuenta la urgencia de mi caso
    Para tener un tratamiento temprano y con menos complicaciones

Scenario Outline: Elección de solicitudes urgentes
    Given que el sistema haya validado que una solicitud de medicinas es urgente para <medicamento>
    When el sistema encuentra donantes con medicinas adecuadas
    And hace el emparejamiento
    Then la solicitud urgente toma más prioridad sobre las solicitudes no urgentes

Scenario Outline: Elección de solicitudes con misma urgencia
    Given que el sistema haya validado varias solicitudes como urgentes para <medicamento>
    When el sistema encuentra donantes con medicinas adecuadas
    And hace el emparejamiento
    Then la solicitud urgente que haya sido realizada de forma más temprana es priorizada

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |