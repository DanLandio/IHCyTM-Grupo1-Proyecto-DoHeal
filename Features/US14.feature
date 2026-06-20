Feature: Cancelación de la validación de un medicamento
    Como profesional de salud
    Quiero cancelar la validación dada un medicamento registrado en la plataforma por alguna observación realizada
    Para evitar riesgos de salud al ser entregado a un paciente

Scenario Outline: Cancelación de validación por observación
    Given que un <medicamento> fue registrado en la plataforma
    When el profesional de salud detecta una observación en el empaque, fecha o información del medicamento
    Then el sistema cancela la validación y retira el medicamento de las opciones disponibles

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |