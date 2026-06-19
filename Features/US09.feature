Feature: Visualización de información básica sobre el donante y el paciente
    Como paciente que recibirá un medicamento
    Quiero visualizar información básica del donante y su reputación en la plataforma
    Para sentir mayor confianza antes de aceptar la entrega

Scenario Outline: Revisión del perfil del donante
    Given que el paciente tiene un emparejamiento activo por el <medicamento>
    When ingresa al detalle del donante
    Then el sistema muestra datos básicos, calificación y estado de verificación del donante

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |