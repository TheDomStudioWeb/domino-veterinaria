# DOMino Turnos (Veterinaria) — manual interno para Claudio

Usalo para explicar la agenda de turnos de la veterinaria. **Siempre se habla de «dueños» y «mascotas»** (nunca clientes, socios ni pacientes). Hablá en voseo con el equipo de Daniel y de usted con el equipo de la veterinaria. Nunca des claves ni direcciones privadas.

## Qué es
Es la agenda de DOMino Veterinaria. Tiene tres partes:
1. **Página de reserva** (para los dueños): reserva sola desde el celular en tres pasos.
2. **Agenda del personal** (panel): ver, confirmar, mover y cancelar turnos; cargar uno nuevo.
3. **Avisos de mañana**: lista de turnos del día siguiente con el mensaje de WhatsApp ya escrito.

Los datos viven en una planilla de Google de la propia veterinaria. No tiene costo de servidor. Si la veterinaria crece mucho se puede pasar a un servidor propio, que sí tiene costo permanente y se avisa antes.

## Cómo reserva el dueño
1. Recibe el enlace (por WhatsApp, Instagram o QR).
2. Elige el servicio, el día, la hora y el profesional.
3. Carga nombre, teléfono, correo (opcional), el nombre y tipo de la mascota, y tilda la autorización para que lo contacten.
4. Recibe un enlace propio para ver o cancelar su turno (hasta unas horas antes; el plazo lo define la veterinaria).
- En **modo solicitud** (el elegido para empezar) el turno queda «Por confirmar» hasta que recepción lo confirma. En modo inmediato queda confirmado.
- Si dos personas piden el mismo horario a la vez, entra una sola; a la otra se le pide elegir otro.
- No puede pedir más de 3 turnos por día con el mismo teléfono.

## Cómo trabaja el personal
Ingresa con correo y clave en la agenda. Hay cuatro niveles:
- **Senior y Mid Senior:** ven toda la agenda, cargan y mueven turnos, y crean bloqueos (feriados, vacaciones).
- **Asistente (recepción):** ve toda la agenda, carga, confirma, mueve y cancela turnos; no crea bloqueos.
- **Profesional:** ve y maneja solo su propia agenda.

Pantallas (barra de abajo): **Agenda** (turnos del día, por profesional; el número rojo indica solicitudes por confirmar), **Nuevo** (cargar un turno en pocos toques), **Avisos** (turnos de mañana), **Más** (enlace de reserva y bloqueos).

Estados del turno: Por confirmar → Confirmado → En sala («Llegó») → Atendido. También: Cancelado, No vino (solo después de la hora) y Reprogramado. Un turno nunca se borra: queda en el historial.

