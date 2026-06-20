Feature: Edición de datos de perfil
    Como usuario de la plataforma
    Quiero editar mis datos de perfil
    Para mantener mi información personal actualizada dentro del sistema.

  Scenario Outline: Edición de datos de perfil
    Given que el usuario ha iniciado sesión en la plataforma
    When el usuario modifique sus datos de perfil actualizando su <telefono> y <ciudad>
    Then el sistema deberá actualizar la información correctamente
    And mostrar un mensaje de confirmacion de los cambios realizados
  Examples:
    | telefono  | ciudad   |
    | 987654321 | Lima     |
    | 912345678 | Arequipa |