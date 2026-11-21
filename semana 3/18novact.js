// A 
let x = 1;
function f() {
    let x = 2; return x;
}
console.log(f(), x);

// prediccion: Creo que imprime 2 1, porque dentro de f se cambia x a 2
// lo que es: Imprime undefined 1


// B
function g() {
    total = 5;
}
g();
console.log(total); 
// prediccion: Creo que imprime 5, porque g() asigna ese valor a total
// lo que es: da un ReferenceError


// C 
const f5 = [];
for (let i = 0; i < 3; i++) {
    f5.push(() => i*10);                        
    console.log(f5.map((f) => f()));
}
// prediccion: imprime 0, luego 10, luego 20
// lo que es: si imprime 0, 10, 20


// D 
function crear () {
    let n = 10;
    return () => ++n;
}
const a = crear (). b = crear ();
console.log(a(), a(), b());
// prediccion: Supongo que 10 y 11 
// lo que es: imprime 11, 12, 11
