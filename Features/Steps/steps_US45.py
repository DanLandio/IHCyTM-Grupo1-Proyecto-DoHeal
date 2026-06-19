from behave import given, when, then

@given('que el profesional de salud accede al formulario de registro')
def US45_step1_impl(context):
    pass

@when('complete correctamente sus datos personales ({nombre}), profesionales ({especialidad},{colegiatura}) y seleccione su rol')
def US45_step2_impl(context, nombre, especialidad, colegiatura):
    context.nombre = nombre
    context.especialidad = especialidad
    context.colegiatura = colegiatura
    pass

@then('el sistema deberá crear la cuenta exitosamente')
def US45_step3_impl(context):
    pass

@then('asignarle el rol de profesional de salud dentro de la plataforma')
def US45_step4_impl(context):
    pass