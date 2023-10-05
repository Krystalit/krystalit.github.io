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

function krystab() {
    var input = document.getElementById("theInput")
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
