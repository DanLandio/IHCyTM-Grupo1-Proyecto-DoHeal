Feature: Elección de centro de entrega
    Como paciente y donante de medicamentos
    Quiero elegir un punto seguro de entrega, como una farmacia, posta o centro de salud
    Para realizar el intercambio del medicamento en un lugar confiable

Scenario Outline: Selección de punto seguro de entrega
    Given que existe un emparejamiento confirmado para el <medicamento> entre paciente y donante
    When ambos usuarios seleccionan un punto de entrega disponible
    Then el sistema registra el lugar elegido y muestra la información de la entrega

Examples:
    | medicamento |
    | Paracetamol |
    | Ibuprofeno   |