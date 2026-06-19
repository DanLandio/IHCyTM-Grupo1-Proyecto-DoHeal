Feature: Vista del menú según el rol
    Como usuario de la plataforma
    Quiero que la pantalla de inicio se adapte al rol que tengo (receptor, donante o profesional)
    Para acceder de manera rápida a las funciones correspondientes a mi perfil.

  Scenario Outline: Visualización del menú según el rol
    Given que el usuario ha iniciado sesión en la plataforma con un <rol_asignado>
    When acceda a la pantalla de inicio
    Then el sistema deberá mostrar un menú y opciones personalizadas de acuerdo con el <menu_esperado> del usuario

  Examples:
    | rol_asignado | menu_esperado    |
    | receptor     | MenuReceptor     |
    | donante      | MenuDonante      |
    | profesional  | MenuProfesional  |