function Search(){
	var input = prompt("Search on Baidu,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
	  		var web = "https://www.baidu.com/s?ie=utf-8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input
     		window.location.assign(web);
		}
	}


function Searen(){
	var inpen = prompt("Search on Baidu's encyclopedia,if you want to cancel,input nothing and confirm","");
		if (inpen != ""){
			var enweb = "https://baike.baidu.com/item/" + inpen
	   		window.location.assign(enweb);
		}
  }

function Searbil(){
	var input = prompt("Search on Bilibili,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
	  		var web = "https://search.bilibili.com/all?keyword=" + input
     		window.location.assign(web);
		}
	}

function Searwu(){
	var input = prompt("Search on Wuzhuiso,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
	  		var web = "https://www.wuzhuiso.com/s?ie=utf-8&fr=none&q=" + input
     		window.location.assign(web);
		}
	}

function Searbi(){
	var input = prompt("Search on Bing,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
	  		var web = "https://cn.bing.com/search?q=" + input
     		window.location.assign(web);
		}
	}

function Seardy(){
	var input = prompt("Search on Douyin,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
			  var web = "https://douyin.com/search/" + input
			 window.location.assign(web);
			}
}	

function Searkg(){
	var input = prompt("Search on Kugou,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
			  var web = "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=" + input
			 window.location.assign(web);
			}
}	

function Searqy(){
	var input = prompt("Search on QQ Music,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
			  var web = "https://y.qq.com/n/ryqq/search?w=" + input
			 window.location.assign(web);
			}
}	
function Searncm(){
	var input = prompt("Search on Netease Cloud Music,if you want to cancel,input nothing and confirm","");
	 if (input != ""){
			  var web = "https://music.163.com/#/search/m/?s=" + input
			 window.location.assign(web);
			}
}	
function krystab() {
    var input = document.getElementById("sInput")
    var web = "https://www.baidu.com/s?ie=utf-8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input.value

     	window.location.assign(web);

}

const searchPage = document.querySelector(".searchPage")


function page(){
	searchPage.style.display="block";

}

function foldSearch(){
	searchPage.style.display="none";
}
