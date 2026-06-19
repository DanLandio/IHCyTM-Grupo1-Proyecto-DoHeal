from behave import given, when, then

@given('que el paciente tiene un emparejamiento activo por el {medicamento}')
def US09_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('ingresa al detalle del donante')
def US09_step2_impl(context):
    pass

@then('el sistema muestra datos básicos, calificación y estado de verificación del donante')
def US09_step3_impl(context):
    pass