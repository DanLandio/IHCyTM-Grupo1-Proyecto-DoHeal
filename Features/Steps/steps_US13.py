from behave import given, when, then

@given('que un donante registra un {medicamento} con fecha de vencimiento')
def US13_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el sistema detecta que la fecha de vencimiento se acerca')
def US13_step2_impl(context):
    pass

@then('elimina el registro en la plataforma')
def US13_step3_impl(context):
    pass

@then('muestra un mensaje indicando que no puede ser donado')
def US13_step4_impl(context):
    pass