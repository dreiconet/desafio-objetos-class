var primerObjeto = {
        numeroUno: 10, 
        numeroDos: 15,
        numeroTres: 20,
        numeroTrescientos: 350

}
console.log(primerObjeto.numeroDos);

var segundoObjeto ={
    ciudad:"Maracaibo",
    pais:"Venezuela",
    cantidadEstado:24,
    entidadFederal:1,
    lugarTuristico:["Falcon","Margarita","Bolivar"],
    faunaSilvestre:["Iguana","Morrocoy","Turpial"],
    
}
console.log(segundoObjeto.ciudad);
console.log(segundoObjeto.pais);
console.log(segundoObjeto.cantidadEstado);
console.log(segundoObjeto.entidadFederal);
console.log(segundoObjeto.lugarTuristico[2]);
console.log(segundoObjeto.faunaSilvestre[1]);

var tercerObjeto = {
    paisNacimiento:"Venezuela",
    nacionalidad:"venezolana",
        obtetoTercerUno: (obtetoTercerDos = {
            ciudadNacimiento:"maracaibo",
        })
}
console.log(tercerObjeto.nacionalidad);
console.log(tercerObjeto.obtetoTercerUno.ciudadNacimiento);

var cuartoObjeto = {
    paisOrigen:"venezuela",
}   
    
    function nacionalidad (paisOrigen){
        var correcto = paisOrigen;
            if (correcto == 0){
                return true;
            }else{
                return false;
            }

    }



console.log(cuartoObjeto.paisOrigen);
console.log(nacionalidad(0));

class Animal {
    constructor (nombre,pesoPromedio,tamanioAdulto,tiempoVida){
        this.nombre = nombre;
        this.pesoPromedio = pesoPromedio;
        this.tamanioAdulto = tamanioAdulto;
        this.tiempoVida = tiempoVida;
        
        }
        nombre = " "
        pesoPromedio = 0 + "kg"
        tamanioAdulto = 0 + "mts"
        tiempoVida = 0 + "años"
        
    }   

var especimen1 = new Animal("tigre",220,2.5,30);
var especimen2 = new Animal("avestruz",200,2.5,20);

console.log(especimen1);
console.log(especimen2);





