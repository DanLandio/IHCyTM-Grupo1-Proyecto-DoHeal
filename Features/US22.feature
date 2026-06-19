Feature: Edición y eliminación de medicamentos en la plataforma
    Como donante de medicamentos
    Quiero editar o eliminar medicamentos registrados
    Para mantener actualizada la información de donaciones.

Scenario Outline: Edición de medicamento registrado
    Given que el donante tiene medicamentos registrados
    When modifica la información del medicamento
    Then el sistema actualiza los cambios realizados.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |