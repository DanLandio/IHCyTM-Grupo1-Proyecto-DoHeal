from behave import given, when, then

@given('que el donante desea registrar un {medicamento}')
def US12_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('sube una imagen clara del empaque')
def US12_step2_impl(context):
    pass

@then('el sistema verifica que el empaque no presente daños visibles y permite continuar con la validación')
def US12_step3_impl(context):
    pass