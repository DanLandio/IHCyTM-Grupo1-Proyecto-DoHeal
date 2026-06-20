Feature: Notificación de cancelación de solicitud de medicinas
    Como paciente que necesita medicinas
    Quiero recibir una notificación cuando una solicitud de medicinas sea cancelada
    Para estar informado del estado de mi pedido y tomar las acciones necesarias.

Scenario Outline: Notificación de cancelación de solicitud
    Given que el usuario realizó una solicitud de medicinas registrada en el sistema.
    When la solicitud sea cancelada por el sistema, farmacia o donante
    Then el sistema deberá enviar una notificación indicando que la solicitud fue cancelada y el motivo de la cancelación.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |