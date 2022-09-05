let mobile = document.querySelector('#mobile');
let button = document.querySelector('#button');
let navList = document.querySelector('#navList');
let mobileClose = document.querySelector('#mobileClose');
let blur = document.querySelector('#blur');

let mobileLink = document.querySelector('#listItem');
let mobileLink2 = document.querySelector('#listItem2');
let mobileLink3 = document.querySelector('#listItem3');
let mobileLink4 = document.querySelector('#listItem4');
let mobileLink5 = document.querySelector('#listItem5');

let linkMobile = document.querySelector('#mobileLink');
let linkMobile2 = document.querySelector('#mobileLink2');
let linkMobile3 = document.querySelector('#mobileLink3');
let linkMobile4 = document.querySelector('#mobileLink4');
let linkMobile5 = document.querySelector('#mobileLink5');


button.addEventListener('click', function () {

    blur.classList.add('blur');
    mobile.classList.add('mobile-open');
    navList.classList.add('mobile-vision');
    mobileClose.classList.add('vision');

    mobileLink.classList.add('mobile');
    mobileLink2.classList.add('mobile');
    mobileLink3.classList.add('mobile');
    mobileLink4.classList.add('mobile');
    mobileLink5.classList.add('mobile');
    linkMobile.classList.add('link-hover');
    linkMobile2.classList.add('link-hover');
    linkMobile3.classList.add('link-hover');
    linkMobile4.classList.add('link-hover');
    linkMobile5.classList.add('link-hover');

})

mobileClose.addEventListener('click', function () {

    mobile.classList.remove('mobile-open');
    navList.classList.remove('mobile-vision');
    mobileClose.classList.remove('vision');
    blur.classList.remove('blur');

    mobileLink.classList.remove('mobile');
    mobileLink2.classList.remove('mobile');
    mobileLink3.classList.remove('mobile');
    mobileLink4.classList.remove('mobile');
    mobileLink5.classList.remove('mobile');
    linkMobile.classList.remove('link-hover');
    linkMobile2.classList.remove('link-hover');
    linkMobile3.classList.remove('link-hover');
    linkMobile4.classList.remove('link-hover');
    linkMobile5.classList.remove('link-hover');
})

