let alarm = new Audio("alarm.mp3");
let timerStarted = false;

function startTimer() {
    if (!timerStarted) {
        let startTime = new Date().getTime();
        const fiveMinutes = 1000 * 60 * 5;
        let endTime = startTime + fiveMinutes;

        setInterval(() => {
            let timeLeft = endTime - new Date().getTime();

            if (timeLeft > 0) {
                let minutes = timeLeft / (1000 * 60);
                let seconds = (timeLeft / 1000) % 60;

                minutes = Math.floor(minutes);
                seconds = Math.round(seconds);
                seconds = ("0" + seconds).slice(-2);

                let text = "0" + minutes + " : " + seconds;
                /* timer.innerHTML = text; */
                document.getElementById("timer").innerHTML = text;
            } else {
                alarm.play();
                document.getElementById("timer").innerHTML = "00 : 00";
            }
        }, 1000);
        timerStarted = true;
    }
}
