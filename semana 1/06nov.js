// Dar formato a un numero 
const x = 1234.5678
x.toFixed(2) // "1234.57"
typeof x.toFixed(2)// string 
Number(x.toFixed(2))// 1234.57
(255).toString(2) // 1111111111111
const peso = new Intl.NumberFormat("es-MX", {
    style: "currency", currency: "MXN"
});
peso.format(x) // $1,234.57

// REDONDEO 
Math.round (2.5) // 3 redondea a positivo 
Math.round (-2.5) // -2
Math.trunc (2.3) // quitar decimales 



