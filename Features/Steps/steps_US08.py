from behave import given, when, then

@given('que existe un emparejamiento confirmado para el {medicamento} entre paciente y donante')
def US08_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('ambos usuarios seleccionan un punto de entrega disponible')
def US08_step2_impl(context):
    pass

@then('el sistema registra el lugar elegido y muestra la información de la entrega')
def US08_step3_impl(context):
    pass