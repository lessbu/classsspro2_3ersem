//sirven para repetir y elegir sin copiar codigo

//for: se cuantas vueltas
for(let i = 1; i<=3; i++)console.log("vuelta", i);
//while: depende de algo que va cambiando
while(monto < 2000){monto *= 1.07; anios++;}


//repite mientras la condicion sea cierta
let n = 1; //dato inicial
while(n<=6){ //condicion
    console.log("n vale" + n); 
    n++; //avanza
}

//while cuando no sabes cuantas vueltas
//pasos hasta llegar a 1
let numero = 27;
let pasos = 0;
while(numero !== 1){
    numero = numero % 2 ===0
    ? numero / 2
    : numero * 3+1;
    pasos++;
}
console.log(pasos);

//años hasta duplicar el 7% anual
let monto = 1000;
let anios = 0;
while(monto<2000){
    monto *= 1.07;
    anios++;
}
console.log(anios);

// for cuando sabes cuantas veces; while cuando depende de lo que vaya aumentando. 

// primero hace despues pregunta 
// la condicion se evalua despues de cada vuelta, asi que el cuerpo corre al menos una vez.
// su uso tipico: pedir un dato y repetir hasta que sea valido.
// lleva punto y coma al final 
let k = 10;
do {
    console.log("k vale " + k);
    //-> k vale 10 
    k++;
} while (k < 5);// //ya es falsa
//en el navegador: pedir hasta que sea valida
let edad;
do{
    edad = number(prompt("edad(1 a 120"));
} while(Number.isNaN(edad) || edad < 1 || edad > 120);


let a = 0, b = 0;
while (a > 5) a ++; // el cuerpo corre 0 veces
do {b++;} while ( b>5); // corre 1 vez 
console.log(n,b); // -> 0 1
