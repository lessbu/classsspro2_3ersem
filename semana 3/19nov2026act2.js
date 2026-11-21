// tres funciones con ciclos 
// Suma digitos (n)
function sumdig (n) {
    let suma = 0;
     
    while (n > 0){
        suma += n % 10;
        n = Math.trunc (n/10)

    }
    return suma ;
}
console.log (sumdig(987654321));

// mcd (a,b)
function mcd (a, b) {
    while ( b !== 0){
        let div = b;
        b = a % b; 
        a = div;
    }
    return a;
}
console.log(mcd(64, 12));

// años para duplicar (monto, tasa = 7)
function aniosParaDuplicar(monto, tasa = 7) {
  let anios = 0;
  let actual = monto;

  while (actual < monto * 2) {
    actual *= 1 + tasa / 100;
    anios++;
  }

  return anios;
}

console.log(aniosParaDuplicar(1000));  
console.log(aniosParaDuplicar(500, 10)); 