from behave import given, when, then

@given('que el paciente donante haya registrado el {medicamento} en la plataforma')
def US05_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el sistema revise solicitudes de medicinas')
def US05_step2_impl(context):
    pass

@when('detecte que un paciente necesita unos medicamentos que se tienen registrados')
def US05_step3_impl(context):
    pass

@then('el sistema muestra sugerencias sobre pacientes a los que les puede donar sus medicinas.')
def US05_step4_impl(context):
    pass