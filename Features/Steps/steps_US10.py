from behave import given, when, then

@given('que un paciente solicita un {medicamento} que no se encuentra disponible')
def US10_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el profesional de salud registra una alternativa válida')
def US10_step2_impl(context):
    pass

@then('el sistema muestra la opción sugerida como alternativa revisada profesionalmente')
def US10_step3_impl(context):
    pass