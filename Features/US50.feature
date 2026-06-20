Feature: Seguimiento de perfiles de pacientes
    Como profesional de salud
    Quiero hacer seguimiento de los perfiles y tratamientos de los pacientes
    Para asegurar que su salud vaya mejorando

  Scenario Outline: Seguimiento de perfiles y tratamientos
    Given que el profesional de salud tiene acceso autorizado al perfil del paciente
    When consulte el <historial> con el <tratamiento_asignado> o evolución del paciente
    Then el sistema deberá mostrar la información actualizada del paciente
    And permitir el seguimiento de su progreso

  Examples:
    | historial           | tratamiento_asignado |
    | Tratamiento Fiebre  | Paracetamol c/8h       |
    | Tratamiento Dolor   | Ibuprofeno c/12h       |