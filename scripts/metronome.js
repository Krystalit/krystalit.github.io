var s = document.getElementById("strong");
var w = document.getElementById("weak");
// var bpm = document.getElementById("bpm");
var bpm = 128;
var pause = 0;
var beat = 4;//3,2,1 etc. beat
var intervalTime = 60/bpm * 1000;

function cycle(){
    setTimeout("next();", 60/bpm * 1000 )
}


function next(){
    if (beat == 4){
        s.play();
        var beat = 1;
    }else{
        w.play();
        
    }
    cycle();
}

cycle();


// Function to play the audio
function playAudio() {
  s.play();
}

// Set up the interval to play the audio every intervalTime milliseconds
var interval = setInterval(playAudio, intervalTime);

// To stop the interval after a certain number of cycles (e.g., 5 cycles)
let cycles = 0;
const totalCycles = 5;

// Function to stop the interval after a certain number of cycles
function stopInterval() {
  cycles++;
  if (cycles === totalCycles) {
    clearInterval(interval);
  }
}