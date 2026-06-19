Feature: Registro del número de lote de los medicamentos donados
    Como donante de medicamentos
    Quiero registrar el número de lote del medicamento
    Para facilitar su trazabilidad y validación

Scenario Outline: Registro correcto del número de lote
    Given que el donante registra un <medicamento> en la plataforma
    When ingresa el número de lote del producto
    Then el sistema almacena la información

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |