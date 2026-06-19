from behave import given, when, then

@given('que el usuario aún no tiene una cuenta creada')
def US43_step1_impl(context):
    pass

@when('ingresa sus datos personales obligatorios ({nombre},{correo},{rol}) y confirma el registro')
def US43_step2_impl(context, nombre, correo, rol):
    context.nombre = nombre
    context.correo = correo
    context.rol = rol
    pass

@then('el sistema crea su perfil y le permite acceder a la plataforma')
def US43_step3_impl(context):
    pass
