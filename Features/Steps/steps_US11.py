from behave import given, when, then

@given('que el donante registra un {medicamento} mediante foto o escaneo')
def US11_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el sistema identifica la fecha de vencimiento')
def US11_step2_impl(context):
    pass

@then('valida el medicamento solo si cumple con el tiempo mínimo de vigencia permitido')
def US11_step3_impl(context):
    pass