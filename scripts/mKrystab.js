const setPage = document.querySelector(".setPage");
let searchboxText = document.getElementById("sInput");

if (!localStorage.getItem("storedSearch")) {
	setSearchboxText();
  } else {

	editedSearchboxText = localStorage.getItem("storedSearch");
	searchboxText.placeholder = editedSearchboxText;

}


function pageSet(){
	setPage.style.display="block";
}

function foldSet(){
	setPage.style.display="none";
}

function setSearchboxText() {

	let editedSearchboxText = prompt("请输入搜索框中文字");
	localStorage.setItem("storedSearch", editedSearchboxText);
	searchboxText.placeholder = editedSearchboxText;
  }