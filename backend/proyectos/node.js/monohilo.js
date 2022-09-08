console.log('hola mundo');

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    if (i === 5){
        var a = i * 7;
    }
}, 1000);
console.log('reinicio');