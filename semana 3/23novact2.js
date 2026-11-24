//dias del mes(mes, anio = 2026)
function diasDelMes(mes, anio = 2026) {
  switch (mes) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    case 2: {
      const esBisiesto =
        (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;

      if (esBisiesto) {
        return 29;
      } else {
        return 28;
      }
    }

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    default:
      return "Mes inválido";
  }
}
//calcular (a, op, b)

function calcular(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Aviso: no se puede dividir entre cero";
      } else {
        return a / b;
      }
    default:
      return "Aviso: operador desconocido";
  }
}
// letra(nota)
function letra(nota) {
  if (nota >= 80) {
    return "A";
  } else if (nota >= 70) {
    return "B";
  } else {
    return "C";
  }
}