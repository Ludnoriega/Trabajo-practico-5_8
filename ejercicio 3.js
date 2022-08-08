
function MiddleCharacter(string){
    const mitad =Math.round(string.length/2)-1;
    
    if(string.length % 2 == 0){
        var medio = string.charAt(mitad) + string.charAt(mitad + 1);
        console.log(medio);
        return medio;
    }
    if(string.length % 2 != 0){
        var medio = string.charAt(mitad);
        console.log(medio);
        return medio;
    }
}

MiddleCharacter("hola");
