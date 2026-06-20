from behave import given, when, then

@given('que el donante registra un {medicamento} en la plataforma')
def US19_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('ingresa el número de lote del producto')
def US19_step2_impl(context):
    pass

@then('el sistema almacena la información')
def US19_step3_impl(context):
    pass