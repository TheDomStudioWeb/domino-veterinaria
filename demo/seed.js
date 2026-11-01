// Datos inventados de la demostración de DOMino Veterinaria (veterinaria ficticia).
const dia = 86400000, ahora = Date.now();
const iso = (n) => new Date(ahora + n * dia).toISOString().split('T')[0];
const es = (n) => new Date(ahora + n * dia).toLocaleDateString('es-ES');
const ts = (n) => ({ __t: ahora + n * dia });
const C = (id, nombre, dni, tel, mascotas, mail) => ['clients/' + id, { nombre_empresa: nombre, cuit: dni, estado: 'activo', fecha_creacion: new Date(ahora - 120 * dia).toISOString(), usuario_id: mail || '', telefono: tel, email_contacto: mail || '', mascotas }];
const T = (id, cli, titulo, venc, resp, est) => ['tasks/' + id, { cliente_id: cli, titulo, vencimiento: iso(venc), responsable: resp, estado: est }];
const D = (id, cli, cat, arch, f, est) => ['documents/' + id, { cliente_id: cli, categoria: cat, nombre_archivo: arch, fecha_subida: es(f), estado: est, url_descarga: '#' }];
const lista = [
  ['config/negocio', { nombre: 'Alma Animal Veterinaria', rubro: 'veterinaria', equipo: { senior: 1, midsenior: 2, asistente: 1 }, logo: '', creado: ts(-60) }],
  ['config/publico', { nombre: 'Alma Animal Veterinaria', rubro: 'veterinaria' }],
  ['users/direccion@demo.com', { email: 'direccion@demo.com', nombre_display: 'Dra. Carolina Vidal', rol_jerarquia: 'senior', activo: true }],
  ['users/veterinario@demo.com', { email: 'veterinario@demo.com', nombre_display: 'Dr. Nicolás Paz', rol_jerarquia: 'midsenior', activo: true }],
  ['users/recepcion@demo.com', { email: 'recepcion@demo.com', nombre_display: 'Recepción', rol_jerarquia: 'asistente', activo: true }],
  C('c1', 'Marina Gutiérrez', '28123456', '2615550101', [{ nombre: 'Thor', tipo: 'Perro' }, { nombre: 'Luna', tipo: 'Gato' }]),
  C('c2', 'Julián Herrera', '33987654', '2615550102', [{ nombre: 'Canela', tipo: 'Perro' }]),
  C('c3', 'Sofía Quiroga', '37456123', '2615550103', [{ nombre: 'Mia', tipo: 'Gato' }, { nombre: 'Simón', tipo: 'Gato' }]),
  C('c4', 'Familia Domínguez', '25111222', '2615550104', [{ nombre: 'Max', tipo: 'Perro' }]),
  C('c5', 'Pablo Ledesma', '30222333', '2615550105', [{ nombre: 'Rocco', tipo: 'Perro' }]),
  T('t1', 'c1', 'Vacuna antirrábica de Thor', 0, 'Recepción', 'Pendiente de Procesar'),
  T('t2', 'c2', 'Control post-operatorio de Canela', 1, 'Veterinarios', 'En Proceso'),
  T('t3', 'c3', 'Desparasitación de Mia y Simón', 3, 'Recepción', 'Pendiente de Procesar'),
  T('t4', 'c4', 'Análisis de sangre de Max', 0, 'Veterinarios', 'En Revisión'),
  T('t5', 'c5', 'Castración de Rocco: pre-quirúrgico', 6, 'Veterinarios', 'En Proceso'),
  T('t6', 'c1', 'Control de peso de Luna', -3, 'Recepción', 'Proceso Completo/Finalizado'),
  D('d1', 'c1', 'Legal', 'Libreta_sanitaria_Thor.pdf', 0, 'Pendiente de Procesar'),
  D('d2', 'c2', 'Legal', 'Estudio_radiografico_Canela.pdf', -1, 'En Revisión'),
  D('d3', 'c4', 'Legal', 'Resultados_laboratorio_Max.pdf', -2, 'En Proceso'),
  ['mensajes/m1', { texto: 'Recordatorio: mañana llega el pedido de vacunas.', autor_uid: 'demo-recepcion@demo.com', nombre_display: 'Recepción', rol: 'asistente', fecha_timestamp: ts(-0.1) }],
  ['entregas/e1', { cliente_id: 'c2', categoria: 'Comunicacion', nombre_archivo: 'Indicaciones_post_operatorio_Canela.pdf', fecha_envio: es(-2), url_descarga: '#', enviado_por: 'Profesional', fecha_timestamp: ts(-2) }]
];
export const SEED = { id: 'veterinaria', users: [
  { email: 'direccion@demo.com', nombre_display: 'Dra. Carolina Vidal' }, { email: 'veterinario@demo.com', nombre_display: 'Dr. Nicolás Paz' }, { email: 'recepcion@demo.com', nombre_display: 'Recepción' } ],
  docs: Object.fromEntries(lista) };
