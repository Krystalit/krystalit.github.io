var rand = Math.floor(Math.random()*10+1);
var randTen = [Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1),Math.floor(Math.random()*10+1)];
var randStatus = 0;
var randTenStatus = 0;

function generate(){
    if (randStatus == 0){

        document.getElementById("num").innerHTML=rand;
    }
    else{

        var rand = Math.floor(Math.random()*10+1);
        document.getElementById("num").innerHTML=rand;
        var randStatus = 1;
    }

}

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