from behave import given, when, then

@given('que el profesional de salud tiene acceso autorizado al perfil del paciente')
def US50_step1_impl(context):
    pass

@when('consulte el {historial} con el {tratamiento_asignado} o evolución del paciente')
def US50_step2_impl(context, historial, tratamiento_asignado):
    context.historial = historial
    context.tratamiento_asignado = tratamiento_asignado
    pass

@then('el sistema deberá mostrar la información actualizada del paciente')
def US50_step3_impl(context):
    pass

@then('permitir el seguimiento de su progreso')
def US50_step4_impl(context):
    pass