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

Blink.onclick = function(){
  window.location.assign("https://www.bilibili.com");
}

let rollImg = document.getElementById("rollimg");
let rollImg2 = document.getElementById("rollimg2");



setInterval(function (){
	
},7000);
