var btnMenu = document.querySelector('.menu-mobile')
var header = document.getElementById('header')

var headerHeight = header.clientHeight

btnMenu.onclick = function () {
    if (header.clientHeight === headerHeight) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function (e) {
        var isCloseMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isCloseMenu) {
            e.preventDefault();
        } else {
            header.style.height = null
        }
    }
}