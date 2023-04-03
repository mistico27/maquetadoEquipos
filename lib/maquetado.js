var textMezclar = $("#txtMezclar");

var mensajes=['Hola team bienvenidos al Reto de Maquetado','Estoy en el maquetado de kodemia','Chris','Sam','Chuy'];
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