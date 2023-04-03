var textMezclar = $("#txtMezclar");

var mensajes=['Hola team bienvenidos a Reto de Maquetado por equipos','Estamos en el maquetado del SUPER equipo X','CHRIS','SAM','CHUY'];
var actual =0;

textMezclar.text(mensajes[0]);




setInterval(() => {
    actual++;
    if(actual>=mensajes.length){
        actual=0;
    }

    textMezclar.shuffleLetters({
        "text":mensajes[actual]
    });

}, 4000);