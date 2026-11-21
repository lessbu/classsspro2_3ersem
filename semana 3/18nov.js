// return: devolver y terminar 
// return corta la funcion en ese punto y entrega un valor. Sin return, la funcion devuleve undefined 

function sinRetorno (x) {x * 2;}
function conRetorno (x) {return x * 2;}
function signo(n) {
    if ( n < 0 ) return "negativo";
    if ( n === 0) return "cero";
return "positivo";
}

// sinretorno (4) - undefined 
// conretorno (4) - 8
// signo (-5) - "negativo"  
// signo (0) - "cero"
// signo (9)- "positivo"

// DONDE VIVE CADA VARIABLE 
// PARAMETROS : RECIBEN EL ARGUMENTO, EXISTEN SOLO DENTRO DE LA FUNCION
//LOCALES : DECLARADAS DENTRO. CADA LLAMADA CREA UNA NUEVA.
//EXTERNAS : DECLARADAS FUERA, LA FUNCION PUEDE LEERLAS Y CAMBIARLAS.

function contador() {let n = 0; n++; return n;} // cada vez que se llama, n es 0, luego 1 y termina.
console.log(contador(), contador(), contador()); // 1 1 1

//por valor y por referencia
function cambiar(x) {x = 99;}
let a = 5;
cambiar(a);
//a sigue siendo 5
function agregar(arr){ arr.push(99);}
const lista =  [1, 2];
agregar(lista);
//lista ahora es [1, 2, 99]
//mejor: devolver una copia
const agregar2 = (arr) => [...arr, 99];

//AMBITO: QUIEN VE A QUIEN
const global= "visible en todas partes ";
function probar(){
    const local = "solo aqui dentro"
    console.log(global, local);
}
probar();
console.log(local);
//RefereceError: local is not defined

//Dos errores silenciosos 
//sombreado 
const nombre = "global";
function f() {
    const nombre = "local";
    console.log(nombre); // "local"
}
f(); console.log(nombre); // " local global"
// global accidental 
function g() { resultado =42; }
g(); console.log(resultado); 
// number (con "use strict": referenceerror)
 

// Una funcion que recuerda 
function crearContador() {
    let cuenta = 0;
    return () => {cuenta++; return cuenta;};
}   
const c1 = crearContador();
const c2 = crearContador();
console.log(c1(), c1(), c1(), c2());        
//cuenta no es accesible desde fuera:
//solo se cambia mediante c1() o c2()

//var dentro de un ciclo
//con var
const fa = [];
for( var i = 0; i<3; i++) fa.push(() => i);
console.log(fa.map((f) => f()));
// [3, 3, 3]
//con let
const fb = [];
for(let j = 0; j < 3; j++) fb.push(() => j);
console.log(fb.map((f) => f()));
//[0, 1, 2]



