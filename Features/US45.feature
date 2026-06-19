Feature: Registro de perfil con rol de profesional de salud
    Como profesional de salud
    Quiero registrarme en la plataforma con mi rol correspondiente
    Para poder acceder a funcionalidades y servicios especializados dentro del sistema.

  Scenario Outline: Registro de perfil de profesional de salud
    Given que el profesional de salud accede al formulario de registro
    When complete correctamente sus datos personales (<nombre>), profesionales (<especialidad>,<colegiatura>) y seleccione su rol
    Then el sistema deberá crear la cuenta exitosamente
    And asignarle el rol de profesional de salud dentro de la plataforma

  Examples:
    | nombre            | especialidad | colegiatura |
    | Dr. Carlos Flores | Pediatría    | CMP12345    |
    | Dra. Ana Torres   | Cardiología  | CMP67890    |