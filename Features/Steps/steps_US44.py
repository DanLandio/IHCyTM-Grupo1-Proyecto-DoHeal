from behave import given, when, then

@given('que el usuario haya iniciado sesión en la plataforma')
def US44_step1_impl(context):
    pass

@when('el usuario modifique sus datos de perfil actualizando su {telefono} y {ciudad}')
def US44_step2_impl(context, telefono, ciudad):
    context.telefono = telefono
    context.ciudad = city = ciudad
    pass

@then('el sistema deberá actualizar la información correctamente')
def US44_step3_impl(context):
    pass

@then('mostrar un mensaje de confirmacion de los cambios realizados')
def US44_step4_impl(context):
    pass