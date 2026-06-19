Feature: Verificacion de los empaques de las medicinas
    Como donante de medicamentos
    Quiero subir una foto del empaque del medicamento
    Para que la plataforma verifique que se encuentra sellado, íntegro y en buen estado

Scenario Outline: Verificación del estado del empaque
    Given que el donante desea registrar un <medicamento>
    When sube una imagen clara del empaque
    Then el sistema verifica que el empaque no presente daños visibles y permite continuar con la validación

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |