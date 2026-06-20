Feature: Recordatorio de medicamentos cerca de la fecha de vencimiento
    Como donante de medicamentos
    Quiero recibir alertas cuando mis medicamentos estén próximos a vencer
    Para evitar desperdicios y decidir si donarlos oportunamente.

Scenario Outline: Notificación de vencimiento próximo
    Given que el usuario tiene medicamentos registrados en la plataforma
    When un medicamento se acerca a la fecha mínima permitida de vencimiento
    Then el sistema envía una notificación de alerta al usuario.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |