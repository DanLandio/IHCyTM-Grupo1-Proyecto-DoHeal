from behave import given, when, then

@given('que el paciente sube una receta médica y solicita un {medicamento}')
def US15_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el sistema compara el nombre, dosis y presentación con el medicamento disponible')
def US15_step2_impl(context):
    pass

@then('permite continuar sólo si la información coincide correctamente')
def US15_step3_impl(context):
    pass