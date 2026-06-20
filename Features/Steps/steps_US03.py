from behave import given, when, then

# --- Escenario: Elección de solicitudes urgentes ---
@given('que el sistema haya validado que una solicitud de medicinas es urgente para {medicamento}')
def US03_step1_impl(context, medicamento):
    context.medicamento = medicamento

@when('el sistema encuentra donantes con medicinas adecuadas')
def US03_step2_impl(context):
    pass

@when('hace el emparejamiento')
def US03_step3_impl(context):
    pass

@then('la solicitud urgente toma más prioridad sobre las solicitudes no urgentes')
def US03_step4_impl(context):
    pass

# --- Escenario: Elección de solicitudes con misma urgencia ---
@given('que el sistema haya validado varias solicitudes como urgentes para {medicamento}')
def US03_step5_impl(context, medicamento):
    context.medicamento = medicamento

@then('la solicitud urgente que haya sido realizada de forma más temprana es priorizada')
def US03_step6_impl(context):
    pass