from behave import given, when, then

@given('que el {medicamento} registrado por el donante fue rechazado durante la validación')
def US16_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el donante accede al detalle del medicamento rechazado')
def US16_step2_impl(context):
    pass

@then('el sistema muestra la razón del rechazo registrada por el profesional de salud')
def US16_step3_impl(context):
    pass