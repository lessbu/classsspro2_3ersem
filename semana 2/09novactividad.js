// descuentosss
function descuento(precio, porcentaje = 10) {
  return precio * (1 - porcentaje / 100);
}

console.log(descuento(200));      
console.log(descuento(200, 25));  


// promediechon
function promedio(...notas) {
  if (notas.length === 0) return 0;

  return notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
}

console.log(promedio(8, 9, 10));
console.log(promedio());         


// APLICARTWOTIMES
function aplicarDosVeces(n, x) {
  return n(n(x));
}

console.log(aplicarDosVeces(n => n + 2, 3)); 