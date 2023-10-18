function calcular(){  
    let numero = document.getElementById('calcular').value;
    
    if(isNaN(numero)){
        alert("Error, intenta esscribiendo un número");
        return (document.getElementById('resultado').innerHTML='Error')
    }

    let resultado =1;
    for(var i=1; i<=numero; i++){
        resultado *= i;
    }
    document.getElementById('resultado').innerHTML= "El factorial es" + resultado;
}

