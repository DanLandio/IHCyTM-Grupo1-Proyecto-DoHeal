from behave import given, when, then

@given('que el donante recibe una solicitud para el {medicamento}')
def US06_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('selecciona la opción de rechazar solicitud')
def US06_step2_impl(context):
    pass

@then('el sistema cancela el emparejamiento y notifica al paciente que debe buscar otra alternativa')
def US06_step3_impl(context):
    pass