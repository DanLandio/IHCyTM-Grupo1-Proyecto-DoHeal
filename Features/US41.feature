Feature: Envío de notificación por donante
    Como paciente que necesita medicamentos
    Quiero recibir una notificación cuando un donante acepte mi solicitud
    Para saber que podré acceder al medicamento solicitado.

  Scenario Outline: Notificación de aceptación por parte del donante
    Given que el paciente ha enviado una solicitud del medicamento <medicamento>
    When el donante acepta dicha solicitud con la cantidad de <cantidad> unidades
    Then el sistema envía una notificación al paciente indicando que su solicitud fue aceptada


  Examples:
    | medicamento | cantidad |
    | Paracetamol | 20       |
    | Ibuprofeno   | 10       |