from behave import given, when, then

@given('que el usuario utiliza la plataforma y genera información dentro del sistema')
def US48_step1_impl(context):
    pass

@when('el usuario registre, modifique o actualice sus datos con el {tipo_dato} y {valor_dato}')
def US48_step2_impl(context, tipo_dato, valor_dato):
    context.tipo_dato = tipo_dato
    context.valor_dato = valor_dato
    pass

@then('el sistema deberá almacenar la información automáticamente en la nube de forma segura')
def US48_step3_impl(context):
    pass
