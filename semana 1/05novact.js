// filter selecciona elementos del arreglo que cumplen una condición
// reduce combina los elementos en un solo resultado
// uso toFixed para los decimales 
const calificaciones = [9, 5, 8, 6.5];

const aprobados = calificaciones.filter(
  (calificacion) => calificacion >= 6
);

const suma = aprobados.reduce(
  (total, calificacion) => total + calificacion,
  0
);

const promedio = suma / aprobados.length;

console.log(promedio.toFixed(2)); 