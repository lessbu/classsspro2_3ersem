function contarVocales(texto) {
    let modificado = texto.toLowerCase();// a vr aqui es para minusculas, su fuera upper es para mayusculas
    
    let vocales = modificado.split("").filter(letra => "aeiouáéíóú".includes(letra));  
    
    return vocales.length;
// aqui el return me va adevolver lo que queria 
}

console.log(contarVocales("Murciélago"));
console.log(contarVocales("PRÓXIMO"));    
    

function esPalindromo(texto) {
    let limpiar = texto.toLowerCase().replaceAll(" ", ""); 
    
   
    limpiar = limpiar
        .replace(/[á]/g, "a")
        .replace(/[é]/g, "e")
        .replace(/[í]/g, "i")
        .replace(/[ó]/g, "o")
        .replace(/[ú]/g, "u"); // rempplace todas las vocales de acentos, a sin acentos
    
 
    let invertido = limpiar.split("").reverse().join(""); 
    
    return limpiar === invertido;} //compara lo limpiar con lo que dice invertido ok? ok


console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Hola mundo"));