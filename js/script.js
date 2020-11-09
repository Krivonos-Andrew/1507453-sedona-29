let page = document.querySelector('.popup');
let themeButton = document.querySelector('.btn_searsh');

themeButton.onclick = function() {
    page.classList.toggle('close_form');
    page.classList.toggle('popup_open');
};