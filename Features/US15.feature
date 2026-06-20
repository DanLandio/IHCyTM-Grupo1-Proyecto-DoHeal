Feature: Validacion de coincidencias entre medicamento solicitado y donado
    Como donante de medicamentos
    Quiero comparar la medicina a donar con la información de la receta médica
    Para asegurar que el paciente reciba exactamente el medicamento que necesita

Scenario Outline: Coincidencia entre receta y medicamento
    Given que el paciente sube una receta médica y solicita un <medicamento>
    When el sistema compara el nombre, dosis y presentación con el medicamento disponible
    Then permite continuar sólo si la información coincide correctamente

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |