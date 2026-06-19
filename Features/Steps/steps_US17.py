from behave import given, when, then

@given('que el profesional de salud revisa un {medicamento} registrado')
def US17_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('detecta que el medicamento no cumple con las condiciones necesarias')
def US17_step2_impl(context):
    pass

@then('el sistema solicita registrar la razón del rechazo')
def US17_step3_impl(context):
    pass