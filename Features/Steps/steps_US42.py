from behave import given, when, then

@given('que el donante tiene un medicamento {medicamento} validado y disponible en la plataforma')
def US42_step1_impl(context, medicamento):
    context.medicamento = medicamento
    pass

@when('un paciente solicita ese medicamento requiriendo una cantidad de {cantidad}')
def US42_step2_impl(context, cantidad):
    context.cantidad = cantidad
    pass

@then('el sistema envía una notificación al donante con la información de la solicitud recibida')
def US42_step3_impl(context):
    pass
