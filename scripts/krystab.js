
var sUserAgent = navigator.userAgent.toLowerCase();
if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
  window.location.assign("mKrystab.html");             
}


const menuToggle2 = document.querySelector('.menu-toggle2');
const menuItems2 = document.querySelector('.menu-items2');

menuToggle2.addEventListener('click', function() {
  menuItems2.classList.toggle('active');
});