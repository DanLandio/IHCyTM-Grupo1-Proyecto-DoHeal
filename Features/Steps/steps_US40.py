from behave import given, when, then

@given('que el paciente realizó una búsqueda o solicitud de medicinas no disponibles previamente')
def US40_step1_impl(context):
    pass

@when('las medicinas vuelvan a estar disponibles en el sistema o farmacia')
def US40_step2_impl(context):
    pass

@then('el sistema deberá enviar una notificación al usuario indicando la disponibilidad de las medicinas solicitadas.')
def US40_step3_impl(context):
    pass