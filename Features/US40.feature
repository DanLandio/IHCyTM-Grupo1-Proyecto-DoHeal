Feature: Notificación por disponibilidad de medicinas
    Como paciente con receta médica vigente
    Quiero recibir una notificación cuando las medicinas solicitadas estén disponibles
    Para poder continuar con el proceso de compra o recojo del pedido.

Scenario Outline: Notificación de disponibilidad de medicinas
    Given que el paciente realizó una búsqueda o solicitud de medicinas no disponibles previamente
    When las medicinas vuelvan a estar disponibles en el sistema o farmacia
    Then el sistema deberá enviar una notificación al usuario indicando la disponibilidad de las medicinas solicitadas.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |