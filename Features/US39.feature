Feature: Recordatorio de dosis del medicamento
    Como paciente con tratamiento médico
    Quiero recibir recordatorios de dosis según mi receta médica
    Para tomar mis medicamentos en el horario correcto y cumplir mi tratamiento.

Scenario Outline: Activación de recordatorio de dosis
    Given que el paciente ha registrado una receta médica vigente
    When configura los horarios de toma del medicamento
    Then el sistema envía notificaciones recordando la dosis correspondiente.

Examples:
    | medicamento | cantidad | dosis |
    | Paracetamol | 20       | 500mg |
    | Ibuprofeno   | 10       | 200mg |