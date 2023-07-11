
function krystab() {
        var input = document.getElementById("theInput")
        var web = "https://www.baidu.com/s?ie=utf-8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input.value
     		window.location.assign(web);

}

const menuToggle = document.querySelector('.mMenu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', function() {
  menuItems.classList.toggle('active');
});