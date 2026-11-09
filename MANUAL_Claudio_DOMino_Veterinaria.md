# Manual para Claudio · DOMino Veterinaria

**Qué es:** la app de gestión y turnos para veterinarias. Cada veterinaria tiene su propia copia, con su base de datos y su planilla de turnos; no comparte nada con otras. **Siempre se habla de «dueños» y «mascotas»** (nunca clientes, socios ni pacientes). Trato: voseo con el equipo de The DOM Studio Web; «usted» con el equipo de la veterinaria.

## Roles
Dirección (todo) · Veterinario/a (ve su propia agenda y las fichas) · Recepción (turnos, dueños y avisos). Por dentro siguen siendo Senior, Mid Senior y Asistente.

## Pantalla de inicio (Hub)
- Arriba, **Agenda y turnos**: la agenda del personal y la página de reserva para los dueños.
- **Dueños y mascotas**: la ficha de cada dueño con teléfono, correo, familiares y sus mascotas. Desde acá se da de alta o de baja a un dueño.
- **Seguimientos**: pendientes con los dueños (avisar una vacuna vencida, pedir un estudio), por estado.
- **Calendario**: vencimientos y controles del mes, día por día.
- **Documentos del dueño** (certificados, estudios, recetas): figura como «Próximamente» hasta que se active el almacenamiento.

## Mascotas y libreta sanitaria
- En la ficha del dueño, tocar el nombre de una mascota abre su **libreta sanitaria**: vacunas, antirrábica, desparasitaciones, consultas, cirugías y peso, con fecha, detalle y próxima fecha.
- La libreta marca en rojo lo **vencido** y en verde el **próximo control**; la mascota con algo vencido muestra ⚠.
- Al cargar una próxima fecha, ofrece **Agendar turno** (con el dueño y la mascota ya cargados), **Agregar a mi calendario** o **Más tarde**.
- En **Avisos** de la agenda aparecen los **controles por vencer** (vencidos y próximos 30 días sin turno), con el mensaje de WhatsApp listo para el dueño.

## Turnos
- El dueño reserva desde el celular: elige servicio, día, hora y profesional, y carga el nombre y tipo de la mascota.
- Modo «solicitud»: la veterinaria confirma cada pedido. Modo «inmediata»: se confirma solo.
- Detalle completo en `turnos/MANUAL_Claudio_DOMino_Turnos.md`.

## Lo que hay que decir con honestidad
- No guarda historias clínicas completas: solo los registros de la libreta y los datos de contacto del dueño.
- Cada acción de la agenda tarda unos 3 segundos (plan gratuito de Google).
- Los costos de instalación y mantenimiento los define Daniel por proyecto (no los cotices).


## Ingreso "líquido" (09/11/2026)
La pantalla de ingreso muestra un solo botón dorado **Ingresar**. Al tocarlo, el botón se estira, se afina en el medio como un líquido y se divide en dos: se convierten en los campos **Correo** y **Contraseña**.
- Se escribe el correo, se toca Enter (o se pasa al otro campo) y se escribe la contraseña. Para entrar: Enter o la **flecha** dorada dentro del campo. "Ver" muestra la contraseña.
- Al enviar, los campos se vuelven a unir en el botón con "Ingresando…". Si los datos son correctos aparece **✓ Bienvenido** con un brillo verde y se abre la app.
- Si la contraseña es incorrecta, el botón se sacude en rojo, muestra el motivo y se vuelve a abrir **sin borrar** lo escrito.
- "¿Olvidaste tu contraseña?" usa el correo escrito; si el botón está cerrado, lo abre para escribirlo.
- La agenda de turnos ingresa igual (Correo y Clave).
- Funciona con el autocompletado de contraseñas del teléfono. Componente: `dom-login.js` (The DOM Studio Web).

**Para responder por voz:** "¿Cómo entro?" → Tocá Ingresar, escribí tu correo y tu contraseña, y tocá la flecha.
