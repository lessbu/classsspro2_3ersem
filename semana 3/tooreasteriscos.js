const filas = 7;

for (let fila = 1; fila <= filas; fila++) {
  let espacios = "";
  let asteriscos = "";

  for (let i = 1; i <= filas - fila; i++) {
    espacios += " ";
  }

  for (let i = 1; i <= fila * 2 - 1; i++) {
    asteriscos += "*";
  }

  console.log(espacios + asteriscos);
}