from behave import given, when, then

@given('que dos usuarios tienen cuentas registradas en la plataforma')
def US47_step1_impl(context):
    pass

@when('un usuario envíe un mensaje con el {contenido} al destinatario {destinatario}')
def US47_step2_impl(context, contenido, destinatario):
    context.contenido = contenido
    context.destinatario = destinatario
    pass

@then('el sistema deberá entregar el mensaje correctamente y mostrarlo en la conversación correspondiente')
def US47_step3_impl(context):
    pass
