function hola (nombre, miCallback) {
    setTimeout(function (){
        console.log('Hola '+ nombre);
        miCallback();
    }, 3000);
};

function adios (nombre, otroCallback){
    setTimeout(function (){
        console.log('Adios ', nombre);
        otroCallback();
    }, 8000);
};
function animal (nombre, animalcallback){
    setTimeout(() => {
        console.log('Animal', nombre);
        animalcallback();
    }, 4000);
}
function color(nombre, colorcallback){
    setTimeout(() => {
        console.log('Color', nombre)
        colorcallback();
    }, 5000);
}
function persona(nombre, nombres){
    setTimeout(() => {
        console.log('Persona', nombre)
        nombres();
    }, 6000);
}
function edad(nombre , edadcallback){
    setTimeout(() => {
        console.log('Edad', nombre)
        edadcallback();
    }, 7000);
}

console.log('hola mundo estoy intentando ser asíncrono');
hola('Arquero' , function (){
    adios('Arquero', function(){
        console.log('terminando proseso....');
    });
    animal('Perro', function(){
    })
    color('gris', function(){
    })
    persona('Alberto', function(){
    })
    edad(34, function(){
        console.log('su edad es de 34 años');
    })
});
