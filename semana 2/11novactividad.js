//segun yop comprueba si es primo

function esPrimo(n) {
  if (n < 2) return false;

  for (let divisor = 2; divisor < n; divisor++) {
    if (n % divisor === 0) return false;
  }

  return true;
}

let numero = Number(prompt("Escribe un número"));
alert(esPrimo(numero));
// convierte todo a c y luego a lo que le diga
function convertirTemperatura(valor, de, a) {
  if (de === "C" && a === "F") return valor * 9 / 5 + 32;
  if (de === "C" && a === "K") return valor + 273.15;
  if (de === "F" && a === "C") return (valor - 32) * 5 / 9;
  if (de === "F" && a === "K") return (valor - 32) * 5 / 9 + 273.15;
  if (de === "K" && a === "C") return valor - 273.15;
  if (de === "K" && a === "F") return (valor - 273.15) * 9 / 5 + 32;
  return valor;
}

let valor = Number(prompt("Escribe la temperatura"));
let de = prompt("¿De qué unidad? Escribe C, F o K").toUpperCase();
let a = prompt("¿A qué unidad? Escribe C, F o K").toUpperCase();

alert(convertirTemperatura(valor, de, a));














