var listas =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(list, num){
    for(let i=0; i<list.length; i++){
        const suma= list[i];
        for(let j=i; j<list.length; j++){
             const suma2=list[j];
            var verificar = suma+suma2;

            if(verificar===num){
                console.log("True");
            }
            else{
                console.log("False");
            }
        }

    }
}

sumArray(listas, 5);