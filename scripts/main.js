function displayDate(){
	document.getElementById("dat").innerHTML=Date();
}

function Search(){
	var input = prompt("Search on Baidu,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
	  var web = "https://www.baidu.com/s?ie=utf-8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input
      window.location.assign(web);
	 }
}

let Blink = document.getElementById("roll");
let MWlink = document.getElementById("roll1");
var LnkSta = 0;

Blink.onclick = function(){
  window.location.assign("https://www.bilibili.com");
}

MWlink.onclick = function(){
  window.location.assign("https://www.merriam-webster.com/");
}


let rollImg = document.getElementById("rollimg");
let rollImg2 = document.getElementById("rollimg2");

function ShowB(){
	Blink.style.display = "block";
	MWlink.style.display = "none";
}

function ShowMW(){
	Blink.style.display = "none";
	MWlink.style.display = "block";
}

function topImage(){

	if (LnkSta == 0){

		ShowB;
		var LnkSta = 1;}

	else{

		ShowMW;
		var LnkSta = 0;}

}

setInterval(topImage,7000);


