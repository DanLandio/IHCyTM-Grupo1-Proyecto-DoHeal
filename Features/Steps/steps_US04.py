from behave import given, when, then

@given('que el donante esté en una sesión activa en la plataforma')
def US04_step1_impl(context):
    pass

@when('el usuario acceda al apartado de "Donaciones"')
def US04_step2_impl(context):
    pass

@then('el sistema mostrará las solicitudes de los pacientes que necesiten el {medicamento} para una receta médica')
def US04_step3_impl(context, medicamento):
    context.medicamento = medicamento