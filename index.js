let numero = 0;
do{
    numero = parseFloat(prompt("Ingresa un número a calcular:"));
    if(NaN(numero)){
        console.log("Error, intenta esscribiendo un número");
    }
} while(isNaN(numero));
function factorial(numero){
    let resultado = 1;
    for(var i=1; i<= numero; i++){
        resultado *=i;
    }
    return resultado;
}
console.log(factorial(numero));




