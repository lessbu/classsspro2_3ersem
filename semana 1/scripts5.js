let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let par = 0;
for(let i = 0; i<lista.length; i++)
{
    par = lista[i] % 2;
    if(par === 0){
        console.log(lista[i] + "Numero par!");
    }
}