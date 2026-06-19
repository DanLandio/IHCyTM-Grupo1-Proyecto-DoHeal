Feature: Creación de perfiles
    Como usuario de la plataforma
    Quiero crear un perfil personal
    Para poder acceder a los servicios y funcionalidades del sistema.

  Scenario Outline: Registro exitoso de un nuevo perfil
    Given que el usuario aún no tiene una cuenta creada
    When ingresa sus datos personales obligatorios (<nombre>,<correo>,<rol>) y confirma el registro
    Then el sistema crea su perfil y le permite acceder a la plataforma

  Examples:
    | nombre      | correo         | rol      |
    | Juan Perez  | juan@mail.com  | Paciente |
    | Maria Gomez | maria@mail.com | Donante  |