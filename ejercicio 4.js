numeros = [];
numeros_pares = [];

function paresEinpares(num1, num2, string){
    if (num1 > 0){
        for(let i=0; i<num1; i++){
            numeros[i] = i;
            if(numeros[i] != 0 && numeros[i] % 2 == 0){
                numeros_pares[i] = numeros[i];
                if(numeros_pares[i] % num2 == 0){
                    console.log("String recibido: " + string);
                }
                if(numeros[i] != 0 && numeros[i] % num2 != 0){
                    console.log(numeros_pares[i]);
                }
            }
        }
        console.log("Los números desde " + num1 + " hasta el 0: " + numeros);
        console.log("Todos los números pares desde el 0 hasta " + num1 + ": " + numeros_pares);
    }
}

paresEinpares(4, 2, "a ve");