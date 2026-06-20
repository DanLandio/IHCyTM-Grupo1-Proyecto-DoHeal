from behave import given, when, then

@given('que el paciente ha enviado una solicitud del medicamento {medicamento}')
def US41_step1_impl(context, medicamento):
    context.medicamento = medicamento
    pass

@when('el donante acepta dicha solicitud con la cantidad de {cantidad} unidades')
def US41_step2_impl(context, cantidad):
    context.cantidad = cantidad
    pass

@then('el sistema envía una notificación al paciente indicando que su solicitud fue aceptada')
def US41_step3_impl(context):
    pass