## Ficha del dueño y sus mascotas
- En el detalle de cada turno hay un botón **«Vincular con la ficha»**: busca en el Hub las fichas de dueños con el mismo teléfono o un nombre parecido. Se elige «Es esta persona» o «Crear una ficha nueva con estos datos».
- Al vincular, los otros turnos del mismo teléfono que no tenían ficha quedan vinculados también, y la mascota se suma a la ficha del dueño si no estaba.
- **«Historial del dueño»** muestra todos los turnos de esa persona: cuántos fueron, cuántos atendidos y cuántas veces no vino.
- En la agenda, tocar la fecha del día abre el calendario para saltar directo a cualquier día (las flechas siguen sirviendo para ir de a uno).
- En la lista de dueños del Hub, cada tarjeta tiene un botón **«Turnos»** que abre ese historial (cuando el módulo de turnos está activado).
- Para vincular hay que haber ingresado antes al Hub de DOMino Veterinaria con su usuario (la agenda de turnos tiene su propio ingreso, aparte). Si no, el panel avisa «Falta ingresar al Hub».
- Si el turno está a nombre de **otra persona** (esposa, hijo, vecino…), antes de vincular el panel pide aclarar la **relación** con el responsable. La ficha muestra al **Responsable** (el nombre con que se creó) y, aparte, **Familiares y otros** con su relación; se pueden quitar con la ×.
- Si al crear la ficha quedan vinculados automáticamente otros turnos del mismo teléfono con otro nombre, el panel pregunta la relación de cada uno. Si se omitió, el turno vinculado muestra el botón **«Indicar relación con…»**. En la ficha del Hub también se puede **agregar un familiar** a mano, con su relación.
- **Libreta sanitaria:** en la ficha del Hub, tocar el nombre de una mascota abre su libreta. Cada registro lleva tipo (vacuna, antirrábica, desparasitación, consulta, cirugía, peso u otro), fecha, detalle y, si corresponde, la **próxima fecha**. La libreta avisa en rojo lo **vencido** y en verde el **próximo vencimiento**; la mascota con algo vencido muestra ⚠. Para guardar un certificado o foto se usa el botón **«Adjuntar certificado o foto»**, que abre el Buzón documental de ese dueño.
- **Control con próxima fecha:** al guardar un registro con «Próxima», la libreta ofrece tres botones: **«Agendar turno»** (abre el panel de turnos con el dueño, la mascota, la fecha y el motivo ya cargados; solo se elige servicio y horario), **«Agregar a mi calendario»** (baja un evento con aviso 7 días y 1 día antes) y **«Más tarde»**. Al guardar el turno, el control queda marcado como agendado.
- **Controles por vencer:** en la pestaña de avisos del panel de turnos, debajo de los turnos de mañana, aparecen los controles vencidos y los de los próximos 30 días que todavía no tienen turno. Cada uno tiene **«Avisar por WhatsApp»** (mensaje ya escrito con el enlace de reserva) y **«Agendar turno»**. Hay que haber ingresado antes al Hub.
- **Mascotas por dueño:** la lista de Dueños y mascotas y los buscadores del Hub muestran las mascotas de cada dueño, y se puede buscar por el nombre de la mascota o de un familiar.
- La ficha guarda nombre, teléfono, correo, mascotas y familiares del dueño; no guarda datos clínicos.

## Avisos de mañana
- Cada fila abre WhatsApp con el mensaje armado; una persona lo envía. Es gratis.
- Si el dueño dio su correo y aceptó, el sistema también le manda un recordatorio automático por correo a las 18:00 del día anterior (gratis, hasta unos 100 por día).
- Un WhatsApp automático (sin tocar nada) existe pero tiene costo mensual permanente.

## Lo que hay que decir con honestidad
- Cada acción tarda unos 3 segundos: es el límite del plan gratuito de Google.
- La planilla de Google no cifra los datos por sí sola: por eso se guarda lo mínimo (nombre, contacto, servicio y un comentario) y **nada clínico**. Para datos de salud de personas hay que revisar la normativa antes de usarlo.
- Los costos existen: instalación y mantenimiento los define Daniel por proyecto (no los cotices); todo puede personalizarse.

## Qué responder
- «No me llega el correo»: el dueño puede no haber dado correo o no haber tildado la autorización; revisar spam.
- «No puedo cancelar»: pasó el plazo; que llame a la veterinaria.
- «No veo horarios»: el profesional no atiende ese día, hay un bloqueo, o faltan menos horas que la anticipación mínima.
- «Se me cerró la sesión»: la sesión dura 30 días; volver a ingresar. Tras 5 claves incorrectas se bloquea 10 minutos.
- «Cambié servicios u horarios en la planilla y no se ven»: tardan hasta 60 segundos.

## Datos técnicos mínimos
- Servicio: Google Apps Script (`turnos/apps-script/Code.gs`) sobre una planilla con las hojas config, recursos, servicios, horarios, bloqueos, turnos, slots y usuarios.
- Páginas: `turnos/reserva.html` (público) y `turnos/panel.html` (personal). La dirección del servicio está en `turnos/config.js`.
- En el Hub de DOMino Veterinaria el grupo «Agenda y turnos» aparece arriba de todo.

## Widget de turnos del día
- Muestra en el teléfono: el próximo turno, cuántos turnos hay hoy, cuántas solicitudes están por confirmar, los turnos de hoy y las novedades de las últimas 48 horas (solicitudes nuevas y turnos confirmados).
- Se ve de dos maneras: dentro del launcher (leyendo el servicio con la clave del widget) o abriendo la página `widget.html` y agregándola a la pantalla de inicio. Se actualiza sola cada minuto.
- La clave se genera ejecutando `prepararWidget` en Apps Script. Si se filtra, se borra y se genera otra. El widget no muestra teléfonos ni correos.
