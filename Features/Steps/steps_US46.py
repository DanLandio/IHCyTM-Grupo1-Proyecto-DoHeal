from behave import given, when, then

@given('que el usuario ha iniciado sesión en la plataforma con un {rol_asignado}')
def US46_step1_impl(context, rol_asignado):
    context.rol_asignado = rol_asignado
    pass

@when('acceda a la pantalla de inicio')
def US46_step2_impl(context):
    pass

@then('el sistema deberá mostrar un menú y opciones personalizadas de acuerdo con el {menu_esperado} del usuario')
def US46_step3_impl(context, menu_esperado):
    context.menu_esperado = menu_esperado
    pass
