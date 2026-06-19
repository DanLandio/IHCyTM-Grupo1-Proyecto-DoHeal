Feature: Actualización automática del inventario de medicinas
    Como donante de medicamentos
    Quiero que el sistema actualice automáticamente mi inventario después de una donación
    Para mantener organizada mi lista de medicamentos disponibles.

Scenario Outline: Actualización de inventario después de donar
    Given que el donante completa una entrega de medicamento
    When la donación es confirmada por el paciente
    Then el sistema elimina o actualiza automáticamente el medicamento del inventario disponible.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |