// return: devbolver y terminar 
// return corta la funcion en ese punto y entrega un valor. sIN RETURNS la funcion devuelve undefined.

function sinRetorno(x) {x*2;}
function conRetorno (x) {return x * 2;}
function signo(n) {
    if (n < 0) return "negativo";
    if (n === 0) return "cero";
    return "positivo";
}

//  sinRetorno(4) -> undefinded - conRetorno(4) -> 8 - signo(-3), signo(0), signo (9) - negativo cero positivo

// devolver varios valores 
function estadisticas(lista) {
    const minimo = Math.min(...lista);
    const maximo = Math.max(...lista);
    const promedio = lista.reduce((a, b) => a + b, 0) / lista.length;
    return { minimo, maximo, promedio: suma / lista.length };
}
const {minimo, maximo, promedio } =estadisticas ([4,8,6]);
console.log(minimo, maximo, promedio); // 4 8 6

// calcular o mostrar, no las dos 
// calcula (pura)
const conIva = (p) => Math.round(p*116)/100;

//muestra(efecto)
console.log("total" , conIVA(100));
// total 116

//trampa: salto de linea tras return
function mal(){
    return
    42;
}
//mal() -> undefined