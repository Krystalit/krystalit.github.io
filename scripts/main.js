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