var timerOn = true;

var min = 0;
var sec = 0;
var mis = 0;
const turns = ['U ', 'U2', "U'", 'R ', 'R2', "R'", 'F ', 'F2', "F'", 'D ', 'D2', "D'", 'L ', 'L2', "L'", 'B ', 'B2', "B'"];
const timer = document.getElementById('timer');
const lasttime = document.getElementById('time');
const scramble = document.getElementById('scramble');

function startTimer(){
    if (timerOn == true) {
        timerOn = false;
        stopwatch();
    }
}
function stopTimer(){
    if (timerOn == false) {
        timerOn = true;
    }
}
function reset(){
    min = 0;
    sec = 0;
    mis = 0;
    timer.innerHTML= "00:00:000";
}

function stopwatch() {
    if (timerOn == false) {
        mis = parseInt(mis);
        sec = parseInt(sec);
        min = parseInt(min);

        mis = mis + 1;

        if (mis == 1000) {
            sec = sec +1;
            mis = 0;
        }
        if (sec == 60){
            sec = 0;
            min = min + 1;
        }
        if (mis < 10 || mis == 0){
            mis = "00" + mis;
        }
        if (mis < 100 || mis == 0){
            mis = "0" + mis;
        }
        if (sec < 10 || sec == 0){
            sec = "0" + sec;
        }
        if (min < 10 || min || 0){
            min = "0" + min;
        }
        timer.innerHTML= min + ":" + sec + ":" + mis;
        setTimeout("stopwatch()",1);
    }
}
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        if (timerOn == true){
            time.innerHTML=timer.textContent;
            reset();
            startTimer();
        }else if (timerOn == false){
            stopTimer();
            ScambleGen()
        }
      
    }
}


function ScambleGen(){
    Scam = ""; 
    last = "";
    len = Math.floor(Math.random() * (20 - 15)) + 15;
    for (let i = 0; i <= len;i++){
        move = turns[Math.floor(Math.random()*turns.length)];
        if (move.slice(0,1) != last) {
            Scam = Scam +" "+move;
            last=move.slice(0,1);
        } else if (move.slice(0,1) = last){
            i--;
        }
        
    }
    scramble.innerHTML = Scam;
}

scramble.onload = ScambleGen();