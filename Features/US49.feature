Feature: Guardado de contactos en la plataforma
    Como usuario de la plataforma
    Quiero tener guardados a otros usuarios como contactos
    Para que me pueda comunicar y cooperar con ellos

  Scenario Outline: Guardado de contactos
    Given que el usuario ha iniciado sesión en la plataforma
    When agregue a otro usuario con <nombre_usuario> y <id_usuario> a su lista de contactos
    Then el sistema deberá guardar el contacto correctamente
    And mostrarlo en la lista de contactos


  Examples:
    | nombre_usuario | id_usuario |
    | Carlos99       | USR-9921   |
    | Ana_Donante    | USR-4412   |