from behave import given, when, then

@given('que el usuario haya solicitado medicamentos con una receta validada')
def US02_step1_impl(context):
    pass

@when('accede al apartado de "Recetas registradas"')
def US02_step2_impl(context):
    pass

@then('el sistema muestra el estado de las solicitudes que haya enviado para el {medicamento}')
def US02_step3_impl(context, medicamento):
    context.medicamento = medicamento