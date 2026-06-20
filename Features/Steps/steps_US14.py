from behave import given, when, then

@given('que un {medicamento} fue registrado en la plataforma')
def US14_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el profesional de salud detecta una observación en el empaque, fecha o información del medicamento')
def US14_step2_impl(context):
    pass

@then('el sistema cancela la validación y retira el medicamento de las opciones disponibles')
def US14_step3_impl(context):
    pass