
var sUserAgent = navigator.userAgent.toLowerCase();
if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
  window.location.assign("mKrystab.html");             
}



function krystab() {
        var input = document.getElementById("theInput")
        var web = "https://www.baidu.com/s?ie=utf-8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input.value
     		window.location.assign(web);

}

const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', function() {
  menuItems.classList.toggle('active');
});