
var sUserAgent = navigator.userAgent.toLowerCase();
if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
  window.location.assign("mKrystab.html");             
}

const setPage = document.querySelector(".setPage");
let searchboxText = document.getElementById("sInput");

if (!localStorage.getItem("storedSearch")) {
	setSearchboxText();
  } else {

	editedSearchboxText = localStorage.getItem("storedSearch");
	searchboxText.placeholder = editedSearchboxText;

}

const menuToggle2 = document.querySelector('.menu-toggle2');
const menuItems2 = document.querySelector('.menu-items2');

menuToggle2.addEventListener('click', function() {
  menuItems2.classList.toggle('active');
});


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
