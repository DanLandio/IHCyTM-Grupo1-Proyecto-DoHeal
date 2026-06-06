from behave import given, when, then

@given('que el paciente está en una sesión activa en la plataforma')
def US01_step1_impl(context):    pass

@given('se encuentre en el apartado de registro de recetas')
def US01_step2_impl(context):    pass

@when('ingresa los datos básicos ({medicamento},{cantidad},{dosis}) de su receta')
def US01_step3_impl(context, medicamento, cantidad, dosis):    
    context.medicamento = medicamento
    context.cantidad = cantidad
    context.dosis = dosis

@when('registra una fotografía de la receta')
def US01_step4_impl(context):    pass

@then('el sistema registra la solicitud para buscar donantes')
def US01_step5_impl(context):    pass

@then('muestra un aviso en la aplicación')
def US01_step6_impl(context):    pass