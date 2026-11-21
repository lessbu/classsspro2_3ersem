//A 
let n = 1;
while (n<=3) n++;
console.log (n);
// prediccion: imprime 4
//respuesta: si imprime 4


// B 
let k = 10, v = 0;
while (k>5) { v++; k++; }
console.log(v, k);
// prediccion: imprime 1 y 15
//respuesta: imprime 5 y 15 


// C
let p = 10, w = 0;
do { w++; p++; } while (p>5);
console.log(p, w);
// prediccion: imprime 1 y 15
// respuesta: el ciclo no termina 

// while - ejecuta el ciclo siempre y cuando se ejecuta la condicion, primero evalua la condicion y luego ejecuta el ciclo.
// do while - primero ejcuta y luego evalua la condicion. 

//D
let t =3; 
while (t>0) {console.log(t); t--; }
console.log("fin");
// prediccion: imprime de 3 para abajo  
//respuesta: 3, 2, 1, "fin"