from behave import given, when, then

@given('que el paciente activa su ubicación en la aplicación')
def US07_step1_impl(context):
    pass

@when('busca un {medicamento} disponible')
def US07_step2_impl(context, medicamento):
    context.medicamento = medicamento

@then('el sistema muestra primero los donantes más cercanos a su zona')
def US07_step3_impl(context):
    pass