Feature: Mensajería simple entre usuarios
    Como usuario de la plataforma
    Quiero enviar y recibir mensajes simples con otros usuarios
    Para poder comunicarse de manera rápida dentro del sistema

  Scenario Outline: Envío de mensajes entre usuarios
    Given que dos usuarios tienen cuentas registradas en la plataforma
    When un usuario envíe un mensaje con el <contenido> al destinatario <destinatario>
    Then el sistema deberá entregar el mensaje correctamente y mostrarlo en la conversación correspondiente

  Examples:
    | contenido                            | destinatario |
    | Hola, aun tienes el Paracetamol?      | Luis12       |
    | Sí, coordinemos la entrega del mismo. | MariaG       |