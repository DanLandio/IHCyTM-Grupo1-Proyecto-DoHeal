from behave import given, when, then

@given('el donante desea registrar un {medicamento}')
def US20_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('sube una fotografía clara del empaque')
def US20_step2_impl(context):
    pass

@then('el sistema detecta automáticamente el nombre, dosis y fecha de vencimiento')
def US20_step3_impl(context):
    pass