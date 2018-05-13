$(document).ready(function(){
    var now = new Date();
    var hora = now.getHours();
    var minuto = now.getMinutes();
    var segundo = now.getSeconds();

    // hora = 23;
    // minuto = 59;
    // segundo = 50;

    setInterval(function() {
        var horaDeg = ((hora/12) * 360)+75;
        var minDeg = ((minuto/60) * 360)+75;
        var segDeg = ((segundo/60) * 360)+75;

        $('.horas').css('transform','rotate('+horaDeg+'deg)');
        $('.minutos').css('transform','rotate('+minDeg+'deg)');
        $('.segundos').css('transform','rotate('+segDeg+'deg)');

        if((minuto >= 59) && (segundo >= 59)){
            hora = hora + 1
        }

        if((hora >= 23) && (minuto == 59) && (segundo == 59)){
            hora = 0;
        }

        if(segundo >= 59){
            minuto = minuto + 1
        }

        if(segundo < 59){
            segundo = segundo + 1;
        } else {
            segundo = 0;
        }

        if(minuto > 59){
            minuto = 0;
        }
    }, 1000);
});