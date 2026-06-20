from behave import given, when, then

@given('que el usuario ha iniciado sesión en la plataforma')
def US49_step1_impl(context):
    pass

@when('agregue a otro usuario con {nombre_usuario} y {id_usuario} a su lista de contactos')
def US49_step2_impl(context, nombre_usuario, id_usuario):
    context.nombre_usuario = nombre_usuario
    context.id_usuario = id_usuario
    pass

@then('el sistema deberá guardar el contacto correctamente')
def US49_step3_impl(context):
    pass

@then('mostrarlo en la lista de contactos')
def US49_step4_impl(context):
    pass