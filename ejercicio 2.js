var desordenado = [15, 17, 22, 34, 75, 2, 11];
var minimo = desordenado[0];
function Min(list, string){
    for (let i=0; i<list.length; i++){
        if(string==="value"){
            if(minimo>list[i]){
                minimo=list[i];
                console.log("EL numero minimo de la lista es: "+ minimo);
            }
        }
        else{
            if(string==="index"){
                if(minimo>list[i]){
                    console.log("La posicion del numero minimo es: "+ i);
                }
            }
        }

    }
}

Min(desordenado, "index");