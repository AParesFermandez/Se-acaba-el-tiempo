function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

function setClockRotation() {
    var time = getSecondsSinceStartOfDay();
    var secondsHand = document.getElementById('seconds');
    var minutesHand = document.getElementById('minutes');
    var hourHand = document.getElementById('hour');

    // Calcula los ángulos de rotación para las manecillas
    var secondsRotation = (time % 60) * 6; // 360 grados / 60 segundos = 6 grados por segundo
    var minutesRotation = ((time / 60) % 60) * 6; // 360 grados / 60 minutos = 6 grados por minuto
    var hoursRotation = ((time / 3600) % 12) * 30; // 360 grados / 12 horas = 30 grados por hora

    // Aplica las rotaciones a las manecillas
    secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
    minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
}

// Actualiza el reloj cada 1000 milisegundos (1 segundo)
setInterval(setClockRotation, 1000);
