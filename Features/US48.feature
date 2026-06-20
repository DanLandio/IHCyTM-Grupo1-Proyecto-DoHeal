Feature: Guardado de datos en la nube
    Como usuario de la plataforma
    Quiero que mis datos se guarden en la nube
    Para poder acceder a mi información de manera segura desde diferentes dispositivos.

  Scenario Outline: Guardado de datos en la nube
    Given que el usuario utiliza la plataforma y genera información dentro del sistema
    When el usuario registre, modifique o actualice sus datos con el <tipo_dato> y <valor_dato>
    Then el sistema deberá almacenar la información automáticamente en la nube de forma segura

  Examples:
    | tipo_dato | valor_dato      |
    | direccion | Av. Larco 123   |
    | alergia   | Penicilina      |