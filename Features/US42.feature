Feature: Envío de notificación por solicitud
    Como donante de medicamentos
    Quiero recibir notificaciones cuando un paciente solicite un medicamento que he publicado
    Para estar informado y poder responder a la solicitud.

  Scenario Outline: Notificación al donante por nueva solicitud
    Given que el donante tiene un medicamento <medicamento> validado y disponible en la plataforma
    When un paciente solicita ese medicamento requiriendo una cantidad de <cantidad>
    Then el sistema envía una notificación al donante con la información de la solicitud recibida


  Examples:
    | medicamento | cantidad |
    | Paracetamol | 20       |
    | Ibuprofeno   | 10       |