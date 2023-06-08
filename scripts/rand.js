var rand = Math.floor(Math.random()*10+1);
var randstatus = 0;

function generate(){
    if (randstatus == 0){

        document.getElementById("num").innerHTML=rand;
    }
    else{

        var rand = Math.floor(Math.random()*10+1);
        document.getElementById("num").innerHTML=rand;
        var randstatus = 1;
    }

}