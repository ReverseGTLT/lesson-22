let mobile = document.querySelector('#mobile');
let button = document.querySelector('#button');
let navList = document.querySelector('#navList');
let mobileClose = document.querySelector('#mobileClose')
let blur = document.querySelector('#blur')


button.addEventListener('click', function () {
    //mobile.classList.remove('header-navbar__list');
    blur.classList.add('blur');
    mobile.classList.add('mobile-open');
    navList.classList.add('mobile-vision');
    mobileClose.classList.add('vision');

})

mobileClose.addEventListener('click', function () {
    //mobile.classList.remove('header-navbar__list');
    mobile.classList.remove('mobile-open');
    navList.classList.remove('mobile-vision');
    mobileClose.classList.remove('vision');
    blur.classList.remove('blur');
})

