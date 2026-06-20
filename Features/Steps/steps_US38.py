from behave import given, when, then

@given('que el usuario realizó una solicitud de medicinas registrada en el sistema.')
def US38_step1_impl(context):
    pass

@when('la solicitud sea cancelada por el sistema, farmacia o donante')
def US38_step2_impl(context):
    pass

@then('el sistema deberá enviar una notificación indicando que la solicitud fue cancelada y el motivo de la cancelación.')
def US38_step3_impl(context):
    pass