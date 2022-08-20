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

// var speed=30
//       r.innerHTML=rollimg.innerHTML
//       function Marquee1(){
      
//       if(r.offsetTop-roll.scrollTop<=0)& <60;& <60;
//       roll.scrollTop-=rollimg.offsetHeight
//       else{
//       roll.scrollTop++;
//       }
//       }
//       var MyMar1=setInterval(Marquee1,speed)
      
//       roll.onmouseover=function() {clearInterval(MyMar1)}
      
//       roll.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}

let rollImg = document.getElementById("rollimg");

rollImg.onclick = function(){
      let rollSrc = rollImg.getAttribute('src');
      if(rollSrc === 'images/eboard.jpg') {
        rollImg.setAttribute('src', 'images/desklaptop.jpg');
      } else{
        myImage.setAttribute('src', 'images/oldbooks.png');
      }
}