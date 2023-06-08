function refresh(){
    location.replace("paperbulb.html");

}

var Rand1 = Math.floor(Math.random()*10+1);
    var rand2 = Math.floor(Math.random()*10+1);
    var rand3 = Math.floor(Math.random()*10+1);

    document.getElementById("num1").innerHTML=Rand1;
    document.getElementById("num2").innerHTML=rand2;
    document.getElementById("num3").innerHTML=rand3;

 v
function check(){
        if (Rand1+rand2+rand3 == document.getElementById("answer").value){
            document.getElementById("message").innerHTML="GREAT";
        } else{
            document.getElementById("message").innerHTML="INCORRECT, or, is this program broken?";
        }

}

