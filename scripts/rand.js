var rand1 = document.getElementById("rand1");
var rand2 = document.getElementById("rand2");


var rand = Math.floor(Math.random()*rand2+rand1);
var randTen = [Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1)];
var randStatus = 0;
var randTenStatus = 0;


function genTen(){
    if (randTenStatus == 0){

        document.getElementById("numLot").innerHTML=randTen;
    }
    else{

        var randTen = [Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
            Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
            Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
            Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1)];
        document.getElementById("numLot").innerHTML=randTen;
        var randTenStatus = 1;
    }
}

function generate() {
    const min = parseInt(document.getElementById('rand1').value);
    const max = parseInt(document.getElementById('rand2').value);

    if (min >= max) {
      document.getElementById('num').textContent = "Please ensure the min value is less than the max value.";
    } else {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      document.getElementById("num").innerHTML=randomNumber;
    }
  }