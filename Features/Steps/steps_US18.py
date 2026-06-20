from behave import given, when, then

@given('que un donante registra un {medicamento} en la plataforma')
def US18_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el sistema detecta que el medicamento posee una alerta sanitaria vigente')
def US18_step2_impl(context):
    pass

@then('el medicamento es bloqueado automáticamente')
def US18_step3_impl(context):
    pass