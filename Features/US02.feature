Feature: Seguimiento de solicitud de medicinas
    Como paciente que necesita medicamentos
    Quiero ver como se encuentra mi solicitud de medicinas en base a mi receta
    Para conocer si hay donantes dispuestos a ayudar

Scenario Outline: El usuario consulta el estado de su solicitud
    Given que el usuario haya solicitado medicamentos con una receta validada
    When accede al apartado de "Recetas registradas"
    Then el sistema muestra el estado de las solicitudes que haya enviado para el <medicamento>

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |