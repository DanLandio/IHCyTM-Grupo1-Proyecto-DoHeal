Feature: Recordatorio de la fecha de encuentro para la entrega
    Como paciente o donante
    Quiero recibir un recordatorio de la fecha de encuentro para la entrega
    Para no olvidar la reunión programada y asistir puntualmente.

Scenario Outline: Recordatorio de fecha de encuentro
    Given que el usuario tiene una entrega programada con fecha y hora registradas.
    When falta un tiempo determinado para la reunión.
    Then el sistema deberá enviar un recordatorio al usuario con los detalles de la fecha, hora y lugar del encuentro.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |